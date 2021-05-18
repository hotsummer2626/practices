import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    (
        <div id="my-div">
            <p>Hello world</p>
            <a href="https://google.com">Google</a>
        </div>
    ),
    document.querySelector('#app'),
);