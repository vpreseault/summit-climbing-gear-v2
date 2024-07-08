import React from "react";

interface AttemptListProps {
  attempts: string[];
  onAddAttempt: () => void;
}

const AttemptList: React.FC<AttemptListProps> = ({
  attempts,
  onAddAttempt,
}) => {
  return (
    <div className="attempt-list">
      <button onClick={onAddAttempt}>Add Climbing Attempt</button>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>{attempt}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttemptList;
