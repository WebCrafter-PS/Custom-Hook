import { useEffect, useState } from "react";

//custom hook - output : title & completed
function useTodo() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    async function Api() {
      const options = {
        method: "GET",
      };
      const request = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        options
      );
      const response = await request.json();
      setTodoData(response);
    }
    Api();
  }, []);

  return todoData;
}
export default useTodo;
