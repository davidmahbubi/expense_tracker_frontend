<template>
  <div class="auth-view">
    <img src="./../../assets/icons/wallet.svg" alt="" class="auth-logo" />
    <h1 class="app-title">Expense Tracker</h1>
    <v-container>
      <v-row class="auth-form-container">
        <v-col :sm="8" :lg="6" :xl="4" class="mx-auto">
          <v-card elevation="1">
            <router-view />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.auth-view {
  text-align: center;
}
.auth-logo {
  width: 100%;
  max-width: 120px;
  margin: 130px 0 20px 0;
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  transform: rotate(-10deg);
}
.app-title {
  font-family: 'Righteous', cursive;
}
.auth-form-container {
  text-align: left;
  margin-top: 30px;
}
</style>
