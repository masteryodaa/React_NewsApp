import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LoadingBar from 'react-top-loading-bar'



export class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: localStorage.getItem('mode')?localStorage.getItem('mode'):'dark',
      progress:0
    };

    document.body.style.backgroundColor=this.state.mode==='dark'?'#212429':'white';

  }



  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }

    // apiKey = process.env.REACT_APP_API_KEY;
    apiKey = '07b462066988458d93c6fd081870718f';
    // apiKey = 'pub_1913171055e7137a1d464be8e01d32bee9f5'


  darkmode = () => {

    if (this.state.mode === "light") {
      this.setState({
        mode: 'dark',
      });
      localStorage.setItem('mode','dark')
      document.body.style.backgroundColor = '#212429';
    }

    else {
      this.setState({
        mode: 'light',
      });
      localStorage.setItem('mode','light')
      document.body.style.backgroundColor = 'white';
    }
  }

  title = (event) => {
    document.title = event.target.innerText === undefined ? 'NewsApp' : 'NewsApp  -  ' + (event.target.innerText).toLowerCase();
    this.setState({
      headline: event.target.innerText
    })
  }

  render() {
    return (
      <Router>
        <div className={`bg-${this.state.mode}`}>


          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />

          <Navbar title={this.title} />

          <Header mode={this.state.mode} darkmode={this.darkmode} headline={this.state.headline} />

          <Switch>

            <Route exact path='/'>
              <News  apiKey={this.apiKey} setProgress={this.setProgress} country='in' category='general' />
            </Route>

            <Route key='politics' exact path='/politics'>
              <News  apiKey={this.apiKey} setProgress={this.setProgress} country='in' category='politics' />
            </Route>

            <Route key='technology' exact path='/technology'>
              <News  apiKey={this.apiKey} setProgress={this.setProgress} country='in' category='technology' />
            </Route>

            <Route key='business' exact path="/business">
              <News  apiKey={this.apiKey} setProgress={this.setProgress} country='in' category='business' />
            </Route>

            <Route key='sports' exact path="/sports">
              <News  apiKey={this.apiKey} setProgress={this.setProgress} country='in' category='sports' />
            </Route>

            <Route key='entertainment' exact path="/entertainment">
              <News  apiKey={this.apiKey} setProgress={this.setProgress} country='in' category='entertainment' />
            </Route>

            <Route key='science' exact path="/science">
              <News  apiKey={this.apiKey} setProgress={this.setProgress} country='in' category='science' />
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
