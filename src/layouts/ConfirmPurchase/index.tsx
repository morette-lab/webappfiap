import "./ConfirmPurchase.css";
import { shoppingCart } from "../../assets/images";

function ConfirmPurchase() {
    return (
        <div className="container">
      <div className="content">
        <h2>Compra relizada</h2>
        <img width="30" height="30" src={shoppingCart}/>
        <h4>continuar comprando</h4>
      </div>
      
    </div>
    )
}

export default ConfirmPurchase