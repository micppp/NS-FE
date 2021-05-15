export default function formatDate(date) {
  if (date === null) return;

  const event = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return event.toLocaleString('en-GB', options);
}
