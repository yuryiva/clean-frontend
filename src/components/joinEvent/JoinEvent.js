import React, { useState, useEffect } from "react";

import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import Item from "./Item";

export default function JoinEvent() {
  const [items, setAllItems] = useState("");
  const [event, setEvent] = useState("");
  const userLocalStorage = localStorage.getItem("userScore");
  const getAllEvents = () => {
    // fetch(`http://localhost:5000/event/all_events`, {
    fetch(`https://keet-it-clean2.herokuapp.com/event/all_events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
      });
  };

  const joinEvent = (event_id) => {
    // fetch(`http://localhost:5000/event/${event_id}`, {
    fetch(`https://keet-it-clean2.herokuapp.com/event/${event_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userLocalStorage,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        console.log(event)
      });
  };

  const clickHandler = (e) => {
    const id = e.target.id;
    joinEvent(id)
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        initial={{ borderRadius: 25 }}
        className="join-event-container"
      >
        <JoinHeading>Join an existing event</JoinHeading>
        {items && items.map((item, index) => <Item item={item} onClick={clickHandler} key={index} id={item._id}/>)}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

const JoinHeading = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;
