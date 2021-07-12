import React from "react";
import PropTypes from "prop-types";
import {
  BorderedWrapper,
  PhotoAvatar,
} from "./Avatar.components";

const Avatar = ({ src, alt, avatarSize, radius, ...avatarProps }) => {

  return (
    <BorderedWrapper {...avatarProps} radius={radius} avatarSize={avatarSize} >
      {src && <PhotoAvatar src={src} radius={radius} alt={alt} />}
    </BorderedWrapper>
  );
};
Avatar.defaultProps = {
  alt: "User Image",
  avatarSize: "52px",
};

Avatar.propTypes = {
  /** The path to the avatar image source */
  src: PropTypes.string,
  /** The alt text that describes avatar image */
  alt: PropTypes.string,
  /** Avatar width and height in pixels */
  avatarSize: PropTypes.string,
  ...PropTypes.instanceOf("div"),
};
export default Avatar;
