Conflitos e Alterações sugeridas por hora:

## Nomenclatura padronizada
- nomes de métodos em inglês e português
    - por exemplo, ao invés de readCompra, pode ser buscarCompraPorId, ou deixar tudo em inglês 
- criar métodos utilitários dentro do controller -> mover para uma pasta separada (utils - e.g, hasNumber)

É sempre importante ter consistência na nomenclatura de métodos e variáveis para gerar uma certa previsibilidade
no código e facilitar a leitura e compreensão do contexto de cada parte dele. 
Escolher qual língua escrever: inglês ou português.


## Evitar repetições quando possível
Muito importante para evitar refactorações imensas. Hoje tu tens menos de 10 endpoints, mas poderia ser um projeto com centenas.
Um exemplo bacana de evitar repetição é criar uma função para criar o retorno de um endpoint caso a estrutura se repita(geralmente se repete).
Por exemplo:

function ok = (data) => {
    return {
        body: data,
        // criar um enum com os status code possíveis
        statusCode: ENUM_HTTP_STATUS_CODE.200  
    }
}

function badRequest = (error) => {
    return {
        body: error,
        statusCode: ENUM_HTTP_STATUS_CODE.400
    }
}

# Fluxo de trabalho

O fluxo de trabalho de um dev em uma empresa estabelecida, em geral é:

recebe uma instrução de alteração (reunião) -> recebe/cria os requisitos da alteração -> cria a proposta de alteração -> revisão -> resolução de problemas ou mesclar código da solução

Fazer essas alterações em branches novos, seguindo os  por exemplo:

## Alteração dos nomes dos métodos do controller de usuarios
refactor/mudar-nomenclatura-controller-usuarios

Em outro branch, alterar a nomenclatura dos métodos controller de compras:
refactor/mudar-nomenclatura-controller-compras

Quando cada for feito o push para cada um desses branches, o Github criará um aviso
de que um branch concorrente foi criado. Aí será possível criar um Pull Request, que de uma forma
bem objetiva significa uma "proposta de alteração de código".

Esse fluxo é padrão para qualquer projeto organizado, para evitar que qualquer pessoas faça alterações
no branch principal.