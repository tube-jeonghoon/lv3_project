import React, { useState } from "react";
import styled from "styled-components";
import { OneButtonModal, TwoButtonModal } from "./Modal";

const ModalTest = () => {
  const [oneModalOpen, setOneModalOpen] = useState(false);
  const [twoModalOpen, setTwoModalOpen] = useState(false);

  const oneShowModal = () => {
    setOneModalOpen(true);
  };

  const twoShowModal = () => {
    setTwoModalOpen(true);
  };

  return (
    <StModalTest>
      <h2>Modal</h2>
      <StModalTestList>
        {/* 닫기 버튼이 하나있고 외부 영역을 누르면 모달이 닫히는 버튼 */}
        <StFirstModal>
          <StFirstModalBtn onClick={oneShowModal}>
            One Button Modal
          </StFirstModalBtn>
          {oneModalOpen && <OneButtonModal setOneModalOpen={setOneModalOpen} />}
        </StFirstModal>

        <StSecondModal>
          {/* 닫기 버튼이 두개 외부영역을 눌러도 닫히지 않는 버튼 */}
          <StSecondModalBtn onClick={twoShowModal}>
            Two Button Modal
          </StSecondModalBtn>
          {twoModalOpen && <TwoButtonModal setTwoModalOpen={setTwoModalOpen} />}
        </StSecondModal>
      </StModalTestList>
    </StModalTest>
  );
};

export default ModalTest;

const StModalTest = styled.div`
  border: 1px gray solid;
  margin: 1rem;
`;

const StModalTestList = styled.div`
  display: flex;
`;

// ---------- First Modal ----------

const StFirstModal = styled.div`
  margin: 1rem;
`;

const StFirstModalBtn = styled.button`
  margin: 1rem;
  border: 3px #aaacdd solid;
  border-radius: 10px;
  height: 50px;
  width: 180px;
  text-align: center;
  padding: 1px 6px;
  font-weight: 600;
`;

// ---------- Second Modal ----------

const StSecondModal = styled.div`
  margin: 1rem;
`;

const StSecondModalBtn = styled.button`
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
