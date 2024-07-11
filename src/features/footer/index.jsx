import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <>
      {' '}
      <section className="contact" id="#contact">
        <div className="contact-contr">
          <div className="company-icon">
            <Image
              src={'/company-logo.png'}
              width={250}
              height={250}
              alt="hwp llp"
            />
          </div>
          <div className="contact-group">
            <h3 className="contact-title">Contacts</h3>
            <div className="contact-content">
              <div className="phone-no">
                <FaPhoneAlt />
                <p>&nbsp;&nbsp;&nbsp;+91 9558696217</p>
              </div>
              <div className="email-contr">
                <MdEmail width={50} height={45} />
                <div className="email-content">
                  <Link
                    className="email"
                    href={'mailto:keepsmiling@aimhwpservices.com'}
                  >
                    &nbsp;&nbsp;&nbsp;keepsmiling@aimhwpservices.com
                  </Link>
                  <Link
                    className="email"
                    href={'mailto:aimhwpservices@gmail.com'}
                  >
                    &nbsp;&nbsp;&nbsp;aimhwpservices@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="quick-group">
            <h3 className="quick-title">Quick Links</h3>
            <div className="quick-content">
              <div className="privacy">
                <Link href={'/privacy-policy'} className="quick-link">
                  Privacy policy
                </Link>
              </div>
              <div className="condition">
                <Link href={'/terms-conditions'} className="quick-link">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="link-group">
            <h3>App is Available on Play Store.</h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
              }}
            >
              <Link href="https://play.google.com/store/apps/details?id=com.example.app">
                <Image
                  width={300}
                  height={120}
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  sx={{ width: 250, height: 'auto', marginTop: 1 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 AIM HWP SERVICES LLP. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
