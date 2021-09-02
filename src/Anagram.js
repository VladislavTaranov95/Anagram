function isAnagram(firstStr, secondStr) {
    if(firstStr === secondStr) return false
    else if(!isNaN(Number(firstStr)) || !isNaN(Number(secondStr))) return false
    else return firstStr.toLowerCase().replace(/[^a-zа-яё0-9]/gi,"").split('').sort().join('') === secondStr.toLowerCase().replace(/[^a-zа-яё]/gi,"").split('').sort().join('')
}

module.exports = isAnagram;