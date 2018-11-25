import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const button = {
  props: ({
    theme,
    fit,
    appearance,
    selected,
    textHoverColor,
    textFocusColor,
    textActiveColor,
    textHoverLighten,
    textHoverDarken,
    textFocusLighten,
    textFocusDarken,
    textActiveDarken,
    textActiveLighten,
    iconHoverColor,
    iconFocusColor,
    iconActiveColor,
    iconHoverLighten,
    iconHoverDarken,
    iconFocusLighten,
    iconFocusDarken,
    iconActiveLighten,
    iconActiveDarken,
    backgroundHoverColor,
    backgroundFocusColor,
    backgroundActiveColor,
    backgroundHoverDarken,
    backgroundHoverLighten,
    backgroundFocusDarken,
    backgroundFocusLighten,
    backgroundActiveDarken,
    backgroundActiveLighten,
    backgroundSelectedColor,
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
    basicFocusStyles
  }) => css`
    /* ----- Button ----- */
    /* ------------------ */
    display: inline-flex;
    padding: 0;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    width: ${fit && '-webkit-fill-available'};
    cursor: pointer;
    user-select: none;
    font-family: ${theme.font};
    background: ${theme.colors.ui.fill5};
    color: ${theme.colors.text.primary};
    border-color: transparent;
    border-width: 1px;
    border-style: solid;
    border-radius: ${theme.borderRadius.xs};
    box-sizing: border-box;
    font-size: ${theme.sizes.xs};
    &:focus {
      border-color: ${theme.colors.state.key};
      border-width: 1px;
      border-style: solid;
      background: ${theme
    .color(theme.colors.ui.fill6)
    .lighten(0.3)
    .string()};
      color: ${theme.colors.text.light2};
      fill: ${theme.colors.text.light2};
      outline: none;
      ${focusStyles};
    }
    &:hover {
      color: ${theme.colors.text.light1};
      fill: ${theme.colors.text.light1};
      background: ${theme
    .color(theme.colors.ui.fill6)
    .lighten(0.3)
    .string()};
    ${hoverStyles};
    }
    &:active {
      color: ${theme
    .color(theme.colors.text.primary)
    .darken(0.2)
    .string()};
      fill: ${theme
    .color(theme.colors.text.primary)
    .darken(0.2)
    .string()};
      background: ${theme
    .color(theme.colors.ui.fill6)
    .darken(0.2)
    .string()};
    ${activeStyles};
    }
    &::selection {
      color: ${theme.colors.text.base};
      background: rgba(204, 204, 203, 0.1);
    }
    ${buttonStyles}

    /* ----- Success ----- */
    /* -------------------- */
    color: ${appearance === 'success' && theme.colors.text.light2};
    fill: ${appearance === 'success' && theme.colors.text.light2};
    background: ${appearance === 'success' && theme.colors.state.success};
    &:focus {
      background: ${appearance === 'success' &&
        theme
          .color(theme.colors.state.success)
          .darken(0.2)
          .string()};
      color: ${appearance === 'success' && theme.colors.text.light2};
      fill: ${appearance === 'success' && theme.colors.text.light2};
      border-color: ${appearance === 'success' && theme.colors.text.light2};
      border-width: ${appearance === 'success' && '1px'};
      border-style: ${appearance === 'success' && 'solid'};
      ${appearance === 'success' && successFocusStyles};
    }
    &:hover {
      background: ${appearance === 'success' &&
        theme
          .color(theme.colors.state.success)
          .darken(0.2)
          .string()};
      color: ${appearance === 'success' && theme.colors.text.light2};
      fill: ${appearance === 'success' && theme.colors.text.light2};
      ${appearance === 'success' && successHoverStyles};
    }
    &:active {
      background: ${appearance === 'success' &&
        theme
          .color(theme.colors.state.success)
          .darken(0.4)
          .string()};
      color: ${appearance === 'success' && theme.colors.text.base};
      fill: ${appearance === 'success' && theme.colors.text.base};
      ${appearance === 'success' && successActiveStyles};
    }
    ${appearance === 'success' && successStyles};

    /* ----- Warning ----- */
    /* ------------------- */
    color: ${appearance === 'warning' && theme.colors.text.dark};
    fill: ${appearance === 'warning' && theme.colors.text.dark};
    background: ${appearance === 'warning' && theme.colors.state.warning1};
    &:focus {
      background: ${appearance === 'warning' &&
        theme
          .color(theme.colors.state.warning1)
          .lighten(0.2)
          .string()};
      color: ${appearance === 'warning' && theme.colors.text.dark};
      fill: ${appearance === 'warning' && theme.colors.text.dark};
      border-color: ${appearance === 'warning' && theme.colors.text.light2};
      border-width: ${appearance === 'warning' && '1px'};
      border-style: ${appearance === 'warning' && 'solid'};
      ${appearance === 'warning' && warningFocusStyles};
    }
    &:hover {
      background: ${appearance === 'warning' &&
        theme
          .color(theme.colors.state.warning1)
          .lighten(0.2)
          .string()};
      color: ${appearance === 'warning' && theme.colors.text.dark};
      fill: ${appearance === 'warning' && theme.colors.text.dark};
      ${appearance === 'warning' && warningHoverStyles};
    }
    &:active {
      background: ${appearance === 'warning' &&
        theme
          .color(theme.colors.state.warning1)
          .darken(0.4)
          .string()};
      color: ${appearance === 'warning' && theme.colors.text.dark};
      fill: ${appearance === 'warning' && theme.colors.text.dark};
      ${appearance === 'warning' && warningActiveStyles};
    }
    ${appearance === 'warning' && warningStyles}

    /* ----- Danger ----- */
    /* ------------------ */
    color: ${appearance === 'danger' && theme.colors.text.light1};
    fill: ${appearance === 'danger' && theme.colors.text.light1};
    background: ${appearance === 'danger' && theme.colors.state.error};
    &:focus {
      background: ${appearance === 'danger' &&
        theme
          .color(theme.colors.state.error)
          .lighten(0.2)
          .string()};
      color: ${appearance === 'danger' && theme.colors.text.light2};
      fill: ${appearance === 'danger' && theme.colors.text.light2};
      border-color: ${appearance === 'danger' && theme.colors.text.light2};
      border-width: ${appearance === 'danger' && '1px'};
      border-style: ${appearance === 'danger' && 'solid'};
      ${appearance === 'danger' && dangerFocusStyles};
    }
    &:hover {
      background: ${appearance === 'danger' &&
        theme
          .color(theme.colors.state.error)
          .lighten(0.2)
          .string()};
      color: ${appearance === 'danger' && theme.colors.text.light2};
      fill: ${appearance === 'danger' && theme.colors.text.light2};
      ${appearance === 'danger' && dangerHoverStyles}
    }
    &:active {
      background: ${appearance === 'danger' &&
        theme
          .color(theme.colors.state.error)
          .darken(0.4)
          .string()};
      color: ${appearance === 'danger' && theme.colors.text.base};
      fill: ${appearance === 'danger' && theme.colors.text.base};
      ${appearance === 'danger' && dangerActiveStyles};
    }
    ${appearance === 'danger' && dangerStyles};

    /* ----- Primary ----- */
    /* ------------------- */
    background: ${appearance === 'primary' && theme.colors.state.key};
    color: ${appearance === 'primary' && theme.colors.text.light2};
    &:focus {
      background: ${appearance === 'primary' &&
        theme
          .color(theme.colors.state.key)
          .darken(0.1)
          .string()};
      color: ${appearance === 'primary' && theme.colors.text.light2};
      fill: ${appearance === 'primary' && theme.colors.text.light2};
      border-color: ${appearance === 'primary' && theme.colors.state.warning2};
      border-width: ${appearance === 'primary' && '1px'};
      border-style: ${appearance === 'primary' && 'solid'};
      ${appearance === 'focus' && primaryFocusStyles};
    }
    &:hover {
      background: ${appearance === 'primary' &&
        theme
          .color(theme.colors.state.key)
          .darken(0.2)
          .string()};
      color: ${appearance === 'primary' && theme.colors.text.light2};
      fill: ${appearance === 'primary' && theme.colors.text.light2};
      ${appearance === 'primary' && primaryHoverStyles};
    }
    &:active {
      background: ${appearance === 'primary' &&
        theme
          .color(theme.colors.state.key)
          .darken(0.5)
          .string()};
      color: ${appearance === 'primary' && theme.colors.text.base};
      fill: ${appearance === 'primary' && theme.colors.text.base};
      ${appearance === 'primary' && primaryActiveStyles};
    }
    ${appearance === 'primary' && primaryStyles};

    /* ----- Secondary ----- */
    /* --------------------- */
    background: ${appearance === 'secondary' && 'unset'};
    color: ${appearance === 'secondary' && theme.colors.state.key};
    border-color: ${appearance === 'secondary' && 'transparent'};
    border-style: ${appearance === 'secondary' && 'solid'};
    border-width: ${appearance === 'secondary' && '1px'};
    &:focus {
      background: ${appearance === 'secondary' && 'unset'};
      border-color: ${appearance === 'secondary' && 'transparent'};
      color: ${appearance === 'secondary' &&
        theme
          .color(theme.colors.state.key)
          .lighten(0.3)
          .string()};
      fill: ${appearance === 'secondary' && theme.colors.state.key};
      ${appearance === 'secondary' && secondaryFocusStyles};
    }
    &:hover {
      background: ${appearance === 'secondary' && 'unset'};
      color: ${appearance === 'secondary' &&
        theme
          .color(theme.colors.state.key)
          .lighten(0.3)
          .string()};
      fill: ${appearance === 'secondary' &&
        theme
          .color(theme.colors.state.key)
          .lighten(0.3)
          .string()};
      ${appearance === 'secondary' && secondaryHoverStyles}
    }
    &:active {
      background: ${appearance === 'secondary' && 'unset'};
      color: ${appearance === 'secondary' &&
        theme
          .color(theme.colors.state.key)
          .darken(0.4)
          .string()};
      fill: ${appearance === 'secondary' &&
        theme
          .color(theme.colors.state.key)
          .darken(0.4)
          .string()};
      ${appearance === 'secondary' && secondaryActiveStyles};
    }
    ${appearance === 'secondary' && secondaryStyles};

    /* ----- Basic ----- */
    /* ----------------- */
    color: ${appearance === 'basic' && theme.colors.text.secondary};
    background: ${appearance === 'basic' && 'unset'};
    &:focus {
      background: ${appearance === 'basic' && 'unset'};
      color: ${appearance === 'basic' && theme.colors.text.primary};
      fill: ${appearance === 'basic' && theme.colors.text.light2};
      ${appearance === 'basic' && basicFocusStyles};
    }
    &:hover {
      background: ${appearance === 'basic' && 'unset'};
      color: ${appearance === 'basic' && theme.colors.text.primary};
      fill: ${appearance === 'basic' && theme.colors.text.light2};
      ${appearance === 'basic' && basicHoverStyles};
    }
    &:active {
      background: ${appearance === 'basic' && 'unset'};
      color: ${appearance === 'basic' &&
        theme
          .color(theme.colors.text.primary)
          .darken(0.3)
          .string()};
      fill: ${appearance === 'basic' &&
        theme
          .color(theme.colors.text.primary)
          .darken(0.3)
          .string()};
      ${appearance === 'basic' && basicActiveStyles};
    }
    ${(appearance = 'basic' && basicStyles)};
    
    

    /* ----- Color ----- */
    /* -------------------- */
    &:focus {
      fill: ${iconFocusColor &&
        theme
          .color(
            theme.colors.tags[iconFocusColor] ||
              theme.colors.state[iconFocusColor] ||
              theme.colors.ui[iconFocusColor] ||
              iconFocusColor
          )
          .lighten(0.3)
          .string()};
      fill: ${iconFocusColor &&
        iconFocusLighten &&
        theme
          .color(
            theme.colors.tags[iconFocusColor] ||
              theme.colors.state[iconFocusColor] ||
              theme.colors.ui[iconFocusColor] ||
              iconFocusColor
          )
          .lighten(iconFocusLighten)
          .string()};
      fill: ${iconFocusColor &&
        iconFocusDarken &&
        theme
          .color(
            theme.colors.tags[iconFocusColor] ||
              theme.colors.state[iconFocusColor] ||
              theme.colors.ui[iconFocusColor] ||
              iconFocusColor
          )
          .darken(iconFocusDarken)
          .string()};


      color: ${textFocusColor &&
        theme
          .color(
            theme.colors.tags[textFocusColor] ||
              theme.colors.state[textFocusColor] ||
              theme.colors.ui[textFocusColor] ||
              textFocusColor
          )
          .lighten(0.3)
          .string()};
      color: ${textFocusColor &&
        textFocusLighten &&
        theme
          .color(
            theme.colors.tags[textFocusColor] ||
              theme.colors.state[textFocusColor] ||
              theme.colors.ui[textFocusColor] ||
              textFocusColor
          )
          .lighten(textFocusLighten)
          .string()};
      color: ${textFocusColor &&
        textFocusDarken &&
        theme
          .color(
            theme.colors.tags[textFocusColor] ||
              theme.colors.state[textFocusColor] ||
              theme.colors.ui[textFocusColor] ||
              textFocusColor
          )
          .darken(textFocusDarken)
          .string()};

      background: ${backgroundFocusColor &&
        theme
          .color(
            theme.colors.tags[backgroundFocusColor] ||
              theme.colors.state[backgroundFocusColor] ||
              theme.colors.ui[backgroundFocusColor] ||
              backgroundFocusColor
          )
          .lighten(0.3)
          .string()};
      background: ${backgroundFocusColor &&
        backgroundFocusLighten &&
        theme
          .color(
            theme.colors.tags[backgroundFocusColor] ||
              theme.colors.state[backgroundFocusColor] ||
              theme.colors.ui[backgroundFocusColor] ||
              backgroundFocusColor
          )
          .lighten(backgroundFocusLighten)
          .string()};
      background: ${backgroundFocusColor &&
        backgroundFocusDarken &&
        theme
          .color(
            theme.colors.tags[backgroundFocusColor] ||
              theme.colors.state[backgroundFocusColor] ||
              theme.colors.ui[backgroundFocusColor] ||
              backgroundFocusColor
          )
          .darken(backgroundFocusDarken)
          .string()};
    }
    &:hover {
      fill: ${iconHoverColor &&
        theme
          .color(
            theme.colors.tags[iconHoverColor] ||
              theme.colors.state[iconHoverColor] ||
              theme.colors.ui[iconHoverColor] ||
              iconHoverColor
          )
          .lighten(0.3)
          .string()};
      fill: ${iconHoverColor &&
        iconHoverLighten &&
        theme
          .color(
            theme.colors.tags[iconHoverColor] ||
              theme.colors.state[iconHoverColor] ||
              theme.colors.ui[iconHoverColor] ||
              iconHoverColor
          )
          .lighten(iconHoverLighten)
          .string()};
      fill: ${iconHoverColor &&
        iconHoverDarken &&
        theme
          .color(
            theme.colors.tags[iconHoverColor] ||
              theme.colors.state[iconHoverColor] ||
              theme.colors.ui[iconHoverColor] ||
              iconHoverColor
          )
          .darken(iconHoverDarken)
          .string()};

      color: ${textHoverColor &&
        theme
          .color(
            theme.colors.tags[textHoverColor] ||
              theme.colors.state[textHoverColor] ||
              theme.colors.ui[textHoverColor] ||
              textHoverColor
          )
          .lighten(0.3)
          .string()};
      color: ${textHoverColor &&
        textHoverLighten &&
        theme
          .color(
            theme.colors.tags[textHoverColor] ||
              theme.colors.state[textHoverColor] ||
              theme.colors.ui[textHoverColor] ||
              textHoverColor
          )
          .lighten(textHoverLighten)
          .string()};
      color: ${textHoverColor &&
        textHoverDarken &&
        theme
          .color(
            theme.colors.tags[textHoverColor] ||
              theme.colors.state[textHoverColor] ||
              theme.colors.ui[textHoverColor] ||
              textHoverColor
          )
          .darken(textHoverDarken)
          .string()};

      background: ${backgroundHoverColor &&
        theme
          .color(
            theme.colors.tags[backgroundHoverColor] ||
              theme.colors.state[backgroundHoverColor] ||
              theme.colors.ui[backgroundHoverColor] ||
              backgroundHoverColor
          )
          .lighten(0.3)
          .string()};
      background: ${backgroundHoverColor &&
        backgroundHoverLighten &&
        theme
          .color(
            theme.colors.tags[backgroundHoverColor] ||
              theme.colors.state[backgroundHoverColor] ||
              theme.colors.ui[backgroundHoverColor] ||
              backgroundHoverColor
          )
          .lighten(backgroundHoverLighten)
          .string()};
      background: ${backgroundHoverColor &&
        backgroundHoverDarken &&
        theme
          .color(
            theme.colors.tags[backgroundHoverColor] ||
              theme.colors.state[backgroundHoverColor] ||
              theme.colors.ui[backgroundHoverColor] ||
              backgroundHoverColor
          )
          .darken(backgroundHoverDarken)
          .string()};
    }
    &:active {
      fill: ${iconActiveColor &&
        theme
          .color(
            theme.colors.tags[iconActiveColor] ||
              theme.colors.state[iconActiveColor] ||
              theme.colors.ui[iconActiveColor] ||
              iconActiveColor
          )
          .lighten(0.3)
          .string()};
      fill: ${iconActiveColor &&
        iconActiveLighten &&
        theme
          .color(
            theme.colors.tags[iconActiveColor] ||
              theme.colors.state[iconActiveColor] ||
              theme.colors.ui[iconActiveColor] ||
              iconActiveColor
          )
          .lighten(iconActiveLighten)
          .string()};
      fill: ${iconActiveColor &&
        iconActiveDarken &&
        theme
          .color(
            theme.colors.tags[iconActiveColor] ||
              theme.colors.state[iconActiveColor] ||
              theme.colors.ui[iconActiveColor] ||
              iconActiveColor
          )
          .darken(iconActiveDarken)
          .string()};

      color: ${textActiveColor &&
        theme
          .color(
            theme.colors.tags[textActiveColor] ||
              theme.colors.state[textActiveColor] ||
              theme.colors.ui[textActiveColor] ||
              textActiveColor
          )
          .lighten(0.3)
          .string()};
      color: ${textActiveColor &&
        textActiveLighten &&
        theme
          .color(
            theme.colors.tags[textActiveColor] ||
              theme.colors.state[textActiveColor] ||
              theme.colors.ui[textActiveColor] ||
              textActiveColor
          )
          .lighten(textActiveLighten)
          .string()};
      color: ${textActiveColor &&
        textActiveDarken &&
        theme
          .color(
            theme.colors.tags[textActiveColor] ||
              theme.colors.state[textActiveColor] ||
              theme.colors.ui[textActiveColor] ||
              textActiveColor
          )
          .darken(textActiveDarken)
          .string()};
      
      background: ${backgroundActiveColor &&
        theme
          .color(
            theme.colors.tags[backgroundActiveColor] ||
              theme.colors.state[backgroundActiveColor] ||
              theme.colors.ui[backgroundActiveColor] ||
              backgroundActiveColor
          )
          .lighten(0.3)
          .string()};
      background: ${backgroundActiveColor &&
        backgroundActiveLighten &&
        theme
          .color(
            theme.colors.tags[backgroundActiveColor] ||
              theme.colors.state[backgroundActiveColor] ||
              theme.colors.ui[backgroundActiveColor] ||
              backgroundActiveColor
          )
          .lighten(backgroundActiveLighten)
          .string()};
      background: ${backgroundActiveColor &&
        backgroundActiveDarken &&
        theme
          .color(
            theme.colors.tags[backgroundActiveColor] ||
              theme.colors.state[backgroundActiveColor] ||
              theme.colors.ui[backgroundActiveColor] ||
              backgroundActiveColor
          )
          .darken(backgroundActiveDarken)
          .string()};
    }

    /* ----- Selected ----- */
    /* -------------------- */
    background: ${selected &&
      ((appearance === 'primary' &&
        theme
          .color(theme.colors.state.key)
          .darken(0.2)
          .string()) ||
        (appearance === 'secondary' && 'unset') ||
        (appearance === 'success' &&
          theme
            .color(theme.colors.state.success)
            .darken(0.2)
            .string()) ||
        (appearance === 'warning' &&
          theme
            .color(theme.colors.state.warning1)
            .lighten(0.2)
            .string()) ||
        (appearance === 'danger' &&
          theme
            .color(theme.colors.state.error)
            .lighten(0.1)
            .string()) ||
        (appearance === 'basic' && 'unset') ||
        theme
          .color(theme.colors.ui.fill6)
          .lighten(0.2)
          .string())};
    background: ${backgroundSelectedColor &&
      theme
        .color(
          theme.colors.tags[backgroundSelectedColor] ||
            theme.colors.state[backgroundSelectedColor] ||
            theme.colors.ui[backgroundSelectedColor] ||
            backgroundSelectedColor
        )
        .lighten(0.2)
        .string()};
    color: ${selected &&
      (((appearance === 'primary' ||
        appearance === 'success' ||
        appearance === 'danger') &&
        theme.colors.text.light2) ||
        (appearance === 'warning' && theme.colors.text.dark) ||
        (appearance === 'secondary' &&
          theme
            .color(theme.colors.state.key)
            .lighten(0.2)
            .string()) ||
        theme.colors.text.primary)};
    border-width: ${selected && '1px'};
    border-style: ${selected && 'solid'};
    fill: ${selected && theme.colors.text.light2 + '!important'};
    ${selected && selectedStyles};
  `,
  propTypes: {
    hoverColor: PropTypes.string,
    focusColor: PropTypes.string,
    activeColor: PropTypes.string,
    appearance: PropTypes.string,
    loader: PropTypes.string,
    icon: PropTypes.string,
    href: PropTypes.string,
    selected: PropTypes.bool,
    selectedColor: PropTypes.string,
    focusLighten: PropTypes.string,
    focusDarken: PropTypes.string,
    hoverLighten: PropTypes.string,
    hoverDarken: PropTypes.string,
    activeLighten: PropTypes.string,
    activeDarken: PropTypes.string
  }
}

export default button
