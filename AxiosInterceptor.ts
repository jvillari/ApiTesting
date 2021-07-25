import axios from "axios";
import helper = require('jest-html-reporters/helper');

// Intercepts axios request to add information to jest report
axios.interceptors.request.use(async function (request) {
    // This adds our requests to the jest reporter
    await helper.addMsg(JSON.stringify(request, null, 2));
    return request
}, async function (error) {
    await helper.addMsg('Response Error: ' + JSON.stringify(error, null, 2));
    return error;
});

// Intercepts axios response to add response information to jest report
axios.interceptors.response.use(async function (response) {
    await helper.addMsg(JSON.stringify(response.data, null, 2));
    return response;
}, async function (error) {
    await helper.addMsg('Response Error: ' + JSON.stringify(error, null, 2));
    return Promise.reject(error);
});