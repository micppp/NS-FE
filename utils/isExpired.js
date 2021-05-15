export default function isExpired(end) {
  if (end === undefined) return;

  const today = new Date();
  const endDate = new Date(end);

  if (endDate > today) {
    return false;
  }

  return true;
}
