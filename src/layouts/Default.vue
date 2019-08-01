<template>
  <div class="layout">
    <slot />
  </div>
</template>


<script>
import NavBar from "../components/TopNavigation";
export default {
  components: { NavBar }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:300,400,500,700,900&display=swap");
body {
  font-family: "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 10px;
  height: 80px;
  background: orange;
}

.nav__link {
  margin-left: 20px;
}

.nav {
  display: flex;
  text-transform: uppercase;
  text-decoration: none;

  a {
    text-decoration: none;
    font-size: 0.9em;
    color: white;
  }
}
.layout {
  margin: 0 auto;
}
.container-padding {
  padding-left: 8%;
  padding-right: 8%;
}
@media (min-width: 320px) and (max-width: 580px) {
  
  .container-padding {
  padding-left: 4%;
  padding-right: 4%;
}
  
}

</style>
