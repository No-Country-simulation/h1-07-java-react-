import { useEffect, useState } from "react";
import { NotificationProps } from "../Home/Home_Patients";
import { fetchNotifications, getAllNotifications, markNotificationsAsRead } from "../../../../Context/AuthContext";
import { NotificationItem } from "../../../../components/NotificationItem";
import { Link } from "react-router-dom";
import { FlechaIconTwo } from "../../../../../public/icons/Icons";
import { SkeletonNotification } from "../../../../components/Skeletons";

const tabOptions = [
	{ tabName: 'No leídas' },
	{ tabName: 'Todos' }
];

export function Patient_Notification(): JSX.Element {
	const [activeTab, setActiveTab] = useState(tabOptions[0].tabName);
	const [unreadNotifications, setUnreadNotifications] = useState<NotificationProps[]>([]);
	const [allNotifications, setAllNotifications] = useState<NotificationProps[]>([]);
	const [loading, setLoading] = useState(false)
	const [visible, setVisible] = useState<boolean>(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const fetchUnreadNotifications = async () => {
		try {
			const notifications = await fetchNotifications();
			setUnreadNotifications(notifications);
		} catch (err: any) {
			console.error(err);
		}
	};

	const fetchAllNotifications = async () => {
		setLoading(true)
		try {
			setAllNotifications(await getAllNotifications())
		} catch (err: any) {
			console.error(err);
		} finally {
			setLoading(false)
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

		window.addEventListener("scroll", toggleVisible);

		return () => {
			window.removeEventListener("scroll", toggleVisible);
		};
	}, []);

	const readNotifications = () => {
		markNotificationsAsRead()
		fetchUnreadNotifications();
		fetchAllNotifications();
	}



	return (
		<main className="  scroll-smooth flex min-h-screen bg-gray-100 md:flex md:justify-center">
			<div className="w-full relative max-w-md min-h-screen p-8 bg-white rounded-lg shadow-lg max-md:m-auto">
				<div className=" mb-4 relative">
					<Link to={"/patient-home"} className=' absolute -left-0 hover:-translate-x-1 transition-all duration-300'>
						<FlechaIconTwo width={30} height={30} />
					</Link>
					<h6 className=" font-semibold text-2xl text-center" id="inicio-notificacion">Notificaciones</h6>
				</div>
				<section className="flex flex-col">
					<div className="bg-slate-200 p-2 rounded-md gap-4 w-2/4  flex justify-center items-center">
						{tabOptions.map((tab) => (
							<button
								key={tab.tabName}
								onClick={() => setActiveTab(tab.tabName)}
								className={`cursor-pointer px-2 py-1 rounded-md ${activeTab === tab.tabName ? "border-2 border-gray-400 bg-slate-50" : "bg-slate-200"}`}
							>
								{tab.tabName}
							</button>
						))}
					</div>
					<div className="mt-4">
						{activeTab === 'Todos' ? (
							<>
								{loading ? <SkeletonNotification /> : (
									<>
										{allNotifications.map((notification) => (
											<NotificationItem
												key={notification.horarioTomaId}
												hora={notification.hora}
												mensaje={notification.mensaje}
												leido={notification.leido}
												fecha={notification.fecha}
												horarioTomaId={notification.horarioTomaId}
											/>
										))}
									</>
								)}
							</>
						) : (
							unreadNotifications.length === 0 ? (
								<p className="mt-4 text-center">No hay notificaciones</p>
							) : (
								unreadNotifications.map((notification) => (
									<NotificationItem
										key={notification.horarioTomaId}
										hora={notification.hora}
										mensaje={notification.mensaje}
										leido={notification.leido}
										fecha={notification.fecha}
										horarioTomaId={notification.horarioTomaId}
									/>
								))
							)
						)}
						{activeTab === 'No leídas' && unreadNotifications.length > 0 && (
							<button
								onClick={readNotifications}
								className="border-2 py-2 m-auto flex px-4 mt-4 font-semibold text-center border-gray-400 rounded-md"
							>
								Marcar todas como leídas
							</button>
						)}
						{visible &&
							<a href="#inicio-notificacion" className=" rotate-180  z-30 bg-grays-400 border-2 items-center justify-center flex animate-bounce w-10 rounded-full h-10 fixed right-5 bottom-5">
								<span className=" rotate-90">
									<FlechaIconTwo width={40} height={40} />
								</span>
							</a>
						}
					</div>
				</section>

			</div>
		</main>
	);
}