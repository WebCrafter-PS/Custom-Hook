/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { useContext } from "react";
import { StarContext } from "../../utility/context";
import { useSelector } from "react-redux";

const Navigation = ({ lift }) => {
  const context = useContext(StarContext);
  console.log("conetxt in Navigate", context);

  const storeData = useSelector(store=> store.star.starred);

  const handleDClick = () => {
    //send data to parent
    lift("State in Child1");
  };
  return (
    <div className="navigate" onDoubleClick={handleDClick}>
      <ul className="list">
        <li>
          <Link to="/stared">Starred</Link>
        </li>
        <li>
          <Link to="/country">Country</Link>
        </li>
        <li>
          <Link to="/hook">Todo</Link>
        </li>
        <li>Stars :  {storeData.length}</li>
      </ul>
    </div>
  );
};
export default Navigation;
