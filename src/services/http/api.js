import axios from 'axios'

const host = 'http://localhost:59711';

function get(url, successCallback, errorCallback) {
    axios.get(host + url)
        .then((response) => {
            successCallback(response.data);
        })
        .catch(function (error) {
            errorCallback(error);
        });
}

function post(url, data, successCallback, errorCallback) {
    axios.post(host + url, data) //data is a object with properties
        .then(function (response) {
            successCallback(response);
        })
        .catch(function (error) {
            errorCallback(error);
        });
}

const Api = {
    get, post //, put, delete etc.
}

export default Api;