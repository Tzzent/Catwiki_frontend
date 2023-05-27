import { Link } from 'react-router-dom';
import Container from './Container';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <Container className="py-[0px] lg:px-5">
        <Container
          className="
          bg-black
          rounded-t-[42px]
          flex
          flex-col
          sm:items-center
          sm:flex-row
          sm:justify-between
          gap-2
          "
        >
          <Link to={'/'}>
            <Logo className="invert w-20" />
          </Link>
          <p className="text-white text-[.6em] sm:text-sm">
            © created by <a href="https://github.com/Tzzent" target="_blank" className="underline">@Tzzent</a> - devChallenges.io 2023
          </p>
        </Container>
      </Container>
    </footer >
  )
}
