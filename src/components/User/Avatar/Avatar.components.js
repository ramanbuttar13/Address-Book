import styled from "styled-components";
import theme from "../../styles/theme";

export const BorderedWrapper = styled.div`
  width: ${(p) => p.avatarSize};
  height: ${(p) => p.avatarSize};
  border: ${theme.borders["1px"]} ${theme.colors.grey[300]};
  border-radius: ${(p) => p.radius || theme.radii.full};
  padding: 1px;
  background: ${theme.colors.grey[50]};
`;

export const PhotoAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.radius || theme.radii.full};
  object-fit: cover;
`;
