import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <div>
          <SectionTitle
            heading="Services"
            subheading="What I will do for you"
          />
          <div className="services__allItems">
            <ServiceSectionItem
              icon={<MdDesktopMac />}
              title="Website Design"
              desc="The human race stands on the brink of extinction as a series."
            />
            <ServiceSectionItem
              icon={<MdCode />}
              title="Web Development"
              desc="The human race stands on the brink of extinction as a series."
            />
            <ServiceSectionItem
              icon={<MdPhonelinkSetup />}
              title="App Dev"
              desc="The human race stands on the brink of extinction as a series."
            />
          </div>
        </div>
      </div>
    </ServicesItemStyles>
  );
}
