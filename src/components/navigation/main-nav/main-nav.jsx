import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../../redux/counter/counterSlice";

export default function MainNav() {
  const isLoggedIn = useSelector((state) => state.counter.isLogin);
  const dispatch = useDispatch();

  const renderLogin = () => {
    if (isLoggedIn)
      return <button onClick={() => dispatch(logoutUser())}>Logout</button>;
  };

  return (
    <nav>
      {renderLogin()}
      <br />
      <span>Counting Notiv</span>
    </nav>
  );
}
