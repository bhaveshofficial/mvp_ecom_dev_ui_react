/*react-bootstrap css dependency*/
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import Header from "./common/header/Header";
import Main from "./common/main/Main";
import getUserId from "./service/SessionService";
import { useEffect, useState } from "react";

function App() {

  const [userIdState, updateUserIdState] = useState({
    isReceived: false,
    val: 0,
  });
  /**
   * Fetch userid, store in session, and use it to complete order placement flow.
   */
  useEffect(() => {
    if (!userIdState?.isReceived) {
      let userId = getUserId(false);
      updateUserIdState({ isReceived: true, val: userId }); //error prone
    }
  }, []);

  return (
    <>
      <Header></Header>      
        <Main></Main>      
    </>
  );
}

export default App;
