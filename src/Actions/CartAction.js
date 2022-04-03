import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default CartAction=({product,quantity})=>{
  return (
    {type:"ADD_TO_CART",payload:{product,quantity}}
  )
}

const styles = StyleSheet.create({})