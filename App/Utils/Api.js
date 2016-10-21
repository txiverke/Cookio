/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   30-Sep-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/
const API_URL = 'http://localhost:3001/';
const User = [
    { id: 1, name: 'Jillian Twardowski', avatar: 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png' },
    { id: 2, name: 'Xavi Vila', avatar: 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png' },
    { id: 3, name: 'Mariatne Rajoi', avatar: 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png' }
];
const Hosts = [
    {
        id: 1,
        host_name: 'Jillian Twardowski',
        title: 'Sopa de Llamantol',
        price: '€10',
        valoration: 5,
        image: [
            `https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg`,
            `https://static.pexels.com/photos/2215/food-salad-healthy-vegetables.jpg`,
            `https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg`
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, est non ullamcorper tincidunt, risus nulla ornare lorem, a pulvinar justo ipsum quis turpis. Cras sed nisi aliquam, gravida turpis id, semper erat. Sed eget tempus arcu. Vivamus consequat dolor id euismod hendrerit. In condimentum venenatis neque id maximus. Praesent turpis leo, consequat vel quam at, euismod malesuada tortor.',
        comments: [
            {
                author: 'Peter Pedrowski',
                comment: 'Nulla convallis, est non ullamcorper tincidunt.'
            },
            {
                author: 'Carlos Martinez',
                comment: 'Nipsum dolor sit amet, consectetur adipiscing elit, est non ullamcorper tincidunt.'
            },
            {
                author: 'Jorge Niuman',
                comment: 'Nulla ipsum dolor sit amet, consectetur adipiscing elit ullamcorper tincidunt.'
            },
            {
                author: 'Carlos Martinez',
                comment: 'Nipsum dolor sit amet, consectetur adipiscing elit, est non ullamcorper tincidunt.'
            },
            {
                author: 'Jorge Niuman',
                comment: 'Nulla ipsum dolor sit amet, consectetur adipiscing elit ullamcorper tincidunt.'
            },
        ]
    },
    {
        id: 2,
        host_name: 'Xavi Vila',
        title: 'Suquet de peix',
        price: '€30',
        valoration: 3,
        image: [
            `https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg`,
            `https://static.pexels.com/photos/2215/food-salad-healthy-vegetables.jpg`,
            `https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg`
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, est non ullamcorper tincidunt, risus nulla ornare lorem, a pulvinar justo ipsum quis turpis. Cras sed nisi aliquam, gravida turpis id, semper erat. Sed eget tempus arcu. Vivamus consequat dolor id euismod hendrerit. In condimentum venenatis neque id maximus. Praesent turpis leo, consequat vel quam at, euismod malesuada tortor.',
        comments: [
            {
                author: 'Peter Pedrowski',
                comment: 'Nulla convallis, est non ullamcorper tincidunt.'
            },
            {
                author: 'Carlos Martinez',
                comment: 'Nipsum dolor sit amet, consectetur adipiscing elit, est non ullamcorper tincidunt.'
            },

        ]
    },
    {
        id: 3,
        host_name: 'Mariatne Rajoi',
        title: 'Verdura amb patata',
        price: '€13',
        valoration: 1,
        image: [
            `https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg`,
            `https://static.pexels.com/photos/2215/food-salad-healthy-vegetables.jpg`,
            `https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg`
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, est non ullamcorper tincidunt, risus nulla ornare lorem, a pulvinar justo ipsum quis turpis. Cras sed nisi aliquam, gravida turpis id, semper erat. Sed eget tempus arcu. Vivamus consequat dolor id euismod hendrerit. In condimentum venenatis neque id maximus. Praesent turpis leo, consequat vel quam at, euismod malesuada tortor.',
        comments: [
            {
                author: 'Peter Pedrowski',
                comment: 'Nulla convallis, est non ullamcorper tincidunt.'
            },
            {
                author: 'Carlos Martinez',
                comment: 'Nipsum dolor sit amet, consectetur adipiscing elit, est non ullamcorper tincidunt.'
            },
            {
                author: 'Jorge Niuman',
                comment: 'Nulla ipsum dolor sit amet, consectetur adipiscing elit ullamcorper tincidunt.'
            },
        ]
    }
];

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

const api = {
    /** User Authentication **/
    authenticate(data) {
        const url = `${API_URL}authenticate`;
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        };
        
        console.log('url->', url)
        console.log('options->', options)
        return fetch(url, options).then((res) => res.json());

    },
    getUsers() {
        const url = `${API_URL}api/users`;
        return fetch(url).then((res) => res.json());
    },
    getUser(id) {
        username = 'tyler';
        const url = `https://api.github.com/users/${username}`;
        //return fetch(url).then((res) => res.json());
        return fetch(url).then((res) => User[id]);
    },
    getHost(id) {
        username = 'tyler';
        const url = `https://api.github.com/users/${username}`;
        //return fetch(url).then((res) => res.json());
        return fetch(url).then((res) => Hosts[id]);
    },
    getMarkers(city) {
        username = 'xavi';
        const url = `https://api.github.com/users/${username}`;
        let result;
        Markers.map((marker, index) => {
            if (marker.city === city){
                result = marker.data;
            }
        });
        return fetch(url).then((res) => result );
    }
};

export default api;
