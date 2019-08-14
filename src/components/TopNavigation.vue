<template>
  <div>
    <header class="header">
      <g-link to="/">
        <g-image src="../../static/logo_black.svg" width="180" />
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">
          <h4>Home</h4>
        </g-link>
        <g-link class="nav__link" to="/about">
          <h4>About</h4>
        </g-link>
        <g-link class="nav__link" to="/about">
          <h4>Works</h4>
        </g-link>
        <g-link class="nav__link" to="/about">
          <h4>Expertise</h4>
        </g-link>
        <g-link class="nav__link" to="/about">
          <h4>Blog</h4>
        </g-link>
        <g-link class="nav__link contact" to="/about">
          <h4>Contact Us</h4>
        </g-link>
      </nav>
    </header>
    <div class="mobile--header">
      <g-link to="/">
        <g-image class="mobile--logo" src="../../static/logo_black.svg" width="200" />
      </g-link>
      <Slide width="300" right noOverlay>
        <g-link to="/">
          <h4>Home</h4>
        </g-link>
        <g-link to="/about">
          <h4>About</h4>
        </g-link>
        <g-link to="/about">
          <h4>Works</h4>
        </g-link>
        <g-link to="/about">
          <h4>Expertise</h4>
        </g-link>
        <g-link to="/about">
          <h4>Blog</h4>
        </g-link>
        <g-link to="/about">
          <h4>Contact</h4>
        </g-link>
      </Slide>
    </div>
  </div>
</template>



<script>
import { Slide } from "vue-burger-menu";
export default {
  components: { Slide },
};
</script>
<style lang="scss">

.mobile--header {
    display: none;
}
.mobile--logo {
  margin-top: 26px;
  margin-bottom: 26px;
}
.bm-burger-button {
  top: 26px;
}

.bm-burger-bars {
  background-color: black;
}

.line-style {
  height: 10%;
}
.bm-menu {
  background-color: black;
}
.bm-item-list {
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  

  a {
    text-transform: uppercase;
    color: orange;
    padding: 0;
  }
}

.active--exact {
  color: rgb(211, 95, 0) !important;
}

@media (min-width: 320px) and (max-width: 800px) {
  .header {
      display: none !important;
  }

  .mobile--header {
      display: block;
  }
  .active--exact {
  color: rgb(255, 119, 0) !important;
}
}
</style>
