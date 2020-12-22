import React from "react";
import loading from "../images/loading.gif";
import "./header.css";

export default class Header extends React.Component {
  state = {
    loading: true,
    text: null,
    author: null,
  };

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

  render() {
    return (
      <>
        <h1>A Little Gratitude...</h1>
        <div className="quote">
          {this.state.loading ? (
            <div>
              <img src={loading} alt="loading" />
            </div>
          ) : (
            <div>
              <h3 className="text">{this.state.text}</h3>
              <p className="author">{this.state.author}</p>
            </div>
          )}
        </div>
      </>
    );
  }
}
