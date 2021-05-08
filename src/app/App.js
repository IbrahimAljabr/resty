import { Component } from "react";
import Header from "../header/header";
import React from "react";
import Footer from "../footer/footer";
import { Form } from "../form/form";
import Result from "../result/result";
import History from "../history/history";
import AboutUs from "../aboutus/aboutUs";
// import Home from "../home/home";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      method: "GET",
      history: [],
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      let history = JSON.parse(localStorage.getItem("history"));
      this.setState({ history: history });
    }, 1000);
  };
  handleResult = (response) => {
    this.setState({ results: response });
  };
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };
  method = (response) => {
    this.setState({ method: response });
  };

  // componentDidUpdate() {
  //   setTimeout(() => {
  //     let history = JSON.parse(localStorage.getItem("history"));
  //     this.setState({ history: history });
  //   }, 6000);
  // }

  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Form}>
              <Form
                handleResult={this.handleResult}
                loading={this.toggleLoading}
                method={this.method.bind(this)}
                data={this.state}
              />
              <section>
                <div>
                  <History
                    data={this.state}
                    method={this.method}
                    update={this.componentDidMount}
                  />
                </div>
                <div>
                  <Result data={this.state} />
                </div>
              </section>
            </Route>
            <Route path="/history" component={History}>
              <History data={this.state} method={this.method} />
            </Route>
            <Route path="/aboutUs" component={AboutUs}></Route>
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}
