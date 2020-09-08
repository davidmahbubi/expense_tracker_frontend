<template>
  <div class="login-view">
    <h2>Register</h2>
    <form class="mt-4">
      <v-text-field type="text" placeholder="Name"></v-text-field>
      <v-text-field type="email" placeholder="Email"></v-text-field>
      <v-text-field type="password" placeholder="Password"></v-text-field>
      <v-text-field type="password" placeholder="Password Confirmation">
      </v-text-field>
      <v-btn class="mt-2" color="primary" block>Register</v-btn>
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

<style scoped>
.login-view {
  padding: 35px 35px 20px 35px;
}
</style>
