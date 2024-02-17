import { Feedback, FeedbackContextType } from "@/types/types";
import { createContext, useEffect, useState } from "react";

export const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [feedbackEdit, setFeedbackEdit] = useState<any>({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async (): Promise<void> => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const data: Feedback[] = await response.json();
    setFeedbacks(data);
  };

  const addFeedback = async (feedback: Feedback): Promise<void> => {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });
    const data: Feedback = await response.json();
    setFeedbacks([...feedbacks, data]);
  };

  const updateFeedback = async (
    id: string,
    updItem: Feedback
  ): Promise<void> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data: Feedback[] = await response.json();
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { ...item, ...data } : item))
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

  const deleteFeedback = async (id: string): Promise<void> => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
      });
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
