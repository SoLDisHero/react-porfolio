import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
  }
  @media only screen and (max-width:768px) {
    .container{
    flex-direction:column;
    gap: 0rem;
    & > div{
        margin-top: 5rem;
    }
    .footer__col1 .para{
        max-width: 100%;
    }
    .copyright{
        .container{
            div{
                margin-top:0;
            }
        }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Eugene Y</h1>
          <PText>
            Ted has fallen in love. It all started when his best friend,
            Marshall, drops the bombshell that he plans to propose to longtime
            girlfriend Lily, a kindergarten teacher
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            Links={[
              { title: 'Home', path: '/', type: 'link' },
              { title: 'About', path: '/about', type: 'link' },
              { title: 'Projects', path: '/projects', type: 'link' },
              { title: 'Contact', path: '/title', type: 'link' },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              { title: '+17638434097', path: '+17638434097' },
              { title: 'geniaer@gmail.com', path: 'mailto:geniaer@gmail.com' },
              { title: 'Student', path: 'https://solta.by' },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            Links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/EugeneYer/',
              },
              { title: 'Instagram', path: 'https://www.instagram.com/' },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>|© 2023 - Eugene Y|</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
