
class Card {
    constructor(suit, rank, score) {
      this.score = score;
      this.rank = rank;
      this.suit = suit;
    }
  } 
  
  class Player {
      constructor(name) {
          this.name = name;
          this.hand = [];
      }
  }
  
  class Deck {
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
  
      deal() {
          let location;
          let card;
  
          for (let i = 52; i > 0; i--) {
              //Selects a random card from the deck array and push it to one of the players hands.
              //Alternates which player gets a card and removes them from the deck array as the loop progresses. 
              
              location = Math.floor(Math.random()*Math.floor(deck.deck.length));
              card = deck.deck.splice(location,1);
  
              if (i % 2 === 0) {
                  player1.hand.push(card[0])
              }
              else
              {
                  player2.hand.push(card[0])
              }
          }
      }
  }
  
  class Game {
      constructor(player1, player2,) {
          this.player1 = player1;
          this.player2 = player2;
      }
  
      play() 
      {
          let rounds = 1;
  
          // This while loop will keep the game going until one player has no cards left in their hand or 
          // the maxRounds have been played, and the game is stopped.  
          while ( player1.hand.length > 0 && 
                  player1.hand.length < 52 && 
                  rounds < maxRounds)  
          {
              alert("Hit OK to play a card.");
              
              let cardPosition = 0;
  
              // Compares the first card in each player'1.hand array 
              while (player1.hand[cardPosition].score === player2.hand[cardPosition].score) 
              {
                  // If there is a tie, looks ahead two cards. Continues until they are different. 
                  cardPosition += 2;
  
                  // In this condition, there is a tie and player 1 does not have enough cards to compete, so they lose the hand. 
                  if (player1.hand[cardPosition] === undefined) 
                  {
                      player1.hand[0].score = 0;
                      cardPosition -= 2;
                  }
  
                  // In this condition, there is a tie and player 2 does not have enough cards to compete, so they lose the hand. 
                  if (player2.hand[cardPosition] == undefined) 
                  {
                      player2.hand[0].score = 0;
                      cardPosition -= 2;
                  }
              }
  
              let winningCard = "";
              let losingCard = "";
  
              // Handles condition of player 1 winning the hand.
              if (player1.hand[cardPosition].score > player2.hand[cardPosition].score) 
              {
                  // Stores rank and suit of winning and losing cards.
                  winningCard = player1.hand[cardPosition].rank.toString() + " of " + player1.hand[cardPosition].suit;
                  losingCard = player2.hand[cardPosition].rank.toString() + " of " + player2.hand[cardPosition].suit;
  
                  // Moves cards to player 1's hand
                  for (let i = 0; i < cardPosition + 1; i++) 
                  {
                    // Makes card placement at the bottom of the stack arbitrary
                    if (rounds % 2 === 0) 
                    {
                        player1.hand.push(player1.hand.splice(0,1)[0]);
                        player1.hand.push(player2.hand.splice(0,1)[0]);
                    }
                    else 
                    {
                        player1.hand.push(player2.hand.splice(0,1)[0]);
                        player1.hand.push(player1.hand.splice(0,1)[0]);
                    }
                  }
  
                  // Console.log's the outcome
                  console.log("Congratulations, you won this hand! \nYou played a", winningCard, "which beat a", losingCard, ".");
                  console.log("You now have", player1.hand.length, "cards and", player2.name, "has", player2.hand.length);
              } 
              
              // Handles condition of player 2 winning the hand.
              else
              {
                  // Stores rank and suit of winning and losing cards.
                  winningCard = player2.hand[cardPosition].rank.toString() + " of " + player2.hand[cardPosition].suit;
                  losingCard = player1.hand[cardPosition].rank.toString() + " of " + player1.hand[cardPosition].suit;
  
                  // Moves cards to player 2's hand. 
                  for (let i = 0; i < cardPosition + 1; i++) 
                  {
                      // Makes card placement at the bottom of the stack arbitrary
                    if (rounds % 2 === 0) 
                    {
                        player2.hand.push(player1.hand.splice(0,1)[0]);
                        player2.hand.push(player2.hand.splice(0,1)[0]);
                    }
                    else 
                    {
                        player2.hand.push(player2.hand.splice(0,1)[0]);
                        player2.hand.push(player1.hand.splice(0,1)[0]);
                    }
                  }
                  
                  // Console.log's the outcome
                  console.log("Sorry, you lost this hand. \nYou played a " + losingCard + " which lost to a " + winningCard);
                  console.log("You now have", player1.hand.length, "cards and", player2.name, "has", player2.hand.length);
              }
              rounds++;

          }
  
          // Checks for winning condition and prints the outcome of the game. 
          if (player1.hand.length === 0) 
          {
              console.log(player1.name, "has lost to", player2.name, "after", rounds, "rounds." );
          } 
          else if (player2.hand.length === 0 )
          {
              console.log(player2.name, "has lost to", player1.name, "after", rounds, "rounds." );
          }
          else
          {
              // Declares whoever has the larger hand the winner after a specfied number of rounds. 
              if (player1.hand.length > player2.hand.length)
              {
                  console.log("You both throw down your cards and quit after", rounds, "rounds.", player1.name, 
                  "wins with", player1.hand.length, "cards");
              }
              else
              {
                  console.log("You both throw down your cards and quit after", rounds, "rounds,", player2.name, 
              "wins with", player2.hand.length, "cards");
              }
          }
  
      }
  }
  
  console.log("Hi! Welcome to the card game War!");
  
  let player1 = new Player(prompt("Enter your name"));

  let maxRounds = prompt("How many hands would you like to play before quitting?")
  
  let player2 = new Player("Jimmy")
  
  console.log(`Today you will be playing against ${player2.name}`)
  
  let deck = new Deck()
  deck.deal();
  
  let game = new Game(player1,player2);
  
  game.play();
  
  console.log("Here are the cards that both players have in their hands at the end of the game:")
  console.log(game)
  