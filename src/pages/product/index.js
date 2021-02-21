import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";

import Box from "@components/Box";
import { POST } from "@assets/queries";
import { Grid, Card, ProductAvatar } from "./components/styles";
import Button from "./components/Button";

const Product = () => {
  const hst = useHistory();
  const { id } = useParams();
  const { data, loading, error } = useQuery(POST, {
    variables: {
      id,
    },
  });

  const _handleBack = () => hst.push("/");

  return (
    <Grid>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
      >
        <RiArrowLeftSLine size={24} color="#1e272e" onClick={_handleBack} />
        <BsThreeDotsVertical size={24} color="#1e272e" />
      </Box>
      <Card>
        {loading ? (
          <Skeleton className="skeleton" />
        ) : (
          <img src={data.post.media[0].url} alt="product-img" className="img" />
        )}
      </Card>
      <Card>
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          flex="1 1 100%"
          p={2}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <ProductAvatar>
              {loading ? (
                <Skeleton />
              ) : (
                <img src={data.post.thumbnail.url} alt="product-thumb" />
              )}
            </ProductAvatar>
            <Box fontWeight="bold">
              {data?.post?.name || <Skeleton className="skeleton" />}
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={2}
          >
            <span className="text">
              {data?.post?.description || (
                <Skeleton count={5} className="skeleton" />
              )}
            </span>
          </Box>
        </Box>
      </Card>
      <Card fullWidth>
        {loading ? (
          <Skeleton className="skeleton" />
        ) : (
          <React.Fragment>
            <Button>Get It</Button>
            <Button variant="filled">{`Upvote(${data.post.votesCount})`}</Button>
          </React.Fragment>
        )}
      </Card>
    </Grid>
  );
};

export default Product;
