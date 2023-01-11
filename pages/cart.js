import React, { useContext } from 'react';
// import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
} from '@mui/material';

export default function CartScreen() {

  return (
    <>
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      <p> -- </p>
      <p> -- </p>
      <p> -- </p>

      <div>
        Cart is empty. <NextLink href="/">Go shopping</NextLink>
      </div>
    </>  
  );
}