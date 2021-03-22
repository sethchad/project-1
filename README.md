# Game of War
Play the card game war against the computer on your browser. 

## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General Info
This program is my first mini-project as part of the General Assembly Software Engineering Immersive Bootcamp (a three month long, full time reskilling course) I wrote this code after week two, so it uses only JavaScript and has a basic interface for the user, with results logged to the console.  

## Technologies
War is programmed in JavaScript using Visual Studio Code. The intent is to practice with and deomonstrate the use of object classes, functions, and conditional statements for a multi-step program. 

## Setup
To install and play war, download the following two files:
- index.html
- script.js

If using a CLI, navigate to the folder location where the files are stored and use the command "open index.html" to load the program in your web browser. Open the Developer Console to view the output of the program (Command + Option + I if you are using a Mac).

You will be prompted to enter your name and the number of hands (i.e. rounds) you would like to play before the program terminates. 

Since War is a game of random chance, it can run for many thousand of rounds before one player has all of the cards, and thus wins. If a player has not won all 52 cards by the time the maximum number of rounds is reached, the program will stop the game and declare the player with the most cards the winner.

## Code Examples
The class constructor for the deck of cards at the beginning of the game, showing creating an object with nested loops. 

`  class Deck {
      constructor() {
          let deck = [];
          let suit = ["Spades", "Clubs", "Diamonds", "Hearts"];
          let rank = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
          let score;
  
          for (let i = 0; i < 4; i++) 
          {
              for (let j = 0; j < 13; j++) 
              {
                  score = j + 1;
                  deck.push(new Card(suit[i], rank[j], score));
              }
          }    
  
          this.deck = deck;
      }

## Features
Features
- Usage of classes to create objects, store functions, and take user input
- Nested conditional statements

## Status
Project is: Completed

## Inspiration
My assignment was to create the card game war, so I was inspired to meet the objectives with a clear, readable, and completed program!

Thanks to [BullDogJob](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project) for the template used for this README file. 