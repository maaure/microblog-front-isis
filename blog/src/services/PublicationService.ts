import axiosInstance from "./axiosInstance";

class PublicationService {
    async listarPublicacoes(){
        const response= await axiosInstance.get("publicacoes");
        return response;
    }
}

export default new PublicationService();