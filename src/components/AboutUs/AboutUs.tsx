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
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/271px-Cuesta_del_obispo_01.jpg" />
                <Card.Body>
                    <Card.Title>Paisaje 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sasso_lungo_da_passo_pordoi.jpg/270px-Sasso_lungo_da_passo_pordoi.jpg" />
                <Card.Body>
                    <Card.Title>Paisaje 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Herbstlandschaft_%28am_Rebhang%29.jpg/270px-Herbstlandschaft_%28am_Rebhang%29.jpg" />
                <Card.Body>
                    <Card.Title>Paisaje 3</Card.Title>
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
