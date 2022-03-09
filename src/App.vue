<template>
  <div id="main-container">
    <div class="app flex">
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
</style>
