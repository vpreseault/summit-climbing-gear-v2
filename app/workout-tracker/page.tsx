"use client";

import React, { useState, useEffect } from "react";
import AttemptList from "../components/AttemptList";
import Header from "../components/Header";
import "../globals.css";
import "../workoutTracker.css";

const WorkoutTracker = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [attempts, setAttempts] = useState<string[]>([]);

  useEffect(() => {
    const formatDate = (date: Date) => {
      return date.toLocaleDateString();
    };
    setFormattedDate(formatDate(currentDate));
  }, [currentDate]);

  const handlePrevDay = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
    setAttempts([]);
  };

  const handleNextDay = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
    setAttempts([]);
  };

  const handleAddAttempt = () => {
    setAttempts([...attempts, `Attempt ${attempts.length + 1}`]);
  };

  return (
    <div>
      <Header />
      <hr></hr>
      <div className="workout-tracker">
        <h1>Workout Tracker</h1>
        <div className="date-navigation">
          <button onClick={handlePrevDay}>&lt;</button>
          <h2>{formattedDate}</h2>
          <button onClick={handleNextDay}>&gt;</button>
        </div>
        <AttemptList attempts={attempts} onAddAttempt={handleAddAttempt} />
      </div>
    </div>
  );
};

export default WorkoutTracker;
