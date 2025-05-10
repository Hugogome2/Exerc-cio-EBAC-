            language: pt

            Como cliente da EBAC-SHOP
            Quero concluir meu cadastro
            Para finalizar minha compra

            Critérios de Aceitação:
            1 – Deve ser cadastrado com todos os dados obrigatórios, marcado com asteriscos
            2 – Não deve permitir campo e-mail com formato inválido. Sistema deve inserir uma mensagem de erro
            3 – Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta.

            Funcionalidade: Tela de Cadastro - CheckOut

            Contexto: Dado que o cliente esteja na tela de cadastro

            Cenario: 1- Dados obrigatorios
            Quando o cliente insere nome:João, sobrenome:Da silva, pais: Narnia , endereço: Rua: Jose das neves , cidade: Leão , cep: 098234234, telefone:(00)99910023454 e endereço-de-e-mail: João@jubiter.com.br
            que são dados obrigatorios para cadastro
            Então o sistema deve concluir o cadastro

            Esquema do Cenario: Dados obrigaorios
            Quando o cliente insere nome:<nome>, sobrenome:<sobrenome>, pais: <pais>, endereço:<endereço>, cidade: <cidade>, cep: <cep>, telefone: <telefone> e endereço-de-e-mail: <endereço-de-e-mail>
            Então o sistema deve concluir o cadastro.

            Exemplos:
            | nome   | sobrenome | pais   | endereço            | cidade    | cep       | telefone        | endereço-de-e-mail    |
            | João   | Da silva  | Narnia | rua: Jose das neves | Leão      | 098234234 | (00)99914323454 | João@jubiter.com.br   |
            | Maria  | Da silva  | Narnia | rua: Jose das neves | Tigre     | 098434234 | (00)99910026544 | Maria@jubiter.com.br  |
            | Cacio  | Da silva  | Narnia | rua: Jose das neves | Cobra     | 09544234  | (00)99987623454 | Cacio@jubiter.com.br  |
            | Luis   | Da silva  | Narnia | rua: Jose das neves | Peixe     | 096534234 | (00)99910098454 | Luis@jubiter.com.br   |
            | Fred   | Da silva  | Narnia | rua: Jose das neves | Borboleta | 098734234 | (00)99910045464 | Fred@jubiter.com.br   |
            | Thiago | Da silva  | Narnia | rua: Jose das neves | Cachorro  | 098094234 | (00)99911234454 | Thiago@jubiter.com.br |

            Cenário: E-mail Inválido
            Dado que o cliente esteja na tela de cadastro
            Quando o cliente insire o e-mail com formato inválido
            Então o sistema de exibir uma mensagem de erro "E-mail com formato enválido"

            Cenário: Cadastros com campos vazios
            Dado que o cliente esteja na tela de cadastro com os seguintes dados
            | nome   | sobrenome | pais   | endereço            | cidade    | cep       | telefone        | endereço-de-e-mail    |
            | Thiago | Da silva  | Narnia | rua: Jose das neves |           | 098094234 | (00)99911234454 | Thiago@jubiter.com.br |
            | Fred   |           | Narnia | rua: Jose das neves | Borboleta | 098734234 | (00)99910045464 | Fred@jubiter.com.br   |
            | Cacio  | Da silva  | Narnia | rua: Jose das neves | Cobra     |           | (00)99987623454 | Cacio@jubiter.com.br  |
            Quando o cliente tentar realizar o cadastro com campos vazios
            Então o sistema deve exibir mensagem de alerta "Por favor, preencha todos os campos obrigatórios"

            |---


