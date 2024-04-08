import MainNav from "../navigation/main-nav/main-nav";
import Login from "../login/login";
import { useSelector } from "react-redux";

export default function Landing() {
  const isLoggedIn = useSelector((state) => state.counter.isLogin);
  const landingPage = !isLoggedIn ? <Login /> : <MainNav />;
  return <>{landingPage}</>;
}
