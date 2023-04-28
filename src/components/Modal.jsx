import React, { useState } from "react";
import styled from "styled-components";

export const TwoButtonModal = ({ setTwoModalOpen }) => {
  const closeTwoModal = () => {
    setTwoModalOpen(false);
  };

  const confirmTwoModal = () => {
    setTwoModalOpen(true);
  };

  return (
    <StTwoModalContainer>
      <StTwoModalContents>
        <p>모달창입니다.</p>
        <StTwoModalButtonContainer>
          <StTwoModalCancelButton onClick={closeTwoModal}>
            취소
          </StTwoModalCancelButton>
          <StTwoModalConfirmButton onClick={confirmTwoModal}>
            확인
          </StTwoModalConfirmButton>
        </StTwoModalButtonContainer>
      </StTwoModalContents>
    </StTwoModalContainer>
  );
};

export const OneButtonModal = ({ setOneModalOpen }) => {
  const closeModal = () => {
    setOneModalOpen(false);
  };

  return (
    <StOneModalContainer onClick={closeModal}>
      <StOneModalContents>
        <StMdalContainerCloseBtn onClick={closeModal}>
          ❌
        </StMdalContainerCloseBtn>
        <p>모달창입니다.</p>
      </StOneModalContents>
    </StOneModalContainer>
  );
};

const Modal = () => {
  return "잘못된 접근";
};

export default Modal;

const StOneModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StOneModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-content: flex-start;
  align-items: stretch;
`;

const StMdalContainerCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  top: 0.5rem;
  right: 0.5rem;
  text-align: right;
`;

const StTwoModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// ---------- Two Button ----------
const StTwoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StTwoModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-content: space-between;
`;

const StTwoModalCancelButton = styled.button`
  margin: 1rem;
  border: 3px #ff7d7d solid;
  cursor: pointer;
  border-radius: 10px;
  height: 50px;
  width: 180px;
  text-align: center;
  padding: 1px 6px;
  font-weight: 600;
`;

const StTwoModalConfirmButton = styled.button`
  margin: 1rem;
  border: 3px #7a7cff solid;
  cursor: pointer;
  border-radius: 10px;
  height: 50px;
  width: 180px;
  text-align: center;
  padding: 1px 6px;
  font-weight: 600;
`;
