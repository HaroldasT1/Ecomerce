import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton}from 'material-ui/core';
import{AddShoppingCart, CallMissedSharp} from '@material-ui/icons'
import { IconButton } from '@material-ui/core';

const Product = (props) => {
  return (
    <Card className={CallMissedSharp.root}>
        <CardMedia className={classes.media} image='' title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography varient="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography varient="h5"gutterBottom>
                    {product.price}
                </Typography>
            </div>  
            <Typography varient="h2" color="textSecondary">{product.description}</Typography> 
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
           <IconButton aria-label="Add to cart">
               <AddShoppingCart/>
            </IconButton> 
        </CardActions>
    </Card>
  )
}

export default Product

