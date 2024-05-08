import axiosInstance from "./axiosInstance";

class RegisterService {
    async realizarCadastro(data){
        const response= await axiosInstance.post("cadastrar/", data);
        return response.data;
    }
}

export default new RegisterService();