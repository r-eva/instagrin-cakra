import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/counter/counterSlice";
import { redirect } from "react-router-dom";

export default function MainNav() {
  const isLogin = useSelector((state) => state.counter.isLogin);
  const dispatch = useDispatch();
  const onUserLogout = () => {
    dispatch(logoutUser());
    return redirect("/login");
  };
  return (
    <nav>
      <button onClick={onUserLogout}>Logout</button>
      <br />
      <span>Counting Notiv</span>
    </nav>
  );
}
