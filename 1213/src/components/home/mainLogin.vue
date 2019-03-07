<template>
	<div class="mainLogin">
		<div class="mainTop">
			<a href="##" @click="handleClickMainHome()"></a>
			<h2>我的同程</h2>
			<a href="##">
				<i class="iconfont" v-html="icon"></i>
			</a>
		</div>
		<div class="mainBottom">
			<div class="mainBottomBanner">
				<a href="##">
					<span></span>
					<a href="##" @click="handleClickMainLogin()">登录/注册</a>
					<div class="mainPic">
						<img src="//pic4.40017.cn/index/slide/2017/02/03/10/5WpEc4.png" alt="">
					</div>
					<i></i>
				</a>
			</div>
			<div class="mainCenter">
				<div class="mainCenterTop">
					<span></span>
					<h1>全部订单</h1>
					<span></span>
				</div>
				<div class="mainCenterCenter">
					<div class="mainCenterCen">
						<span></span>
						<h1>奖金</h1>
						<span></span>
					</div>
					<div class="mainCenterCent">
						<span></span>
						<h1>立返</h1>
						<span></span>
					</div>
					<div class="mainCenterCente">
						<span></span>
						<h1>红包</h1>
						<span></span>
					</div>
				</div>
				<div class="mainCenterBottom">
					<div class="mainCenterBot">
						<span></span>
						<h1>常用信息</h1>
						<span></span>
					</div>
					<div class="mainCenterBoto">
						<span></span>
						<h1>我的发票</h1>
						<span></span>
					</div>
					<div class="mainCenterBott">
						<span></span>
						<h1>我的收藏</h1>
						<span></span>
					</div>
					<div class="mainCenterBotto">
						<span></span>
						<h1>关于同程</h1>
						<span></span>
					</div>
				</div>
			</div>
		</div>
		<div class="mainFooter">
			<div class="mainFooterTop">
				<a href="##">客服电话</a>
				<a href="##">下载客户端</a>
				<a href="##">关于同程</a>
				<a href="##">电脑版</a>
			</div>
			<p>&copy;2019同城旅游</p>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{
				icon:"&#xe637;",
			}
		},
		methods:{	
			handleClickMainHome(){
				this.$router.push("/home")
			},
			handleClickMainLogin(){
				this.$router.push("/more/my")
			},
		}
	}
</script>

<style lang="scss">
	.mainLogin{
		width:100%;
		height:13.4rem;
		background:#edf0f5;
		.mainTop{
			width:100%;
			height:.88rem;
			background:#fff;
			display:flex;
			justify-content:space-around;
			align-items: center;
			a:nth-of-type(1){
				display:block;
				width:.36rem;
				height:.3rem;
				margin:0 .4rem;
				background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARFJREFUeNrM1z0KwkAQhuFNjKWn8AqCjZATCBaKoiew9CZ2YmHnD1rYCBYW3sBG8CSCFiL6LWwghMkmxjCzA2+R7gFNdsern/eqwPTRGLXRXZU4fkHMCoXoiGqSoAhTMc8tdECeBCiJ0fNGM/QpCxT8iRmiHfdPxobJA2LFZIEG3BgbSGOW3Jg0kBiGAolikiBxTBzkBCYChQRGmeet+QqzpUEjAiM2GnRVDo1vDscJeroC0n/eKeoQqBfqmesFS/HX/kSgqmiNutyvvTMo6uhIQ204UGmHK4UKOFC264cIKuuCxo7Kc4VlReXdOthQv6xBNlRDalGkUAt0kVylI9QDzc2Oz74oUqgmupWJ0fMVYAD4j3BF0ySikQAAAABJRU5ErkJggg==) no-repeat;
			}
			h2{
				width:100%;
				height:.88rem;
				text-align:center;
				line-height:.88rem;
			}
			a:nth-of-type(2){
				display:block;
				width:.88rem;
				height:.88rem;
				i{
					font-size:.8rem;
					color:#23beae;
				}
			}
		}
		.mainBottom{
			width:100%;
			height:9.98rem;
			.mainBottomBanner{
				width:100%;
				height:2rem;
				background:#00c8b3;
				a{
					display:block;
					width:100%;
					height:1.75rem;
					display:flex;
					position:relative;
					span{
						display:block;
						width:1.2rem;
						height:1.2rem;
						background:url(//pic5.40017.cn/02/000/79/55/rBLkCVpVxdeAMfR6AAAPea7J_mw319.png) no-repeat center;
						margin-top:.4rem;
						margin-left:.4rem;
					}
					a{
						display:block;
						width:2.04rem;
						height:.42rem;
						margin-top:.8rem;
						padding-left:.2rem;
						font-size:.4rem;
						color:#fff;
					}
					.mainPic{
						width:2rem;
						height:1.08rem;
						position:absolute;
						left:4.5rem;
						top:.6rem;
					}
					i{
						display:block;
						width:.14rem;
						height:.26rem;
						margin-left:3.5rem;
						margin-top:.7rem;
						background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUJBREU3NDFDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUJBREU3NDBDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhvvNagAAAFSSURBVHjaYvj//78VEL8C4hNALAnEDKRgEDHrPwJcBmJRUg3wBuK/SIacBWJ+UgwA4TQg/odkyHEg5iHFABAu/I8K9gExFykGgHANmiHbgZiNFANAuBXNkHVAzEyKASA8Ac2QZbgMwWUAI1r0gsAcqDhRBjBAbVyEZshEUgyAGbIGzZAOUgxggMbCVjRD6kgxAIQ5gXgvmiFFpBjAAE1UR5AMAKXcNAYScx8oj1xDMuQDEwNpwBKIlZH4V0ix3QGIvyLZ/hiIZYjVbAHEn5A0vwBiVWID0RDkVyTNoNJLl9ho1IFqgAcaEBsTm5BUgPgZkuYvQGxJbFKWhwYSDIACz4nY3CgNxLeRNP8EYk9iywNRtITyB4iDiC2RBIH4AprmKGLLRH5oxYKczlOILZVBmeQQWk7LI6VeQC8wKkmtmX4gaW4ip25sA+K35GgGYYAAAwCGqt+oUjxSTwAAAABJRU5ErkJggg==) no-repeat center;
					}
				}
			}
			.mainCenter{
				width:100%;
				height:7.98rem;
				background::#edf0f5;
				padding-bottom:.36rem;
				.mainCenterTop{
					width:100%;
					height:.86rem;
					background:#fff;
					margin-bottom:.2rem;
					display:flex;
					position:relative;
					span:nth-of-type(1){
						position:absolute;
						display:inline-block;
						width:.34rem;
						height:.38rem;
						left:.22rem;
						top:.24rem;
						background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAYAAACFSPFPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUMxM0FERjJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUMxM0FERjFDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg8J3SkAAAGHSURBVHjaYvz//z+Dyv71qgwMDB1A7ALEfAz0A5+AeA8QV9xxDLzNqLxvnTqQcwKIBRgGDnwAYgsmINE2wA5hgNrfxgSNGhiwBWJGOmJbJLvdmNDSyBE6hwiyfTxMDIMIjDpmWDmmFYh/AvF/MvBPqH6qOaYEiNnI9DBIXx41HdMDxL/IdMxvIJ5EjEJQdfAfmT8ASeX/aG4azdqjWXs0a4/mpuGQtYnOuvTI2kRnXXpkbaKzLrUcUw3E7Di6G2xQeWwA1FNdC8Qf8ZTQcMBCw/RIck+VlrmJ5J4qLR2Dr6eaiqb2MRBr0tIxuHqqpUA8G4l/DYit7zgG3qB3odcJxF1I/BPQUHtM6wSMDuYAcTISfzsQhwLxV3rkJvQOvjUSfzHUYb8Hom5CdsgEII5HdwjMMZ+Q+DY0brdUAHEhemGH7Jg9SPzDZLZz/xOoLP8CcQo0AeMtZ0BF+Qcq+BxXZfkdiIOAeB7BQg+Uv4G0BRCvA+LPFDgGvbJ8B/WkGxBvIsYAgAADAL6piskPT/zGAAAAAElFTkSuQmCC) no-repeat;
					}
					h1{
						width:100%;
						height:.86rem;
						line-height:.5rem;
						padding:.16rem 0 .18rem .94rem;
						font-size:.32rem;
						color:#333;
					}
					span:nth-of-type(2){
						position:absolute;
						display:inline-block;
						width:.14rem;
						height:.26rem;
						position:absolute;
						right:.3rem;
						top:.3rem;
						z-index:7;
						background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
					}
				}
				.mainCenterCenter{
					width:100%;
					height:2.64rem;
					
					margin-bottom:.2rem;
					.mainCenterCen{
						width:100%;
						height:.86rem;
						background:#fff;
						display:flex;
						position:relative;
						border-bottom:1px solid #cdcdcd;
						span:nth-of-type(1){
							position:absolute;
							display:inline-block;
							width:.34rem;
							height:.38rem;
							left:.22rem;
							top:.24rem;
							background:url(//pic4.40017.cn/index/slide/2017/02/14/15/Oal2D4.png) no-repeat;
						}
						h1{
							width:100%;
							height:.86rem;
							line-height:.5rem;
							padding:.16rem 0 .18rem .94rem;
							font-size:.32rem;
							color:#333;
						}
						span:nth-of-type(2){
							position:absolute;
							display:inline-block;
							width:.14rem;
							height:.26rem;
							position:absolute;
							right:.3rem;
							top:.3rem;
							z-index:7;
							background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
						}
					}
					.mainCenterCent{
						width:100%;
						height:.86rem;
						background:#fff;
						display:flex;
						position:relative;
						border-bottom:1px solid #cdcdcd;
						span:nth-of-type(1){
							position:absolute;
							display:inline-block;
							width:.34rem;
							height:.38rem;
							left:.22rem;
							top:.24rem;
							background:url(//pic4.40017.cn/index/slide/2017/02/14/15/b1zHWP.png) no-repeat;
						}
						h1{
							width:100%;
							height:.86rem;
							line-height:.5rem;
							padding:.16rem 0 .18rem .94rem;
							font-size:.32rem;
							color:#333;
						}
						span:nth-of-type(2){
							position:absolute;
							display:inline-block;
							width:.14rem;
							height:.26rem;
							position:absolute;
							right:.3rem;
							top:.3rem;
							z-index:7;
							background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
						}
					}
					.mainCenterCente{
						width:100%;
						height:.86rem;
						background:#fff;
						display:flex;
						position:relative;
						span:nth-of-type(1){
							position:absolute;
							display:inline-block;
							width:.34rem;
							height:.38rem;
							left:.22rem;
							top:.24rem;
							background:url(//pic4.40017.cn/index/slide/2017/02/14/15/qOvy8i.png) no-repeat;
						}
						h1{
							width:100%;
							height:.86rem;
							line-height:.5rem;
							padding:.16rem 0 .18rem .94rem;
							font-size:.32rem;
							color:#333;
						}
						span:nth-of-type(2){
							position:absolute;
							display:inline-block;
							width:.14rem;
							height:.26rem;
							position:absolute;
							right:.3rem;
							top:.3rem;
							z-index:7;
							background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
						}
					}
				}
				.mainCenterBottom{
					width:100%;
					height:3.52rem;
					background:#fff;
					.mainCenterBot{
						width:100%;
						height:.86rem;
						background:#fff;
						display:flex;
						position:relative;
						span:nth-of-type(1){
							position:absolute;
							display:inline-block;
							width:.34rem;
							height:.38rem;
							left:.22rem;
							top:.24rem;
							background:url(//pic4.40017.cn/index/slide/2017/02/14/15/46ziqu.png) no-repeat;
						}
						h1{
							width:100%;
							height:.86rem;
							line-height:.5rem;
							padding:.16rem 0 .18rem .94rem;
							font-size:.32rem;
							color:#333;
						}
						span:nth-of-type(2){
							position:absolute;
							display:inline-block;
							width:.14rem;
							height:.26rem;
							position:absolute;
							right:.3rem;
							top:.3rem;
							z-index:7;
							background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
						}
					}
					.mainCenterBoto{
						width:100%;
						height:.86rem;
						background:#fff;
						display:flex;
						position:relative;
						span:nth-of-type(1){
							position:absolute;
							display:inline-block;
							width:.34rem;
							height:.38rem;
							left:.22rem;
							top:.24rem;
							background:url(//pic5.40017.cn/01/001/73/db/rBLkBVpUVEaAcNOCAAABL8b2Cps210.png) no-repeat;
						}
						h1{
							width:100%;
							height:.86rem;
							line-height:.5rem;
							padding:.16rem 0 .18rem .94rem;
							font-size:.32rem;
							color:#333;
						}
						span:nth-of-type(2){
							position:absolute;
							display:inline-block;
							width:.14rem;
							height:.26rem;
							position:absolute;
							right:.3rem;
							top:.3rem;
							z-index:7;
							background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
						}
					}
					.mainCenterBott{
						width:100%;
						height:.86rem;
						background:#fff;
						display:flex;
						position:relative;
						span:nth-of-type(1){
							position:absolute;
							display:inline-block;
							width:.34rem;
							height:.38rem;
							left:.22rem;
							top:.24rem;
							background:url(//pic4.40017.cn/index/slide/2017/02/14/15/9svmdr.png) no-repeat;
						}
						h1{
							width:100%;
							height:.86rem;
							line-height:.5rem;
							padding:.16rem 0 .18rem .94rem;
							font-size:.32rem;
							color:#333;
						}
						span:nth-of-type(2){
							position:absolute;
							display:inline-block;
							width:.14rem;
							height:.26rem;
							position:absolute;
							right:.3rem;
							top:.3rem;
							z-index:7;
							background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
						}
					}
					.mainCenterBotto{
						width:100%;
						height:.86rem;
						background:#fff;
						display:flex;
						position:relative;
						span:nth-of-type(1){
							position:absolute;
							display:inline-block;
							width:.34rem;
							height:.38rem;
							left:.22rem;
							top:.24rem;
							background:url(//pic4.40017.cn/index/slide/2017/02/14/15/kwLq2E.png);
						}
						h1{
							width:100%;
							height:.86rem;
							line-height:.5rem;
							padding:.16rem 0 .18rem .94rem;
							font-size:.32rem;
							color:#333;
						}
						span:nth-of-type(2){
							position:absolute;
							display:inline-block;
							width:.14rem;
							height:.26rem;
							position:absolute;
							right:.3rem;
							top:.3rem;
							z-index:7;
							background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ2ODQxNkNDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ2ODQxNkJDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puut5W4AAAGCSURBVHjajJQ9SMNAFICTiA5ddOkmTo7iIk7FLSJFFOwgBQVXcVBHN6WLk/hDwUlEi+AgFQQtmNRdnEQncXBw8WeJiziU+D19gQxJLoWPl0vz5V3evTvb87yqZVn7UHNdd9vK8XNgAvpgy/f9xbzSJnyADXXEqlFiSk/ESQigC44Qy6ZMFuIdoQLf0ANniKVMScUbgkytAwW4RBzOlFS8ICxACL2A5w9mSiqeEJZ1WIQ2Yn+mpGKdsKHDAbhGLEb/22EYplaJB3djWaVY47wwcAxLsgoNvR6FJi8qZGbSbLJ2TZjWW6dGScUhwr3W4NPJIUjlWrGirTkGQSrmQ1TydQpxkDo9BFncNozorT2EldR1kgoRzmNCQyuZvE4I3dKwsWpJa1XI0knsCATZU4cxQZp4Ni4kTU/aZ06vb2EG4Se1YclSIyzp8BGmEL6SvvnvmxDkI6ND5QXGEF7TlsLmNJonHusZ8Q4lhGfTdt9RIfjfFdlCJF3BG5QRHvIcYb8CDABscI3XL7Uu3QAAAABJRU5ErkJggg==) no-repeat center;
						}
					}
				}
			}
		}
		.mainFooter{
			width:100%;
			height:1.02rem;
			.mainFooterTop{
				width:100%;
				height:.42rem;
				display:flex;
				justify-content:center;
				a{
					// float:left;
					display:inline-block;
					height:.28rem;
					padding:0 .14rem ;
					margin-right:.08rem;
					border-right:1px solid #cdcdcd;
				}
				a:nth-of-type(4){
					border:none;
				}
			}
			p{
				width:100%;
				height:.6rem;
				display:flex;
				justify-content:center;
				align-items:center;
			}
		}
	}
</style>
