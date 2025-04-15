import useTodo from "../../utility/useTodos";

const CustomHook = (props) => {
  const todos = useTodo();
  console.log(props);
  
  return (
    <div>
      <h1>Custom hook Todo</h1>
      <ul>
        {todos.slice(0, 10).map((todo, index) => (
          <li key={index}>{`${todo.id}  ${todo.title}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default CustomHook;
