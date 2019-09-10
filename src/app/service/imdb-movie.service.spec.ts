import { TestBed } from '@angular/core/testing';

import { ImdbMovieService } from './imdb-movie.service';

describe('ImdbMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImdbMovieService = TestBed.get(ImdbMovieService);
    expect(service).toBeTruthy();
  });
});
