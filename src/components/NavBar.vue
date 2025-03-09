<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-40">
    <RouterLink
      class="absolute m-5 h-12 w-12 select-none outline-none xl:fixed"
      to="/"
      focusable="false"
    >
      <Logo />
    </RouterLink>
    <button
      title="Scroll to top"

      fixed bottom-3 right-3 z-100 h-10 w-10 rounded-full transition duration-300 print:hidden hover-bg-hex-8883 hover:op100
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/exam" title="考公">
          <span class="lt-md:hidden">考公</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </RouterLink>
        <RouterLink to="/code" title="编码">
          <span class="lt-md:hidden">编码</span>
          <div i-ri-article-line md:hidden />
        </RouterLink>
        <a href="https://github.com/Jachin-Luo" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-carbon-logo-github />
        </a>
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
