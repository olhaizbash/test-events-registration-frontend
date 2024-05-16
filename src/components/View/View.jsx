import { useLocation } from "react-router";
import { Container } from "../Container";
import { EventListCSS, TitleHome, FilterWrapper } from "../Home/Home.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParticipantsThunk } from "../../redux/thunks";
import Participants from "./Participants";
import { selectIsLoading } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import { selectAllParticipants } from "../../redux/selectors";
import { Button } from "../Home/EventItem.styled";
import { Link } from "react-router-dom";
import { Wrapper } from "../Register/Register.styled";
import FilterInput from "../Home/FilterInput";

const inputDesc = [
  {
    id: "fullName",
    name: "fullName",
    label: "By name",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "By email",
    type: "text",
  },
];

const View = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id, title } = location.state;
  const participants = useSelector(selectAllParticipants);
  const isLoading = useSelector(selectIsLoading);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
  });

  const [filteredEvents, setFilteredEvents] = useState(participants);

  let key = "";
  let value = "";
  let elem = [];

  useEffect(() => {
    dispatch(getParticipantsThunk(id));
  }, [id, dispatch]);

  useEffect(() => {
    setFilteredEvents(participants);
  }, [participants]);

  const handleChange = (e) => {
    key = e.target.name;
    value = e.target.value;
    setValues({ ...values, [e.target.name]: e.target.value });

    participants.forEach((el) => {
      if (el[key].toLowerCase().includes(value.toLowerCase().trim())) {
        elem.push(el);
      }
    });

    setFilteredEvents(elem);
    console.log(elem);
  };

  return (
    <section>
      <Container>
        <Button>
          <Link to="/event">Go back</Link>
        </Button>
        <TitleHome>{title} participants</TitleHome>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Wrapper>
              <h3>Find by</h3>
              <FilterWrapper>
                {inputDesc.map((el) => {
                  return (
                    <FilterInput
                      key={el.id}
                      value={values[el.name]}
                      onChange={handleChange}
                      {...el}
                    />
                  );
                })}
              </FilterWrapper>
            </Wrapper>
            <EventListCSS>
              {filteredEvents?.map((el) => {
                return (
                  <Participants
                    key={el._id}
                    fullName={el.fullName}
                    email={el.email}
                  />
                );
              })}
            </EventListCSS>
          </>
        )}
      </Container>
    </section>
  );
};

export default View;
