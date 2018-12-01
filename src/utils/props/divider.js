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
    lineOpacity,

    /* ----- Logic props ----- */
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
  }) =>
    css`
      label: divider;
      background: ${_color(
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
