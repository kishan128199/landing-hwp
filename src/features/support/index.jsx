import React, { useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Support = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="community" id="#community">
      <div className="community-contr">
        <div className="community-img-contr">
          <Image
            width={900}
            src={'/support-community.jpg'}
            height={550}
            alt="hand chain"
          />
        </div>
        <div className="community-content-contr">
          <div className="community-title">
            <h2>Collective Support</h2>
            <div className="community-separator"></div>
            <p className="community-description">
              Our goal is to create a supportive network where individuals work
              together towards common health and wealth protection goals.
            </p>
          </div>
          <div className="accordion-contr" style={{ marginTop: '30px' }}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              style={{
                background: 'transparent',
                boxShadow: 'none',
                width: '40%',
              }}
            >
              <AccordionSummary
                classes={{ content: 'accordion-title' }}
                style={{
                  width: '80%',
                  height: '35px',
                  minHeight: '0px !important',
                  paddingInline: '0px',
                }}
                expandIcon={
                  expanded !== 'panel1' ? (
                    <FaPlus color="black" />
                  ) : (
                    <FaMinus color="black" />
                  )
                }
              >
                <h4 style={{ fontSize: '1.3rem' }}> Shared Experiences</h4>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  width: '80%',
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  padding: '0',
                  lineHeight: '1.9rem',
                }}
              >
                <p>
                  Cultivate a community among our customers through voluntary
                  support mechanisms.Encourage customers to share their personal
                  health and wealth protection journeys, offering valuable
                  insights and fostering mutual support.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              style={{
                background: 'transparent',
                boxShadow: 'none',
                width: '40%',
              }}
            >
              <AccordionSummary
                classes={{ content: 'accordion-title' }}
                style={{
                  width: '80%',
                  height: '35px',
                  paddingInline: '0px',
                  minHeight: '0px !important',
                }}
                expandIcon={
                  expanded !== 'panel2' ? (
                    <FaPlus color="black" />
                  ) : (
                    <FaMinus color="black" />
                  )
                }
              >
                <h4 style={{ fontSize: '1.3rem' }}>Voluntary Support</h4>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  width: '80%',
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  padding: '0',
                  lineHeight: '1.9rem',
                }}
              >
                <p>
                  Facilitate avenues where customers can provide assistance and
                  guidance to each other, creating a strong community network.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              style={{
                background: 'transparent',
                boxShadow: 'none',
                width: '40%',
              }}
            >
              <AccordionSummary
                classes={{ content: 'accordion-title' }}
                style={{
                  width: '80%',
                  height: '35px',
                  paddingInline: '0px',
                  minHeight: '0px !important',
                }}
                expandIcon={
                  expanded !== 'panel13' ? (
                    <FaPlus color="black" />
                  ) : (
                    <FaMinus color="black" />
                  )
                }
              >
                <h4 style={{ fontSize: '1.3rem' }}>Collective Goals</h4>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  width: '80%',
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  padding: '0',
                  lineHeight: '1.9rem',
                }}
              >
                <p>
                  Promote a collaborative environment where individuals work
                  together to achieve common health and financial objectives,
                  enhancing the overall effectiveness of our services.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
