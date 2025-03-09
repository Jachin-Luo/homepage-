<!--
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 17:57:07
 * @LastEditTime: 2023-09-10 18:23:16
 * @FilePath: \homepage-\src\App.vue
-->
<script setup lang="ts">
const imageModel = ref<HTMLImageElement>()
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Jachin-luo',
  meta: [
    { name: 'description', content: 'This is my personal homepage' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <NavBar />
  <main class="of-x-hidden px-7 py-10">
    <RouterView />
    <Footer />
  </main>
  <Transition name="fade">
    <div v-if="imageModel" fixed bottom-0 left-0 right-0 top-0 z-500 backdrop-blur-7 @click="imageModel = undefined">
      <div absolute bottom-0 left-0 right-0 top-0 z--1 bg-black:30 />
      <img :src="imageModel.src" :alt="imageModel.alt" h-full w-full object-contain>
    </div>
  </Transition>
</template>
