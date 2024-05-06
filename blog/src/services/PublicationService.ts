import axiosInstance from "./axiosInstance";

class PublicationService {
    async listarPublicacoes(){
        const response= await axiosInstance.get("publicacao/");
        return response;
    }
}

export default new PublicationService();