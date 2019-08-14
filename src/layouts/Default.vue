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

//you can make changes to the vue typer component on the h1 here
h1{
.vue-typer {
    .custom.char{
        color: white !important;
        &.typed {
            color: black !important;
        }
        &.selected{
          background-color: rgb(255, 77, 0);
        }
    }
  .custom.caret {
    &.typing::selection {
      background: white;
    }
  }
}
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
p {
  font-size: 14px;
  color: rgb(222, 222, 222);
  .vue-typer {
    .custom.char{
        color: white !important;
        &.typed {
            color: black !important;
        }
        &.selected{
          background-color: rgb(255, 77, 0);
        }
    }
  .custom.caret {
    &.typing::selection {
      background: white;
    }
  }
}
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 10px;
  height: 80px;
}

.nav {
  display: flex;
  text-transform: uppercase;
  text-decoration: none;

  a {
    text-decoration: none;
    font-size: 0.9em;
    color: orange;
    background:  rgba(255, 166, 0, 0.146);
    padding: 0 30px;

    &.contact {
      background: black;
    }
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
    padding-left: 5%;
    padding-right: 5%;
  }
  .no-mobile {
    display: none;
  }
}
</style>
