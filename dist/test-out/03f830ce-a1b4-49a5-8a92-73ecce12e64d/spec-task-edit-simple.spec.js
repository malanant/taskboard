import {
  TaskEditComponent,
  init_task_edit
} from "./chunk-XNOKQ7JQ.js";
import "./chunk-ZGE2EXLE.js";
import {
  TestBed,
  init_testing
} from "./chunk-TEVXXR43.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/components/task-edit/task-edit-simple.spec.ts
var require_task_edit_simple_spec = __commonJS({
  "src/app/shared/components/task-edit/task-edit-simple.spec.ts"(exports) {
    init_testing();
    init_task_edit();
    describe("TaskEditComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TaskEditComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TaskEditComponent);
        component = fixture.componentInstance;
        component.taskTitle = "T\xE2che test";
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should render modal", () => {
        const modal = fixture.nativeElement.querySelector(".edit-modal");
        expect(modal).toBeTruthy();
      });
      it("should emit save event when save is clicked", () => {
        spyOn(component.save, "emit");
        component.editTitle = "Nouveau titre";
        component.onSave();
        expect(component.save.emit).toHaveBeenCalledWith("Nouveau titre");
      });
    });
  }
});
export default require_task_edit_simple_spec();
//# sourceMappingURL=spec-task-edit-simple.spec.js.map
