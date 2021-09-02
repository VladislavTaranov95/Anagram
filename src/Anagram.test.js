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

    it('Проверям, что строки "Я в мире — сирота.1213!" и "34435Я в Риме — Ариост." не являются анаграмами', () => {
        expect(isAnagram('Я в мире — сирота.1213!', '34435Я в Риме — Ариост.')).not.toBeTruthy();
    });

    it('Проверям, что строки "Я в мире - сирота!" и "Я в Риме — Ариост." являются анаграмами', () => {
        expect(isAnagram('Я в мире - сирота!', 'Я в Риме — Ариост.')).toBeTruthy();
    });

    it('Проверям, что строки "javascript" и "javascript" не являются анаграмами', () => {
        expect(isAnagram('javascript', 'javascript')).not.toBeTruthy();
    });

    it('Проверям, что 123454 и 34567 не являются анаграмами', () => {
        expect(isAnagram(123454, 34567)).not.toBeTruthy();
    });
  });