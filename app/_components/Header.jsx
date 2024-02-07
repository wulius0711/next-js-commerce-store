import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/images/logos/logo-soundwulf-twoline.png';
import BtnFullCart from './Buttons';
import stylesHeader from './Header.module.scss';

export default function Header() {
  return (
    <div className={stylesHeader.header}>
      <div className={stylesHeader.navbar}>
        <div className={stylesHeader.logo}>
          <Link href="/">
            <Image alt="Logo" src={logo} />
          </Link>
        </div>
        <div className={stylesHeader.navItems}>
          <div className={stylesHeader.navItem}>
            <Link href="/products">shop</Link>
          </div>
          <div className={stylesHeader.navItem}>
            <Link href="/about">about</Link>
          </div>
          <div className={stylesHeader.navItem}>
            <Link href="/contact">contact</Link>
          </div>
        </div>
        <BtnFullCart />
      </div>
    </div>
  );
}
