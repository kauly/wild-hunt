import * as React from "react";
import Box from "@components/Box";

const Card = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
      boxShadow="small"
      mx={2}
      borderRadius={8}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
