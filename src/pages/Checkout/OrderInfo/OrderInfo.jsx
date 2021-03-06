import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { convertPrice } from 'utilities/converter'
import BurgerIngredients from 'pages/BurgerBuilder/BurgerIngredients/BurgerIngredientsContainer'
import styles from './OrderInfo.module.scss'

const OrderInfo = ({ ingredients, totalPrice }) => {
  const currentTotalPrice = convertPrice(totalPrice, 'sign')

  return (
    <div className={ styles.OrderWrapper }>
      <div className={ styles.OrderBurger }>
        <BurgerIngredients />
      </div>

      <div className={ styles.OrderInfo }>
        <div className={ styles.OrderHeaders }>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients:</p>
        </div>

        <ul className={ styles.Order }>
          { Object.values(ingredients).map(({ label, count }, index) => count > 0 && (
            <li key={ index }>
              <span>{ label }</span>
              <span>{ count }</span>
            </li>
          )) }
        </ul>

        <div className={ styles.OrderTotal }>
          <p>Total: <span>{ currentTotalPrice }</span></p>
          <Link to="/checkout/order-form" className="continue">Continue</Link>
        </div>
      </div>
    </div>
  )
}

OrderInfo.propTypes = {
  ingredients: PropTypes.object,
  totalPrice: PropTypes.string
}

OrderInfo.defaultProps = {
  ingredients: {},
  totalPrice: '0'
}

export default OrderInfo
