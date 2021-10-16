import React from 'react';
import './personalInfo.scss';
export default function PersonalInfo() {
    return (
        <div className="personalInfo">
              <ul class="responsive-table">
                <li class="table-header">
                        <div class="col col-1">Attribute</div>
                        <div class="col col-2">Details</div>
                        </li>
                        <li class="table-row">
                        <div class="col col-1" data-label="Attribute">Full Name</div>
                        <div class="col col-2" data-label="Value">Mohd Areeb Javed</div>
                        </li>
                        <li class="table-row">
                        <div class="col col-1" data-label="Attribute">Age</div>
                        <div class="col col-2" data-label="Value">23</div>
                        </li>
                        <li class="table-row">
                        <div class="col col-1" data-label="Attribute">Height</div>
                        <div class="col col-2" data-label="Value">5' 10</div>
                        </li>
                        <li class="table-row">
                        <div class="col col-1" data-label="Attribute">Complexion</div>
                        <div class="col col-2" data-label="Value">Fair</div>
                        </li>
                        <li class="table-row">
                        <div class="col col-1" data-label="Attribute">Caste</div>
                        <div class="col col-2" data-label="Value">Sunni/Sheikh</div>
                        </li>
                        <li class="table-row">
                        <div class="col col-1" data-label="Attribute">Hometown</div>
                        <div class="col col-2" data-label="Value">Nagina/Aligarh (UP)</div>
                        </li>
                </ul>
        </div>
    )
}
