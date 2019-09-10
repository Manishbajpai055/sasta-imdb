import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbMovieComponent } from './imdb-movie.component';

describe('ImdbMovieComponent', () => {
  let component: ImdbMovieComponent;
  let fixture: ComponentFixture<ImdbMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdbMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
