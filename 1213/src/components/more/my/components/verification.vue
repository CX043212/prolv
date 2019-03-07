<template>
<div>
    <div class="vert">
      <div>
          <label for="username">
          +86:<input type="text" ref = "username" placeholder="请输入手机号码或邮箱" class="username">
        </label>
      </div>
      <div>
          <label for="password">
          密码:<input type="text" ref = "password" placeholder="请输入密码" class="password">
        </label>
      </div>
        <button @click="handlelogin()" class="login">登陆</button>
    </div>
    <div class="password">
       <p @click="handleClick1()">忘记密码</p>
       <p @click="handleClick()">注册</p>
    </div>
</div>
  <!-- <el-form  label-width="100px" class="demo-ruleForm">
    <el-form-item label="+86">
      <el-input ref = "username" placeholder="请输入手机号码或邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input ref = "password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="btn" @click="handlelogin()">登陆</el-button>
    </el-form-item>
    <div class="password">
       <p @click="handleClick1()">忘记密码</p>
       <p @click="handleClick()">注册</p>
    </div>
  </el-form> -->
</template>
<script>
import Vuex from "vuex"
// import {login} from "../../../../apis/home.js";
export default {
//  data(){
//     return {
//       username:"",
//       password:""
//     }
//   },
  computed:{
    ...Vuex.mapState({
        username0:state=>state.home0.list.user.username,
        password0:state=>state.home0.list.user.password
    })
  },
  methods:{
    handlelogin(){
      console.log(this.$refs.username.value)
      if(this.$refs.username.value == this.username0){
        if(this.$refs.password.value == this.password0){
          this.$router.push("/home")
        }else{
          alert("密码错误")
        }
      }else{
        alert("用户名错误")
      }
    },
    // console.log(sessionStorage.getItem('userName'));
    // if(this.$refs.username.value == sessionStorage.getItem('userName')){
    //     if(this.$refs.password.value == sessionStorage.getItem('password')){
    //       this.$router.push("/home")
    //     }else{
    //       alert("密码错误")
    //     }
    //   }else{
    //     alert("用户名错误")
    //   }
    // },
    handleClick(){
        this.$router.push("/register")
    },
    handleClick1(){
        this.$router.push("/password")
    }
  },

// 业务逻辑
//   前台获取用户数据，向后台发送post请求，验证成功后
// 前台接受数据，改变用户登录状态
// 将登录状态及用户数据写入到state中
// 这样多个页面就可以直接使用this.$store.getters.getuname调用state中的用户信息
};
</script>
<style>
.password{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.password>p:first-child{
  margin-left:.3rem;
}
.vert{
  display:flex; 
  justify-content: flex-end;
  flex-wrap:wrap;
  width:100%;
}
.vert>div{
  width:100%;
}
.vert>div>label{
   display:flex;
   justify-content: flex-end;
   align-items: center;
   width:100%;
}
.vert>div>label>input{
  height:100%;
  display:flex;
  justify-content: center;
  width:80%;
  height: .7rem;
  line-height:.7rem;
  font-size:.24rem;
  margin-top:.2rem;
  margin-right:.7rem; 
  margin-bottom:.2rem;
  border:1px solid #DCDFE6;
}
.vert>.login{
  margin-top:.2rem;
  font-size:.24rem;
  line-height: .7rem;
  width:80%;
  color: #fff;
  text-align: center;
  font-size:.24rem;
  background: #ff5346;
  border-radius: .13rem;
  margin:auto;
}
</style>
