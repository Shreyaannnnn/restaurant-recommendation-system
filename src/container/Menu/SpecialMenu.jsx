import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Select your filters" />
      <h1 className="headtext__cormorant">Recommendation</h1>
    </div>

    

  


    

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        Submit
      </button>
    </div>
  </div>
);

export default SpecialMenu;
