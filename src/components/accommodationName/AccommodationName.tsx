import "./accommodationName.scss";

const AccommodationName = ({ hotelName }: HotelNameProps) => {
  return <h5 className="hotel-name text-subtitle5">{hotelName}</h5>;
};

export default AccommodationName;

interface HotelNameProps {
  hotelName: string;
}
