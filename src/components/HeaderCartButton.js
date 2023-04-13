import CartIcon from '@mui/icons-material/ShoppingCart';
import classes from '../styles/HeaderCartButton.module.css';
import { useState } from 'react';

const HeaderCartButton = props => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };


    return(
        <button onClick={props.onShowCart} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}> {props.count}</span>
        </button>
    )
};

export default HeaderCartButton;