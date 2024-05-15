import axiosInstance from "./axiosInstance";

class PublishService {
    async criarPublicacao(data){
        const response= await axiosInstance.post("publicacao/", data);
        return response.data;
       
    }
}

export default new PublishService(); 