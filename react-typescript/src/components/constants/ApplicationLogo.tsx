import React from 'react';
import logo from "../../assets/logo.png";

interface ApplicationLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ApplicationLogo: React.FC<ApplicationLogoProps> = (props) => {
  return <img {...props} src={logo} alt="logo" />;
}

export default ApplicationLogo;
