class Conteudo{
    autor: string;
    text: string;
}

export class ConversaModel{
    key?:string;
    conteudo: Array<Conteudo> = new Array<Conteudo>();
    criador: string;
}