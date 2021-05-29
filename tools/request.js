

import axios, {AxiosRequestConfig} from 'axios';


export class ModuleRequestProvider {

    static async get(url, params) {

        try {
            const requestOptions = {
                headers: {'Content-Type': "application/json"},
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
                params: params
            }

            const response = await axios.get(url, requestOptions);
            if (response.status > 226)
                return {isSuccess: false, message: response.statusText, data: response.data}

            return {isSuccess: true, message: undefined, data: response.data}

        } catch (error) {
            return {isSuccess: false, message: error.response ? error.response.data : "Invalid Data", data: null}
        }
    }

    static async post(url, params, data) {


        try {
            const requestOptions = {
                headers: {'Content-Type': "application/json"},
                params: params
            }

            const response = await axios.post(url, data, requestOptions);
            if (response.status > 226)
                return {isSuccess: false, message: response.statusText, data: response.data}

            return {isSuccess: true, message: undefined, data: response.data}

        } catch (error) {
            return {isSuccess: false, message: error.response ? error.response.data : "Invalid Data", data: null}
        }
    }

    static async put(url, params, data) {

        try {
            const requestOptions = {
                headers: {'Content-Type': "application/json"},
                params: params
            }
            const response = await axios.put(url, data, requestOptions);
            if (response.status > 226)
                return {isSuccess: false, message: response.statusText, data: response.data}

            return {isSuccess: true, message: undefined, data: response.data}
        } catch (error) {
            return {isSuccess: false, message: error.response ? error.response.data : "Invalid Data", data: null}
        }
    }

    static async delete(url, params, data) {

        try {
            const requestOptions = {
                headers: {'Content-Type': "application/json"},
                data: data,
                params: params
            }

            const response = await axios.delete(url, requestOptions);
            if (response.status > 226)
                return {isSuccess: false, message: response.statusText}


            return {isSuccess: true, message: undefined}
        } catch (error) {
            return {isSuccess: false, message: error.response ? error.response.data : "Invalid Data"}
        }
    }
}
