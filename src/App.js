import logo from './logo.svg';
import './App.css';
import React from "react";
import { Book } from './book';
import { Group } from './group';
import { Recipe } from './recipe';

function Task1(){
  let book=new Book("title", "author", "genre", 111, ["review1", "review2"]) ;
    return <div>
      <h1 class="task1"><b>{book.title}</b> - <b>{book.author}</b></h1>
      <p class="task1">{book.pages} pages</p>
      <ul><b>Reviews</b>
        <li>{book.reviews[0]}</li>
        <li>{book.reviews[1]}</li>
      </ul>
    </div>
}
function Task2(){
  let group=new Group("Rammstein", ["Till Lindeman", "Rihard Kruspe", "Paul Landers", "Oliver Ridel", "Kristian Lorenz", "Kristoff Sheider"],["1995 - Herzeleid","1997 - Sehnsucht","2001 - Mutter", "2004 - Reise, Reise", "2005 - Rosenrot"],"/images.jpg");
  let arr=[];
  let arr1=[];
  group.artists.forEach(elements => {arr.push(<li>{elements}</li>)});
  group.albums.forEach(elements => {arr1.push(<li>{elements}</li>)});
 return <div>
    <img src={group.img}></img>
    <h1><b>{group.title}</b></h1>
    <div class="wrapper">
      <div class="box a">
        <ul>Group
          {arr}
        </ul>
      </div>
      <div class="box b">
        <ul>Albums
         {arr1}
        </ul>
      </div>
    </div>
  </div>
}
function Task3(){
  let recipe=new Recipe("Recipe", ["ingredient1: 100g", "ingredient2: 2 items","ingredient3: 3 spoons","ingredient4: 4 spoons"],["first", "second", "third"], "/recipe.jpg")
  let arr=[];
  recipe.ingredients.forEach(elements=>{arr.push(<li>{elements}</li>)})
  let arr2=[];
  recipe.steps.forEach(elements=>{arr2.push(<li>{elements}</li>)})

  return <div>
    <h1>{recipe.title}</h1>
    <ul><b>Ingredients</b>
      {arr}
    </ul>
    <ol>
      {arr2}
    </ol>
    <img src={recipe.img}></img>
  </div>
}

function App() {
  return (
    <div class="pad">
      <Task1></Task1>
      <hr></hr>
      <Task2></Task2>
      <hr></hr>
      <Task3></Task3>
      
      <hr></hr>
    </div>
  );
}

export default App;
