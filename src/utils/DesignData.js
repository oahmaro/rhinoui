import colors from './colors'

// Design Data used by rhinoui library to manipulate colors, sizes, langauge
const DesignData = {
  theme: {
    dark: {
      text: {
        base: colors['gr50'],
        primary: colors['gr75'],
        secondary: colors['gr200'],
        disabled: colors['gr400']
      },
      state: {
        key: colors['pg200'],
        lightKey: colors['pg100'],
        success: colors['g200'],
        warning: colors['y100'],
        error: colors['r200']
      },
      ui: {
        fill1: colors['rd500'],
        fill2: colors['rd400'],
        fill3: colors['rd300'],
        fill4: colors['rd200'],
        fill5: colors['rd100'],
        fill6: colors['rd75']
      },
      tags: {
        red: colors['r200'],
        orange: colors['or200'],
        yellow: colors['y200'],
        olive: colors['ol200'],
        green: colors['g200'],
        teal: colors['t200'],
        blue: colors['b200'],
        purple: colors['pu200'],
        pink: colors['pi200'],
        brown: colors['or500'],
        grey: colors['gr200']
      }
    },
    light: {
      text: {
        base: colors['gr900'],
        primary: colors['gr300'],
        secondary: colors['gr200'],
        disabled: colors['gr100']
      },
      state: {
        key: colors['pg100'],
        success: colors['g100'],
        warning: colors['y300'],
        error: colors['r300']
      },
      ui: {
        fill1: colors['rl500'],
        fill2: colors['gr50'],
        fill3: colors['gr75'],
        fill4: colors['gr25'],
        fill5: colors[''],
        fill6: colors['gr100']
      },
      tags: {
        red: colors['r200'],
        orange: colors['or200'],
        yellow: colors['y200'],
        olive: colors['ol200'],
        green: colors['g200'],
        teal: colors['t200'],
        blue: colors['b200'],
        purple: colors['pu200'],
        pink: colors['pi200'],
        brown: colors['or500'],
        grey: colors['gr200']
      }
    }
  },
  lang: {
    en: {
      fontSize: {
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '18px',
        lg: '20px',
        xl: '22px',
        xxl: '24px'
      },
      fontFamily: 'Roboto, Noto Kufi Arabic'
    },
    ar: {
      fontSize: {
        xxs: '9px',
        xs: '11px',
        sm: '13px',
        base: '15px',
        md: '17px',
        lg: '19px',
        xl: '21px',
        xxl: '23px'
      },
      fontFamily: 'Noto Kufi Arabic, Roboto'
    }
  },
  breakpoints: {
    sm: '768px', // for tablets - screens equal to or greater than 768px wide
    md: '992px', // for small laptops - screens equal to or greater than 992px wide
    lg: '1200px' // for laptops and desktops - screens equal to or greater than 1200px wide
  },
  borderRadius: {
    xxs: '1px',
    xs: '2px',
    sm: '3px',
    md: '4px',
    base: '5px',
    lg: '6px',
    xl: '7px',
    xxl: '8px'
  }
}

export default DesignData
