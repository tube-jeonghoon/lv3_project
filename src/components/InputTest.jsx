import React, { useState } from "react";
import styled from "styled-components";

const InputTest = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const inputPriceHandler = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPrice(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  const clickAddButton = () => {
    const priceNumber = Number(price.replace(/,/g, ""));
    alert(`이름: ${name}, 가격: ${priceNumber}`);
  };

  return (
    <StInputTest>
      {/* -------- 인풋 제목 -------- */}
      <div className="inputTestHeader">
        <h2>Input</h2>
      </div>

      <StInutTestContents>
        {/* -------- 이름 -------- */}
        <StInputTestName>
          <StInputTestNameP>이름</StInputTestNameP>
          <input type="text" value={name} onChange={inputNameHandler} />
        </StInputTestName>

        {/* -------- 가격 -------- */}
        <StInputTestPrice>
          <StInputTestPriceP>가격</StInputTestPriceP>
          <input type="text" value={price} onChange={inputPriceHandler} />
        </StInputTestPrice>

        {/* -------- 저장 버튼 -------- */}
        <StInputTestBtn onClick={clickAddButton}>저장</StInputTestBtn>
      </StInutTestContents>
    </StInputTest>
  );
};

export default InputTest;

const StInputTest = styled.div`
  border: 1px gray solid;
  margin: 1rem;
`;

const StInutTestContents = styled.div`
  display: flex;
  align-items: center;
`;

const StInputTestName = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const StInputTestNameP = styled.p`
  margin: 0.5rem;
`;

const StInputTestPriceP = styled.p`
  margin: 0.5rem;
`;

const StInputTestPrice = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const StInputTestBtn = styled.button`
  border: 1px gray solid;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
`;
