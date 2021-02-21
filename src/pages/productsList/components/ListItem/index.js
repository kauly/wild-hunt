import * as React from "react";
import { useHistory } from "react-router-dom";
import { BiUpArrow } from "react-icons/bi";

import Box from "@components/Box";
import { StyledListItem, StyledProductAvatar, StyledLikes } from "../styles";

const ListItem = ({ id, name, tagline, votesCount, thumbnail, styles }) => {
  const hst = useHistory();
  const _handleClick = () => hst.push(`/products/${id}`);
  return (
    <div
      style={{
        ...styles,
        display: "flex",
        justifyContent: "center",
      }}
      onClick={_handleClick}
    >
      <StyledListItem>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridRow="1 / 3"
        >
          <StyledProductAvatar>
            <img src={thumbnail.url} alt="product-avatar" />
          </StyledProductAvatar>
        </Box>

        <Box className="text title">{name}</Box>
        <Box className="text description">{tagline}</Box>
        <StyledLikes filled>
          <span>
            <BiUpArrow size={18} />
          </span>
          <span>{votesCount}</span>
        </StyledLikes>
      </StyledListItem>
    </div>
  );
};

export default ListItem;
