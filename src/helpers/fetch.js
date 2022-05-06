const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {
    //endpoint = /auth; /event
    //data = Elementos a postear o enviar
    const url = `${ baseUrl }/${ endpoint }`; //localhost:5000/api/auth o renew

    if ( method === 'GET' ) {
        return fetch( url ); //Retorna el producto de la peticion fetch
    } else {
        return fetch( url, {
            method, //Seria put, post o cualquiera menos GET
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}



export {
    fetchSinToken,
    fetchConToken
}