import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const transform = {
  props: ({
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    marginX,
    marginY,
    paddingX,
    paddingY
  }) => css`
    label: transform;
    margin: ${(typeof margin === 'string' && margin) ||
      (typeof margin === 'number' && margin + 'px')};
    margin-top: ${marginTop &&
      ((typeof marginTop === 'string' && marginTop) ||
        (typeof marginTop === 'number' && marginTop + 'px'))};
    margin-right: ${marginRight &&
      ((typeof marginRight === 'string' && marginRight) ||
        (typeof marginRight === 'number' && marginRight + 'px'))};
    margin-bottom: ${marginBottom &&
      ((typeof marginBottom === 'string' && marginBottom) ||
        (typeof marginBottom === 'number' && marginBottom + 'px'))};
    margin-left: ${marginLeft &&
      ((typeof marginLeft === 'string' && marginLeft) ||
        (typeof marginLeft === 'number' && marginLeft + 'px'))};
    padding-top: ${paddingTop &&
      ((typeof paddingTop === 'string' && paddingTop) ||
        (typeof paddingTop === 'number' && paddingTop + 'px'))};
    padding-right: ${paddingRight &&
      ((typeof paddingRight === 'string' && paddingRight) ||
        (typeof paddingRight === 'number' && paddingRight + 'px'))};
    padding-bottom: ${paddingBottom &&
      ((typeof paddingBottom === 'string' && paddingBottom) ||
        (typeof paddingBottom === 'number' && paddingBottom + 'px'))};
    padding-left: ${paddingLeft &&
      ((typeof paddingLeft === 'string' && paddingLeft) ||
        (typeof paddingLeft === 'number' && paddingLeft + 'px'))};
    padding: ${(typeof padding === 'string' && padding) ||
      (typeof padding === 'number' && padding + 'px')};
    position: ${position &&
      (position.includes('top') ||
      position.includes('right') ||
      position.includes('bottom') ||
      position.includes('left')
        ? 'absolute'
        : position)};
    position: ${(left || right || top || bottom) && 'absolute'};
    left: ${position
    ? position.includes('left') && 0
    : left &&
        ((typeof left === 'string' && left) ||
          (typeof left === 'number' && left + 'px'))};
    right: ${position
    ? position.includes('right') && 0
    : right &&
        ((typeof right === 'string' && right) ||
          (typeof right === 'number' && right + 'px'))};
    top: ${position
    ? position.includes('top') && 0
    : top &&
        ((typeof top === 'string' && top) ||
          (typeof top === 'number' && top + 'px'))};
    bottom: ${position
    ? position.includes('bottom') && 0
    : bottom &&
        ((typeof bottom === 'string' && bottom) ||
          (typeof bottom === 'number' && bottom + 'px'))};
    margin-top: ${marginY &&
      ((typeof marginY === 'string' && marginY) ||
        (typeof marginY === 'number' && marginY + 'px'))};
    margin-bottom: ${marginY &&
      ((typeof marginY === 'string' && marginY) ||
        (typeof marginY === 'number' && marginY + 'px'))};
    margin-left: ${marginX &&
      ((typeof marginX === 'string' && marginX) ||
        (typeof marginX === 'number' && marginX + 'px'))};
    margin-right: ${marginX &&
      ((typeof marginX === 'string' && marginX) ||
        (typeof marginX === 'number' && marginX + 'px'))};
    padding-top: ${paddingY &&
      ((typeof paddingY === 'string' && paddingY) ||
        (typeof paddingY === 'number' && paddingY + 'px'))};
    padding-bottom: ${paddingY &&
      ((typeof paddingY === 'string' && paddingY) ||
        (typeof paddingY === 'number' && paddingY + 'px'))};
    padding-left: ${paddingX &&
      ((typeof paddingX === 'string' && paddingX) ||
        (typeof paddingX === 'number' && paddingX + 'px'))};
    padding-right: ${paddingX &&
      ((typeof paddingX === 'string' && paddingX) ||
        (typeof paddingX === 'number' && paddingX + 'px'))};
    z-index: ${zIndex};
  `,
  propTypes: {
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    position: PropTypes.string,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    zIndex: PropTypes.number
  }
}

export default transform
