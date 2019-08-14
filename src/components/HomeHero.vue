<template>
  <div class="container container-padding">
    <NavBar />
    <div class="content-container">
      <div class="hero-text">
        <h1>
          We Design <span>Smart</span> Websites and Apps For
          <vue-typer
            :text="typingText"
            pre-erase-delay="2500"
            caret-animation="expand"
            :shuffle="true"
            class="typing-section--container"
          ></vue-typer>
        </h1>
        <p>At PhosMobile we design Simple solutions with Measurable effects, Attractive visuals and Reliable technology that Transforms businesses </p>
      </div>whats here
    </div>
  </div>
</template>

<script>
import NavBar from "./TopNavigation";
export default {
  components: { NavBar },
  data() {
    return {
      typingText: [
        "Visionaries",
        "Innovators",
        "Dreamers",
        "Businesses",
        "Entrepreneurs",
        "Governments"
      ]
    };
  }
};
</script>



<style lang="scss" scoped>
.container {
  background: white;
  height: 90vh;
}
.content-container {
  display: flex;
  height: 70%;
}



.hero-text {
  max-width: 40vw;
  color: black;
  align-self: flex-end;
  h1 {
    font-size: 2.9em;
    color: black;
    max-width: 40vw;
    line-height: 60px;
  }
  h1::selection {
    background: black;
  }
  p {
    color: black;
  }
}

@media (min-width: 320px) and (max-width: 800px) {
    .hero-text{
        max-width: 100%;
        h1{
            font-size: 2.3em;
            max-width: 100vw;
            line-height: 50px;
        }
    }
    .content-container {
  display: flex;
  flex-direction: column-reverse;
  height: 70%;
}

}
</style>
