import { Partisipant } from "../Home/EventItem.styled";

const Participants = ({ fullName, email }) => {
  return (
    <Partisipant>
      <p>{fullName}</p>
      <p>{email}</p>
    </Partisipant>
  );
};

export default Participants;
