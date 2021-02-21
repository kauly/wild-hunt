import styled from "styled-components";
import Box from "@components/Box";

export const Card = styled(Box)(({ theme, fullWidth = false }) => ({
  backgroundColor: "#fff",
  boxShadow: theme.shadows.large,
  display: "flex",
  alignItems: "center",
  justifyContent: fullWidth ? "space-around" : "center",
  marginLeft: fullWidth ? 0 : theme.space[2],
  marginRight: fullWidth ? 0 : theme.space[2],
  borderRadius: 8,
  borderBottomLeftRadius: fullWidth ? 0 : 8,
  borderBottomRightRadius: fullWidth ? 0 : 8,
  overflow: "hidden",
  "& .img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  "& .text": {
    lineHeight: 2,
  },
}));

export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 40px 1fr 2fr 80px;
  background-color: ${(props) => props.theme.colors.grayDark};
  row-gap: ${(props) => props.theme.space[2]};
  & .skeleton {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const ProductAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 68px;
  height: 68px;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.125);
  margin-right: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
