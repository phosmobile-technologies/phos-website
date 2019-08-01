<template>
  <Layout>
    <HeroSection />
    <div class="background container-padding">
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!</h1>
   
    <p>
      Something is working here and it makes sense I want to send this to the repo
    </p>
    </div>

  </Layout>
</template>

<script>
import HeroSection from "../components/Hero"
export default {
  components: {HeroSection},
  metaInfo: {
    title: 'Hello, world!'
  },
  
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

  .background{
    background: orange;
  };

</style>
