<template>
  <div class="wrapper">
   <img class="wrapper__img" src="https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png">
   <div class="wrapper__input">
     <input type="text" class="wrapper__input__content" placeholder="请输出账号"/>
   </div>
   <div class="wrapper__input">
     <input type="text" class="wrapper__input__content" placeholder="请输入密码"
     v-model="pwd"
     />
   </div>
   <div class="wrapper__input">
     <input type="text" class="wrapper__input__content" placeholder="请再次输入密码"
     v-model="pwd2"
     />
   </div>
   <div class="wrapper__register-button" @click="handleRegister">注册</div>
   <div class="wrapper__register-link" @click="toLoginWeb">已有账号去登录</div>
  </div>
  <Toast v-if="show" :message="toastMessage"/>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'
import { reactive, toRefs } from 'vue'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    usrname: '',
    pwd: '',
    pwd2: ''
  })

  const handleRegister = async () => {
    try {
      const res = await post('/api/usr/register', data)
      if (res?.status === 200) {
        router.push({ name: 'Login' })
      } else {
        showToast('no space!')
        console.log(1)
      }
    } catch (err) {
      showToast('error!')
    }
  }
  const toLoginWeb = () => {
    router.push({ name: 'Login' })
  }
  const { usrname, pwd, pwd2 } = toRefs(data)
  return { handleRegister, toLoginWeb, usrname, pwd, pwd2 }
}
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleRegister, toLoginWeb, usrname, pwd, pwd2 } = useRegisterEffect(showToast)
    return { handleRegister, toLoginWeb, show, usrname, pwd, pwd2, toastMessage }
  }
}
</script>

 <style lang="scss" scoped>
 .wrapper {
   position: absolute;
   top: 50%;
   left: 0;
   right: 0;
   transform:  translateY(-50%);
   font-size: .16rem;
   &__img {
     display: block;
     margin: 0 auto .4rem auto;
     width: .66rem;
     height: .66rem;
   }
   &__input {
     box-sizing: border-box;
     height: .48rem;
     margin: 0 .4rem .16rem .4rem;
     padding: 0 .16rem;
     background: #F9F9F9;
     border: .01rem solid rgba(0,0,0,0.10);
     border-radius: .06rem;
     &__content {
       margin-top: .15rem;
       border: none;
       outline: none;
       width: 100%;
       background: none;
       color: rgba(0,0,0,0.50);
       &::placeholder {
         color: rgba(0,0,0,0.50);
         font-size: .16rem;
       }
     }
   }
   &__register-button {
     margin: .32rem .4rem 0 .4rem;
     line-height: .49rem;
     background: #0091FF;
     box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
     border-radius: 4px;
     color: #fff;
     font-size: .16rem;
     text-align: center;
   }
   &__register-link {
     margin: .16rem auto auto auto;
     text-align: center;
     font-size: 14px;
     color: rgba(0,0,0,0.50);
     letter-spacing: 0;
   }
 }
 </style>
