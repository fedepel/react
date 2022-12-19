import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faBasketShopping} size="2x" color="white" />
      <div className="qty-display">3</div>
    </div>
  );
};

export default CartWidget;