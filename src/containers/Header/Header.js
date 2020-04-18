import React, { Component } from 'react'
import Nav from 'components/UI/Nav/Nav'
import MobNav from 'components/UI/Nav/MobNav/MobNav'
import Logo from 'components/UI/Logo/Logo'
import HamburgerMenu from 'components/UI/HamburgerMenu/HamburgerMenu'
import styles from './Header.module.scss'

class Header extends Component {
  state = {
    mobileNav: false
  }

  handleToggleMobileNav = () => {
    this.setState(prevState => {
      return {
        moileNav: !prevState.mobileNav
      }
    })
  }

  render () {
    const { mobileNav } = this.state

    const navItems = [
      { link: '/', text: 'Home', active: true },
      { link: '/burder', text: 'Burger', active: false },
      { link: '/checkout', text: 'Checkout', active: false }
    ]

    return (
      <>
        <MobNav navItems={ navItems } moileNav={ mobileNav } toggleMobileNav={ this.handleToggleMobileNav } />
        <header className={ styles.toolbar__wrapper }>
          <div className="wrapper">
            <div className={ styles.toolbar__content }>
              <HamburgerMenu toggleNav={ this.handleToggleMobileNav } />
              <Logo />
              <Nav navItems={ navItems } />
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header

