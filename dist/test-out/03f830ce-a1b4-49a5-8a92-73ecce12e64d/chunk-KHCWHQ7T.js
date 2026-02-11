import {
  CommonModule,
  init_common
} from "./chunk-ZGE2EXLE.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-TEVXXR43.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:style:inline:src\app\shared\components\task-highlight\task-highlight.ts;CiAgICAuaGlnaGxpZ2h0LWJhZGdlIHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICB0b3A6IC0zMHB4OwogICAgICBsZWZ0OiAwOwogICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZkNzAwLCAjZmZlZDRlKTsKICAgICAgY29sb3I6ICMzMzM7CiAgICAgIHBhZGRpbmc6IDZweCAxMnB4OwogICAgICBib3JkZXItcmFkaXVzOiAyMHB4OwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOwogICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNTUsIDIxNSwgMCwgMC41KTsKICAgICAgYW5pbWF0aW9uOiBmYWRlSW5TY2FsZSAwLjNzIGVhc2UtaW4tb3V0OwogICAgfQoKICAgIEBrZXlmcmFtZXMgZmFkZUluU2NhbGUgewogICAgICBmcm9tIHsKICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTsKICAgICAgfQogICAgICB0byB7CiAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICB9CiAgICB9CiAg
var task_highlight_default;
var init_task_highlight = __esm({
  "angular:jit:style:inline:src\\app\\shared\\components\\task-highlight\\task-highlight.ts;CiAgICAuaGlnaGxpZ2h0LWJhZGdlIHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICB0b3A6IC0zMHB4OwogICAgICBsZWZ0OiAwOwogICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZkNzAwLCAjZmZlZDRlKTsKICAgICAgY29sb3I6ICMzMzM7CiAgICAgIHBhZGRpbmc6IDZweCAxMnB4OwogICAgICBib3JkZXItcmFkaXVzOiAyMHB4OwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOwogICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNTUsIDIxNSwgMCwgMC41KTsKICAgICAgYW5pbWF0aW9uOiBmYWRlSW5TY2FsZSAwLjNzIGVhc2UtaW4tb3V0OwogICAgfQoKICAgIEBrZXlmcmFtZXMgZmFkZUluU2NhbGUgewogICAgICBmcm9tIHsKICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTsKICAgICAgfQogICAgICB0byB7CiAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICB9CiAgICB9CiAg"() {
    task_highlight_default = "/* angular:styles/component:scss;240d180fe0be6480870879c5f213787b627beaadbb4356c3f4d6d5b34b6065e2;C:\\IPI\\Angular\\ProjetFilRouge\\taskboard-pro\\src\\app\\shared\\components\\task-highlight\\task-highlight.ts */\n.highlight-badge {\n  position: absolute;\n  top: -30px;\n  left: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #ffd700,\n      #ffed4e);\n  color: #333;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-weight: bold;\n  font-size: 12px;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.5);\n  animation: fadeInScale 0.3s ease-in-out;\n}\n@keyframes fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=task-highlight.css.map */\n";
  }
});

// src/app/shared/components/task-highlight/task-highlight.ts
var TaskHighlightComponent;
var init_task_highlight2 = __esm({
  "src/app/shared/components/task-highlight/task-highlight.ts"() {
    "use strict";
    init_tslib_es6();
    init_task_highlight();
    init_core();
    init_common();
    TaskHighlightComponent = class TaskHighlightComponent2 {
      title = "";
      static propDecorators = {
        title: [{ type: Input }]
      };
    };
    TaskHighlightComponent = __decorate([
      Component({
        selector: "app-task-highlight",
        standalone: true,
        imports: [CommonModule],
        template: `
    <div class="highlight-badge">
      \u2B50 {{ title }} est \xE0 l'honneur!
    </div>
  `,
        styles: [task_highlight_default]
      })
    ], TaskHighlightComponent);
  }
});

export {
  TaskHighlightComponent,
  init_task_highlight2 as init_task_highlight
};
//# sourceMappingURL=chunk-KHCWHQ7T.js.map
