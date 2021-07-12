import styled from "styled-components";
import { Button } from "@chakra-ui/react";
import theme from "../styles/theme";

export const ButtonWithPrimaryColorIcon = styled(Button)`
  svg {
	transition: 150ms all ease-in-out;
    color: ${p => p.iconColor || theme.colors.brand.primary};
  }
  &:hover {
	
	  svg {
		color: ${theme.colors.brand.primary};
	  }
  }
`;
