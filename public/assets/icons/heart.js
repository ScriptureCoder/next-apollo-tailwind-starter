import React, {useState} from 'react';

function Heart(props) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
               className="mr-2 ml-n3">
            <g id="Group_1019" data-name="Group 1019" transform="translate(-1473 -472)">
                <g id="Rectangle_456" data-name="Rectangle 456"
                   transform="translate(1473 472)" fill="none" stroke="#707070"
                   stroke-width="1">
                    <rect width="28" height="28" rx="14" stroke="none"></rect>
                    <rect x="0.5" y="0.5" width="27" height="27" rx="13.5"
                          fill="none"></rect>
                </g>
                <path id="heart"
                      d="M11.107,32.693a3.323,3.323,0,0,0-4.488.322l-.474.481-.474-.481a3.323,3.323,0,0,0-4.488-.322,3.371,3.371,0,0,0-.238,4.929L5.6,42.359a.762.762,0,0,0,1.089,0l4.654-4.737A3.369,3.369,0,0,0,11.107,32.693Z"
                      transform="translate(1480.539 450.299)" fill="#707070"></path>
            </g>
        </svg>
        </>
    );
}

export default Heart;
