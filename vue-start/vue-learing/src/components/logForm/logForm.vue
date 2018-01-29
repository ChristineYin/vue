<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名:</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名" v-model="usernameModel">
        </div>
        <span class="g-form-error">{{ userError.errText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码:</span>
        <div class="g-form-input">
          <input type="password" placeholder="请输入密码" v-model="passwordModel">
        </div>
        <span class="g-form-error">{{ passwordError.errText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p class="errorText">{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userError () {
        let errText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errText = '不包含@'
        } else {
          status = true
          errText = ''
        }

        if (!this.userFlag) {
          errText = ''
          this.userFlag = true
        }

        return {
          status,
          errText
        }
      },
      passwordError () {
        let errText, status
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false
          errText = '密码不是1-6位'
        } else {
          status = true
          errText = ''
        }

        if (!this.passwordFlag) {
          errText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errText
        }
      }
    },
    methods: {
      onLogin () {
        if (!this.userError.status || !this.passwordError.status) {
          this.errorText = '部分选项未通过'
        } else {
          this.errorText = ''
          this.$http.get('api/login').then((res) => {
            console.log(res.data)
            this.$emit('has-log', res.data.data)
          }, (err) => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .errorText{
    color: red;
    font-size:  20px;
  }
</style>