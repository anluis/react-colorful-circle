import * as React from 'react'
declare class Circle extends React.Component<CircleProps, any>{ }
interface CircleProps {
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