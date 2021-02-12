import React from 'react';
import styled from 'styled-components';
import banner from '../../assets/banner2.jpg';
import {Link} from 'react-router-dom';

export default function LandingPage() {

  return (
    <MainContainer>
      <MainHeadings>
        <h1>Keep it clean!</h1>
        {/* <h2>Let's make the world a better place</h2> */}
        <h2>Let's get together and make the world a better place</h2>
      </MainHeadings>
      <Authentication>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </Authentication>
    </MainContainer>
  );

}

const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  /* padding: 150px 10%;       */
  padding: 0 10%;
`;

const MainHeadings = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.3rem;
    color: #fff;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
  }
`;

const Authentication = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 180px;
    margin-bottom: 40px;
    height: 40px;
    font-size: 1rem;
    border: 1px solid #000;
    border-radius: 25px;
    /* background-color: #7DC81F; */
  }
`;
