import styled from 'styled-components';

export const Modal = styled.div`
  width: 570px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid red;
  border-radius: 15px;
  font-family: Helvetica, Arial, sans-serif;
`;

export const ModalContent = styled.div`
  padding: 20px;
  overflow: auto;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

export const ButtonsWrapper = styled.div`
  text-align: right;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #216298;
  background-color: rgba(33, 98, 152, .2);
  padding: 12px 40px;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  font-weight: bold;
`;

export const CancelButton = styled.button`
  cursor: pointer;
  color: #216298;
  background-color: #fff;
  padding: 11px 40px;
  border: 1px solid #216298;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 18px;
  color: #216298;
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
`;
export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Text = styled.div`
  font-size: 14px;
  text-align: left;
  margin-bottom: 5px;
`;

export const Spacer = styled.div`
  padding: ${(props) => `${props.size}px` || '10px'} 0;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
export const InputBlock = styled.div`
  text-align: left;
`;
export const Input = styled.input`
  line-height: 1.7;
  border: 1px solid rgb(211, 211, 211, .5);
  border-bottom: 1px solid rgb(211, 211, 211);
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
`;
export const Option = styled.option`
  color: #216298;
  font-size: 15px;
`;
