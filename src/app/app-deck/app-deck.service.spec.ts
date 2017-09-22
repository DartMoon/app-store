import { TestBed, inject } from '@angular/core/testing';

import { AppDeckService } from './app-deck.service';

describe('AppDeckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDeckService]
    });
  });

  it('should be created', inject([AppDeckService], (service: AppDeckService) => {
    expect(service).toBeTruthy();
  }));
});
