import styled from 'styled-components';

export const ItemWrapper = styled.div`
  flex: 0 1 ${(props) => props.flexBasis || 300}px;
  margin: 5px;
  padding: 5px;
`;
