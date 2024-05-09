import axiosInstance from "./axiosInstance";

class LoginService {
    async realizarLogin(data){
        const response = await axiosInstance.post("login/", data)
        return response.data; // retorna aqui Acess e refresh
    }
}

export default new LoginService(); 