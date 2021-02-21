import * as React from "react";
import { FiSearch } from "react-icons/fi";

import Box from "@components/Box";
import Tabs from "../Tabs";
import { StyledAvatar, StyledToday, StyledHeader } from "../styles";

const Header = () => {
  return (
    <StyledHeader>
      <Box className="item">
        <StyledAvatar>
          <img
            src="https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/09/08102714/4a15a0f80bf686890a84df5ab91323ed_XL.jpg"
            alt="user-avatar"
          />
        </StyledAvatar>
      </Box>
      <Box className="item">
        <StyledToday>Today, 3rd Dec</StyledToday>
      </Box>
      <Box className="item">
        <FiSearch size={24} color="#718093" />
      </Box>
      <Tabs />
    </StyledHeader>
  );
};

export default Header;
