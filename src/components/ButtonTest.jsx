import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ButtonTest = () => {
  return (
    <StButton>
      {/* -------- 버튼 제목 -------- */}
      <ButtonTitle>
        <h2>Button</h2>
      </ButtonTitle>
      {/* -------- 파란색 버튼 -------- */}
      <BlueBtnList>
        {/* -------- 라지 버튼 -------- */}
        <BlueLarge>
          <BlueLargeBtn onClick={() => alert("버튼을 만들어 보세요")}>
            <BlueLargeBtnTItle>Large Primary Button</BlueLargeBtnTItle>
            <BlueLargeBtnArrow>‣</BlueLargeBtnArrow>
          </BlueLargeBtn>
          {Modal}
        </BlueLarge>
        {/* -------- 미디움 버튼 -------- */}
        <BlueMedium className="blueMedium">
          <BlueMediumBtn>Medium</BlueMediumBtn>
        </BlueMedium>

        {/* -------- 스몰 버튼 -------- */}
        <BlueSmall className="blueSmall">
          <BlueSmallBtn>small</BlueSmallBtn>
        </BlueSmall>
      </BlueBtnList>

      {/* -------- 빨간색 버튼 -------- */}
      <RedBtnList>
        {/* -------- 라지 버튼 -------- */}
        <RedLarge>
          <RedLargeBtn
            onClick={() => {
              const userInput = prompt("어렵나요?");
              console.log(userInput);
            }}
          >
            <RedLargeBtnTItle>Large Primary Button</RedLargeBtnTItle>
            <RedLargeBtnArrow>🌱</RedLargeBtnArrow>
          </RedLargeBtn>
          {Modal}
        </RedLarge>
        {/* -------- 미디움 버튼 -------- */}
        <RedMedium className="RedMedium">
          <RedMediumBtn>Medium</RedMediumBtn>
        </RedMedium>

        {/* -------- 스몰 버튼 -------- */}
        <RedSmall className="RedSmall">
          <RedSmallBtn>small</RedSmallBtn>
        </RedSmall>
      </RedBtnList>
    </StButton>
  );
};

export default ButtonTest;

// -------- Button header style --------

const StButton = styled.div`
  border: 1px gray solid;
  margin: 1rem;
`;

const ButtonTitle = styled.div``;

// * ---------------- BlueButton ----------------
// -------- Blue Button List style --------

const BlueBtnList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
`;

// -------- Large Blue Button style --------

const BlueLarge = styled.div`
  border: 3px #aaacdd solid;
  cursor: pointer;
  border-radius: 10px;
  height: 45px;
  width: 200px;
  text-align: center;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlueLargeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const BlueLargeBtnTItle = styled.div`
  font-weight: 700;
`;

const BlueLargeBtnArrow = styled.div`
  font-weight: 700;
`;

// -------- Medium Blue Button style --------
const BlueMedium = styled.div`
  border: 3px #aaacdd solid;
  cursor: pointer;
  border-radius: 10px;
  height: 40px;
  width: 180px;
  text-align: center;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaacdd;
`;

const BlueMediumBtn = styled.button``;

// -------- Small Blue Button style --------
const BlueSmall = styled.div`
  border: 3px #aaacdd solid;
  cursor: pointer;
  border-radius: 10px;
  height: 35px;
  width: 120px;
  text-align: center;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaacdd;
`;

const BlueSmallBtn = styled.button``;

// * ---------------- RedButton ----------------
// -------- Red Button List style --------

const RedBtnList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
`;

// -------- Large Red Button style --------

const RedLarge = styled.div`
  border: 3px #ddaaaa solid;
  cursor: pointer;
  border-radius: 10px;
  height: 45px;
  width: 200px;
  text-align: center;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedLargeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const RedLargeBtnTItle = styled.div`
  font-weight: 700;
`;

const RedLargeBtnArrow = styled.div`
  font-weight: 700;
`;

// -------- Medium Red Button style --------
const RedMedium = styled.div`
  border: 3px #ddaaaa solid;
  cursor: pointer;
  border-radius: 10px;
  height: 40px;
  width: 180px;
  text-align: center;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddaaaa;
`;

const RedMediumBtn = styled.button``;

// -------- Small Red Button style --------
const RedSmall = styled.div`
  border: 3px #ddaaaa solid;
  cursor: pointer;
  border-radius: 10px;
  height: 35px;
  width: 120px;
  text-align: center;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddaaaa;
`;

const RedSmallBtn = styled.button``;
