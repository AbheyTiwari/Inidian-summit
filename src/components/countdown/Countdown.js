import React, { useState, useEffect } from "react";
import "./countdown.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Set a fixed event date

  useEffect(() => {
    const eventDate = new Date("2025-01-12T00:00:00Z");
    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = eventDate - now;

      if (timeDiff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        ["days-ring", "hours-ring", "minutes-ring", "seconds-ring"].forEach(
          (id) => updateProgress(id, 0)
        );
        return;
      }

      const totalDays = Math.ceil(
        (eventDate - new Date("2023-01-01T00:00:00Z")) / (1000 * 60 * 60 * 24)
      ); // Total days in range
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });

      updateProgress("days-ring", days / totalDays);
      updateProgress("hours-ring", hours / 24);
      updateProgress("minutes-ring", minutes / 60);
      updateProgress("seconds-ring", seconds / 60);
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateProgress = (elementId, progress) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - progress);
    document.getElementById(
      elementId
    ).style.strokeDasharray = `${circumference} ${circumference}`;
    document.getElementById(elementId).style.strokeDashoffset = offset;
  };

  return (
    <div className="countdown">
      <div className="progress-container">
        <svg
          className="progress-ring"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <circle
            className="progress-ring__circle progress-ring__background"
            stroke="#e6e6e6"
            cx="60"
            cy="60"
            r="50"
          />
          <circle
            id="days-ring"
            className="progress-ring__circle progress-ring__bar"
            cx="60"
            cy="60"
            r="50"
          />
          <text
            x="60"
            y="65"
            textAnchor="middle"
            transform="rotate(90, 60, 60)"
            className="progress-text"
            id="days"
          >
            {timeLeft.days}
          </text>
        </svg>
        <p>Days</p>
      </div>
      <div className="progress-container">
        <svg
          className="progress-ring"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <circle
            className="progress-ring__circle progress-ring__background"
            stroke="#e6e6e6"
            cx="60"
            cy="60"
            r="50"
          />
          <circle
            id="hours-ring"
            className="progress-ring__circle progress-ring__bar"
            cx="60"
            cy="60"
            r="50"
          />
          <text
            x="60"
            y="65"
            textAnchor="middle"
            transform="rotate(90, 60, 60)"
            className="progress-text"
            id="hours"
          >
            {timeLeft.hours}
          </text>
        </svg>
        <p>Hours</p>
      </div>
      <div className="progress-container">
        <svg
          className="progress-ring"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <circle
            className="progress-ring__circle progress-ring__background"
            stroke="#e6e6e6"
            cx="60"
            cy="60"
            r="50"
          />
          <circle
            id="minutes-ring"
            className="progress-ring__circle progress-ring__bar"
            cx="60"
            cy="60"
            r="50"
          />
          <text
            x="60"
            y="65"
            textAnchor="middle"
            transform="rotate(90, 60, 60)"
            className="progress-text"
            id="minutes"
          >
            {timeLeft.minutes}
          </text>
        </svg>
        <p>Minutes</p>
      </div>
      <div className="progress-container">
        <svg
          className="progress-ring"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <circle
            className="progress-ring__circle progress-ring__background"
            stroke="#e6e6e6"
            cx="60"
            cy="60"
            r="50"
          />
          <circle
            id="seconds-ring"
            className="progress-ring__circle progress-ring__bar"
            cx="60"
            cy="60"
            r="50"
          />
          <text
            x="60"
            y="65"
            textAnchor="middle"
            transform="rotate(90, 60, 60)"
            className="progress-text"
            id="seconds"
          >
            {timeLeft.seconds}
          </text>
        </svg>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
