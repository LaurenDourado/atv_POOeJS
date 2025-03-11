# *Prática de Programação Orientada a Objetos (POO) - Hospital* 🏥
Este repositório contém um exemplo de Programação Orientada a Objetos (POO) utilizando JavaScript, com foco na criação de um sistema básico para um hospital. A página da web apresenta a interação entre funcionários, alunos e professores, demonstrando o uso de conceitos como herança, polimorfismo e encapsulamento.

Além disso, o código inclui animações em CSS para melhorar a experiência visual da página.

### Funcionalidades
 -Funcionários do hospital: Lista dinâmica gerada usando o método polimórfico onde cada tipo de funcionário diz algo diferente ao ser invocado.
- Alunos e Professores: Demonstra o uso de herança para alunos e professores, com características e comportamentos diferentes.
- Encapsulamento: Protege dados sensíveis (como um atributo privado) para garantir que o sistema seja seguro.
- Animação no título: O título da página possui uma animação de brilho para criar uma experiência visual atraente.
- Interatividade com JavaScript: Exibição dinâmica das listas de funcionários, alunos e professores.

### Tecnologias Utilizadas
- HTML: Estrutura básica da página web.
- CSS: Estilo e animações para a página.
- JavaScript: Lógica de Programação Orientada a Objetos, interatividade e manipulação do DOM.

### Explicação do Código

- JavaScript:
Funcionários: A classe Funcionario é a classe base, e as subclasses herdam de Funcionario, como Medico, Enfermeiro, etc. Cada um implementa o método falar() de forma polimórfica.
Alunos e Professores: Usamos a herança para criar Aluno e Professor como subclasses de uma classe base.
Encapsulamento: Atributos como o nome de funcionários podem ser acessados e modificados com métodos públicos, mas a implementação interna é protegida.

- CSS:
O título tem um gradiente azul com uma animação de brilho que se altera quando o usuário passa o mouse sobre ele.
As listas de funcionários, alunos e professores têm um estilo visual interativo, com hover nos itens e sombras para melhorar a apresentação.

- HTML:
A estrutura contém títulos e listas (<ul>) para exibir os funcionários, alunos e professores.
O código JavaScript é carregado no final da página para garantir que todos os elementos do DOM estejam carregados antes da manipulação.
