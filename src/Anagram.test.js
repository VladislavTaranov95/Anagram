const isAnagram = require('./Anagram')

describe('isAnagram', () => {
    it('Проверям, что слова стационар и соратница являются анаграмами', () => {
        expect(isAnagram('стационар', 'соратница')).toBeTruthy();
    });

    it('Проверям, что слова ТЕСТ и тсет являются анаграмами', () => {
        expect(isAnagram('ТЕСТ', 'тсет')).toBeTruthy();
    });
  });