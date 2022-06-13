import React, { useEffect } from "react";
import { useState } from "react";
import allStateCity from "./statecity.json";

const SelectionList = () => {
  const [allState, setAllState] = useState([]);
  const [allCity, setAllCity] = useState([]);
  // const [selectedState, setselectedState] = useState([]);
  // const [selectedCity, setselectedCity] = useState([]);
  const [selectedStateCity, setSelectedStateCity] = useState({
    state: "",
    city: "",
  });

  // console.log(
  //   "State Selected Cities:- ",
  //   allStateCity[selectedState]
  // );

  // console.log("---------->> selectedStateCity", selectedStateCity);
  // console.log("---------->> selectedStateCity", selectedStateCity.state);

  useEffect(() => {
    console.log("allStateCity", allStateCity);
    setAllState(Object.keys(allStateCity));
    // setAllCity(Object.values(allStateCity));
    // setAllCity(allStateCity[selectedState]);
  }, []);

  const handleStateChange = (event) => {
    console.log(event.target.value);
    // setAllState(event.target.value);
    // setselectedState(event.target.value);
    setAllCity(allStateCity[event.target.value]);
    setSelectedStateCity({
      ...selectedStateCity,
      state: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    console.log(event.target.value);
    // setAllCity(event.target.value);
    setSelectedStateCity({
      ...selectedStateCity,
      city: event.target.value,
    });
    // setselectedCity(event.target.value);
  };

  return (
    <div>
      <div className="state">
        <label>State</label>
        <select
          placeholder="States"
          // value={allState}
          // onChange={(e) => setAllState(e.target.value)}
          onChange={handleStateChange}
        >
          <option>--Choose State--</option>
          {allState &&
            allState.map((value, key) => {
              // console.log("State","value", value, "key", key);
              return (
                <option value={value} key={key}>
                  {value}
                </option>
              );
            })}
        </select>
      </div>

      <div className="city">
        <label>City</label>
        <select
          placeholder="City"
          // value={allCity}
          // onChange={(e) => setAllState(e.target.value)}
          onChange={handleCityChange}
          disabled={selectedStateCity.state.length == 0}
        >
          <option>--Choose City--</option>
          {/* {Object.keys(allStateCity) == selectedState && */}
          {allCity &&
            allCity.map((value, key) => {
              // console.log("City", "value", value, "key", key);
              return (
                <option value={value} key={key}>
                  {value}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default SelectionList;
