import { Component } from "react";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import Form from "./form";
import Result from "./result";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  handleResult = (response) => {
    console.log(response);
    this.setState({ results: response.results });
  };
  render() {
    return (
      <>
        <Header />
        <main>
          <Form handleResult={this.handleResult} />
          <Result data={this.state.results} />
        </main>
        <Footer />
      </>
    );
  }
}
