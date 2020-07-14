export default {
  addCart(context,payload){
    return new Promise((resolve)=>{
      let oldProduct = context.state.cartList.find(item =>item.iid === payload.iid)
      if(oldProduct){
        context.commit('addProductCount',oldProduct)
        resolve('数量+1')
      }else{
        payload.count = 1
        context.commit('addProduct',payload)
        resolve('加入购物车')
      } 
    })
  }
}