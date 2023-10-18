'use client'

import Container from '@/components/Container';
import Home from './Home/page';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

const Page = ({ children = <Home /> }) => {

  return (

    <Container height="100vh" direction="column">
      <Header>
        <Navbar>
          <Logo />
        </Navbar>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>

  );

};

export default Page;