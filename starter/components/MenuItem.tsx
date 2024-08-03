import Link from "next/link";
import React from "react";

interface MenuItemProps {
  title: string;
  Icon: any;
  address: string;
}

export default function MenuItem({ title, Icon, address }: MenuItemProps) {
  if (!address) {
    console.error(
      `MenuItem component expects a valid 'address' prop, but got '${address}'`
    );
    return null;
  }

  return (
    <Link href={address} className="hover:text-emerald-500">
      <Icon className="text-3xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-2xl font-semibold">
        {title}
      </p>
    </Link>
  );
}
