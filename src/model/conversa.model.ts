class Conteudo{
    autor: string;
    text: string;
}

export class ConversaModel{
    key?:string;
    qtnMsgNotReadByUserA?: number;
    qtnMsgNotReadByUserB?: number;
    conteudo: Array<Conteudo> = new Array<Conteudo>();
    criador: string;
}