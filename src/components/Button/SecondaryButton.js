import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import theme from "../styles/theme";
import { ButtonWithPrimaryColorIcon } from "./Button.components";

const SecondaryButton = ({ children, ...buttonProps }) => (
  <ButtonWithPrimaryColorIcon
    backgroundColor="white"
    color="brand.secondary"
    boxShadow="default"
    borderRadius="20px"
    border={theme.borders["1px"] + theme.colors.grey[300]}
    _hover={{
      border: theme.borders["1px"] + theme.colors.brand.primary,
      boxShadow: theme.shadows.big,
    }}
    _disabled={{
      backgroundColor: theme.colors.grey[300],
      cursor: "not-allowed",
      color: theme.colors.grey[500],
      boxShadow: "none",
      border: "none",
    }}
	{...buttonProps}
  >
    {children}
  </ButtonWithPrimaryColorIcon>
);
SecondaryButton.propTypes = {
  ...ChakraButton.propTypes,
  ...PropTypes.instanceOf("button"),
};

export default SecondaryButton;
