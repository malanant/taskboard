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

// src/app/core/services/notification.service.spec.ts
init_testing();
init_notification_service();
describe("NotificationService - Suite compl\xE8te avec timers", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });
  describe("Initialisation", () => {
    it("should be created", () => {
      expect(service).toBeTruthy();
    });
    it("should have notifications$ Observable", () => {
      expect(service.notifications$).toBeDefined();
    });
    it("should initialize with empty notifications", (done) => {
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(0);
        done();
      });
    });
  });
  describe("show() - Afficher une notification g\xE9n\xE9rique", () => {
    it("should add a notification", (done) => {
      service.show("Test message");
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(1);
        expect(notifications[0].message).toBe("Test message");
        done();
      });
    });
    it("should set default type to info", (done) => {
      service.show("Test");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].type).toBe("info");
        done();
      });
    });
    it("should set custom type", (done) => {
      service.show("Test", "success");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].type).toBe("success");
        done();
      });
    });
    it("should set default duration to 3000ms", (done) => {
      service.show("Test");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].duration).toBe(3e3);
        done();
      });
    });
    it("should set custom duration", (done) => {
      service.show("Test", "info", 5e3);
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].duration).toBe(5e3);
        done();
      });
    });
    it("should generate unique IDs for notifications", (done) => {
      service.show("Test 1");
      service.show("Test 2");
      service.notifications$.subscribe((notifications) => {
        if (notifications.length === 2) {
          const ids = notifications.map((n) => n.id);
          const uniqueIds = new Set(ids);
          expect(uniqueIds.size).toBe(2);
          done();
        }
      });
    });
    it("should support all notification types", (done) => {
      const types = ["success", "error", "info", "warning"];
      let addedCount = 0;
      types.forEach((type) => {
        service.show(`Test ${type}`, type);
      });
      service.notifications$.subscribe((notifications) => {
        if (notifications.length === 4) {
          notifications.forEach((notif, index) => {
            expect(notif.type).toBe(types[index]);
          });
          done();
        }
      });
    });
  });
  describe("success() - Notifications de succ\xE8s", () => {
    it("should create a success notification", (done) => {
      service.success("Op\xE9ration r\xE9ussie");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].type).toBe("success");
        expect(notifications[0].message).toBe("Op\xE9ration r\xE9ussie");
        done();
      });
    });
    it("should have default success duration (3000ms)", (done) => {
      service.success("Test");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].duration).toBe(3e3);
        done();
      });
    });
  });
  describe("error() - Notifications d'erreur", () => {
    it("should create an error notification", (done) => {
      service.error("Une erreur est survenue");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].type).toBe("error");
        expect(notifications[0].message).toBe("Une erreur est survenue");
        done();
      });
    });
    it("should have longer duration for errors (4000ms)", (done) => {
      service.error("Test");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].duration).toBe(4e3);
        done();
      });
    });
  });
  describe("info() - Notifications d'information", () => {
    it("should create an info notification", (done) => {
      service.info("Information");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].type).toBe("info");
        done();
      });
    });
  });
  describe("warning() - Notifications d'avertissement", () => {
    it("should create a warning notification", (done) => {
      service.warning("Attention");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].type).toBe("warning");
        done();
      });
    });
  });
  describe("remove() - Supprimer une notification", () => {
    it("should remove a notification by id", (done) => {
      service.show("Test 1");
      service.show("Test 2");
      service.notifications$.subscribe((notifications) => {
        if (notifications.length === 2) {
          const idToRemove = notifications[0].id;
          service.remove(idToRemove);
          service.notifications$.subscribe((updatedNotifications) => {
            const exists = updatedNotifications.some((n) => n.id === idToRemove);
            expect(exists).toBe(false);
            done();
          });
        }
      });
    });
    it("should keep other notifications when removing one", (done) => {
      service.show("Test 1");
      service.show("Test 2");
      service.show("Test 3");
      service.notifications$.subscribe((notifications) => {
        if (notifications.length === 3) {
          const idToRemove = notifications[1].id;
          service.remove(idToRemove);
          service.notifications$.subscribe((updatedNotifications) => {
            expect(updatedNotifications.length).toBe(2);
            expect(updatedNotifications[0].message).toBe("Test 1");
            expect(updatedNotifications[1].message).toBe("Test 3");
            done();
          });
        }
      });
    });
    it("should handle removing non-existent notification", (done) => {
      service.show("Test");
      service.notifications$.subscribe((notifications) => {
        if (notifications.length === 1) {
          service.remove("non-existent-id");
          service.notifications$.subscribe((updatedNotifications) => {
            expect(updatedNotifications.length).toBe(1);
            done();
          });
        }
      });
    });
  });
  describe("Auto-remove avec timers", () => {
    it("should auto-remove notification after duration", fakeAsync(() => {
      service.show("Test", "info", 2e3);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBeGreaterThan(0);
      });
      tick(2e3);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(0);
      });
    }));
    it("should not auto-remove notification with duration 0", fakeAsync(() => {
      service.show("Test", "info", 0);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(1);
      });
      tick(5e3);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(1);
      });
    }));
    it("should respect different durations", fakeAsync(() => {
      service.show("Success", "success", 1e3);
      service.show("Error", "error", 2e3);
      tick(1100);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(1);
        expect(notifications[0].type).toBe("error");
      });
      tick(1e3);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(0);
      });
    }));
    it("should handle success auto-remove (3000ms)", fakeAsync(() => {
      service.success("Done");
      tick(3e3);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(0);
      });
    }));
    it("should handle error auto-remove (4000ms)", fakeAsync(() => {
      service.error("Failed");
      tick(3500);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(1);
      });
      tick(500);
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(0);
      });
    }));
  });
  describe("Multiple notifications", () => {
    it("should handle multiple notifications in queue", (done) => {
      service.show("Message 1");
      service.show("Message 2");
      service.show("Message 3");
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(3);
        expect(notifications[0].message).toBe("Message 1");
        expect(notifications[1].message).toBe("Message 2");
        expect(notifications[2].message).toBe("Message 3");
        done();
      });
    });
    it("should maintain order of notifications", (done) => {
      service.success("First");
      service.info("Second");
      service.warning("Third");
      service.error("Fourth");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].message).toBe("First");
        expect(notifications[1].message).toBe("Second");
        expect(notifications[2].message).toBe("Third");
        expect(notifications[3].message).toBe("Fourth");
        done();
      });
    });
  });
  describe("Notification Interface", () => {
    it("should create notifications with Notification interface", (done) => {
      service.show("Test", "success", 3e3);
      service.notifications$.subscribe((notifications) => {
        const notif = notifications[0];
        expect(notif.id).toBeDefined();
        expect(notif.message).toBeDefined();
        expect(notif.type).toBeDefined();
        expect(notif.duration).toBeDefined();
        expect(typeof notif.id).toBe("string");
        expect(typeof notif.message).toBe("string");
        expect(["success", "error", "info", "warning"]).toContain(notif.type);
        expect(typeof notif.duration).toBe("number");
        done();
      });
    });
  });
  describe("Edge cases", () => {
    it("should handle empty message", (done) => {
      service.show("");
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].message).toBe("");
        done();
      });
    });
    it("should handle very long messages", (done) => {
      const longMessage = "A".repeat(1e3);
      service.show(longMessage);
      service.notifications$.subscribe((notifications) => {
        expect(notifications[0].message).toBe(longMessage);
        done();
      });
    });
    it("should handle rapid notification creation", (done) => {
      for (let i = 0; i < 10; i++) {
        service.show(`Message ${i}`);
      }
      service.notifications$.subscribe((notifications) => {
        expect(notifications.length).toBe(10);
        done();
      });
    });
    it("should handle rapid notification removal", (done) => {
      const ids = [];
      for (let i = 0; i < 5; i++) {
        service.show(`Message ${i}`);
      }
      service.notifications$.subscribe((notifications) => {
        if (notifications.length === 5) {
          notifications.forEach((n) => ids.push(n.id));
          ids.forEach((id) => service.remove(id));
          service.notifications$.subscribe((finalNotifications) => {
            expect(finalNotifications.length).toBe(0);
            done();
          });
        }
      });
    });
  });
});
//# sourceMappingURL=spec-notification.service.spec.js.map
