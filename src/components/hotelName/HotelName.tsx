import "./hotelName.scss";

const HotelName = ({ hotelName }: HotelNameProps) => {
  return <h5 className="hotel-name text-subtitle5">{hotelName}</h5>;
};

export default HotelName;

interface HotelNameProps {
  hotelName: string;
}
