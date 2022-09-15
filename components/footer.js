import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="mailto:appn12@gmail.com">
          <Image src="/images/email_icon.png" width={30} height={30} />
        </a>
      </div>
      <div>
        <a href="https://github.com/OTKRyu">
          <Image src="/images/GitHub-Mark-32px.png" width={30} height={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
