import { TestBed } from '@angular/core/testing';

import { SendNotificationsService } from './send-notifications.service';

describe('SendNotificationsService', () => {
  let service: SendNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
