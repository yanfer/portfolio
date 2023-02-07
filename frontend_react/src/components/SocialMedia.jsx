import React from 'react';

import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/Yanfer_Araque">
        <BsTwitter />
      </a>
      <a href="https://www.facebook.com/yanferd/">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/in/yanfer-daniel-araque-soto-97b3521b5/">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
