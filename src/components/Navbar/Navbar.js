import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className="nav-bar flex flex-wrap items-center justify-between px-2  py-2 lg:px-12">
        <div className="flex flex-no-shrink items-center mr-6 py-3 px-2 text-grey-darkest">
          <Link href="/">
              {/* <span className="font-semibold text-xs ">BUY LIKE DEALERS</span> */}
              <img src='../../../assets/img/Logo.svg' alt="Logo" style={{ cursor: 'pointer' }} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
