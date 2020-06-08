const {
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  capitalize,
  yeller,
  initials,
} = require('./main');


describe('exclaim', () => {
  it('adds an exclamation point at the end of the given string', () => {
    expect(exclaim('hello')).toBe('hello!')
  })

  it('adds a second exclamation point if there already is one', () => {
    expect(exclaim('hello!')).toBe('hello!!')
  })
})

describe('firstCharacter', () => {
  it('returns only the first character of a string', () => {
    expect(firstCharacter('Colin')).toBe('C');
  })

  it('returns a space if the string begins with one', () => {
    expect(firstCharacter(' Spacey McSpacerson')).toBe(' ');
  })
})

describe('lastCharacter', () => {
  it('returns only the last character of a string', () => {
    expect(lastCharacter('mcLasterton')).toBe('n');
  })

  it('returns a space if the string ends with one', () => {
    expect(lastCharacter('Spacey McSpacerson ')).toBe(' ')
  })
})

describe('oneCharacter', () => {
  it('returns an arbitrary character', () => {
    expect(oneCharacter('hello there', 8)).toBe('e');
  })
})

describe('twoCharacters', () => {
  it('returns arbitrary characters from the given string', () => {
    expect(twoCharacters('I want a bagel!', 2, 11)).toBe('wg')
  })

})

describe('capitalize', () => {
  it('returns upper cased version of a string', () => {
    expect(capitalize('Speed Racer Was Great'))
      .toBe('SPEED RACER WAS GREAT');
    });
});

describe('yeller', () => {
  it('adds three exclamation points and capitalizes', () => {
    expect(yeller('hey')).toBe('HEY!!!');
  })
})

describe('initials', () => {
  it('returns the initials of a full name', () => {
    expect(initials('Herman Melville')).toBe('H.M.')
  });

  it('returns the first initial twice if given only one name', () => {
    expect(initials('Colin')).toBe('C.C.');
  })

  it('returns only two initials if given three names', () => {
    expect(initials('Colin Raymond Jaffe')).toBe('C.R.')
  })
})
