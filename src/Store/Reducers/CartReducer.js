const initState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
}

const CartReducer = (state = initState, action) => {
  let findproduct;
  let index;
  switch (action.type) {
    case 'ADD_TO_CART':
      const {product,quantity}=action.payload;
    const check=state.products.find(item=>item.id===product.id);
    if(check){
      return state;

  }
  else{
    const tprice= state.totalPrice+product.price*quantity;
  }
  default:
    return state;
}}