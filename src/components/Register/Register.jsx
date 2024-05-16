import { useState } from "react";
import { Button } from "../Home/EventItem.styled";
import { Wrapper, Form, RatioFieldset } from "./Register.styled";
import Input from "./Input";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import { TitleHome } from "../Home/Home.styled";

const emailPattern = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
const inputDesc = [
  {
    id: "fullName",
    name: "fullName",
    label: "Full name",
    type: "text",
    placeholder: "Type your name",
    required: true,
    minLength: "3",
    maxLength: "10",
    error: "The name slould contain only letters, min 3 max 10 characers",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Type your email",
    required: true,
    pattern: emailPattern,
    error: "The email should be like: example@email.com",
  },
  {
    id: "dateOfBirth",
    name: "dateOfBirth",
    label: "Date of birth",
    type: "date",
    required: true,
    error: "This field is required",
  },
];

const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;

  const [isRegistered, setIsRegistered] = useState(false);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    know: "",
    participate: {
      eventId: id,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    setValues({ ...values, participate: id });
    console.log(values);
    dispatch(registerThunk(values));
    setIsRegistered(true);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <Container>
        <Button>
          <Link to="/event">Go back</Link>
        </Button>
        <Wrapper>
          {isRegistered ? (
            <Wrapper>
              <h2>Thank you for your registration</h2>
              <Button style={{ width: "100%" }}>
                <Link to="/">Back on the main page</Link>
              </Button>
            </Wrapper>
          ) : (
            <>
              <TitleHome>Event Registration</TitleHome>
              <Form onSubmit={handleSubmit}>
                {inputDesc.map((el) => (
                  <Input
                    key={el.id}
                    value={values[el.name]}
                    onChange={handleChange}
                    {...el}
                  />
                ))}
                <RatioFieldset>
                  <legend>Where do you hear about this event?</legend>
                  <input
                    type="radio"
                    id="social"
                    name="know"
                    value="social"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="social">Social Media</label>

                  <input
                    type="radio"
                    id="friend"
                    name="know"
                    value="friend"
                    onChange={handleChange}
                  />
                  <label htmlFor="friend">Friends</label>

                  <input
                    type="radio"
                    id="own"
                    name="know"
                    value="own"
                    onChange={handleChange}
                  />
                  <label htmlFor="own">Found Myself</label>
                </RatioFieldset>
                <Button type="submit">Register</Button>
              </Form>
            </>
          )}
        </Wrapper>
      </Container>
    </section>
  );
};

export default Register;
