import './css/style.scss'
const isAnagram = require('./Anagram')

const btn = document.querySelector('.card__btn')
const firstInput = document.querySelector('#firstInputValue')
const secondInput = document.querySelector('#secondInputValue')
const resultText = document.querySelector('.card__result')
const errorText = document.querySelector('.error')

btn.addEventListener('click', () => {
    let firstValue = firstInput.value
    let secondValue = secondInput.value

    event.preventDefault()
    
    errorText.hidden = false
    if(firstValue === '' || secondValue === '') {
        errorText.textContent = 'Ошибка: cлова не введены'
        resultText.textContent = ''
        firstInput.value = ''
        secondInput.value = ''
    }
    else if(!isNaN(Number(firstValue)) || !isNaN(Number(secondValue)))
    {
        errorText.textContent = 'Ошибка: некорректно введно значение'
        resultText.textContent = ''
        firstInput.value = ''
        secondInput.value = ''
    }
    else {
        let result = isAnagram(firstValue, secondValue)

        errorText.hidden = true
        firstInput.value = ''
        secondInput.value = ''

        if(result) {
            resultText.textContent = `Слова ${firstValue} и ${secondValue} являются анаграмами.`
            resultText.classList.add('card__result-true');
        }
        else {
            resultText.textContent = `Слова ${firstValue} и ${secondValue} не являются анаграмами.`
            resultText.classList.add('card__result-false');
        }
    }
})

module.exports = anagram;