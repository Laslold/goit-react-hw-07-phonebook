import styled from 'styled-components';

export const ListStyled = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-style: oblique 40deg;
  font-family: cursive;
  & p {
    margin: 0;
  }
`;
export const ListStyledItems = styled.ul`
  padding-left: 10px;
`;
