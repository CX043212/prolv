<template>
  <div class="best">
    <div class="swiper-container best-container">
      <div class="swiper-wrapper best-wrapper">
        <div class="swiper-slide" v-for="(item,index) in YouJiList">
          <img :src="item.coverImgPath">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  computed: {
    ...Vuex.mapState({
      YouJiList: state => state.home0.YouJiList
    })
  },
  // methods: {
  //   ...Vuex.mapActions({
  //     handleHomeData: "home0/handleHomeData"
  //   })
  // },
  updated() {
    let mySwiper = new Swiper(".swiper-container",{
      
      effect: "coverflow",
    });
  },
};
</script>
<style scoped lang="scss">
img {
  width: 6rem;
  height: 3.88rem;
  margin-left: .6rem;
}
.best {
  padding-bottom:1rem; 
  .banner-container {
  }
}
</style>