'use strict';

const { Movies } = require('./movies');
const { sortTitle, sortYear, removeWords, compareTitle, compareYear } = require('./sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  it('can remove A, An, The when comparing titles', () => {
    const title = 'The Intouchables';
    const result = removeWords(title);

    expect(result).toBe('Intouchables');
  });

  it('can successfully compare movie title', () => {
    const movieTitle1 = 'Beetlejuice';
    const movieTitle2 = 'Memento';

    const result = compareTitle({ title: movieTitle1}, { title: movieTitle2 });
    expect(result).toBeLessThan(0);
  });

  it('can successfully compare movie year', () => {
    const movieYear1 = 1988;
    const movieYear2 = 1984;

    const result = compareYear({ year: movieYear1 }, {year: movieYear2 });
    expect(result).toBeLessThan(0);
  });
});
