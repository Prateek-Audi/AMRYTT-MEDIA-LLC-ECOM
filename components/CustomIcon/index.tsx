import React from 'react';
import Image from 'next/image';
import * as Icons from 'react-icons/fa';
import { HiMiniSquares2X2 } from "react-icons/hi2";

type IconProps = {
  icon: string;
  className?: string;
  size?: number;
}

const CustomIcon: React.FC<IconProps> = ({ icon, className = '', size = 20 }) => {
  if (icon.endsWith('.svg')) {
    return (
      <Image 
        src={icon.startsWith('/') ? icon : `/assets/${icon}`}
        alt="menu icon"
        width={size}
        height={size}
        className={`${className} transition-colors duration-200 group-hover:text-[#2086BF] [&>path]:fill-current`}
      />
    );
  }

  const IconComponent = Icons[icon as keyof typeof Icons] || HiMiniSquares2X2;
  return <IconComponent className={`${className} transition-colors duration-200 group-hover:text-[#2086BF]`} />;
};

export default CustomIcon;