

const GetMovie = (pageName='latest') => {
//https://api.themoviedb.org/3/movie/latest?api_key=db39ff627aba28f2e2318d55c7a9fd21&language=en-US

    const apiKey ="db39ff627aba28f2e2318d55c7a9fd21";
    const URL = "https://api.themoviedb.org/3/movie/"

    const fetchURL = `${URL}${pageName}?api_key=${apiKey}`;

 
    return fetchURL;

}

export default GetMovie