import React from 'react';
import './Grid.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myData from './grid.json';
// jason here
// function wineSection1(props) {
//   return (
//     <div class="wholePage">
//       <div class="section1-superHero">
//         <h4>Super Hero Movies {props.searchMovieText}</h4>
//         <div class="main-flexBox">
//           {/*
//         //below here we make pattern of data connect to json */}
//           {myData.superHeroMovie.map((value) => {
//             return (
//               <div class="smallBox">
//                 <h4>{value.section1}</h4>
//                 <img src={value.image} />
//                 <p>{value.Genre}</p>
//               </div>
//             );
//           })}

function Grid() {
  return (
    <div>
      {/* React Bootstrap Code */}
      <div className="container my-4">
        <Row xs={1} md={2} className="g-4">
          {myData.superHeroMovie.map((value, idx) => (
            <Col className="control3boxesGrid">
              <Card>
                <Card.Img className="img-css" variant="top" src={value.image} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <p>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Bootstrap code */}
      <div className="container my-4">
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col control3boxes">
            <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwZHJpbmslMjB3aW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            <h4>Pinot Noir on Sale</h4>
            <small>Save up 30%</small>
          </div>

          <div className="col control3boxes">
            <img src="https://images.unsplash.com/photo-1573574635896-36753f4e38bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXlhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
            <h4>Pinot Noir on Sale</h4>
            <small>Save up 30%</small>
          </div>

          <div className="col control3boxes">
            <img src="https://images.unsplash.com/photo-1598152541316-921ebb5e0433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2luZSUyMGJvdHRsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />
            <h4>Pinot Noir on Sale</h4>
            <small>Save up 30%</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
