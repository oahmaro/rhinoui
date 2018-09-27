import React from 'react'
import { Divider } from 'rhinoui'
import { withTheme } from 'emotion-theming'

const DividerTesting = (props) => {
    return (
        <div>
            <Divider fontSize={20} fontColor='red' lineColor='green' width={150} padding={50}>Today</Divider>
            <Divider width={50} padding={10} vertical>Or</Divider>
        </div>

    )
}

export default withTheme(DividerTesting)