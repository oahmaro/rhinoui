import { css } from 'react-emotion'
// import PropTypes from 'prop-types'

const shadow = {
  props: ({
    theme,
    boxShadow,
    shadowX,
    shadowY,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    shadowBlur,
    shadowLighten,
    shadowDarken
  }) => css`
    label: shadow;
    box-shadow: ${boxShadow ||
      ((shadowRadius || shadowX || shadowY) &&
        theme._color(
          shadowColor || 'fill0',
          shadowLighten,
          shadowDarken,
          shadowOpacity,
          shadowX,
          shadowY,
          shadowBlur,
          shadowRadius
        ))};
  `,
  propTypes: {}
}

export default shadow
