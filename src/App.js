import React, { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import { SearchRepresentativesByState, SearchSenatorsByState } from './Api';
import { Button as SubmitButton } from './Components/Button';
import { Dropdown } from './Components/Dropdown';
import { InfoList } from './Components/InfoList';
import { officials, states } from './Constants';
import { ButtonsGroup } from './Components/ButtonGroup';
import { RepresentativeList } from './Components/RepresentativeList';
import './App.css';

const Application = () => {

  const [official, setOfficial] = useState(officials[0].value);
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const handleAccountDropdownChange = (e) => { setState(e.value) };

  const handleSearch = async () => {
    if (official === "representatives") {
      const representatives = await SearchRepresentativesByState(state);
      setData(representatives.results);
      setDetails(representatives.results[0]);
    } else {
      const senators = await SearchSenatorsByState(state);
      setData(senators.results);
      setDetails(senators.results[0]);
    }
  };

  const renderDetails = (e) => {
    const targetValue = e.currentTarget.children[0].innerText;
    const repInfo = data.find(rep => rep.name === targetValue);
    setDetails(repInfo);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Banner />
      <div className='action_group'>
        <div className='app_dropdown_wrapper'>
          <Dropdown
            name='states'
            items={officials}
            options={states}
            onChange={handleAccountDropdownChange}
            placeholder='Select a state...'
          />
        </div>
        <ButtonsGroup
          items={officials}
          onClick={setOfficial}
          default={official}
        />
        <SubmitButton label="Search" onClick={handleSearch} />
      </div>
      <div style={{ display: 'flex', padding: '0 1rem' }}>
        <RepresentativeList onClick={renderDetails} results={data} />
        <InfoList data={details} />
      </div>
    </div>
  );
}

export default Application;
