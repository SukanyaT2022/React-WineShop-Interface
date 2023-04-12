import React from 'react';
import './Grid.css';

function Grid() {
  return (
    <div className="container my-4">
    <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col control3boxes">
          <img src ="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwZHJpbmslMjB3aW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
          <h4>Pinot Noir on Sale</h4>
          <small>Save up 30%</small>
          
         </div>


         <div className="col control3boxes">
          <img src ="https://images.unsplash.com/photo-1573574635896-36753f4e38bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXlhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
          <h4>Pinot Noir on Sale</h4>
          <small>Save up 30%</small>
          
         </div>


<div className="col control3boxes">
          <img src ="https://images.unsplash.com/photo-1598152541316-921ebb5e0433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2luZSUyMGJvdHRsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"/>
          <h4>Pinot Noir on Sale</h4>
          <small>Save up 30%</small>
          
         </div>





     
      </div>
    </div>



    
  );
}

export default Grid;
