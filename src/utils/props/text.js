import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const text = {
  props: ({
    theme,
    color,
    textOverflow,
    textDirection,
    textDecoration,
    letterSpacing,
    lineHeight,
    textAlign,
    textIndent,
    textTransform,
    textShadow,
    userSelect,
    textLighten,
    textDarken,
    textOpacity,
    fontSize,
    fontStyle,
    fontWeight
  }) => css`
    label: text;
    overflow: ${textOverflow &&
      (textOverflow === ('clip' || 'ellipsis') ? 'hidden' : textOverflow)};
    text-overflow: ${textOverflow &&
      ((textOverflow === 'visible' && 'initial') ||
        (textOverflow === 'scroll' && 'ellipsis') ||
        textOverflow)};
    text-direction: ${textDirection};
    text-decoration: ${textDecoration};
    letter-spacing: ${letterSpacing &&
      ((typeof letterSpacing === 'string' && letterSpacing) ||
        (typeof letterSpacing === 'number' && letterSpacing + 'px'))};
    line-height: ${lineHeight &&
      ((typeof lineHeight === 'string' && lineHeight) ||
        (typeof lineHeight === 'number' && lineHeight + 'px'))};
    text-align: ${textAlign};
    text-indent: ${textIndent &&
      ((typeof textIndent === 'string' && textIndent) ||
        (typeof textIndent === 'number' && textIndent + 'px'))};
    text-transform: ${textTransform};
    text-shadow: ${textShadow};
    user-select: ${userSelect};

    color: ${color &&
      theme._color(color || 'primary', textLighten, textDarken, textOpacity)};

    font-size: ${fontSize &&
      (typeof fontSize === 'string'
        ? theme.sizes[fontSize] || fontSize || theme.sizes.sm
        : fontSize + 'px')};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    font-family: ${theme.font};
  `,
  propTypes: {
    color: PropTypes.string,
    textOverflow: PropTypes.oneOf(['clip', 'ellipsis', 'scroll', 'visible']),
    textDirection: PropTypes.oneOf(['ltr', 'rtl']),
    textDecoration: PropTypes.oneOf([
      'none',
      'underline',
      'overline',
      'line-through',
      'blink'
    ]),
    letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textAlign: PropTypes.oneOf([
      'left',
      'right',
      'center',
      'justify',
      'initial',
      'inherit'
    ]),
    textIndent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textTransform: PropTypes.oneOf([
      'none',
      'capitalize',
      'uppercase',
      'lowercase',
      'initial',
      'inherit'
    ]),
    textShadow: PropTypes.string,
    userSelect: PropTypes.oneOf([
      'all',
      'auto',
      'inherit',
      'initial',
      'none',
      'text',
      'unset'
    ]),
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontStyle: PropTypes.oneOf(['italic', 'bold']),
    fontWeight: PropTypes.number
  }
}

export default text
