import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import eli from "../images/eli.jpg";

const PersonInformation = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Person>
      <PersonData>
        <Image src={eli}></Image>
        <Title>{currentUser.username}</Title>
        <span>{currentUser.position}</span>
      </PersonData>
    </Person>
  );
};

export default PersonInformation;

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
  color: #394f60;
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
