import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';

const Nav: FunctionComponent = function () {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggler = (
    <button
      className='navbar-toggler'
      type='button'
      aria-controls='navbar'
      aria-expanded='false'
      aria-label='Toggle navigation'
      onClick={() => setShow(!show)}
    >
      <span className='navbar-toggler-icon'></span>
    </button>
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand'>
            <img
              src='/images/logo.svg'
              className='navbar-brand-img'
              alt='Logo'
            />
          </a>
        </Link>

        {toggler}
        <div
          className={
            show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
          }
        >
          <ul className='navbar-nav align-items-center ms-auto'>
            {show && toggler}
            {show && (
              <li className='nav-item'>
                <Link href='/'>
                  <a
                    className={`nav-link ${
                      router.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
            )}
            <li className='nav-item'>
              <Link href='/cli/'>
                <a
                  className={`nav-link d-flex align-items-center ${
                    router.pathname === '/cli' ? 'active' : ''
                  }`}
                >
                  CLI
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/features/'>
                <a
                  className={`nav-link ${
                    router.pathname === '/features' ? 'active' : ''
                  }`}
                >
                  Features
                </a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/docs/latest/about/'>
                <a
                  className={`nav-link ${
                    router.pathname === '/docs/[...slug]' ? 'active' : ''
                  }`}
                >
                  Docs
                </a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/tutorials/'>
                <a
                  className={`nav-link ${
                    router.pathname === '/tutorials' ||
                    router.pathname === '/tutorials/[slug]'
                      ? 'active'
                      : ''
                  }`}
                >
                  Tutorials
                </a>
              </Link>
            </li>

            <li
              className='nav-item dropdown text-center'
              onMouseEnter={() => {
                !show && setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                !show && setDropdownOpen(false);
              }}
            >
              <a
                className={`nav-link dropdown-toggle`}
                href='#'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Pro {!show && <span className='h6 vertical-middle'>▼</span>}
              </a>
              <ul
                className={`dropdown-menu ${show ? 'text-center' : ''} ${
                  dropdownOpen ? 'show' : ''
                }`}
              >
                <li className='dropdown-item'>
                  <Link href='/pro/'>
                    <a className='dropdown-link'>
                      Pro plans{' '}
                      <span className='badge bg-primary-soft'>Coming soon</span>
                    </a>
                  </Link>
                </li>
                <li className='dropdown-item'>
                  <Link href='/enterprise/'>
                    <a className='dropdown-link'>Enterprise support</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link href='/download/'>
                <a className='btn btn-primary btn-xs'>
                  Download <i className='icon-download'></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
