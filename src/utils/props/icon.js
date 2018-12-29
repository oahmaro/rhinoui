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
    iconLighten
  }) => css`
    label: icon;
    width: ${(iconSize && (typeof iconSize === 'string' && iconSize)) ||
      (typeof iconSize === 'number' && iconSize + 'px')};
    height: ${(iconSize && (typeof iconSize === 'string' && iconSize)) ||
      (typeof iconSize === 'number' && iconSize + 'px')};

    fill: ${iconColor &&
      theme._color(
        iconColor || 'primary',
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
