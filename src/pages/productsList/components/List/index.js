import * as React from "react";
import { FixedSizeList, areEqual } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Infinite from "react-window-infinite-loader";
import Skeleton from "react-loading-skeleton";

import Item from "../ListItem";
import { StyledSkeleton } from "../styles";

const List = ({ items = [], hasNextPage, isNextPageLoading, loadNextPage }) => {
  const itemCount = hasNextPage ? items.length + 1 : items.length;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
  const isItemLoaded = (index) => {
    return !hasNextPage || index < items.length;
  };

  const Row = React.memo(({ index, style }) => {
    return isItemLoaded(index) ? (
      <Item {...items[index].node} styles={style} />
    ) : (
      <StyledSkeleton>
        <Skeleton count={3} />
      </StyledSkeleton>
    );
  }, areEqual);

  return (
    <AutoSizer>
      {({ width, height }) => (
        <Infinite
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
          threshold={5}
        >
          {({ onItemsRendered, ref }) => (
            <FixedSizeList
              width={width}
              height={height}
              itemCount={itemCount}
              itemSize={80}
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {Row}
            </FixedSizeList>
          )}
        </Infinite>
      )}
    </AutoSizer>
  );
};

export default List;
