import { useState } from "react";
import AuditionLanding from "../components/AuditionLanding";
import AuditionLoggedIn from "../components/AuditionLoggedIn";
export default function Audition() {
  const [loggedIn, setLoggedIn] = useState(false);
  return <div>{loggedIn ? <AuditionLanding /> : <AuditionLoggedIn />}</div>;
}
