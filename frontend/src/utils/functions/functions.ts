import { CalendarDate } from "@internationalized/date";

export const getTodayDate = (date: CalendarDate) => {
  return date.year + "-" + date.month.toString().padStart(2, '0') + "-" + date.day.toString().padStart(2, '0');
}

export const generateHours = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, '0');
    hours.push(`${hour}:00`);
  }
  return hours;
};

export const generateFrecuency = () => {
  const hours = [];
  for (let i = 1; i <= 12; i++) {
    hours.push(i);
  }
  return hours;
};

export const getRandomColor = () => {
  const colors = [
    'bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400',
    'bg-purple-400', 'bg-teal-400', 'bg-indigo-400', 'bg-orange-400', 'bg-gray-400'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export function getAge(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function getHoursAndMinute(date: string) {

  const [hours, minutes] = date.split(':');
  return `${hours}:${minutes}`;

}

export function getTimeElapsed(hora: string, fecha: string) {
  const [hours, minutes, seconds] = hora.split(':').map(Number);
  const [year, month, day] = fecha.split('-').map(Number);

  const targetDate = new Date(year, month - 1, day, hours, minutes, seconds);
  const now = new Date();

  const timeDifference = now.getTime() - targetDate.getTime();

  if (timeDifference < 0) {
    return 'Hoy a las ' + getHoursAndMinute(hora)
  }

  const minutesPassed = Math.floor(timeDifference / (1000 * 60));
  const hoursPassed = Math.floor(minutesPassed / 60);
  const daysPassed = Math.floor(hoursPassed / 24);

  if (daysPassed == 1) {
    return `Hace ${daysPassed} día`;
  } else if (daysPassed > 0) {
    return `Hace ${daysPassed} días`;
  }
  else if (hoursPassed > 0) {
    return `Hace ${hoursPassed} horas`
  } else {
    return `Hace ${minutesPassed} minutos`;
  }
}
