import {
  CommonModule,
  init_common
} from "./chunk-ZGE2EXLE.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-TEVXXR43.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\about\about.html
var about_default;
var init_about = __esm({
  "angular:jit:template:src\\app\\about\\about.html"() {
    about_default = `<div class="about-content">\r
  <h2>\xC0 Propos</h2>\r
  <p>Bienvenue sur la page \xC0 Propos de ProjetFilRouge !</p>\r
  <p>D\xE9couvrez plus d'informations sur ce projet et son objectif.</p>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\about\about.scss
var about_default2;
var init_about2 = __esm({
  "angular:jit:style:src\\app\\about\\about.scss"() {
    about_default2 = "/* src/app/about/about.scss */\n/*# sourceMappingURL=about.css.map */\n";
  }
});

// src/app/about/about.ts
var About;
var init_about3 = __esm({
  "src/app/about/about.ts"() {
    "use strict";
    init_tslib_es6();
    init_about();
    init_about2();
    init_core();
    init_common();
    About = class About2 {
    };
    About = __decorate([
      Component({
        selector: "app-about",
        standalone: true,
        imports: [CommonModule],
        template: about_default,
        styles: [about_default2]
      })
    ], About);
  }
});

// src/app/about/about.spec.ts
var require_about_spec = __commonJS({
  "src/app/about/about.spec.ts"(exports) {
    init_testing();
    init_about3();
    describe("About", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [About]
        }).compileComponents();
        fixture = TestBed.createComponent(About);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_about_spec();
//# sourceMappingURL=spec-about.spec.js.map
