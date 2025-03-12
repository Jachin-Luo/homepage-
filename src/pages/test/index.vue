<script lang='ts' setup>
import { XMindEmbedViewer } from 'xmind-embed-viewer'

onMounted(() => {
  const viewer = new XMindEmbedViewer({
    el: '#container', // HTMLElement | HTMLIFrameElement | string
    // 如果在中国大陆境内速度慢，可以添加的参数 `region: 'cn'` 改为使用 xmind.cn 的图库作为依赖。
    region: 'cn', // optinal, global(default) or cn
  })
  viewer.setStyles({
    width: '100%',
    height: '100%',
  })
  fetch('/xmind/1.xmind')
    .then(res => res.arrayBuffer())
    .then(file => viewer.load(file))
})
</script>

<template>
  <div id="container" />
</template>

<style scoped>
#container{
  width: 100%;
  height: 80vh;
}
</style>
