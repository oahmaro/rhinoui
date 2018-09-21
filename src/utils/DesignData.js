// Design Data used by rhinoui library to manipulate colors, sizes, langauge

const DesignData = {
  theme: {
    dark: {
      text: {
        base: '#ffffff',
        primary: '#cccccb',
        secondary: '#808080',
        disabled: '#515151',
        other: '#9e9d9e'
      },
      state: {
        key: '#26AA91',
        success: '#72b55f',
        warning: '#f58229',
        error: '#d82b2b'
      },
      ui: {
        fill1: '#111213',
        fill2: '#191919',
        fill3: '#1D1F23',
        fill4: '#212326',
        fill5: '#26292B',
        fill6: '#24292E',
        fill7: '#2A2F33',
        fill8: '#31363A',
        fill9: '#313B43'
      },
      tags: {
        red: '#b84243',
        orange: '#b7651c',
        yellow: '#d6af0b',
        olive: '#355948',
        green: '#6fb544',
        teal: '#1f7c73',
        blue: '#255066',
        violet: '#3b3270',
        purple: '#613855',
        pink: '#993977',
        brown: '#562e2e',
        grey: '#6d6d6d'
      }
    },
    light: {
      text: {
        key: '#26AA91',
        success: '',
        warning: '',
        error: ''
      },
      state: {
        key: '',
        success: '',
        warning: '',
        error: ''
      },
      ui: {
        fill1: '#0B303D',
        fill2: '#E9EEF0',
        fill3: '#BECDD3',
        fill4: '#A8BDC4',
        fill5: '#92ADB6',
        fill6: '#7D9CA7',
        fill7: '#678C99',
        fill8: '#517C8A',
        fill9: '#3C6B7C'
      },
      tags: {
        fill1: '#0079bf',
        fill2: '#613855',
        fill3: '#562e2e',
        fill4: '#477484',
        fill5: '#b7651c',
        fill6: '#b84243',
        fill7: '#6fb544',
        fill8: '#6d6d6d',
        fill9: '#255066',
        fill10: '#d6af0b',
        fill11: '#b48742',
        fill12: '#355948'
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
      fontFamily: 'Roboto, Georgia, serif, Palatino Linotype, Book Antiqua, Palatino, Times New Roman, Times, Noto Kufi Arabic, Noto Naskh Arabic, Noto Sans Arabic'
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
      fontFamily: 'Noto Kufi Arabic, Noto Naskh Arabic, Noto Sans Arabic, Roboto, Georgia, serif, Palatino Linotype, Book Antiqua, Palatino, Times New Roman, Times'
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
