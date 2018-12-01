import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const flex = {
  props: ({
    flexDirection,
    flexWrap,
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    alignSelf
  }) => css`
    label: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    flex-flow: ${flexFlow};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    order: ${order};
    flex-grow: ${flexGrow};
    flex-shrink: ${flexShrink};
    flex-basis: ${flexBasis &&
      ((typeof flexBasis === 'string' && flexBasis) ||
        (typeof flexBasis === 'number' && flexBasis + 'px'))};
    flex: ${flex};
    align-self: ${alignSelf};
  `,
  propTypes: {
    flexDirection: PropTypes.oneOf([
      'column',
      'row',
      'column-reverse',
      'row-reverse'
    ]),
    flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    flexFlow: PropTypes.string,
    justifyContent: PropTypes.oneOf([
      'start',
      'end',
      'flex-start',
      'flex-end',
      'center',
      'left',
      'right',
      'normal',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'safe',
      'unsafe'
    ]),
    alignItems: PropTypes.oneOf([
      'normal',
      'flex-start',
      'flex-end',
      'center',
      'start',
      'end',
      'self-start',
      'self-end',
      'baseline',
      'first baseline',
      'last baseline',
      'stretch',
      'safe',
      'unsafe'
    ]),
    alignContent: PropTypes.oneOf([
      'start',
      'end',
      'flex-start',
      'flex-end',
      'center',
      'normal',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'safe',
      'unsafe'
    ]),
    order: PropTypes.number,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    flex: PropTypes.string,
    alignSelf: PropTypes.oneOf([
      'auto',
      'normal',
      'self-start',
      'self-end',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'first baseline',
      'last baseline',
      'stretch',
      'safe',
      'unsafe'
    ])
  }
}

export default flex
