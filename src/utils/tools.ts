/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-05 17:39:59
 * @LastEditTime: 2023-09-10 18:43:12
 * @FilePath: \homepage-\src\utils\tools.ts
 */
import dayjs from 'dayjs'

export const isDark = useDark()

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */

export function formatDate(d: string | Date, onlyDate = true) {
  const date = dayjs(d)
  if (onlyDate || date.year() === dayjs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}
