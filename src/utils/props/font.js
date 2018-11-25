import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const font = {
  props: ({ theme, fontSize, fontStyle, fontWeight }) => css`
    font-size: ${fontSize &&
      (typeof fontSize === 'string'
        ? theme.sizes[fontSize] || fontSize || theme.sizes.sm
        : fontSize + 'px')};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    font-family: ${theme.font};
  `,
  propTypes: {
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontStyle: PropTypes.oneOf(['italic', 'bold']),
    fontWeight: PropTypes.number
  }
}

export default font
