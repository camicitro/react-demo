import Card from 'react-bootstrap/Card';

const AboutUs = () => {
    return (
        <>
            <h1 style={{margin: '20px'}} >About us</h1>
            <p style={{margin: '20px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum repudiandae illo qui veniam, doloribus, saepe beatae quam aliquid est rerum sunt harum consequatur quasi hic impedit autem quas recusandae!</p>
            <div 
            style={{
                display: 'flex', margin: '15px',
                justifyContent: 'center'
            }}
            >
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="src/assets/Images/lemonie.jpg" />
                <Card.Body>
                    <Card.Title>Lemonies</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="src/assets/Images/brownie.jpg" />
                <Card.Body>
                    <Card.Title>Brownies</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="src/assets/Images/cookie.webp" />
                <Card.Body>
                    <Card.Title>Cookies</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            
        </>
    );
}

export default AboutUs;