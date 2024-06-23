import React from 'react'
import AccountIcon from './AccountIcon'
import CompareButton from './CompareButton'
import LOGO from '../typemaster.svg'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            
              <img className='logo-image' src={LOGO}/>
              <div className='logo-title' style={{marginLeft:'-80px', marginTop: '15px',fontSize:'35px'}}>MasterType</div>
            <div style={{marginLeft:'515px', marginTop: '15px'}}>
              <CompareButton/>
            </div>
            
        </div>
        <div className="user-logo" style={{marginTop: '15px'}}>
            <AccountIcon/>
        </div>
    </div>
  )
}

export default Header