import React from 'react'

import './Header.scss'
import Card from './../UI/Card/Card'
import Button from '../UI/Button/Button'

function Header(props) {
  return (
    <Card>
      <div className='header'>
        <div className='header-logo'>
          <img
            src='https://dfd5gcc6b7vw5.cloudfront.net/assets/logo-8a7bb8b7de46c1b7163081c1d735c55860cf8d83689ad0a98a1865826a82b7cc.svg'
            alt='brand logo'
          />
        </div>
        <nav className='header-navigation'>
          <div className='header-navigation__item'>TRAINING</div>
          <div className='header-navigation__item'>BLOG</div>
          <div className='header-navigation__item'>SHOP</div>
          <Button className='header-navigation__button'>
            <div>Buy Membership</div>
          </Button>
          <div className='header-navigation__item'>LOG IN</div>
        </nav>
      </div>
    </Card>
  )
}

export default Header
