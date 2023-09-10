/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 17:57:07
 * @LastEditTime: 2023-09-10 22:16:34
 * @FilePath: \homepage-\src\types.ts
 */
import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void
export interface Post {
  path: string
  title: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
  redirect?: string
}
