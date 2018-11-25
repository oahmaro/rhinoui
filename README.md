# rhinoui

> A set of React UI components that supports Rhino&#x27;s design language

[![NPM](https://img.shields.io/npm/v/rhinoui.svg)](https://www.npmjs.com/package/rhinoui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install rhinoui
```

## Usage

```jsx
import React, { Component } from 'react'

import { Box, Button } from 'rhinoui'

class Example extends Component {
  render() {
    return (
      <Box flexDirection='row'>
        <Button icon='like' iconColor='red' />
        <Button icon='close' iconColor='green' />
        <Button icon='comment' iconColor='blue' />
      </Box>
    )
  }
}
```

## License

MIT © [oahmaro](https://github.com/oahmaro)
