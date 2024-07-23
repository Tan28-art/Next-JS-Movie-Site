import { IconBaseProps } from 'react-icons';
import { MdBrightness3, MdBrightness5 } from 'react-icons/md';
import { useTheme } from 'next-themes';

import React from 'react';

interface CustomIconProps extends IconBaseProps {
  className?: string; // Define className as a valid prop
}

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdBrightness5 className='cursor-pointer' /> // No error here
      ) : (
        <MdBrightness3 className='cursor-pointer' /> // No error here
      )}
    </div>
  );
}