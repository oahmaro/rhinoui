import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const button = {
  props: ({
    /* ----- Other Props ----- */
    textLighten,
    textDarken,
    textOpacity,
    backgroundOpacity,
    iconOpacity,
    backgroundDarken,
    backgroundLighten,
    iconDarken,
    iconLighten,
    width,
    height,
    size,
    theme,
    fit,
    appearance,
    selected,

    /* ----- Text Props ----- */
    textHoverColor,
    textFocusColor,
    textActiveColor,
    textHoverLighten,
    textHoverDarken,
    textFocusLighten,
    textFocusDarken,
    textActiveDarken,
    textActiveLighten,

    /* ----- Icon Props ----- */
    iconHoverColor,
    iconFocusColor,
    iconActiveColor,
    iconHoverLighten,
    iconHoverDarken,
    iconFocusLighten,
    iconFocusDarken,
    iconActiveLighten,
    iconActiveDarken,

    /* ----- Background Props ----- */
    backgroundHoverColor,
    backgroundFocusColor,
    backgroundActiveColor,
    backgroundHoverDarken,
    backgroundHoverLighten,
    backgroundFocusDarken,
    backgroundFocusLighten,
    backgroundActiveDarken,
    backgroundActiveLighten,

    /* ----- Border Props ----- */
    borderHoverColor,
    borderFocusColor,
    borderActiveColor,
    borderHoverDarken,
    borderHoverLighten,
    borderFocusLighten,
    borderFocusDarken,
    borderActiveLighten,
    borderActiveDarken,

    /* ----- Text Opacity ----- */
    textHoverOpacity,
    textFocusOpacity,
    textActiveOpacity,

    /* ----- Icon Opacity ----- */
    iconHoverOpacity,
    iconFocusOpacity,
    iconActiveOpacity,

    /* ----- Background Opacity ----- */
    backgroundHoverOpacity,
    backgroundFocusOpacity,
    backgroundActiveOpacity,

    /* ----- Border Opacity ----- */
    borderHoverOpacity,
    borderFocusOpacity,
    borderActiveOpacity,

    /* ----- Selected Props ----- */
    backgroundSelectedColor,
    textSelectedColor,
    iconSelectedColor,

    /* ----- Style Props ----- */
    hoverStyles,
    focusStyles,
    activeStyles,
    dangerStyles,
    warningStyles,
    successStyles,
    selectedStyles,
    primaryStyles,
    secondaryStyles,
    basicStyles,
    buttonStyles,
    dangerActiveStyles,
    dangerFocusStyles,
    dangerHoverStyles,
    warningActiveStyles,
    warningHoverStyles,
    warningFocusStyles,
    successActiveStyles,
    successHoverStyles,
    successFocusStyles,
    primaryActiveStyles,
    primaryHoverStyles,
    primaryFocusStyles,
    secondaryActiveStyles,
    secondaryHoverStyles,
    secondaryFocusStyles,
    basicHoverStyles,
    basicActiveStyles,
    basicFocusStyles,

    /* ----- Logic Props ----- */
    _color = (prop, lighten = 0, darken = 0, opacity = 1) => {
      const c = theme
        .color(
          theme.colors.tags[prop] ||
            theme.colors.ui[prop] ||
            theme.colors.text[prop] ||
            theme.colors.state[prop] ||
            prop
        )
        .darken(darken)
        .lighten(lighten)
      return `rgba(${c.red()}, ${c.green()}, ${c.blue()}, ${c.alpha() *
        opacity})`
    }
  }) => css`
    label: button;
    /* ----- Button ----- */
    /* ------------------ */
    display: inline-flex;
    padding: 0;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    color: ${_color(
    theme.colors.text.base,
    textLighten,
    textDarken,
    textOpacity
  )};

    width: ${
  width || size
    ? (typeof width === 'string' && width) ||
          (typeof width === 'number' && width + 'px') ||
          (typeof size === 'string' && size) ||
          (typeof size === 'number' && size + 'px')
    : '70px'
};;
    height: ${
  height || size
    ? (typeof height === 'string' && height) ||
          (typeof height === 'number' && height + 'px') ||
          (typeof size === 'string' && size) ||
          (typeof size === 'number' && size + 'px')
    : '30px'
};;
      
    width: ${fit && '-webkit-fill-available'};
    cursor: pointer;
    user-select: none;
    font-family: ${theme.font};
    
    background: ${_color(
    theme.colors.ui.fill5,
    backgroundLighten,
    backgroundDarken,
    backgroundOpacity
  )};

    box-sizing: border-box;
    font-size: ${theme.sizes.xs};
    &:focus {
      border-color: ${_color(
    theme.colors.state.key,
    borderFocusLighten,
    borderFocusDarken,
    borderFocusOpacity
  )};
      border-width: 1px;
      border-style: solid;
      
      background: ${_color(
    theme.colors.ui.fill6,
    backgroundFocusLighten || 0.3,
    backgroundFocusDarken,
    backgroundFocusOpacity
  )};

      color: ${_color(
    theme.colors.text.light2,
    textFocusLighten || 0.3,
    textFocusDarken,
    textFocusOpacity
  )};

      fill: ${_color(
    theme.colors.text.light2,
    iconFocusLighten,
    iconFocusDarken,
    iconFocusOpacity
  )};
      outline: none;
      ${focusStyles};
    }
    &:hover {
      color: ${_color(
    theme.colors.text.light1,
    textHoverLighten,
    textHoverDarken,
    textHoverOpacity
  )};
      fill: ${_color(
    theme.colors.text.light1,
    iconHoverLighten,
    iconHoverDarken,
    iconHoverOpacity
  )};

      background: ${_color(
    theme.colors.ui.fill6,
    backgroundHoverLighten || 0.3,
    backgroundHoverDarken,
    backgroundHoverOpacity
  )};

    ${hoverStyles};
    }
    &:active {
      color: ${_color(
    theme.colors.text.primary,
    textActiveLighten,
    textActiveDarken || 0.2,
    textActiveOpacity
  )};

      fill: ${_color(
    theme.colors.text.primary,
    iconActiveLighten,
    iconActiveDarken || 0.2,
    iconActiveOpacity
  )};

      background: ${_color(
    theme.colors.ui.fill6,
    backgroundActiveLighten,
    backgroundActiveDarken || 0.2,
    backgroundActiveOpacity
  )};
    ${activeStyles};
    }
    &::selection {
      color: ${theme.colors.text.base};
      background: rgba(204, 204, 203, 0.1);
    }
    ${buttonStyles};

    /* ----- Success ----- */
    /* -------------------- */
    color: ${appearance === 'success' &&
      _color(theme.colors.text.light2, textLighten, textDarken, textOpacity) +
        ' !important'};

    fill: ${appearance === 'success' &&
      _color(theme.colors.text.light2, iconLighten, iconDarken, iconOpacity) +
        ' !important'};


    background: ${appearance === 'success' &&
      _color(
        theme.colors.state.success,
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};

    &:focus {
      background: ${appearance === 'success' &&
        _color(
          theme.colors.state.success,
          backgroundFocusLighten,
          backgroundFocusDarken || 0.2,
          backgroundFocusOpacity
        )};

      color: ${appearance === 'success' &&
        _color(
          theme.colors.text.light2,
          textFocusLighten,
          textFocusDarken,
          textFocusOpacity
        )};

      fill: ${appearance === 'success' &&
        _color(
          theme.colors.text.light2,
          iconFocusLighten,
          iconFocusDarken,
          iconFocusOpacity
        )} ; 

      border-color: ${appearance === 'success' &&
        _color(
          theme.colors.text.light2,
          borderFocusLighten,
          borderFocusDarken,
          borderFocusOpacity
        )};

      border-width: ${appearance === 'success' && '1px'};
      border-style: ${appearance === 'success' && 'solid'};
      ${appearance === 'success' && successFocusStyles};
    }
    &:hover {
      background: ${appearance === 'success' &&
        _color(
          theme.colors.state.success,
          backgroundHoverLighten,
          backgroundHoverDarken || 0.2,
          backgroundHoverOpacity
        )};

      color: ${appearance === 'success' &&
        _color(
          theme.colors.text.light2,
          textHoverLighten,
          textHoverDarken,
          textHoverOpacity
        )};

      fill: ${appearance === 'success' &&
        _color(
          theme.colors.text.light2,
          iconHoverLighten,
          iconHoverDarken,
          iconHoverOpacity
        )};

      ${appearance === 'success' && successHoverStyles};
    }
    &:active {
      background: ${appearance === 'success' &&
        _color(
          theme.colors.state.success,
          backgroundActiveLighten,
          backgroundActiveDarken || 0.4,
          backgroundActiveOpacity
        )};

      color: ${appearance === 'success' &&
        _color(
          theme.colors.text.base,
          textActiveLighten,
          textActiveDarken,
          textActiveOpacity
        )};

      fill: ${appearance === 'success' &&
        _color(
          theme.colors.text.base,
          iconActiveLighten,
          iconActiveDarken,
          iconActiveOpacity
        )};

      ${appearance === 'success' && successActiveStyles};
    }
    ${appearance === 'success' && successStyles};

    /* ----- Warning ----- */
    /* ------------------- */
    color: ${appearance === 'warning' &&
      _color(theme.colors.text.dark, textLighten, textDarken, textOpacity) +
        ' !important'};

    fill: ${appearance === 'warning' &&
      _color(theme.colors.text.dark, iconLighten, iconDarken, iconOpacity) +
        ' !important'};

    background: ${appearance === 'warning' &&
      _color(
        theme.colors.state.warning1,
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};
    &:focus {
      background: ${appearance === 'warning' &&
        _color(
          theme.colors.state.warning1,
          backgroundFocusLighten || 0.2,
          backgroundFocusDarken,
          backgroundFocusOpacity
        )};

      color: ${appearance === 'warning' &&
        _color(
          theme.colors.text.dark,
          textFocusLighten,
          textFocusDarken,
          textFocusOpacity
        )};

      fill: ${appearance === 'warning' &&
        _color(
          theme.color.text.dark,
          iconFocusLighten,
          iconFocusDarken,
          iconFocusOpacity
        )};

      border-color: ${appearance === 'warning' &&
        _color(
          theme.colors.text.light2,
          borderFocusLighten,
          borderFocusDarken,
          borderFocusOpacity
        )};

      border-width: ${appearance === 'warning' && '1px'};
      border-style: ${appearance === 'warning' && 'solid'};
      ${appearance === 'warning' && warningFocusStyles};
    }
    &:hover {
      background: ${appearance === 'warning' &&
        _color(
          theme.colors.state.warning1,
          backgroundHoverLighten || 0.2,
          backgroundHoverDarken,
          backgroundHoverOpacity
        )};

      color: ${appearance === 'warning' &&
        _color(
          theme.colors.state.warning1,
          textHoverLighten,
          textHoverDarken,
          textHoverOpacity
        )};
      
      fill: ${appearance === 'warning' &&
        _color(
          theme.colors.text.dark,
          iconHoverLighten,
          iconHoverDarken,
          iconHoverOpacity
        )};

      ${appearance === 'warning' && warningHoverStyles};
    }
    &:active {
      background: ${appearance === 'warning' &&
        _color(
          theme.colors.state.warning1,
          backgroundActiveLighten,
          backgroundActiveDarken || 0.4,
          backgroundActiveOpacity
        )};

      color: ${appearance === 'warning' &&
        _color(
          theme.colors.text.dark,
          textActiveLighten,
          textActiveDarken,
          textActiveOpacity
        )};

      fill: ${appearance === 'warning' &&
        _color(
          theme.colors.text.dark,
          iconActiveLighten,
          iconActiveDarken,
          iconActiveOpacity
        )};

      ${appearance === 'warning' && warningActiveStyles};
    }
    ${appearance === 'warning' && warningStyles}

    /* ----- Danger ----- */
    /* ------------------ */

    color: ${appearance === 'danger' &&
      _color(theme.colors.text.light1, textLighten, textDarken, textOpacity) +
        ' !important'};


    fill: ${appearance === 'danger' &&
      _color(theme.colors.text.light1, iconLighten, iconDarken, iconOpacity) +
        ' !important'};

    background: ${appearance === 'danger' &&
      _color(
        theme.colors.state.error,
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};

    &:focus {
      background: ${appearance === 'danger' &&
        _color(
          theme.colors.state.error,
          backgroundFocusLighten || 0.2,
          backgroundFocusDarken,
          backgroundFocusOpacity
        )};

      color: ${appearance === 'danger' &&
        _color(
          theme.colors.text.light2,
          textFocusLighten,
          textFocusDarken,
          textFocusOpacity
        )};

      fill: ${appearance === 'danger' &&
        _color(
          theme.colors.text.light2,
          iconFocusLighten,
          iconFocusDarken,
          iconFocusOpacity
        )};

      border-color: ${appearance === 'danger' &&
        _color(
          theme.colors.text.light2,
          borderFocusLighten,
          borderFocusDarken,
          borderFocusOpacity
        )};

      border-width: ${appearance === 'danger' && '1px'};
      border-style: ${appearance === 'danger' && 'solid'};
      ${appearance === 'danger' && dangerFocusStyles};
    }
    &:hover {
      background: ${appearance === 'danger' &&
        _color(
          theme.colors.state.error,
          backgroundHoverLighten,
          backgroundHoverDarken,
          backgroundHoverOpacity
        )};

      color: ${appearance === 'danger' &&
        _color(
          theme.colors.text.light2,
          textHoverLighten,
          textHoverDarken,
          textHoverOpacity
        )};

      fill: ${appearance === 'danger' &&
        _color(
          theme.colors.text.light2,
          iconHoverLighten,
          iconHoverDarken,
          iconHoverOpacity
        )};
      ${appearance === 'danger' && dangerHoverStyles}
    }
    &:active {
      background: ${appearance === 'danger' &&
        _color(
          theme.colors.state.error,
          backgroundActiveLighten,
          backgroundActiveDarken || 0.4,
          backgroundActiveOpacity
        )};

      color: ${appearance === 'danger' &&
        _color(
          theme.colors.text.base,
          textActiveLighten,
          textActiveDarken,
          textActiveOpacity
        )};

      fill: ${appearance === 'danger' &&
        _color(
          theme.colors.text.base,
          iconActiveLighten,
          iconActiveDarken,
          iconActiveOpacity
        )};

      ${appearance === 'danger' && dangerActiveStyles};
    }
    ${appearance === 'danger' && dangerStyles};

    /* ----- Primary ----- */
    /* ------------------- */
    background: ${appearance === 'primary' &&
      _color(
        theme.colors.state.key,
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};

    color: ${appearance === 'primary' &&
      _color(theme.colors.text.light2, textLighten, textDarken, textOpacity)};

    &:focus {
      background: ${appearance === 'primary' &&
        _color(
          theme.colors.state.key,
          backgroundFocusLighten,
          backgroundFocusDarken || 0.1,
          backgroundFocusOpacity
        )};

      color: ${appearance === 'primary' &&
        _color(
          theme.colors.text.light2,
          textFocusLighten,
          textFocusDarken,
          textFocusOpacity
        )};

      fill: ${appearance === 'primary' &&
        _color(
          theme.colors.text.light2,
          iconFocusLighten,
          iconFocusDarken,
          iconFocusOpacity
        )};

      border-color: ${appearance === 'primary' &&
        _color(
          theme.colors.state.warning2,
          borderFocusLighten,
          borderFocusDarken,
          borderFocusOpacity
        )};

      border-width: ${appearance === 'primary' && '1px'};
      border-style: ${appearance === 'primary' && 'solid'};
      ${appearance === 'focus' && primaryFocusStyles};
    }
    &:hover {
      background: ${appearance === 'primary' &&
        _color(
          theme.colors.state.key,
          backgroundHoverLighten,
          backgroundHoverDarken || 0.2,
          backgroundHoverOpacity
        )};

      color: ${appearance === 'primary' &&
        _color(
          theme.colors.text.light2,
          textHoverLighten,
          textHoverDarken,
          textHoverOpacity
        )};

      fill: ${appearance === 'primary' &&
        _color(
          theme.colors.text.light2,
          iconHoverLighten,
          iconHoverDarken,
          iconHoverOpacity
        )};

      ${appearance === 'primary' && primaryHoverStyles};
    }
    &:active {
      background: ${appearance === 'primary' &&
        _color(
          theme.colors.state.key,
          backgroundActiveLighten,
          backgroundActiveDarken || 0.5,
          backgroundActiveOpacity
        )};

      color: ${appearance === 'primary' &&
        _color(
          theme.colors.text.base,
          textActiveLighten,
          textActiveDarken,
          textActiveOpacity
        )};
      
      fill: ${appearance === 'primary' &&
        _color(
          theme.colors.text.base,
          iconActiveLighten,
          iconActiveDarken,
          iconActiveOpacity
        )};

      ${appearance === 'primary' && primaryActiveStyles};
    }
    ${appearance === 'primary' && primaryStyles};

    /* ----- Secondary ----- */
    /* --------------------- */
    background: ${appearance === 'secondary' &&
      _color('unset', backgroundLighten, backgroundDarken, backgroundOpacity) +
        ' !important'};
  
    border-color: ${appearance === 'secondary' && 'transparent'};
    border-style: ${appearance === 'secondary' && 'solid'};
    border-width: ${appearance === 'secondary' && '1px'};
    &:focus {
      background: ${appearance === 'secondary' && 'unset'};
      border-color: ${appearance === 'secondary' && 'transparent'};

      color: ${appearance === 'secondary' &&
        _color(
          theme.colors.state.key,
          textFocusLighten || 0.3,
          textFocusDarken,
          textFocusOpacity
        )};
         ) };

      fill: ${appearance === 'secondary' &&
        _color(
          theme.colors.state.key,
          iconFocusLighten,
          iconFocusDarken,
          iconFocusOpacity
        )};

      ${appearance === 'secondary' && secondaryFocusStyles};
    }
    &:hover {
      background: ${appearance === 'secondary' && 'unset'};

      color: ${appearance === 'secondary' &&
        _color(
          theme.colors.state.key,
          textHoverLighten || 0.3,
          textHoverDarken,
          textHoverOpacity
        )};

      fill: ${appearance === 'secondary' &&
        _color(
          theme.colors.state.key,
          iconHoverLighten || 0.3,
          iconHoverDarken,
          iconHoverOpacity
        )};

      ${appearance === 'secondary' && secondaryHoverStyles}
    }
    &:active {
      background: ${appearance === 'secondary' && 'unset'};

      color: ${appearance === 'secondary' &&
        _color(
          theme.colors.state.key,
          textActiveLighten,
          textActiveDarken || 0.4,
          textActiveOpacity
        )};

      fill: ${appearance === 'secondary' &&
        _color(
          theme.colors.state.key,
          iconActiveLighten,
          iconActiveDarken || 0.4,
          iconActiveOpacity
        )};

      ${appearance === 'secondary' && secondaryActiveStyles};
    }
    ${appearance === 'secondary' && secondaryStyles};

    /* ----- Basic ----- */
    /* ----------------- */
    color: ${appearance === 'basic' &&
      _color(
        theme.colors.text.secondary,
        textLighten,
        textDarken,
        textOpacity
      )};

    background: ${appearance === 'basic' && 'unset'};
    &:focus {
      background: ${appearance === 'basic' && 'unset'};

      color: ${appearance === 'basic' &&
        _color(
          theme.colors.text.primary,
          textFocusLighten,
          textFocusDarken,
          textFocusOpacity
        )};

      fill: ${appearance === 'basic' &&
        _color(
          theme.colors.text.light2,
          iconFocusLighten,
          iconFocusDarken,
          iconFocusOpacity
        )};

      ${appearance === 'basic' && basicFocusStyles};
    }
    &:hover {
      background: ${appearance === 'basic' && 'unset'};

      color: ${appearance === 'basic' &&
        _color(
          theme.colors.text.primary,
          textHoverLighten,
          textHoverDarken,
          textHoverOpacity
        )};

      fill: ${appearance === 'basic' &&
        _color(
          theme.colors.text.light2,
          iconHoverLighten,
          iconHoverDarken,
          iconHoverOpacity
        )};

      ${appearance === 'basic' && basicHoverStyles};
    }
    &:active {
      background: ${appearance === 'basic' && 'unset'};

      color: ${appearance === 'basic' &&
        _color(
          theme.colors.text.primary,
          textActiveLighten,
          textActiveDarken || 0.3,
          textActiveOpacity
        )};


      fill: ${appearance === 'basic' &&
        _color(
          theme.colors.text.primary,
          iconActiveLighten,
          iconActiveDarken || 0.3,
          iconActiveOpacity
        )};

      ${appearance === 'basic' && basicActiveStyles};
    }
    ${(appearance = 'basic' && basicStyles)};
    
    

    /* ----- Color ----- */
    /* -------------------- */
    &:focus {
      fill: ${iconFocusColor &&
        _color(
          iconFocusColor,
          iconFocusLighten || 0.3,
          iconFocusDarken,
          iconFocusOpacity
        )};

      color: ${textFocusColor &&
        _color(
          textFocusColor,
          textFocusLighten || 0.3,
          textFocusDarken,
          textFocusOpacity
        )};

      background: ${backgroundFocusColor &&
        _color(
          backgroundFocusColor,
          backgroundFocusLighten || 0.3,
          backgroundFocusDarken,
          backgroundFocusOpacity
        )};

    }
    &:hover {
      fill: ${iconHoverColor &&
        _color(
          iconHoverColor,
          iconHoverLighten || 0.3,
          iconHoverDarken,
          iconHoverOpacity
        )};

      color: ${textHoverColor &&
        _color(
          textHoverColor,
          textHoverLighten || 0.3,
          textHoverDarken,
          textHoverOpacity
        )};

      background: ${backgroundHoverColor &&
        _color(
          backgroundHoverColor,
          backgroundHoverLighten || 0.3,
          backgroundHoverDarken,
          backgroundHoverOpacity
        )};

    }
    &:active {
      fill: ${iconActiveColor &&
        _color(
          iconActiveColor,
          iconActiveLighten || 0.3,
          iconActiveDarken,
          iconActiveOpacity
        )};

      color: ${textActiveColor &&
        _color(
          textActiveColor,
          textActiveLighten || 0.3,
          textActiveDarken,
          textActiveOpacity
        )};
      
      background: ${backgroundActiveColor &&
        _color(
          backgroundActiveColor,
          backgroundActiveLighten || 0.3,
          backgroundActiveDarken,
          backgroundActiveOpacity
        )};
    }

    /* ----- Selected ----- */
    /* -------------------- */
    background: ${selected &&
      ((appearance === 'primary' &&
        _color(
          theme.colors.state.key,
          backgroundLighten,
          backgroundDarken || 0.2,
          backgroundOpacity
        )) ||
        (appearance === 'secondary' && 'unset') ||
        (appearance === 'success' &&
          _color(
            theme.color.state.success,
            backgroundLighten,
            backgroundDarken || 0.2,
            backgroundOpacity
          )) ||
        (appearance === 'warning' &&
          _color(
            theme.colors.state.warning1,
            backgroundLighten || 0.2,
            backgroundDarken,
            backgroundOpacity
          )) ||
        (appearance === 'danger' &&
          _color(
            theme.colors.state.error,
            backgroundLighten || 0.1,
            backgroundDarken,
            backgroundOpacity
          )) ||
        (appearance === 'basic' && 'unset') ||
        _color(
          theme.colors.ui.fill6,
          backgroundLighten || 0.2,
          backgroundDarken,
          backgroundOpacity
        ))};

    background: ${backgroundSelectedColor &&
      _color(
        backgroundSelectedColor,
        backgroundLighten || 0.2,
        backgroundDarken,
        backgroundOpacity
      )};

    color: ${selected &&
      ((appearance === ('primary' || 'success' || 'danger') &&
        _color(
          theme.colors.text.light2,
          textLighten,
          textDarken,
          textOpacity
        )) ||
        (appearance === 'warning' &&
          _color(
            theme.colors.text.dark,
            textLighten,
            textDarken,
            textOpacity
          )) ||
        (appearance === 'secondary' &&
          _color(
            theme.colors.state.key,
            textLighten || 0.2,
            textDarken,
            textOpacity
          )) ||
        _color(
          theme.colors.text.primary,
          textLighten,
          textDarken,
          textOpacity
        ))};

    border-width: ${selected && '1px'};
    border-style: ${selected && 'solid'};

    fill: ${selected &&
      _color(theme.colors.text.light2, iconLighten, iconDarken, iconOpacity) +
        '!important'};
    ${selected && selectedStyles};
  `,
  propTypes: {
    appearance: PropTypes.string,
    selected: PropTypes.bool,
    textHoverColor: PropTypes.string,
    textFocusColor: PropTypes.string,
    textActiveColor: PropTypes.string,
    textHoverLighten: PropTypes.string,
    textHoverDarken: PropTypes.string,
    textFocusLighten: PropTypes.string,
    textFocusDarken: PropTypes.string,
    textActiveDarken: PropTypes.string,
    textActiveLighten: PropTypes.string,
    iconHoverColor: PropTypes.string,
    iconFocusColor: PropTypes.string,
    iconActiveColor: PropTypes.string,
    iconHoverLighten: PropTypes.string,
    iconHoverDarken: PropTypes.string,
    iconFocusLighten: PropTypes.string,
    iconFocusDarken: PropTypes.string,
    iconActiveLighten: PropTypes.string,
    iconActiveDarken: PropTypes.string,
    backgroundHoverColor: PropTypes.string,
    backgroundFocusColor: PropTypes.string,
    backgroundActiveColor: PropTypes.string,
    backgroundHoverDarken: PropTypes.string,
    backgroundHoverLighten: PropTypes.string,
    backgroundFocusDarken: PropTypes.string,
    backgroundFocusLighten: PropTypes.string,
    backgroundActiveDarken: PropTypes.string,
    backgroundActiveLighten: PropTypes.string,
    backgroundSelectedColor: PropTypes.string,
    hoverStyles: PropTypes.string,
    focusStyles: PropTypes.string,
    activeStyles: PropTypes.string,
    dangerStyles: PropTypes.string,
    warningStyles: PropTypes.string,
    successStyles: PropTypes.string,
    selectedStyles: PropTypes.string,
    primaryStyles: PropTypes.string,
    secondaryStyles: PropTypes.string,
    basicStyles: PropTypes.string,
    buttonStyles: PropTypes.string,
    dangerActiveStyles: PropTypes.string,
    dangerFocusStyles: PropTypes.string,
    dangerHoverStyles: PropTypes.string,
    warningActiveStyles: PropTypes.string,
    warningHoverStyles: PropTypes.string,
    warningFocusStyles: PropTypes.string,
    successActiveStyles: PropTypes.string,
    successHoverStyles: PropTypes.string,
    successFocusStyles: PropTypes.string,
    primaryActiveStyles: PropTypes.string,
    primaryHoverStyles: PropTypes.string,
    primaryFocusStyles: PropTypes.string,
    secondaryActiveStyles: PropTypes.string,
    secondaryHoverStyles: PropTypes.string,
    secondaryFocusStyles: PropTypes.string,
    basicHoverStyles: PropTypes.string,
    basicActiveStyles: PropTypes.string,
    basicFocusStyles: PropTypes.string
  },
  defaultProps: {
    appearance: 'none'
  }
}

export default button
