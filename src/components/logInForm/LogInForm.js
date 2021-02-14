import React, { useState, useContext } from "react";
import { Redirect } from 'react-router-dom';
import { MyContext } from "../../context/ContextProvider";
import styled from "styled-components";

const LogInForm = () => {
  const context = useContext(MyContext);
  const [status, setStatus] = useState("Log In");
  const [sentMessage, setSentMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    const { email, password } = e.target.elements;

    let details = {
      email: email.value,
      password: password.value,
    };

    console.log(details);

    // fetch("http://localhost:5000/auth", {
    fetch("https://keep-it-clean2.herokuapp.com/auth", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        // "x-auth-token":""
      }),
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          setSentMessage("SENT");
        } else {
          setSentMessage("ERROR");
        }
        return response.json();
      })
      .then((data) => {
        window.localStorage.setItem('userScore', data.token);
        context.setToken(data.token)
      });

    // .then((response) => {
    //   if (response.status === 200) {
    //     setSentMessage("SENT");
    //   } else {
    //     setSentMessage("ERROR");
    //   }
    // })
    // .then((data) => {
    //   console.log(data)
    //   // context.setToken(data.token);
    // });
  };

  return (
    <SendMessageWrapper>
      {sentMessage ? (
        <div>
          {sentMessage === "SENT" && <Redirect to="/mapSection" />}
          {sentMessage === "ERROR" && <p>WRONG PASSWORD</p>}
          <button onClick={() => setSentMessage(false)}>
            {sentMessage === "SENT" ? "LOG OUT" : "TRY AGAIN"}
          </button>
        </div>
      ) : (
        <FormWrapper onSubmit={handleSubmit}>
          <h2>User Login</h2>
          <input type="email" id="email" placeholder="Email" required />
          <input type="text" id="password" placeholder="Password" required />
          <button type="submit">{status}</button>
        </FormWrapper>
      )}
    </SendMessageWrapper>
  );
};

export default LogInForm;

// const Pr = styled.div`
// height: 20px;
// background-color: yellow;
// text-align: center;
// `
const SendMessageWrapper = styled.div`
  /* width: 100vh; */
  /* height: auto; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10%;
  /* background-color: lightgray; */
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
  box-shadow: 0px 0px 10px lightgray;

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
    color: white;
    box-shadow: 2px 2px 5px grey;
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
