import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  overflow-y: scroll;
`;

export const ModalWindow = styled.div`
  width: 541px;
  padding: 40px;

  position: absolute;
  top: 5%;
  left: 50%;

  transform: translateX(-50%);
  border-radius: 24px;
  background-color: #ffffff;

  z-index: 3;
`;

export const CloseModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
`;
