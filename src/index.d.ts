import * as React from 'react'
import { Component, CSSProperties } from 'react'
declare class Circle extends React.Component<CircleProps, any>{ }
export interface CircleProps extends React.Props<Circle> {
  progress: number
  showPercentage?: boolean
  showPercentageSymbol?: boolean
  progressColor?: string
  bgColor?: string
  startColor?: string
  middleColor?: string
  endColor?: string
  textColor?: string
  size?: string
  lineWidth?: string
  percentSpacing?: number
  textStyle?: CSSProperties
  roundedStroke?: boolean
  responsive?: boolean
  id?: string
}
declare module 'react-colorful-circle'
export default Circle