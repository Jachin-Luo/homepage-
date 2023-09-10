<!--
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 17:57:07
 * @LastEditTime: 2023-09-10 19:53:28
 * @FilePath: \homepage-\src\layouts\home.vue
-->
<script lang="ts" setup>

</script>

<template>
  <TheHeader />
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />

    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Home Layout]
    </div>
  </main>
  <TheFooter />
</template>
