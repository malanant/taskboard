import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-TEVXXR43.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/core/services/notification.service.ts
var NotificationService;
var init_notification_service = __esm({
  "src/app/core/services/notification.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    NotificationService = class NotificationService2 {
      notificationsSubject = new BehaviorSubject([]);
      notifications$ = this.notificationsSubject.asObservable();
      show(message, type = "info", duration = 3e3) {
        const notification = {
          id: Date.now().toString(),
          message,
          type,
          duration
        };
        const currentNotifications = this.notificationsSubject.value;
        this.notificationsSubject.next([...currentNotifications, notification]);
        if (duration > 0) {
          setTimeout(() => {
            this.remove(notification.id);
          }, duration);
        }
      }
      remove(id) {
        const currentNotifications = this.notificationsSubject.value;
        this.notificationsSubject.next(currentNotifications.filter((n) => n.id !== id));
      }
      success(message) {
        this.show(message, "success");
      }
      error(message) {
        this.show(message, "error", 4e3);
      }
      info(message) {
        this.show(message, "info");
      }
      warning(message) {
        this.show(message, "warning");
      }
    };
    NotificationService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], NotificationService);
  }
});

export {
  NotificationService,
  init_notification_service
};
//# sourceMappingURL=chunk-KM6STP66.js.map
