import {Container,Row,Col} from 'react-bootstrap'
const Footer = () => {
    return ( 
        <>
<Container fluid className={'bg-info'}>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row className={'bg-dark'}>
    <Col>
      © Copyright 2021. All Rights Reserved.</Col>
</Row>
</Container>
        </>
    )
}

export default Footer;