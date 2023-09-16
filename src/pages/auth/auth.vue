<template>
  <div class="wrapper">
    <div class="entry-logo">
      <icon name="logo" />
    </div>
    <h4 class="subtext">More than just repository. This is our digital world.</h4>
    <button @click="getToken" class="auth-btn">Authorize with github</button>
    <img src="../../assets/MacbookPro.png">
    <h4 class="credits">© Gitogram from Dmitry Khn</h4>
  </div>
</template>

<script>
  import { icon } from '../../icons'

  const clientId = '93ec76c4d9ba3ddc60a3'
  const clientSecret = '6b4b4ef20241c2f327d400aa299f4c1853338c2d'

  export default {
    name: 'authPage',
    components: {
      icon
    },
    methods: {
      getToken () {
        const apiUrl = 'https://github.com/login/oauth/authorize'
        const params = new URLSearchParams()
        params.append('client_id', clientId)
        params.append('scope', 'repo:status read:user')
        window.location.href = `${apiUrl}?${params}`
      }
    },
    async created () {
      const code = new URLSearchParams(window.location.search).get('code')
      if (code) {
        try {
          const responce = await fetch('https://webdev-api.loftschool.com/github', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({ clientId, clientSecret, code })
          })
          const { token } = await responce.json()
          localStorage.setItem('token', token)
          this.$router.replace({ name: 'feeds' })
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
  }
  .entry-logo {
    width: 174px;
    margin-bottom: 10px;
  }
  .subtext {
    font-size: 16px;
    text-align: center;
    width: 200px;
    color: #6f6f6f;
    font-weight: 300;
    margin-bottom: 32px;
  }
  .auth-btn {
    width: 200px;
    color: #fff;
    padding: 12px 14px;
    border-radius: 8px;
    background-color: #31AE54;
    margin-bottom: 60px;
  }
  .credits {
    font-size: 14px;
    text-align: center;
    width: 200px;
    color: #6f6f6f;
    font-weight: 300;
    margin-bottom: 32px;
  }
</style>