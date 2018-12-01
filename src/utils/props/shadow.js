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
    _sColor = attribute =>
      theme.color(
        theme.colors.tags[attribute] ||
          theme.colors.ui[attribute] ||
          theme.colors.text[attribute] ||
          theme.colors.state[attribute] ||
          attribute
      )
  }) => css`
    label: shadow;
    box-shadow: ${boxShadow ||
      `${shadowX || 0}px ${shadowY || 0}px ${shadowBlur ||
        0}px ${shadowRadius || 0}px rgba(${_sColor(
        shadowColor
      ).red()}, ${_sColor(shadowColor).green()}, ${_sColor(
        shadowColor
      ).blue()}, ${_sColor(shadowColor).alpha() * (shadowOpacity || 1)})`};
  `,
  propTypes: {}
}

export default shadow
