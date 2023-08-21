import React, {useState} from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';


const SpecialMenu = () => {


  const [costRange, setCostRange] = useState([0, 9999]);
  const [selectedOption1, setSelectedOption1] = useState(0);
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleMinCostChange = (event) => {
    const minValue = parseInt(event.target.value);
    setCostRange([minValue, costRange[1]]);
  };

  const handleMaxCostChange = (event) => {
    const maxValue = parseInt(event.target.value);
    setCostRange([costRange[0], maxValue]);
  };
  const handleSelect1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleSelect3Change = (event) => {
    setSelectedOption3(event.target.value);
  };




  const onSubmit = async() =>{
    console.log("pressed");
    console.log(selectedOption1)
    const response = await fetch('http://127.0.0.1:5000/get_recommendationsRating', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_data: parseInt(selectedOption1) }),
    });
    const data = await response.json();
    const recommendationsArray = JSON.parse(data.recommendations);
    setRecommendations(recommendationsArray);
    console.log(data);
  }

  return(

  <div className="app__specialMenu flex__center section__padding" id="menu">
      {/* <form onSubmit={onSubmit}> */}
      {/* <form> */}
    <div className="app__specialMenu-title">
      <SubHeading title="Select your filters" />
      <h1 className="headtext__cormorant">Recommendation</h1>

      <div className="p__opensans">
      <div>
        <label htmlFor="minCost">Min Cost:</label>
        <input
          type="range"
          id="minCost"
          min={costRange[0]}
          max={9998}
          value={costRange[0]}
          onChange={handleMinCostChange}
        />
        <div>Min: {costRange[0]}</div>
      </div>
      <div>
        <label htmlFor="maxCost">Max Cost:</label>
        <input
          type="range"
          id="maxCost"
          min={1}
          max={9999}
          value={costRange[1]}
          onChange={handleMaxCostChange}
        />
        <div>Max: {costRange[1]}</div>
      </div>
      <div>
        <label htmlFor="select1">Minimum Rating:</label>
        <select id="select1" value={selectedOption1} onChange={handleSelect1Change}>
          <option value="">Select an option</option>
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>

        </select>
      </div>
      <div>
        <label htmlFor="select2">Select Option 2:</label>
        <select id="select2" value={selectedOption2} onChange={handleSelect2Change}>
          <option value="">Select an option</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
          <option value="option6">Option 6</option>
        </select>
      </div>
      <div>
        <label htmlFor="select3">Select Option 3:</label>
        <select id="select3" value={selectedOption3} onChange={handleSelect3Change}>
          <option value="">Select an option</option>
          <option value="option7">Option 7</option>
          <option value="option8">Option 8</option>
          <option value="option9">Option 9</option>
        </select>
      </div>
    </div>







    </div>

    

  


    

    <div style={{ marginTop: 15 }}>
      <button className="custom__button" onClick={onSubmit}>
        Submit
      </button>
    </div>
    {/* </form> */}


    {/* <div className="recommendations p__opensans">
        <h2>Recommendations:</h2>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div> */}


      {/* <div className="recommendations p__opensans">
        <h2>Recommendations:</h2>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div> */}

      <div className="recommendations p__opensans">
        <h2>Recommendations:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisines</th>
              <th>Mean Rating</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((recommendation, index) => (
              <tr key={index}>
                <td>{recommendation.name}</td>
                <td>{recommendation.cuisines}</td>
                <td>{recommendation['Mean Rating']}</td>
                <td>{recommendation.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>




  </div>
);
  };

export default SpecialMenu;
