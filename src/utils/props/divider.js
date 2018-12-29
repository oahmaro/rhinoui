import { css } from 'react-emotion'
// import PropTypes from 'prop-types'

const divider = {
  props: ({
    /* ----- other Props ----- */
    theme,

    contentPadding,
    width,
    height,
    vertical,
    lineColor,
    lineLighten,
    lineDarken,
    lineOpacity
  }) =>
    css`
      label: divider;
      background: ${theme._color(
    lineColor || theme.colors.text.disabled,
    lineLighten,
    lineDarken,
    lineOpacity
  )};

      width: ${vertical
    ? (typeof height === 'string' && height) ||
          (typeof height === 'number' && height + 'px')
    : (typeof width === 'string' && width) ||
          (typeof width === 'number' && width + 'px')};
      height: ${vertical
    ? (typeof width === 'string' && width) ||
          (typeof width === 'number' && width + 'px')
    : (typeof height === 'string' && height) ||
          (typeof height === 'number' && height + 'px')};
    `,
  propTypes: {}
}

export default divider
