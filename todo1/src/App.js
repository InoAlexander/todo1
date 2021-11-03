import React, {useState, useRef, useEffect} from 'react';
import TodoList from './components/TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo1.dataList'

function App() {
  // useRef hook allows us to reference elements inside of our html in this case itll be the nput on the client side
  const [data, setData] = useState([])
  const dataNameRef = useRef()
  // function to hand the onclick event for adding data to the todolist
  //.curren.value will give us the value off our input
  // setData can set to pass a value or you can use the previous value as a function call
  // install uuid npm i uuid for ability to use multiple ids and not get an erro when adding noew stuff to lists
  
function handleData (e) {
  const name = dataNameRef.current.value;
  if(name === '') return;
  console.log(name);
  setData(prevData =>{
    return [...prevData, {id: uuidv4, name: name, complete: false}]
  })
  dataNameRef.current.value = null;
}

// another useEffect that will be called once, when our component loads, since the empy array at the end never changes that function will never be called

useEffect(() => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
  setData()
},[])

// will need to add useEffect because of a side effect with todos not being saved ocne the page reloads, everytime something changes it will call that function will need to have an array at the end (array of properties) to determine when to call that function
// must set a key to acces loacla storage
useEffect(() =>{
  localStorage.setItem(OCAL_STORAGE_KEY, JSON.stringify(dataList))
}[dataList])

  return (
    <>
    <TodoList dataList = {data} /> 
    <input ref={dataNameRef} type="text" />
    <button onClick={handleData}>Add </button>
    <button>Clear Completed</button>
    <div>
      <p>
        ALL DONE!!!!
      </p>
    </div>
    </>
  );
}

export default App;
