import Head from "next/head";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import {Nav, Navbar, Container, Row} from 'react-bootstrap'

export default () => {
    return (
      <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Notifications app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"
            />
        </Head>
        <Container>
          <Row>
            <Navbar className="mb-5" expand="lg">
              <Navbar.Brand href="/">Notification App</Navbar.Brand>
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Row>
        </Container>
      </>
    )
}
