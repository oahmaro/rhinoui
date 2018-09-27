import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'

const colors = ({ theme, color, custom }) => css`
  color: ${theme.colors.text.base};
  background: ${theme.colors.tags[color]};
  &:focus {
    color: ${theme.colors.text.base};
    background: ${theme.color(theme.colors.tags[color] || color).lighten(0.3).string()};
    ${custom.color.focus};
  }
  &:hover {
    background: ${theme.color(theme.colors.tags[color] || color).lighten(0.3).string()};
    ${custom.color.hover};
  }
  &:active {
    background: ${theme.color(theme.colors.tags[color] || color).darken(0.1).string()};
    ${custom.color.active};
  }
  ${custom.color};
`

const buttonActive = ({ theme, custom, primary, secondary, basic, success, warning, error, color }) => css`
  background: ${(primary && theme.color(theme.colors.state.key).darken(0.2).string()) ||
    (secondary && 'unset') ||
    (success && theme.color(theme.colors.state.success).lighten(0.1).string()) ||
    (warning && theme.color(theme.colors.state.warning).lighten(0.1).string()) ||
    (error && theme.color(theme.colors.state.error).lighten(0.1).string()) ||
    (basic && 'unset') ||
    (color && theme.color(theme.colors.tags[color]).lighten(0.1).string()) ||
    theme.color(theme.colors.ui.fill6).lighten(0.2).string()};
  color: ${((primary || success || warning || error) && theme.colors.text.base) ||
    (secondary && theme.color(theme.colors.state.key).lighten(0.2).string()) ||
    theme.colors.text.primary};
  border-color: ${(primary && theme.colors.state.warning) || theme.colors.state.key};
  border-width: 2px;
  border-style: solid;
  fill: ${theme.colors.text.primary};
  ${custom.active};
`

const buttonDisabled = ({ custom }) => css`
  opacity: 0.4;
  pointer-events: none;
  ${custom.disabled};
`

const buttonCircular = css`
  border-radius: 100%;
  min-width: unset;
  min-height: unset;
  width: 50px;
  height: 50px;
`

const buttonSuccess = ({ theme, custom }) => css`
  color: ${theme.colors.text.base};
  fill: ${theme.colors.text.base};
  background: ${theme.colors.state.success};
  &:focus {
    background: ${theme.color(theme.colors.state.success).lighten(0.1).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    border-color: ${theme.colors.state.key};
    border-width: 2px;
    border-style: solid;
    ${custom.success.focus}
  }
  &:hover {
    background: ${theme.color(theme.colors.state.success).lighten(0.1).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.success.hover}
  }
  &:active {
    background: ${theme.color(theme.colors.state.success).darken(0.2).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.success.active}
  }
  ${custom.success}
`

const buttonWarning = ({ theme, custom }) => css`
  color: ${theme.colors.text.base};
  fill: ${theme.colors.text.base};
  background: ${theme.colors.state.warning};
  &:focus {
    background: ${theme.color(theme.colors.state.warning).lighten(0.1).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    border-color: ${theme.colors.state.key};
    border-width: 2px;
    border-style: solid;
    ${custom.warning.focus}
  }
  &:hover {
    background: ${theme.color(theme.colors.state.warning).lighten(0.1).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.warning.hover}
  }
  &:active {
    background: ${theme.color(theme.colors.state.warning).darken(0.2).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.warning.active}
  }
  ${custom.warning}
`

const buttonError = ({ theme, custom }) => css`
  color: ${theme.colors.text.base};
  fill: ${theme.colors.text.base};
  background: ${theme.colors.state.error};
  &:focus {
    background: ${theme.color(theme.colors.state.error).lighten(0.1).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    border-color: ${theme.colors.state.key};
    border-width: 2px;
    border-style: solid;
    ${custom.error.focus}
  }
  &:hover {
    background: ${theme.color(theme.colors.state.error).lighten(0.1).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.error.hover}
  }
  &:active {
    background: ${theme.color(theme.colors.state.error).darken(0.2).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.error.active}
  }
  ${custom.error}
`

const buttonPrimary = ({ theme, custom }) => css`
  background: ${theme.colors.state.key};
  color: ${theme.colors.text.base};
  &:focus {
    background: ${theme.color(theme.colors.state.key).lighten(0.2).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    border-color: ${theme.colors.state.warning};
    border-width: 2px;
    border-style: solid;
    ${custom.primary.focus};
  }
  &:hover {
    background: ${theme.color(theme.colors.state.key).lighten(0.2).string()};
    color: ${theme.colors.text.base};
    fill: ${theme.colors.text.base};
    ${custom.primary.hover};
  }
  &:active {
    background: ${theme.color(theme.colors.state.key).darken(0.2).string()};
    color: ${theme.color(theme.colors.text.base).darken(0.1).string()};
    fill: ${theme.colors.text.base};
    ${custom.primary.active}
  }
  ${custom.primary};
`

const buttonSecondary = ({ theme, custom }) => css`
  background: unset;
  color: ${theme.colors.state.key};
  border-color: transparent;
  border-style: solid;
  border-width: 2px;
  &:focus {
    background: unset;
    border-color: transparent;
    color: ${theme.color(theme.colors.state.key).lighten(0.2).string()};
    fill: ${theme.color(theme.colors.state.key).lighten(0.2).string()};
    ${custom.secondary.focus};
  }
  &:hover {
    background: unset;
    color: ${theme.color(theme.colors.state.key).lighten(0.2).string()};
    fill: ${theme.color(theme.colors.state.key).lighten(0.2).string()};
    ${custom.secondary.hover};
  }
  &:active {
    background: unset;
    color: ${theme.color(theme.colors.state.key).darken(0.2).string()};
    fill: ${theme.color(theme.colors.state.key).darken(0.2).string()};
    ${custom.secondary.active};
  }
  ${custom.secondary};
`

const buttonBasic = ({ theme, custom }) => css`
  color: ${theme.colors.text.disabled};
  background: unset;
  &:focus {
    border-color: transparent;
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
    color: ${theme.color(theme.colors.text.secondary).darken(0.1).string()};
    ${custom.basic.active};
  }
  ${custom.basic};
`

const button = ({ theme }) => css`
  vertical-align: middle;
  min-width: 70px;
  min-height: 30px;
  cursor: pointer;
  user-select: none;
  font-family: ${theme.font};
  background: ${theme.colors.ui.fill6};
  color: ${theme.colors.text.primary};
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-radius: ${theme.borderRadius.xs};
  box-sizing: border-box;
  &:focus {
    border-color: ${theme.colors.state.lightKey};
    border-width: 2px;
    border-style: solid;
    background: ${theme.color(theme.colors.ui.fill6).lighten(0.3).string()};
    color: ${theme.colors.text.primary};
    fill: ${theme.colors.text.primary};
    outline: none;
  }
  &:hover {
    color: ${theme.colors.text.primary};
    background: ${theme.color(theme.colors.ui.fill6).lighten(0.3).string()};
  }
  &:active {
    color: ${theme.color(theme.colors.text.primary).darken(0.2).string()};
    background: ${theme.color(theme.colors.ui.fill6).darken(0.1).string()};
  }
  &::selection {
    color: ${theme.colors.text.base};
    background: rgba(204, 204, 203, 0.1);
  }
`

const StyledButton = styled('button')`
  ${button};
  ${props => props.circular && buttonCircular};
  ${props => props.basic && buttonBasic};
  ${props => props.color && colors};
  ${props => props.primary && buttonPrimary};
  ${props => props.secondary && buttonSecondary};
  ${props => props.success && buttonSuccess};
  ${props => props.warning && buttonWarning};
  ${props => props.error && buttonError};
  ${props => props.active && buttonActive};
  ${props => props.disabled && buttonDisabled};
`

const Button = (props) => {
  return (
    <StyledButton role='button' {...props}>{props.children}</StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  custom: PropTypes.shape({
    active: PropTypes.object,
    disabled: PropTypes.object,
    basic: PropTypes.object,
    primary: PropTypes.object,
    secondary: PropTypes.object,
    success: PropTypes.object,
    warning: PropTypes.object,
    error: PropTypes.object,
    color: PropTypes.object
  }),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  basic: PropTypes.bool,
  circular: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  color: PropTypes.string
}

Button.defaultProps = {
  custom: {
    active: {},
    disabled: {},
    basic: {},
    primary: {},
    secondary: {},
    success: {},
    warning: {},
    error: {},
    color: {}
  }
}

export default Button
