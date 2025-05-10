            language: pt

            Funcionalidade: configurar produto

            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            e escolher a quantidade
            Para depois inserir no carrinho

            Contexto: "Dado que eu acesse a página do produto camiseta"

            Cenario: Adicionar produto ao carrinho
            Quando eu escolher o tamanho "X", cor "Y" e "Z" quantidade
            Então deve exibir a mensagem "Produto adicionado ao carrinho com sucesso".

            Cenario: Quantidade invalida
            Quando eu escolher o tamanho "X", cor "Y" e "Z" quantidade
            E quantidade for maior que 10 unidades
            Então deve exibir a mensagem "Quantidade máxima permitida é 10 unidades".

            Cenario: Limpar configuração
            Quando eu escolher o tamanho "X", cor "Y" e "Z" quantidade
            E clicar no botão "Limpar"
            Então deve limpar as opções de tamanho, de cor e quantidade.

            Esquema do Cenario: Selecionar tamanho, cor e quantidade
            Quando eu escolher o tamanho: <tamanho>, a cor:<cor> e a <quantidade>
            Então deve exibir a mensagem "Produto adicionado ao carrinho com sucesso".

            Exemplos:
            | tamanho | cor      | quantidade |
            | "XS"    | "Blue"   | "2"        |
            | "S"     | "Orange" | "4"        |
            | "M"     | "Red"    | "6"        |
            | "L"     | "Orange" | "8"        |
            | "XL"    | "Red"    | "10"       |
