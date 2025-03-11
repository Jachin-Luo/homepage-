<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps<{
  type?: string
}>()
const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'

const route = useRoute()
</script>

<template>
  <div class="m-auto mb-8 select-none prose animate-none! op100!">
    <div v-if="props.type === 'exam'" mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
      <RouterLink to="/exam/shenlun" class="!border-none" :class="route.path === '/exam/shenlun' ? activeStyle : inactiveStyle">
        申论
      </RouterLink>
      <RouterLink to="/exam/xingce" class="!border-none" :class="route.path === '/exam/xingce' ? activeStyle : inactiveStyle">
        行测
      </RouterLink>
    </div>
    <div v-if="props.type === 'code'" mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
      <RouterLink to="/base" class="!border-none" :class="route.path === '/base' ? activeStyle : inactiveStyle">
        基础
      </RouterLink>
      <RouterLink to="/vue" class="!border-none" :class="route.path === '/vue' ? activeStyle : inactiveStyle">
        vue
      </RouterLink>
      <RouterLink to="/react" class="!border-none" :class="route.path === '/react' ? activeStyle : inactiveStyle">
        react
      </RouterLink>
    </div>
  </div>
</template>
