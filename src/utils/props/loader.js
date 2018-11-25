import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const loader = {
  props: ({
    theme,
    size,
    appearance,
    loaderColor,
    loaderSize,
    loaderWidth
  }) => css`
    width: ${(loaderSize &&
      ((typeof loaderSize === 'string' && loaderSize) ||
        (typeof loaderSize === 'number' && loaderSize + 'px'))) ||
      '15px'};
    height: ${(loaderSize &&
      ((typeof loaderSize === 'string' && loaderSize) ||
        (typeof loaderSize === 'number' && loaderSize + 'px'))) ||
      '15px'};
    border: ${(loaderWidth &&
        ((typeof loaderWidth === 'string' && loaderWidth) ||
          (typeof loaderWidth === 'number' && loaderWidth + 'px'))) ||
        '2px'}
      solid #f3f3f3;
    border-radius: 50%;
    border-top: ${(loaderWidth &&
        ((typeof loaderWidth === 'string' && loaderWidth) ||
          (typeof loaderWidth === 'number' && loaderWidth + 'px'))) ||
        '2px'}
      solid;
    border-top-color: ${theme.colors.tags[loaderColor] ||
      theme.colors.ui[loaderColor] ||
      theme.colors.state[loaderColor] ||
      loaderColor ||
      (appearance === 'primary' ||
      appearance === 'warning' ||
      appearance === 'danger'
        ? theme.colors.text.disabled
        : theme.colors.state.key)};
    animation: spin 0.75s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
  propTypes: {
    loaderColor: PropTypes.string,
    loaderSize: PropTypes.string,
    loaderWidth: PropTypes.string
  }
}

export default loader
