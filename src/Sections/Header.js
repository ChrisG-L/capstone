import './Nav.css';
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
        <img src={'/icons_assets/Logo.svg'} alt={'Logo'} />
        <Nav />
    </header>
  )
}
