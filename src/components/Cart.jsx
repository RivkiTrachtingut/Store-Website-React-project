
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../redux/CartSlice'; // Update the path accordingly
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, Table, TableHead, TableBody, TableRow, TableCell, Typography, Paper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const calculateTotal = (cartItems, shipping) => {
    const total = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    return shipping ? total + 10 : total;
};

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const [shipping, setShipping] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleShippingChange = (event) => {
        setShipping(event.target.checked);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (confirm) => {
        if (confirm) {
            dispatch(clearCart());
            alert("Order confirmed!");
        }
        setOpen(false);
    };

    const totalAmount = calculateTotal(cartItems, shipping);

    return (
        <Container
            component={Paper}
            elevation={3}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '10vh',
                // padding: '20px', 
                margin: '100%',
                maxWidth: '600px',
                width: '4000px'
            }}
        >
            <Typography variant="h4" gutterBottom>
                <ShoppingCartIcon />  Shopping Cart
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Product</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Subtotal</TableCell>
                        <TableCell align="center">Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartItems.map(item => (
                        <TableRow key={item.id}>
                            <TableCell align="center">{item.title}</TableCell>
                            <TableCell align="center">{item.price.toFixed(2)} $</TableCell>
                            <TableCell align="center">
                                <IconButton onClick={() => dispatch(decreaseQuantity(item))}>
                                    <RemoveIcon />
                                </IconButton>
                                {item.quantity}
                                <IconButton onClick={() => dispatch(increaseQuantity(item))}>
                                    <AddIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell align="center">{(item.price * item.quantity).toFixed(2)} $</TableCell>
                            <TableCell align="center">
                                <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div>
                <Checkbox
                    checked={shipping}
                    onChange={handleShippingChange}
                    inputProps={{ 'aria-label': 'controlled shipping' }}
                />
                <span>Home delivery (Cost: $10)</span>
            </div>
            <Typography variant="h6">
                Total: {totalAmount.toFixed(2)} $
            </Typography>
            <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
                Proceed to Checkout
            </Button>
            <Dialog open={open} onClose={() => handleClose(false)}>
                <DialogTitle>Complete Order</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to complete the order?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(false)} color="primary">
                        No
                    </Button>
                    <Button onClick={() => handleClose(true)} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Cart;


