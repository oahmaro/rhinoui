import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const icon = {
  props: ({
    theme,
    iconSize,
    icon,
    iconColor,
    iconOpacity,
    iconDarken,
    iconLighten,
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
    label: icon;
    width: ${icon &&
      (iconSize
        ? (typeof iconSize === 'string' && iconSize) ||
          (typeof iconSize === 'number' && iconSize + 'px')
        : theme.sizes.lg)};
    height: ${icon &&
      (iconSize
        ? (typeof iconSize === 'string' && iconSize) ||
          (typeof iconSize === 'number' && iconSize + 'px')
        : theme.sizes.lg)};

    fill: ${iconColor
    ? _color(iconColor, iconLighten, iconDarken, iconOpacity)
    : _color(
      theme.colors.text.primary,
      iconLighten,
      iconDarken,
      iconOpacity
    )};
  `,
  propTypes: {
    name: PropTypes.oneOf([
      'attachment',
      'like',
      'comment',
      'record',
      'danger',
      'danger-outline',
      'kanban',
      'list',
      'grid',
      'tag',
      'tag-checked',
      'caret-top',
      'caret-right',
      'caret-bottom',
      'caret-left',
      'arrow-top',
      'arrow-right',
      'arrow-bottom',
      'arrow-left',
      'search',
      'info',
      'info-outline',
      'help',
      'close',
      'notification',
      'app',
      'person',
      'app'
    ]),
    iconColor: PropTypes.string
  }
}

export default icon
