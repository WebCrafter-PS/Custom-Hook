import { useNavigate } from "react-router";
export default function Country() {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>The selected country</h1>
      <button onClick={handleNav}>Go Back</button>
    </div>
  );
}
