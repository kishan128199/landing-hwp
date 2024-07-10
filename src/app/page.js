'use client';
import Image from 'next/image';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';
export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(expanded);
  return (
    <main className="">
      <header className="header">
        <div className="overlay">
          <p className="banner-description">
            Keep Smiling as Humanity is still alive
          </p>
          <h1 className="banner-title">
            Empowering Holistic Fitness and Wellness
          </h1>
        </div>
        <object
          style={{
            margin: '12rem auto auto auto',
            width: '100%',
          }}
          width={100}
          height={100}
          type="image/svg+xml"
          data="/svg/mouse-scroll.svg"
        ></object>
      </header>

      <section className="services">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          We offer a range of services designed to promote physical well-being,
          create supportive communities, and provide comprehensive health and
          wealth protection.
        </p>
        <div className="service-group">
          <div className="service-1">
            <div className="service-contr">
              <div>
                <h3>Yoga and Workout Training</h3>
                <hr />
                <p>
                  Engage Wellness coaches and certified Fitness trainers to
                  conduct regular online webinars or offline seminars
                </p>
              </div>
            </div>
          </div>
          <div className="service-2">
            <div className="service-contr">
              <div>
                <h3>Holistic Wellness</h3>
                <hr />
                <p>
                  Encouraging participants to adopt a holistic approach to
                  physical well-being. Our goal is to instill sustainable health
                  habits
                </p>
              </div>
            </div>
          </div>
          <div className="service-3">
            <div className="service-contr">
              <div>
                <h3>Community </h3>
                <hr />
                <p>
                  Foster a collaborative approach to health promotion by
                  integrating fitness and wellness services through a
                  combination of educational initiative
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="community">
        <div className="community-contr">
          <div className="community-content-contr">
            <div>
              <h2>Collective Support</h2>
              <p
                style={{
                  textAlign: 'justify',
                  width: '90%',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textIndent: '100px',
                }}
              >
                Cultivate a community among our customers through voluntary
                support mechanisms. Encourage sharing experiences, insights, and
                assistance among members. Our goal is to create a supportive
                network where individuals work together towards common health
                and wealth protection goals.
              </p>
            </div>
            <div className="accordion-contr" style={{ marginTop: '30px' }}>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                style={{
                  background: 'transparent',
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                <AccordionSummary
                  classes={{ content: 'accordion-title' }}
                  style={{
                    width: '80%',
                    height: '35px',
                    minHeight: '0px !important',
                  }}
                  expandIcon={expanded !== 'panel1' ? <FaPlus /> : <FaMinus />}
                >
                  <h4> Shared Experiences</h4>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    width: '70%',
                    textAlign: 'justify',
                    textIndent: '30px',
                  }}
                >
                  <p style={{ textAlign: 'left' }}>
                    Encourage customers to share their personal health and
                    wealth protection journeys, offering valuable insights and
                    fostering mutual support.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                style={{ background: 'transparent', boxShadow: 'none' }}
              >
                <AccordionSummary
                  classes={{ content: 'accordion-title' }}
                  style={{
                    width: '80%',
                    height: '35px',
                    minHeight: '0px !important',
                  }}
                  expandIcon={expanded !== 'panel2' ? <FaPlus /> : <FaMinus />}
                >
                  <h4>Voluntary Support</h4>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    width: '70%',
                    textAlign: 'justify',
                    textIndent: '30px',
                  }}
                >
                  <p style={{ textAlign: 'left' }}>
                    Facilitate avenues where customers can provide assistance
                    and guidance to each other, creating a strong community
                    network.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                style={{ background: 'transparent', boxShadow: 'none' }}
              >
                <AccordionSummary
                  classes={{ content: 'accordion-title' }}
                  style={{
                    width: '80%',
                    height: '35px',
                    minHeight: '0px !important',
                  }}
                  expandIcon={expanded !== 'panel13' ? <FaPlus /> : <FaMinus />}
                >
                  <h4>Collective Goals</h4>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    width: '70%',
                    textAlign: 'justify',
                    textIndent: '30px',
                  }}
                >
                  <p style={{ textAlign: 'left' }}>
                    Promote a collaborative environment where individuals work
                    together to achieve common health and financial objectives,
                    enhancing the overall effectiveness of our services.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="community-img-contr">
            <Image
              width={900}
              src={'/support-community.jpg'}
              height={500}
              alt="hand chain"
            />
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          For any query or question regarding our services, please feel free to
          contact us.
        </p>
        <p>Mobile No.: 9558696217</p>
        <p>Email: keepsmiling@aimhwpservices.com</p>
        <p>Email: aimhwpservices@gmail.com</p>
        <p>Application on Google Play store: AIM HWP</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 AIM HWP SERVICES LLP. All rights reserved.</p>
      </footer>
    </main>
  );
}
