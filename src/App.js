import { act, useState } from 'react';
import './App.css';
import { tabs } from './Data/data';

function App() {

  // --- TO DO LIST -------

  let [todoList, setTodoList] = useState([]);
  let saveToDoList = (event) => {
    let name = event.target.name.value;
    event.target.name.value = '';
    event.target.name.focus();

    // if name is already exist in todo list we'll not include
    if (!todoList.includes(name)) {
      let finalList = [...todoList, name];
      setTodoList(finalList);
    }
    else {
      alert("Already added");
    }
    event.preventDefault(); //when we submit the form, entire page will refresh if we do not use it. it will prevent from refreshing page after submitting form.

  }
  let list = todoList.map((value, index) => {
    return (
      <Item
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    )
  })
  return (
    <div className="App">
      <div className="container">
        
        {/* ----- TO DO LIST ----- */}

        <fieldset><legend> To Do List</legend>
          <form onSubmit={saveToDoList}>
            {/* <fieldset style={{ width: "fit-content", margin: "auto" }}> */}
            {/* <legend style={{ textAlign: "left" }} >Write your name here</legend> */}
            <input type="text" name="name" /><button style={{ fontSize: "15px" }}>Save</button>
            {/* </fieldset> */}
          </form>
          <div className="outerDiv">
            <ul>
              {list}
            </ul>
          </div>


          {/* <input type="text" value={value}/> */}
        </fieldset>
      </div>
    </div>
  );
}

export default App;

function Item({ value, indexNumber, todoList, setTodoList }) {
  let deleteRow = () => {
    let finalData = todoList.filter((v, i) => i != indexNumber)
    setTodoList(finalData);
  }
  let [lineThrough, setLineThrough] = useState(false);
  return (
    <>
      <li className={(lineThrough) ? 'line-through' : ''} onClick={() => setLineThrough(!lineThrough)}>{indexNumber + 1}&emsp;{value}<span onClick={deleteRow}>&times;</span></li>
      {/* <p>{value}<button>&times;</button></p> */}
    </>
  )
}
