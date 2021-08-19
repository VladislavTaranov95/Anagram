function isAnagram(firstStr, secondStr) {
    return firstStr.replace(/\s+/g, '').split('').sort().join('') === secondStr.replace(/\s+/g, '').split('').sort().join('')
}

module.exports = isAnagram;