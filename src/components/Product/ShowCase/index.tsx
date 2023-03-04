import { AiOutlineShareAlt } from 'react-icons/ai'

import { Button } from '../../../components';
import styles from './ShowCase.module.css'

interface ImgInfo {
  source: string;
  alt: string;
}

interface ShowCaseProps {
  img: ImgInfo;
  description: string;
  isNew: boolean;
  soldAmount: number;
  whoIsSelling: string;
  amount: number;
}

interface PriceComponent {
  amount: number
}

const Components = {
  Price: ({ amount }: PriceComponent) => <p style={{ margin: 0 }}> R$ {amount}</p >
}

function ShowCase({
  isNew,
  soldAmount,
  description,
  img: {
    alt,
    source
  },
  whoIsSelling,
  amount
}: ShowCaseProps) {
  return (
    <div className={styles.container}>
      <small className={styles.smallInfo}>{isNew && "Novo"}|{`${soldAmount} venvidos`}</small>
      <p className={styles.description}>{description}</p>
      <img alt={alt} src={source} className={styles.img} />
      <div className={styles.sale}>
        <p>Vendido por <a href="https://www.google.com">{whoIsSelling}</a></p>
        <div className={styles.shareIconContainer}><AiOutlineShareAlt className={styles.shareIcon} /></div>
      </div>
      <div className={styles.saleButtons}>
        <Button text={
          <div>Individual
            <br />
            <Components.Price amount={amount / 100} />
          </div>
        } secondary />
        <Button text={
          <div>Coletiva
            <br />
            <Components.Price amount={amount / 100} />
          </div>
        } />
      </div>
      <div className={styles.enterInGroup}>
        <span>
          Ou entre em um grupo
        </span>
      </div>
      <div className={styles.enterInGroupContainer}>
        <div>
          <p>Grupo de Marcelo</p>
          <p>1 lugar disponível</p>
        </div>
        <Button text="Entrar" />
      </div>
    </div>
  )
}

export default ShowCase;
