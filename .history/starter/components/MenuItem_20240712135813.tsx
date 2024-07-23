import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    title: string;
    Icon: any;
    address: string;
  }
  

export default function MenuItem({ title, Icon, address }: MenuItemProps) {
  return (
    <Link href={address}>
      
    </Link>
  )
}
