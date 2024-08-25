
import { useState, useEffect } from "react"
import Options from "../option/Options";
import Feedback from "../feedback/Feedback";
import Description from "../description/Description";
import Notification from "../Notification/Notification";

export default function App() {



  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });


  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedback');
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options onLeaveFeedback={updateFeedback} onResetFeedback={resetFeedback} totalFeedback={totalFeedback} />


      {totalFeedback > 0 ? (<Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />) : (<Notification />)}
    </div>
  );
};


