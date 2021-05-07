import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const StyledProgressBar = styled.div`
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
  height: ${(props) =>
    props.size === "large" ? "16px" : props.size === "medium" ? "12px" : "8px"};
  border-radius: ${(props) => (props.value < 98 ? "4px 0px 0px 4px" : "4px ")};
`;

const Wrapper = styled.div`
  border-radius: 4px;
  width: 370px;
  padding: ${(props) => (props.size === "large" ? "4px" : "0")};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>
      <StyledProgressBar
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        value={value}
        size={size}
      >
        <VisuallyHidden>{value} percent</VisuallyHidden>
      </StyledProgressBar>
    </Wrapper>
  );
};

export default ProgressBar;
