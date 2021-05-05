import { Component } from "react";
import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Form from "../form/form";
import Result from "../result/result";
import History from "../history/history";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  handleResult = (response) => {
    console.log(response);
    this.setState({ results: response });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <Form handleResult={this.handleResult} />
          <section>
            <div>
              <History data={this.state.results} />
            </div>
            <div>
              <Result data={this.state.results} />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
