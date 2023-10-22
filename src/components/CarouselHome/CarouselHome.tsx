import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return (
        <>
            <Carousel style={{
                margin: '20px',
            }}>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    style={{maxHeight: "500px", objectFit: 'cover', height: '100%', objectPosition: 'top'}}
                    src="src/assets/Images/lemon.avif" alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{maxHeight: "500px", objectFit: 'cover', height: '100%', objectPosition: 'top'}}
                        src="src/assets/Images/cheesecake.webp" alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    style={{maxHeight: "500px", objectFit: 'cover', height: '100%', objectPosition: 'top'}}
                    src="src/assets/Images/carrot.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselHome;