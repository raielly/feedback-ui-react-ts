export interface Feedback {
  id: string;
  selected: number;
  message: string;
}

export interface FeedbackContextType {
  feedbacks: Feedback[];
  addFeedback: (feedbacks: Feedback) => void;
  feedbackEdit: (feedbacks: Feedback) => void;
  editFeedback: (feedbacks: Feedback) => void;
  updateFeedback: (id: string, feedbacks: Feedback) => void;
  deleteFeedback: (id: string) => void;
}
