<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/"><h4>Home</h4></g-link>
        <g-link class="nav__link" to="/about"><h4>About</h4></g-link>
        <g-link class="nav__link" to="/about"><h4>Works</h4></g-link>
        <g-link class="nav__link" to="/about"><h4>Expertise</h4></g-link>
        <g-link class="nav__link" to="/about"><h4>Blog</h4></g-link>
        <g-link class="nav__link" to="/about"><h4>Contact</h4></g-link>
      </nav>
      <div>start</div>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:300,400,500,700,900&display=swap");
body {
  font-family: "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1, h2, h3, h4, h5,h6 {
  font-family:'Poppins' ,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav{
  display: flex;
  text-transform: uppercase;
  text-decoration: none;

  a{
    text-decoration: none;
    font-size: .9em;
    color: white;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
