import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0%{
    opacity:0;
  }50%{
    opacity:1;
  }100%{
    opacity:0;
  }
`;

const Loader = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  animation: ${animation} 0.5s infinite;
`;

export default () => (
  <Loader>
    <span role='img' aria-label='loading'>
      ⏰
    </span>
  </Loader>
);
