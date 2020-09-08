<template>
  <div class="auth-view">
    <img
      src="./../../assets/icons/wallet.svg"
      alt=""
      class="auth-logo"
      :class="{ 'auth-logo-animate': process }"
    />
    <h1 class="app-title">Expense Tracker</h1>
    <v-container>
      <v-row class="auth-form-container">
        <v-col :sm="8" :lg="6" :xl="4" class="mx-auto">
          <v-card elevation="1">
            <transition name="fade" mode="out-in">
              <router-view @process="onFormProcess" />
            </transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      process: false,
    };
  },
  methods: {
    onFormProcess(state) {
      this.process = state;
    },
  },
};
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.auth-view {
  text-align: center;
}
.auth-logo {
  width: 100%;
  max-width: 120px;
  margin: 130px 0 20px 0;
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  transform: rotate(-10deg);
  transition: 0.2s;
}
.app-title {
  font-family: 'Righteous', cursive;
}
.auth-form-container {
  text-align: left;
  margin-top: 30px;
}
.auth-logo-animate {
  animation: rotate 1.5s infinite ease-out;
}
</style>
