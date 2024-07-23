import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    title: string;
    Icon: any;
    address: string;
  }
  

export default function MenuItem({ title, Icon, address }: MenuItemProps) {
  
  if (!address) {
    console.log(`MenuItem component expects a valid 'address' prop, but got '${address}'`);
    return null;
  }

  return (
    <Link href={address}>
      <Icon/>
      <p>{title}</p>
    </Link>
  )
}
