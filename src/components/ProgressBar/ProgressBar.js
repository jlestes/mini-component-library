import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Bar = styled.div`
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
  height: ${(props) =>
    props.size === "large" ? "16px" : props.size === "medium" ? "12px" : "8px"};
  border-radius: "4px 0px 0px 4px";
`;

const StyledProgressBar = styled.div`
  border-radius: ${(props) => (props.size === "large" ? "8px" : "4px")};
  padding: ${(props) => (props.size === "large" ? "4px" : "0")};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <StyledProgressBar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <BarWrapper>
        <Bar value={value} size={size}>
          <VisuallyHidden>{value} percent</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </StyledProgressBar>
  );
};

export default ProgressBar;
