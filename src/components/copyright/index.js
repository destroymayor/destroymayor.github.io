import React from "react";

import styled from 'styled-components';

const Container = styled.div`
    color: rgb(197, 197, 197);
    font-size: 10px;
    margin-top: 30px;
    border-top: 1px solid rgb(197, 197, 197);
`

export default () => {
  return <Container className="copyright">© Jared {new Date().getFullYear()} </Container>;
};
