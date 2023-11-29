<template>
  <div class="login">
    <br/>
    <br/>
    <br/>
    LOGIN PAGE
    <br/>
    <br/>
    <br/>
    <input type="text" placeholder="account" v-model="account">
    <br/>
    <br/>
    <input type="password" placeholder="password" v-model="password">
    <br/>
    <br/>
    <button @click="loginClick">login</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',

    props: {},
    data () {
      return {
        account: '',
        password: ''
      }
    },
    components: {},
    mounted () {
      let that = this

      if(window.MAXIMA) that.requestToken()

      Object.defineProperty(window, 'MAXIMA_BACK', {
        set: function (value) {
          if (value.status === 'ok') {
            that.login({
              token: value.token
            }).then(e => {
              console.log(e)

              that.$store.dispatch('updateProfile', e)
              that.$store.dispatch('login', e.token)

              that.$nextTick(() => {
                that.$router.push('/')
              })
            }).catch(err => {
              alert(err.msg)
            })
          } else {
            // reject
          }
        }
      })
    },
    watch: {},
    methods: {
      // get token
      requestToken () {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'MAXIMA_token', url: window.location.origin }))
      },

      // login button click
      loginClick () {
        this.login({
          account: this.account,
          password: this.password
        }).then(e => {
          console.log(e)

          this.$store.dispatch('updateProfile', e)
          this.$store.dispatch('login', e.token)

          this.$nextTick(() => {
            this.$router.push('/')
          })
        }).catch(err => {
          alert(err.msg)
        })
      },

      // login api
      login (params) {
        return new Promise((resolve, reject) => {
          if (params.token) {
            resolve({
              code: 0,
              id: 0,
              from: 'MAXIMA APP',
              name: 'maxima',
              token: `maxima-${params.token}-token`
            })
            return
          }

          if (params.account && params.password) {
            resolve({
              code: 0,
              id: 1,
              from: 'Login Page',
              name: 'maxima-2',
              token: `maxima-${params.account}-token`
            })
            return
          }

          reject({
            code: 1,
            msg: 'Login failed'
          })
        })
      }
    }
  }
</script>
