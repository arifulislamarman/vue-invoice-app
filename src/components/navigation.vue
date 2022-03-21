<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/images/file-invoice-dollar-solid.png" alt="" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #1e2139;
  z-index: 99;
  flex-direction: row;

  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 80px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }

  .branding {
    border-radius: 0 20px 20px 0;
    background-color: #7c5dfa;
    justify-content: center;
    padding: 24px;
    position: relative;
    width: 100%;
    @media (min-width: 900px) {
      width: auto;
    }
    img {
      width: auto;
      height: 30px;
    }
  }
}
</style>
