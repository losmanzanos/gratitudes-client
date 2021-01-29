import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Section } from "../../components/Utils/Utils";
import GratitudeContext from "../../contexts/GratitudeContext";

export default class LoginPage extends Component {
  static contextType = GratitudeContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = async () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/gratitude";

    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}
