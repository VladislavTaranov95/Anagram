function isAnagram(firstStr, secondStr) {
    return firstStr.toLowerCase().replace(/\s+/g, '').split('').sort().join('') === secondStr.toLowerCase().replace(/\s+/g, '').split('').sort().join('')
}

module.exports = isAnagram;