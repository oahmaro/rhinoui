import React from 'react'
import styled from 'react-emotion'
import {
  transform,
  icon,
  shape,
  flex,
  loader,
  border,
  background,
  shadow
} from '../../utils/props'
import Icon from '../Icon/Icon'

const StyledBox = styled('div')`
  display: flex;
  align-content: flex-start;
  justify-content: ${props =>
    props.icon || props.loader ? 'center' : 'flex-start'};
  align-items: ${props => (props.icon || props.loader) && 'center'};
  z-index: 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  ${icon.props};
  ${flex.props};
  ${transform.props};
  ${border.props};
  ${shape.props};
  ${background.props};
  ${shadow.props};
`

const StyledLoader = styled('div')`
  ${loader.props};
`

const Box = props => {
  return (
    (props.loader && (
      <StyledBox {...props}>
        <StyledLoader {...props} children={null} />
      </StyledBox>
    )) ||
    (props.icon && (
      <StyledBox {...props}>
        {props.children}
        <Icon
          icon={props.icon}
          iconSize={props.iconSize}
          iconColor={props.iconColor}
        />
      </StyledBox>
    )) || <StyledBox {...props}>{props.children}</StyledBox>
  )
}

Box.propTypes = {
  ...icon.propTypes,
  ...shape.propTypes,
  ...flex.propTypes,
  ...transform.propTypes,
  ...border.propTypes,
  ...background.propTypes,
  ...shadow.propTypes
}

StyledLoader.propTypes = {
  ...icon.propTypes
}

export default Box
