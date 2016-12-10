let URL = "";

if (process.env.NODE_ENV === 'production') {
    URL = '';
} else if (process.env.NODE_ENV === 'development') {
    URL = 'http://localhost:8080/';
}

export default URL;