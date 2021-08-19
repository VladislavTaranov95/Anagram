const isAnagram = require('./Anagram')

test('Проверям, что слова стационар и соратница являются анаграмами', () => {
    expect(isAnagram('стационар', 'соратница')).toBe(true);
})