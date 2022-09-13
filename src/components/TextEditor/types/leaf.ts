import React from 'react'

export type Format = keyof Leaf

export interface Leaf {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
}

export interface RenderLeaf {
  children?: React.ReactNode
  leaf: Leaf
  attributes: {
    'data-slate-leaf': true
  }
}