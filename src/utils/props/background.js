import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const background = {
  props: ({
    /* ----- Other Props ----- */
    theme,
    /* ----- Background Props ----- */
    background,
    backgroundAttachment,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    backgroundColor,
    backgroundOpacity,
    backgroundDarken,
    backgroundLighten
  }) =>
    backgroundColor &&
    css`
      label: background;
      background: ${theme._color(
    backgroundColor,
    backgroundLighten,
    backgroundDarken,
    backgroundOpacity
  )};
    `,
  propTypes: {
    background: PropTypes.string,
    backgroundAttachment: PropTypes.oneOf(['scroll', 'fixed']),
    backgroundImage: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundOpacity: PropTypes.number,
    backgroundDarken: PropTypes.number,
    backgroundLighten: PropTypes.number
  }
}

export default background
