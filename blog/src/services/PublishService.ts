import axiosInstance from "./axiosInstance";

class PublishService {
    async criarPublicacao(titulo: string, imagem: string, descricao: string){
        try {
            const response = await axiosInstance.post("publicacao/", { titulo, imagem, descricao})
            return response.data;
        } catch (error) {
            return null;
        }
    }
}

export default new PublishService(); 