function isAnagram(firstStr, secondStr) {
    return firstStr.toLowerCase().replace(/[^a-zа-яё]/gi,"").split('').sort().join('') === secondStr.toLowerCase().replace(/[^a-zа-яё]/gi,"").split('').sort().join('')
}

module.exports = isAnagram;