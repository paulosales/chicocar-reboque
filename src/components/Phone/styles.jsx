import styled from "styled-components";

export const PhoneContainer = styled.a`
  display: flex;
  flex-direction: column;
  color: inherit;
  align-items: center;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;

  transition: background-color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out;
  transition: transform 300ms ease-in-out;

  &:hover {
    text-decoration: none;
    color: inherit;
    background-color: rgba(200, 200, 200, 0.4);
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.21);
    transform: translateY(-10px);
  }

  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

export const PhoneIcon = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.6rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

export const PhoneNumber = styled.h4`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 5px;
  border-radius: 7px;
  box-shadow: 0 8px 6px -6px #000;
`;
