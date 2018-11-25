<template>
  <form class="form-login" :action="actionUrl" method="post" @submit.prevent="login">

    <fieldset>
      <legend class="al3">Connexion</legend>
      <input v-model="email" type="text" name="email" value=""
             id="email" autocomplete="off" placeholder="Adresse email"/>

      <input v-model="password" type="password" id="password" name="password"
             autocomplete="new-password" autocorrect="off" autocapitalize="off"
             placeholder="Mot de passe"/>

      <!--<div class="flow">-->
      <!--<input type="checkbox" id="remember_me" name="_remember_me" value="false" />-->
      <!--<label for="remember_me">Se souvenir de moi</label>-->
      <!--</div>-->

      <!--<input type="hidden" name="_target_path" value="" />-->
    </fieldset>

    <button type="submit" class="al6">Se connecter</button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        email: null,
        password: null,
        error: null
      }
    },
    computed: {
      actionUrl () {
        return '/login'
      }
    },
    methods: {
      login() {
        this.$auth.login({
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            email: this.email,
            password: this.password
          },
          rememberMe: true,
          fetchUser: true,
          success (response) {
            this.$toast.show('Hey !', 'Connexion réussie')
          },
          error (error) {
            this.$toast.error('Oups !', 'Connexion échouée');
          }
        })
      }
    }
  }
</script>
