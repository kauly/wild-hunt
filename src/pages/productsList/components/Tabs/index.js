import * as React from "react";

import { AppStateContext } from "@assets/state";
import { StyledLink, StyledTab } from "../styles";

const Tabs = () => {
  const { order, _handleOrder } = React.useContext(AppStateContext);

  const _handleSelected = (ev) => _handleOrder(ev.target.id);

  return (
    <StyledTab>
      <StyledLink id="RANKING" selected={order} onClick={_handleSelected}>
        popular
      </StyledLink>
      <StyledLink id="NEWEST" selected={order} onClick={_handleSelected}>
        newest
      </StyledLink>
    </StyledTab>
  );
};

export default Tabs;
