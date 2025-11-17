import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Hi. I am Rafikul, learning react routing </h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

export default Home;
