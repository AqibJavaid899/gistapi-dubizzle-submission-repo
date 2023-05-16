import React from "react";
import styled from "styled-components";

function Error({ message }) {
  return <Wrapper>{message}</Wrapper>;
}

const Wrapper = styled.div`
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
`;

export default Error;
