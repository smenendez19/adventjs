const fixLetter = require('./solution.js');

test('Test Case 1', () => {
    expect(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
        .toStrictEqual("Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.");
})

test('Test Case 2', () => {
    expect(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
        .toStrictEqual("Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?");
})

test('Test Case 3', () => {
    expect(fixLetter('  hi,santa claus. are you there ?   '))
        .toStrictEqual("Hi, Santa Claus. Are you there?");
})

test('Test Case 4', () => {
    expect(fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! "))
        .toStrictEqual("Hey Santa Claus. I want a bike. I want a videogame!");
})