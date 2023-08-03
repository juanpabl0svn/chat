import "./index.css";
import UserList from "./components/users-list";
import { useState } from "react";
import { SyntheticEvent } from 'react';
import { IMessage } from "./utils/types";

function App() {
  const [messages, setMessages] = useState([
    {
      type: "others-message",
      message: "Hola",
    },
    {
      type: "own-message",
      message: "Hola",
    },
    {
      type: "others-message",
      message: "¿Cómo estas?",
    },
  ]);


  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>){
    e.preventDefault()
    const data : {message: string} = Object.fromEntries(new FormData(e.target))

    const newMessage: IMessage = {
      type : 'own-message',
      message : data.message
    }


    setMessages([...messages].concat(newMessage))
    console.log(newMessage)



  }

  return (
    <>
      <UserList messages={messages} />
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
