# talktool
Aplicação de troca de mensagem

# Casos de uso
[CU1] Login
[CU2] Adicionar Contato
[CU3] Criar conversa
[CU4] Abrir conversa
[CU5] Enviar mensagem de texto
[CU6] Enviar mensagem de audio
[CU7] Enviar mensagem de video
[CU8] Receber notificacao

# Requisitos não funcionais
[RNF1] Manter dados do usuário, mesmo estando off-line
[RNF2] Usar recurso de armazenamente local para minimizar acesso a rede

## Login
[IMPLEMENTADO] Realiza login usando o sistema de login do google.
[PENDENCIA] Falta implementar os casos de falha (apresentar uma mensagem ao usuario)

## Abrir uma coversa
[IMPLEMENTADO] Abrir uma conversa para trocar mensagem de texto

## Numero de mensagens não lida
## Adiciona novo contato
[IMPLEMENTADO] Realiza uma busca e gera uma lista de usuarios para ser escolhido
[IMPLEMENTADO] Impedir que um contato já adicionado seja adicionado novamente
## Criar uma conversa
[IMPLEMENTADO] Navega ate a lista de contatos e selecionar um dos contados para conversar. Assim, é criado uma conversa que conectará o usuario remetente com o destinatário
[IMPLEMENTADO] Impedir que uma conversa já criada, seja criada novamente
## Criar PIPE para busca informaçoes dos usuario a partir de sua key
[OBS] O pipe não é adequado nessa situação porque exige um processamente demorado
## Captura audio
## Criar mensagem de audio
## Enviar audio
## Stream de audio