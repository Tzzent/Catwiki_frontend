import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <div
      className="
      flex 
      flex-col 
      min-h-screen
      "
    >
      <Header />
      <main
        className="
        flex-grow
        h-full
        container
        m-auto
        px-5
        mb-10
        "
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
