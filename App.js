import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

// Import Screens
import Login from './Screen/Login.js'
import TableMap from './Screen/TableMap.js'
import Order from './Screen/Order.js'
import Menu from './Screen/Menu.js'
import Account from './Screen/Account.js'
import MenuClient from './Screen/MenuClient.js'
import Cart from './Screen/Cart.js'
import BillHistory from './Screen/BillHistory.js'
import Orderhistory from './Screen/Orderhistory.js'
import Promotion from './Screen/Promotion.js'
export default function App() {
  const [currentpage, setpage] = useState('Login')
  const [billId, setBillId] = useState(null)

  const changepage = (page, newBillId = null) => {
    setpage(page)
    if (newBillId !== null) {
      setBillId(newBillId)
    }
  }

  const renderScreen = () => {
    switch (currentpage) {
      case 'Login':
        return <Login changepage={changepage} />

      case 'TableMap':
        return <TableMap changepage={changepage} />

      case 'Order':
        return <Order changepage={changepage} />

      case 'Menu':
        return <Menu changepage={changepage} />

      case 'Account':
        return <Account changepage={changepage} />
    
      case 'Promotion':
        return <Promotion changepage={changepage} />

      case 'MenuClient':
        return <MenuClient changepage={changepage} billId={billId} />

      case 'Cart':
        return <Cart changepage={changepage} billId={billId} />

      case 'BillHistory':
        return <BillHistory changepage={changepage} billId={billId} />

      case 'Orderhistory':
        return <Orderhistory changepage={changepage} billId={billId} />

      default:
        return <Login changepage={changepage} />
    }
  }

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})