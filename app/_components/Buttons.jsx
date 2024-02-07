import stylesButton from './Buttons.module.scss';

export default function BtnFullCart() {
  return <div className={stylesButton.btnFullRed}>cart</div>;
}

export function BtnFullProducts() {
  return <div className={stylesButton.btnFullBlue}>check it out</div>;
}
