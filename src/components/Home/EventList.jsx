import { EventListCSS } from "./Home.styled";
import EventItem from "./EventItem";

const EventList = ({ elem }) => {
  return (
    <EventListCSS>
      {elem?.map(({ _id, title, description, date, organizer }) => {
        return (
          <EventItem
            key={_id}
            title={title}
            description={description}
            date={date}
            organizer={organizer}
            _id={_id}
          />
        );
      })}
    </EventListCSS>
  );
};

export default EventList;
