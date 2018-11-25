import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en-EN',
  messages: {
    'en-EN': {
      navigation: {
        title: "Menu",
        homepage: "Homepage",
        reservation: "Booking",
        profile: "Profile",
        messages: "Messages",
        register: "Register",
        login: "Login",
        logout: "Logout"
      }
    },
    'fr-FR': {
      navigation: {
        title: "Menu",
        homepage: "Page d'accueil",
        reservation: "Réserver",
        profile: "Profil",
        messages: "Messages",
        register: "S'inscrire",
        login: "Se connecter",
        logout: "Se déconnecter"
      }
    }
  }
})
