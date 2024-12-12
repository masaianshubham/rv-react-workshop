function Cards(Props) {
  const {name, state, markComplete, id, deleteTask} = Props;
  console.log(Props);
  return (
    <div>
      <h2>{name}</h2>
      <p>{state}</p>
      {state === 'pending' && 
      <button onClick={() => markComplete(id)}>Mark Complete</button>}
    {
        state === 'pending' && 
        <button onClick={() => deleteTask(id)}>Delete</button>
    }
    </div>
  );
}

export default Cards;