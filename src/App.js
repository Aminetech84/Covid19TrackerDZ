import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/App.css';
import './css/bootstrap-material-design.min.css';
import Yesturday from './Components/Yesturday';
import Today from './Components/Today';



function App() {

  return (
    <div className="container-fluid">
      <Router>
        <div className="d-flex justify-content-around">
          <Link to="/" className="btn p-auto mt-1 bg-secondary btn-light justify-content-around" >Now</Link>
          <Link to="/yesturday" className="btn p-auto mt-1 bg-secondary btn-light justify-content-around" >Yesturday</Link>
        </div>

        <Switch>
          
          <Route path="/yesturday">
            <Yesturday country={'Algeria'} />
          </Route>

          <Route path="/">
            <Today country={'Algeria'} />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;