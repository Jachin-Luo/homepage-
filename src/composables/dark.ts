/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 17:57:07
 * @LastEditTime: 2023-09-10 19:41:04
 * @FilePath: \homepage-\src\composables\dark.ts
 */
// these APIs are auto-imported from @vueuse/core
export const isDark = useDark()
// export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()

export function toggleDark(event: MouseEvent) {
  /*
  是否开启过渡动画
  document.startViewTransition 实验性属性，暂时不深入研究
  window.matchMedia('(prefers-reduced-motion: reduce)') 查看用户是否开起了减少动画选项（windows中的设置）、
  @ts-expect-error experimental API
*/
  const isAppearanceTransition
    = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  /*
  伪元素树构建，过渡动画
  https://www.jianshu.com/p/ae4a2c41dc96
  @ts-expect-error: Transition API
  */
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    // ['circle(0px at 1810px 52px)', 'circle(1866.0696664379925px at 1810px 52px)']
    document.documentElement.animate(
      // https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
      },
    )
  })
}
