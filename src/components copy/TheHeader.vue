<script lang="ts" setup>
import { getClipboardData, setClipboardData } from '~/utils/handleClipBoard'
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()
const { y: scroll } = useWindowScroll()
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
const weChart = 'lyk0398'
async function clipBoard() {
  try {
    const res = await getClipboardData()
    if (res === 'weChart')
      window.console.log('yes')

    else
      setClipboardData(weChart)
  }
  catch (error) {
    window.console.log(error)
  }
}
async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <header class="header z-40">
    <RouterLink
      class="absolute m-5 h-12 w-12 select-none color-inherit decoration-none outline-none xl:fixed"
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
        <RouterLink to="/" :title="t('header-nav.homepage')">
          <span class="lt-md:hidden">{{ t('header-nav.homepage') }}</span>
          <div i-humbleicons-home class="md:hidden" />
        </RouterLink>
        <RouterLink to="/docs" :title="t('header-nav.docs')">
          <span class="lt-md:hidden">{{ t('header-nav.docs') }}</span>
          <div i-ri-article-line class="md:hidden" />
        </RouterLink>
        <RouterLink to="/demos" :title="t('header-nav.demos')">
          <span class="lt-md:hidden">{{ t('header-nav.demos') }}</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </RouterLink>
        <a title="WeChat" @click="clipBoard">
          <div ph:wechat-logo-fill class="lt-md:hidden" />
        </a>
        <a href="https://space.bilibili.com/8266793" target="_blank" title="bilibili">
          <ICustomBilibili h-5 w-5 />
        </a>
        <a href="https://github.com/Jachin-Luo" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-carbon-logo-github />
        </a>
        <a icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language />
        </a>
        <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
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
