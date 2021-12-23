import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
`;

export const Message = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  font-weight: 500;
  border-radius: 4px;
  color: #fff;

  & + div {
    margin-top: 20px;
  }

  span {
    padding-top: 20px;
    font-weight: 500;
    font-size: 10px;
    opacity: 0.45;
  }

`;