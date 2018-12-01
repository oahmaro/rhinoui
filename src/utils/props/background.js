import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const background = {
  props: ({
    /* ----- Other Props ----- */
    theme,
    /* ----- Background Props ----- */
    backgroundColor,
    backgroundOpacity,
    backgroundDarken,
    backgroundLighten,

    /* ----- Logic Props ----- */
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
    backgroundColor &&
    css`
      label: background;
      background: ${_color(
    backgroundColor,
    backgroundLighten,
    backgroundDarken,
    backgroundOpacity
  )};
    `,
  propTypes: {
    backgroundColor: PropTypes.string,
    backgroundOpacity: PropTypes.number,
    backgroundDarken: PropTypes.number,
    backgroundLighten: PropTypes.number
  }
}

export default background
