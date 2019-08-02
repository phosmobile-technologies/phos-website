<template>
  <Layout>
    <HeroSection />
    <HomeSectionOne />
    <TypingDivider />
  </Layout>
</template>

<script>
import HeroSection from "../components/Hero";
import HomeSectionOne from "../components/HomeSectionOne";
import TypingDivider from "../components/TypingSectionDivider";
export default {
  components: { HeroSection, HomeSectionOne, TypingDivider },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="scss">
  
</style>
