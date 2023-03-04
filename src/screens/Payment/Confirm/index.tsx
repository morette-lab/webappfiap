import { useLocation } from 'react-router-dom'

import { Header, Button } from './../../../components'
import styles from './Confirm.module.css'
import Colors from '../../../constants/colors'

function ConfirmPayment({ }) {
  const location = useLocation()

  const { productSource, productAlt, productDescription } = location.state

  return (
    <div>
      <Header />
      <div>
        <div className={styles.initialContent}>
          <p className={styles.confirmPurchase}>Confirme a sua compra</p>
          <table className={styles.productsTable}>
            <tr>
              <th>Produto</th>
              <th>R$ 474,00</th>
            </tr>
            <tr>
              <th>Frete</th>
              <th>Grátis</th>
            </tr>
            <hr />
            <tr>
              <th>Você pagará</th>
              <th>R$ 474, 00</th>
            </tr>
          </table>
          <Button style={{
            backgroundColor: Colors.blue,
            color: "white",
            border: "1px solid white",
            borderRadius: 0,
            margin: "10px 0",
            width: "90%"
          }} secondary text="Confirmar compra" />
        </div>
        <div>
          {productSource && <img src={productSource} alt={productAlt} />}
          {productDescription && <p>{productDescription}</p>}
        </div>
      </div>
    </div>
  )
}

export default ConfirmPayment;
