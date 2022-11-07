
/*react-bootstrap css dependency*/
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './common/header/Header';
import Main from './common/main/Main';
import getUserId from './service/SessionService';
import {useEffect} from 'react';



function App() {

  /**
   * Fetch userid, store in session, and use it to complete order placement flow.
   */
  useEffect(()=> {
    let userId = getUserId(true);
    window.sessionStorage.setItem('ecommvp_userid', userId);    
  }, []);


  return (
    <>
      <Header></Header>
      <Main></Main>       
    </>
  );
}

export default App;
