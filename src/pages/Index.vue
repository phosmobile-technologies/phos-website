<template>
  <Layout>
    <HeroSection />
    <HomeSectionOne />
  </Layout>
</template>

<script>
import HeroSection from "../components/Hero";
import HomeSectionOne from "../components/HomeSectionOne";
export default {
  components: { HeroSection, HomeSectionOne },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="scss">

</style>
