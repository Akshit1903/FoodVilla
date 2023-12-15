import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-center">
      <h1 className="font-text text-lg">{user.name}</h1>
      <h2 className="p-1">{user.email}</h2>
    </div>
  );
};
export default Footer;
