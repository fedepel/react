import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import './styles/common.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faBasketShopping} size="2x" color="black" />
      <div className="qty-display">3</div>
    </div>
  );
}

export default CartWidget;