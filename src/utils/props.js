// This file is used to resuse common proptypes that is used in multiple component
import { css } from 'react-emotion'
import PropTypes from 'prop-types'

// Select on of the following Prop Nodes
// 1- Shape node
// 2- Transform node
// 3- Flex node
// 4- Text node
// 5- Font Node

export const cprops = {
  // ----- Loader -----
  loader: ({ theme, appearance, loader, loaderColor, loaderSize }) => css`
    ${loader && `
    border-top-color: ${appearance === 'primary' || appearance === 'warning' || appearance === 'danger' ? theme.colors.text.disabled : theme.colors.state.key};
    width: 15px;
    height: 15px;
    border: 2px solid #f3f3f3;
    border-radius: 50%;
    border-top: 2px solid;
    animation: spin 0.75s linear infinite;  
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`}
  `,
  // ----- Shape -----
  shape: ({
    theme,
    display,
    size,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    shape,
    borderRadius,
    hidden,
    fit,
    disabled,
    boxShadow,
    backgroundColor,
    boxSizing,
    shadowX,
    shadowY,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    shadowBlur,
    _shadowColor = (theme.color(theme.colors.tags[shadowColor] || theme.colors.ui[shadowColor] || theme.colors.state[shadowColor] || shadowColor)) }) => css`
    display: ${display};
    width: ${width
    ? (typeof width === 'string' && (width)) ||
      (typeof width === 'number' && width + 'px')
    : (size === 'xxs' && '65px') ||
      (size === 'xs' && '68px') ||
      (size === 'sm' && '71px') ||
      (size === 'base' && '74px') ||
      (size === 'md' && '77px') ||
      (size === 'lg' && '80px') ||
      (size === 'xl' && '83px') ||
      (size === 'xxl' && '86px')};
    height: ${height
    ? (typeof height === 'string' && (height)) ||
      (typeof height === 'number' && height + 'px')
    : (size === 'xxs' && '65px') ||
      (size === 'xs' && '68px') ||
      (size === 'sm' && '71px') ||
      (size === 'base' && '74px') ||
      (size === 'md' && '77px') ||
      (size === 'lg' && '80px') ||
      (size === 'xl' && '83px') ||
      (size === 'xxl' && '86px')};
    min-width: ${(typeof minWidth === 'string' && (minWidth)) ||
    (typeof minWidth === 'number' && minWidth + 'px')};
    max-width: ${(typeof maxWidth === 'string' && (maxWidth)) ||
    (typeof maxWidth === 'number' && maxWidth + 'px')};
    min-height: ${(typeof minHeight === 'string' && (minHeight)) ||
    (typeof minHeight === 'number' && minHeight + 'px')};
    max-height: ${(typeof maxHeight === 'string' && (maxHeight)) ||
    (typeof maxHeight === 'number' && maxHeight + 'px')};
    min-width: unset;
    min-height: unset;
    border-radius: ${(shape === 'square' && '1px') ||
      (shape === 'rounded' && '4px') ||
      (shape === 'pill' && '12px') ||
      (shape === 'circle' && '100%')};
    border-radius: ${(typeof borderRadius === 'string' && (theme.borderRadius[borderRadius] || borderRadius)) ||
    (typeof borderRadius === 'number' && borderRadius + 'px')};
    visibility: ${hidden && 'hidden'};
    width: ${fit && '-webkit-fill-available'};
    opacity: ${disabled && '0.4'};
    pointer-events: ${disabled && 'none'};
    box-shadow: ${boxShadow || `${shadowX || 0}px ${shadowY || 0}px ${shadowBlur || 0}px ${shadowRadius || 0}px rgba(${_shadowColor.red()}, ${_shadowColor.green()}, ${_shadowColor.blue()}, ${_shadowColor.alpha() * (shadowOpacity || 1)})`};
    boxSizing: ${boxSizing};
    background: ${theme.colors.tags[backgroundColor] || theme.colors.ui[backgroundColor] || theme.colors.state[backgroundColor] || backgroundColor};
  `,
  // ----- Transform -----
  transform: ({
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    marginX,
    marginY,
    paddingX,
    paddingY }) => css`
    margin: ${(typeof margin === 'string' && margin) || (typeof margin === 'number' && margin + 'px')};
    margin-top: ${marginTop && ((typeof marginTop === 'string' && (marginTop)) ||
    (typeof marginTop === 'number' && marginTop + 'px'))};
    margin-right: ${marginRight && ((typeof marginRight === 'string' && (marginRight)) ||
    (typeof marginRight === 'number' && marginRight + 'px'))};
    margin-bottom: ${marginBottom && ((typeof marginBottom === 'string' && (marginBottom)) ||
    (typeof marginBottom === 'number' && marginBottom + 'px'))};
    margin-left: ${marginLeft && ((typeof marginLeft === 'string' && (marginLeft)) ||
    (typeof marginLeft === 'number' && marginLeft + 'px'))};
    padding-top: ${paddingTop && ((typeof paddingTop === 'string' && (paddingTop)) ||
    (typeof paddingTop === 'number' && paddingTop + 'px'))};
    padding-right: ${paddingRight && ((typeof paddingRight === 'string' && (paddingRight)) ||
    (typeof paddingRight === 'number' && paddingRight + 'px'))};
    padding-bottom: ${paddingBottom && ((typeof paddingBottom === 'string' && (paddingBottom)) ||
    (typeof paddingBottom === 'number' && paddingBottom + 'px'))};
    padding-left: ${paddingLeft && ((typeof paddingLeft === 'string' && (paddingLeft)) ||
    (typeof paddingLeft === 'number' && paddingLeft + 'px'))};
    padding: ${(typeof padding === 'string' && padding) || (typeof padding === 'number' && padding + 'px')};
    position: ${position && ((position.includes('top') || position.includes('right') || position.includes('bottom') || position.includes('left')) ? 'absolute' : position)};
    left: ${position && (position.includes('left') ? 0 : left)};
    right: ${position && (position.includes('right') ? 0 : right)};
    top: ${position && (position.includes('top') ? 0 : top)};
    bottom: ${position && (position.includes('bottom') ? 0 : bottom)};
    margin-top: ${marginY && ((typeof marginY === 'string' && (marginY)) ||
    (typeof marginY === 'number' && marginY + 'px'))};
    margin-bottom: ${marginY && ((typeof marginY === 'string' && (marginY)) ||
    (typeof marginY === 'number' && marginY + 'px'))};
    margin-left: ${marginX && ((typeof marginX === 'string' && (marginX)) ||
    (typeof marginX === 'number' && marginX + 'px'))};
    margin-right: ${marginX && ((typeof marginX === 'string' && (marginX)) ||
    (typeof marginX === 'number' && marginX + 'px'))};
    padding-top: ${paddingY && ((typeof paddingY === 'string' && (paddingY)) ||
    (typeof paddingY === 'number' && paddingY + 'px'))};
    padding-bottom: ${paddingY && ((typeof paddingY === 'string' && (paddingY)) ||
    (typeof paddingY === 'number' && paddingY + 'px'))};
    padding-left: ${paddingX && ((typeof paddingX === 'string' && (paddingX)) ||
    (typeof paddingX === 'number' && paddingX + 'px'))};
    padding-right: ${paddingX && ((typeof paddingX === 'string' && (paddingX)) ||
    (typeof paddingX === 'number' && paddingX + 'px'))};
    z-index: ${zIndex};
  `,
  // ----- Text -----
  text: ({ theme, textColor, textOverflow, textDirection, textDecoration, letterSpacing, lineHeight, textAlign, textIndent, textTransform, textShadow }) => css`
    color: ${textColor && (theme.colors.tags[textColor] || theme.colors.ui[textColor] || theme.colors.state[textColor] || textColor)};
    overflow: ${textOverflow && (textOverflow === ('clip' || 'ellipsis') ? 'hidden' : textOverflow)};
    text-overflow: ${textOverflow && ((textOverflow === 'visible' && 'initial') || (textOverflow === 'scroll' && 'ellipsis') || textOverflow)};
    text-direction: ${textDirection};
    text-decoration: ${textDecoration};
    letter-spacing: ${letterSpacing && ((typeof letterSpacing === 'string' && (letterSpacing)) ||
    (typeof letterSpacing === 'number' && letterSpacing + 'px'))};
    line-height: ${lineHeight};
    text-align: ${textAlign};
    text-indent: ${textIndent && ((typeof textIndent === 'string' && (textIndent)) ||
    (typeof textIndent === 'number' && textIndent + 'px'))};
    text-transform: ${textTransform};
    text-shadow: ${textShadow};
  `,
  // ----- Font -----
  font: ({ theme, fontSize, fontStyle, fontWeight }) => css`
    font-size: ${typeof fontSize === 'string' ? (theme.sizes[fontSize] || fontSize || theme.sizes.sm) : fontSize + 'px'};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
  `,
  // ----- Flex -----
  flex: ({ flexDirection, flexWrap, flexFlow, justifyContent, alignItems, alignContent, order, flexGrow, flexShrink, flexBasis, flex, alignSelf }) => css`
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    flex-flow: ${flexFlow};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    order: ${order};
    flex-grow: ${flexGrow};
    flex-shrink: ${flexShrink};
    flex-basis: ${flexBasis && ((typeof flexBasis === 'string' && (flexBasis)) ||
    (typeof flexBasis === 'number' && flexBasis + 'px'))};
    flex: ${flex};
    align-self: ${alignSelf};
  `
}

export const cpropTypes = {
  text: {
    textColor: PropTypes.string,
    textOverflow: PropTypes.oneOf(['clip', 'ellipsis', 'scroll', 'visible']),
    textDirection: PropTypes.oneOf(['ltr', 'rtl']),
    textDecoration: PropTypes.string,
    letterSpacing: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    lineHeight: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
    textIndent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase', 'initial', 'inherit']),
    textShadow: PropTypes.string
  },
  font: {
    fontSize: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    fontStyle: PropTypes.oneOf(['italic', 'bold']),
    fontWeight: PropTypes.number
  },
  shape: {
    display: PropTypes.string,
    size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'base', 'md', 'lg', 'xl', 'xxl']),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    minWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    maxWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    minHeight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    maxHeight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle']),
    hidden: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    boxSizing: PropTypes.oneOf(['border-box', 'content-box', 'inherit', 'initial', 'unset']),
    fit: PropTypes.bool,
    backgroundColor: PropTypes.string,
    boxShadow: PropTypes.string,
    outline: PropTypes.number,
    shadowColor: PropTypes.string,
    shadowX: PropTypes.number,
    shdowY: PropTypes.number,
    shadowOpacity: PropTypes.number,
    ShadowRadius: PropTypes.number,
    shadowBlur: PropTypes.number
  },
  transform: {
    margin: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    padding: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    marginTop: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    marginRight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    marginBottom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    marginLeft: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    paddingTop: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    paddingRight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    paddingBottom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    paddingLeft: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    marginX: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    marginY: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    paddingX: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    paddingY: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    position: PropTypes.string,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    zIndex: PropTypes.number
  },
  flex: {
    flexDirection: PropTypes.oneOf(['column', 'row', 'column-reverse', 'row-reverse']),
    flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    flexFlow: PropTypes.string,
    justifyContent: PropTypes.oneOf([
      'start',
      'end',
      'flex-start',
      'flex-end',
      'center',
      'left',
      'right',
      'normal',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'safe',
      'unsafe'
    ]),
    alignItems: PropTypes.oneOf([
      'normal',
      'flex-start',
      'flex-end',
      'center',
      'start',
      'end',
      'self-start',
      'self-end',
      'baseline',
      'first baseline',
      'last baseline',
      'stretch',
      'safe',
      'unsafe'
    ]),
    alignContent: PropTypes.oneOf([
      'start',
      'end',
      'flex-start',
      'flex-end',
      'center',
      'normal',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'safe',
      'unsafe'
    ]),
    order: PropTypes.number,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    flexBasis: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    flex: PropTypes.string,
    alignSelf: PropTypes.oneOf([
      'auto',
      'normal',
      'self-start',
      'self-end',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'first baseline',
      'last baseline',
      'stretch',
      'safe',
      'unsafe'])
  }
}
