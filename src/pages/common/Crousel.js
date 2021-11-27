import {Image,Carousel} from 'react-bootstrap'
const Crousel = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item>
  <Image src="https://picsum.photos/id/1/1600/900" fluid />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="https://picsum.photos/id/1/1600/900" fluid />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="https://picsum.photos/id/1/1600/900" fluid />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        </>
    )
}

export default Crousel;