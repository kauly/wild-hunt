import * as React from "react";
import Box from "@components/Box";

const Button = ({ children, variant }) => (
  <Box
    width={160}
    border="1px solid grayDark"
    boxShadow="small"
    display="flex"
    alignItems="center"
    justifyContent="center"
    fontWeight={500}
    color={variant === "filled" ? "white" : "black"}
    bg={variant === "filled" ? "primary" : "white"}
    borderRadius={4}
    p={2}
  >
    {children}
  </Box>
);

export default Button;
