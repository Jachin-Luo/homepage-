<!--
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 17:57:07
 * @LastEditTime: 2023-09-10 19:54:57
 * @FilePath: \homepage-\src\layouts\default.vue
-->
<script setup lang="ts">
const router = useRouter()
window.console.log(router.getRoutes())
</script>

<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />

    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Default Layout]
    </div>
  </main>
</template>
