/* eslint-disable linebreak-style */
/* eslint-disable */

import React, { useState } from 'react'

const Checkboxes = ({checkboxGroup, onCheckboxToggle}) => {
    //const [checkboxGroup, setCheckboxGroup] = useState([])
    return (
        <div>
            <div>
                <label htmlFor="headache">Headache</label>
                <input
                    id="headache"
                    type="checkbox"
                    checked={checkboxGroup.includes('headache')}
                    onChange={() => onCheckboxToggle('headache')}
                />
            </div>

            <div>
                <label htmlFor="fever">Fever</label>
                <input
                    id="fever"
                    type="checkbox"
                    checked={checkboxGroup.includes('fever')}
                    onChange={() => onCheckboxToggle('fever')}
                />
            </div>

            <div>
                <label htmlFor="cough">Cough</label>
                <input
                    id="cough"
                    type="checkbox"
                    checked={checkboxGroup.includes('cough')}
                    onChange={() => onCheckboxToggle('cough')}
                />
            </div>

            <div>
                <label htmlFor="loss of smell">Loss of smell</label>
                <input
                    id="loss of smell"
                    type="checkbox"
                    checked={checkboxGroup.includes('loss of smell')}
                    onChange={() => onCheckboxToggle('loss of smell')}
                />
            </div>

            <div>
                <label htmlFor="loss of taste">Loss of taste</label>
                <input
                    id="loss of taste"
                    type="checkbox"
                    checked={checkboxGroup.includes('loss of taste')}
                    onChange={() => onCheckboxToggle('loss of taste')}
                />
            </div>

            <div>
                <label htmlFor="dizziness">Dizziness</label>
                <input
                    id="dizziness"
                    type="checkbox"
                    checked={checkboxGroup.includes('dizziness')}
                    onChange={() => onCheckboxToggle('dizziness')}
                />
            </div>
                    
        </div>



    )




}





export default Checkboxes