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

// src/app/shared/components/task-edit/task-edit.spec.ts
var require_task_edit_spec = __commonJS({
  "src/app/shared/components/task-edit/task-edit.spec.ts"(exports) {
    init_testing();
    init_task_edit();
    describe("TaskEditComponent - Suite compl\xE8te", () => {
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
      describe("Initialisation", () => {
        it("should create the component", () => {
          expect(component).toBeTruthy();
        });
        it("should have taskTitle @Input", () => {
          expect(component.taskTitle).toBe("T\xE2che test");
        });
        it("should have save @Output EventEmitter", () => {
          expect(component.save).toBeDefined();
        });
        it("should have cancel @Output EventEmitter", () => {
          expect(component.cancel).toBeDefined();
        });
        it("should initialize editTitle with taskTitle", () => {
          expect(component.editTitle).toBe("T\xE2che test");
        });
      });
      describe("Template - Modal Overlay", () => {
        it("should render the modal overlay", () => {
          const overlay = fixture.nativeElement.querySelector(".edit-modal-overlay");
          expect(overlay).toBeTruthy();
        });
        it("should render the modal content", () => {
          const modal = fixture.nativeElement.querySelector(".edit-modal");
          expect(modal).toBeTruthy();
        });
        it("should render modal title", () => {
          const title = fixture.nativeElement.querySelector(".edit-modal h3");
          expect(title.textContent).toContain("\xC9diter la t\xE2che");
        });
        it("should close modal when clicking on overlay", () => {
          spyOn(component, "onCancel");
          const overlay = fixture.nativeElement.querySelector(".edit-modal-overlay");
          overlay.click();
          expect(component.onCancel).toHaveBeenCalled();
        });
        it("should not close modal when clicking on modal content", () => {
          spyOn(component, "onCancel");
          const modal = fixture.nativeElement.querySelector(".edit-modal");
          modal.click();
          expect(component.onCancel).not.toHaveBeenCalled();
        });
      });
      describe("Input Field - Two-way binding ngModel", () => {
        it("should render input field", () => {
          const input = fixture.nativeElement.querySelector("input");
          expect(input).toBeTruthy();
        });
        it("should have correct placeholder", () => {
          const input = fixture.nativeElement.querySelector("input");
          expect(input.placeholder).toBe("Titre de la t\xE2che");
        });
        it("should bind taskTitle to input value", () => {
          const input = fixture.nativeElement.querySelector("input");
          expect(input.value).toBe("T\xE2che test");
        });
        it("should update editTitle when input value changes", () => {
          const input = fixture.nativeElement.querySelector("input");
          input.value = "Nouveau titre";
          input.dispatchEvent(new Event("input"));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(component.editTitle).toBe("Nouveau titre");
          });
        });
        it("should have autofocus attribute", () => {
          const input = fixture.nativeElement.querySelector("input");
          expect(input.autofocus).toBe(true);
        });
      });
      describe("Boutons et Actions", () => {
        it("should render cancel button", () => {
          const cancelBtn = fixture.nativeElement.querySelector(".btn-cancel");
          expect(cancelBtn).toBeTruthy();
          expect(cancelBtn.textContent).toContain("Annuler");
        });
        it("should render save button", () => {
          const saveBtn = fixture.nativeElement.querySelector(".btn-save");
          expect(saveBtn).toBeTruthy();
          expect(saveBtn.textContent).toContain("Enregistrer");
        });
        it("should call onCancel when cancel button is clicked", () => {
          spyOn(component, "onCancel");
          const cancelBtn = fixture.nativeElement.querySelector(".btn-cancel");
          cancelBtn.click();
          expect(component.onCancel).toHaveBeenCalled();
        });
        it("should call onSave when save button is clicked", () => {
          spyOn(component, "onSave");
          const saveBtn = fixture.nativeElement.querySelector(".btn-save");
          saveBtn.click();
          expect(component.onSave).toHaveBeenCalled();
        });
      });
      describe("Clavier - Keyboard Events", () => {
        it("should save when Enter key is pressed in input", () => {
          spyOn(component, "onSave");
          const input = fixture.nativeElement.querySelector("input");
          const event = new KeyboardEvent("keyup", { key: "Enter" });
          input.dispatchEvent(event);
          expect(component.onSave).toHaveBeenCalled();
        });
        it("should not save on other keys", () => {
          spyOn(component, "onSave");
          const input = fixture.nativeElement.querySelector("input");
          const event = new KeyboardEvent("keyup", { key: "a" });
          input.dispatchEvent(event);
          expect(component.onSave).not.toHaveBeenCalled();
        });
      });
      describe("EventEmitters - @Output", () => {
        it("should emit save event with new title", () => {
          spyOn(component.save, "emit");
          component.editTitle = "Titre modifi\xE9";
          component.onSave();
          expect(component.save.emit).toHaveBeenCalledWith("Titre modifi\xE9");
        });
        it("should emit cancel event", () => {
          spyOn(component.cancel, "emit");
          component.onCancel();
          expect(component.cancel.emit).toHaveBeenCalled();
        });
        it("should trim whitespace when saving", () => {
          spyOn(component.save, "emit");
          component.editTitle = "  Titre avec espaces  ";
          component.onSave();
          expect(component.save.emit).toHaveBeenCalledWith("Titre avec espaces");
        });
        it("should not save empty title", () => {
          spyOn(component.save, "emit");
          component.editTitle = "";
          component.onSave();
          expect(component.save.emit).not.toHaveBeenCalled();
        });
        it("should not save whitespace-only title", () => {
          spyOn(component.save, "emit");
          component.editTitle = "   ";
          component.onSave();
          expect(component.save.emit).not.toHaveBeenCalled();
        });
      });
      describe("Lifecycle - ngOnInit", () => {
        it("should initialize editTitle from taskTitle on init", () => {
          const newComponent = TestBed.createComponent(TaskEditComponent);
          newComponent.componentInstance.taskTitle = "Nouvelle t\xE2che";
          newComponent.detectChanges();
          expect(newComponent.componentInstance.editTitle).toBe("Nouvelle t\xE2che");
        });
      });
      describe("Modal comportement complet", () => {
        it("should handle complete edit workflow", () => {
          const saveSpy = spyOn(component.save, "emit");
          component.editTitle = "T\xE2che mise \xE0 jour";
          fixture.detectChanges();
          component.onSave();
          expect(saveSpy).toHaveBeenCalledWith("T\xE2che mise \xE0 jour");
        });
        it("should handle complete cancel workflow", () => {
          const cancelSpy = spyOn(component.cancel, "emit");
          component.editTitle = "T\xE2che modifi\xE9e";
          component.onCancel();
          expect(cancelSpy).toHaveBeenCalled();
        });
        it("should handle cancel button click from overlay", () => {
          const cancelSpy = spyOn(component.cancel, "emit");
          const overlay = fixture.nativeElement.querySelector(".edit-modal-overlay");
          overlay.click();
          expect(cancelSpy).toHaveBeenCalled();
        });
        it("should handle multiple edit-save cycles", () => {
          const saveSpy = spyOn(component.save, "emit");
          component.editTitle = "Titre 1";
          component.onSave();
          expect(saveSpy).toHaveBeenCalledWith("Titre 1");
          component.editTitle = "Titre 2";
          component.onSave();
          expect(saveSpy).toHaveBeenCalledWith("Titre 2");
          expect(saveSpy).toHaveBeenCalledTimes(2);
        });
      });
      describe("CSS Classes et Styles", () => {
        it("should have edit-actions div", () => {
          const actions = fixture.nativeElement.querySelector(".edit-actions");
          expect(actions).toBeTruthy();
        });
        it("should have correct button classes", () => {
          const cancelBtn = fixture.nativeElement.querySelector(".btn-cancel");
          const saveBtn = fixture.nativeElement.querySelector(".btn-save");
          expect(cancelBtn.classList.contains("btn-cancel")).toBe(true);
          expect(saveBtn.classList.contains("btn-save")).toBe(true);
        });
      });
    });
  }
});
export default require_task_edit_spec();
//# sourceMappingURL=spec-task-edit.spec.js.map
