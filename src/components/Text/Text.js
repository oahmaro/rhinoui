import React from 'react'
import styled from 'react-emotion'
import { shape, transform, text } from '../../utils/props'

const StyledText = styled('p')`
  display: block;
  margin: 0;
  ${shape.props};
  ${transform.props};
  ${text.props};
`

const Text = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}

Text.propTypes = {
  ...shape.propTypes,
  ...transform.propTypes,
  ...text.propTypes
}

export default Text
