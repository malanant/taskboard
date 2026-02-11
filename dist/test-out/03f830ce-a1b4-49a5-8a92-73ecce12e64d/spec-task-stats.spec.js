import {
  TaskStatsComponent,
  init_task_stats
} from "./chunk-PDNQV4BJ.js";
import "./chunk-ZGE2EXLE.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-TEVXXR43.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/components/task-stats/task-stats.spec.ts
var require_task_stats_spec = __commonJS({
  "src/app/shared/components/task-stats/task-stats.spec.ts"(exports) {
    init_testing();
    init_task_stats();
    init_esm();
    describe("TaskStatsComponent - Suite compl\xE8te", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TaskStatsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TaskStatsComponent);
        component = fixture.componentInstance;
      }));
      describe("Initialisation", () => {
        it("should create the component", () => {
          expect(component).toBeTruthy();
        });
        it("should have stats$ @Input property", () => {
          expect(component.stats$).toBeDefined();
        });
      });
      describe("Template - Rendu avec @Input Observable", () => {
        it("should render stats container when stats$ emits", () => {
          const mockStats = {
            total: 5,
            completed: 2,
            active: 3,
            percentage: 40
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const container = fixture.nativeElement.querySelector(".stats-container");
          expect(container).toBeTruthy();
        });
        it("should not render when stats$ is not provided", () => {
          fixture.detectChanges();
          const container = fixture.nativeElement.querySelector(".stats-container");
          expect(container).toBeFalsy();
        });
        it("should display total tasks count", () => {
          const mockStats = {
            total: 10,
            completed: 5,
            active: 5,
            percentage: 50
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const cards = fixture.nativeElement.querySelectorAll(".stat-value");
          expect(cards[0].textContent).toContain("10");
        });
        it("should display completed tasks count", () => {
          const mockStats = {
            total: 10,
            completed: 7,
            active: 3,
            percentage: 70
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const cards = fixture.nativeElement.querySelectorAll(".stat-value");
          expect(cards[1].textContent).toContain("7");
        });
        it("should display active tasks count", () => {
          const mockStats = {
            total: 10,
            completed: 2,
            active: 8,
            percentage: 20
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const cards = fixture.nativeElement.querySelectorAll(".stat-value");
          expect(cards[2].textContent).toContain("8");
        });
        it("should display percentage", () => {
          const mockStats = {
            total: 10,
            completed: 5,
            active: 5,
            percentage: 50
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const cards = fixture.nativeElement.querySelectorAll(".stat-value");
          expect(cards[3].textContent).toContain("50%");
        });
      });
      describe("Barre de progression", () => {
        it("should set progress bar width based on percentage", () => {
          const mockStats = {
            total: 10,
            completed: 7,
            active: 3,
            percentage: 70
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const progressFill = fixture.nativeElement.querySelector(".progress-fill");
          const width = progressFill.style.width;
          expect(width).toBe("70%");
        });
        it("should update progress bar with different percentages", () => {
          const mockStats = {
            total: 20,
            completed: 5,
            active: 15,
            percentage: 25
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const progressFill = fixture.nativeElement.querySelector(".progress-fill");
          expect(progressFill.style.width).toBe("25%");
        });
        it("should show 0% progress when no tasks completed", () => {
          const mockStats = {
            total: 5,
            completed: 0,
            active: 5,
            percentage: 0
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const progressFill = fixture.nativeElement.querySelector(".progress-fill");
          expect(progressFill.style.width).toBe("0%");
        });
        it("should show 100% progress when all tasks completed", () => {
          const mockStats = {
            total: 5,
            completed: 5,
            active: 0,
            percentage: 100
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const progressFill = fixture.nativeElement.querySelector(".progress-fill");
          expect(progressFill.style.width).toBe("100%");
        });
      });
      describe("CSS Classes et DOM", () => {
        it("should have stat-card elements", () => {
          const mockStats = {
            total: 5,
            completed: 2,
            active: 3,
            percentage: 40
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const cards = fixture.nativeElement.querySelectorAll(".stat-card");
          expect(cards.length).toBe(4);
        });
        it("should have correct CSS classes for completed stats", () => {
          const mockStats = {
            total: 5,
            completed: 2,
            active: 3,
            percentage: 40
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const completedValue = fixture.nativeElement.querySelector(".stat-value.completed");
          expect(completedValue).toBeTruthy();
        });
        it("should have correct CSS classes for active stats", () => {
          const mockStats = {
            total: 5,
            completed: 2,
            active: 3,
            percentage: 40
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const activeValue = fixture.nativeElement.querySelector(".stat-value.active");
          expect(activeValue).toBeTruthy();
        });
        it("should display stat labels", () => {
          const mockStats = {
            total: 5,
            completed: 2,
            active: 3,
            percentage: 40
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const labels = fixture.nativeElement.querySelectorAll(".stat-label");
          expect(labels.length).toBe(4);
          expect(labels[0].textContent).toContain("Total");
          expect(labels[1].textContent).toContain("Termin\xE9es");
          expect(labels[2].textContent).toContain("En cours");
        });
      });
      describe("Observable avec async pipe", () => {
        it("should handle observable emissions correctly", (done) => {
          const mockStats = {
            total: 5,
            completed: 2,
            active: 3,
            percentage: 40
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          component.stats$.subscribe((stats) => {
            expect(stats.total).toBe(5);
            expect(stats.completed).toBe(2);
            expect(stats.active).toBe(3);
            expect(stats.percentage).toBe(40);
            done();
          });
        });
      });
      describe("Edge cases", () => {
        it("should handle zero stats", () => {
          const mockStats = {
            total: 0,
            completed: 0,
            active: 0,
            percentage: 0
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const cards = fixture.nativeElement.querySelectorAll(".stat-value");
          expect(cards[0].textContent).toContain("0");
        });
        it("should handle large numbers", () => {
          const mockStats = {
            total: 999,
            completed: 500,
            active: 499,
            percentage: 50
          };
          component.stats$ = of(mockStats);
          fixture.detectChanges();
          const cards = fixture.nativeElement.querySelectorAll(".stat-value");
          expect(cards[0].textContent).toContain("999");
          expect(cards[1].textContent).toContain("500");
        });
      });
    });
  }
});
export default require_task_stats_spec();
//# sourceMappingURL=spec-task-stats.spec.js.map
