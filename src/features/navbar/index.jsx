import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const NavBar = () => {
  return (
    <header className="hor-nav-section">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          width={40}
          height={40}
          alt="company-logo"
          src={'/company-logo.png'}
        />
        <span
          style={{
            color: '#096e4e',
            fontWeight: '600',
            marginLeft: '5px',
          }}
        >
          AIM &nbsp;
        </span>
        HWP SERVICES LLP
      </div>
      <ul className="nav-btn-contr">
        <Link href={'#home'}>
          <li className="nav-btn-contr">Home</li>
        </Link>
        <Link href={'#service'}>
          <li className="nav-btn-contr">Service</li>
        </Link>
        <Link href={'#community'}>
          <li className="nav-btn-contr">community</li>
        </Link>
        <Link href={'#contact'}>
          <li className="nav-btn-contr">Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default NavBar;
