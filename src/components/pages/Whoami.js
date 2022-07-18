import React from 'react';
import './Whoami.css';
import '../../App.css';
import ReadJson from '../ReadJson'

function Whoami() {
  return (
    <>
        <div className='whoami'>
          <ReadJson file_name="whoami"> </ReadJson>
        </div>
    </>
  );
}

export default Whoami;
