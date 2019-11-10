import React from 'react';

import './SelectNavigation.scss';


//import styles
// import "./Newsletter.scss";

const SelectNavigation = () => (
    <div className='select-category'>
        <button className='category-btn'>Wózki</button>
        <button className='category-btn'>Foteliki</button>
        <button className='category-btn'>Akcesoria</button>
    </div>        
);

export default SelectNavigation;