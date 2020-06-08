const {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
} = require('./main');


describe('yell', () => {
  it('adds an exclamation point at the end of the given string', () => {
    expect(yell('hello')).toBe('hello!')
  })

  it('adds a second exclamation point if there already is one', () => {
    expect(yell('hello!')).toBe('hello!!')
  })
})

describe('getFirstCharacter', () => {
  it('returns only the first character of a string', () => {
    expect(getFirstCharacter('Colin')).toBe('C');
  })

  it('returns a space if the string begins with one', () => {
    expect(getFirstCharacter(' Spacey McSpacerson')).toBe(' ');
  })
})

describe('getLastCharacter', () => {
  it('returns only the last character of a string', () => {
    expect(getLastCharacter('mcLasterton')).toBe('n');
  })

  it('returns a space if the string ends with one', () => {
    expect(getLastCharacter('Spacey McSpacerson ')).toBe(' ')
  })
})

describe('getOneCharacter', () => {
  it('returns an arbitrary character', () => {
    expect(getOneCharacter('hello there', 8)).toBe('e');
  })
})

describe('getTwoCharacters', () => {
  it('returns arbitrary characters from the given string', () => {
    expect(getTwoCharacters('I want a bagel!', 2, 11)).toBe('wg')
  })

})

describe('makeCapitalized', () => {
  it('returns upper cased version of a string', () => {
    expect(makeCapitalized('Speed Racer Was Great'))
      .toBe('SPEED RACER WAS GREAT');
    });
});

describe('yellLouder', () => {
  it('adds three exclamation points and capitalizes', () => {
    expect(yellLouder('hey')).toBe('HEY!!!');
  })
})

describe('getInitials', () => {
  it('returns the initials of a full name', () => {
    expect(getInitials('Herman Melville')).toBe('H.M.')
  });

  it('returns the first initial twice if given only one name', () => {
    expect(getInitials('Colin')).toBe('C.C.');
  })

  it('returns only two initials if given three names', () => {
    expect(getInitials('Colin Raymond Jaffe')).toBe('C.R.')
  })
})
