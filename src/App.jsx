import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handlechange = (e) => {
    setTask(e.target.value)
  }
const handleAddTask = () => {
  setTasks([...tasks, {name: task, state: 'pending'}])
  setTask('')
}

const handleCompleteTask = (index) => {
  const newTasks = [...tasks];
  newTasks[index].state = 'completed';
  setTasks(newTasks)
}

  
  return (
    <>
      <h1>To Do List</h1>
      <input onChange={handlechange} value={task} type="text" placeholder="Add a task" />
      <button onClick={handleAddTask}>Add</button>
      {tasks.map(({name,state}, index) => (
        <Cards key={index} id={index} name={name} state={state} markComplete={handleCompleteTask} />
      ))}

    </>
  )
}

export default App
