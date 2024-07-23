import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    title: string;
    Icon: any;
    address: string;
  }
  

export default function MenuItem({ title, Icon, address }: MenuItemProps) {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600" style={{height: 40}}>{title}
    </Link>
  )
}
