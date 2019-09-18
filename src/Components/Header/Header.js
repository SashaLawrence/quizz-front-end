import React from 'react';

const font_color = {
color: '#e5ebeb',
}

const header_background_color ={
backgroundColor: "#2d4158",
margin: "0 -15px"
}


const Header = ( {category} ) => (

    <div style={ header_background_color } className="page-header">
      <h5 style={ font_color } className="card-header">{ category }</h5>
    </div>
);


export default Header;