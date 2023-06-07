export default function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let amPm = "AM";

  if (hours >= 12) {
    hours -= 12;
    amPm = "PM";
  }

  if (hours === 0) {
    hours = 12;
  }

  const hoursString = String(hours).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hoursString}:${minutes}:${seconds} ${amPm}`;
  return formattedDate;
}
