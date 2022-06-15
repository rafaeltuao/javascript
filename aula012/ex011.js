var idade = 17
console.log ( `Sua idade é ${idade}`)
if (idade <= 16) {
    console.log ('Não vota')
} else if (idade <= 18 || idade > 60) {
    console.log ('Voto opcional')
} else if (idade >= 18) {
    console.log ('Voto obrigatório')
}