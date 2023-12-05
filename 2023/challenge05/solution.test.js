const cyberReindeer = require('./solution.js')

test('Test Case 1', () => {
    expect(cyberReindeer('S..|...|..', 10)).toEqual([
        'S..|...|..', // estado inicial
        '.S.|...|..', // avanza el trineo la carretera
        '..S|...|..', // avanza el trineo la carretera
        '..S|...|..', // el trineo para en la barrera
        '..S|...|..', // el trineo para en la barrera
        '...S...*..', // se abre la barrera, el trineo avanza
        '...*S..*..', // avanza el trineo la carretera
        '...*.S.*..', // avanza el trineo la carretera
        '...*..S*..', // avanza el trineo la carretera
        '...*...S..', // avanza por la barrera abierta
      ])
})
