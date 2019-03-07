export default {
    goodsCount(state){
        let goodsPrice=0;
        state.goodsList.map((item)=>{
            goodsPrice += (item.count*item.price*10)/10;
        })

        return {
            goodsPrice
        }

    }
}