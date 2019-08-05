<template>
  <div class="container container-padding">
    <NavBar />
    <div class="content-container">
      <div class="hero-text">
        <h1>
          We Design For
          <br />
          <vue-typer
            :text="typingText"
            pre-erase-delay="2500"
            caret-animation="expand"
            :shuffle="true"
            class="typing-section--container"
          ></vue-typer>
        </h1>
        <p>PhosMobile empower visionaries to solve problems through creative strategy, design and technology with quantifiable return on investment.</p>
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
  background: linear-gradient(118deg, #ff7f00 0%, #ff5500 96%);
  height: 90vh;
}
.content-container {
  display: flex;
  height: 70%;
}



.hero-text {
  max-width: 400px;
  color: white;
  align-self: flex-end;
  h1 {
    font-size: 3em;
    color: white;
    max-width: 400px;
    line-height: 60px;
  }
  h1::selection {
    background: white;
  }
  p {
    color: white;
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
