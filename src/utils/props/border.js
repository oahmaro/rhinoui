import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const style = [
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'none',
  'hidden'
]
const border = {
  props: ({
    theme,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderColor,
    borderStyle,
    borderWidth,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    borderTopStyle,
    borderRightStyle,
    borderBottomStyle,
    borderLeftStyle,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRadius
  }) => css`
    border: 0;
    border-style: solid;
    border: ${border};
    border-top: ${borderTop};
    border-right: ${borderRight};
    border-bottom: ${borderBottom};
    border-left: ${borderLeft};
    border-color: ${borderColor
    ? theme.colors.tags[borderColor] ||
        theme.colors.ui[borderColor] ||
        theme.colors.state[borderColor] ||
        borderColor
    : ''};
    border-style: ${borderStyle};
    border-width: ${(typeof borderWidth === 'string' && borderWidth) ||
      (typeof borderWidth === 'number' && borderWidth + 'px')};
    border-top-color: ${borderTopColor
    ? theme.colors.tags[borderTopColor] ||
        theme.colors.ui[borderTopColor] ||
        theme.colors.state[borderTopColor] ||
        borderTopColor
    : ''};
    border-right-color: ${borderRightColor
    ? theme.colors.tags[borderRightColor] ||
        theme.colors.ui[borderRightColor] ||
        theme.colors.state[borderRightColor] ||
        borderRightColor
    : ''};
    border-bottom-color: ${borderBottomColor
    ? theme.colors.tags[borderBottomColor] ||
        theme.colors.ui[borderBottomColor] ||
        theme.colors.state[borderBottomColor] ||
        borderBottomColor
    : ''};
    border-left-color: ${borderLeftColor
    ? theme.colors.tags[borderLeftColor] ||
        theme.colors.ui[borderLeftColor] ||
        theme.colors.state[borderLeftColor] ||
        borderLeftColor
    : ''};
    border-top-style: ${borderTopStyle};
    border-right-style: ${borderRightStyle};
    border-bottom-style: ${borderBottomStyle};
    border-left-style: ${borderLeftStyle};
    border-top-width: ${(typeof borderTopWidth === 'string' &&
      borderTopWidth) ||
      (typeof borderTopWidth === 'number' && borderTopWidth + 'px')};
    border-right-width: ${(typeof borderRightWidth === 'string' &&
      borderRightWidth) ||
      (typeof borderRightWidth === 'number' && borderRightWidth + 'px')};
    border-bottom-width: ${(typeof borderBottomWidth === 'string' &&
      borderBottomWidth) ||
      (typeof borderBottomWidth === 'number' && borderBottomWidth + 'px')};
    border-left-width: ${(typeof borderLeftWidth === 'string' &&
      borderLeftWidth) ||
      (typeof borderLeftWidth === 'number' && borderLeftWidth + 'px')};
    border-radius: ${borderRadius};
  `,
  propTypes: {
    border: PropTypes.string,
    borderTop: PropTypes.string,
    borderRight: PropTypes.string,
    borderBottom: PropTypes.string,
    borderLeft: PropTypes.string,
    borderColor: PropTypes.string,
    borderStyle: PropTypes.oneOf(style),
    borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderTopColor: PropTypes.string,
    borderRightColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    borderLeftColor: PropTypes.string,
    borderTopStyle: PropTypes.oneOf(style),
    borderRightStyle: PropTypes.oneOf(style),
    borderBottomStyle: PropTypes.oneOf(style),
    borderLeftStyle: PropTypes.oneOf(style),
    borderTopWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderRightWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderBottomWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    borderLeftWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderRadius: PropTypes.string
  }
}

export default border
