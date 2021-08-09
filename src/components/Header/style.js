import styled from 'styled-components';

export const Container = styled.header`
  margin: 30px 7% 0;
  color: rgb(255, 255, 255);
  border: solid 3px rgb(255, 255, 255, .5);
  border-radius: 7px;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 13px;

  ul {
    margin: 30px 0 30px 30px;
  }

  div {
    
  }
`;

export const Score = styled.div`
  margin-right: 12px;
  background-color: rgb(255, 255, 255);
  width: 90px;
  height: 90px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p.text-score {
    color: #282c34;
    position: relative;
    top: -15px;
    font-size: 13px;
  }

  p.number-score {
    color: #282c34;
    font-size: 50px;
    letter-spacing: -8px;
  }
`;