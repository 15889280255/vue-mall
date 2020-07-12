export default {
  addProductCount(state, payload) {
    payload.count++;
  },
  addProduct(state, payload) {
    payload.checked = true;
    state.cartList.push(payload)
  },
  allChecked(state, payload) {
    state.cartList.map(item => {
      item.checked = payload
    });
  }
}