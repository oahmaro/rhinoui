import React from 'react'
import styled from 'react-emotion'
import Icon from '../Icon/Icon'

import {
  loader,
  button,
  transform,
  shape,
  link,
  flex,
  text,
  border,
  icon,
  background,
  shadow
} from '../../utils/props'

const StyledButton = styled('button')`
  ${button.props};
  ${transform.props};
  ${flex.props};
  ${border.props};
  ${icon.props};
  ${background.props};
  ${text.props};
  ${shadow.props};
  ${shape.props};
`
const StyledAnchor = styled('a')`
  ${transform.props};
  ${flex.props};
  ${text.props};
  ${link.props};
  ${shape.props};
`

const Loader = styled('div')`
  ${loader.props};
`

const Button = props => {
  return (
    (props.href && (
      <StyledAnchor {...props}>{props.children}</StyledAnchor>
    )) || (
      <StyledButton {...props} iconSize={null}>
        {(props.loader && <Loader {...props} children={null} />) ||
          (props.icon && (
            <Icon
              icon={props.icon}
              iconSize={props.iconSize}
              iconColor={props.iconColor}
            />
          )) ||
          props.children}
      </StyledButton>
    )
  )
}

Button.propTypes = {
  ...loader.propTypes,
  ...flex.propTypes,
  ...transform.propTypes,
  ...shape.propTypes,
  ...text.propTypes,
  ...icon.propTypes,
  ...link.propTypes,
  ...border.propTypes,
  ...shadow.propsTypes,
  ...button.propTypes
}

Button.defaultProps = {
  role: 'button',
  hover: {
    iconLighten: 0.5,
    textLighten: 0.5,
    backgroundLighten: 0.1
  },
  focus: {
    iconLighten: 0.5,
    textLighten: 0.5,
    backgroundLighten: 0.1
  },
  active: {
    backgroundDarken: 0.25
  },
  borderRadius: 2
}

export default Button
