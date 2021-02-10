export interface Cliente {
  id?: number,
  nome: string,
  email: string,
  cpf: string,
  data: string;
  endereco: {
    cep: number,
    numero: number,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
  },
  phone: string
}
