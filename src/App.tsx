import { useEffect } from "react";
import "./App.css";
import Main from "./Layout/Main";
import { useAppDispatch } from "./Redux/hooks";
import { setCredentials } from "./Redux/features/auth/authSlice";

function App() {
  //Get Credential and set user globally
  // Also Stops reload user clear
  const dispatch = useAppDispatch();
  const userCredentials = localStorage.getItem("setCredentials") || null;

  useEffect(() => {
    if (userCredentials) {
      const credentials = JSON.parse(userCredentials);
      dispatch(setCredentials(credentials));
    }
  }, [dispatch, userCredentials]);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
