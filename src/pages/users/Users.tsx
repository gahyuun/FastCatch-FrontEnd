import { useLocation } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./signup/Signup";

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
