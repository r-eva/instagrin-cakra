import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../../redux/counter/counterSlice";

export default function MainNav() {
  const isLogin = useSelector((state) => state.counter.isLogin);
  const dispatch = useDispatch();

  const renderLogin = () => {
    if (isLogin)
      return <button onClick={() => dispatch(logoutUser())}>Logout</button>;
    return <button onClick={() => dispatch(loginUser())}>Login</button>;
  };

  return (
    <nav>
      {renderLogin()}
      <br />
      <span>Counting Notiv</span>
    </nav>
  );
}
