import React, { Component } from "react";

import Navbar from "./components/navbar";

import Jumbotron from "./components/jumbotron";

import Superheroes from "./components/superheroes";

import Footer from "./components/footer";

import hero from "./superheroes.json";

import "./App.css";




class App extends Component {

  state = {

    hero,

    clickedhero: [],

    score: 0

 

  };



  imageClick = event => {

    const currentSuperhero = event.target.alt;

    const SuperheroesAlreadyClicked =

      this.state.clickedhero.indexOf(currentSuperhero) > -1;





    if (SuperheroesAlreadyClicked) {

      this.setState({

        hero: this.state.hero.sort(function(a, b) {

          return 0.5 - Math.random();

        }),

        clickedhero: [],

        score: 0

      });

        alert("Better luck next time! Try again?");





    } else {

      this.setState(

        {

          hero: this.state.hero.sort(function(a, b) {

            return 0.5 - Math.random();

          }),

          clickedhero: this.state.clickedhero.concat(

            currentSuperhero

          ),

          score: this.state.score + 1

        },

   

        () => {

          if (this.state.score === 12) {

            alert("Yay! You Win!");

            this.setState({

              hero: this.state.hero.sort(function(a, b) {

                return 0.5 - Math.random();

              }),

              clickedhero: [],

              score: 0

            });

          }

        }

      );

    }

  };





  render() {

    return (

      <div>

        <Navbar 

          score={this.state.score}

        />

        <Jumbotron />

        <div className="wrapper">

          {this.state.hero.map(hero => (

            <Superheroes

              imageClick={this.imageClick}

              id={hero.id}

              key={hero.id}

              image={hero.image}

            />

          ))}

        </div>

        <Footer />

      </div>

    );

  }

}

export default App;
