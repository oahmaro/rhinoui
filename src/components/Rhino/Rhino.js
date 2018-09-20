import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import DesignData from '../../utils/DesignData'
import { injectGlobal } from 'emotion'
import Color from 'color'

injectGlobal`
  @import url(//fonts.googleapis.com/earlyaccess/notokufiarabic.css);
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

class Rhino extends Component {
    static propTypes = {
      children: PropTypes.node,
      theme: PropTypes.string,
      lang: PropTypes.string,
      data: PropTypes.object
    }

    static defaultProps = {
      data: DesignData
    }

    setTheme = (theme) => {
      this.setState({ theme })
    }

    setLanguage = (lang) => {
      this.setState({ lang })
    }

    state = {
      theme: this.props.theme || 'dark',
      lang: this.props.lang || 'en',
      styles: this.props.data,
      setTheme: this.setTheme,
      setLang: this.setLanguage
    }

    render() {
      const { theme, lang, styles, setTheme, setLang } = this.state
      const value = {
        theme,
        lang,
        sizes: styles.lang[lang].fontSize,
        font: styles.lang[lang].fontFamily,
        colors: styles.theme[theme],
        breakpoints: styles.breakpoints,
        borderRadius: styles.borderRadius,
        setTheme,
        setLang,
        color: Color
      }
      return (
        <ThemeProvider theme={value}>
          <Fragment>
            { this.props.children }
          </Fragment>
        </ThemeProvider>
      )
    }
}

export default Rhino
