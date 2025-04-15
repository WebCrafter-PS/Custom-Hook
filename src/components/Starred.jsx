import { StarContext } from "../../utility/context";
import { useContext } from "react";
export default function Starred() {
  const {star} = useContext(StarContext);
  return (
    <div>
      <h1>Starred : {star}</h1>
    </div>
  );
}
