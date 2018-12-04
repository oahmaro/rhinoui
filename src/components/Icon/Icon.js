import React from 'react'
import styled from 'react-emotion'
import { icons } from './data.js'
import { icon, shape } from '../../utils/props'

const StyledIcon = styled('svg')`
  ${icon.props};
  ${shape.props};
  fill: inherit;
`

const StyledPath = styled('path')`
  fill: inherit;
`

const Icon = props => {
  return (
    <StyledIcon
      {...props}
      viewBox={icons[props.icon] && icons[props.icon].viewBox}>
      <StyledPath d={icons[props.icon] && icons[props.icon].d} />
    </StyledIcon>
  )
}

Icon.propTypes = {
  ...icon.propTypes,
  ...icon.propTypes
}

export default Icon
