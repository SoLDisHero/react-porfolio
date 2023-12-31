import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
.heading{
    font-size: 2.4reml
    margin-bottom: 2rem;
}
li{
    margin-bottom: 1rem;
}
a{
    font-size: 1.8rem;
}
`;

export default function FooterCol({
  heading = 'col heading',
  Links = [
    {
      type: 'link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {Links.map((item, index) => (
          <li key={index}>
            {item.type === 'link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
