import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Login from "./components/LoginUser/registerLoginComponent";
import Reservation from "./components/Reservation/reservation";
import SuccessReservation from "./components/Reservation/successReservation";
import LoginAdministrator from "./components/LoginAdministrator/LoginAdministrator";
import FlightRepository from "./Repository/FlightRepository/FlightRepository";
import UserRepository from "./Repository/UserRepository/UserRepository";
import Home from "./components/Home/home";
import Administrator from "./components/Administrator/administrator";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flights : [],
      emails: [],
      loggedUser: null
    }
  }

  componentDidMount() {
    FlightRepository.fetchAllFlights().then((data)=>{
        this.setState( {
                flights:data.data
            }
        )
    });
  }

  async  getJSONAsync(){

    let json = await UserRepository.findUserById(localStorage.getItem("currentUserID"));

    return json;
  }

  async userOrAdministrator () {
    let emails = ["draganarsovski9@gmail.com","darsovski97@gmail.com","proba1@gmail.com"]
    let bool = null;
    await this.getJSONAsync().then(
        function (result) {
          bool =  emails.includes(result.data.email);
        }
    )
    return bool;
  }

  render() {
    return (
        <Router>
          <div className="App">
            {/*<NavigationBar/>*/}
            <Switch>
              <Route path={"/home"} exact component={Home} />
              <Route path={"/about"} exact component={About} />
              <Route path={"/contact"} exact component={Contact} />
              <Route  path="/reservation" render={(props) => {return localStorage.getItem("currentUserID") ? <Reservation {...props}/> : <Login {...props}  />}}/>
              <Route  path="/administration" render={(props) => {return localStorage.getItem("currentAdminID") ? <Administrator {...props}/> : <LoginAdministrator {...props}  />}}/>
              <Route path={"/success"} exact component={SuccessReservation}/>
              <Redirect to={"/home"}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;
