// Classe Funcionário com encapsulamento
class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
        let salario = 5000; // Atributo privado, protegido dentro da classe

        // Métodos getter e setter para o salário
        this.getSalario = () => salario;
        this.setSalario = (novoSalario) => {
            if (novoSalario > 0) salario = novoSalario;
            else console.log("Salário inválido.");
        };
    }

    falar() {
        throw new Error("Método 'falar' deve ser implementado pela subclasse.");
    }
}

// Classes derivadas (funcionários específicos) com polimorfismo
class Medico extends Funcionario {
    constructor(nome) {
        super(nome, "Médico");
    }

    falar() {
        return `Olá, sou o Dr. ${this.nome}. Vou cuidar da sua saúde!`;
    }
}

class Enfermeiro extends Funcionario {
    constructor(nome) {
        super(nome, "Enfermeiro");
    }

    falar() {
        return `Oi, sou a ${this.nome}, vou administrar a medicação!`;
    }
}

class Administrador extends Funcionario {
    constructor(nome) {
        super(nome, "Administrador");
    }

    falar() {
        return `Olá, sou ${this.nome}, e minha função é gerenciar o hospital.`;
    }
}

class Recepcionista extends Funcionario {
    constructor(nome) {
        super(nome, "Recepcionista");
    }

    falar() {
        return `Olá, sou ${this.nome}, como posso ajudar você?`;
    }
}

class Tecnico extends Funcionario {
    constructor(nome) {
        super(nome, "Técnico de Laboratório");
    }

    falar() {
        return `Oi, sou ${this.nome}, estou realizando os exames laboratoriais.`;
    }
}

class Psicologo extends Funcionario {
    constructor(nome) {
        super(nome, "Psicólogo");
    }

    falar() {
        return `Olá, sou o Dr. ${this.nome}, estou aqui para te ouvir.`;
    }
}

class Fisioterapeuta extends Funcionario {
    constructor(nome) {
        super(nome, "Fisioterapeuta");
    }

    falar() {
        return `Oi, sou ${this.nome}, vou ajudá-lo com sua reabilitação.`;
    }
}

// Instanciando funcionários
const funcionarios = [
    new Medico("Marcel"),
    new Enfermeiro("Carla"),
    new Administrador("Bagnarioli"),
    new Recepcionista("Cleci"),
    new Tecnico("Daniel"),
    new Psicologo("José"),
    new Fisioterapeuta("Vitória Galego")
];

// Exibindo as falas dos funcionários na página HTML
const listaFuncionarios = document.getElementById("funcionarios");
funcionarios.forEach(funcionario => {
    const li = document.createElement("li");
    li.textContent = funcionario.falar();
    listaFuncionarios.appendChild(li);
});

// 2. **Herança** - Alunos e Professores
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

class Aluno extends Pessoa {
    constructor(nome, curso) {
        super(nome);
        this.curso = curso;
    }

    estudar() {
        return `${this.nome} está estudando para o curso de ${this.curso}.`;
    }
}

class Professor extends Pessoa {
    constructor(nome, disciplina) {
        super(nome);
        this.disciplina = disciplina;
    }

    ensinar() {
        return `${this.nome} está ensinando a disciplina de ${this.disciplina}.`;
    }
}

// Instanciando alunos e professores
const alunos = [
    new Aluno("Pedro", "Medicina"),
    new Aluno("Lucas", "Enfermagem")
];

const professores = [
    new Professor("Dr. Sofia", "Anatomia"),
    new Professor("Dr. Ricardo", "Fisiologia")
];

// Exibindo atividades dos alunos e professores
const listaAlunos = document.getElementById("alunos");
alunos.forEach(aluno => {
    const li = document.createElement("li");
    li.textContent = aluno.estudar();
    listaAlunos.appendChild(li);
});

const listaProfessores = document.getElementById("professores");
professores.forEach(professor => {
    const li = document.createElement("li");
    li.textContent = professor.ensinar();
    listaProfessores.appendChild(li);
});
