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

// src/app/shared/components/task-highlight/task-highlight.simple.spec.ts
var require_task_highlight_simple_spec = __commonJS({
  "src/app/shared/components/task-highlight/task-highlight.simple.spec.ts"(exports) {
    init_testing();
    init_task_highlight();
    describe("TaskHighlightComponent - @Input et DOM avec TestBed", () => {
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
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      describe("Test @Input - Initialisation du titre", () => {
        it("should initialize with empty title by default", () => {
          expect(component.title).toBe("");
        });
        it("should accept a title through @Input", () => {
          component.title = "T\xE2che urgente";
          fixture.detectChanges();
          expect(component.title).toBe("T\xE2che urgente");
        });
      });
      describe("Test DOM - Rendu du template", () => {
        it("should render the badge element in the DOM", () => {
          component.title = "Ma t\xE2che";
          fixture.detectChanges();
          const badgeElement = fixture.nativeElement.querySelector(".highlight-badge");
          expect(badgeElement).toBeTruthy();
        });
        it("should display the star emoji in the badge", () => {
          component.title = "Test emoji";
          fixture.detectChanges();
          const badgeText = fixture.nativeElement.querySelector(".highlight-badge").textContent;
          expect(badgeText).toContain("\u2B50");
        });
        it("should display the title in the template", () => {
          component.title = "Ma premi\xE8re t\xE2che";
          let badgeText = fixture.nativeElement.querySelector(".highlight-badge").textContent;
          expect(badgeText).toContain("");
          fixture.detectChanges();
          badgeText = fixture.nativeElement.querySelector(".highlight-badge").textContent;
          expect(badgeText).toContain("Ma premi\xE8re t\xE2che");
        });
        it(`should include the message "est \xE0 l'honneur!" in the badge`, () => {
          component.title = "T\xE2che importante";
          fixture.detectChanges();
          const badgeText = fixture.nativeElement.querySelector(".highlight-badge").textContent;
          expect(badgeText).toContain("est \xE0 l'honneur!");
        });
      });
      describe("Test detectChanges() - Cycle de d\xE9tection", () => {
        it("should update DOM when detectChanges is called", () => {
          component.title = "Nouvelle t\xE2che";
          fixture.detectChanges();
          const badgeText = fixture.nativeElement.querySelector(".highlight-badge").textContent;
          expect(badgeText).toContain("Nouvelle t\xE2che");
        });
        it("should handle multiple @Input changes with detectChanges", () => {
          const titles = ["Titre 1", "Titre 2", "Titre 3"];
          titles.forEach((title) => {
            component.title = title;
            fixture.detectChanges();
            const badgeText = fixture.nativeElement.querySelector(".highlight-badge").textContent;
            expect(badgeText).toContain(title);
          });
        });
      });
    });
  }
});
export default require_task_highlight_simple_spec();
//# sourceMappingURL=spec-task-highlight.simple.spec.js.map
