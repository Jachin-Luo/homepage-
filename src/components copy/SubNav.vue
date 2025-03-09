<!--
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 22:08:29
 * @LastEditTime: 2023-09-10 22:09:20
 * @FilePath: \homepage-\src\components\SubNav.vue
-->
<script setup lang="ts">
import { useRoute } from 'vue-router'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'

const route = useRoute()
</script>

<template>
  <div class="m-auto mb-8 select-none prose animate-none! op100!">
    <div mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
      <RouterLink to="/posts" class="!border-none" :class="route.path === '/posts' ? activeStyle : inactiveStyle">
        基础
      </RouterLink>
      <RouterLink to="/talks" class="!border-none" :class="route.path === '/talks' ? activeStyle : inactiveStyle">
        vue
      </RouterLink>
      <RouterLink to="/podcasts" class="!border-none" :class="route.path === '/podcasts' ? activeStyle : inactiveStyle">
        react
      </RouterLink>
      <RouterLink to="/streams" class="!border-none" :class="route.path === '/streams' ? activeStyle : inactiveStyle">
        其他
      </RouterLink>
    </div>
  </div>
</template>
