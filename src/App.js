import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// import { Container } from 'reactstrap';
import './App.css';
import Header from "./containers/Header";
import MoviePage from "./page/MoviePage";
import MovieList from "./page/MovieList";



class App extends Component {
  render() {
      return (
          <div className="App">
             <Header/>
              {/*<Container style={{padding: '120px 0'}}>*/}
                  {/*<Redirect from="/" to="Movies" />*/}
                  <Switch>
                      <Route path="/Movies/:id" component={MoviePage}/>
                      <Route exact path="/Movies" component={MovieList}/>
                      <Route exact path="/" component={MovieList}/>
                  </Switch>
              {/*</Container>*/}
          </div>
    );
  }
}

export default App;
