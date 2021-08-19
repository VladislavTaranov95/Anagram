import './css/style.scss'
const isAnagram = require('./Anagram')

const btn = document.querySelector('.card__btn')
const inputText = document.querySelector('.card__input')
const resultText = document.querySelector('.card__result')
const errorText = document.querySelector('.error')

btn.addEventListener('click', () => {
    let inputStr = inputText.value
    let strArr = inputText.value.split(',')
    errorText.hidden = false
    if(inputStr === '') {
        errorText.textContent = '! Слова не введены'
        resultText.textContent = ''
        inputText.value = ''
    }
    else if(strArr.length !== 2) {
        errorText.textContent = '! Требуется ввести 2 слова через запятую'
        resultText.textContent = ''
        inputText.value = ''
    }  
    else {
        let result = isAnagram(strArr[0], strArr[1])

        errorText.hidden = true
        inputText.value = ''

        resultText.textContent = result

        if(result) {
            resultText.classList.add('card__result-true');
        }
        else {
            resultText.classList.add('card__result-false');
        }
    }
})

function anagram(firstStr, secondStr) {
    return firstStr.replace(/\s+/g, '').split('').sort().join('') === secondStr.replace(/\s+/g, '').split('').sort().join('')
}

module.exports = anagram;