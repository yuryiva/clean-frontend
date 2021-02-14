import React, { useState, useEffect } from "react";
export const MyContext = React.createContext();
const ContextProvider = ({ children }) => {
  const userLocalStorage = localStorage.getItem("userScore");
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [allUsers, setAllUsers] = useState("");
  const [allEvents, setAllEvents] = useState("");

  const getUser = () => {
    // fetch(`http://localhost:5000/auth`, {
    fetch(`https://keep-it-clean2.herokuapp.com/auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userLocalStorage,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };
  const getAllUsers = () => {
    // fetch(`http://localhost:5000/auth/all_users`, {
    fetch(`https://keep-it-clean2.herokuapp.com/auth/all_users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  };

  const getAllEvents = () => {
    // fetch(`http://localhost:5000/event/all_events`, {
    fetch(`https://keep-it-clean2.herokuapp.com/event/all_events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllEvents(data);
      });
  };

  useEffect(() => {
    getUser();
    getAllUsers();
    // getAllEvents();
  }, [token]);
  return (
    <MyContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        allUsers,
        setAllUsers,
        allEvents,
        setAllEvents,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
