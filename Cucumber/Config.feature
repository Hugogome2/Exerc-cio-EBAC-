            language: pt

            Historia do usuário
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            e escolher a quantidade
            Para depois inserir no carrinho

            Critérios de Aceitação:
            1 – Seleções de cor, tamanho e quantidade devem ser obrigatórios
            2 – Deve permitir apenas 10 produtos por venda
            3 –Quando eu clicar no botão “limpar” deve voltar ao estado original


            Funcionalidade: configurar produto

            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            e escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que o cliente acesse a página do produto camiseta

            Cenário: Adicionar produto ao carrinho
            Quando o cliente escolher o tamanho "M", cor "Blue" e "4" quantidade
            Então deve exibir a mensagem "Produto adicionado ao carrinho com sucesso".

            Cenário: Quantidade invalida
            Quando o cliente selecionar uma quantidade maior que 10 unidades
            Então deve exibir a mensagem "Quantidade máxima permitida é 10 unidades".

            Cenário: Limpar configuração
            Quando o cliente configurar o produto com o tamanho "L", cor "Orange" e "8" quantidade
            E clicar no botão "Limpar"
            Então deve limpar as configurações de tamanho, de cor e quantidade.

            Esquema do Cenário: Configurar produto com diferentes opções
            Quando o cliente configurar o produto com o tamanho: <tamanho>, a cor:<cor> e a <quantidade>
            Então Produto deve ser adicionado ao carrinho com sucesso.

            Exemplos:
            | tamanho | cor      | quantidade |
            | "XS"    | "Blue"   | "2"        |
            | "S"     | "Orange" | "4"        |
            | "M"     | "Red"    | "6"        |
            | "L"     | "Orange" | "8"        |
            | "XL"    | "Red"    | "10"       |
