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