function Cards(Props) {
  const {name, state, markComplete, id} = Props;
  console.log(Props);
  return (
    <div>
      <h2>{name}</h2>
      <p>{state}</p>
      {state === 'pending' && 
      <button onClick={() => markComplete(id)}>Mark Complete</button>}
    </div>
  );
}

export default Cards;