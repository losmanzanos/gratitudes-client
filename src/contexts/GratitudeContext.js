import React, { Component } from "react";
import TokenService from "../services/token-service";

export const nullGratitude = {
  thankful_for: {},
  did_well: {},
  achieve: {},
  soc: {},
};

const GratitudeContext = React.createContext({
  gratitude: nullGratitude,
  error: null,
  setError: () => {},
  clearError: () => {},
  setGratitude: () => {},
  clearGratitude: () => {},
});

export default GratitudeContext;

export class GratitudeProvider extends Component {
  state = {
    gratitude: nullGratitude,
    gratitudes: [],
    error: null,
    authtoken: TokenService.getAuthToken(),
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setGratitude = (gratitude) => {
    this.setState({ gratitude });
  };

  setAuthToken = (authtoken) => {
    this.setState({ authtoken });
  };

  setGratitudes = (gratitudes) => {
    this.setState({ gratitudes });
  };

  // clearGratitude = () => {
  //   this.setgratitude(nullgratitude);
  //   this.setComments([]);
  // };

  render() {
    const value = {
      gratitude: this.state.gratitude,
      gratitudes: this.state.gratitudes,
      error: this.state.error,
      authtoken: this.state.authtoken,
      setAuthToken: this.setAuthToken,
      setError: this.setError,
      clearError: this.clearError,
      setgratitude: this.setgratitude,
      setGratitudes: this.setGratitudes,
      cleargratitude: this.cleargratitude,
    };

    return (
      <GratitudeContext.Provider value={value}>
        {this.props.children}
      </GratitudeContext.Provider>
    );
  }
}
