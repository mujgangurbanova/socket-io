import React from "react";
import styled from "styled-components";
import eli from "../images/eli.jpg";

const Logo = () => {
  return (
    <Person>
      <PersonData>
        <Image src={eli}></Image>
        <Title>Bella Bradford</Title>
        <span>Lead UX / UI Designer</span>
      </PersonData>
    </Person>
  );
};

export default Logo;

export const Person = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 19px;
  background-color: #f5f9fc;
`;
export const Image = styled.img`
  width: 86px;
  height: 90px;
  border-radius: 50%;
`;
const Title = styled.h3`
  margin: 10px 0;
  color:#394F60;
`;

const PersonData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  span {
    color: #b6c1ce;
    font-size: 12px;
  }
`;
