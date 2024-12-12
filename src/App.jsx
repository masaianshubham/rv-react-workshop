import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import axios from 'axios';
import Posts from './components/Posts'
function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    }
    getPost();
  }, [])
  console.log(posts)

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

const handleDeleteTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  setTasks(newTasks)
}

  
  return (
    <>
      {/* <h1>To Do List</h1>
      <input onChange={handlechange} value={task} type="text" placeholder="Add a task" />
      <button onClick={handleAddTask}>Add</button>
      {tasks.map(({name,state}, index) => (
        <Cards key={index} id={index} name={name} state={state} markComplete={handleCompleteTask} deleteTask={handleDeleteTask} />
      ))} */}
      <h1>Dummy Post</h1>
      {posts.length === 0 ? <p>Loading....</p> : posts.map(({title, body, id}) => (
        <Posts title={title} body={body}/>
      ))}
    </>
  )
}

export default App
