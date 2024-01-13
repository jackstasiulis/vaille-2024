import './Navbar.scss'

const Navbar = () => {

  return (
    <>
        <nav className='navbar'>
            <a href="/">
              <h3 className='navbar__logo'>vaille</h3>
            </a>

            <div className='navbar__option--container'>
              <a href="/">
                <h5 className='navbar__option'>SHOP</h5>
              </a>
                <h5 className='navbar__option'>ABOUT</h5>
            </div>

        </nav>
    </>
  )
}

export default Navbar
