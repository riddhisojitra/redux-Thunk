import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { DeleteProduct, FetchProduct } from '../Action/Index';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productList.product);
    console.log('product', product);

    useEffect(() => {
        FetchProduct();
        dispatch(FetchProduct());
    }, []);

    
    const onDelete = (id) => {
        setIsLoading(true);
        console.log(id);
        swal({
            title:'Are you sure for Delete ?',
            icon:"warning",
        }).then (willDelete=>{
            if(willDelete){
                setIsLoading(true);
                // setTimeout(()=>{
                //     swal({title:"Deleted!",title: "product has been deleted!", icon:"success"})
                // },1000)
            }
            dispatch(DeleteProduct(id));
            setIsLoading(false);

        })        
    }

    return (
        <>

            <Stack paddingTop={2}>
                {
                    isLoading ? <Typography>is loading..</Typography> : null

                }
                <Grid container spacing={2}>
                    {
                        product&&
                        product.length !== 0 &&
                        product.map((products, key) => {
                            const { id, image, description, title, price } = products;
                            return (
                                <Grid item md={3} key={key}>
                                    <Card key={id} sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={image}
                                            alt="green iguana"
                                        />
                                        <CardContent >
                                            <Typography variant="h5" component="div">
                                                {title}
                                            </Typography>
                                            <Typography>
                                                {description}
                                            </Typography>
                                            <Typography>
                                                price:$
                                                {price}
                                            </Typography>

                                        </CardContent>
                                        <CardActions>
                                            <Button disabled={isLoading} onClick={() => onDelete(id)} size="small">Delete</Button>
                                            <Button size="small">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )


                        })
                    }
                </Grid>
            </Stack>


        </>
    )
}

export default Home
