export interface ITarefa {
    _id: string;
    tipo: string;
    linha: string;
    maquina: string;
    data: string;
    hora: string;
    solicitante: string;
    descricao: string;
    servico?: string;
    material?: string;
    __v?: number;
}