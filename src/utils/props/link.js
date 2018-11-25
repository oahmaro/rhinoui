import { css } from 'react-emotion'
// import PropTypes from 'prop-types'

const link = {
  props: ({ theme, href, custom }) => css`
    cursor: ${href && 'pointer'};
    user-select: ${href && 'none'};
    font-family: ${href && theme.font};
    color: ${href && theme.colors.text.primary};
    border-color: ${href && 'transparent'};
    border-width: ${href && '1px'};
    border-style: ${href && 'solid'};
    border-radius: ${href && theme.borderRadius.xs};
    box-sizing: ${href && 'border-box'};
    font-size: ${href && theme.sizes.xs};
    text-align: ${href && 'center'};
    line-height: ${href && '26px'};
    &:focus {
        outline: ${href && 'none'};
        border-color: ${href && theme.colors.state.key};
        border-width: ${href && '1px'};
        border-style: ${href && 'solid'};
        color: ${href && theme.colors.text.primary} !important;
        ${href && custom.link.focus}
    }
    &:link {
        color: ${href && theme.colors.state.key};
        ${href && custom.link.link}
    }
    &:visited {
        color: ${href && theme.colors.state.key};
        ${href && custom.link.visited};
    }
    &:hover {
        color: ${href &&
          theme
            .color(theme.colors.state.key)
            .lighten(0.4)
            .string()};
        ${href && custom.link.hover};
    }
    &:active {
        color: ${href &&
          theme
            .color(theme.colors.state.key)
            .darken(0.4)
            .string()};
        ${href && custom.link.active};
    }
    &::selection {
        color: ${href && theme.colors.text.light2};
        background: ${href && 'rgba(204, 204, 203, 0.1)'};
        ${href && custom.link.selection};
    },
    ${href && custom.link};
  `,
  propTypes: {}
}

export default link
