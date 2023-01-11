import React from "react";
import matic from "../assets/polygon-matic.png";
import Image from "next/image";
import NextLink from "next/link";

import {
  Grid,
  Card,
  CardActionArea,
  CardContent, 
  Typography,
  CardActions,
  Button,
  } from '@mui/material';

const ProductCard = (props) => {
  return (
          <>
          <Grid key={props.data.id}>
            <Card>
            <NextLink href={`/product/${props.data.slug}`} passHref>
                <CardActionArea>
                  <Image
                    width = "500px"
                    height = "450px"
                    src={props.data.img}
                    alt={props.data.name}
                  />
                  {/* <CardMedia
                  sx={{ width: 500, height: 350 }} 
                  component="img"
                  image={props.data.img}
                  title={props.data.name}
                  ></CardMedia> */}
                  <CardContent>
                    <Typography>{props.data.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
              <CardActions>
                <Image
                  src={matic}
                  alt=""
                  height={64}
                  width={64}
                  className="h-8"
                />
                <Typography>${props.data.price}</Typography>
                <Button size="small" color="primary"> 
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
          </>
  )
          
};

export default ProductCard;
