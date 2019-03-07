<template>
  <div class="best">
    <div class="swiper-container best-container">
      <div class="swiper-wrapper best-wrapper">
        <div class="swiper-slide" v-for="(item,index) in ZbxList">
          <img :src="item.AbsolutePicAddress">
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
      ZbxList: state => state.zbx.ZbxList.Body.AreaMarkList
    })
  },
	created(){
		this.handle()
	},
  methods: {
    ...Vuex.mapActions({
      handle: "zbx/handleZbx"
    })
  },
  updated() {
    let mySwiper = new Swiper(".swiper-container",{
      effect: "slide",
			autoplay:true
    });
		

  },
};
</script>
<style scoped lang="scss">
img {
  width: 100%;
  height: 3.04rem;
}
.best {
	width: 100%
}
</style>