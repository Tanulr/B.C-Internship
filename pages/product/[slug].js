import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@mui/material';
import useStyles from '../../utils/styles';
import { ThemeProvider } from '@mui/material/styles';
import db from '../../utils/db';
import Product from '../../models/Product';
import axios from 'axios';
import { Store } from '../../utils/Store';

export default function ProductScreen(props) {
  const { product } = props;
  // const classes  = useStyles();
  if (!product) {
    return (<div>Product Not Found</div>);
  }
  

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta
          name="product-name"
          content="prodcuct page"
        />
        <link rel="ic
        on" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
      
      <NextLink href="/" passHref>
        <Link>
          <Typography variant = "h1">back to products</Typography>
        </Link>
      </NextLink>
      
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            width = "500px"
            height = "450px"
            src={product.img}
            alt={product.name}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              {/* <Typography className={classes.h1}> */}
              <Typography variant = "h1" component = "h1"> 
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: </Typography>
            </ListItem>
            <ListItem>
              {/* <Rating value={product.rating} readOnly></Rating> */}
              <Link href="#reviews">
                <Typography>({product.numReviews} reviews)</Typography>
              </Link>
            </ListItem>
            {/* <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem> */}
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <List>
        <ListItem>
          <Typography name="reviews" id="reviews" variant="h2">
            Customer Reviews
          </Typography>
        </ListItem>
      </List>
      </ThemeProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}