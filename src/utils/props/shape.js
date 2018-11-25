import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const shape = {
  props: ({
    theme,
    color,
    backgroundColor,
    iconColor,
    display,
    size,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    shape,
    borderRadius,
    hidden,
    fit,
    disabled,
    boxShadow,
    boxSizing,
    shadowX,
    shadowY,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    shadowBlur,
    overflowX,
    overflowY,
    overflow,
    _shadowColor = theme.color(
      theme.colors.tags[shadowColor] ||
        theme.colors.ui[shadowColor] ||
        theme.colors.state[shadowColor] ||
        shadowColor
    )
  }) => css`
    display: ${display};
    width: ${width
    ? (typeof width === 'string' && width) ||
        (typeof width === 'number' && width + 'px')
    : size && (size + 'px' || theme.sizes.lg)};
    height: ${height
    ? (typeof height === 'string' && height) ||
        (typeof height === 'number' && height + 'px')
    : size && (size + 'px' || theme.sizes.lg)};
    min-width: ${(typeof minWidth === 'string' && minWidth) ||
      (typeof minWidth === 'number' && minWidth + 'px')};
    max-width: ${(typeof maxWidth === 'string' && maxWidth) ||
      (typeof maxWidth === 'number' && maxWidth + 'px')};
    min-height: ${(typeof minHeight === 'string' && minHeight) ||
      (typeof minHeight === 'number' && minHeight + 'px')};
    max-height: ${(typeof maxHeight === 'string' && maxHeight) ||
      (typeof maxHeight === 'number' && maxHeight + 'px')};
    border-radius: ${(shape === 'square' && '1px') ||
      (shape === 'rounded' && '4px') ||
      (shape === 'pill' && '12px') ||
      (shape === 'circle' && '100%')};
    border-radius: ${(typeof borderRadius === 'string' &&
      (theme.borderRadius[borderRadius] || borderRadius)) ||
      (typeof borderRadius === 'number' && borderRadius + 'px')};
    visibility: ${hidden && 'hidden'};
    width: ${fit && '-webkit-fill-available'};
    opacity: ${disabled && '0.4'};
    pointer-events: ${disabled && 'none'};
    box-shadow: ${boxShadow ||
      `${shadowX || 0}px ${shadowY || 0}px ${shadowBlur ||
        0}px ${shadowRadius ||
        0}px rgba(${_shadowColor.red()}, ${_shadowColor.green()}, ${_shadowColor.blue()}, ${_shadowColor.alpha() *
        (shadowOpacity || 1)})`};
    box-sizing: ${boxSizing};
    background: ${theme.colors.tags[backgroundColor] ||
      theme.colors.ui[backgroundColor] ||
      theme.colors.state[backgroundColor] ||
      backgroundColor};
    overflow: ${overflow};
    overflow-x: ${overflowX};
    overflow-y: ${overflowY};

    fill: ${theme.colors.text.primary};
    fill: ${(iconColor && theme.colors.tags[iconColor]) ||
      theme.colors.text[iconColor] ||
      theme.colors.ui[iconColor] ||
      theme.colors.state[iconColor] ||
      iconColor};
    color: ${backgroundColor && theme.colors.text.base};
    color: ${color
    ? theme.colors.tags[color] ||
        theme.colors.ui[color] ||
        theme.colors.state[color] ||
        color
    : ''};
    background: ${backgroundColor &&
      (theme.colors.tags[backgroundColor] || backgroundColor)};
  `,
  propTypes: {
    display: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle']),
    hidden: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    boxSizing: PropTypes.oneOf([
      'border-box',
      'content-box',
      'inherit',
      'initial',
      'unset'
    ]),
    fit: PropTypes.bool,
    backgroundColor: PropTypes.string,
    boxShadow: PropTypes.string,
    outline: PropTypes.number,
    shadowColor: PropTypes.string,
    shadowX: PropTypes.number,
    shdowY: PropTypes.number,
    shadowOpacity: PropTypes.number,
    ShadowRadius: PropTypes.number,
    shadowBlur: PropTypes.number
  }
}

export default shape
