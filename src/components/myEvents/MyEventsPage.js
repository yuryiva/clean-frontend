import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MyEvents from './MyEvents'




const MyEventsListContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  box-shadow: 0px 0px 10px grey;
  border-radius: 15px;
  background-color: white;
  top: 10%;
  opacity: 1;
  box-shadow: 0px 0px 10px lightgray;
`;
const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(219, 250, 246, 1) 0%,
    rgba(35, 118, 205, 1) 100%
  );

  &:after {
    content: "";
    background: white;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-attachment: scroll;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -2;
  }

  button {
    width: 70%;
    height: 5%;
    border: none;
    background-color: #7dc81f;
    position: absolute;
    top: 90vh;
    border-radius: 25px;
    color: white;
    font-family: "Nunito", sans-serif;
    font-size: 1.5rem;
    box-shadow: 3px 3px 5px grey;
  }
`;

const TitleContainer = styled.div`
  width: 60%;
  height: 10%;
  border: 3px solid #7dc81f;
  position: relative;
  top: 5%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PageTitle = styled.div`
  position: relative;
  align-items: center;
  padding: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 2.3rem;
  color: white;
`;


function MyEventsPage () {

  return (
    <MainContainer>
          <TitleContainer>
            <PageTitle>
              <p>My events</p>
            </PageTitle>
          </TitleContainer>
          <MyEventsListContainer>
            <MyEvents/>
            </MyEventsListContainer>
          <button>
            <Link style={{textDecoration:"none", color:"white"}} to="/mapSection">Back to map</Link>
          </button>
    </MainContainer>
  );
  }
export default MyEventsPage;
