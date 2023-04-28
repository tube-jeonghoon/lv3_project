import React, { useState } from "react";
import styled from "styled-components";

const SelectTest = () => {
  // ---------- First Selete Button ----------
  const [selectedFirstItem, setSelectedFirstItem] = useState("리액트");
  const [contextFirstMenuOpen, setContextFirstMenuOpen] = useState(false);

  const openFirstContextMenu = () => {
    if (contextFirstMenuOpen) {
      setContextFirstMenuOpen(false);
    } else {
      return setContextFirstMenuOpen(true);
    }
  };

  const selectFirstMenu = (item) => {
    setSelectedFirstItem(item);
    setContextFirstMenuOpen(false);
  };

  // ---------- Second Selete Button ----------
  const [selectedSecondItem, setSelectedSecondItem] = useState("리액트");
  const [contextSecondMenuOpen, setContextSecondMenuOpen] = useState(false);

  const openSecondContextMenu = () => {
    if (contextSecondMenuOpen) {
      setContextSecondMenuOpen(false);
    } else {
      return setContextSecondMenuOpen(true);
    }
  };

  const selectSecondMenu = (item) => {
    setSelectedSecondItem(item);
    setContextSecondMenuOpen(false);
  };

  return (
    <StSelectTest>
      <div className="selectTestTitle">
        <h2>Select</h2>
      </div>
      <StSeleteBtnList>
        {/* ---------- 첫번째 버튼 ----------*/}
        <StSelectFirstBtn className="selectFirstButton">
          <StOpenContextFirstMenuBtn onClick={openFirstContextMenu}>
            <StSelectItemFirstTitle>{selectedFirstItem}</StSelectItemFirstTitle>
          </StOpenContextFirstMenuBtn>
          {contextFirstMenuOpen && (
            <StOpenContextFirstMenuList>
              <StOpenFirstContextMenu onClick={() => selectFirstMenu("리액트")}>
                리액트
              </StOpenFirstContextMenu>
              <StOpenFirstContextMenu onClick={() => selectFirstMenu("자바")}>
                자바
              </StOpenFirstContextMenu>
              <StOpenFirstContextMenu onClick={() => selectFirstMenu("스프링")}>
                스프링
              </StOpenFirstContextMenu>
              <StOpenFirstContextMenu
                onClick={() => selectFirstMenu("리액트네이티브")}
              >
                리액트 네이티브
              </StOpenFirstContextMenu>
            </StOpenContextFirstMenuList>
          )}
        </StSelectFirstBtn>

        {/* ---------- 두번째 버튼 ----------*/}
        <StSelectSecondBtn className="selectSecondButton">
          <StOpenContextSecondMenuBtn onClick={openSecondContextMenu}>
            <StSelectItemSecondTitle>
              {selectedSecondItem}
            </StSelectItemSecondTitle>
          </StOpenContextSecondMenuBtn>
          {contextSecondMenuOpen && (
            <StOpenContextSecondMenuList>
              <StOpenSecondContextMenu
                onClick={() => selectSecondMenu("리액트")}
              >
                리액트
              </StOpenSecondContextMenu>
              <StOpenSecondContextMenu onClick={() => selectSecondMenu("자바")}>
                자바
              </StOpenSecondContextMenu>
              <StOpenSecondContextMenu
                onClick={() => selectSecondMenu("스프링")}
              >
                스프링
              </StOpenSecondContextMenu>
              <StOpenSecondContextMenu
                onClick={() => selectSecondMenu("리액트네이티브")}
              >
                리액트 네이티브
              </StOpenSecondContextMenu>
            </StOpenContextSecondMenuList>
          )}
        </StSelectSecondBtn>
      </StSeleteBtnList>
    </StSelectTest>
  );
};

export default SelectTest;

const StSelectTest = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  border: 1px gray solid;
  margin: 1rem;
  overflow: hidden;
  height: 150px;
`;

const StSeleteBtnList = styled.div`
  display: flex;
`;

// ---------- First Button style ----------

const StSelectFirstBtn = styled.div`
  overflow: hidden;
`;

const StOpenContextFirstMenuBtn = styled.button`
  background-color: transparent;
  border: 1px #dcdcdc solid;
  border-radius: 10px;
  padding: 0.5rem 3rem;
  cursor: pointer;
  outline: none;
  margin-left: 1rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;
  width: 200px;
  height: 45px;
`;

const StSelectItemFirstTitle = styled.div`
  font-family: "roboto";
  border: 1px;
`;

const StOpenContextFirstMenuList = styled.div`
  border: 1px #dcdcdc solid;
  border-radius: 10px;
  width: 200px;
  margin: 0.5rem;
  position: absolute;
  background-color: #fff;
`;

const StOpenFirstContextMenu = styled.div`
  cursor: pointer;
  padding: 12px;
  &:hover {
    background-color: gray;
    border-radius: px;
  }
`;

// ---------- Second Button style ----------

const StSelectSecondBtn = styled.div``;

const StOpenContextSecondMenuBtn = styled.button`
  background-color: transparent;
  border: 1px #dcdcdc solid;
  border-radius: 10px;
  padding: 0.5rem 3rem;
  cursor: pointer;
  outline: none;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;
  width: 200px;
  height: 45px;
`;

const StSelectItemSecondTitle = styled.div`
  font-family: "roboto";
  border: 1px;
`;

const StOpenContextSecondMenuList = styled.div`
  border: 1px #dcdcdc solid;
  border-radius: 10px;
  width: 200px;
  margin: 0.5rem;
`;

const StOpenSecondContextMenu = styled.div`
  cursor: pointer;
  margin: 12px;
  &:hover {
    background-color: gray;
  }
`;
