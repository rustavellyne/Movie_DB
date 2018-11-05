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
                  <Switch>
                      <Route exact path="/" component={MovieList}/>
                      <Route path="/TopMovies/:id" component={MoviePage}/>
                      <Route path="/TopMovies" component={MovieList}/>

                  </Switch>
          </div>
    );
  }
}

export default App;
