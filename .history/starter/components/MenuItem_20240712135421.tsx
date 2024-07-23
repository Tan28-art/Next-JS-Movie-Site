import React from 'react'

interface MenuItemProps {
    title: string;
    Icon: string;
    address: string;
  }
  

export default function MenuItem({ title, Icon, address }: MenuItemProps) {
  return (
    <div>
      MenuItem
    </div>
  )
}
