import "./roomName.scss";

const RoomName = ({ roomName }: RoomNameProps) => {
  return <h3 className="room-name text-subtitle3">{roomName}</h3>;
};

export default RoomName;

interface RoomNameProps {
  roomName: string;
}
