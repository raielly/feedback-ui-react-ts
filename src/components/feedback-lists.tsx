import FeedbackContext from "@/context/FeedbackContext";
import { Feedback } from "@/types/types";
import { useContext } from "react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const FeedbackLists = () => {
  const { feedbacks, editFeedback, deleteFeedback } =
    useContext<any>(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedback yet.</p>;
  }

  return (
    <>
      <div className='space-y-4 mt-7'>
        {feedbacks
          .map((item: Feedback) => (
            <Card className='relative' key={item.id}>
              <div className='rounded-full bg-primary w-8 h-8 flex justify-center items-center absolute left-0 top-0 -ml-2 -mt-2'>
                {item.selected}
              </div>
              <CardHeader>{item.message}</CardHeader>
              <CardContent className='flex gap-2'>
                <Button
                  size={"sm"}
                  variant={"secondary"}
                  className='flex-grow'
                  onClick={() => editFeedback(item)}
                >
                  Edit
                </Button>
                <Button
                  size={"sm"}
                  variant={"destructive"}
                  className='flex-grow'
                  onClick={() => deleteFeedback(item.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))
          .reverse()}
      </div>
    </>
  );
};

export default FeedbackLists;
