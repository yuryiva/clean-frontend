import EventForm from "./components/eventForm/EventForm";
import LogInForm from "./components/logInForm/LogInForm";
import RegisterForm from "./components/registerForm/RegisterForm";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MapSection from './components/mapSection/MapSection';
import MyEventsPage from './components/myEvents/MyEventsPage';
import CreateEvent from './components/createEvent/CreateEvent';
import JoinEvent from './components/joinEvent/JoinEvent';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route path="/login" render={(props) => <LogInForm {...props} />} />
        <Route path="/register" render={(props) => <RegisterForm {...props} />} />
        <Route path="/mapSection" render={(props) => <MapSection {...props} />} />        
        <Route path="/myEvents" render={(props) => <MyEventsPage {...props} />} />
        <Route path="/createEvent" render={(props) => <CreateEvent {...props} />} />
        <Route path="/joinEvent" render={(props) => <JoinEvent {...props} />} />        
      </Switch>

      {/* <LandingPage />      */}
      {/* <EventForm /> */}

    </div>
  );
}

export default App;
