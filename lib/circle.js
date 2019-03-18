"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var radius = 175;
var diameter = Math.round(Math.PI * radius * 2);
var getOffset = function (val) {
    if (val === void 0) { val = 0; }
    return Math.round(((100 - val) / 100) * diameter);
};
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Circle.prototype, "text", {
        get: function () {
            var _a = this.props, progress = _a.progress, showPercentage = _a.showPercentage, textColor = _a.textColor, textStyle = _a.textStyle, percentSpacing = _a.percentSpacing, showPercentageSymbol = _a.showPercentageSymbol;
            if (!showPercentage)
                return;
            return (React.createElement("text", { style: textStyle, fill: textColor, x: radius, y: radius, textAnchor: "middle", dominantBaseline: "central" },
                progress,
                showPercentageSymbol && React.createElement("tspan", { dx: percentSpacing }, "%")));
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.render = function () {
        var text = this.text;
        var _a = this.props, progress = _a.progress, size = _a.size, bgColor = _a.bgColor, progressColor = _a.progressColor, lineWidth = _a.lineWidth, roundedStroke = _a.roundedStroke, responsive = _a.responsive, startColor = _a.startColor, middleColor = _a.middleColor, endColor = _a.endColor, id = _a.id;
        var strokeDashoffset = getOffset(progress);
        var strokeLinecap = roundedStroke ? 'round' : 'butt';
        var svgSize = responsive ? '100%' : size;
        var gradientId = id ? id : 'defaultGradient';
        var strokeColor = startColor && endColor
            ? id
                ? "url('#" + gradientId + "')"
                : 'url(#defaultGradient)'
            : progressColor;
        return (React.createElement("svg", { width: svgSize, height: svgSize, viewBox: "-25 -25 400 400" },
            startColor && endColor && (React.createElement("defs", null,
                React.createElement("linearGradient", { id: gradientId, x1: "0", x2: "0", y1: "0", y2: "1" },
                    React.createElement("stop", { offset: "0%", stopColor: startColor }),
                    middleColor && React.createElement("stop", { offset: "50%", stopColor: middleColor }),
                    React.createElement("stop", { offset: "100%", stopColor: endColor })))),
            React.createElement("circle", { stroke: bgColor, cx: "175", cy: "175", r: "175", strokeWidth: lineWidth, fill: "none" }),
            React.createElement("circle", { stroke: strokeColor, transform: "rotate(-90 175 175)", cx: "175", cy: "175", r: "175", strokeDasharray: "1100", strokeWidth: lineWidth, strokeDashoffset: "1100", strokeLinecap: strokeLinecap, fill: "none", style: { strokeDashoffset: strokeDashoffset } }),
            text));
    };
    Circle.defaultProps = {
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
    };
    return Circle;
}(react_1.Component));
exports.default = Circle;
//# sourceMappingURL=circle.js.map