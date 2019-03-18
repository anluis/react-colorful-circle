# Install

```bash
$ yarn add react-colorful-circle
```

# Usage

you can use this component to draw colorful circles like CSS gradients,
also you can pass progress as prop to define the fill part

**Basic**

```javascript
import Circle from 'react-colorful-circle'
<Circle progress={35} />
```

**Custom**

Optionally, you can pass the following props and customize it as your will

```javascript
import Circle from 'react-colorful-circle'
<Circle
  startColor={'#535FE9'} //String: Color of gradient where start
  middleColor={'#000000'} //String: Color of gradient in middle, you can ignore it
  endColor={'#9D4EC5'} //String: Color of gradient where end
  responsive={false} // Boolean: Make SVG adapt to parent size
  size="100" // String: Defines the size of the circle.
  lineWidth="25" // String: Defines the thickness of the circle's stroke.
  progress="0" // String: Update to change the progress and percentage.
  progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
  bgColor="#ecedf0" // String: Color of "empty" portion of circle.
  textColor="#6b778c" // String: Color of percentage text color.
  textStyle={{
    font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
  }}
  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
  roundedStroke={false} // Boolean: Rounded/Flat line ends
  showPercentage={true} // Boolean: Show/hide percentage.
  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
/>
```
