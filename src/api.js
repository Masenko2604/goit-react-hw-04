// import axios from 'axios';

// const API_KEY = '6AE7xEoRWOwICnZHKpG3H78nPk1ac86GfLC7OaMwaUk';
// export const fetchPictures = async (query, page, perPage=18) => {
//     const response = await axios.get(
//         `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&query=${query}&per_page=${perPage}`
//       );
//   return response.data;
// };
import axios from 'axios';

export const fetchData = async (query, page) => {    
    const responce = await axios(`https://api.unsplash.com/search/photos/?client_id=f-gCGpBlDecAOG_Hwuo8ockjZKFoU3io54O3WmbOo0A`, {
        params: {
            query,
            page,
            per_page: 10,
        }
    });   
    return responce.data;
}