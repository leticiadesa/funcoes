
// Strings
import { escreverBomDia } from './Concatenação String/ConcatenacaoString1.js'
import { juntarNome } from './Concatenação String/ConcatenacaoString2.js'

// Variáveis
import { declararLet } from './Declaração de Variaveis/DeclaracaoVariaveisLet.js'
import { declararVar } from './Declaração de Variaveis/DeclaracaoVariaveisVar.js'
import { declararConst } from './Declaração de Variaveis/DeclaraçaoVariaveisConst.js'

// Condicionais
import { verificarNumero } from './Estrutura Condicional/IfComposto.js'
import { verificarAprovacao } from './Estrutura Condicional/IfSimples.js'
import { verificarParOuImpar } from './Estrutura Condicional/IfTradicional.js'
import { verificarDiaSemana } from './Estrutura Condicional/SwitchCase.js'
import { verificarResultado } from './Estrutura Condicional/Ternario.js'

// Laços
import { mostrarPares } from './Laço de Repetição/DoWhile.js'
import { mostrarNumeros } from './Laço de Repetição/DoWhile2.js'
import { mostrarTabuada } from './Laço de Repetição/For.js'
import { mostrarNumerosVetor } from './Laço de Repetição/ForEach.js'
import { mostrarDobro } from './Laço de Repetição/Map.js'
import { mostrarHelloWorld } from './Laço de Repetição/While.js'
import { mostrarTabuada1 } from './Laço de Repetição/While2.js'

// Aritméticos
import { somar, subtrair, multiplicar, dividir, potencia, raizQuadrada, restoDivisao } from './Operadores Aritméticos/operadoresAritmeticos.js'

// Lógicos
import { verificarE } from './Operadores Lógicos/OpLogicoE.js'
import { verificarNao } from './Operadores Lógicos/OpLogicoNot.js'
import { verificarOu } from './Operadores Lógicos/OpLogicoOu.js'

// Relacionais
import { diferente, igual, maior, maiorOuIgual, menor, menorOuIgual } from './OperadoresRelacionais/index.js'

// Vetores
import { acumulacao, adicionarElemento, buscarElemento, removerElemento } from './Vetores/index.js'


function titulo(nome) {
    console.log('\n----------------')
    console.log(nome)
    console.log('----------------')
}


// Strings
titulo('Concatenação de String')
console.log(escreverBomDia())
console.log(juntarNome())

// Variáveis
titulo('Declaração de Variáveis')
console.log(declararLet())
console.log(declararVar())
console.log(declararConst())

// Condicionais
titulo('Estrutura Condicional')
console.log(verificarNumero(10))
console.log(verificarAprovacao(2))
console.log(verificarParOuImpar(5))
console.log(verificarDiaSemana(1))
console.log(verificarResultado(1))

// Laços
titulo('Laço de Repetição')
console.log(mostrarPares())
console.log(mostrarNumeros())
console.log(mostrarTabuada(10))
console.log(mostrarNumerosVetor())
console.log(mostrarDobro())
console.log(mostrarHelloWorld())
console.log(mostrarTabuada1())

// Aritméticos
titulo('Operadores Aritméticos')
console.log(somar(5, 3))
console.log(subtrair(10, 4))
console.log(multiplicar(2, 6))
console.log(dividir(12, 3))
console.log(potencia(2, 3))
console.log(raizQuadrada(16))
console.log(restoDivisao(10, 3))

// Lógicos
titulo('Operadores Lógicos')
console.log(verificarE(true, false))
console.log(verificarOu(true, false))
console.log(verificarNao(true))

// Relacionais
titulo('Operadores Relacionais')
console.log(diferente(5, 3))
console.log(igual(4, 4))
console.log(maior(10, 5))
console.log(maiorOuIgual(5, 5))
console.log(menorOuIgual(3, 8))
console.log(menor(2, 9))

// Vetores
titulo('Vetores')
console.log(acumulacao())
console.log(adicionarElemento())
console.log(buscarElemento())
console.log(removerElemento())
