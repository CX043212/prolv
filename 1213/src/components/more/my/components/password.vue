<template>
<div>
    <div class="pass"> 
        <i class="iconfont" @click="handleClick()">&#xe615;</i>
        <p>会员注册</p>
    </div>
    <form class="account">
      <div>
        <label for="username">
          +86: <input type="text" :value = "username" @input="handleChange({type:1,e:$event})" placeholder="请输入手机号码或邮箱" class="username">
        </label>
      </div>
      <div>
          <label for="password">
          密码:<input type="text" :value = "password" @input="handleChange({type:2,e:$event})" placeholder="请输入密码" class="password">
        </label>
      </div>
        <button @click="handleRegisterSuc();handleRegister()" class="reg">注册</button>
    </form>
  <!-- <el-form label-width="100px" class="demo-ruleForm">
    <el-form-item label="+86">
      <el-input :value = "username" @input="handleChange({type:1,e:$event})" placeholder="请输入手机号码或邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input :value = "password" @input="handleChange({type:2,e:$event})" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleRegisterSuc();handleRegister()">注册</el-button>
    </el-form-item>
  </el-form> -->
</div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed:{
    ...Vuex.mapState({
        username:state=>state.home0.username,
        password:state=>state.home0.password
    })
  },
  methods:{
     ...Vuex.mapActions({
        handleChange:"home0/handleChange",
      }),
      ...Vuex.mapMutations({
        handleRegister:"home0/handleAdd"
      }),
      handleRegisterSuc(){
        // sessionStorage.setItem('username',this.username);
        // sessionStorage.setItem('password',this.password);
        this.$router.push("/more/my");//正则判断
      },
      handleClick(){
        this.$router.back()
      }
    },
}
</script>
<style>
.pass{
    display: flex;
    justify-content: flex-start;
    align-items: center;  
    
}
.pass>p{
    margin-left:2.4rem;
}
i{
    color:green;
    font-size:.24rem;
    padding:.3rem;    
}
/* .el-input__inner{
      height: .7rem;
      line-height:.7rem;
      font-size:.24rem;
      margin-top:.2rem;
}
.el-form-item__label{
    margin-top:.2rem;
    font-size:.24rem;
    line-height: .7rem;
} */
/* input{
  height:.4rem;
} */
.account{
  display:flex; 
  justify-content: flex-end;
  flex-wrap:wrap;
  width:100%;
}
.account>div{
  width:100%;
}
.account>div>label{
   display:flex;
   justify-content: flex-end;
   align-items: center;
   width:100%;
}
.account>div>label>input{
  display:flex;
  justify-content: center;
  align-items: center;
  width:80%;
  height: .7rem;
  font-size:.24rem;
  margin-top:.2rem;
  margin-right:.7rem; 
  margin-bottom:.2rem;
  border:1px solid #DCDFE6;
}
.account>.reg{
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
