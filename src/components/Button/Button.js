import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'
import { cprops } from '../../utils/props'

const colors = ({ theme, color, custom }) => css`
  color: ${theme.colors.text.base};
  background: ${theme.colors.tags[color] || color};
  &:focus {
    color: ${theme.colors.text.base};
    background: ${theme
    .color(theme.colors.tags[color] || color)
    .lighten(0.3)
    .string()};
    ${custom.color.focus};
  }
  &:hover {
    background: ${theme
    .color(theme.colors.tags[color] || color)
    .lighten(0.3)
    .string()};
    ${custom.color.hover};
  }
  &:active {
    background: ${theme
    .color(theme.colors.tags[color] || color)
    .darken(0.1)
    .string()};
    ${custom.color.active};
  }
  ${custom.color};
`

const buttonSelected = ({ theme, custom, appearance, color }) => css`
  background: ${(appearance === 'primary' &&
    theme
      .color(theme.colors.state.key)
      .darken(0.2)
      .string()) ||
    (appearance === 'secondary' && 'unset') ||
    (appearance === 'success' &&
      theme
        .color(theme.colors.state.success)
        .darken(0.2)
        .string()) ||
    (appearance === 'warning' &&
      theme
        .color(theme.colors.state.warning1)
        .lighten(0.2)
        .string()) ||
    (appearance === 'danger' &&
      theme
        .color(theme.colors.state.error)
        .lighten(0.1)
        .string()) ||
    (appearance === 'basic' && 'unset') ||
    (color &&
      theme
        .color(theme.colors.tags[color])
        .lighten(0.1)
        .string()) ||
    theme
      .color(theme.colors.ui.fill6)
      .lighten(0.2)
      .string()};
  color: ${((appearance === 'primary' ||
    appearance === 'success' ||
    appearance === 'danger') &&
    theme.colors.text.light2) ||
    (appearance === 'warning' && theme.colors.text.dark) ||
    (appearance === 'secondary' &&
      theme
        .color(theme.colors.state.key)
        .lighten(0.2)
        .string()) ||
    theme.colors.text.primary};
  border-width: 1px;
  border-style: solid;
  fill: ${theme.colors.text.primary};
  ${custom.active};
`

const buttonDisabled = ({ custom }) => css`
  opacity: 0.4;
  pointer-events: none;
  ${custom.disabled};
`

const buttonShape = ({ shape }) => css`
  border-radius: ${(shape === 'square' && '1px') ||
    (shape === 'rounded' && '4px') ||
    (shape === 'pill' && '12px') ||
    (shape === 'circle' && '100%')};
`

const buttonSuccess = ({ theme, custom }) => css`
  color: ${theme.colors.text.light2};
  fill: ${theme.colors.text.light2};
  background: ${theme.colors.state.success};
  &:focus {
    background: ${theme
    .color(theme.colors.state.success)
    .darken(0.2)
    .string()};
    color: ${theme.colors.text.light2};
    fill: ${theme.colors.text.light2};
    border-color: ${theme.colors.text.light2};
    border-width: 1px;
    border-style: solid;
    ${custom.success.focus};
  }
  &:hover {
    background: ${theme
    .color(theme.colors.state.success)
    .darken(0.2)
    .string()};
    color: ${theme.colors.text.light2};
    fill: ${theme.colors.text.light2};
    ${custom.success.hover};
  }
  &:active {
    background: ${theme
    .color(theme.colors.state.success)
    .darken(0.4)
    .string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.success.active};
  }
  ${custom.success};
`

const buttonWarning = ({ theme, custom }) => css`
  color: ${theme.colors.text.dark};
  fill: ${theme.colors.text.dark};
  background: ${theme.colors.state.warning1};
  &:focus {
    background: ${theme
    .color(theme.colors.state.warning1)
    .lighten(0.2)
    .string()};
    color: ${theme.colors.text.dark};
    fill: ${theme.colors.text.dark};
    border-color: ${theme.colors.text.light2};
    border-width: 1px;
    border-style: solid;
    ${custom.warning.focus};
  }
  &:hover {
    background: ${theme
    .color(theme.colors.state.warning1)
    .lighten(0.2)
    .string()};
    color: ${theme.colors.text.dark};
    fill: ${theme.colors.text.dark};
    ${custom.warning.hover};
  }
  &:active {
    background: ${theme
    .color(theme.colors.state.warning1)
    .darken(0.4)
    .string()};
    color: ${theme.colors.text.dark};
    fill: ${theme.colors.text.dark};
    ${custom.warning.active};
  }
  ${custom.warning};
`

const buttonError = ({ theme, custom }) => css`
  color: ${theme.colors.text.light1};
  fill: ${theme.colors.text.light1};
  background: ${theme.colors.state.error};
  &:focus {
    background: ${theme
    .color(theme.colors.state.error)
    .lighten(0.2)
    .string()};
    color: ${theme.colors.text.light2};
    fill: ${theme.colors.text.light2};
    border-color: ${theme.colors.text.light2};
    border-width: 1px;
    border-style: solid;
    ${custom.error.focus};
  }
  &:hover {
    background: ${theme
    .color(theme.colors.state.error)
    .lighten(0.2)
    .string()};
    color: ${theme.colors.text.light2};
    fill: ${theme.colors.text.light2};
    ${custom.error.hover};
  }
  &:active {
    background: ${theme
    .color(theme.colors.state.error)
    .darken(0.4)
    .string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.error.active};
  }
  ${custom.error};
`

const buttonPrimary = ({ theme, custom }) => css`
  background: ${theme.colors.state.key};
  color: ${theme.colors.text.light2};
  &:focus {
    background: ${theme
    .color(theme.colors.state.key)
    .darken(0.1)
    .string()};
    color: ${theme.colors.text.light2};
    fill: ${theme.colors.text.light2};
    border-color: ${theme.colors.state.warning2};
    border-width: 1px;
    border-style: solid;
    ${custom.primary.focus};
  }
  &:hover {
    background: ${theme
    .color(theme.colors.state.key)
    .darken(0.2)
    .string()};
    color: ${theme.colors.text.light2};
    fill: ${theme.colors.text.light2};
    ${custom.primary.hover};
  }
  &:active {
    background: ${theme
    .color(theme.colors.state.key)
    .darken(0.5)
    .string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.primary.active};
  }
  ${custom.primary};
`

const buttonSecondary = ({ theme, custom }) => css`
  background: unset;
  color: ${theme.colors.state.key};
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  &:focus {
    background: unset;
    border-color: transparent;
    color: ${theme
    .color(theme.colors.state.key)
    .lighten(0.3)
    .string()};
    fill: ${theme.colors.state.key};
    ${custom.secondary.focus};
  }
  &:hover {
    background: unset;
    color: ${theme
    .color(theme.colors.state.key)
    .lighten(0.3)
    .string()};
    fill: ${theme
    .color(theme.colors.state.key)
    .lighten(0.3)
    .string()};
    ${custom.secondary.hover};
  }
  &:active {
    background: unset;
    color: ${theme
    .color(theme.colors.state.key)
    .darken(0.4)
    .string()};
    fill: ${theme
    .color(theme.colors.state.key)
    .darken(0.4)
    .string()};
    ${custom.secondary.active};
  }
  ${custom.secondary};
`

const buttonBasic = ({ theme, custom }) => css`
  color: ${theme.colors.text.secondary};
  background: unset;
  &:focus {
    background: unset;
    color: ${theme.colors.text.primary};
    fill: ${theme.colors.text.primary};
    ${custom.basic.focus};
  }
  &:hover {
    background: unset;
    color: ${theme.colors.text.primary};
    ${custom.basic.hover};
  }
  &:active {
    background: unset;
    color: ${theme
    .color(theme.colors.text.primary)
    .darken(0.3)
    .string()};
    ${custom.basic.active};
  }
  ${custom.basic};
`

const button = ({ theme, fit }) => css`
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  width: ${fit && '-webkit-fill-available'};
  cursor: pointer;
  user-select: none;
  font-family: ${theme.font};
  background: ${theme.colors.ui.fill5};
  color: ${theme.colors.text.primary};
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-radius: ${theme.borderRadius.xs};
  box-sizing: border-box;
  font-size: ${theme.sizes.xs};
  padding: 1px 6px;
  &:focus {
    border-color: ${theme.colors.state.key};
    border-width: 1px;
    border-style: solid;
    background: ${theme
    .color(theme.colors.ui.fill6)
    .lighten(0.3)
    .string()};
    color: ${theme.colors.text.light2};
    fill: ${theme.colors.text.base};
    outline: none;
  }
  &:hover {
    color: ${theme.colors.text.light1};
    background: ${theme
    .color(theme.colors.ui.fill6)
    .lighten(0.3)
    .string()};
  }
  &:active {
    color: ${theme
    .color(theme.colors.text.primary)
    .darken(0.2)
    .string()};
    background: ${theme
    .color(theme.colors.ui.fill6)
    .darken(0.2)
    .string()};
  }
  &::selection {
    color: ${theme.colors.text.base};
    background: rgba(204, 204, 203, 0.1);
  }
`

const StyledButton = styled('button')`
  ${button};
  ${props => props.shape && buttonShape};
  ${props => props.color && colors};
  ${props => props.appearance === 'basic' && buttonBasic};
  ${props => props.appearance === 'primary' && buttonPrimary};
  ${props => props.appearance === 'secondary' && buttonSecondary};
  ${props => props.appearance === 'success' && buttonSuccess};
  ${props => props.appearance === 'warning' && buttonWarning};
  ${props => props.appearance === 'danger' && buttonError};
  ${props => props.selected && buttonSelected};
  ${props => props.disabled && buttonDisabled};
  ${cprops.transform};
  ${cprops.shape};
`

const linkState = ({ theme, custom }) => css`
  cursor: pointer;
  user-select: none;
  font-family: ${theme.font};
  color: ${theme.colors.text.primary};
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-radius: ${theme.borderRadius.xs};
  box-sizing: border-box;
  font-size: ${theme.sizes.xs};
  padding: 1px 6px;
  text-align: center;
  line-height: 26px;
  &:focus {
    outline: none;
    border-color: ${theme.colors.state.key};
    border-width: 1px;
    border-style: solid;
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
    background: rgba(204, 204, 203, 0.1);
    ${custom.link.selection};
  },
  ${custom.link};
`
const StyledAnchor = styled('a')`
  ${linkState};
  ${props => props.disabled && buttonDisabled};
`

const loaderColor = ({ theme, appearance, custom }) => css`
  border-top-color: ${appearance === 'primary' ||
  appearance === 'warning' ||
  appearance === 'danger'
    ? theme.colors.text.disabled
    : theme.colors.state.key};
  ${custom.loading};
`

const Loader = styled('div')`
  width: 15px;
  height: 15px;
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid;
  ${loaderColor};
  animation: spin 0.75s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Button = props => {
  return props.href ? (
    <StyledAnchor {...props}>{props.children}</StyledAnchor>
  ) : (
    <StyledButton {...props}>
      {props.loading ? (
        <Loader custom={props.custom} appearance={props.appearance} />
      ) : (
        props.children
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string,
  hidden: PropTypes.bool,
  href: PropTypes.string,
  fit: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle']),
  color: PropTypes.string,
  loading: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'base', 'md', 'lg', 'xl', 'xxl']),
  custom: PropTypes.shape({
    selected: PropTypes.object,
    disabled: PropTypes.object,
    basic: PropTypes.object,
    primary: PropTypes.object,
    secondary: PropTypes.object,
    success: PropTypes.object,
    warning: PropTypes.object,
    error: PropTypes.object,
    color: PropTypes.object,
    link: PropTypes.object,
    loading: PropTypes.object
  }),
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'basic',
    'success',
    'warning',
    'danger'
  ])
}

Button.defaultProps = {
  custom: {
    selected: {},
    disabled: {},
    basic: {},
    primary: {},
    secondary: {},
    success: {},
    warning: {},
    error: {},
    color: {},
    link: {},
    loading: {}
  },
  role: 'button'
}

export default Button
