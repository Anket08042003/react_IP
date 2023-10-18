import React from 'react';
import styled from "styled-components";

const Foot = styled.footer`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height:60px;
`;

const Footer = () => {
  return (
    <Foot>
      Copyright &copy; 2023 Anket Kadam
    </Foot>
  );
};

export default Footer;
