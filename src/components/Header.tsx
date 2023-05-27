import { NavLink } from 'react-router-dom';
import Container from './Container';
import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <Container className="lg:px-[20px]">
        <NavLink to="/">
          <Logo className="max-w-[8em]" />
        </NavLink>
      </Container>
    </header>
  )
}
