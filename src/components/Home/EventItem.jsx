import { Link } from "react-router-dom";
import { Event, TextWrapper, ButtonWrapper, Button } from "./EventItem.styled";

const EventItem = ({ _id, title, description, date, organizer, onClick }) => {
  const dateNew = new Date(date).toDateString();
  return (
    <>
      <Event>
        <TextWrapper>
          <h3>Title: {title}</h3>
          <p>Description: {description}</p>
          <p>Organizer: {organizer}</p>
          <p>Date: {dateNew}</p>
        </TextWrapper>
        <ButtonWrapper>
          <Button type="button">
            <Link to="/register" state={{ id: _id }} onClick={onClick}>
              Register
            </Link>
          </Button>
          <Button type="button">
            <Link
              to={`/events/${_id}`}
              state={{ id: _id, title: title }}
              onClick={onClick}>
              View
            </Link>
          </Button>
        </ButtonWrapper>
      </Event>
    </>
  );
};

export default EventItem;
