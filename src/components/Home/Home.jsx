import { Container } from "../Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllEvents,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/selectors";
import { getAllEvents } from "../../redux/thunks";
import Loader from "../Loader/Loader";
import { TitleHome, FilterWrapper } from "./Home.styled";
import { Wrapper } from "../Register/Register.styled";
import EventList from "./EventList";
import FilterInput from "./FilterInput";

const inputDesc = [
  {
    id: "title",
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    id: "date",
    name: "date",
    label: "Date",
    type: "date",
  },
  {
    id: "organizer",
    name: "organizer",
    label: "Organizer",
    type: "text",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [padeNew, setPageNew] = useState(page);

  const [values, setValues] = useState({
    title: "",
    date: "",
    organizer: "",
  });

  let key = "";
  let value = "";

  useEffect(() => {
    dispatch(getAllEvents(padeNew));
  }, [dispatch, padeNew]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      page < totalPages
    ) {
      setPageNew((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);

  let elem = [];

  const handleChange = (e) => {
    key = e.target.name;
    value = e.target.value;
    setValues({ ...values, [e.target.name]: e.target.value });

    if (key === "date") {
      const date = new Date(value);
      const formattedDate = formatDate(date);
      events.forEach((el) => {
        if (
          el[key].toLowerCase().includes(formattedDate.toLowerCase().trim())
        ) {
          elem.push(el);
        }
      });
      console.log(elem);
    }

    events.forEach((el) => {
      if (el[key].toLowerCase().includes(value.toLowerCase().trim())) {
        elem.push(el);
      }
    });

    setFilteredEvents(elem);
    console.log(elem);
  };

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return (
    <section>
      <Container>
        <TitleHome>Upcoming events:</TitleHome>
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
            <EventList elem={filteredEvents} />
          </>
        )}
      </Container>
    </section>
  );
};

export default Home;
