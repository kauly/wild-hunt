import * as React from "react";
import { useQuery } from "@apollo/client";

import { POST_LIST } from "@assets/queries";
import { AppStateContext } from "@assets/state";
import Header from "./components/Header";
import List from "./components/List";
import { ProductsGrid, StyledListContainer } from "./components/styles";
import Skeleton from "react-loading-skeleton";

const ProductsList = () => {
  const { order } = React.useContext(AppStateContext);
  const { data, loading, fetchMore } = useQuery(POST_LIST, {
    variables: { order },
  });

  const _handleMore = () => {
    fetchMore({
      variables: {
        order,
        cursor: data.posts.pageInfo.endCursor,
      },
    });
  };

  return (
    <ProductsGrid>
      <Header />
      <StyledListContainer>
        {data?.posts?.edges ? (
          <List
            items={data.posts.edges}
            hasNextPage={data.posts.pageInfo.hasNextPage}
            isNextPageLoading={loading}
            loadNextPage={_handleMore}
          />
        ) : (
          <Skeleton count={20} />
        )}
      </StyledListContainer>
    </ProductsGrid>
  );
};

export default ProductsList;
