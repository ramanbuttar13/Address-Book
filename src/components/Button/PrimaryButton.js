import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import theme from "../styles/theme";

const PrimaryButton = ({ children, ...buttonProps }) => (
  <ChakraButton
	backgroundColor="primary"
    {...buttonProps}
	color="white"
    boxShadow="default"
    _hover={{
      backgroundColor: theme.colors.brand.primary_darker,
      boxShadow: theme.shadows.big,
    }}
    _disabled={{
      backgroundColor: theme.colors.grey[300],
      cursor: "not-allowed",
      color: theme.colors.grey[500],
      boxShadow: "none",
    }}
  >
    {children}
  </ChakraButton>
);

PrimaryButton.propTypes = {
  ...ChakraButton.propTypes,
  ...PropTypes.instanceOf("button"),
};

export default PrimaryButton;
