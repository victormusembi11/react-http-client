import React from 'react'
const axios = require('axios').default;


const Tasks = () => {
    function getTodos() {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos',
            params: {
                _limit: 5
            }
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
    }

    return (
      <>
        {getTodos()}
        <div id="res"></div>
      </>
    )
}

/* Display output on Browser*/
function showOutput(res) {
    document.getElementById('res').innerHTML = `
        <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
        </div>
        <div class="card mt-3">
        <div class="card-header">
            Headers
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
        </div>
        <div class="card mt-3">
        <div class="card-header">
            Data
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
        </div>
        <div class="card mt-3">
        <div class="card-header">
            Config
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
        </div>
    `;
}

export default Tasks
