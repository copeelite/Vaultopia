// Use type safe message keys with `next-intl`
type Messages = typeof import('./messages/en.json');
import type { FC, PropsWithChildren } from 'react'

declare interface IntlMessages extends Messages {}
declare global {
    // TODO should remove in next TypeScript version


    export type Component<P = {}> = FC<ComponentType & P>

    interface Document {
      startViewTransition(callback?: () => void | Promise<void>): ViewTransition
    }
  
    // interface ViewTransition {
    //   finished: Promise<void>
    //   ready: Promise<void>
    //   updateCallbackDone: () => void
    //   skipTransition(): void
    // }
  }
  
  export {}