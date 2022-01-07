
# Boas vindas ao repositório do projeto de testes com a React Testing Library!

O projeto React Testing Library consiste na construção de um ambiente de testes com cobertura de 100% de testes e </br>
que sejam imunes a mutações no código.

### Quem testa os testes?

  Nesse trabalho o avaliador automatizado **testam os testes!** A ideia dele é a seguinte: escrevi casos de teste para a aplicação, e esses testes têm que garantir que a aplicação está funcionando, certo? Pois bem! Se eu quebro uma parte da aplicação, fazendo uma alteração no código, seus testes devem quebrar, certo? Pois é isso que o avaliador faz.
  Como assim? Pense da seguinte forma: nosso avaliador vai navegar por toda a aplicação da Pokédex e vai fazer várias mudanças no código dela **para que ela quebre e pare de funcionar**. Em seguida ele vai rodar seus testes. Caso seus testes não acusem que aplicação está com problemas o avaliador não vai aprovar aquele requisito! Se, para todas as alterações que o avaliador fizer no código da aplicação, os seus testes acusarem problemas, tudo será aprovado! O avaliador garante, portanto, que seus testes testam a aplicação da Pokédex como se deve!
  Na linguagem do avaliador, dizemos que cada mudança que o avaliador faz na sua aplicação é um **mutante**. O avaliador cria vários mutantes e seus testes **devem matar todos!** Se algum mutante sobreviver, temos problemas. Certo? Vamos aos requisitos então!

## Testes

  - Haverá uma pasta chamada `./stryker` com diversos arquivos `nomeArquivo.conf.json`. Cada um deles é a configuração do avaliador para um requisito e ela **não deve ser alterada**. Quando você completar os testes unitarios de um arquivo, rode o comando `npx stryker run ./stryker/nomeDoArquivo.conf.json` para testar aquele arquivo individualmente.
    
