import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const text = {
  props: ({
    theme,
    textOverflow,
    textDirection,
    textDecoration,
    letterSpacing,
    lineHeight,
    textAlign,
    textIndent,
    textTransform,
    textShadow,
    userSelect
  }) => css`
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
    ])
  }
}

export default text
