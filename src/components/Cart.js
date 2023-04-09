import Modal from './Modal.js';
import classes from '../styles/Cart.module.css';

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            
        </ul>

    );

    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.88</span>
        </div>
        <div className={classes.actions}>
            <button className={'button-alt'}>Close</button>
        <button className={classes.button}>Order</button>
        </div>
    </Modal>
};



export default Cart;
