/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   30-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 30-Nov-2016
*/
const API_URL = 'http://localhost:3001/';
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const api = {
    get(url) {
        const URL = `${API_URL}${url}`;
        const OPTIONS = {
            method: 'GET',
            headers: HEADERS
        };
        return fetch(URL, OPTIONS).then((res) => res.json());
    },
    post(url, data) {
        const URL = `${API_URL}${url}`;
        const OPTIONS = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(data)
        };
        return fetch(URL, OPTIONS).then((res) => res.json());
    },
    put(url, data) {
        const URL = `${API_URL}${url}`;
        const OPTIONS = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(data)
        };
        return fetch(URL, OPTIONS).then((res) => res.json());
    },
    delete(url, data) {
        const URL = `${API_URL}${url}`;
        const OPTIONS = {
            method: 'DELETE',
            headers: HEADERS,
            body: JSON.stringify(data)
        };
        return fetch(URL, OPTIONS).then((res) => res.json());
    }
};

export default api;
