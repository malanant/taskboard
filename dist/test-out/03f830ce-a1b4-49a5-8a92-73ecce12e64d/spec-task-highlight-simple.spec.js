import {
  TaskHighlightComponent,
  init_task_highlight
} from "./chunk-KHCWHQ7T.js";
import "./chunk-ZGE2EXLE.js";
import {
  TestBed,
  init_testing
} from "./chunk-TEVXXR43.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/components/task-highlight/task-highlight-simple.spec.ts
var require_task_highlight_simple_spec = __commonJS({
  "src/app/shared/components/task-highlight/task-highlight-simple.spec.ts"(exports) {
    init_testing();
    init_task_highlight();
    describe("TaskHighlightComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TaskHighlightComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TaskHighlightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should display title in badge", () => {
        component.title = "Ma t\xE2che";
        fixture.detectChanges();
        const badgeText = fixture.nativeElement.querySelector(".highlight-badge").textContent;
        expect(badgeText).toContain("Ma t\xE2che");
        expect(badgeText).toContain("\u2B50");
      });
    });
  }
});
export default require_task_highlight_simple_spec();
//# sourceMappingURL=spec-task-highlight-simple.spec.js.map
