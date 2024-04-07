import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../../redux/counter/counterSlice";

export default function MainNav() {
  const isLogin = useSelector((state) => state.counter.isLogin);
  const dispatch = useDispatch();

  return (
    <nav>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
      <br />
      <span>Counting Notiv</span>
    </nav>
  );
}
