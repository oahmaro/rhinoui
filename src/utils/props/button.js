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

    /* ----- State Props ----- */
    hover = {},
    focus = {},
    active = {}
  }) => css`
    label: button;
    /* ----- Button ----- */
    /* ------------------ */
    display: inline-flex;
    padding: 0;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    color: ${theme._color('base', textLighten, textDarken, textOpacity)};

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
    
    background: ${theme._color(
    'fill4',
    backgroundLighten,
    backgroundDarken,
    backgroundOpacity
  )};
    fill: ${theme._color('primary', iconLighten, iconDarken, iconOpacity)};

    box-sizing: border-box;
    font-size: ${theme.sizes.xs};
    &:focus {
      border-color: ${theme._color(
    focus.borderColor || 'key',
    focus.borderLighten,
    focus.borderDarken,
    focus.borderOpacity
  )};
      border-width: 1px;
      border-style: solid;

      background: ${theme._color(
    focus.backgroundColor || 'fill5',
    focus.backgroundLighten,
    focus.backgroundDarken,
    focus.backgroundOpacity
  )};

      color: ${theme._color(
    focus.textColor || 'primary',
    focus.textLighten,
    focus.textDarken,
    focus.textOpacity
  )};

      fill: ${theme._color(
    focus.iconColor || 'primary',
    focus.iconLighten,
    focus.iconDarken,
    focus.iconOpacity
  )};
      outline: none;
      ${focusStyles};
    }
    &:hover {
      border-color: ${hover.boderColor &&
        theme._color(
          hover.borderColor,
          hover.borderLighten,
          hover.borderDarken,
          hover.borderOpacity
        )};

      color: ${theme._color(
    hover.textColor || 'primary',
    hover.textLighten,
    hover.textDarken,
    hover.textOpacity
  )};
      fill: ${theme._color(
    hover.iconColor || 'primary',
    hover.iconLighten,
    hover.iconDarken,
    hover.iconOpacity
  )};

      background: ${theme._color(
    hover.backgroundColor || 'fill5',
    hover.backgroundLighten,
    hover.backgroundDarken,
    hover.backgroundOpacity
  )};

    ${hoverStyles};
    }
    &:active {
      border-color: ${theme._color(
    active.borderColor || 'key',
    active.borderLighten,
    active.borderDarken,
    active.borderOpacity
  )};

      color: ${theme._color(
    active.textColor || 'primary',
    active.textLighten,
    active.textDarken,
    active.textOpacity
  )};

      fill: ${theme._color(
    active.iconColor || 'primary',
    active.iconLighten,
    active.iconDarken,
    active.iconOpacity
  )};

      background: ${theme._color(
    active.backgroundColor || 'fill5',
    active.backgroundLighten,
    active.backgroundDarken,
    active.backgroundOpacity
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
      theme._color(
        theme.colors.text.light2,
        textLighten,
        textDarken,
        textOpacity
      ) + ' !important'};

    fill: ${appearance === 'success' &&
      theme._color(
        theme.colors.text.light2,
        iconLighten,
        iconDarken,
        iconOpacity
      ) + ' !important'};


    background: ${appearance === 'success' &&
      theme._color(
        theme.colors.state.success,
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};

    &:focus {
      background: ${appearance === 'success' &&
        theme._color(
          theme.colors.state.success,
          focus.backgroundLighten,
          focus.backgroundDarken,
          focus.backgroundOpacity
        )};

      color: ${appearance === 'success' &&
        theme._color(
          'light2',
          focus.textLighten,
          focus.textDarken,
          focus.textOpacity
        )};

      fill: ${appearance === 'success' &&
        theme._color(
          'light2',
          focus.iconLighten,
          focus.iconDarken,
          focus.iconOpacity
        )} ; 

      border-color: ${appearance === 'success' &&
        theme._color(
          theme.colors.text.light2,
          focus.borderLighten,
          focus.borderDarken,
          focus.borderOpacity
        )};

      border-width: ${appearance === 'success' && '1px'};
      border-style: ${appearance === 'success' && 'solid'};
      ${appearance === 'success' && successFocusStyles};
    }
    &:hover {
      background: ${appearance === 'success' &&
        theme._color(
          'success',
          hover.backgroundLighten,
          hover.backgroundDarken,
          hover.backgroundOpacity
        )};

      color: ${appearance === 'success' &&
        theme._color(
          'light2',
          hover.textLighten,
          hover.textDarken,
          hover.textOpacity
        )};

      fill: ${appearance === 'success' &&
        theme._color(
          theme.colors.text.light2,
          hover.iconLighten,
          hover.iconDarken,
          hover.iconOpacity
        )};

      ${appearance === 'success' && successHoverStyles};
    }
    &:active {
      background: ${appearance === 'success' &&
        theme._color(
          'success',
          active.backgroundLighten,
          active.backgroundDarken,
          active.backgroundOpacity
        )};

      color: ${appearance === 'success' &&
        theme._color(
          'base',
          active.textLighten,
          active.textDarken,
          active.textOpacity
        )};

      fill: ${appearance === 'success' &&
        theme._color(
          'base',
          active.iconLighten,
          active.iconDarken,
          active.iconOpacity
        )};

      ${appearance === 'success' && successActiveStyles};
    }
    ${appearance === 'success' && successStyles};

    /* ----- Warning ----- */
    /* ------------------- */
    color: ${appearance === 'warning' &&
      theme._color('dark', textLighten, textDarken, textOpacity)};

    fill: ${appearance === 'warning' &&
      theme._color('dark', iconLighten, iconDarken, iconOpacity)};

    background: ${appearance === 'warning' &&
      theme._color(
        'warning1',
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};
    &:focus {
      background: ${appearance === 'warning' &&
        theme._color(
          'warning1',
          focus.backgroundLighten,
          focus.backgroundDarken,
          focus.backgroundOpacity
        )};

      color: ${appearance === 'warning' &&
        theme._color(
          'dark',
          focus.textLighten,
          focus.textDarken,
          focus.textOpacity
        )};

      fill: ${appearance === 'warning' &&
        theme._color(
          'dark',
          focus.iconLighten,
          focus.iconDarken,
          focus.iconOpacity
        )};

      border-color: ${appearance === 'warning' &&
        theme._color(
          'light2',
          focus.borderLighten,
          focus.borderDarken,
          focus.borderOpacity
        )};

      border-width: ${appearance === 'warning' && '1px'};
      border-style: ${appearance === 'warning' && 'solid'};
      ${appearance === 'warning' && warningFocusStyles};
    }
    &:hover {
      background: ${appearance === 'warning' &&
        theme._color(
          'warning1',
          hover.backgroundLighten,
          hover.backgroundDarken,
          hover.backgroundOpacity
        )};

      color: ${appearance === 'warning' &&
        theme._color(
          'warning1',
          hover.textLighten,
          hover.textDarken,
          hover.textOpacity
        )};
      
      fill: ${appearance === 'warning' &&
        theme._color(
          'dark',
          hover.iconLighten,
          hover.iconDarken,
          hover.iconOpacity
        )};

      ${appearance === 'warning' && warningHoverStyles};
    }
    &:active {
      background: ${appearance === 'warning' &&
        theme._color(
          'warning1',
          active.backgroundLighten,
          active.backgroundDarken,
          active.backgroundOpacity
        )};

      color: ${appearance === 'warning' &&
        theme._color(
          'dark',
          active.textLighten,
          active.textDarken,
          active.textOpacity
        )};

      fill: ${appearance === 'warning' &&
        theme._color(
          'dark',
          active.iconLighten,
          active.iconDarken,
          active.iconOpacity
        )};

      ${appearance === 'warning' && warningActiveStyles};
    }
    ${appearance === 'warning' && warningStyles}

    /* ----- Danger ----- */
    /* ------------------ */

    color: ${appearance === 'danger' &&
      theme._color('light1', textLighten, textDarken, textOpacity)};


    fill: ${appearance === 'danger' &&
      theme._color('light1', iconLighten, iconDarken, iconOpacity)};

    background: ${appearance === 'danger' &&
      theme._color(
        'error',
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};

    &:focus {
      background: ${appearance === 'danger' &&
        theme._color(
          'error',
          focus.backgroundLighten,
          focus.backgroundDarken,
          focus.backgroundOpacity
        )};

      color: ${appearance === 'danger' &&
        theme._color(
          'light1',
          focus.textLighten,
          focus.textDarken,
          focus.textOpacity
        )};

      fill: ${appearance === 'danger' &&
        theme._color(
          'light1',
          focus.iconLighten,
          focus.iconDarken,
          focus.iconOpacity
        )};

      border-color: ${appearance === 'danger' &&
        theme._color(
          'light1',
          focus.borderLighten,
          focus.borderDarken,
          focus.borderOpacity
        )};

      border-width: ${appearance === 'danger' && '1px'};
      border-style: ${appearance === 'danger' && 'solid'};
      ${appearance === 'danger' && dangerFocusStyles};
    }
    &:hover {
      background: ${appearance === 'danger' &&
        theme._color(
          'error',
          hover.backgroundLighten,
          hover.backgroundDarken,
          hover.backgroundOpacity
        )};

      color: ${appearance === 'danger' &&
        theme._color(
          'light1',
          hover.textLighten,
          hover.textDarken,
          hover.textOpacity
        )};

      fill: ${appearance === 'danger' &&
        theme._color(
          'light1',
          hover.iconLighten,
          hover.iconDarken,
          hover.iconOpacity
        )};
      ${appearance === 'danger' && dangerHoverStyles}
    }
    &:active {
      background: ${appearance === 'danger' &&
        theme._color(
          'error',
          active.backgroundLighten,
          active.backgroundDarken,
          active.backgroundOpacity
        )};

      color: ${appearance === 'danger' &&
        theme._color(
          'primary',
          active.textLighten,
          active.textDarken,
          active.textOpacity
        )};

      fill: ${appearance === 'danger' &&
        theme._color(
          'primary',
          active.iconLighten,
          active.iconDarken,
          active.iconOpacity
        )};

      ${appearance === 'danger' && dangerActiveStyles};
    }
    ${appearance === 'danger' && dangerStyles};

    /* ----- Primary ----- */
    /* ------------------- */
    background: ${appearance === 'primary' &&
      theme._color(
        'key',
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};

    color: ${appearance === 'primary' &&
      theme._color('light2', textLighten, textDarken, textOpacity)};

    fill: ${appearance === 'primary' &&
      theme._color('light2', iconLighten, iconDarken, iconOpacity)};

    &:focus {
      background: ${appearance === 'primary' &&
        theme._color(
          'key',
          focus.backgroundLighten,
          focus.backgroundDarken,
          focus.backgroundOpacity
        )};

      color: ${appearance === 'primary' &&
        theme._color(
          'white',
          focus.textLighten,
          focus.textDarken,
          focus.textOpacity
        )};

      fill: ${appearance === 'primary' &&
        theme._color(
          'white',
          focus.iconLighten,
          focus.iconDarken,
          focus.iconOpacity
        )};

      border-color: ${appearance === 'primary' &&
        theme._color(
          'warning2',
          focus.borderLighten,
          focus.borderDarken,
          focus.borderOpacity
        )};

      border-width: ${appearance === 'primary' && '1px'};
      border-style: ${appearance === 'primary' && 'solid'};
      ${appearance === 'focus' && primaryFocusStyles};
    }
    &:hover {
      background: ${appearance === 'primary' &&
        theme._color(
          'key',
          hover.backgroundLighten,
          hover.backgroundDarken,
          hover.backgroundOpacity
        )};

      color: ${appearance === 'primary' &&
        theme._color(
          'white',
          hover.textLighten,
          hover.textDarken,
          hover.textOpacity
        )};

      fill: ${appearance === 'primary' &&
        theme._color(
          'white',
          hover.iconLighten,
          hover.iconDarken,
          hover.iconOpacity
        )};

      ${appearance === 'primary' && primaryHoverStyles};
    }
    &:active {
      background: ${appearance === 'primary' &&
        theme._color(
          'key',
          active.backgroundLighten,
          active.backgroundDarken,
          active.backgroundOpacity
        )};

      color: ${appearance === 'primary' &&
        theme._color(
          'white',
          active.textLighten,
          active.textDarken,
          active.textOpacity
        )};
      
      fill: ${appearance === 'primary' &&
        theme._color(
          'white',
          active.iconLighten,
          active.iconDarken,
          active.iconOpacity
        )};

      ${appearance === 'primary' && primaryActiveStyles};
    }
    ${appearance === 'primary' && primaryStyles};

    /* ----- Secondary ----- */
    /* --------------------- */
    color: ${appearance === 'secondary' &&
      theme._color('key', textLighten, textDarken, textOpacity)};
    background: ${appearance === 'secondary' && 'unset'};
  
    border-color: ${appearance === 'secondary' && 'transparent'};
    border-style: ${appearance === 'secondary' && 'solid'};
    border-width: ${appearance === 'secondary' && '1px'};
    &:focus {
      background: ${appearance === 'secondary' && 'unset'};
      border-color: ${appearance === 'secondary' &&
        theme._color(
          'disabled',
          focus.borderLighten,
          focus.borderDarken,
          focus.borderOpacity
        )};

      color: ${appearance === 'secondary' &&
        theme._color(
          'key',
          focus.textLighten,
          focus.textDarken,
          focus.textOpacity
        )};
         ) };

      fill: ${appearance === 'secondary' &&
        theme._color(
          'key',
          focus.iconLighten,
          focus.iconDarken,
          focus.iconOpacity
        )};

      ${appearance === 'secondary' && secondaryFocusStyles};
    }
    &:hover {
      background: ${appearance === 'secondary' && 'unset'};

      color: ${appearance === 'secondary' &&
        theme._color(
          'key',
          hover.textLighten,
          hover.textDarken,
          hover.textOpacity
        )};

      fill: ${appearance === 'secondary' &&
        theme._color(
          'key',
          hover.iconLighten,
          hover.iconDarken,
          hover.iconOpacity
        )};

      ${appearance === 'secondary' && secondaryHoverStyles}
    }
    &:active {
      background: ${appearance === 'secondary' && 'unset'};

      color: ${appearance === 'secondary' &&
        theme._color(
          'key',
          active.textLighten,
          active.textDarken,
          active.textOpacity
        )};

      fill: ${appearance === 'secondary' &&
        theme._color(
          'key',
          active.iconLighten,
          active.iconDarken,
          active.iconOpacity
        )};

      ${appearance === 'secondary' && secondaryActiveStyles};
    }
    ${appearance === 'secondary' && secondaryStyles};

    /* ----- Basic ----- */
    /* ----------------- */
    color: ${appearance === 'basic' &&
      theme._color('secondary', textLighten, textDarken, textOpacity)};

    background: ${appearance === 'basic' && 'unset'};

    fill: ${appearance === 'basic' &&
      theme._color('secondary', textLighten, textDarken, textOpacity)};
      
    &:focus {
      background: ${appearance === 'basic' && 'unset'};

      color: ${appearance === 'basic' &&
        theme._color(
          'secondary',
          focus.textLighten,
          focus.textDarken,
          focus.textOpacity
        )};

      fill: ${appearance === 'basic' &&
        theme._color(
          'secondary',
          focus.iconLighten,
          focus.iconDarken,
          focus.iconOpacity
        )};

      ${appearance === 'basic' && basicFocusStyles};
    }
    &:hover {
      background: ${appearance === 'basic' &&
        theme._color(
          hover.backgroundColor || 'unset',
          hover.backgroundLighten,
          hover.backgroundDarken,
          hover.backgroundOpacity
        )};

      color: ${appearance === 'basic' &&
        theme._color(
          hover.textColor || 'secondary',
          hover.textLighten,
          hover.textDarken,
          hover.textOpacity
        )};

      fill: ${appearance === 'basic' &&
        theme._color(
          hover.iconColor || 'secondary',
          hover.iconLighten,
          hover.iconDarken,
          hover.iconOpacity
        )};

      ${appearance === 'basic' && basicHoverStyles};
    }
    &:active {
      background: ${appearance === 'basic' && 'unset'};

      color: ${appearance === 'basic' &&
        theme._color(
          'secondary',
          active.textLighten,
          active.textDarken,
          active.textOpacity
        )};


      fill: ${appearance === 'basic' &&
        theme._color(
          'secondary',
          active.iconLighten,
          active.iconDarken,
          active.iconOpacity
        )};

      ${appearance === 'basic' && basicActiveStyles};
    }
    ${(appearance = 'basic' && basicStyles)};
    
    /* ----- Selected ----- */
    /* -------------------- */
    background: ${selected &&
      ((appearance === 'primary' &&
        theme._color(
          theme.colors.state.key,
          backgroundLighten,
          backgroundDarken,
          backgroundOpacity
        )) ||
        (appearance === 'secondary' && 'unset') ||
        (appearance === 'success' &&
          theme._color(
            theme.color.state.success,
            backgroundLighten,
            backgroundDarken,
            backgroundOpacity
          )) ||
        (appearance === 'warning' &&
          theme._color(
            theme.colors.state.warning1,
            backgroundLighten,
            backgroundDarken,
            backgroundOpacity
          )) ||
        (appearance === 'danger' &&
          theme._color(
            theme.colors.state.error,
            backgroundLighten,
            backgroundDarken,
            backgroundOpacity
          )) ||
        (appearance === 'basic' && 'unset') ||
        theme._color(
          theme.colors.ui.fill6,
          backgroundLighten,
          backgroundDarken,
          backgroundOpacity
        ))};

    background: ${backgroundSelectedColor &&
      theme._color(
        backgroundSelectedColor,
        backgroundLighten,
        backgroundDarken,
        backgroundOpacity
      )};

    color: ${selected &&
      ((appearance === ('primary' || 'success' || 'danger') &&
        theme._color(
          theme.colors.text.light2,
          textLighten,
          textDarken,
          textOpacity
        )) ||
        (appearance === 'warning' &&
          theme._color(
            theme.colors.text.dark,
            textLighten,
            textDarken,
            textOpacity
          )) ||
        (appearance === 'secondary' &&
          theme._color(
            theme.colors.state.key,
            textLighten,
            textDarken,
            textOpacity
          )) ||
        theme._color(
          theme.colors.text.primary,
          textLighten,
          textDarken,
          textOpacity
        ))};

    border-width: ${selected && '1px'};
    border-style: ${selected && 'solid'};

    fill: ${selected &&
      theme._color(
        theme.colors.text.light2,
        iconLighten,
        iconDarken,
        iconOpacity
      ) + '!important'};
    ${selected && selectedStyles};
  `,
  propTypes: {
    active: PropTypes.object,
    appearance: PropTypes.string,
    selected: PropTypes.bool,
    textDarken: PropTypes.number,
    iconDarken: PropTypes.number,
    iconLighten: PropTypes.number,
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
    buttonStyles: PropTypes.string
  }
}

export default button
