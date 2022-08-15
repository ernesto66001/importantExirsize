import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { IconButton } from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } }


 function ProductCard({ item }) {
const {deleteProduct,getProductDetails}=useProducts()
     const { addProductToCart, checkProductInCart } = useCart();
    const navigate = useNavigate();

    return (
        <Card sx={{ width: 300, m: 3 }}>
            <CardMedia
                component="img"
                height="140"
                image={item.picture}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $ {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small"
                        onClick={() => deleteProduct(item.id)}
                    >
                    DELETE
                </Button>

                <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                    EDIT
                </Button>

                <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
                    MORE
                </Button>

                <IconButton onClick={() => addProductToCart(item)}>
                    <ShoppingCartRoundedIcon
                        color={checkProductInCart(item.id) ? "secondary" : ""}
                    />
                </IconButton>
                <Checkbox  sx={{color:'red'}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
                <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                />
            </CardActions>
        </Card>
    );
}

export default ProductCard;