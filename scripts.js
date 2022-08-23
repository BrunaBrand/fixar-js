// 1. Declare uma variável de nome weight

// let weight

// 2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

/*
   3. Declare uma variável e atribua valores para cada um dos dados:

   * name: String
   * age: Number (integer)
   * stars: Number (float)
   * isSubscribed: Boolean

*/

// let name = 'Bruna'
// let age = 25
// let stars = 4.8
// let isSubscribed = true

/*
   4. A variável student abaixp é de que tipo de dado?

   
   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
   
   4.2 Mostre no console a seguinte mensagem:
   <name> de idade <age> pesa <weight> kg.

*/
let student = {
  name: 'Bruna',
  age: 25,
  weight: 61
}

// console.log(
//   `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
// )

/*
   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
 */

let students = []

/*
   6. Reatribua valor para variável acima, colocando dentro dela o objeto student da questão 4. (Não copie e cole o objeto, mas use o objeto criado e insira ele no array.)
*/

students = [student]
console.log(students)

/*
   7. Coloque no console o valor da posição zero do Array acima
*/

// console.log(students[0])

/*
   8. Crie um novo student e coloque na posição 1 do Array students
*/

const gabriel = {
  name: 'Gabriel',
  age: 29,
  weight: 70
}

students[1] = gabriel

//or

// students = [student, gabriel]
console.log(students)
