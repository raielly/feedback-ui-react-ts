import FeedbackContext from "@/context/FeedbackContext";
import { calculateAverage } from "@/utils/calculateAverage";
import { useContext } from "react";

const FeedbackStatus = () => {
  const { feedbacks } = useContext<any>(FeedbackContext);
  return (
    <>
      <div className='flex justify-between my-2'>
        <div>{feedbacks.length} Reviews</div>
        <div>Average Rating : {calculateAverage(feedbacks)}</div>
      </div>
    </>
  );
};

export default FeedbackStatus;
