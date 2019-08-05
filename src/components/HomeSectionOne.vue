<template>
  <div class="background section-container container-padding">
    <div>
      <div v-animate.fade="'slide-right'" class="section-line--title">
        <h5>Design Matters</h5>
      </div>
      <div class="section-divider">
        <div class="section-divider--text">
          <h1 class="section-title--big">Building Lasting Brands</h1>
          <div v-animate.repeat.fade="'slide-up'" class="section-text--divider">
            <p>Just having a website doesn’t work anymore, everyone seems to have one and it’s easy to think it’s not worth the hassle or the money. Having an effective website is not a walk in the park it takes creating an experience - attention to customers needs, a client path to answering their questions and leaving them coming back for more.</p>
            <p
              class="no-mobile"
            >Just having a website doesn’t work anymore, everyone seems to have one and it’s easy to think it’s not worth the hassle or the money. Having an effective website is not a walk in the park it takes creating an experience - attention to customers needs, a client path to answering their questions and leaving them coming back for more.</p>
          </div>
        </div>
        <g-image v-animate="'appear'" src="../../static/venn_diagram.svg" />
      </div>

      <div v-animate.repeat.fade="'slide-up'" class="services-subsection">
        <div class="services-subsection--service">
          <h3>Strategy</h3>
          <li>Business Consulting</li>
          <li>Innovation</li>
          <li>Campaign Strategy</li>
          <li>Market Analysis</li>
          <li>Artificial Intelligence</li>
        </div>
        <div class="services-subsection--service">
          <h3>Design</h3>
          <li>UI/UX Design</li>
          <li>Brand Identity Design</li>
          <li>Motion Design</li>
          <li>Product Design</li>
          <li>Marketing Collateral Design</li>
        </div>
        <div class="services-subsection--service">
          <h3>Technology</h3>
          <li>Websites</li>
          <li>Applications (Web, Mobile and Desktop)</li>
          <li>Ecommerce</li>
          <li>Process Automation</li>
          <li>Tech Consulting</li>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.animate {
  transition-delay: .1s;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}

.slide-up {
  transform: translateY(50px);
  opacity: 0;
}

.slide-up.animate-active {
  transform: translateY(0px);
  opacity: 1;
}

.slide-right {
    transform: translateX(-30px);
    opacity: 0;
}

.slide-right.animate-active {
    transform: translateX(0);
    opacity: 1;
}

.appear {
    opacity: 0
}
.appear.animate-active {
    opacity: 1;
}

.home-links a {
  margin-right: 1rem;
}
.section-line--title {
  color: white;
  margin-top: 4em;

  h5 {
    border-top: 2px solid white;
    display: inline-block;
    padding-top: 8px;
  }
}
.section-text--divider {
  display: flex;
}

.section-divider--text {
  margin-right: 50px;
  p {
    color: rgb(222, 222, 222);
    line-height: 32px;
    max-width: 350px;
    margin-right: 70px;
  }
}
.section-divider {
  display: flex;
}

.section-title--big {
  color: white;
  font-size: 60px;
  line-height: 70px;
  max-width: 500px;
}
.section-container {
  display: flex;
  flex-direction: column;
}
.background {
  background: black;
}

.services-subsection {
  color: white;
  margin: 2em 0 5em;
  display: flex;

  .services-subsection--service{
    margin-right: 100px;
    h3{
      margin-bottom: 30px;
    }
    li {
      list-style: none;
      color: rgb(210, 210, 210);
      padding: 10px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.199)
    }
  }
}

@media (min-width: 320px) and (max-width: 800px) {
  .section-title--big {
    font-size: 36px;
    line-height: 46px;
  }

  .section-line--title {
    h3 {
      font-size: 15px;
    }
  }
  .section-divider {
    flex-direction: column;
    img {
      width: 300px;
    }
  }
  .section-divider--text {
    margin-right: 50px;
    p {
      line-height: 32px;
      max-width: 350px;
      margin-bottom: 60px;
      margin-right: 0px;
    }
  }
  .services-subsection {
  flex-direction: column;

  .services-subsection--service{
    margin-top: 2.5em;
    margin-right: 0px;
    h3 {
      margin-bottom: 20px;
    }
  }
  }
}
</style>
