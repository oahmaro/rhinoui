import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const shape = {
  props: ({
    /* ----- Other Props ----- */
    /* ----- Dimention Props ----- */
    size,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    fit,
    boxSizing,

    /* ----- Appearance Props ----- */
    display,
    hidden,
    opacity,
    disabled,

    /* ----- Overflow Props ----- */
    overflowX,
    overflowY,
    overflow
  }) => css`
    label: shape;
    display: ${display};

    width: ${(width && (typeof width === 'string' && width)) ||
      (typeof width === 'number' && width + 'px') ||
      (size && size + 'px')};

    height: ${(height && (typeof height === 'string' && height)) ||
      (typeof height === 'number' && height + 'px') ||
      (size && size + 'px')};

    min-width: ${(typeof minWidth === 'string' && minWidth) ||
      (typeof minWidth === 'number' && minWidth + 'px')};
    max-width: ${(typeof maxWidth === 'string' && maxWidth) ||
      (typeof maxWidth === 'number' && maxWidth + 'px')};
    min-height: ${(typeof minHeight === 'string' && minHeight) ||
      (typeof minHeight === 'number' && minHeight + 'px')};
    max-height: ${(typeof maxHeight === 'string' && maxHeight) ||
      (typeof maxHeight === 'number' && maxHeight + 'px')};

    visibility: ${hidden && 'hidden'};
    width: ${fit && '-webkit-fill-available'};
    opacity: ${opacity};
    opacity: ${disabled && '0.4'};
    pointer-events: ${disabled && 'none'};

    box-sizing: ${boxSizing};

    overflow: ${overflow};
    overflow-x: ${overflowX};
    overflow-y: ${overflowY};
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
