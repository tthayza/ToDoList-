class Tarefa {
  descricao: string
  concluida: boolean = false
  prioridade?: string

  constructor(descricao: string, prioridade?: string) {
    this.descricao = descricao
    this.prioridade = prioridade
  }

  marcarConcluida() {
    this.concluida = true
  }

  toString() {
    return `Descrição da Tarefa: ${this.descricao} Status:${
      this.concluida === true ? 'Concluída ✔' : 'Pendente'
    }`
  }
}

class ListaDeTarefas {
  tarefas: Tarefa[] = []

  adicionarTarefa(descricaoTarefa: string) {
    const tarefaAtual = new Tarefa(descricaoTarefa)
    this.tarefas.push(tarefaAtual)
  }

  listarTarefas() {
    return this.tarefas.map((tarefa) => tarefa.toString()).join('\n')
  }
}

class ListaPrioritaria extends ListaDeTarefas {
  adicionarTarefaPrioritaria(descricao: string, prioridade: string) {
    const tarefaPrioritaria = new Tarefa(descricao, prioridade)
    this.tarefas.push(tarefaPrioritaria)
  }

  listarTarefas() {
    return this.tarefas
      .map((tarefa) => `${tarefa.toString()} Prioridade: ${tarefa.prioridade}`)
      .join('\n')
  }
}

console.log('--- Tarefa 1 ---')
const tarefa1 = new Tarefa('Consumir API', 'Média')
console.log(tarefa1.toString())
tarefa1.marcarConcluida()
console.log(tarefa1)
console.log(tarefa1.toString())

console.log('--- Tarefa 2 ---')
const tarefa2 = new Tarefa('Finalizar desafio')
console.log(tarefa2.toString())
tarefa2.marcarConcluida()
console.log(tarefa2)
console.log(tarefa2.toString())

console.log('--- Tarefa 3 ---')
const tarefa3 = new Tarefa('Assistir aula de Angular', 'Alta')
console.log(tarefa3.toString())
tarefa3.marcarConcluida()
console.log(tarefa3)
console.log(tarefa3.toString())

console.log('--- Lista de Tarefas ---')
const lista = new ListaDeTarefas()
lista.adicionarTarefa('Estudar POO')
lista.adicionarTarefa('Estudar TS')
lista.adicionarTarefa('Estudar SQL')
lista.adicionarTarefa('Estudar Node')
console.log(lista.listarTarefas())

console.log('--- Tarefas Prioritárias ---')
const listaPrioritaria = new ListaPrioritaria()
listaPrioritaria.adicionarTarefaPrioritaria(
  'Brincar com o doguinho',
  'Altíssima'
)
listaPrioritaria.adicionarTarefaPrioritaria('Estudar inglês', 'Média')
listaPrioritaria.adicionarTarefaPrioritaria('Tirar tempo de lazer', 'Média')
listaPrioritaria.adicionarTarefaPrioritaria('Assistir Bake Off', 'Baixa')
console.log(listaPrioritaria.listarTarefas())
