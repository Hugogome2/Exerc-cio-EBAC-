language: pt
Historia do usuário

Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Critérios de Aceitação:
1 – Ao inserir dados válidos deve ser direcionado para a tela de checkout
2 – Ao inserir um dos campos inválidos deve exibir uma mensagem de alerta “Usuário ou senha inválidos”

Funcionalidade: Login na Plataforma

Cenário: Visualizar Pedidos
Dado que o cliente acesse a plataforma de autenticação da EBAC
Quando o cliente inserir credenciais válidas
Então deve ser direcionado para a área de pedidos.
#Então deve ser direcionado para a área de checkout.

#No exercicio pede para coloar para a área de checkout mas na historia fala sobre visualizar seu pedidos então coloquei área de pedidos mas também fiz o Então com checkou!!!

Cenário: Credenciais Inválidas
Dado que o cliente acesse a plataforma de autenticação da EBAC
Quando cliente inserir credenciais inválidas
Então deve exibir uma mensagem de alertar "Usuário ou senha inválidos"