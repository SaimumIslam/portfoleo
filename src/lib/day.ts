export function getDayDifference(dateString: string): number {
  const updated = new Date(dateString);
  const today = new Date();

  const diffTime = today.getTime() - updated.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
