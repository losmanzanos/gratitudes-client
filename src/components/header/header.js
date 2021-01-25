import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { Hyph } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import loading from "../images/loading.gif";
import "./header.css";
import GratitudeContext from "../../contexts/GratitudeContext";

export default class Header extends React.Component {
  state = {
    loading: true,
    text: null,
    author: null,
  };

  static contextType = GratitudeContext;

  async componentDidMount() {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const data = await response.json();
    const randomObject = Math.floor(Math.random() * data.length);
    const text = data[randomObject].text;
    const author = data[randomObject].author;

    this.setState({
      loading: false,
      text: text,
      author: author,
    });
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setAuthToken(null);
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <NavLink exact to="/" className="hover" activeClassName="active">
          Home
        </NavLink>
        <> | </>
        <NavLink to="/gratitude" className="hover" activeClassName="active">
          Gratitude
        </NavLink>
        <> | </>
        <Link onClick={this.handleLogoutClick} to="/" className="hover">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <NavLink exact to="/" className="hover" activeClassName="active">
          Home
        </NavLink>
        <> | </>
        <NavLink to="/register" className="hover" activeClassName="active">
          Register
        </NavLink>
        <> | </>
        <NavLink to="/login" className="hover" activeClassName="active">
          Login
        </NavLink>
      </div>
    );
  }

  render() {
    return (
      <>
        <nav className="Header">
          {/* <NavLink to="/" className="hover" activeClassName="active"> */}
          <h1>A Little Gratitude...</h1>
          {/* </NavLink> */}

          <div className="quote">
            {this.state.loading ? (
              <div>
                <img id="loading" src={loading} alt="loading" />
              </div>
            ) : (
              <div>
                <h3 className="text">{this.state.text}</h3>
                <h6 className="author">{this.state.author}</h6>
              </div>
            )}
          </div>

          {this.context.authtoken
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}
