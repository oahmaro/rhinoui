import { css } from 'react-emotion'
// import PropTypes from 'prop-types'

const link = {
  props: ({ theme, href, custom }) =>
    href &&
    css`
    label: link;
    cursor: ${'pointer'};
    user-select: ${'none'};
    font-family: ${theme.font};
    color: ${theme.colors.text.primary};
    border-color: ${'transparent'};
    border-width: ${'1px'};
    border-style: ${'solid'};
    border-radius: ${theme.borderRadius.xs};
    box-sizing: ${'border-box'};
    font-size: ${theme.sizes.xs};
    text-align: ${'center'};
    line-height: ${'26px'};
    &:focus {
        outline: ${'none'};
        border-color: ${theme.colors.state.key};
        border-width: ${'1px'};
        border-style: ${'solid'};
        color: ${theme.colors.text.primary} !important;
        ${custom.link.focus}
    }
    &:link {
        color: ${theme.colors.state.key};
        ${custom.link.link}
    }
    &:visited {
        color: ${theme.colors.state.key};
        ${custom.link.visited};
    }
    &:hover {
        color: ${theme
    .color(theme.colors.state.key)
    .lighten(0.4)
    .string()};
        ${custom.link.hover};
    }
    &:active {
        color: ${theme
    .color(theme.colors.state.key)
    .darken(0.4)
    .string()};
        ${custom.link.active};
    }
    &::selection {
        color: ${theme.colors.text.light2};
        background: ${'rgba(204, 204, 203, 0.1)'};
        ${custom.link.selection};
    },
    ${custom.link};
  `,
  propTypes: {}
}

export default link
