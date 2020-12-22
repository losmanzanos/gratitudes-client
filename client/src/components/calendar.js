import React from "react";
import calendar from "../images/calendar.png";
import "./calendar.css";

export default function Calendar() {
  return (
    <div className="calendar">
      <img src={calendar} className="calendar-photo" alt="calendar" />
    </div>
  );
}
