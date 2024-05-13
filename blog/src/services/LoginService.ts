import axiosInstance from "./axiosInstance";

class LoginService {
    async realizarLogin(username: string, password: string){
        try {
            const response = await axiosInstance.post("login/", { username, password})
            return response.data; // retorna aqui Acess e refresh
        } catch (error) {
            return null;
        }
    }
}

export default new LoginService(); 