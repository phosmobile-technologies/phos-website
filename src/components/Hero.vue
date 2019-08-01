<template>
  <div class="container container-padding">
    <NavBar />
    <div class="content-container">
        <div class="hero-text">
            <h1>
                We Design For Visionaries.
            </h1>
            <p>PhosMobile empower visionaries to solve problems through creative strategy, design and technology with quantifiable return on investment.</p>
        </div>
        whats here
    </div>
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
  background: linear-gradient(118deg, #FF7F00 0%, #FF5500 96%);;
  height: 90vh;
}
.content-container{
    display: flex;
    height: 70%;
}
.hero-text {
    max-width: 400px;
    color: white;
    align-self: flex-end;
    h1{
        font-size: 3em;
        color: white;
        max-width: 400px;
        line-height: 70px;
    }
}

@media (min-width: 320px) and (max-width: 800px) {

}
</style>
