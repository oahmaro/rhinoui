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
  ${transform.props};
  ${flex.props};

  ${border.props};
  ${icon.props};
  ${shape.props};
  ${button.props};
  ${text.props};
  ${background.props};
  ${shadow.props};
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
      <StyledButton {...props}>
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
  ...button.propTypes,
  ...flex.propTypes,
  ...transform.propTypes,
  ...shape.propTypes,
  ...text.propTypes,
  ...icon.propTypes,
  ...link.propTypes,
  ...border.propTypes,
  ...shadow.propsTypes
}

Button.defaultProps = {
  role: 'button'
}

export default Button
