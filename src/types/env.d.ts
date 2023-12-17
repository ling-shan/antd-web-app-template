import { ReactNode } from 'react'
import 'react-router-dom'

declare module 'react-router-dom' {
  interface NonIndexRouteObject {
    name?: string
    icon?: ReactNode
    hidden?: boolean
  }
  interface IndexRouteObject {
    name?: string
    icon?: ReactNode
    hidden?: boolean
  }
}
