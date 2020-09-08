<template>
  <div class="login-view">
    <h2>Register</h2>
    <form class="mt-4" @submit.prevent="postRegister">
      <v-text-field
        v-model="name"
        type="text"
        placeholder="Name"
      ></v-text-field>
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
      <v-text-field
        v-model="passwordConfirm"
        type="password"
        placeholder="Password Confirmation"
      >
      </v-text-field>
      <v-btn type="submit" class="mt-2" color="primary" block>Register</v-btn>
      <div class="text-center mt-5">
        <span>
          Already have an account ?
          <router-link :to="{ name: 'Login' }" class="text-decoration-none">
            Login
          </router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { POST_REGISTER } from './../../store/actions.type';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    async postRegister() {
      try {
        this.triggerProcess(true);
        await this.$store.dispatch(`auth/${POST_REGISTER}`, {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        });
        window.Notiflix.Notify.Success('Account registered');
      } catch (err) {
        window.Notiflix.Notify.Failure(err.response.data.message);
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
