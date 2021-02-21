import styled from "styled-components";
import { grid } from "styled-system";

import Box from "@components/Box";

export const ProductsGrid = styled(Box)({
  display: "grid",
  gridTemplateRows: "100px auto",
  width: "100%",
  height: "100%",
  minHeight: 0,
});
export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-bottom: 1px solid #e8e8e8;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.125);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledToday = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.125);
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.grayDark};
  color: ${(props) => props.theme.colors.black};
  padding: 6px 18px;
  border-radius: 4px;
`;

export const StyledTab = styled.nav`
  display: flex;
  grid-column: 1 / 4;
`;

export const StyledLink = styled.span`
  transition: all 0.4s ease-out;
  flex: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border-bottom: 2px solid white;
  color: ${({ selected, theme, id }) =>
    selected === id ? theme.colors.primary : theme.colors.navy};
  border-bottom-color: ${({ selected, theme, id }) =>
    selected === id ? theme.colors.primary : theme.colors.white};
`;

export const StyledListItem = styled.div`
  display: grid;
  width: 90%;
  height: 74px;
  position: relative;
  grid-template-columns: 80px auto;
  grid-template-rows: repeat(2, 1fr);
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  overflow: visible;
  margin-right: 10px;
  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title {
    font-size: ${(props) => props.theme.fontSizes[2]};
    font-weight: 600;
    padding-top: ${(props) => props.theme.space[2]};
  }
  .description {
    font-size: 12px;
    padding-top: 8px;
    padding-right: ${(props) => props.theme.space[4]};
  }
`;

export const StyledProductAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.125);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  ${grid}
`;

export const StyledLikes = styled.div`
  position: absolute;
  right: -10px;
  top: 20px;
  width: 38px;
  height: 38px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  background-color: ${({ theme, filled }) =>
    filled ? theme.colors.primary : theme.colors.white};
  font-weight: bold;
  color: ${({ theme, filled }) =>
    filled ? theme.colors.white : theme.colors.navy};

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & span {
    font-size: ${(props) => props.theme.fontSizes[0]};
  }
  & svg {
    fill: ${({ theme, filled }) =>
      filled ? theme.colors.white : theme.colors.navy};
    color: ${({ theme, filled }) =>
      filled ? theme.colors.white : theme.colors.navy};
  }
`;

export const StyledListContainer = styled.div`
  overflow-y: auto;
  min-height: 0;
  background-color: ${(props) => props.theme.colors.gray};
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const StyledSkeleton = styled.div`
  width: 90%;
  height: 74px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  margin-right: 10px;
`;
