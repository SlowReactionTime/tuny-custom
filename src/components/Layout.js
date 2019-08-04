import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <Container onUpdate={() => window.scrollTo(0, 0)}>
    {props.children}
  </Container>
)
