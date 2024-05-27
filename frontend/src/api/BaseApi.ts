import axios from 'axios';

export default abstract class BaseApi {

    static BASE_URL = process.env.REACT_APP_BASE_URL;

    performGet(url: string) {
        return axios.get(BaseApi.BASE_URL + url, { withCredentials: false })
            .then(response => {
                console.log(`Successfull response to url ${url}. Response: `, response.data);
                return response.data;
            })
            .catch(err => {
                console.log(`error while fetching data from url: ${url}`, err)
            });
    }

    performPost(url: string, body: any) {
        return axios.post(BaseApi.BASE_URL + url, body, { withCredentials: false })
            .then(response => {
                console.log(`Successful POST response to url ${url}. Response: `, response.data);
                return response.data;
            })
            .catch(err => {
                console.log(`error while post data to url: ${url}`, err)
            });
    }

    performDelete(url: string) {
        return axios.delete(BaseApi.BASE_URL + url, { withCredentials: false })
            .then(response => {
                console.log(`Successful delete response to url ${url}. Response: `, response.data);
                return response.data;
            })
            .catch(err => {
                console.log(`error while fetching data from url: ${url}`, err)
            });
    }

    performEdit(url: string, body: any) {
        return axios.put(BaseApi.BASE_URL + url, body, { withCredentials: false })
            .then(response => {
                console.log(`Successful edit response to url ${url}. Response: `, response.data);
                return response.data;
            })
            .catch(err => {
                console.log(`error while fetching data from url: ${url}`, err)
            });
    }

}