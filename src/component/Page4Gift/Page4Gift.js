// import React from 'react'
// import './Page4Gift';

// function Page4Gift() {
//   return (
//     <div id="gifts">
//       <h1>Hello0oooooooooooooooo</h1>
//     </div>
//   );
// }

// export default Page4Gift;

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myData from '../GridBox/grid.json';
import './Page4Gift.css';

function GridExample() {
  return (
    <>
{/* begin extrabox */}
<div className="main-extraBox" >
<div className='extraBox-TextLeft'>
  <h3>Wine Gifts</h3>
</div>
<div className='extraBox-picRight'>

</div>
</div>
{/* end extra box2 */}


    <Row xs={1} md={3} className="g-4 controlBigBox4wholeRow">
      {myData.Gifts.map((value, idx) => (
        <Col className="control3boxesGift">
          <Card>
            <Card.Img variant="top" src={value.image} />
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>{value.description}</Card.Text>
              <Card.Text>{value.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default GridExample;
