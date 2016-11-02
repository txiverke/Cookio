/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   30-Sep-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   xavi
* @Last modified time: 02-Nov-2016
*/
const API_URL = 'http://localhost:3001/';
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const Markers = [
    {
        city: 'palma',
        data: [
            {id: 0,coordinate: {latitude: 39.5775675016565, longitude: 2.6502504661432},title: 'Just a Title'},
            {id: 1,coordinate: {latitude: 39.57214252287034, longitude: 2.655574217367982}, title: 'Another title'},
            {id: 2,coordinate: {latitude: 39.57214252287034, longitude: 2.6465809878979}, title: 'Last one'}
        ]
    },
    {
        city: 'barcelona',
        data: [
            {id: 0,coordinate: {latitude: 39.5755675016565, longitude: 2.6512504661432},title: 'Just a Title'},
            {id: 1,coordinate: {latitude: 39.57414252287034, longitude: 2.653574217367982}, title: 'Another title'},
            {id: 2,coordinate: {latitude: 39.57214252287034, longitude: 2.6465809878979}, title: 'Last one'}
        ]
    }
];

/**
 * API URLS
 *
 *
 */

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
