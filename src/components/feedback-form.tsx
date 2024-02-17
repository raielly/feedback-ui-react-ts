import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FeedbackContext from "@/context/FeedbackContext";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import RatingSelect from "./rating-select";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const FeedbackForm = () => {
  const [selected, setSelected] = useState<number>(5);
  const [message, setMessage] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext<any>(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setMessage(feedbackEdit.item.message);
      setSelected(feedbackEdit.item.selected);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = +e.target.value;
    setSelected(inputValue);
  };

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (e.target.value !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }

    setMessage(e.target.value);
  };

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: uuidv4(),
      selected,
      message,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setBtnDisabled(true);
    setSelected(5);
    setMessage("");
    console.log("trigger");
  };

  const handleCancelUpdate = () => {
    setBtnDisabled(true);
    setSelected(5);
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>How would you rate our service?</CardTitle>
          </CardHeader>
          <CardContent>
            <RatingSelect selected={selected} handleChange={handleChange} />
            <Textarea
              placeholder='Type your message here.'
              className='mt-4'
              onChange={handleTextChange}
              value={message}
            />
          </CardContent>
          <CardFooter>
            {feedbackEdit.edit === true ? (
              <div className='w-full flex gap-2'>
                <Button className='grow' size={"lg"} disabled={btnDisabled}>
                  Update
                </Button>
                <Button
                  onClick={() => handleCancelUpdate()}
                  variant={"ghost"}
                  size={"lg"}
                  disabled={btnDisabled}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button className='w-full' size={"lg"} disabled={btnDisabled}>
                Send
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </>
  );
};

export default FeedbackForm;
