import { CalendarDate } from "@internationalized/date";

export const getTodayDate = (date: CalendarDate) => {
  return date.year + "-" + date.month.toString().padStart(2, '0') + "-" + date.day;
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

export function getAge(dateString:string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}