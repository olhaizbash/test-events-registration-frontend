import { Link } from "react-router-dom";
import { Event, TextWrapper, ButtonWrapper, Button } from "./EventItem.styled";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/reducer";

const EventItem = ({ _id, title, description, date, organizer }) => {
  const dispatch = useDispatch();

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
          <Button type="button" onClick={() => dispatch(setPage())}>
            <Link to="/register" state={{ id: _id }}>
              Register
            </Link>
          </Button>
          <Button type="button" onClick={() => dispatch(setPage())}>
            <Link to={`/events/${_id}`} state={{ id: _id, title: title }}>
              View
            </Link>
          </Button>
        </ButtonWrapper>
      </Event>
    </>
  );
};

export default EventItem;
