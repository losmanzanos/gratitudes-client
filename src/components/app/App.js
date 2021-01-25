import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../header/header";
import Calendar from "../calendar/calendar";
import Entry from "../entry/entry";
import GratitudeError from "../error/Error";
import EditEntry from "../EditEntry/EditEntry";
import About from "../About/About";

import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import PrivateRoute from "../Utils/PrivateRoute";

import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";

import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import IdleService from "../../services/idle-service";

import { GratitudeProvider } from "../../contexts/GratitudeContext";

import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <GratitudeError>
      <GratitudeProvider>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/gratitude/:id" component={EditEntry} />
            <PublicOnlyRoute path="/login" component={LoginPage} />
            <PublicOnlyRoute path="/register" component={RegistrationPage} />
            <PrivateRoute
              path="/gratitude"
              component={(routerprops) => (
                <div>
                  <Calendar history={routerprops.history} />
                  <Entry showForm={showForm} setShowForm={setShowForm} />
                </div>
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </GratitudeProvider>
    </GratitudeError>
  );
}

export default App;
