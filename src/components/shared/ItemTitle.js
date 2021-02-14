import React from 'react';

import styled from 'styled-components';

const Title = styled.h3`
  display: flex;
  align-items: center;
  color: rgb(0, 164, 103);
  font-size: 16px;

  div {
    padding-left: 5px;
  }
`;

const ItemTitle = (props) => {
  const { icon, title } = props;
  return (
    <Title>
      {icon}
      <div>{title}</div>
    </Title>
  );
};

export default ItemTitle;
