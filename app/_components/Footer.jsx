import React from 'react';
import stylesFooter from './Footer.module.scss';

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate = `${day}-${month}-${year}`;

export default function Footer() {
  return (
    <div className={stylesFooter.footer}>
      <div className={stylesFooter.footerContent}>
        © soundwulf | {fullDate} | Imprint
      </div>
    </div>
  );
}
