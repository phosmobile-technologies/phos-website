<template>
  <div class="container container-padding">
    <NavBar />
    <div >Other things here</div>
  </div>
</template>

<script>
import NavBar from "./TopNavigation";
export default {
  components: { NavBar }
};
</script>

<style lang="scss" scoped>
.container {
  background: orange;
  height: 100vh;
}
</style>
