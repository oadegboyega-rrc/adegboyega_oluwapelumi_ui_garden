/**
 * @typedef {Object} ButtonProps
 * @property {string} label - The button text
 */

/**
 * Button component
 * @param {ButtonProps} props
 */
export const Button = (props) => {
  return jsx("button", { children: props.label });
};