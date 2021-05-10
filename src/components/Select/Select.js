import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectStyled = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const CustomPresentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  border: 0;
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  font-family: "Roboto", sans-serif;
  ${SelectStyled}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${SelectStyled}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectStyled value={value} onChange={onChange}>
        {children}
      </SelectStyled>
      <CustomPresentation>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down"></Icon>
        </IconWrapper>
      </CustomPresentation>
    </Wrapper>
  );
};

export default Select;
