import React, { useContext, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import bootstrapPlugin from "@fullcalendar/bootstrap";
// import EditEntry from "../EditEntry/EditEntry";
import "./calendar.css";

import GratitudeApiService from "../../services/gratitude-api-service";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import GratitudeContext from "../../contexts/GratitudeContext";

export default function Calendar(props) {
  useEffect(async () => {
    const data = await GratitudeApiService.getGratitudes();
    context.setGratitudes(data);
  }, []);
  // const [showEditEntry, setShowEditEntry] = useState(false);
  const context = useContext(GratitudeContext);
  const handleClick = (data) => {
    console.log(data);
    props.history.push("/gratitude/" + data.event._def.publicId);
  };

  console.log(props.gratitudes);
  const events = context.gratitudes.map((gratitude) => {
    return {
      id: gratitude.id,
      title: gratitude.thankful_for,
      date: gratitude.date_created,
    };
  });

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        themeSystem="bootstrap"
        initialView="dayGridMonth"
        events={events}
        eventClick={handleClick}
        displayEventTime={false}
      />
    </div>
  );
}
