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
import { setPage } from "../../redux/reducer";

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
  const initialPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const [values, setValues] = useState({
    title: "",
    date: "",
    organizer: "",
  });

  useEffect(() => {
    dispatch(getAllEvents(currentPage));
  }, [dispatch, currentPage]);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      currentPage < totalPages
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, totalPages]);

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);

  let elem = [];

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
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
    }

    events.forEach((el) => {
      if (el[key].toLowerCase().includes(value.toLowerCase().trim())) {
        elem.push(el);
      }
    });

    setFilteredEvents(elem);
  };

  const handleSetPage = () => {
    setCurrentPage(1);
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
            <EventList elem={filteredEvents} onClick={handleSetPage} />
          </>
        )}
      </Container>
    </section>
  );
};

export default Home;
