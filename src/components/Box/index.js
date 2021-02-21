import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  border,
  grid,
  shadow,
  position,
  typography,
} from "styled-system";
import propTypes from "@styled-system/prop-types";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  border,
  grid,
  shadow,
  position,
  typography
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.grid,
};

export default Box;
