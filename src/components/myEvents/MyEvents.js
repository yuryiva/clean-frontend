import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../../context/ContextProvider";

const MyEventList = styled.article`
margin-top: 5px;
margin-bottom: 20px;
  position: relative;
  opacity: 1;
  z-index: 2;
  

  h1{
    text-align: center;
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

const initialState = {
  items: {},
  isLoaded: false,
};

const MyEvents = () => {
  const userLocalStorage = localStorage.getItem("userScore");
  const context = useContext(MyContext);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // fetch(`http://localhost:5000/event/my_events`, {
    fetch(`https://keet-it-clean2.herokuapp.com/event/my_events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userLocalStorage,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setState({
          isLoaded: true,
          items: json,
        });
      });
  }, []);

  return (
    <>
      {!state.isLoaded ? (
        <div>Almost there...</div>
      ) : (
        <MyEventList>
            {state.items.map((item) => (
              <div key={item.id}>
                <h1 style={{textDecoration:"underline"}}>{item.event_name}</h1>
                <p style={{textAlign:"center"}}>{item.date} at {item.time}</p>
                <p style={{paddingLeft: "10px"}}>Where: {item.address}</p>
                <p style={{paddingLeft: "10px"}}>What to bring: {item.what_to_bring}</p>
                <p style={{marginBottom:"20px", paddingLeft: "10px"}}>Description: {item.description}</p>
              </div>
            ))}
          
          </MyEventList>
      )}
      </>
  );
};
export default MyEvents;
