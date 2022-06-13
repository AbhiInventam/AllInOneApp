import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import cityStateData from "./statecity.json";

const SelectionListDemo = () => {
  const [stateSelect, setStateSelect] = useState("");
  const [stateSelected, setStateSelected] = useState("");
  // Nested Dropdown selections
  // 1. show State first
  // 2. show city according to State
  // console.log("City and State Data", cityStateData);
  // const arrCity = Array(cityStateData);
  // console.log("Arr City and State Data", arrCity);
  console.log("State Data", stateSelect);
  console.log("Selected State", stateSelected);

  // const StateHandler = stateSelect;
  const selectStateHandler = (value) => setStateSelected(value);

  useEffect(() => {
    console.log("-----------------", cityStateData);
    // console.log(Object.keys(cityStateData));
    // console.log(Object.values(cityStateData));
    setStateSelect(Object.keys(cityStateData));

    // const numbers = [4, 9, 16, 25];
    // const newArr = numbers.map(
    //   (number) => (setStateSelect(number), console.log("number", number))
    // );

    // for (var key in cityStateData) {
    //   console.log("key", key);
    //   // console.log("Before ----------------------------------------");
    //   setStateSelect(key);
    //   // console.log("After ----------------------------------------");
    //   // console.log("StateSelection", stateSelect);
    // }
    // console.log("-------------------------------- City and State");
    // console.log("StateSelection", stateSelect);
  }, []);

  const handleChange = (event) => {
    console.log("Handle Change function");
    // setStateSelected(event.target.value);
    setStateSelect(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h4">Selection List</Typography>

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={stateSelect}
          // onChange={handleChange}
          onChange={(e) => selectStateHandler(e.target.value)}
          autoWidth
          label="State"
        >
          {/* {stateSelect &&
            stateSelect.map((onlyState, index) => {
              {
                console.log("onlyState", onlyState);
              }
              <MenuItem value={index} key={index}>
                {onlyState}
              </MenuItem>;
            })} */}
          {stateSelect.length &&
            stateSelect.map((stateSelection, index) => (
              // console.log("StateSelection", stateSelection, index)
              <MenuItem value={stateSelection} key={index}>
                {stateSelection}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default SelectionListDemo;
