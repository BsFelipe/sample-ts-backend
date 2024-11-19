import CustomError from "../../utils/customError";

class RegisterService {
  async create(name: string, cpf: string, email: string) {
    try {
      if(email.length < 10) {
        throw new CustomError('invalidBodyRequest', 409);
      }
      return { name, cpf, email };
    } catch (error) {
      console.error('error service: ', error);
      throw error;
    }
  }
}

export default new RegisterService();
