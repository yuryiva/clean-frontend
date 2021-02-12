import React, { useState, useContext } from "react";
import { MyContext } from "../../context/ContextProvider";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const EventForm = () => {
  const context = useContext(MyContext);
  const [status, setStatus] = useState("Create event");
  const [sentMessage, setSentMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Creating...");
    const {
      date,
      time,
      city,
      address,
      description,
      whatToBring,
      eventName,
    } = e.target.elements;

    let details = {
      date: date.value,
      time: time.value,
      city: city.value,
      address: address.value,
      description: description.value,
      what_to_bring: whatToBring.value,
      event_name: eventName.value,
    };

    console.log(details);
    fetch(
      `http://localhost:5000/event`,

      {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "x-auth-token": context.token,
        }),

        body: JSON.stringify({
          date: date.value,
          time: time.value,
          city: city.value,
          address: address.value,
          description: description.value,
          what_to_bring: whatToBring.value,
          event_name: eventName.value,
        }),
      }
    )
      .then((response) => {
        if (response.status === 201) {
          setSentMessage("SENT");
        } else {
          setSentMessage("ERROR");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data.token)
        console.log(context.token)
      });

    // setStatus("Submit");
    // let result = await response.json();
    // setSentMessage(result.status);
  };
  return (
    <SendMessageWrapper>
      {sentMessage ? (
        <div>
          {sentMessage === "SENT" && <Redirect to="/mapSection"/>}
          {sentMessage === "ERROR" && <p>SOMETHING WENT WRONG </p>}
          <button onClick={() => setSentMessage(false)}>
            TRY AGAIN PLEASE
          </button>
        </div>
      ) : (
        
          <FormWrapper onSubmit={handleSubmit}>
            <h2>Event form</h2>            
            <input type="text" id="eventName" placeholder="Title" required />            
            <input type="date" id="date" placeholder="Date" required />           
            <input type="time" id="time" placeholder="Time" required />           
            <input type="text" id="city" placeholder="City" required />          
            <input
              type="address"
              id="address"
              placeholder="Address"
              required
            />          
            <input
              type="text"
              id="description"
              placeholder="Description"
              required
            />
         
            <input type="text" id="whatToBring" placeholder="What To Bring" />
         
            <button type="submit">{status}</button>
          </FormWrapper>
        
      )}
    </SendMessageWrapper>
  );
};

export default EventForm;

// const Pr = styled.div`
// height: 20px;
// background-color: yellow;
// text-align: center;
// `
const SendMessageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: right;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  padding: 10%;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  button {
    width: 100%;
    margin-bottom: 40px;
    height: 30px;
    font-size: 1rem;
    border: 1px solid #7dc81f;
    border-radius: 25px;
    background-color: #7dc81f;
  }
`;

// const NameSection = styled.div`
//   input {
//     width: 300px;
//     border: 0;
//     margin: 15px;
//     border-bottom: 1px solid black;
//   }
// `;

// const Email = styled.div`
//   input {
//     width: 300px;
//     border: 0;
//     margin: 15px;
//     border-bottom: 1px solid black;
//   }
// `;

// const Topic = styled.div`
//   select {
//     width: 300px;
//     border: 0;
//     margin: 15px;
//     border-bottom: 1px solid black;
//   }
// `;

// const Message = styled.div`
//   textarea {
//     width: 300px;
//     height: 100px;
//     margin: 0 15px;
//   }
// `;

// const SendMessageButton = styled.button`
// font-size: ${({ Initial }) => Initial ? '50px': '20px'}
// `;
