import { Feedback, FeedbackContextType } from "@/types/types";
import { createContext, useEffect, useState } from "react";

export const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "feedback-list";

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed || [];
      } catch (err) {
        console.error("Error parsing JSON:", err);
        return [];
      }
    }
    return [];
  });
  const [feedbackEdit, setFeedbackEdit] = useState<any>({
    item: {},
    edit: false,
  });

  useEffect(() => {
    //fetchFeedback();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (feedback: Feedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };

  const updateFeedback = (id: string, updItem: Feedback) => {
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const editFeedback = (feedback: Feedback) => {
    setFeedbackEdit({
      item: feedback,
      edit: true,
    });
  };

  const deleteFeedback = (id: string) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
