import React from 'react'
import { Button } from 'rhinoui'
import styled from 'react-emotion'
import { withTheme }  from 'emotion-theming'

const StyledTags = styled(Button)`
  min-height: unset;
  min-width: unset;
  padding: 0px;
  height: 10px;
  width: 60px;
  box-sizing: border-box;
  border-radius: 0;
`

const ButtonTesting = ({ theme }) => {
    return (
        <div style={{background: '#1d1f23', height: '100vh'}}>
        <div>
          <Button primary>CREATE</Button>
        </div> 
        <div style={{paddingTop: '10px'}}>
          <Button primary>EDIT</Button>
        </div> 
        <div style={{paddingTop: '10px'}}>
          <Button primary>SAVE</Button>
          <Button secondary>DISCARD</Button>
        </div> 
        <div style={{paddingTop: '10px'}}>
          <Button primary disabled>SAVE</Button>
          <Button secondary disabled>DISCARD</Button>
        </div> 
        <div style={{paddingTop: '10px'}}>
          <Button>Click me</Button>
          <Button basic>CREATE</Button>
          <Button circular>OA</Button>
          <Button circular disabled>OA</Button>
        </div>
        <div style={{paddingTop: '10px'}}>
          <Button success>Success</Button>
          <Button warning custom={{
            warning: {
              color: theme.colors.text.disabled,
              hover: {
                color: theme.colors.text.disabled
              },
              active: {
                color: theme.colors.text.disabled
              },
              focus: {
                color: theme.colors.text.disabled
              }
            }
          }}>Warning</Button>
          <Button error>Error</Button>
          <Button></Button>
        </div>
        <div style={{paddingTop: '10px'}}>
          <StyledTags color='red'></StyledTags>
          <StyledTags color='orange'></StyledTags>
          <StyledTags color='yellow'></StyledTags>
          <StyledTags color='olive'></StyledTags>
          <StyledTags color='green'></StyledTags>
          <StyledTags color='teal'></StyledTags>
          <StyledTags color='blue'></StyledTags>
          <StyledTags color='purple'></StyledTags>
          <StyledTags color='pink'></StyledTags>
          <StyledTags color='brown'></StyledTags>
          <StyledTags color='grey'></StyledTags>
        </div>
      </div>        
    )
}

export default withTheme(ButtonTesting)
