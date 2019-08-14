<template>
  <Layout>
    <HeroSection />
    <HomeSectionOne />
    <TypingDivider />
    <InsightsSection />
  </Layout>
</template>

<script>
import HeroSection from "../components/HomeHero";
import HomeSectionOne from "../components/HomeSectionOne";
import TypingDivider from "../components/TypingSectionDivider";
import InsightsSection from "../components/InsightsSection"
export default {
  components: { HeroSection, HomeSectionOne, TypingDivider, InsightsSection },
  metaInfo: {
    title: "PhosMobile | Design Matters"
  }
};
</script>

<style lang="scss">
  
</style>
