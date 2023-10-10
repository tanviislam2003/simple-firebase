import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <center>
        <Header></Header>
        <Outlet></Outlet>
      </center>
    </div>
  );
};

export default Main;
