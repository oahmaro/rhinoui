import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const style = [
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'none',
  'hidden'
]
const border = {
  props: ({
    /* ----- other Props ----- */
    theme,
    shape,
    width,
    height,
    size,

    /* ----- Border Props ----- */
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,

    /* ----- Border Style ----- */
    borderStyle,
    borderTopStyle,
    borderRightStyle,
    borderBottomStyle,
    borderLeftStyle,

    /* ----- Border Radius ----- */
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,

    /* ----- Border Width ----- */
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,

    /* ----- Border Color ----- */
    borderColor,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,

    /* ----- Border Darken ----- */
    borderDarken,
    borderTopDarken,
    borderRightDarken,
    borderBottomDarken,
    borderLeftDarken,

    /* ----- Border Lighten ----- */
    borderLighten,
    borderTopLighten,
    borderRightLighten,
    borderBottomLighten,
    borderLeftLighten,

    /* ----- Border Opacity ----- */
    borderOpacity,
    borderTopOpacity,
    borderRightOpacity,
    borderBottomOpacity,
    borderLeftOpacity,

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
      label: border;
      border-color: transparent;
      border-width: 1px;
      border-style: solid;
      border-style: solid;
      border: ${border};
      border-top: ${borderTop};
      border-right: ${borderRight};
      border-bottom: ${borderBottom};
      border-left: ${borderLeft};
      border-color: ${borderColor &&
        _color(borderColor, borderLighten, borderDarken, borderOpacity)};

      border-top-color: ${borderTopColor &&
        _color(
          borderTopColor,
          borderTopLighten,
          borderTopDarken,
          borderTopOpacity
        )};

      border-right-color: ${borderRightColor &&
        _color(
          borderRightColor,
          borderRightLighten,
          borderRightDarken,
          borderRightOpacity
        )};

      border-bottom-color: ${borderBottomColor &&
        _color(
          borderBottomColor,
          borderBottomLighten,
          borderBottomDarken,
          borderBottomOpacity
        )};

      border-left-color: ${borderLeftColor &&
        _color(
          borderLeftColor,
          borderLeftLighten,
          borderLeftDarken,
          borderLeftOpacity
        )};

      border-style: ${borderStyle};
      border-width: ${(typeof borderWidth === 'string' && borderWidth) ||
        (typeof borderWidth === 'number' && borderWidth + 'px')};

      border-top-style: ${borderTopStyle};
      border-right-style: ${borderRightStyle};
      border-bottom-style: ${borderBottomStyle};
      border-left-style: ${borderLeftStyle};
      border-top-width: ${(typeof borderTopWidth === 'string' &&
        borderTopWidth) ||
        (typeof borderTopWidth === 'number' && borderTopWidth + 'px')};
      border-right-width: ${(typeof borderRightWidth === 'string' &&
        borderRightWidth) ||
        (typeof borderRightWidth === 'number' && borderRightWidth + 'px')};
      border-bottom-width: ${(typeof borderBottomWidth === 'string' &&
        borderBottomWidth) ||
        (typeof borderBottomWidth === 'number' && borderBottomWidth + 'px')};
      border-left-width: ${(typeof borderLeftWidth === 'string' &&
        borderLeftWidth) ||
        (typeof borderLeftWidth === 'number' && borderLeftWidth + 'px')};

      border-radius: ${(typeof borderRadius === 'string' &&
        (theme.borderRadius[borderRadius] || borderRadius)) ||
        (typeof borderRadius === 'number' && borderRadius + 'px')};

      border-top-left-radius: ${(typeof borderTopLeftRadius === 'string' &&
        (theme.borderRadius[borderTopLeftRadius] || borderTopLeftRadius)) ||
        (typeof borderTopLeftRadius === 'number' &&
          borderTopLeftRadius + 'px')};

      border-top-right-radius: ${(typeof borderTopRightRadius === 'string' &&
        (theme.borderRadius[borderTopRightRadius] || borderTopRightRadius)) ||
        (typeof borderTopRightRadius === 'number' &&
          borderTopRightRadius + 'px')};

      border-bottom-right-radius: ${(typeof borderBottomRightRadius ===
        'string' &&
        (theme.borderRadius[borderBottomRightRadius] ||
          borderBottomRightRadius)) ||
        (typeof borderBottomRightRadius === 'number' &&
          borderBottomRightRadius + 'px')};

      border-bottom-left-radius: ${(typeof borderBottomLeftRadius ===
        'string' &&
        (theme.borderRadius[borderBottomLeftRadius] ||
          borderBottomLeftRadius)) ||
        (typeof borderBottomLeftRadius === 'number' &&
          borderBottomLeftRadius + 'px')};

      border-radius: ${(shape === 'square' && '2%') ||
        (shape === 'rounded' && '12%') ||
        (shape === 'pill' && '30%') ||
        (shape === 'circle' && '100%')};

      width: ${shape === 'circle' &&
        ((typeof width === 'string' && width) ||
          (typeof width === 'number' && width + 'px') ||
          (typeof size === 'string' && size) ||
          (typeof size === 'number' && size + 'px') ||
          '35px !important')};
      height: ${shape === 'circle' &&
        ((typeof height === 'string' && height) ||
          (typeof height === 'number' && height + 'px') ||
          (typeof size === 'string' && size) ||
          (typeof size === 'number' && size + 'px') ||
          '35px !important')};
    `,
  propTypes: {
    border: PropTypes.string,
    borderTop: PropTypes.string,
    borderRight: PropTypes.string,
    borderBottom: PropTypes.string,
    borderLeft: PropTypes.string,
    borderColor: PropTypes.string,
    borderStyle: PropTypes.oneOf(style),
    borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderTopColor: PropTypes.string,
    borderRightColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    borderLeftColor: PropTypes.string,
    borderTopStyle: PropTypes.oneOf(style),
    borderRightStyle: PropTypes.oneOf(style),
    borderBottomStyle: PropTypes.oneOf(style),
    borderLeftStyle: PropTypes.oneOf(style),
    borderTopWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderRightWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderBottomWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    borderLeftWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }
}

export default border
