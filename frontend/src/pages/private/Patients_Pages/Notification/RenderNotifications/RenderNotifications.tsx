import React, { useState } from 'react'
import { NotificationProps } from '../../Home/HomeView'
import { NotificationItem } from '../../../../../components/NotificationItem'

interface Notifications {
  notifications: NotificationProps[]
  reloadNotifications: () => void
}

export const RenderNotifications: React.FC<Notifications> = ({ notifications, reloadNotifications }) => {

  const [visibleReadCount, setVisibleReadCount] = useState<number>(5);
  const [showAllRead, setShowAllRead] = useState<boolean>(false);

  const handleShowMore = () => {
    setVisibleReadCount(notifications.length || 0);
    setShowAllRead(true);
  };

  return (
    <>
      {notifications.sort((a, b) => Number(b.leido) - Number(a.leido)).slice(0, visibleReadCount).map((notification) => (
        <NotificationItem
          key={notification.horarioTomaId}
          hora={notification.hora}
          mensaje={notification.mensaje}
          leido={notification.leido}
          fecha={notification.fecha}
          horarioTomaId={notification.horarioTomaId}
          reloadNotifications={reloadNotifications}
          idNotificacion={notification.idNotificacion}
        />
      ))}
      {notifications.length > 5 && !showAllRead && (
        <button
          onClick={handleShowMore}
          className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400"
        >
          Ver Todos
        </button>
      )}
    </>
  )
}
