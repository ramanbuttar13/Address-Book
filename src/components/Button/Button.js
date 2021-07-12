import React from "react";
import PropTypes from "prop-types";
import { Button as ChakraButton } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Button = ({ children, buttonType, ...buttonProps }) => {
  if (buttonType === "secondary")
    return <SecondaryButton {...buttonProps}>{children}</SecondaryButton>;
  if (buttonType === "primary")
    return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;
};

Button.defaultProps = {
  buttonType: "primary",
};

Button.propTypes = {
  /** Specifies UI button type */
  buttonType: PropTypes.oneOf(["primary", "secondary"]),
  /** The children of the button */
  children: PropTypes.node,
  ...ChakraButton.propTypes,
  ...PropTypes.instanceOf("button"),
};

export default Button;
