import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <form>
      <h1> clique no ciculo</h1>
      <input
        type="text"
        value={userInput}
        placeholder="Insira seu nome"
        onChange={(event) => setUserInput(event.target.value)}
      ></input>
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
};

export default GetUserComponent;
