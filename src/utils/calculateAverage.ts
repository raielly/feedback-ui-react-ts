import { Feedback } from "@/types/types";

export function calculateAverage(feedbacks: Feedback[]): number {
  if (feedbacks.length === 0) {
    return 0;
  }

  const sum = feedbacks.reduce((acc, cur) => acc + cur.selected, 0);
  const average = sum / feedbacks.length;

  return parseFloat(average.toFixed(1));
}
