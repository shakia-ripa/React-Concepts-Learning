import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel'];
  const singers= [
    {id: 1, name: 'Dr. Mahfuzur', age:68},
    {id: 2, name: 'Eva Rahman', age:38},
    {id: 3, name: 'Shuvro Dev', age:58},
    {id: 4, name: 'Pritom', age:28},
  ];
  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Chemistry', price: 120},
    {id: 3, name: 'Biology', price: 130},
    {id: 1, name: 'Math', price: 150},
  ];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer} ></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <Todo task="Core Concepts" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55k"></Device>
      <Device name="Mobile" price="17k"></Device>
      <Device name="Watch" price="3k"></Device>
      <Person></Person>
      <Student grade="8" score="70"></Student>
      <Student grade="9" score="80"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  return <h2>This device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 20;
  const money = 200;
  const person = {name: 'Rifa', age: 20}
  return (
    <h3>I am {person.name} and my age is {person.age}. I have {money}tk</h3>
  )
}

function Student({grade=1, score=0}) {
  const name = 'Shakia';
  const id = 220239007;
  return( 
  <div className='student'>
    <p>Grade: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>   
      <p>coding</p>   
    </div>
  )
}

export default App
