import { Header } from './../../components'
import ShowCase from './../../components/Product/ShowCase'
import styles from './Product.module.css'

const ECHO_DOT_URL = "https://m.media-amazon.com/images/I/51FytxrYnoL.jpg"

function Product() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <ShowCase
          amount={1000}
          isNew
          soldAmount={12}
          img={{ source: ECHO_DOT_URL, alt: "Icone" }}
          whoIsSelling="Amazon"
          description={"\
Lorem Ipsum is simply dummy text of\
        the printing and\
        typesetting industry. Lorem \
Ipsum has been the industry's standard dummy text ever since the 1500s, "}
        />
      </div>
    </div>
  )
}

export default Product;
