import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

export const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

export const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;
