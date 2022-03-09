<template>
  <div id="main-container">
    <div class="app flex flex-column">
      <navigation />
      <div class="app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/navigation.vue";
export default {
  name: "vue invoice",
  components: {
    Navigation,
  },
  data() {
    return {
      msg: "Welcome to our Invoice App",
      hello: "welcome",
    };
  },
  methods: {
    onclick() {},
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #141625;
  color: #fff;
  margin: 0 auto;
}

.app {
  min-height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }

  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;
  @media (min-width: 900px) {
    padding-top: 72px;
  }
}
</style>
