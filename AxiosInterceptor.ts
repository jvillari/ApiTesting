import axios from "axios";
import helper = require('jest-html-reporters/helper');
// Intercepts axios request to add information to jest report
axios.interceptors.request.use(async function (request: any) {
    // This adds our requests to the jest reporter
    await helper.addMsg(JSON.stringify(request, null, 2));
    request.metadata = { startTime: new Date()}
    return request
}, async function (error) {
    await helper.addMsg('Response Error: ' + JSON.stringify(error, null, 2));
    return error;
});

// Intercepts axios response to add response information to jest report
axios.interceptors.response.use(async function (response: any) {
    await helper.addMsg(JSON.stringify(response.data, null, 2));
    response.config.metadata.endTime = new Date();
    response.duration = response.config.metadata.endTime - response.config.metadata.startTime;
    return response;
}, async function (error) {
    await helper.addMsg('Response Error: ' + JSON.stringify(error, null, 2));
    return Promise.reject(error);
});