import styled from 'styled-components';
import picture from '../../images/squaredM.jpg';
export const ContainerStyled = styled.div`
  flex: 0 0 40%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: -1px 14px 30px 10px rgba(0, 0, 0, 0.86);
  background-image: url(${picture});
`;
