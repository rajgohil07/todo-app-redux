import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import { baseURL } from "../../Config/BaseURLConfig";
import { IoIosArrowBack } from "react-icons/io";
import "./Navbar.css";
import { useEffect } from "react";
import { fetchTodoData } from "../../ReduxStore/TodoReducer/TodoMiddlewareFunctions";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { todoData } = useSelector((data) => data.todo);

  // Call useEffect when component loads
  useEffect(() => {
    if (todoData.length === 0) {
      setTimeout(() => {
        dispatch(fetchTodoData());
      }, 1100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Navbar">
      <div className="NavbarWrapper">
        <ul>
          <li className="floatChanger">
            <Link onClick={() => navigate(-1)} title="Click to go back">
              <IoIosArrowBack />
            </Link>
          </li>
          <li className="floatChanger">
            <NavLink to={`${baseURL}/`}>Home</NavLink>
          </li>
          <li className="floatChanger">
            <NavLink to={`${baseURL}/analytics`}>Analytics</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
