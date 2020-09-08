<template>
  <div class="login-view">
    <h2>Login</h2>
    <form class="mt-4">
      <v-text-field type="email" placeholder="Email"></v-text-field>
      <v-text-field type="password" placeholder="Password"></v-text-field>
      <v-btn class="mt-2" color="primary" block>Login</v-btn>
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

<style scoped>
.login-view {
  padding: 35px 35px 20px 35px;
}
</style>
