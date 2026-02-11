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

// src/app/shared/components/task-stats/task-stats-simple.spec.ts
var require_task_stats_simple_spec = __commonJS({
  "src/app/shared/components/task-stats/task-stats-simple.spec.ts"(exports) {
    init_testing();
    init_task_stats();
    init_esm();
    describe("TaskStatsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TaskStatsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TaskStatsComponent);
        component = fixture.componentInstance;
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should display stats when data is provided", () => {
        component.stats$ = of({
          total: 10,
          completed: 3,
          active: 7,
          percentage: 30
        });
        fixture.detectChanges();
        const container = fixture.nativeElement.querySelector(".stats-container");
        expect(container).toBeTruthy();
      });
      it("should set progress bar width correctly", () => {
        component.stats$ = of({
          total: 10,
          completed: 7,
          active: 3,
          percentage: 70
        });
        fixture.detectChanges();
        const progressFill = fixture.nativeElement.querySelector(".progress-fill");
        expect(progressFill.style.width).toBe("70%");
      });
    });
  }
});
export default require_task_stats_simple_spec();
//# sourceMappingURL=spec-task-stats-simple.spec.js.map
