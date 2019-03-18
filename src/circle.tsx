import * as React from 'react'
import { Component, CSSProperties } from 'react'

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

const radius = 175
const diameter = Math.round(Math.PI * radius * 2)
const getOffset = (val = 0) => Math.round(((100 - val) / 100) * diameter)

class Circle extends Component<CircleProps, any> {
  static defaultProps: CircleProps = {
    progress: 0,
    showPercentage: true,
    showPercentageSymbol: true,
    progressColor: 'rgb(76, 154, 255)',
    bgColor: '#ecedf0',
    textColor: '#6b778c',
    size: '100',
    lineWidth: '25',
    percentSpacing: 10,
    textStyle: { font: 'bold 12px Helvetica, Arial, sans-serif' }
  }

  get text() {
    const {
      progress,
      showPercentage,
      textColor,
      textStyle,
      percentSpacing,
      showPercentageSymbol
    } = this.props
    if (!showPercentage) return
    return (
      <text
        style={textStyle}
        fill={textColor}
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {progress}
        {showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
      </text>
    )
  }

  render() {
    const { text } = this
    const {
      progress,
      size,
      bgColor,
      progressColor,
      lineWidth,
      roundedStroke,
      responsive,
      startColor,
      middleColor,
      endColor,
      id
    } = this.props
    const strokeDashoffset = getOffset(progress)
    const strokeLinecap = roundedStroke ? 'round' : 'butt'
    const svgSize = responsive ? '100%' : size
    const gradientId = id ? id : 'defaultGradient'

    const strokeColor =
      startColor && endColor
        ? id
          ? `url('#${gradientId}')`
          : 'url(#defaultGradient)'
        : progressColor
    return (
      <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
        {startColor && endColor && (
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={startColor} />
              {middleColor && <stop offset="50%" stopColor={middleColor} />}
              <stop offset="100%" stopColor={endColor} />
            </linearGradient>
          </defs>
        )}
        <circle
          stroke={bgColor}
          cx="175"
          cy="175"
          r="175"
          strokeWidth={lineWidth}
          fill="none"
        />
        <circle
          stroke={strokeColor}
          transform="rotate(-90 175 175)"
          cx="175"
          cy="175"
          r="175"
          strokeDasharray="1100"
          strokeWidth={lineWidth}
          strokeDashoffset="1100"
          strokeLinecap={strokeLinecap}
          fill="none"
          style={{ strokeDashoffset }}
        />
        {text}
      </svg>
    )
  }
}

export default Circle
