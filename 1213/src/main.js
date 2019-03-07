import Vue from 'vue'
import App from './App'
Vue.prototype.bus = new Vue;
import './common/css/reset.css';
import './common/js/flexble';
import './assets/iconfont/iconfont.css';
import router from './router';
import store from "./store";
// import VueLazyload from 'vue-lazyload';
import Mint from 'mint-ui';
Vue.use(Mint);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
import '../node_modules/mint-ui/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(VueLazyload, {
//   loading: 'static/loading.gif',
//   
// })

import '../node_modules/swiper/dist/css/swiper.min.css'
import '../node_modules/swiper/dist/js/swiper.min.js'
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
