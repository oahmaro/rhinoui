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
    fontWeight,
    _color = (prop, lighten = 0, darken = 0, opacity = 1) => {
      const c = theme
        .color(
          theme.colors.tags[prop] ||
            theme.colors.ui[prop] ||
            theme.colors.text[prop] ||
            theme.colors.state[prop] ||
            prop
        )
        .darken(darken)
        .lighten(lighten)
      return `rgba(${c.red()}, ${c.green()}, ${c.blue()}, ${c.alpha() *
        opacity})`
    }
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

    color: ${color
    ? _color(color, textLighten, textDarken, textOpacity)
    : _color(
      theme.colors.text.primary,
      textLighten,
      textDarken,
      textOpacity
    )};

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
    textDecoration: PropTypes.string,
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
