import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show a notification', (done) => {
    service.show('Test message', 'info');
    
    service.notifications$.subscribe(notifications => {
      expect(notifications.length).toBe(1);
      expect(notifications[0].message).toBe('Test message');
      done();
    });
  });

  it('should auto-remove notification after duration', fakeAsync(() => {
    service.show('Test', 'info', 2000);
    
    tick(2000);
    
    service.notifications$.subscribe(notifications => {
      expect(notifications.length).toBe(0);
    });
  }));

  it('should show success notification with correct duration', (done) => {
    service.success('Done');
    
    service.notifications$.subscribe(notifications => {
      expect(notifications[0].type).toBe('success');
      expect(notifications[0].duration).toBe(3000);
      done();
    });
  });

  it('should show error notification with longer duration', (done) => {
    service.error('Error');
    
    service.notifications$.subscribe(notifications => {
      expect(notifications[0].type).toBe('error');
      expect(notifications[0].duration).toBe(4000);
      done();
    });
  });
});
