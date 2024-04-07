import React from "react";
import MainNav from "../navigation/main-nav/main-nav";
import Login from "../login/login";
import { useSelector } from "react-redux";

export default function Landing() {
  const isLogin = useSelector((state) => state.counter.isLogin);
  if (!isLogin) return <Login />;
  return (
    <div>
      <MainNav />
    </div>
  );
}
