const isAnagram = require('./Anagram')

describe('isAnagram', () => {
    it('Проверям, сколько параметров принимает функция', () => {
        const argsLen = isAnagram.length
        expect(argsLen).toBe(2)
    });

    it('Проверям, что слова стационар и соратница являются анаграмами', () => {
        expect(isAnagram('стационар', 'соратница')).toBeTruthy();
    });

    it('Проверям, что слова ТЕСТ и тсет являются анаграмами', () => {
        expect(isAnagram('ТЕСТ', 'тсет')).toBeTruthy();
    });

    it('Проверям, что слова ляляля и тратата не являются анаграмами', () => {
        expect(isAnagram('ляляля', 'тратата')).not.toBeTruthy();
    });
  });