<template>
  <div class="login-view">
    <h2>Login</h2>
    <form class="mt-4" @submit.prevent="postLogin">
      <v-text-field
        v-model="email"
        type="email"
        placeholder="Email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        placeholder="Password"
      ></v-text-field>
      <v-btn type="submit" class="mt-2" color="primary" block>Login</v-btn>
      <div class="text-center mt-5">
        <span>
          Don't have an account yet ?
          <router-link :to="{ name: 'Register' }" class="text-decoration-none">
            Register
          </router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { POST_LOGIN } from './../../store/actions.type';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async postLogin() {
      try {
        this.triggerProcess(true);
        await this.$store.dispatch(`auth/${POST_LOGIN}`, {
          email: this.email,
          password: this.password,
        });
        this.$router.replace({ name: 'Home' });
      } catch (err) {
        window.Notiflix.Notify.Failure(
          err.response.data.message || 'Unknown error'
        );
      } finally {
        this.triggerProcess(false);
      }
    },
    triggerProcess(condition) {
      this.$emit('process', condition);
    },
  },
};
</script>

<style scoped>
.login-view {
  padding: 35px 35px 20px 35px;
}
</style>
