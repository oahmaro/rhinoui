import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'

const hidden = css`
  display: block;
  color: transparent;
  background: transparent;
`
const fontColor = ({ theme, fontColor }) => css`
  color: ${fontColor === (
    'red' ||
    'orange' ||
    'yellow' ||
    'olive' ||
    'green' ||
    'teal' ||
    'blue' ||
    'purple' ||
    'pink' ||
    'brown' ||
    'grey') ? theme.colors.tags[fontColor] : fontColor};
`
const dividerColor = ({ lineColor }) => css`
  background: ${lineColor};
`

const contentPadding = ({ vertical, padding }) => css`
  margin-left: ${vertical ? 0 : padding}px; 
  margin-right: ${vertical ? 0 : padding}px;
  margin-top: ${vertical ? padding : 0}px;
  margin-bottom: ${vertical ? padding : 0}px;
`

const vertical = ({ width, height }) => css`
  width: ${height}px;
  height: ${width}px;
`

const horizontal = ({ width, height }) => css`
  width: ${width}px;
  height: ${height}px;
`

const divider = ({ theme }) => css`
  background: ${theme.colors.text.disabled};
`

const container = ({ theme, fontSize, vertical }) => css`
  display: flex;
  flex-direction: ${vertical ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  color: ${theme.colors.text.primary};
  user-select: none;
  font-size: ${typeof fontSize === 'string' ? (theme.sizes[fontSize] || fontSize || theme.sizes.sm) : fontSize + 'px'};
`

const Container = styled('div')`
  ${container}

`
const StyledDivider = styled('div')`
  ${divider};
  ${props => props.vertical ? vertical : horizontal};
  ${props => props.lineColor && dividerColor};
  ${props => props.hidden && hidden};
`

const StyledP = styled('p')`
  margin: 0;
  ${contentPadding};
  ${props => props.fontColor && fontColor};
  ${props => props.hidden && hidden};
`

const Divider = (props) => {
  return (
    props.children
      ? (
        <Container {...props} hidden={props.hidden}>
          <StyledDivider {...props} children={null} className={null} hidden={props.hidden} />
          <StyledP {...props} children={null} className={null} hidden={props.hidden}>{props.children}</StyledP>
          <StyledDivider {...props} children={null} className={null} hidden={props.hidden} />
        </Container>
      )
      : <StyledDivider {...props} />
  )
}

Divider.propTypes = {
  children: PropTypes.string,
  vertical: PropTypes.bool,
  hidden: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lineColor: PropTypes.string,
  fontColor: PropTypes.string
}

Divider.defaultProps = {
  width: 100,
  height: 1
}

export default Divider
