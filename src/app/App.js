import { Component } from "react";
import Header from "../header/header";
import React from "react";
import Footer from "../footer/footer";
import Form from "../form/form";
import Result from "../result/result";
// import History from "../history/history";
// import AboutUs from "../aboutus/aboutus";
// import Home from "../home/home";
// import { Route, Switch } from "react-router-dom";

// import { If, Then, Else } from "react-if";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      method: "GET",
    };
  }
  handleResult = (response) => {
    this.setState({ results: response });
  };
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };
  method = (response) => {
    this.setState({ method: response });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          {/* <Home /> */}
          {/* <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/history" component={History}></Route>
            <Route path="/aboutus" component={AboutUs} />
          </Switch> */}
          <Form
            handleResult={this.handleResult}
            loading={this.toggleLoading}
            method={this.method}
          />
          <section>
            <div>{/* <History data={this.state} /> */}</div>
            <div>
              <Result data={this.state} />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
