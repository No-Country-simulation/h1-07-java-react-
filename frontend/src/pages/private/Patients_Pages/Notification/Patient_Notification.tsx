import { useEffect, useState } from "react";
import { NotificationProps } from "../Home/Home_Patients";
import { API_URL } from "../../../../api/api";
import { fetchNotifications, markNotificationsAsRead } from "../../../../Context/AuthContext";
import { NotificationItem } from "../../../../components/NotificationItem";

const tabOptions = [
	{ tabName: 'No leídas' },
	{ tabName: 'Todos' }
];

export function Patient_Notification(): JSX.Element {
	const [activeTab, setActiveTab] = useState(tabOptions[0].tabName);
	const [unreadNotifications, setUnreadNotifications] = useState<NotificationProps[]>([]);
	const [allNotifications, setAllNotifications] = useState<NotificationProps[]>([]);

	const fetchUnreadNotifications = async () => {
		try {
			const notifications = await fetchNotifications();
			setUnreadNotifications(notifications);
		} catch (err: any) {
			console.error(err);
		}
	};

	const fetchAllNotifications = async () => {
		const token = localStorage.getItem('TOKEN_KEY');
		if (token) {
			try {
				const res = await fetch(`${API_URL}/notificaciones-totales`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						'Authorization': `Bearer ${token}`
					},
				});

				if (!res.ok) {
					throw new Error("Ocurrió un error");
				}

				const data = await res.json();
				setAllNotifications(data);
			} catch (err: any) {
				console.error(err);
			}
		}
	};

	useEffect(() => {
		fetchUnreadNotifications();
		fetchAllNotifications();

		const storedNotification = localStorage.getItem('PATIENT-NOTIFICATION');
		if (storedNotification) {
			const savedNotifications: NotificationProps[] = JSON.parse(storedNotification);
			setUnreadNotifications(savedNotifications);
		}
	}, []);

	const readNotifications = () => {
		markNotificationsAsRead()
		fetchUnreadNotifications();
		fetchAllNotifications();
	}



	return (
		<main className="flex min-h-screen bg-gray-100 md:flex md:justify-center">
			<div className="w-full max-w-md min-h-screen p-8 bg-white rounded-lg shadow-lg max-md:m-auto">
				<div className="flex items-center justify-between max-md:flex max-md:flex-col">
					<h6 className="text-center font-semibold text-2xl">Notificaciones</h6>
					<div className="bg-slate-200 flex p-2 rounded-md gap-4">
						{tabOptions.map((tab) => (
							<button
								key={tab.tabName}
								onClick={() => setActiveTab(tab.tabName)}
								className={`${activeTab === tab.tabName ? "border-2 border-gray-400 bg-slate-50" : "bg-slate-200"} cursor-pointer px-2 py-1 rounded-md`}
							>
								{tab.tabName}
							</button>
						))}
					</div>
				</div>
				<section className="flex flex-col items-center">
					{activeTab === 'Todos' ? (
						allNotifications.map((notification) => (
							<NotificationItem
								key={notification.horarioTomaId}
								hora={notification.hora}
								mensaje={notification.mensaje}
								leido={notification.leido}
								fecha={notification.fecha}
								horarioTomaId={notification.horarioTomaId}
							/>
						))
					) : unreadNotifications.length === 0 ? (
						<p className="mt-4">No hay notificaciones</p>
					) : (
						unreadNotifications.map((notification) => (
							<NotificationItem
								leido={notification.leido}
								key={notification.horarioTomaId}
								hora={notification.hora}
								mensaje={notification.mensaje}
								fecha={notification.fecha}
								horarioTomaId={notification.horarioTomaId}
							/>
						))
					)}
					{activeTab === 'No leídas' && unreadNotifications.length > 0 && (
						<button onClick={readNotifications} className="border-2 py-2 px-4 mt-4 font-semibold text-center border-gray-400 rounded-md">
							Marcar todas como leídas
						</button>
					)}
				</section>
			</div>
		</main>
	);
}