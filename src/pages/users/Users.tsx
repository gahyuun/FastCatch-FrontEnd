import { useLocation } from "react-router-dom";
import { Login, Signup } from "..";

const Users = () => {

  const location = useLocation();
  const {pathname} = location;

  return (
    <>
      {pathname === "/login" ? <Login /> : <Signup /> }
    </>
  )
}

export default Users
