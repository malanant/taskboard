import {
  NotificationService,
  init_notification_service
} from "./chunk-KM6STP66.js";
import {
  TestBed,
  fakeAsync,
  init_testing,
  tick
} from "./chunk-TEVXXR43.js";
import "./chunk-TTULUY32.js";

// src/app/core/services/notification-simple.spec.ts
init_testing();
init_notification_service();
describe("NotificationService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should show a notification", (done) => {
    service.show("Test message", "info");
    service.notifications$.subscribe((notifications) => {
      expect(notifications.length).toBe(1);
      expect(notifications[0].message).toBe("Test message");
      done();
    });
  });
  it("should auto-remove notification after duration", fakeAsync(() => {
    service.show("Test", "info", 2e3);
    tick(2e3);
    service.notifications$.subscribe((notifications) => {
      expect(notifications.length).toBe(0);
    });
  }));
  it("should show success notification with correct duration", (done) => {
    service.success("Done");
    service.notifications$.subscribe((notifications) => {
      expect(notifications[0].type).toBe("success");
      expect(notifications[0].duration).toBe(3e3);
      done();
    });
  });
  it("should show error notification with longer duration", (done) => {
    service.error("Error");
    service.notifications$.subscribe((notifications) => {
      expect(notifications[0].type).toBe("error");
      expect(notifications[0].duration).toBe(4e3);
      done();
    });
  });
});
//# sourceMappingURL=spec-notification-simple.spec.js.map
