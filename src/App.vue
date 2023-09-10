<!--
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 17:57:07
 * @LastEditTime: 2023-09-10 18:23:16
 * @FilePath: \homepage-\src\App.vue
-->
<script setup lang="ts">
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
  <RouterView />
</template>
