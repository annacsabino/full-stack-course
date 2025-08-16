const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Cotação da moeda para o dia
const USDPrice = 4.87
const EURPrice = 5.32
const GBPPrice = 6.08


// Formatar moeda
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}


//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    total = formatCurrencyBRL(total).replace('R$', '')

    result.textContent = `${total} Reais`

    footer.classList.add('show-result')

  } catch (error) {
    footer.classList.remove('show-result')
    console.log(error)
    alert('Nao foi possível converter a moeda. Tente novamente mais tarde.')
  }
}


// Manipulando o input amount para receber somente números
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Capturando o evento de submit do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount, USDPrice, 'US$')
      break
    case 'EUR':
      convertCurrency(amount, EURPrice, '€')
      break
    case 'GBP':
      convertCurrency(amount, GBPPrice, '£')
      break
  }
})

