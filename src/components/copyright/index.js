import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 10px;
  color: rgb(197, 197, 197);
  border-top: 1px solid rgb(197, 197, 197);
`;

export default () => {
  return (
    <Container className="copyright">
      © Jared {new Date().getFullYear()}{' '}
    </Container>
  );
};
