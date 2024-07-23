import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    title: string;
    Icon: any;
    address: string;
  }
  

export default function MenuItem({ title, Icon, address }: MenuItemProps) {
  
  if (!address) {
    console.error(`MenuItem component expects a valid 'address' prop, but got '${address}'`);
    return null;
  }

  return (
    <Link href={address} className = 'hover:text-amber-600'>
      <Icon className = 'text-2xl sm:hidden' />
      <p className = 'uppercase hidden sm:inline text-xl'>{title}</p>
    </Link>
  )
}
