import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import CityRaiders from '@/components/more/cityRaiders/cityRaiders'
import Distination from '@/components/more/distination/distination'
import My from '@/components/more/my/my'
import More from '@/components/more/more'
import Search from '@/components/home/search'
import Hotplay from "@/components/hotplay/hotplay"
import Hot1 from "@/components/hotplay/components/content/hot1"
import Hot2 from "@/components/hotplay/components/content/hot2"
import Hot3 from "@/components/hotplay/components/content/hot3"
import Hot4 from "@/components/hotplay/components/content/hot4"
import Details from "@/components/more/cityRaiders/components/details"
import Zbx from "@/components/zbx/zbx"
import Local from "@/components/zbx/components/local/local"
import Listdetails from "@/components/zbx/components/local/details"
import Register from '@/components/more/my/components/register'
import Password from '@/components/more/my/components/password'
import MainLogin from '@/components/home/mainLogin'
import BannerList from '@/components/home/bannerList/bannerList'
import MainDetails from '@/components/home/mainDetails/mainDetails'
import Cart from '@/components/home/cart/cart'
import Line from '@/components/more/distination/components/detail/line'
import Detail from '@/components/more/distination/components/detail/detail'
import Loading from "@/components/loading.vue"
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			// redirect:'/distination',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			children: [{
				path: 'search',
				name: 'search',
				component: Search,
			}]
		},
		{
			path:"/loading",
			name:"loading",
			component:Loading
		},
		{
			path: '/bannerList',
			name:'bannerList',
			component:BannerList,
		},
		{
			path: '/mainDetails',
			name:'mainDetails',
			component:MainDetails,
		},
		{
			path:"/cart",
			name:"cart",
			component:Cart
		},
		{
			path:'/home/mainLogin',
			name:'mainLogin',
			component:MainLogin
		},
		{
			path:"/zbx",
			name:'zbx',
			component:Zbx
		},
		{
			path:"/zbx/local",
			name:"local",
			component:Local
			
		},
		{
			path:"/zbx/details",
			name:"listdetails",
			component:Listdetails
			
		},
		{
			path: '/more',
			name: 'more',
			component: More,
		},
		{
			path: '/more/cityRaiders',
			name: 'cityRaiders',
			component: CityRaiders,

		},
		{
			path: "/more/cityRaiders/details",
			name: "datails",
			component: Details
		},
		{
			path: '/more/distination',
			name: 'distination',
			component: Distination,
		},
		{
			path: '/detail',
			name:'detail',
			component:Detail,
		  },
		  {
			path: '/detail/line',
			name:'line',
			component:Line,
		  },
		{
			path: '/hot1',
			name: 'hot1',
			component: Hot1,
		}, {
			path: '/hot2',
			name: 'hot2',
			component: Hot2,
		}, {
			path: '/hot3',
			name: 'hot3',
			component: Hot3,
		},
		{
			path: '/hot4',
			name: 'hot4',
			component: Hot4,
		},
		{
			path: '/hotplay',
			name: 'hotplay',
			component: Hotplay,
		},
		{
			path: '/more/my',
			name: 'my',
			component: My,
		},
		 {
		  path:'/register',
		  name:'register',
		  component:Register,
		},
		{
		  path:'/password',
		  name:'password',
		  component:Password,
		},
	]
})
