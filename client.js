/* ------------------------------------------------------------------
 * Pocket H5 · DSH 面板 client bundle —— 由 build-client.mjs 生成，不要手改。
 * 界面与行为来自 ui/ 下的上游快照；转换规则见 docs/adaptation.md。
 * ------------------------------------------------------------------ */
window.__ModuleLoader__.load({
  id: "dsh-pocket-h5",
  factory(require) {
    const React = require("react");
    const h = React.createElement;
    const POCKET_H5_VERSION = "0.3.0";

    /* ---- 上游 styles.css（shadow 作用域适配） ---- */
    const CSS = `/* ------------------------------------------------------------------
   Pocket · H5 预览工作台
   纯黑白灰界面。左侧承载全部操作，右侧只留手机预览。
   ------------------------------------------------------------------ */

:host {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  font-synthesis: none;
  color: #1f1f1f;
  background: #f4f4f4;
  --ink: #1f1f1f;
  --ink-2: #3d3d3d;
  --muted: #6c6c6c;
  --faint: #767676;
  --line: #e6e6e6;
  --line-strong: #d9d9d9;
  --surface: #ffffff;
  --surface-2: #f6f6f6;
  --surface-3: #efefef;
  --accent: #242424;
  --radius: 8px;
  --sidebar-w: 296px;
}

* { box-sizing: border-box; }
:host {
  display: block;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
button, input, select { font: inherit; }
button, a, input, select { -webkit-tap-highlight-color: transparent; }
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
}
a { color: inherit; }
button:disabled { opacity: .4; cursor: default; }
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
summary:focus-visible {
  outline: 2px solid #8f8f8f;
  outline-offset: 2px;
}
svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}
h2 { margin: 0; }
p { margin: 0; }
.icon-library { position: absolute; width: 0; height: 0; overflow: hidden; }
[hidden] { display: none !important; }

/* ---------------- 布局骨架 ---------------- */

.workspace {
  display: grid;
  grid-template-columns: var(--sidebar-w) minmax(0, 1fr);
  height: 100%;
  min-height: 0;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: 0;
  padding: 20px 20px 12px;
  background: var(--surface);
  border-right: 1px solid var(--line);
  overflow: auto;
  overscroll-behavior: contain;
}
.sidebar > * { flex-shrink: 0; }

.main-panel {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  background: #f4f4f4;
}

/* ---------------- 品牌 ---------------- */

.sidebar-brand {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 16px;
  margin-bottom: 4px;
}
.sidebar-brand .brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -.5px;
  text-decoration: none;
  color: var(--ink);
}
.brand-mark {
  width: 30px;
  height: 33px;
  border-radius: 9px;
  background: var(--accent);
  color: #ffffff;
  display: grid;
  place-items: center;
  box-shadow: 0 2px 4px #00000012;
}
.brand-mark svg { width: 20px; height: 20px; }
.brand-dot { color: #7d7d7d; }
.brand-sub { font-size: 10.5px; color: var(--faint); letter-spacing: .3px; }

/* ---------------- 分区 ---------------- */

.settings-section {
  padding: 17px 0;
  border-top: 1px solid var(--line);
}
.address-section { border-top: 0; padding-top: 12px; }

.section-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0 0 13px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: .3px;
  color: #2a2a2a;
  line-height: 1.4;
}

.field-label {
  display: block;
  margin: 0 0 6px;
  font-size: 11px;
  color: var(--muted);
}

.setting-hint {
  margin-top: 8px;
  font-size: 11.5px;
  line-height: 1.75;
  color: #757575;
}

/* ---------------- 预览地址 ---------------- */

.address-toolbar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
}
.address-box {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 0 11px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  transition: border-color .15s, box-shadow .15s, background .15s;
}
.address-box:focus-within {
  background: #ffffff;
  border-color: #9a9a9a;
  box-shadow: 0 0 0 3px #9a9a9a1f;
}
.address-box:has(input[aria-invalid="true"]) {
  border-color: #4a4a4a;
  box-shadow: 0 0 0 3px #4a4a4a1a;
}
.address-box svg { width: 16px; height: 16px; color: #9a9a9a; }
.address-box input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  outline: 0 !important;
  font: 12.5px ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .2px;
  color: #2e2e2e;
}
.address-box input::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
  font-size: 12px;
  color: #9a9a9a;
}

.address-buttons { display: flex; gap: 8px; }
.load-button {
  flex: 1;
  height: 42px;
  padding: 0 15px;
  justify-content: space-between;
  background: var(--accent);
  color: #ffffff;
  border-radius: var(--radius);
  font-size: 12.5px;
  font-weight: 500;
  box-shadow: 0 1px 2px #00000014;
  transition: background .15s, transform .1s;
}
.load-button:hover { background: #3b3b3b; }
.load-button:active { transform: translateY(1px); }
.load-button svg { width: 16px; height: 16px; }

.icon-button {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  color: #5f5f5f;
  transition: background .15s, color .15s, border-color .15s;
}
.icon-button:hover { background: var(--surface-2); color: var(--ink); border-color: var(--line-strong); }
.icon-button:active { transform: translateY(1px); }
.icon-button svg { width: 18px; height: 18px; }

.preview-meta {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
  margin-top: 10px;
  font-size: 11px;
  color: var(--muted);
}
.preview-dot {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #8c8c8c;
}
.preview-meta > #previewName {
  max-width: 172px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: 11px ui-monospace, SFMono-Regular, Menlo, monospace;
  color: #4a4a4a;
}
.preview-meta .text-button { margin-left: auto; }

.text-button {
  padding: 5px 4px;
  border-radius: 6px;
  font-size: 11.5px;
  color: #5c5c5c;
  transition: background .15s, color .15s;
}
.text-button:hover { color: var(--ink); background: var(--surface-2); }
.text-button svg { width: 15px; height: 15px; }
.text-button.small { padding: 3px 0 3px 8px; font-size: 11px; }

.status-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 32px;
  margin-top: 10px;
  padding: 7px 10px;
  border: 1px solid #ededed;
  border-radius: 6px;
  background: var(--surface-2);
  font-size: 11px;
  line-height: 1.5;
  color: #5b5b5b;
}
.status-pill::before {
  content: "";
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #9a9a9a;
}

/* ---------------- 折叠区（details） ---------------- */

details { margin: 0; }
details > summary { list-style: none; cursor: pointer; }
details > summary::-webkit-details-marker { display: none; }

.fold { margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--line-strong); }
.fold > summary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
  border-radius: 6px;
  font-size: 11.5px;
  font-weight: 500;
  color: #4d4d4d;
  transition: color .15s;
}
.fold > summary:hover { color: var(--ink); }
.fold > summary::after {
  content: "";
  width: 6px;
  height: 6px;
  margin-left: auto;
  flex-shrink: 0;
  border-right: 1.5px solid #8a8a8a;
  border-bottom: 1.5px solid #8a8a8a;
  transform: rotate(45deg);
  transition: transform .18s;
}
.fold[open] > summary::after { transform: rotate(225deg); }
.fold[open] > summary { margin-bottom: 12px; }

.summary-title { flex: 1; min-width: 0; }
.summary-badge {
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--surface-3);
  font-size: 10px;
  font-weight: 400;
  color: #5f5f5f;
}

/* ---------------- 代理表单 ---------------- */

.proxy-details > summary { font-size: 11.5px; }
.proxy-details .setting-row { margin: 0 0 4px; }
.proxy-details input:disabled,
.proxy-details button:disabled { opacity: .45; }

.field { display: block; margin-top: 12px; }
.field > span {
  display: block;
  margin-bottom: 6px;
  font-size: 11px;
  color: var(--muted);
}
.field input {
  display: block;
  width: 100%;
  min-width: 0;
  height: 36px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--surface-2);
  outline-offset: 2px;
  font-size: 12px;
  color: #333333;
  transition: border-color .15s, background .15s;
}
.field input:focus { background: #ffffff; border-color: #9e9e9e; }
.field input::placeholder { color: #a5a5a5; font-size: 11.5px; }
.field-grid { display: grid; grid-template-columns: minmax(0, 1fr) 78px; gap: 8px; }
.field-grid .field { margin-top: 12px; }

.outline-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 38px;
  margin-top: 12px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #ffffff;
  font-size: 12px;
  color: #333333;
  transition: background .15s, border-color .15s, transform .1s;
}
.outline-button:hover { background: var(--surface-2); border-color: var(--line-strong); }
.outline-button:active { transform: translateY(1px); }
.outline-button svg { width: 15px; height: 15px; }

/* ---------------- 显示与尺寸 ---------------- */

.display-section select { width: 100%; }
#calibrationStatus:empty { display: none; }
.scale-readout {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 10px 0 2px;
}
.scale-readout strong { font-size: 12px; font-weight: 600; color: #2b2b2b; }
.scale-readout > span { font: 11px ui-monospace, SFMono-Regular, Menlo, monospace; color: #6e6e6e; }

.calibration-details { margin-top: 14px; }
.calibration-details > summary { padding: 3px 0; }
.ruler-wrap { overflow: auto; margin: 6px 0; padding: 14px 2px 10px; }
.calibration-ruler {
  position: relative;
  width: 200px;
  min-width: 200px;
  height: 14px;
  border-left: 1px solid #5c5c5c;
  border-right: 1px solid #5c5c5c;
}
.calibration-ruler:before {
  content: "";
  position: absolute;
  top: 6px;
  left: 0;
  right: 0;
  height: 1px;
  background: #5c5c5c;
}
.calibration-input { display: flex; align-items: stretch; gap: 8px; }
.calibration-input input {
  flex: 1;
  width: 80px;
  min-width: 0;
  height: 38px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 6px;
  font-size: 12px;
  color: #333333;
}
.calibration-input .load-button { flex: 0 0 72px; height: 38px; padding: 0 12px; justify-content: center; }
.calibration-details .text-button { margin-top: 6px; padding-left: 0; }
.calibration-details .load-button { margin-top: 0; }

/* ---------------- 模拟设备 ---------------- */

.device-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 13px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface-2);
}
.device-info strong { font-size: 12.5px; font-weight: 600; color: #2b2b2b; }
.device-info small { display: block; margin-top: 3px; font-size: 10.5px; color: var(--faint); }
.mini-phone {
  position: relative;
  width: 22px;
  height: 38px;
  border: 2px solid #8a8a8a;
  border-radius: 6px;
  background: #e9e9e9;
  box-shadow: inset 0 0 0 2px var(--surface-2);
}
.mini-phone span {
  position: absolute;
  top: 3px;
  left: 4px;
  width: 8px;
  height: 3px;
  border-radius: 3px;
  background: #8a8a8a;
}
.device-check { width: 16px; height: 16px; margin-left: auto; color: #4a4a4a; }

.device-section .outline-button { margin-top: 10px; }
.device-content {
  margin-top: 9px;
  font: 11.5px ui-monospace, SFMono-Regular, Menlo, monospace;
  color: #757575;
}
.spec-details { margin-top: 12px; padding-top: 10px; }
.spec-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
  font-size: 11px;
  color: #767676;
}
.spec-line strong,
.spec-line > span:last-child {
  font: 11px ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 500;
  color: #444444;
}

/* ---------------- 系统外观 ---------------- */

.appearance-section { padding: 17px 0; }
.appearance-section > summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  cursor: pointer;
}
.appearance-section > summary::after {
  content: "";
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-right: 1.5px solid #8a8a8a;
  border-bottom: 1.5px solid #8a8a8a;
  transform: rotate(45deg);
  transition: transform .18s;
}
.appearance-section[open] > summary::after { transform: rotate(225deg); }
.appearance-section[open] > summary { margin-bottom: 14px; }

.setting-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 40px;
  margin: 6px 0;
  font-size: 12px;
  color: #2f2f2f;
  cursor: pointer;
}
.setting-row small { display: block; margin-top: 3px; font-size: 10.5px; color: var(--faint); }
.setting-row input {
  position: absolute;
  right: 0;
  z-index: 1;
  width: 38px;
  height: 24px;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}
.switch {
  position: relative;
  width: 34px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #dedede;
  transition: background .18s;
}
.switch::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 1px 3px #00000026;
  transition: transform .18s;
}
.setting-row input:checked + .switch { background: var(--accent); }
.setting-row input:checked + .switch::before { transform: translateX(14px); }
.setting-row input:focus-visible + .switch { outline: 2px solid #8f8f8f; outline-offset: 2px; }
.setting-row input:disabled + .switch { opacity: .45; }

.segments {
  display: flex;
  gap: 4px;
  padding: 3px;
  border-radius: 7px;
  background: var(--surface-3);
}
.segments button {
  flex: 1;
  padding: 7px 0;
  border-radius: 5px;
  font-size: 11.5px;
  color: #6b6b6b;
  background: none;
  transition: background .15s, color .15s;
}
.segments button[aria-pressed="true"] {
  background: #ffffff;
  color: var(--ink);
  font-weight: 500;
  box-shadow: 0 1px 3px #0000001a;
}

.inline-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;
  font-size: 12px;
  color: #3a3a3a;
}
.inline-value { font-size: 11.5px; color: var(--muted); }
.color-control { display: flex; align-items: center; gap: 8px; }
.color-control select { width: auto; padding: 7px 28px 7px 10px; font-size: 11.5px; }
.color-control span { font: 10.5px ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--faint); }

.range-input {
  width: 100%;
  height: 3px;
  display: block;
  margin: 12px 0 2px;
  accent-color: var(--accent);
  cursor: pointer;
}

/* 通用下拉框 */
select {
  appearance: none;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 9px 30px 9px 11px;
  background: #ffffff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23888888' viewBox='0 0 12 12'%3E%3Cpath d='m3 5 3 3 3-3'/%3E%3C/svg%3E") no-repeat right 10px center;
  font-size: 12px;
  color: #3a3a3a;
  cursor: pointer;
  transition: border-color .15s;
}
select:hover { border-color: var(--line-strong); }
.color-control select { background-color: #ffffff; }

/* ---------------- 页面布局 ---------------- */

.layout-settings select { width: 100%; }
.layout-settings .setting-row { margin: 10px 0 0; }
.layout-settings .setting-hint { margin-top: 6px; }

/* ---------------- 侧栏底部 ---------------- */

.sidebar-help {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 4px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
}
.sidebar-help button { padding: 6px 0; font-size: 11.5px; }

.sidebar-bottom {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  padding: 14px 0 4px;
  font-size: 10.5px;
  color: var(--faint);
  white-space: nowrap;
}
.saved-dot { width: 5px; height: 5px; border-radius: 50%; background: #9c9c9c; }
.sidebar-bottom button {
  margin-left: auto;
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 10.5px;
  color: #6f6f6f;
  transition: background .15s, color .15s;
}
.sidebar-bottom button:hover { background: var(--surface-2); color: var(--ink); }
.sidebar-note { margin-top: 2px; font-size: 10.5px; line-height: 1.7; color: #7d7d7d; }

#engineInfo { margin-top: 8px; }

/* ---------------- 预览画布 ---------------- */

.canvas {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 24px;
  background-color: #f2f2f2;
  background-image: radial-gradient(#dcdcdc .7px, transparent .7px);
  background-size: 20px 20px;
  overscroll-behavior: contain;
}
.device-slot { position: relative; flex-shrink: 0; margin: auto 0; }

/* 手机外观：仅颜色为中性灰，几何尺寸保持不变 */
.phone {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background: linear-gradient(140deg, #8c8c8c, #4a4a4a 28%, #6f6f6f 56%, #3a3a3a 85%, #858585);
  border: 1px solid #666666;
  border-radius: 64px;
  box-shadow: 0 0 0 1px #dcdcdc, 0 24px 48px -12px #00000026, 0 4px 12px #00000014, inset 0 0 0 3px #9a9a9a;
  transform-origin: top left;
}

.screen {
  position: relative;
  width: 402px;
  height: 874px;
  border-radius: 53px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 0 0 5px #111111, 0 0 0 6px #4d4d4d;
  isolation: isolate;
  --bar-color: #ffffff;
  --ink: #191919;
  --safe-top: 62px;
  --safe-bottom: 34px;
  --safe-side: 0px;
}

.side-key {
  position: absolute;
  display: block;
  width: 3px;
  background: linear-gradient(90deg, #6f6f6f, #a3a3a3);
  border: 1px solid #666666;
  border-radius: 3px;
}
.key-action { height: 26px; left: -3px; top: 98px; }
.key-volume-up { height: 50px; left: -3px; top: 149px; }
.key-volume-down { height: 50px; left: -3px; top: 211px; }
.key-power { height: 72px; right: -3px; top: 181px; }

#previewFrame {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: #ffffff;
  display: block;
}

.status-bar {
  height: 62px;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--ink);
  background: var(--bar-color);
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 28px 0 34px;
}
.status-time {
  width: 56px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 650;
  letter-spacing: .15px;
  text-align: center;
}
.status-right { display: flex; align-items: center; gap: 7px; height: 20px; }
.status-right svg { stroke: none; fill: currentColor; }
.signal { width: 18px; height: 13px; }
.wifi { width: 17px; height: 14px; margin-top: -1px; }
.battery {
  width: 28px;
  height: 14px;
  border: 1px solid currentColor;
  border-radius: 4px;
  position: relative;
  margin-right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.battery:after {
  content: "";
  position: absolute;
  right: -3px;
  top: 4px;
  width: 2px;
  height: 5px;
  background: currentColor;
  border-radius: 0 2px 2px 0;
  opacity: .55;
}
.battery-fill { position: absolute; inset: 1px auto 1px 1px; width: 24px; background: currentColor; border-radius: 2px; }
#batteryText {
  position: relative;
  z-index: 1;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: -.6px;
  color: var(--bar-color);
}

.dynamic-island {
  position: absolute;
  z-index: 4;
  top: 11px;
  left: 50%;
  transform: translateX(-50%);
  width: 126px;
  height: 36px;
  border-radius: 24px;
  background: #0a0a0a;
  box-shadow: inset 0 0 0 1px #1c1c1c;
  pointer-events: none;
}
.dynamic-island span {
  position: absolute;
  right: 11px;
  top: 11px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 65% 35%, #333333 0%, #171717 35%, #050505 75%);
  border: 1px solid #202020;
}

.home-area {
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 34px;
  background: var(--bar-color);
  pointer-events: none;
}
.home-area > span {
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 136px;
  height: 5px;
  border-radius: 5px;
  background: var(--ink);
  transform: translateX(-50%);
}
.screen.overlay .status-bar,
.screen.overlay .home-area { background: transparent; }

.safe-guides {
  position: absolute;
  inset: 0;
  z-index: 5;
  border-left: var(--safe-side) solid #a0a0a022;
  border-right: var(--safe-side) solid #a0a0a022;
  pointer-events: none;
  color: #818181;
  font-size: 8px;
  letter-spacing: .5px;
}
.guide-top {
  position: absolute;
  top: 0;
  width: 100%;
  height: var(--safe-top);
  background: #a0a0a015;
  border-bottom: 1px dashed #999999;
}
.guide-top span { position: absolute; right: 7px; bottom: 3px; }
.guide-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--safe-bottom);
  background: #a0a0a015;
  border-top: 1px dashed #999999;
}
.guide-bottom span { position: absolute; right: 7px; top: 3px; }

/* 横屏 */
.landscape .status-bar { display: none; }
.landscape .dynamic-island {
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 126px;
}
.landscape .dynamic-island span { right: 11px; top: 11px; }
.landscape .home-area { height: 21px; }
.landscape .home-area span { width: 180px; bottom: 7px; }
.landscape .guide-top { display: none; }

/* ---------------- 提示与说明 ---------------- */

.toast {
  position: absolute;
  z-index: 20;
  left: 12px;
  bottom: 12px;
  width: calc(var(--sidebar-w) - 24px);
  padding: 11px 14px;
  border-radius: 9px;
  background: #2c2c2c;
  color: #ffffff;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  box-shadow: 0 8px 28px #00000033;
}

.dialog-heading { display: flex; justify-content: space-between; gap: 10px; }
.eyebrow { display: block; font-size: 10px; letter-spacing: 1.5px; color: #737373; }
.dialog-heading h2 { margin: 8px 0 24px; font-size: 22px; font-weight: 550; letter-spacing: -.6px; }
.help-content { color: #565656; }
.help-step { display: flex; gap: 16px; margin: 18px 0; }
.help-step > b { padding-top: 2px; font: 12px ui-monospace, SFMono-Regular, Menlo, monospace; color: #9a9a9a; }
.help-content h3 { margin: 0 0 6px; font-size: 12.5px; font-weight: 600; color: #2e2e2e; }
.help-content p { margin: 0; font-size: 11.5px; line-height: 1.9; color: #6f6f6f; }
.help-content code {
  padding: 2px 4px;
  border-radius: 3px;
  background: #f3f3f3;
  font: 10.5px ui-monospace, SFMono-Regular, Menlo, monospace;
  color: #555555;
  overflow-wrap: anywhere;
}
.help-note { margin-top: 22px; padding: 16px 18px; border-radius: 9px; background: #f6f6f6; }
.help-note p + p { margin-top: 7px; }
.help-content .help-footnote { margin-top: 18px; font-size: 11px; line-height: 1.85; color: #757575; }
.help-footnote a { display: block; margin-top: 8px; color: #6f6f6f; }

dialog:not([open]) { display: none; }
dialog {
  width: calc(100vw - 32px);
  max-width: 600px;
  max-height: 85dvh;
  padding: 28px 32px;
  overflow: auto;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  color: #3e3e3e;
  box-shadow: 0 30px 100px #00000024;
}
dialog::backdrop { background: #2d2d2d42; backdrop-filter: blur(5px); }
.help-backdrop { position: absolute; inset: 0; z-index: 29; background: #2d2d2d42; }
.fallback-dialog[open] {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  z-index: 30;
  max-height: 85vh;
  overflow: auto;
}

/* ---------------- 窄窗口适配 ---------------- */

@media (min-width: 1600px) {
  :host { --sidebar-w: 308px; }
  .sidebar { padding-left: 24px; padding-right: 24px; }
}

@media (max-width: 1100px) {
  :host { --sidebar-w: 272px; }
  .sidebar { padding: 16px 15px 10px; }
  .preview-meta > #previewName { max-width: 142px; }
}

@media (max-height: 820px) {
  .sidebar-brand { padding-bottom: 12px; }
  .settings-section { padding: 13px 0; }
  .address-section { padding-top: 8px; }
  .section-label { margin-bottom: 10px; }
  .canvas { padding: 18px; }
}

@media (max-width: 760px) {
  :host { --sidebar-w: 236px; }
  .sidebar { padding: 14px 12px 8px; }
  .address-box,
  .address-buttons .load-button,
  .address-buttons .icon-button { height: 38px; }
  .address-buttons .icon-button { width: 38px; }
  .address-buttons { gap: 6px; }
  .preview-meta > #previewName { max-width: 112px; }
}

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; scroll-behavior: auto !important; }
}

/* ---- DSH 面板容器（构建期追加；上游样式保持原样） ---- */
.pocket-h5-root {
  position: relative;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
`;

    /* ---- 上游 index.html <body>（图标已内联展开） ---- */
    const MARKUP = `<div class="workspace">
    <aside class="sidebar" aria-label="预览设置">
      <div class="sidebar-brand">
        <div class="brand" aria-label="Pocket"><span class="brand-mark"><svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 19h2"/></svg></span><span>Pocket<span class="brand-dot">.</span></span></div>
        <span class="brand-sub">H5 预览</span>
      </div>

      <section class="settings-section address-section" aria-labelledby="addressTitle">
        <h2 id="addressTitle" class="section-label">预览地址</h2>
        <form id="addressForm" class="address-toolbar">
          <div class="address-box"><svg viewBox="0 0 24 24"><path d="m10 13 4-4m-6 6-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m0 10a4 4 0 0 0 6 0l5-5a4 4 0 0 0-6-6l-1 1" transform="translate(1 2) scale(.9)"/></svg><input id="addressInput" aria-label="H5 地址或端口" placeholder="端口或地址，如 5173" autocomplete="off" spellcheck="false" list="recentAddresses"><datalist id="recentAddresses"></datalist></div>
          <div class="address-buttons">
            <button class="load-button" type="submit">打开预览<svg viewBox="0 0 24 24"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></button>
            <button id="refreshButton" type="button" class="icon-button" title="刷新 H5 页面 · ⌘R" aria-label="刷新 H5 页面"><svg viewBox="0 0 24 24"><path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 7a7 7 0 0 1 11.5-1L20 9M4 15l2.4 3A7 7 0 0 0 18 17"/></svg></button>
            <button id="externalButton" type="button" class="icon-button" title="在系统浏览器打开 H5（使用系统浏览器登录态）" aria-label="在系统浏览器打开 H5（使用系统浏览器登录态）"><svg viewBox="0 0 24 24"><path d="M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/></svg></button>
          </div>
        </form>
        <div class="preview-meta"><span class="preview-dot"></span><span id="previewName">内置示例</span><button id="demoButton" class="text-button small">示例</button></div>
        <p id="loadStatus" class="status-pill" role="status">准备预览</p>
        <details id="proxyDetails" class="fold proxy-details">
          <summary><span class="summary-title">SOCKS5 代理</span><span id="proxyBadge" class="summary-badge">未启用</span></summary>
          <form id="proxyForm">
            <label class="setting-row" for="proxyEnabled"><span>使用应用内代理</span><input id="proxyEnabled" type="checkbox" role="switch"><span class="switch" aria-hidden="true"></span></label>
            <div class="field-grid">
              <label class="field" for="proxyHost"><span>服务器</span><input id="proxyHost" type="text" value="127.0.0.1" autocomplete="off" spellcheck="false" maxlength="253" aria-label="代理服务器"></label>
              <label class="field field-port" for="proxyPort"><span>端口</span><input id="proxyPort" type="number" min="1" max="65535" step="1" value="1080" aria-label="代理端口"></label>
            </div>
            <label class="field" for="proxyUsername"><span>账号（可选）</span><input id="proxyUsername" class="proxy-field" type="text" autocomplete="off" maxlength="255" placeholder="无认证可留空"></label>
            <label class="field" for="proxyPassword"><span>密码（可选）</span><input id="proxyPassword" class="proxy-field" type="password" autocomplete="off" maxlength="255" placeholder="仅本次运行使用"></label>
            <button id="applyProxy" type="submit" class="outline-button">应用代理配置</button>
            <p id="proxyStatus" class="setting-hint" role="status">面板版不支持应用内代理：iframe 请求沿用宿主浏览器的网络设置。</p>
            <p class="setting-hint">面板版不会修改系统或浏览器代理；示例与预览请求沿用宿主网络设置。</p>
          </form>
        </details>
      </section>

      <section class="settings-section display-section" aria-labelledby="displayTitle">
        <h2 id="displayTitle" class="section-label">显示与尺寸</h2>
        <label class="field-label" for="zoomSelect">显示比例</label>
        <select id="zoomSelect"><option value="fit">适应窗口</option><option value="0.5">50%</option><option value="0.75">75%</option><option value="1" selected>100% · 真机大小</option><option value="1.25">125%</option><option value="1.5">150%</option></select>
        <div class="scale-readout"><strong id="scaleLabel">100% · 真机大小</strong><span id="physicalSize">机身 71.5 × 149.6 mm</span></div>
        <p id="calibrationStatus" class="setting-hint"></p>
        <details id="calibrationDetails" class="fold calibration-details">
          <summary><span class="summary-title">校准实际尺寸</span></summary>
          <p class="setting-hint">用尺子量出下方线段从左到右的长度，再填入测量值。</p>
          <div class="ruler-wrap"><div id="calibrationRuler" class="calibration-ruler" aria-label="待测量的校准线段"></div></div>
          <form id="calibrationForm">
            <label class="field-label" for="measuredLength">测得长度（毫米）</label>
            <div class="calibration-input"><input id="measuredLength" type="number" min="5" max="300" step="0.1" placeholder="例如 42.3" required><button class="load-button" type="submit">应用</button></div>
          </form>
          <button id="clearCalibration" class="text-button small">恢复系统估计</button>
          <p class="setting-hint">换显示器或修改浏览器缩放后，请检查尺寸。校准仅保存在本机。</p>
        </details>
      </section>

      <section class="settings-section device-section" aria-labelledby="deviceTitle">
        <h2 id="deviceTitle" class="section-label">模拟设备</h2>
        <div class="device-card">
          <div class="mini-phone"><span></span></div>
          <div class="device-info"><strong>iPhone 17</strong><small>6.3 英寸 · 标准版</small></div>
          <svg class="device-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>
        </div>
        <button id="rotateButton" class="outline-button"><svg viewBox="0 0 24 24"><rect x="7" y="5" width="10" height="16" rx="2" transform="rotate(-35 12 13)"/><path d="M15 2a9 9 0 0 1 7 8m-4-3 4 3 1-5"/></svg><span>切换为横屏</span></button>
        <p id="viewportLabel" class="device-content">402 × 778 内容区</p>
        <details class="fold spec-details">
          <summary><span class="summary-title">屏幕规格</span></summary>
          <div class="spec-line"><span>逻辑屏幕</span><strong id="screenSpec">402 × 874</strong></div>
          <div class="spec-line"><span>物理分辨率</span><span>1206 × 2622</span></div>
          <div class="spec-line"><span>屏幕密度</span><span>460 PPI · @3x</span></div>
        </details>
      </section>

      <details class="settings-section appearance-section">
        <summary class="section-label">系统外观</summary>
        <label class="setting-row" for="statusToggle"><span>iOS 状态栏<small>时间、信号和电池</small></span><input id="statusToggle" type="checkbox" role="switch" checked><span class="switch" aria-hidden="true"></span></label>
        <label class="setting-row" for="homeToggle"><span>底部手势条</span><input id="homeToggle" type="checkbox" role="switch" checked><span class="switch" aria-hidden="true"></span></label>
        <div class="field-label">状态栏文字</div>
        <div class="segments" id="themeOptions" aria-label="状态栏文字颜色"><button data-theme="dark" aria-pressed="true">深色</button><button data-theme="light" aria-pressed="false">浅色</button></div>
        <div class="inline-controls"><label for="barColor">状态栏背景</label><div class="color-control"><select id="barColor" aria-label="状态栏背景"><option value="#ffffff">白色</option><option value="#ededed">浅灰</option><option value="#111111">黑色</option></select><span id="colorValue">#FFFFFF</span></div></div>
        <label class="inline-controls" for="batteryLevel"><span>电池电量</span><span class="inline-value"><output id="batteryOutput">100</output>%</span></label>
        <input class="range-input" id="batteryLevel" type="range" min="0" max="100" value="100" aria-label="电池电量">
      </details>

      <section class="settings-section layout-settings" aria-labelledby="layoutTitle">
        <h2 id="layoutTitle" class="section-label">页面布局</h2>
        <label class="field-label" for="layoutMode">页面显示方式</label>
        <select id="layoutMode"><option value="inset">预留状态栏与底部空间</option><option value="overlay">全屏页面 · 系统栏覆盖</option></select>
        <label class="setting-row" for="guideToggle"><span>安全区参考线</span><input id="guideToggle" type="checkbox" role="switch"><span class="switch" aria-hidden="true"></span></label>
        <p class="setting-hint" id="layoutHint">系统栏独立显示，页面内容不会被遮挡。</p>
      </section>

      <div class="sidebar-help"><button id="helpButton" class="text-button"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.2"/></svg>使用说明</button><button id="troubleshootButton" class="text-button">页面无法打开？</button></div>
      <button id="devToolsButton" class="outline-button" hidden>打开开发者工具</button>
      <p id="engineInfo" class="setting-hint" hidden></p>
      <div class="sidebar-bottom"><span class="saved-dot"></span>外观自动保存<button id="resetButton" title="恢复默认外观，保留显示器校准">重置外观</button></div>
      <p class="sidebar-note">外观与布局预览 · 非 iOS 模拟器</p>
    </aside>

    <main class="main-panel" aria-label="手机预览">
      <div class="canvas" id="canvas">
        <div id="deviceSlot" class="device-slot"><div id="phone" class="phone">
          <span class="side-key key-action"></span><span class="side-key key-volume-up"></span><span class="side-key key-volume-down"></span><span class="side-key key-power"></span>
          <div id="screen" class="screen">
            <iframe id="previewFrame" title="H5 页面预览" src="about:blank" allow="clipboard-read; clipboard-write; fullscreen; autoplay" allowfullscreen></iframe>
            <div id="statusBar" class="status-bar"><span class="status-time">9:41</span><div class="status-right"><svg class="signal" viewBox="0 0 18 12" aria-label="信号"><rect x="0" y="7.6" width="3" height="4.4" rx="1"/><rect x="5" y="5.1" width="3" height="6.9" rx="1"/><rect x="10" y="2.6" width="3" height="9.4" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg><svg class="wifi" viewBox="0 0 17 12" aria-label="Wi-Fi"><path d="M1.3 3.9a10.9 10.9 0 0 1 14.4 0"/><path d="M4 6.7a7 7 0 0 1 9 0"/><path d="M6.7 9.5a3.1 3.1 0 0 1 3.6 0"/><circle cx="8.5" cy="11.4" r="1.05"/></svg><span class="battery"><span id="batteryFill" class="battery-fill"></span><span id="batteryText">100</span></span></div></div>
            <div id="island" class="dynamic-island"><span></span></div>
            <div id="homeArea" class="home-area"><span></span></div>
            <div id="guides" class="safe-guides" hidden><div class="guide-top"><span>顶部参考区</span></div><div class="guide-bottom"><span>底部参考区</span></div></div>
          </div>
        </div></div>
      </div>
    </main>
  </div>

  <div id="helpBackdrop" class="help-backdrop" hidden></div>
  <dialog id="helpDialog"><div class="dialog-heading"><div><span class="eyebrow">使用指南</span><h2>让每个 H5，都有一部手机。</h2></div><button id="closeHelpButton" class="icon-button" aria-label="关闭说明"><svg viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div><div class="help-content"><div class="help-step"><b>01</b><div><h3>启动你的 H5，再输入地址</h3><p>直接输入 <code>5173</code>、<code>localhost:3000/path</code> 或完整的 HTTP / HTTPS 地址。本工具不会替你启动 H5 项目。端口指向当前这台电脑。</p></div></div><div class="help-step"><b>02</b><div><h3>按实际逻辑尺寸检查布局</h3><p>竖屏为 402 × 874。默认预留顶部 62px、底部 34px，内容区为 402 × 778；横屏预留左右各 62px、底部 21px。这些系统栏和安全区是可视化参考值。</p></div></div><div class="help-step"><b>03</b><div><h3>检查遮挡，或专注页面</h3><p>「全屏页面」会让 H5 铺满屏幕，再覆盖状态栏与手势条。参考线只作提示，不会修改 H5 的 CSS，也不会把模拟值注入 <code>env(safe-area-inset-*)</code>。</p></div></div><div class="help-note"><h3>如果页面空白</h3><p>先点击「在新窗口打开」按钮，确认 H5 服务正在运行。目标页面的 <code>X-Frame-Options</code> 或 CSP <code>frame-ancestors</code> 可能禁止嵌入，需要在你自己的开发服务里允许此预览地址。HTTPS 页面也可能拦截 HTTP 嵌入。</p><p>嵌入页加载事件不代表页面一定成功显示。本工具不绕过网站限制；请只在自己的开发项目中调整设置。</p></div><div class="help-note"><h3>需要登录的页面</h3><p>预览使用 DSH 应用自己的浏览器会话：在预览里登录一次会保留，重启 DSH 后一般仍在。若页面禁止被嵌入（X-Frame-Options / CSP frame-ancestors）或登录需要弹窗，登录无法在预览内完成——可点地址栏旁的「在系统浏览器打开」使用系统浏览器的登录态，或用手机扫码。</p></div><p class="help-footnote">画布沿用桌面浏览器的渲染引擎、User-Agent、设备像素比和输入方式。@3x 是规格说明；缩放不改变 iframe 的 CSS 尺寸。涉及 Safari、键盘、触摸、相机和真实安全区时，请在 iPhone 上验证。<a href="https://www.apple.com/iphone-17/specs/" target="_blank" rel="noopener noreferrer">查看 Apple 屏幕规格 ↗</a></p></div></dialog>
  <div id="toast" class="toast" role="status" hidden></div>`;


    /* ---- 内置二维码编码器（vendor/qrcode · node-qrcode 1.5.4 · MIT；来源见 vendor/qrcode/PROVENANCE.md） ---- */
    const QR_MODULE_FACTORIES = {
      "node_modules/dijkstrajs/dijkstra": function (module, exports, require) {
        'use strict';

        /******************************************************************************
         * Created 2008-08-19.
         *
         * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
         *
         * Copyright (C) 2008
         *   Wyatt Baldwin <self@wyattbaldwin.com>
         *   All rights reserved
         *
         * Licensed under the MIT license.
         *
         *   http://www.opensource.org/licenses/mit-license.php
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *****************************************************************************/
        var dijkstra = {
          single_source_shortest_paths: function(graph, s, d) {
            // Predecessor map for each node that has been encountered.
            // node ID => predecessor node ID
            var predecessors = {};

            // Costs of shortest paths from s to all nodes encountered.
            // node ID => cost
            var costs = {};
            costs[s] = 0;

            // Costs of shortest paths from s to all nodes encountered; differs from
            // `costs` in that it provides easy access to the node that currently has
            // the known shortest path from s.
            // XXX: Do we actually need both `costs` and `open`?
            var open = dijkstra.PriorityQueue.make();
            open.push(s, 0);

            var closest,
                u, v,
                cost_of_s_to_u,
                adjacent_nodes,
                cost_of_e,
                cost_of_s_to_u_plus_cost_of_e,
                cost_of_s_to_v,
                first_visit;
            while (!open.empty()) {
              // In the nodes remaining in graph that have a known cost from s,
              // find the node, u, that currently has the shortest path from s.
              closest = open.pop();
              u = closest.value;
              cost_of_s_to_u = closest.cost;

              // Get nodes adjacent to u...
              adjacent_nodes = graph[u] || {};

              // ...and explore the edges that connect u to those nodes, updating
              // the cost of the shortest paths to any or all of those nodes as
              // necessary. v is the node across the current edge from u.
              for (v in adjacent_nodes) {
                if (adjacent_nodes.hasOwnProperty(v)) {
                  // Get the cost of the edge running from u to v.
                  cost_of_e = adjacent_nodes[v];

                  // Cost of s to u plus the cost of u to v across e--this is *a*
                  // cost from s to v that may or may not be less than the current
                  // known cost to v.
                  cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

                  // If we haven't visited v yet OR if the current known cost from s to
                  // v is greater than the new cost we just found (cost of s to u plus
                  // cost of u to v across e), update v's cost in the cost list and
                  // update v's predecessor in the predecessor list (it's now u).
                  cost_of_s_to_v = costs[v];
                  first_visit = (typeof costs[v] === 'undefined');
                  if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                  }
                }
              }
            }

            if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
              var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
              throw new Error(msg);
            }

            return predecessors;
          },

          extract_shortest_path_from_predecessor_list: function(predecessors, d) {
            var nodes = [];
            var u = d;
            var predecessor;
            while (u) {
              nodes.push(u);
              predecessor = predecessors[u];
              u = predecessors[u];
            }
            nodes.reverse();
            return nodes;
          },

          find_path: function(graph, s, d) {
            var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
            return dijkstra.extract_shortest_path_from_predecessor_list(
              predecessors, d);
          },

          /**
           * A very naive priority queue implementation.
           */
          PriorityQueue: {
            make: function (opts) {
              var T = dijkstra.PriorityQueue,
                  t = {},
                  key;
              opts = opts || {};
              for (key in T) {
                if (T.hasOwnProperty(key)) {
                  t[key] = T[key];
                }
              }
              t.queue = [];
              t.sorter = opts.sorter || T.default_sorter;
              return t;
            },

            default_sorter: function (a, b) {
              return a.cost - b.cost;
            },

            /**
             * Add a new item to the queue and ensure the highest priority element
             * is at the front of the queue.
             */
            push: function (value, cost) {
              var item = {value: value, cost: cost};
              this.queue.push(item);
              this.queue.sort(this.sorter);
            },

            /**
             * Return the highest priority element in the queue.
             */
            pop: function () {
              return this.queue.shift();
            },

            empty: function () {
              return this.queue.length === 0;
            }
          }
        };


        // node.js module exports
        if (typeof module !== 'undefined') {
          module.exports = dijkstra;
        }
      },
      "lib/core/alignment-pattern": function (module, exports, require) {
        /**
         * Alignment pattern are fixed reference pattern in defined positions
         * in a matrix symbology, which enables the decode software to re-synchronise
         * the coordinate mapping of the image modules in the event of moderate amounts
         * of distortion of the image.
         *
         * Alignment patterns are present only in QR Code symbols of version 2 or larger
         * and their number depends on the symbol version.
         */

        const getSymbolSize = require('./utils').getSymbolSize

        /**
         * Calculate the row/column coordinates of the center module of each alignment pattern
         * for the specified QR Code version.
         *
         * The alignment patterns are positioned symmetrically on either side of the diagonal
         * running from the top left corner of the symbol to the bottom right corner.
         *
         * Since positions are simmetrical only half of the coordinates are returned.
         * Each item of the array will represent in turn the x and y coordinate.
         * @see {@link getPositions}
         *
         * @param  {Number} version QR Code version
         * @return {Array}          Array of coordinate
         */
        exports.getRowColCoords = function getRowColCoords (version) {
          if (version === 1) return []

          const posCount = Math.floor(version / 7) + 2
          const size = getSymbolSize(version)
          const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
          const positions = [size - 7] // Last coord is always (size - 7)

          for (let i = 1; i < posCount - 1; i++) {
            positions[i] = positions[i - 1] - intervals
          }

          positions.push(6) // First coord is always 6

          return positions.reverse()
        }

        /**
         * Returns an array containing the positions of each alignment pattern.
         * Each array's element represent the center point of the pattern as (x, y) coordinates
         *
         * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
         * and filtering out the items that overlaps with finder pattern
         *
         * @example
         * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
         * The alignment patterns, therefore, are to be centered on (row, column)
         * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
         * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
         * and are not therefore used for alignment patterns.
         *
         * let pos = getPositions(7)
         * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
         *
         * @param  {Number} version QR Code version
         * @return {Array}          Array of coordinates
         */
        exports.getPositions = function getPositions (version) {
          const coords = []
          const pos = exports.getRowColCoords(version)
          const posLength = pos.length

          for (let i = 0; i < posLength; i++) {
            for (let j = 0; j < posLength; j++) {
              // Skip if position is occupied by finder patterns
              if ((i === 0 && j === 0) || // top-left
                  (i === 0 && j === posLength - 1) || // bottom-left
                  (i === posLength - 1 && j === 0)) { // top-right
                continue
              }

              coords.push([pos[i], pos[j]])
            }
          }

          return coords
        }
      },
      "lib/core/alphanumeric-data": function (module, exports, require) {
        const Mode = require('./mode')

        /**
         * Array of characters available in alphanumeric mode
         *
         * As per QR Code specification, to each character
         * is assigned a value from 0 to 44 which in this case coincides
         * with the array index
         *
         * @type {Array}
         */
        const ALPHA_NUM_CHARS = [
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
          ' ', '$', '%', '*', '+', '-', '.', '/', ':'
        ]

        function AlphanumericData (data) {
          this.mode = Mode.ALPHANUMERIC
          this.data = data
        }

        AlphanumericData.getBitsLength = function getBitsLength (length) {
          return 11 * Math.floor(length / 2) + 6 * (length % 2)
        }

        AlphanumericData.prototype.getLength = function getLength () {
          return this.data.length
        }

        AlphanumericData.prototype.getBitsLength = function getBitsLength () {
          return AlphanumericData.getBitsLength(this.data.length)
        }

        AlphanumericData.prototype.write = function write (bitBuffer) {
          let i

          // Input data characters are divided into groups of two characters
          // and encoded as 11-bit binary codes.
          for (i = 0; i + 2 <= this.data.length; i += 2) {
            // The character value of the first character is multiplied by 45
            let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

            // The character value of the second digit is added to the product
            value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

            // The sum is then stored as 11-bit binary number
            bitBuffer.put(value, 11)
          }

          // If the number of input data characters is not a multiple of two,
          // the character value of the final character is encoded as a 6-bit binary number.
          if (this.data.length % 2) {
            bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
          }
        }

        module.exports = AlphanumericData
      },
      "lib/core/bit-buffer": function (module, exports, require) {
        function BitBuffer () {
          this.buffer = []
          this.length = 0
        }

        BitBuffer.prototype = {

          get: function (index) {
            const bufIndex = Math.floor(index / 8)
            return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
          },

          put: function (num, length) {
            for (let i = 0; i < length; i++) {
              this.putBit(((num >>> (length - i - 1)) & 1) === 1)
            }
          },

          getLengthInBits: function () {
            return this.length
          },

          putBit: function (bit) {
            const bufIndex = Math.floor(this.length / 8)
            if (this.buffer.length <= bufIndex) {
              this.buffer.push(0)
            }

            if (bit) {
              this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
            }

            this.length++
          }
        }

        module.exports = BitBuffer
      },
      "lib/core/bit-matrix": function (module, exports, require) {
        /**
         * Helper class to handle QR Code symbol modules
         *
         * @param {Number} size Symbol size
         */
        function BitMatrix (size) {
          if (!size || size < 1) {
            throw new Error('BitMatrix size must be defined and greater than 0')
          }

          this.size = size
          this.data = new Uint8Array(size * size)
          this.reservedBit = new Uint8Array(size * size)
        }

        /**
         * Set bit value at specified location
         * If reserved flag is set, this bit will be ignored during masking process
         *
         * @param {Number}  row
         * @param {Number}  col
         * @param {Boolean} value
         * @param {Boolean} reserved
         */
        BitMatrix.prototype.set = function (row, col, value, reserved) {
          const index = row * this.size + col
          this.data[index] = value
          if (reserved) this.reservedBit[index] = true
        }

        /**
         * Returns bit value at specified location
         *
         * @param  {Number}  row
         * @param  {Number}  col
         * @return {Boolean}
         */
        BitMatrix.prototype.get = function (row, col) {
          return this.data[row * this.size + col]
        }

        /**
         * Applies xor operator at specified location
         * (used during masking process)
         *
         * @param {Number}  row
         * @param {Number}  col
         * @param {Boolean} value
         */
        BitMatrix.prototype.xor = function (row, col, value) {
          this.data[row * this.size + col] ^= value
        }

        /**
         * Check if bit at specified location is reserved
         *
         * @param {Number}   row
         * @param {Number}   col
         * @return {Boolean}
         */
        BitMatrix.prototype.isReserved = function (row, col) {
          return this.reservedBit[row * this.size + col]
        }

        module.exports = BitMatrix
      },
      "lib/core/byte-data": function (module, exports, require) {
        const Mode = require('./mode')

        function ByteData (data) {
          this.mode = Mode.BYTE
          if (typeof (data) === 'string') {
            this.data = new TextEncoder().encode(data)
          } else {
            this.data = new Uint8Array(data)
          }
        }

        ByteData.getBitsLength = function getBitsLength (length) {
          return length * 8
        }

        ByteData.prototype.getLength = function getLength () {
          return this.data.length
        }

        ByteData.prototype.getBitsLength = function getBitsLength () {
          return ByteData.getBitsLength(this.data.length)
        }

        ByteData.prototype.write = function (bitBuffer) {
          for (let i = 0, l = this.data.length; i < l; i++) {
            bitBuffer.put(this.data[i], 8)
          }
        }

        module.exports = ByteData
      },
      "lib/core/error-correction-code": function (module, exports, require) {
        const ECLevel = require('./error-correction-level')
        
        const EC_BLOCKS_TABLE = [
        // L  M  Q  H
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 2, 2,
          1, 2, 2, 4,
          1, 2, 4, 4,
          2, 4, 4, 4,
          2, 4, 6, 5,
          2, 4, 6, 6,
          2, 5, 8, 8,
          4, 5, 8, 8,
          4, 5, 8, 11,
          4, 8, 10, 11,
          4, 9, 12, 16,
          4, 9, 16, 16,
          6, 10, 12, 18,
          6, 10, 17, 16,
          6, 11, 16, 19,
          6, 13, 18, 21,
          7, 14, 21, 25,
          8, 16, 20, 25,
          8, 17, 23, 25,
          9, 17, 23, 34,
          9, 18, 25, 30,
          10, 20, 27, 32,
          12, 21, 29, 35,
          12, 23, 34, 37,
          12, 25, 34, 40,
          13, 26, 35, 42,
          14, 28, 38, 45,
          15, 29, 40, 48,
          16, 31, 43, 51,
          17, 33, 45, 54,
          18, 35, 48, 57,
          19, 37, 51, 60,
          19, 38, 53, 63,
          20, 40, 56, 66,
          21, 43, 59, 70,
          22, 45, 62, 74,
          24, 47, 65, 77,
          25, 49, 68, 81
        ]
        
        const EC_CODEWORDS_TABLE = [
        // L  M  Q  H
          7, 10, 13, 17,
          10, 16, 22, 28,
          15, 26, 36, 44,
          20, 36, 52, 64,
          26, 48, 72, 88,
          36, 64, 96, 112,
          40, 72, 108, 130,
          48, 88, 132, 156,
          60, 110, 160, 192,
          72, 130, 192, 224,
          80, 150, 224, 264,
          96, 176, 260, 308,
          104, 198, 288, 352,
          120, 216, 320, 384,
          132, 240, 360, 432,
          144, 280, 408, 480,
          168, 308, 448, 532,
          180, 338, 504, 588,
          196, 364, 546, 650,
          224, 416, 600, 700,
          224, 442, 644, 750,
          252, 476, 690, 816,
          270, 504, 750, 900,
          300, 560, 810, 960,
          312, 588, 870, 1050,
          336, 644, 952, 1110,
          360, 700, 1020, 1200,
          390, 728, 1050, 1260,
          420, 784, 1140, 1350,
          450, 812, 1200, 1440,
          480, 868, 1290, 1530,
          510, 924, 1350, 1620,
          540, 980, 1440, 1710,
          570, 1036, 1530, 1800,
          570, 1064, 1590, 1890,
          600, 1120, 1680, 1980,
          630, 1204, 1770, 2100,
          660, 1260, 1860, 2220,
          720, 1316, 1950, 2310,
          750, 1372, 2040, 2430
        ]
        
        /**
         * Returns the number of error correction block that the QR Code should contain
         * for the specified version and error correction level.
         *
         * @param  {Number} version              QR Code version
         * @param  {Number} errorCorrectionLevel Error correction level
         * @return {Number}                      Number of error correction blocks
         */
        exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
          switch (errorCorrectionLevel) {
            case ECLevel.L:
              return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
            case ECLevel.M:
              return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
            case ECLevel.Q:
              return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
            case ECLevel.H:
              return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
            default:
              return undefined
          }
        }
        
        /**
         * Returns the number of error correction codewords to use for the specified
         * version and error correction level.
         *
         * @param  {Number} version              QR Code version
         * @param  {Number} errorCorrectionLevel Error correction level
         * @return {Number}                      Number of error correction codewords
         */
        exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
          switch (errorCorrectionLevel) {
            case ECLevel.L:
              return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
            case ECLevel.M:
              return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
            case ECLevel.Q:
              return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
            case ECLevel.H:
              return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
            default:
              return undefined
          }
        }
      },
      "lib/core/error-correction-level": function (module, exports, require) {
        exports.L = { bit: 1 }
        exports.M = { bit: 0 }
        exports.Q = { bit: 3 }
        exports.H = { bit: 2 }

        function fromString (string) {
          if (typeof string !== 'string') {
            throw new Error('Param is not a string')
          }

          const lcStr = string.toLowerCase()

          switch (lcStr) {
            case 'l':
            case 'low':
              return exports.L

            case 'm':
            case 'medium':
              return exports.M

            case 'q':
            case 'quartile':
              return exports.Q

            case 'h':
            case 'high':
              return exports.H

            default:
              throw new Error('Unknown EC Level: ' + string)
          }
        }

        exports.isValid = function isValid (level) {
          return level && typeof level.bit !== 'undefined' &&
            level.bit >= 0 && level.bit < 4
        }

        exports.from = function from (value, defaultValue) {
          if (exports.isValid(value)) {
            return value
          }

          try {
            return fromString(value)
          } catch (e) {
            return defaultValue
          }
        }
      },
      "lib/core/finder-pattern": function (module, exports, require) {
        const getSymbolSize = require('./utils').getSymbolSize
        const FINDER_PATTERN_SIZE = 7

        /**
         * Returns an array containing the positions of each finder pattern.
         * Each array's element represent the top-left point of the pattern as (x, y) coordinates
         *
         * @param  {Number} version QR Code version
         * @return {Array}          Array of coordinates
         */
        exports.getPositions = function getPositions (version) {
          const size = getSymbolSize(version)

          return [
            // top-left
            [0, 0],
            // top-right
            [size - FINDER_PATTERN_SIZE, 0],
            // bottom-left
            [0, size - FINDER_PATTERN_SIZE]
          ]
        }
      },
      "lib/core/format-info": function (module, exports, require) {
        const Utils = require('./utils')

        const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
        const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
        const G15_BCH = Utils.getBCHDigit(G15)

        /**
         * Returns format information with relative error correction bits
         *
         * The format information is a 15-bit sequence containing 5 data bits,
         * with 10 error correction bits calculated using the (15, 5) BCH code.
         *
         * @param  {Number} errorCorrectionLevel Error correction level
         * @param  {Number} mask                 Mask pattern
         * @return {Number}                      Encoded format information bits
         */
        exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
          const data = ((errorCorrectionLevel.bit << 3) | mask)
          let d = data << 10

          while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
            d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
          }

          // xor final data with mask pattern in order to ensure that
          // no combination of Error Correction Level and data mask pattern
          // will result in an all-zero data string
          return ((data << 10) | d) ^ G15_MASK
        }
      },
      "lib/core/galois-field": function (module, exports, require) {
        const EXP_TABLE = new Uint8Array(512)
        const LOG_TABLE = new Uint8Array(256)
        /**
         * Precompute the log and anti-log tables for faster computation later
         *
         * For each possible value in the galois field 2^8, we will pre-compute
         * the logarithm and anti-logarithm (exponential) of this value
         *
         * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
         */
        ;(function initTables () {
          let x = 1
          for (let i = 0; i < 255; i++) {
            EXP_TABLE[i] = x
            LOG_TABLE[x] = i

            x <<= 1 // multiply by 2

            // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
            // This means that when a number is 256 or larger, it should be XORed with 0x11D.
            if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
              x ^= 0x11D
            }
          }

          // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
          // stay inside the bounds (because we will mainly use this table for the multiplication of
          // two GF numbers, no more).
          // @see {@link mul}
          for (let i = 255; i < 512; i++) {
            EXP_TABLE[i] = EXP_TABLE[i - 255]
          }
        }())

        /**
         * Returns log value of n inside Galois Field
         *
         * @param  {Number} n
         * @return {Number}
         */
        exports.log = function log (n) {
          if (n < 1) throw new Error('log(' + n + ')')
          return LOG_TABLE[n]
        }

        /**
         * Returns anti-log value of n inside Galois Field
         *
         * @param  {Number} n
         * @return {Number}
         */
        exports.exp = function exp (n) {
          return EXP_TABLE[n]
        }

        /**
         * Multiplies two number inside Galois Field
         *
         * @param  {Number} x
         * @param  {Number} y
         * @return {Number}
         */
        exports.mul = function mul (x, y) {
          if (x === 0 || y === 0) return 0

          // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
          // @see {@link initTables}
          return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
        }
      },
      "lib/core/kanji-data": function (module, exports, require) {
        const Mode = require('./mode')
        const Utils = require('./utils')

        function KanjiData (data) {
          this.mode = Mode.KANJI
          this.data = data
        }

        KanjiData.getBitsLength = function getBitsLength (length) {
          return length * 13
        }

        KanjiData.prototype.getLength = function getLength () {
          return this.data.length
        }

        KanjiData.prototype.getBitsLength = function getBitsLength () {
          return KanjiData.getBitsLength(this.data.length)
        }

        KanjiData.prototype.write = function (bitBuffer) {
          let i

          // In the Shift JIS system, Kanji characters are represented by a two byte combination.
          // These byte values are shifted from the JIS X 0208 values.
          // JIS X 0208 gives details of the shift coded representation.
          for (i = 0; i < this.data.length; i++) {
            let value = Utils.toSJIS(this.data[i])

            // For characters with Shift JIS values from 0x8140 to 0x9FFC:
            if (value >= 0x8140 && value <= 0x9FFC) {
              // Subtract 0x8140 from Shift JIS value
              value -= 0x8140

            // For characters with Shift JIS values from 0xE040 to 0xEBBF
            } else if (value >= 0xE040 && value <= 0xEBBF) {
              // Subtract 0xC140 from Shift JIS value
              value -= 0xC140
            } else {
              throw new Error(
                'Invalid SJIS character: ' + this.data[i] + '\n' +
                'Make sure your charset is UTF-8')
            }

            // Multiply most significant byte of result by 0xC0
            // and add least significant byte to product
            value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

            // Convert result to a 13-bit binary string
            bitBuffer.put(value, 13)
          }
        }

        module.exports = KanjiData
      },
      "lib/core/mask-pattern": function (module, exports, require) {
        /**
         * Data mask pattern reference
         * @type {Object}
         */
        exports.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        }

        /**
         * Weighted penalty scores for the undesirable features
         * @type {Object}
         */
        const PenaltyScores = {
          N1: 3,
          N2: 3,
          N3: 40,
          N4: 10
        }

        /**
         * Check if mask pattern value is valid
         *
         * @param  {Number}  mask    Mask pattern
         * @return {Boolean}         true if valid, false otherwise
         */
        exports.isValid = function isValid (mask) {
          return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
        }

        /**
         * Returns mask pattern from a value.
         * If value is not valid, returns undefined
         *
         * @param  {Number|String} value        Mask pattern value
         * @return {Number}                     Valid mask pattern or undefined
         */
        exports.from = function from (value) {
          return exports.isValid(value) ? parseInt(value, 10) : undefined
        }

        /**
        * Find adjacent modules in row/column with the same color
        * and assign a penalty value.
        *
        * Points: N1 + i
        * i is the amount by which the number of adjacent modules of the same color exceeds 5
        */
        exports.getPenaltyN1 = function getPenaltyN1 (data) {
          const size = data.size
          let points = 0
          let sameCountCol = 0
          let sameCountRow = 0
          let lastCol = null
          let lastRow = null

          for (let row = 0; row < size; row++) {
            sameCountCol = sameCountRow = 0
            lastCol = lastRow = null

            for (let col = 0; col < size; col++) {
              let module = data.get(row, col)
              if (module === lastCol) {
                sameCountCol++
              } else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
                lastCol = module
                sameCountCol = 1
              }

              module = data.get(col, row)
              if (module === lastRow) {
                sameCountRow++
              } else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
                lastRow = module
                sameCountRow = 1
              }
            }

            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
          }

          return points
        }

        /**
         * Find 2x2 blocks with the same color and assign a penalty value
         *
         * Points: N2 * (m - 1) * (n - 1)
         */
        exports.getPenaltyN2 = function getPenaltyN2 (data) {
          const size = data.size
          let points = 0

          for (let row = 0; row < size - 1; row++) {
            for (let col = 0; col < size - 1; col++) {
              const last = data.get(row, col) +
                data.get(row, col + 1) +
                data.get(row + 1, col) +
                data.get(row + 1, col + 1)

              if (last === 4 || last === 0) points++
            }
          }

          return points * PenaltyScores.N2
        }

        /**
         * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
         * preceded or followed by light area 4 modules wide
         *
         * Points: N3 * number of pattern found
         */
        exports.getPenaltyN3 = function getPenaltyN3 (data) {
          const size = data.size
          let points = 0
          let bitsCol = 0
          let bitsRow = 0

          for (let row = 0; row < size; row++) {
            bitsCol = bitsRow = 0
            for (let col = 0; col < size; col++) {
              bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
              if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

              bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
              if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
            }
          }

          return points * PenaltyScores.N3
        }

        /**
         * Calculate proportion of dark modules in entire symbol
         *
         * Points: N4 * k
         *
         * k is the rating of the deviation of the proportion of dark modules
         * in the symbol from 50% in steps of 5%
         */
        exports.getPenaltyN4 = function getPenaltyN4 (data) {
          let darkCount = 0
          const modulesCount = data.data.length

          for (let i = 0; i < modulesCount; i++) darkCount += data.data[i]

          const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

          return k * PenaltyScores.N4
        }

        /**
         * Return mask value at given position
         *
         * @param  {Number} maskPattern Pattern reference value
         * @param  {Number} i           Row
         * @param  {Number} j           Column
         * @return {Boolean}            Mask value
         */
        function getMaskAt (maskPattern, i, j) {
          switch (maskPattern) {
            case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
            case exports.Patterns.PATTERN001: return i % 2 === 0
            case exports.Patterns.PATTERN010: return j % 3 === 0
            case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
            case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
            case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
            case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
            case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

            default: throw new Error('bad maskPattern:' + maskPattern)
          }
        }

        /**
         * Apply a mask pattern to a BitMatrix
         *
         * @param  {Number}    pattern Pattern reference number
         * @param  {BitMatrix} data    BitMatrix data
         */
        exports.applyMask = function applyMask (pattern, data) {
          const size = data.size

          for (let col = 0; col < size; col++) {
            for (let row = 0; row < size; row++) {
              if (data.isReserved(row, col)) continue
              data.xor(row, col, getMaskAt(pattern, row, col))
            }
          }
        }

        /**
         * Returns the best mask pattern for data
         *
         * @param  {BitMatrix} data
         * @return {Number} Mask pattern reference number
         */
        exports.getBestMask = function getBestMask (data, setupFormatFunc) {
          const numPatterns = Object.keys(exports.Patterns).length
          let bestPattern = 0
          let lowerPenalty = Infinity

          for (let p = 0; p < numPatterns; p++) {
            setupFormatFunc(p)
            exports.applyMask(p, data)

            // Calculate penalty
            const penalty =
              exports.getPenaltyN1(data) +
              exports.getPenaltyN2(data) +
              exports.getPenaltyN3(data) +
              exports.getPenaltyN4(data)

            // Undo previously applied mask
            exports.applyMask(p, data)

            if (penalty < lowerPenalty) {
              lowerPenalty = penalty
              bestPattern = p
            }
          }

          return bestPattern
        }
      },
      "lib/core/mode": function (module, exports, require) {
        const VersionCheck = require('./version-check')
        const Regex = require('./regex')

        /**
         * Numeric mode encodes data from the decimal digit set (0 - 9)
         * (byte values 30HEX to 39HEX).
         * Normally, 3 data characters are represented by 10 bits.
         *
         * @type {Object}
         */
        exports.NUMERIC = {
          id: 'Numeric',
          bit: 1 << 0,
          ccBits: [10, 12, 14]
        }

        /**
         * Alphanumeric mode encodes data from a set of 45 characters,
         * i.e. 10 numeric digits (0 - 9),
         *      26 alphabetic characters (A - Z),
         *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
         * Normally, two input characters are represented by 11 bits.
         *
         * @type {Object}
         */
        exports.ALPHANUMERIC = {
          id: 'Alphanumeric',
          bit: 1 << 1,
          ccBits: [9, 11, 13]
        }

        /**
         * In byte mode, data is encoded at 8 bits per character.
         *
         * @type {Object}
         */
        exports.BYTE = {
          id: 'Byte',
          bit: 1 << 2,
          ccBits: [8, 16, 16]
        }

        /**
         * The Kanji mode efficiently encodes Kanji characters in accordance with
         * the Shift JIS system based on JIS X 0208.
         * The Shift JIS values are shifted from the JIS X 0208 values.
         * JIS X 0208 gives details of the shift coded representation.
         * Each two-byte character value is compacted to a 13-bit binary codeword.
         *
         * @type {Object}
         */
        exports.KANJI = {
          id: 'Kanji',
          bit: 1 << 3,
          ccBits: [8, 10, 12]
        }

        /**
         * Mixed mode will contain a sequences of data in a combination of any of
         * the modes described above
         *
         * @type {Object}
         */
        exports.MIXED = {
          bit: -1
        }

        /**
         * Returns the number of bits needed to store the data length
         * according to QR Code specifications.
         *
         * @param  {Mode}   mode    Data mode
         * @param  {Number} version QR Code version
         * @return {Number}         Number of bits
         */
        exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
          if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

          if (!VersionCheck.isValid(version)) {
            throw new Error('Invalid version: ' + version)
          }

          if (version >= 1 && version < 10) return mode.ccBits[0]
          else if (version < 27) return mode.ccBits[1]
          return mode.ccBits[2]
        }

        /**
         * Returns the most efficient mode to store the specified data
         *
         * @param  {String} dataStr Input data string
         * @return {Mode}           Best mode
         */
        exports.getBestModeForData = function getBestModeForData (dataStr) {
          if (Regex.testNumeric(dataStr)) return exports.NUMERIC
          else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
          else if (Regex.testKanji(dataStr)) return exports.KANJI
          else return exports.BYTE
        }

        /**
         * Return mode name as string
         *
         * @param {Mode} mode Mode object
         * @returns {String}  Mode name
         */
        exports.toString = function toString (mode) {
          if (mode && mode.id) return mode.id
          throw new Error('Invalid mode')
        }

        /**
         * Check if input param is a valid mode object
         *
         * @param   {Mode}    mode Mode object
         * @returns {Boolean} True if valid mode, false otherwise
         */
        exports.isValid = function isValid (mode) {
          return mode && mode.bit && mode.ccBits
        }

        /**
         * Get mode object from its name
         *
         * @param   {String} string Mode name
         * @returns {Mode}          Mode object
         */
        function fromString (string) {
          if (typeof string !== 'string') {
            throw new Error('Param is not a string')
          }

          const lcStr = string.toLowerCase()

          switch (lcStr) {
            case 'numeric':
              return exports.NUMERIC
            case 'alphanumeric':
              return exports.ALPHANUMERIC
            case 'kanji':
              return exports.KANJI
            case 'byte':
              return exports.BYTE
            default:
              throw new Error('Unknown mode: ' + string)
          }
        }

        /**
         * Returns mode from a value.
         * If value is not a valid mode, returns defaultValue
         *
         * @param  {Mode|String} value        Encoding mode
         * @param  {Mode}        defaultValue Fallback value
         * @return {Mode}                     Encoding mode
         */
        exports.from = function from (value, defaultValue) {
          if (exports.isValid(value)) {
            return value
          }

          try {
            return fromString(value)
          } catch (e) {
            return defaultValue
          }
        }
      },
      "lib/core/numeric-data": function (module, exports, require) {
        const Mode = require('./mode')

        function NumericData (data) {
          this.mode = Mode.NUMERIC
          this.data = data.toString()
        }

        NumericData.getBitsLength = function getBitsLength (length) {
          return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
        }

        NumericData.prototype.getLength = function getLength () {
          return this.data.length
        }

        NumericData.prototype.getBitsLength = function getBitsLength () {
          return NumericData.getBitsLength(this.data.length)
        }

        NumericData.prototype.write = function write (bitBuffer) {
          let i, group, value

          // The input data string is divided into groups of three digits,
          // and each group is converted to its 10-bit binary equivalent.
          for (i = 0; i + 3 <= this.data.length; i += 3) {
            group = this.data.substr(i, 3)
            value = parseInt(group, 10)

            bitBuffer.put(value, 10)
          }

          // If the number of input digits is not an exact multiple of three,
          // the final one or two digits are converted to 4 or 7 bits respectively.
          const remainingNum = this.data.length - i
          if (remainingNum > 0) {
            group = this.data.substr(i)
            value = parseInt(group, 10)

            bitBuffer.put(value, remainingNum * 3 + 1)
          }
        }

        module.exports = NumericData
      },
      "lib/core/polynomial": function (module, exports, require) {
        const GF = require('./galois-field')

        /**
         * Multiplies two polynomials inside Galois Field
         *
         * @param  {Uint8Array} p1 Polynomial
         * @param  {Uint8Array} p2 Polynomial
         * @return {Uint8Array}    Product of p1 and p2
         */
        exports.mul = function mul (p1, p2) {
          const coeff = new Uint8Array(p1.length + p2.length - 1)

          for (let i = 0; i < p1.length; i++) {
            for (let j = 0; j < p2.length; j++) {
              coeff[i + j] ^= GF.mul(p1[i], p2[j])
            }
          }

          return coeff
        }

        /**
         * Calculate the remainder of polynomials division
         *
         * @param  {Uint8Array} divident Polynomial
         * @param  {Uint8Array} divisor  Polynomial
         * @return {Uint8Array}          Remainder
         */
        exports.mod = function mod (divident, divisor) {
          let result = new Uint8Array(divident)

          while ((result.length - divisor.length) >= 0) {
            const coeff = result[0]

            for (let i = 0; i < divisor.length; i++) {
              result[i] ^= GF.mul(divisor[i], coeff)
            }

            // remove all zeros from buffer head
            let offset = 0
            while (offset < result.length && result[offset] === 0) offset++
            result = result.slice(offset)
          }

          return result
        }

        /**
         * Generate an irreducible generator polynomial of specified degree
         * (used by Reed-Solomon encoder)
         *
         * @param  {Number} degree Degree of the generator polynomial
         * @return {Uint8Array}    Buffer containing polynomial coefficients
         */
        exports.generateECPolynomial = function generateECPolynomial (degree) {
          let poly = new Uint8Array([1])
          for (let i = 0; i < degree; i++) {
            poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]))
          }

          return poly
        }
      },
      "lib/core/qrcode": function (module, exports, require) {
        const Utils = require('./utils')
        const ECLevel = require('./error-correction-level')
        const BitBuffer = require('./bit-buffer')
        const BitMatrix = require('./bit-matrix')
        const AlignmentPattern = require('./alignment-pattern')
        const FinderPattern = require('./finder-pattern')
        const MaskPattern = require('./mask-pattern')
        const ECCode = require('./error-correction-code')
        const ReedSolomonEncoder = require('./reed-solomon-encoder')
        const Version = require('./version')
        const FormatInfo = require('./format-info')
        const Mode = require('./mode')
        const Segments = require('./segments')

        /**
         * QRCode for JavaScript
         *
         * modified by Ryan Day for nodejs support
         * Copyright (c) 2011 Ryan Day
         *
         * Licensed under the MIT license:
         *   http://www.opensource.org/licenses/mit-license.php
         *
        //---------------------------------------------------------------------
        // QRCode for JavaScript
        //
        // Copyright (c) 2009 Kazuhiko Arase
        //
        // URL: http://www.d-project.com/
        //
        // Licensed under the MIT license:
        //   http://www.opensource.org/licenses/mit-license.php
        //
        // The word "QR Code" is registered trademark of
        // DENSO WAVE INCORPORATED
        //   http://www.denso-wave.com/qrcode/faqpatent-e.html
        //
        //---------------------------------------------------------------------
        */

        /**
         * Add finder patterns bits to matrix
         *
         * @param  {BitMatrix} matrix  Modules matrix
         * @param  {Number}    version QR Code version
         */
        function setupFinderPattern (matrix, version) {
          const size = matrix.size
          const pos = FinderPattern.getPositions(version)

          for (let i = 0; i < pos.length; i++) {
            const row = pos[i][0]
            const col = pos[i][1]

            for (let r = -1; r <= 7; r++) {
              if (row + r <= -1 || size <= row + r) continue

              for (let c = -1; c <= 7; c++) {
                if (col + c <= -1 || size <= col + c) continue

                if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
                  (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
                  (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
                  matrix.set(row + r, col + c, true, true)
                } else {
                  matrix.set(row + r, col + c, false, true)
                }
              }
            }
          }
        }

        /**
         * Add timing pattern bits to matrix
         *
         * Note: this function must be called before {@link setupAlignmentPattern}
         *
         * @param  {BitMatrix} matrix Modules matrix
         */
        function setupTimingPattern (matrix) {
          const size = matrix.size

          for (let r = 8; r < size - 8; r++) {
            const value = r % 2 === 0
            matrix.set(r, 6, value, true)
            matrix.set(6, r, value, true)
          }
        }

        /**
         * Add alignment patterns bits to matrix
         *
         * Note: this function must be called after {@link setupTimingPattern}
         *
         * @param  {BitMatrix} matrix  Modules matrix
         * @param  {Number}    version QR Code version
         */
        function setupAlignmentPattern (matrix, version) {
          const pos = AlignmentPattern.getPositions(version)

          for (let i = 0; i < pos.length; i++) {
            const row = pos[i][0]
            const col = pos[i][1]

            for (let r = -2; r <= 2; r++) {
              for (let c = -2; c <= 2; c++) {
                if (r === -2 || r === 2 || c === -2 || c === 2 ||
                  (r === 0 && c === 0)) {
                  matrix.set(row + r, col + c, true, true)
                } else {
                  matrix.set(row + r, col + c, false, true)
                }
              }
            }
          }
        }

        /**
         * Add version info bits to matrix
         *
         * @param  {BitMatrix} matrix  Modules matrix
         * @param  {Number}    version QR Code version
         */
        function setupVersionInfo (matrix, version) {
          const size = matrix.size
          const bits = Version.getEncodedBits(version)
          let row, col, mod

          for (let i = 0; i < 18; i++) {
            row = Math.floor(i / 3)
            col = i % 3 + size - 8 - 3
            mod = ((bits >> i) & 1) === 1

            matrix.set(row, col, mod, true)
            matrix.set(col, row, mod, true)
          }
        }

        /**
         * Add format info bits to matrix
         *
         * @param  {BitMatrix} matrix               Modules matrix
         * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
         * @param  {Number}    maskPattern          Mask pattern reference value
         */
        function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
          const size = matrix.size
          const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
          let i, mod

          for (i = 0; i < 15; i++) {
            mod = ((bits >> i) & 1) === 1

            // vertical
            if (i < 6) {
              matrix.set(i, 8, mod, true)
            } else if (i < 8) {
              matrix.set(i + 1, 8, mod, true)
            } else {
              matrix.set(size - 15 + i, 8, mod, true)
            }

            // horizontal
            if (i < 8) {
              matrix.set(8, size - i - 1, mod, true)
            } else if (i < 9) {
              matrix.set(8, 15 - i - 1 + 1, mod, true)
            } else {
              matrix.set(8, 15 - i - 1, mod, true)
            }
          }

          // fixed module
          matrix.set(size - 8, 8, 1, true)
        }

        /**
         * Add encoded data bits to matrix
         *
         * @param  {BitMatrix}  matrix Modules matrix
         * @param  {Uint8Array} data   Data codewords
         */
        function setupData (matrix, data) {
          const size = matrix.size
          let inc = -1
          let row = size - 1
          let bitIndex = 7
          let byteIndex = 0

          for (let col = size - 1; col > 0; col -= 2) {
            if (col === 6) col--

            while (true) {
              for (let c = 0; c < 2; c++) {
                if (!matrix.isReserved(row, col - c)) {
                  let dark = false

                  if (byteIndex < data.length) {
                    dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
                  }

                  matrix.set(row, col - c, dark)
                  bitIndex--

                  if (bitIndex === -1) {
                    byteIndex++
                    bitIndex = 7
                  }
                }
              }

              row += inc

              if (row < 0 || size <= row) {
                row -= inc
                inc = -inc
                break
              }
            }
          }
        }

        /**
         * Create encoded codewords from data input
         *
         * @param  {Number}   version              QR Code version
         * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
         * @param  {ByteData} data                 Data input
         * @return {Uint8Array}                    Buffer containing encoded codewords
         */
        function createData (version, errorCorrectionLevel, segments) {
          // Prepare data buffer
          const buffer = new BitBuffer()

          segments.forEach(function (data) {
            // prefix data with mode indicator (4 bits)
            buffer.put(data.mode.bit, 4)

            // Prefix data with character count indicator.
            // The character count indicator is a string of bits that represents the
            // number of characters that are being encoded.
            // The character count indicator must be placed after the mode indicator
            // and must be a certain number of bits long, depending on the QR version
            // and data mode
            // @see {@link Mode.getCharCountIndicator}.
            buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

            // add binary data sequence to buffer
            data.write(buffer)
          })

          // Calculate required number of bits
          const totalCodewords = Utils.getSymbolTotalCodewords(version)
          const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
          const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

          // Add a terminator.
          // If the bit string is shorter than the total number of required bits,
          // a terminator of up to four 0s must be added to the right side of the string.
          // If the bit string is more than four bits shorter than the required number of bits,
          // add four 0s to the end.
          if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
            buffer.put(0, 4)
          }

          // If the bit string is fewer than four bits shorter, add only the number of 0s that
          // are needed to reach the required number of bits.

          // After adding the terminator, if the number of bits in the string is not a multiple of 8,
          // pad the string on the right with 0s to make the string's length a multiple of 8.
          while (buffer.getLengthInBits() % 8 !== 0) {
            buffer.putBit(0)
          }

          // Add pad bytes if the string is still shorter than the total number of required bits.
          // Extend the buffer to fill the data capacity of the symbol corresponding to
          // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
          // and 00010001 (0x11) alternately.
          const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
          for (let i = 0; i < remainingByte; i++) {
            buffer.put(i % 2 ? 0x11 : 0xEC, 8)
          }

          return createCodewords(buffer, version, errorCorrectionLevel)
        }

        /**
         * Encode input data with Reed-Solomon and return codewords with
         * relative error correction bits
         *
         * @param  {BitBuffer} bitBuffer            Data to encode
         * @param  {Number}    version              QR Code version
         * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
         * @return {Uint8Array}                     Buffer containing encoded codewords
         */
        function createCodewords (bitBuffer, version, errorCorrectionLevel) {
          // Total codewords for this QR code version (Data + Error correction)
          const totalCodewords = Utils.getSymbolTotalCodewords(version)

          // Total number of error correction codewords
          const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

          // Total number of data codewords
          const dataTotalCodewords = totalCodewords - ecTotalCodewords

          // Total number of blocks
          const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

          // Calculate how many blocks each group should contain
          const blocksInGroup2 = totalCodewords % ecTotalBlocks
          const blocksInGroup1 = ecTotalBlocks - blocksInGroup2

          const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

          const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
          const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

          // Number of EC codewords is the same for both groups
          const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

          // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
          const rs = new ReedSolomonEncoder(ecCount)

          let offset = 0
          const dcData = new Array(ecTotalBlocks)
          const ecData = new Array(ecTotalBlocks)
          let maxDataSize = 0
          const buffer = new Uint8Array(bitBuffer.buffer)

          // Divide the buffer into the required number of blocks
          for (let b = 0; b < ecTotalBlocks; b++) {
            const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

            // extract a block of data from buffer
            dcData[b] = buffer.slice(offset, offset + dataSize)

            // Calculate EC codewords for this data block
            ecData[b] = rs.encode(dcData[b])

            offset += dataSize
            maxDataSize = Math.max(maxDataSize, dataSize)
          }

          // Create final data
          // Interleave the data and error correction codewords from each block
          const data = new Uint8Array(totalCodewords)
          let index = 0
          let i, r

          // Add data codewords
          for (i = 0; i < maxDataSize; i++) {
            for (r = 0; r < ecTotalBlocks; r++) {
              if (i < dcData[r].length) {
                data[index++] = dcData[r][i]
              }
            }
          }

          // Apped EC codewords
          for (i = 0; i < ecCount; i++) {
            for (r = 0; r < ecTotalBlocks; r++) {
              data[index++] = ecData[r][i]
            }
          }

          return data
        }

        /**
         * Build QR Code symbol
         *
         * @param  {String} data                 Input string
         * @param  {Number} version              QR Code version
         * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
         * @param  {MaskPattern} maskPattern     Mask pattern
         * @return {Object}                      Object containing symbol data
         */
        function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
          let segments

          if (Array.isArray(data)) {
            segments = Segments.fromArray(data)
          } else if (typeof data === 'string') {
            let estimatedVersion = version

            if (!estimatedVersion) {
              const rawSegments = Segments.rawSplit(data)

              // Estimate best version that can contain raw splitted segments
              estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel)
            }

            // Build optimized segments
            // If estimated version is undefined, try with the highest version
            segments = Segments.fromString(data, estimatedVersion || 40)
          } else {
            throw new Error('Invalid data')
          }

          // Get the min version that can contain data
          const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel)

          // If no version is found, data cannot be stored
          if (!bestVersion) {
            throw new Error('The amount of data is too big to be stored in a QR Code')
          }

          // If not specified, use min version as default
          if (!version) {
            version = bestVersion

          // Check if the specified version can contain the data
          } else if (version < bestVersion) {
            throw new Error('\n' +
              'The chosen QR Code version cannot contain this amount of data.\n' +
              'Minimum version required to store current data is: ' + bestVersion + '.\n'
            )
          }

          const dataBits = createData(version, errorCorrectionLevel, segments)

          // Allocate matrix buffer
          const moduleCount = Utils.getSymbolSize(version)
          const modules = new BitMatrix(moduleCount)

          // Add function modules
          setupFinderPattern(modules, version)
          setupTimingPattern(modules)
          setupAlignmentPattern(modules, version)

          // Add temporary dummy bits for format info just to set them as reserved.
          // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
          // since the masking operation must be performed only on the encoding region.
          // These blocks will be replaced with correct values later in code.
          setupFormatInfo(modules, errorCorrectionLevel, 0)

          if (version >= 7) {
            setupVersionInfo(modules, version)
          }

          // Add data codewords
          setupData(modules, dataBits)

          if (isNaN(maskPattern)) {
            // Find best mask pattern
            maskPattern = MaskPattern.getBestMask(modules,
              setupFormatInfo.bind(null, modules, errorCorrectionLevel))
          }

          // Apply mask pattern
          MaskPattern.applyMask(maskPattern, modules)

          // Replace format info bits with correct values
          setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

          return {
            modules: modules,
            version: version,
            errorCorrectionLevel: errorCorrectionLevel,
            maskPattern: maskPattern,
            segments: segments
          }
        }

        /**
         * QR Code
         *
         * @param {String | Array} data                 Input data
         * @param {Object} options                      Optional configurations
         * @param {Number} options.version              QR Code version
         * @param {String} options.errorCorrectionLevel Error correction level
         * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
         */
        exports.create = function create (data, options) {
          if (typeof data === 'undefined' || data === '') {
            throw new Error('No input text')
          }

          let errorCorrectionLevel = ECLevel.M
          let version
          let mask

          if (typeof options !== 'undefined') {
            // Use higher error correction level as default
            errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
            version = Version.from(options.version)
            mask = MaskPattern.from(options.maskPattern)

            if (options.toSJISFunc) {
              Utils.setToSJISFunction(options.toSJISFunc)
            }
          }

          return createSymbol(data, version, errorCorrectionLevel, mask)
        }
      },
      "lib/core/reed-solomon-encoder": function (module, exports, require) {
        const Polynomial = require('./polynomial')

        function ReedSolomonEncoder (degree) {
          this.genPoly = undefined
          this.degree = degree

          if (this.degree) this.initialize(this.degree)
        }

        /**
         * Initialize the encoder.
         * The input param should correspond to the number of error correction codewords.
         *
         * @param  {Number} degree
         */
        ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
          // create an irreducible generator polynomial
          this.degree = degree
          this.genPoly = Polynomial.generateECPolynomial(this.degree)
        }

        /**
         * Encodes a chunk of data
         *
         * @param  {Uint8Array} data Buffer containing input data
         * @return {Uint8Array}      Buffer containing encoded data
         */
        ReedSolomonEncoder.prototype.encode = function encode (data) {
          if (!this.genPoly) {
            throw new Error('Encoder not initialized')
          }

          // Calculate EC for this data block
          // extends data size to data+genPoly size
          const paddedData = new Uint8Array(data.length + this.degree)
          paddedData.set(data)

          // The error correction codewords are the remainder after dividing the data codewords
          // by a generator polynomial
          const remainder = Polynomial.mod(paddedData, this.genPoly)

          // return EC data blocks (last n byte, where n is the degree of genPoly)
          // If coefficients number in remainder are less than genPoly degree,
          // pad with 0s to the left to reach the needed number of coefficients
          const start = this.degree - remainder.length
          if (start > 0) {
            const buff = new Uint8Array(this.degree)
            buff.set(remainder, start)

            return buff
          }

          return remainder
        }

        module.exports = ReedSolomonEncoder
      },
      "lib/core/regex": function (module, exports, require) {
        const numeric = '[0-9]+'
        const alphanumeric = '[A-Z $%*+\\-./:]+'
        let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
          '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
          '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
          '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
        kanji = kanji.replace(/u/g, '\\u')

        const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

        exports.KANJI = new RegExp(kanji, 'g')
        exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
        exports.BYTE = new RegExp(byte, 'g')
        exports.NUMERIC = new RegExp(numeric, 'g')
        exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

        const TEST_KANJI = new RegExp('^' + kanji + '$')
        const TEST_NUMERIC = new RegExp('^' + numeric + '$')
        const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

        exports.testKanji = function testKanji (str) {
          return TEST_KANJI.test(str)
        }

        exports.testNumeric = function testNumeric (str) {
          return TEST_NUMERIC.test(str)
        }

        exports.testAlphanumeric = function testAlphanumeric (str) {
          return TEST_ALPHANUMERIC.test(str)
        }
      },
      "lib/core/segments": function (module, exports, require) {
        const Mode = require('./mode')
        const NumericData = require('./numeric-data')
        const AlphanumericData = require('./alphanumeric-data')
        const ByteData = require('./byte-data')
        const KanjiData = require('./kanji-data')
        const Regex = require('./regex')
        const Utils = require('./utils')
        const dijkstra = require('dijkstrajs')

        /**
         * Returns UTF8 byte length
         *
         * @param  {String} str Input string
         * @return {Number}     Number of byte
         */
        function getStringByteLength (str) {
          return unescape(encodeURIComponent(str)).length
        }

        /**
         * Get a list of segments of the specified mode
         * from a string
         *
         * @param  {Mode}   mode Segment mode
         * @param  {String} str  String to process
         * @return {Array}       Array of object with segments data
         */
        function getSegments (regex, mode, str) {
          const segments = []
          let result

          while ((result = regex.exec(str)) !== null) {
            segments.push({
              data: result[0],
              index: result.index,
              mode: mode,
              length: result[0].length
            })
          }

          return segments
        }

        /**
         * Extracts a series of segments with the appropriate
         * modes from a string
         *
         * @param  {String} dataStr Input string
         * @return {Array}          Array of object with segments data
         */
        function getSegmentsFromString (dataStr) {
          const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
          const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
          let byteSegs
          let kanjiSegs

          if (Utils.isKanjiModeEnabled()) {
            byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
            kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
          } else {
            byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
            kanjiSegs = []
          }

          const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

          return segs
            .sort(function (s1, s2) {
              return s1.index - s2.index
            })
            .map(function (obj) {
              return {
                data: obj.data,
                mode: obj.mode,
                length: obj.length
              }
            })
        }

        /**
         * Returns how many bits are needed to encode a string of
         * specified length with the specified mode
         *
         * @param  {Number} length String length
         * @param  {Mode} mode     Segment mode
         * @return {Number}        Bit length
         */
        function getSegmentBitsLength (length, mode) {
          switch (mode) {
            case Mode.NUMERIC:
              return NumericData.getBitsLength(length)
            case Mode.ALPHANUMERIC:
              return AlphanumericData.getBitsLength(length)
            case Mode.KANJI:
              return KanjiData.getBitsLength(length)
            case Mode.BYTE:
              return ByteData.getBitsLength(length)
          }
        }

        /**
         * Merges adjacent segments which have the same mode
         *
         * @param  {Array} segs Array of object with segments data
         * @return {Array}      Array of object with segments data
         */
        function mergeSegments (segs) {
          return segs.reduce(function (acc, curr) {
            const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
            if (prevSeg && prevSeg.mode === curr.mode) {
              acc[acc.length - 1].data += curr.data
              return acc
            }

            acc.push(curr)
            return acc
          }, [])
        }

        /**
         * Generates a list of all possible nodes combination which
         * will be used to build a segments graph.
         *
         * Nodes are divided by groups. Each group will contain a list of all the modes
         * in which is possible to encode the given text.
         *
         * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
         * The group for '12345' will contain then 3 objects, one for each
         * possible encoding mode.
         *
         * Each node represents a possible segment.
         *
         * @param  {Array} segs Array of object with segments data
         * @return {Array}      Array of object with segments data
         */
        function buildNodes (segs) {
          const nodes = []
          for (let i = 0; i < segs.length; i++) {
            const seg = segs[i]

            switch (seg.mode) {
              case Mode.NUMERIC:
                nodes.push([seg,
                  { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
                  { data: seg.data, mode: Mode.BYTE, length: seg.length }
                ])
                break
              case Mode.ALPHANUMERIC:
                nodes.push([seg,
                  { data: seg.data, mode: Mode.BYTE, length: seg.length }
                ])
                break
              case Mode.KANJI:
                nodes.push([seg,
                  { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
                ])
                break
              case Mode.BYTE:
                nodes.push([
                  { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
                ])
            }
          }

          return nodes
        }

        /**
         * Builds a graph from a list of nodes.
         * All segments in each node group will be connected with all the segments of
         * the next group and so on.
         *
         * At each connection will be assigned a weight depending on the
         * segment's byte length.
         *
         * @param  {Array} nodes    Array of object with segments data
         * @param  {Number} version QR Code version
         * @return {Object}         Graph of all possible segments
         */
        function buildGraph (nodes, version) {
          const table = {}
          const graph = { start: {} }
          let prevNodeIds = ['start']

          for (let i = 0; i < nodes.length; i++) {
            const nodeGroup = nodes[i]
            const currentNodeIds = []

            for (let j = 0; j < nodeGroup.length; j++) {
              const node = nodeGroup[j]
              const key = '' + i + j

              currentNodeIds.push(key)
              table[key] = { node: node, lastCount: 0 }
              graph[key] = {}

              for (let n = 0; n < prevNodeIds.length; n++) {
                const prevNodeId = prevNodeIds[n]

                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                  graph[prevNodeId][key] =
                    getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
                    getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

                  table[prevNodeId].lastCount += node.length
                } else {
                  if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

                  graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
                    4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
                }
              }
            }

            prevNodeIds = currentNodeIds
          }

          for (let n = 0; n < prevNodeIds.length; n++) {
            graph[prevNodeIds[n]].end = 0
          }

          return { map: graph, table: table }
        }

        /**
         * Builds a segment from a specified data and mode.
         * If a mode is not specified, the more suitable will be used.
         *
         * @param  {String} data             Input data
         * @param  {Mode | String} modesHint Data mode
         * @return {Segment}                 Segment
         */
        function buildSingleSegment (data, modesHint) {
          let mode
          const bestMode = Mode.getBestModeForData(data)

          mode = Mode.from(modesHint, bestMode)

          // Make sure data can be encoded
          if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
            throw new Error('"' + data + '"' +
              ' cannot be encoded with mode ' + Mode.toString(mode) +
              '.\n Suggested mode is: ' + Mode.toString(bestMode))
          }

          // Use Mode.BYTE if Kanji support is disabled
          if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
            mode = Mode.BYTE
          }

          switch (mode) {
            case Mode.NUMERIC:
              return new NumericData(data)

            case Mode.ALPHANUMERIC:
              return new AlphanumericData(data)

            case Mode.KANJI:
              return new KanjiData(data)

            case Mode.BYTE:
              return new ByteData(data)
          }
        }

        /**
         * Builds a list of segments from an array.
         * Array can contain Strings or Objects with segment's info.
         *
         * For each item which is a string, will be generated a segment with the given
         * string and the more appropriate encoding mode.
         *
         * For each item which is an object, will be generated a segment with the given
         * data and mode.
         * Objects must contain at least the property "data".
         * If property "mode" is not present, the more suitable mode will be used.
         *
         * @param  {Array} array Array of objects with segments data
         * @return {Array}       Array of Segments
         */
        exports.fromArray = function fromArray (array) {
          return array.reduce(function (acc, seg) {
            if (typeof seg === 'string') {
              acc.push(buildSingleSegment(seg, null))
            } else if (seg.data) {
              acc.push(buildSingleSegment(seg.data, seg.mode))
            }

            return acc
          }, [])
        }

        /**
         * Builds an optimized sequence of segments from a string,
         * which will produce the shortest possible bitstream.
         *
         * @param  {String} data    Input string
         * @param  {Number} version QR Code version
         * @return {Array}          Array of segments
         */
        exports.fromString = function fromString (data, version) {
          const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

          const nodes = buildNodes(segs)
          const graph = buildGraph(nodes, version)
          const path = dijkstra.find_path(graph.map, 'start', 'end')

          const optimizedSegs = []
          for (let i = 1; i < path.length - 1; i++) {
            optimizedSegs.push(graph.table[path[i]].node)
          }

          return exports.fromArray(mergeSegments(optimizedSegs))
        }

        /**
         * Splits a string in various segments with the modes which
         * best represent their content.
         * The produced segments are far from being optimized.
         * The output of this function is only used to estimate a QR Code version
         * which may contain the data.
         *
         * @param  {string} data Input string
         * @return {Array}       Array of segments
         */
        exports.rawSplit = function rawSplit (data) {
          return exports.fromArray(
            getSegmentsFromString(data, Utils.isKanjiModeEnabled())
          )
        }
      },
      "lib/core/utils": function (module, exports, require) {
        let toSJISFunction
        const CODEWORDS_COUNT = [
          0, // Not used
          26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
          404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
          1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
          2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
        ]

        /**
         * Returns the QR Code size for the specified version
         *
         * @param  {Number} version QR Code version
         * @return {Number}         size of QR code
         */
        exports.getSymbolSize = function getSymbolSize (version) {
          if (!version) throw new Error('"version" cannot be null or undefined')
          if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
          return version * 4 + 17
        }

        /**
         * Returns the total number of codewords used to store data and EC information.
         *
         * @param  {Number} version QR Code version
         * @return {Number}         Data length in bits
         */
        exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
          return CODEWORDS_COUNT[version]
        }

        /**
         * Encode data with Bose-Chaudhuri-Hocquenghem
         *
         * @param  {Number} data Value to encode
         * @return {Number}      Encoded value
         */
        exports.getBCHDigit = function (data) {
          let digit = 0

          while (data !== 0) {
            digit++
            data >>>= 1
          }

          return digit
        }

        exports.setToSJISFunction = function setToSJISFunction (f) {
          if (typeof f !== 'function') {
            throw new Error('"toSJISFunc" is not a valid function.')
          }

          toSJISFunction = f
        }

        exports.isKanjiModeEnabled = function () {
          return typeof toSJISFunction !== 'undefined'
        }

        exports.toSJIS = function toSJIS (kanji) {
          return toSJISFunction(kanji)
        }
      },
      "lib/core/version-check": function (module, exports, require) {
        /**
         * Check if QR Code version is valid
         *
         * @param  {Number}  version QR Code version
         * @return {Boolean}         true if valid version, false otherwise
         */
        exports.isValid = function isValid (version) {
          return !isNaN(version) && version >= 1 && version <= 40
        }
      },
      "lib/core/version": function (module, exports, require) {
        const Utils = require('./utils')
        const ECCode = require('./error-correction-code')
        const ECLevel = require('./error-correction-level')
        const Mode = require('./mode')
        const VersionCheck = require('./version-check')

        // Generator polynomial used to encode version information
        const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
        const G18_BCH = Utils.getBCHDigit(G18)

        function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
          for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
            if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
              return currentVersion
            }
          }

          return undefined
        }

        function getReservedBitsCount (mode, version) {
          // Character count indicator + mode indicator bits
          return Mode.getCharCountIndicator(mode, version) + 4
        }

        function getTotalBitsFromDataArray (segments, version) {
          let totalBits = 0

          segments.forEach(function (data) {
            const reservedBits = getReservedBitsCount(data.mode, version)
            totalBits += reservedBits + data.getBitsLength()
          })

          return totalBits
        }

        function getBestVersionForMixedData (segments, errorCorrectionLevel) {
          for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
            const length = getTotalBitsFromDataArray(segments, currentVersion)
            if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
              return currentVersion
            }
          }

          return undefined
        }

        /**
         * Returns version number from a value.
         * If value is not a valid version, returns defaultValue
         *
         * @param  {Number|String} value        QR Code version
         * @param  {Number}        defaultValue Fallback value
         * @return {Number}                     QR Code version number
         */
        exports.from = function from (value, defaultValue) {
          if (VersionCheck.isValid(value)) {
            return parseInt(value, 10)
          }

          return defaultValue
        }

        /**
         * Returns how much data can be stored with the specified QR code version
         * and error correction level
         *
         * @param  {Number} version              QR Code version (1-40)
         * @param  {Number} errorCorrectionLevel Error correction level
         * @param  {Mode}   mode                 Data mode
         * @return {Number}                      Quantity of storable data
         */
        exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
          if (!VersionCheck.isValid(version)) {
            throw new Error('Invalid QR Code version')
          }

          // Use Byte mode as default
          if (typeof mode === 'undefined') mode = Mode.BYTE

          // Total codewords for this QR code version (Data + Error correction)
          const totalCodewords = Utils.getSymbolTotalCodewords(version)

          // Total number of error correction codewords
          const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

          // Total number of data codewords
          const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

          if (mode === Mode.MIXED) return dataTotalCodewordsBits

          const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

          // Return max number of storable codewords
          switch (mode) {
            case Mode.NUMERIC:
              return Math.floor((usableBits / 10) * 3)

            case Mode.ALPHANUMERIC:
              return Math.floor((usableBits / 11) * 2)

            case Mode.KANJI:
              return Math.floor(usableBits / 13)

            case Mode.BYTE:
            default:
              return Math.floor(usableBits / 8)
          }
        }

        /**
         * Returns the minimum version needed to contain the amount of data
         *
         * @param  {Segment} data                    Segment of data
         * @param  {Number} [errorCorrectionLevel=H] Error correction level
         * @param  {Mode} mode                       Data mode
         * @return {Number}                          QR Code version
         */
        exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
          let seg

          const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

          if (Array.isArray(data)) {
            if (data.length > 1) {
              return getBestVersionForMixedData(data, ecl)
            }

            if (data.length === 0) {
              return 1
            }

            seg = data[0]
          } else {
            seg = data
          }

          return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
        }

        /**
         * Returns version information with relative error correction bits
         *
         * The version information is included in QR Code symbols of version 7 or larger.
         * It consists of an 18-bit sequence containing 6 data bits,
         * with 12 error correction bits calculated using the (18, 6) Golay code.
         *
         * @param  {Number} version QR Code version
         * @return {Number}         Encoded version info bits
         */
        exports.getEncodedBits = function getEncodedBits (version) {
          if (!VersionCheck.isValid(version) || version < 7) {
            throw new Error('Invalid QR Code version')
          }

          let d = version << 12

          while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
            d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
          }

          return (version << 12) | d
        }
      },
    };
    const QR_MODULE_CACHE = {};
    function qrLoad(id) {
      if (QR_MODULE_CACHE[id]) return QR_MODULE_CACHE[id].exports;
      const factory = QR_MODULE_FACTORIES[id];
      if (typeof factory !== "function") throw new Error("pocket-h5 qr: missing module " + id);
      const module = { exports: {} };
      QR_MODULE_CACHE[id] = module;
      factory(module, module.exports, qrRequireFrom(id));
      return module.exports;
    }
    function qrRequireFrom(fromId) {
      const directory = fromId.split("/").slice(0, -1).join("/");
      return function qrRequire(spec) {
        if (spec === "dijkstrajs") return qrLoad("node_modules/dijkstrajs/dijkstra");
        if (spec.slice(0, 2) === "./" || spec.slice(0, 3) === "../") {
          const parts = directory === "" ? [] : directory.split("/");
          for (const segment of spec.split("/")) {
            if (segment === "." || segment === "") continue;
            else if (segment === "..") parts.pop();
            else parts.push(segment);
          }
          return qrLoad(parts.join("/").replace(/\.js$/, ""));
        }
        throw new Error("pocket-h5 qr: unsupported module " + spec);
      };
    }
    function createQrMatrix(text) {
      const qr = qrLoad("lib/core/qrcode").create(String(text), { errorCorrectionLevel: "M" });
      return { size: qr.modules.size, data: qr.modules.data, version: qr.version };
    }


    /* ---- 设备边框（用户提供的 iPhone 外框；屏幕开口已抠空，几何见 src/client/assets/README.md） ---- */
    const POCKET_BEZEL_IMAGE = "data:image/webp;base64,UklGRi7vv70AAFdFQlBWUDhYCgAAABAAAAAlBQDvv70KAEFMUEjvv70jAAABEe+/ve+/vSQp77+9VHDvv73vv73vv710dz/vv71MEe+/ve+/vQDvv71f2JTvv73vv73vv71q77+977+977+9aSVpO3tNFQHvv715QRXvv70APGsab2cAHlXvv73vv70dCDbvv73vv71p77+9H++/vRFJ77+977+977+9OAEJ77+9J0Xvv73vv70SLX/vv73vv71PDe+/vW/vv716Iy1/Y++/vUTvv71E77+977+9WyB8Fe+/ve+/ve+/vSoQLu+/ve+/vRXEie+/ve+/ve+/ve+/ve+/ve+/vX/vv71977+977+9G++/ve+/vW5877+977+977+977+9dO+/vUrvv71Qde+/vU3vv70pJO+/vXUm77+9DO+/vVgSbe+/ve+/vRNIUu+/vcSk77+977+977+977+9EWwSRgZN77+9Je+/vTUACu+/vVrvv70HAO+/ve+/vXY677+9Hu+/vXfvv70q77+9ce+/ve+/vXFDEu+/vX9p77+9Ce+/ve+/vRsREyAbbEvvv71HM+OVu++/vW3vv70yFWoJ77+9JnlhKnRiX++/vTZtaO+/vTRJ77+9B++/vUECeUkuSDrvv70vfFQq5J+n77+9Tu+/vSDvv73vv70Z77+9Ghfvv70BXR/vv73vv73vv73vv71CEO+/vW1D77+977+90Zfvv70sAO+/vR0REzAB3rBtW++/vTbatm0/L++/vRQndhjvv70UTu+/vQ1N77+9DXMZ77+9eVIc77+9KQ0zMzMzMzMz77+9TO+/vRvvv71j77+977+9D3vvv71777+9dV3vv73vv71ldC5tREwAUCDvv73vv73vv73vv71IP++/vW3vv73vv71s77+9Vu+/vX3vv70x77+977+977+977+9M++/ve+/vWZU77+977+9Vhg277+9OwY7Ghjvv70t77+9OO+/vTAwae+/vSDvv73vv70q77+9dO+/ve+/vWxtHjXZjO+/vQnvv70k27bvv71I77+9Pl/Rqnbvv73vv70mUQPvv70277+977+977+977+977+977+977+977+977+9Ge+/ve+/vSPvv70pPe+/vRnvv73vv73vv70077+9I++/ve+/ve+/vSPvv73vv73vv71ZVkRM77+9HBtZBgEYZO+/vQvvv73vv70Y77+9AgwISinvv71MSu+/vSfvv73vv71J77+977+9K++/vSZF77+977+977+9JBUkCQnvv73vv70DZSwhxIjvv70MN2UpIx1jb++/ve+/vRfvv73vv70Y77+977+977+977+9NiEE77+9YO+/vSHvv73vv73vv73vv73vv71y77+9He+/vV4e77+977+9Ie+/ve+/ve+/vRwrA++/vRQp77+9MCAwJ++/ve+/ve+/vSwV77+977+9Ne+/ve+/vWfvv71rG++/vRvvv73vv71i77+9WEzvv73vv73vv73vv71m77+977+977+977+9Se+/vU0677+977+977+977+977+9JO+/vRBC77+9FwLvv71UNE3vv70k77+9FnHvv73vv73vv73vp77vv703IDDvv70ac++/vRjvv70O77+977+9C++/ve+/vRDvv71OHjrvv71e77+9dO+/vXnvv73vv71tdu+/ve+/vU7vv73vv73vv70P77+977+977+9Vu+/ve+/ve+/ve+/ve+/ve+/vSAjc3Is77+977+9LTbvv73vv70Pdu+/vQ4PdnZ277+9F++/vU7vv703Yu+/vVlqLu+/vSwX77+977+9cu+/ve+/vc2ARu+/ve+/vdOAOCrvv701AmME77+92JDvv73vv73vv73vv73vv73vv73vv73vv73vv73vv71dWV3vv70577+9YiPvv73vv73vv71i77+977+977+977+977+977+98a2jje+/vSTvv73vv70A77+9eO+/vVrvv703Ee+/vUfvv73vv71977+977+9WTxWA++/ve+/vQFsMu+/vTUIO++/ve+/ve+/vRFG77+977+91pcX77+9VlceWe+/ve+/vcmILFNs77+977+977+9bu+/vdaD27dv77+977+9bO+/ve+/vW7vv73vv70c77+9BjHvv73vv73vv70u77+977+977+977+9Le+/vQdAGBAG77+9E++/ve+/vcqg77+977+9D++/vT94cG1XLO+/ve+/ve+/vXEO77+9CO+/ve+/vXx9Znx2enLvv73vv70FHih8wrA4fHLvv73GjRvvv73vv70nFgPvv70377+9Te+/ve+/vQTvv73vv71hZ0BDBxbvv71ZIANCY3VhcXl2fHrvv73Dqe+/ve+/ve+/ve+/ve+/vQ8/f3l3C++/vTDvv70+J8aNZQEh77+9MRtn77+9a1PXr++/vV/vv73vv71ORgbvv71N77+977+9H++/ve+/ve+/vTkj77+9WzdPX11DBu+/vSDvv71c77+9Ie+/vUzvv71xK++/ve+/vTjvv71Q77+9Gi8d77+977+9XO+/vXDvv71+F0Dvv70KXe+/vV/vv71kSe+/ve+/ve+/ve+/vRg3WyFj77+977+977+977+977+9bSrvv73vv73vv70taxd3YwEeOgBr77+9FMiw77+9Qu+/ve+/ve+/ve+/vT/vv71ecnXvv701IEQQU++/vS85fu+/vRTvv73vv73vv71877+977+977+9M++/ve+/vRnvv716Eu+/vSHvv7150rp1c++/vWBE77+977+9BSHbv++/vce/Tyjvv71iGt6977+977+9E2Pvv71l77+977+9He+/vQhI77+977+977+977+9ee+/ve+/vdGk77+977+977+9c++/vUzvv70C77+977+9bXHvv70KGe+/ve+/ve+/vX40CiQIKNKxbO+/vXrvv71AW++/vQ8+77+977+9PyJDFj0aEyxnRhPvv71vPgXvv73vv70e77+977+977+977+9T31zNxDvv70o77+9ASZv77+9au+/vTHvv73vv73Xhu+/vTs+77+977+9b++/vUdhICzvv73vv70xPUDvv71w77+9fd2I77+977+977+9G++/vXLvv71o77+9QEDfue+/vRxoMFwg77+977+9dn/vv73vv73fjQ42IO+/vXYMD++/vX5ZHwTvv71GaO+/vTfvv71fXu+/ve+/ve+/vQAy77+977+92aHvv71d77+9JmIZ77+9RgDvv73vv71h77+977+977+9L3/vv73vv73vv73vv70QRznvv70b77+977+977+9Ee+/vdSo77+9Nm8QI29/77+9K++/vSzvv71SaO+/ve+/vc2v77+977+977+9Qu+/vdGm77+977+9A++/ve+/ve+/vSzvv71R77+977+9PQ9977+977+9Au+/vX/vv73vv73fhhjvv71oQ++/ve+/ve+/vVfvv70hHWjvv73vv71n77+9LjLvv70477+9IS/vv71AVCIgBu+/ve+/ve+/ve+/vcu/77+9GDUQAe+/vTzvv73vv71d77+9SAxa77+9eO+/ve+/ve+/vULvv70HOu+/vceQKu+/vW55Qjfvv70tX++/vWHvv71f77+977+9Be+/ve+/ve+/ve+/ve+/vWzvv71p77+977+9Pe+/vUnvv73vv70F77+977+9X++/ve+/vS/vv70YUUjvv71W77+9IUrvv73vv73vv71D77+9UChwxKXvv73vv70C77+9bu+/ve+/ve+/ve+/vQseY++/vToYbu+/ve+/ve+/vQM1Rdm02o7vv70+77+9VO+/vUFd77+9Xj7vv71WfO+/vQvvv73vv71EAhLvv73vv70La++/ve+/vRJd77+9X2Lvv73vv70TCCPvv73vv73vv70PKArvv71M77+9eE3vv73vv73vv71QdO+/ve+/ve+/ve+/vRjvv71AIQbPvu+/vQhHaGTDlFTvv73vv70pF++/ve+/vRY4Mu+/ve+/vQEwDiLFqDDvv73qja3vv70gaO+/vQ0MDyBQckEA77+9Lz4IUO+/vVR777+9YVgkH++/vTk677+9W++/ve+/ve+/ve+/vTImAe+/vUPvv73vv70VLWvvv73vv71r77+9Iu+/vX7vv73vv73vv70C77+9HBpB77+977+977+9DwICUOKBgO+/vXjvv73vv71B77+9BQLvv71veO+/vS3Ske+/ve+/vWrvv73vv71aQDjvv71dQEoC77+977+977+9Y++/vVrvv70LXgUR77+977+9NHLvv73vv70WQh7vv716Ae+/vRZW77+977+977+977+9ZeSdh0kB77+977+977+977+977+977+9UO+/ve+/ve+/ve+/ve+/vXU/Du+/vWPvv70URxlXO++/ve+/ve+/ve+/ve+/vVUx77+9ZDzvv73vv70bdO+/ve+/ve+/vVZw77+9WwDvv73vv73vv73vv70b77+977+977+9QO+/ve+/ve+/ve+/veSKp++/ve+/ve+/vXDRpO+/vRbvv71XP++/ve+/vcimAO+/ve+/vQk6XmYj77+977+977+9MO+/ve+/vUMIGu+/ve+/vWNwRTPvv70f77+9RVPVshHvv70fLu+/vQvvv73vv73vv73vv70xeU0v77+9VO+/vUbvv71+eCDvv71cVe+/vVHvv70m77+9Fu+/ve+/ve+/ve+/vXPvv71lPxwQE++/vXUB77+9Wu+/ve+/vRDvv70m77+9cyNo77+977+9cA9S77+977+9WT1E77+9Xu+/vVfvv73vv70M77+9XO+/ve+/vSNQ77+9Pe+/vSXvv70izJhQ77+977+9Le+/vcaU77+9aO+/vXZpQXDvv71w77+9IO+/vUxdS0EqLe+/ve+/ve+/ve+/vQLvv73vv70DBFzvv71277+9B++/ve+/vUXvv73vv71L77+9MO+/ve+/vVTvv71u77+9JSXvv71W77+9Eu+/ve+/vWHDmlB1Mu+/vTXvv73dlO+/ve+/vQgdbe+/vWso77+9R++/ve+/vQHvv73vv71eSCnvv73vv70677+9RO+/vXxMf++/vQHvv701V1Lvv70S77+9du+/vXHvv73Vs++/vdqIfz8N77+9bO+/ve+/vR1VEO+/vR3vv73vv70E77+977+9Se+/ve+/vXE877+9AO+/vdSz77+9Kkhk77+9VTpiPO+/vSoEUce4egDvv70RKVkx77+9RxPvv70gNu+/ve+/veaQumlkJSLvv73vv70oAu+/ve+/vV5XEcWx77+9Ge+/ve+/vRDvv718FO+/ve+/vRXvv71/77+977+9MhUJ0r5RUu+/vRjvv71BctSw77+94Yqxe1dUeWjvv70nJWwk77+9Ge+/vRTvv713EGUpAu+/vVRA77+9SGfvv71WHe+/vWs877+90qBrGu+/vQx377+977+977+9VA7vv70O77+977+977+977+9OFTvv73vv73vv70bDy/vv704Ke+/ve+/ve+/vRNRJe+/ve+/vQAkUXjvv70BaQDvv73vv73vv73vv70SZO+/vUjvv71L77+977+9bu+/ve+/ve+/ve+/vW3vv71Q77+9QBo4OHTvv71pfu+/ve+/vSXvv71D77+9DO+/vXZv77+977+9fmdE77+9VO+/ve+/vSQ0Me+/vVzvv70u77+977+977+977+9DR/vv73vv71B77+9Su+/vXvvv71EEtW377+9C++/ve+/vWrvv71177+9RO+/ve+/vQ00Je+/vU58A++/vXDvv70IUu+/ve+/ve+/ve2Amg7vv73vv73vv73vv73vv71q77+977+93YDvv71P77+9IAxl77+9Bu+/vTMSTVd+77+9AsicTiHvv70v77+977+977+977+9dO+/vQsAVCjvv70WJA3vv71jFu+/vUwE77+977+9FAnvv73Gv++/ve+/vWTvv71W0qzvv70OTUU877+9FO+/vRIs77+977+977+977+9eN6jAO+/vWLvv71bLTTvv73vv73vv71I77+9XgBqFu+/ve+/vQnvv70XTRfvv71y77+9OVhFUu+/vUHCpu+/vTtzMwjvv73vv73XgUjvv73vv73vv73vv70E77+977+9Ilzvv70VQ++/vSVw77+9IlHvv71i77+9ZkQg77+9Ou+/vR3vv71l77+977+977+9Gu+/ve+/ve+/ve+/ve+/vSXvv70q77+977+9GxAJV++/vW3biu+/vW7vv700Eu+/vXrvv71Y77+977+9Wu+/ve+/ve+/vR9XdgMCK++/ve+/ve+/ve+/vUzvv73vv71cCu+/ve+/vQTvv70077+977+9AVRWDu+/vSMV77+9Cy7vv73vv73DmloMaRhLL++/ve+/vWXvv73vv71sEu+/ve+/vT3vv70GQknvv71J77+9Ge+/ve+/vcuIe++/ve+/ve+/ve+/ve+/ve+/vWTvv73vv71fX++/vSgjZW90Yu+/vQs/WEbvv70IJu+/vWTvv70Vf33vv71LSO+/vQcRKO+/vVMXLu+/ve+/vS3vv70q77+977+9eknvv73vv71h77+9YO+/vWTvv70lRe+/ve+/vXXvv73vv71IR++/vRIz77+977+977+9IUllITNjGyI9a31mCwHvv70F77+977+9cUHvv73vv71wYRrvv73vv70h77+90prvv70ONe+/ve+/ve+/vT7vv71SIO+/vQZ+Ru+/vQJp77+9Fe+/ve+/vWYvNShR77+9GioLXxYp77+977+9Gi7vv73vv71n77+9x7jvv70uSCLvv73vv73vv70sHhXvv702Z++/vUFlIO+/ve+/vWbvv73vv70d77+977+9Mu+/ve+/ve+/vVJMJw5E77+9D++/vWlQ77+977+90I0uRlDvv71+77+977+9RQvvv73vv71DJG1FeO+/vVzvv73vv73vv73vv71OIe+/vToQ77+9CE8t77+977+9L++/ve+/vQjvv70XHO+/ve+/ve+/ve+/ve+/ve+/ve+/vW19Gy7vv73vv70o77+977+9ByLvv73vv70pKlIw77+977+9FCPvv73vv73vv71877+9bO+/ve+/vUTvv71Z77+9Ejzvv70QTh/vv71Yeljvv70g77+977+9EO+/vTV2PO+/vUhi77+9IUVw77+9QEDvv70PG++/vRXvv73vv708Uu+/ve+/vXxpAxUl77+977+977+977+9HO+/ve+/ve+/ve+/vSoK77+9DAI/dO+/vQDvv70UYu+/vXlW77+9cu+/vR7vv73vv71g77+977+9fSLViu+/ve+/vXbvv73vv70A77+977+977+9XykkMXRv77+977+9K2fvv73vv73Loe+/ve+/vUfvv70W77+9Elnvv71TDgnvv71x77+977+977+9AO+/vW8dSVfvv70F77+9M++/vVDvv71g77+9GCt3SiLvv73vv73vv704b++/ve+/vTJpV++/ve+/vQvvv73vv73vv70277+977+9Ke+/ve+/vSvvv70f77+9Ajxo77+9SO+/ve+/vQ0477+9M++/vU7vv73vv73vv70p77+9JE5dHnNXX++/vXLvv71H77+977+9U2fvv73vv70r77+9JG7vv73MlRAPQ++/ve+/vSVS77+9ee+/ve+/vVwZT++/vWTvv73vv714RO+/ve+/ve+/ve+/vR7vv73vv70r77+9BO+/ve+/vXnvv70b77+9FO+/vRUvESgvMO+/vXRy77+9TCJu77+9Dxjvv73vv73vv71977+9C++/ve+/ve+/ve+/vRF577+9LnLvv73vv71VOD9dZ++/vU/vv71E3IDvv73vv73vv71z77+9Q++/ve+/ve+/vSgvLCHvv70777+9GO+/vRfvv73vv73vv71cIn7vv71TFe+/vVJb77+977+9cu+/vWTvv73vv73vv73vv70j77+977+977+977+977+9GXldJe+/vTMlE++/vTt8Sm7vv71w7rKsTu+/vUvvv71p77+977+9z6osJ0vvv71EzpVN77+977+9Wt2R77+9AO+/vUnvv70qTjsuD++/ve+/vUJJH9CKPO+/ve+/vX3vv71d77+9RO+/vSzvv73vv73vv73vv71sIu+/vStxSmcO77+977+9KxI/77+977+977+977+9QE/vv73vv71TP++/vTXvv73vv73Fge+/ve+/vV3vv71E77+9FE7vv70H7pazSQAv77+9OnDvv719Dk7vv73vv73vv71z77+977+977+9E0AsCzpQ77+977+977+9TglF77+9Tu+/vT5QZwZS77+9JwQO77+977+977+9Ce+/ve+/ve+/vQ7vv73vv70sEu+/ve+/ve+/vQ5M77+9P++/vRTvv71nHxjUv++/ve+/vSvvv73vv70dcw7vv71C4Zyl77+9A++/ve+/vSIJfFQ4MO+/vU8EHjjvv71f77+977+9DCQt77+977+9Qnh077+9Uu+/vQ1/77+9C++/vSfvv70uXe+/vS0f77+9EB3vv70jBe+/vUQXYD8kBj/vv71C77+9Owbvv70fXe+/vXjvv71lV04RO+6rne+/ve+/ve+/vSXvv73vv73vv71mTO+/vTgH77+977+977+977+9Pe+/ve+/vXYz77+9HHRnQnM9IAjvv73vv70Z77+977+9UO+/ve+/ve+/ve+/ve+/ve+/vSnvv73vv73vv73vv71I77+977+9Xe+/vUVb77+9Fu+/vdePSO+/ve+/ve+/vWZHG1Hojprvv70D77+977+9Vu+/ve+/vUUOLu+/vXtudSbvv73vv73vv70a77+9b++/ve+/vW/vv71WN++/ve+/vUtZRQLvv73vv70aSe+/vcONJu+/ve+/vWPvv70c77+977+977+977+9RyTvv70bamE4JQvvv71rdBzvv73Yme+/vQDvv73vv73vv71u77+977+977+977+9OO+/ve+/vQJxPQ1x77+9ZCgnceiwhRnvv70u77+90orvv71t77+977+9fu+/ve+/ve+/vVvvv73vv71Z77+9ZyHvv71+77+977+9aRYCdhvvv73vv712FO+/ve+/ve+/vWwT77+9d++/vWgrD++/vTbvv71OHu+/vSxqQBzvv73vv70677+977+9TEMwW++/ve+/ve+/ve+/vSxk77+9Ou+/vRvvv73vv73vv70k77+9fVpucdmVV++/ve+/ve+/vT/vv73vv73vv73vv71AZe+/vXlo77+977+977+9NSUk77+9IA9v77+977+9WiDvv71GdWUW77+9Nkvvv73vv70n77+9Xe+/ve+/ve+/ve+/ve+/vWjvv71Ua++/vQXvv711VO+/vXXvv73vv70277+9Sw0bBO+/ve+/ve+/ve+/vWrvv70KRDTvv70kEC8mde+/vUR9Ay8S77+9dFrvv708EU1mDe+/vRLvv70adO+/ve+/vX3vv70w77+9ee+/ve+/ve+/ve+/vQtxyZVYxI4F77+9C3Tvv70y77+977+9dTMS77+9Gu+/vWvvv71o77+977+9Fu+/vWhK77+9NBLvv71wVe+/ve+/ve+/ve+/vQXvv71D77+977+9bm4C77+977+977+9RDxFVV0kKu+/ve+/vSLvv70U77+9aO+/vUxUPyERTxp077+977+977+9aRLvv73vv70t77+977+9Ohzvv70mde+/vURc77+9LhLvv71177+9U0YqKBB1dRLvv73vv700YO+/vcOQ77+9QnHvv73vv70iEe+/vSYU77+9aikSde+/vRTvv70K77+9IhLvv73vv73vv71ACklE77+977+9QO+/vQhUE++/vUXvv70yUe+/vTUF77+977+9RO+/vUnEolpk77+977+977+9ZCUi77+9Ee+/vUXvv70iUUMR77+9S10BJyRMIm4gIu+/veq6kBTvv73vv73vv73vv73vv71/Uu+/vRJHIe+/ve+/vVbvv73vv71y77+9Mu+/vSxP77+977+9EkUhQe+/vVvvv73vv73vv73vv73vv73vv73vv71J77+9UTxa77+977+977+9LChAAWnvv71/77+977+9QCpl77+977+977+977+9X++/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vTgQGdWt77+977+977+977+977+977+977+977+977+977+977+977+977+977+977+9MO+/vVjvv73IgO+/vQrvv71YGDFI77+9SGdfeO+/vU/kn5Lvv70X77+977+9AAgU77+9PmVEQH5sIu+/vQZWQu+/ve+/ve+/vWchaR7vv71mIe+/vUcR77+9IyPvv73vv70+JAkrI2Xvv70EVkIq77+977+977+9JDJySkrvv73vv71KSFdLFu+/vUgr77+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+9A++/ve+/ve+/vX/vv73vv73vv73vv71XWj8A77+9VHLvv71+JUVwCsmk77+977+9J++/ve+/vUAp77+9Bmnvv71IGnIaae+/vTTvv73vv71E77+9fu+/ve+/ve+/ve+/vUbvv70z77+977+977+9PWnvv73vv71dfu+/vVNIeu+/ve+/vQcfdsSRR++/vU0c2Y0b77+977+977+977+977+977+977+977+977+9ESYAEihlJBQlTO+/ve+/ve+/vTE2OO+/ve+/ve+/vQPvv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9fngx77+977+9A0Xvv73vv73vv73vv70tEe+/vT/vv70SRD7vv70YYCse77+9GSErHW0YEO+/vXhGRu+/ve+/vUtCMiIg77+9ZO+/vQnvv71I77+977+9yIXvv73vv70U77+9Skjvv73vv73vv73vv73vv70xSRkJKSPvv71k77+977+9Ak5IK++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSkk77+977+9biwMcjbvv73vv71J77+9d++/ve+/vUNN77+977+977+9b3wtG3nvv73vv70EX++/vVI2eu+/ve+/vWTvv73vv70sI++/vT4jUULvv71WcEvvv70WKCDvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv70jFUEp77+9Bmlk36/vv73vv71KciLvv70077+9E0nvv73vv71XUkNp77+9SBp577+9cQpp77+9UBLvv70077+9RO+/vW1gJe+/ve+/vTPvv70h77+9YTEk77+977+9cNm177+9xIjvv73vv71xfMuhU++/vWrEoz5P77+92I3vv70BbiTvv73vv71IJAkr77+9ZO+/vQPvv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv70fPcqKSCvvv73vv73vv70C77+9JWIo77+9SO+/vXc/Mu+/vRl+aTrvv73vv73vv70ObSgD77+977+9Q08R77+9LSsYfe+/ve+/vUVAARHvv70PPCEh77+977+977+9FyFpGu+/vTpn77+977+977+9JHUh77+9KCRx77+9JO+/ve+/vS4k77+977+977+977+95IiE77+977+977+9Kknvv70RSSgi77+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+9f++/vXUISd2MRCMkHe+/vSMfF++/ve+/ve+/vQPvv71X77+977+977+9L34h77+9Cu+/ve+/ve+/vS8c77+9e++/vUgfG++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+977+9f++/ve+/vQ7vv73vv71I77+9ZO+/vVNIJu+/vRxBKe+/vQZpZN+v77+977+977+977+977+9SCQ577+977+9Hyfvv73vv73vv71G3ovvv71I77+9SSNvN0oh3YVIIX9jX1cS77+9d++/vXpS77+9Qu+/vWnvv70XZEHvv73vv70i77+977+9EX/vv70I77+9ee+/vUgdG++/ve+/ve+/vRFQQ1YC77+9Iu+/vWwS77+9SiPvv70H77+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+9f++/vS1GCWnvv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/vV/vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+977+977+9f++/ve+/ve+/ve+/vX/vv73vv73vv73vv71/77+977+9Fe+/ve+/vUrvv71D77+977+977+977+977+977+977+977+9XTgi77+977+977+977+977+977+977+977+9f++/ve+/ve+/ve+/ve+/ve+/ve+/vSzvv73vv717L++/vSok77+9ZO+/ve+/ve+/ve+/ve+/ve+/vRzvv73vv70677+9bu+/vQZWIu+/vdCASO+/vSAU77+977+9V0oaQu+/ve+/vULvv73vv712JmpoR++/vQFX77+977+9be+/vUwiNhnvv73vv70Q77+9NDRRHu+/vU0idu+/vUNSKG5gJyIPdVc6dl1w77+9SO+/vT8n77+9SCXvv70A77+9UO+/vVNEDgXvv70E77+977+9X8iTRO+/ve+/ve+/vSTvv73vv73vv73vv70pInrvv73vv71QQDdJ77+977+9L++/ve+/ve+/ve+/ve+/ve+/vSTvv73vv71HSBLvv70C77+9ThF1UH/vv73vv73vv71WVynvv71eATkp77+977+9Ce+/vSRRE++/vUMn77+977+9ThJ177+9O2sl77+977+977+977+977+9Ce+/vXohKe+/vUZ/77+9UO+/ve+/vV3vv71JEO+/vQpoK0VUL++/vUnvv71O77+977+977+9UUAj77+9NG7vv70/Ne+/vSLvv73vv73vv70OTg/vv70m6oemEkR5D++/vXVA77+977+9K++/vdahE0Tvv70aWT9u77+977+977+9GjXvv70P77+9IkEk77+9b++/vSDvv73vv73vv71qE++/vUMH77+977+9w5Dvv73vv73vv70p77+977+9IT1877+977+977+9Ne+/vUQF77+977+9IDosIhw6Pe+/vVfvv73vv70k77+9OFR6aO+/vQBRJz3vv71Z77+9U0Tvv70XAAfvv70577+9Ajfvv71b77+9bnQJXG8VIO+/ve+/ve+/vTgo77+9Ce+/vXrvv73vv73vv71hckjvv70U77+977+977+9EO+/vWTvv73vv73vv71BEUHvv71Zcmjvv70I77+9UVrvv71i77+9EO+/vRzvv70tRO+/vW5q77+977+977+977+9PEwNae+/vRDvv702U0NsFQLvv73vv70577+9AjPvv71GMVrvv70ueRvvv73vv70Q77+977+977+977+9LALvv73vv70Y77+9Nu+/vWEhMUTvv71X77+977+9YmJI77+9WRHvv73vv73vv70JIVZU77+977+977+9dlpo77+977+977+966SE77+9Be+/vRBrQWQJIe+/vUXvv73vv73vv73vv73vv71pFe+/vcmzFD0nHFfvv71W77+9Pe+/vUgH77+977+9Xe+/vULvv73vv71B77+9Fu+/vdWC77+9QV4ubmVXSgdp77+977+91pxICO+/vS/vv71pUu+/vVPvv7153o7vv70pFe+/vXnvv704Ju+/vS1p77+9z6Pvv73vv71QOmh177+977+9J3sJ77+977+9HBfvv73vv71V77+977+977+9RO+/ve+/vXRCaO+/ve+/vTnvv73vv70Q77+977+9AB3vv73vv70p77+9RSrvv73bji1h77+977+9JFzvv73vv73vv71UUH5P77+977+9dzZTQe+/vXFM77+9Cu+/ve+/vSBu77+977+9Ze+/ve+/vXNK77+977+977+977+9YMejS++/vVrvv73vv73vv73vv71SQe+/vXRrEFjvv71pIGvvv70BP++/ve+/vQQSc++/vWI2OmcU77+9We+/vQM7E13vv70177+977+9SGrvv70O77+9chLvv73vv71sYO+/ve+/vSkgXRpc77+9Y3NC77+9He+/vRnvv71V77+9Fml9XR7vv73vv71JSO+/ve+/vW3vv71B77+977+9Qe+/ve+/vTnvv70hD0jvv73vv73vv73vv718Au+/ve+/vWAGbO+/ve+/vSXaswxe77+977+977+9fe+/vTbvv70i77+9K3vvv73vv73vv73vv70S77+92bkY77+977+9Ccyy77+977+9NQbvv73vv73vv73vv71s77+9CzFY77+9G++/vQkfL3Zi77+9XFvvv70U77+977+9Ce+/ve+/ve+/ve+/vUDdv2IS77+977+9DTEK77+9e++/ve+/ve+/ve+/vSgM77+977+977+9InMy77+977+9GO+/vW7vv73vv73Isu+/vXjvv70177+977+977+9Ne+/vUjvv71E77+977+9Je+/ve+/vUUFYu+/vQfvv70t77+977+9Ne+/ve+/vSLvv70yNe+/vTQP77+934ho77+977+977+977+9Su+/vWbvv73vv71S77+977+977+9IUTvv71i77+977+9DDHvv73vv71J77+977+977+977+9WBzvv70RcFzvv70kCHh6TEbvv73vv73vv71477+977+9U2ICX1gkeicSBHzvv73vv71xMe+/vWnvv73vv708ZVjvv73vv70GSO+/ve+/ve+/ve+/ve+/vVI7Kwvvv73vv73vv73vv73Ive+/ve+/ve+/ve+/vRPvv73vv71t77+9LO+/vX7vv70MFBXvv70i77+9TiPOne+/vdOs77+9JO+/ve+/ve+/vV9i77+977+977+9fhbvv70+fjnvv73vv71Z77+977+977+977+9O1B0fC3vv70v77+9Wu+/ve+/vWXvv73vv70Ffe+/ve+/vQI477+9OHdY77+977+9TO+/ve+/vTvvv71b77+977+9Ku+/ve+/vQHvv719Bu+/vTPvv70Q77+9L2Tvv73vv73vv73vv71l77+977+9V++/vXIWXe+/vR8z77+9Ju+/vS3vv73vv70777+977+9AGrvv70MD++/ve+/ve+/vd6o77+9BVfvv73vv73vv73vv73vv71G77+9P2cQFyF8BnlI77+977+9Qe+/vS/vv73vv70RZlh4TS3vv70TQO+/vRIaFu+/vWZLGgfvv73vv71F77+977+977+977+9Qih977+9AO+/ve+/vQpkHu+/ve+/vTXvv70I77+9ee+/ve+/vV0M77+9Dx/vv71RAGUPFSHvv703WyAPD3zvv73vv70AeVXvv70SIO+/ve+/ve+/vXYC77+977+977+9Cnnvv70+77+9V++/vQjvv70dKsi3JO+/vVAPPlvvv71t77+977+977+9e++/ve+/vX/vv71K77+9IO+/vWPvv73vv73vv70LKO+/vTLvv73vv70g77+977+9IBo+Pu+/ve+/vWLvv73UgO+/ve+/ve+/vSETNF5u77+9dO+/ve+/ve+/vRvvv70SfO+/vW8QRVTvv71QMe+/vSfvv70Zdu+/ve+/vT3vv73vv73vv73vv71S77+977+9Du+/vVLUl++/vWgS77+9P++/vSlLXzlXae+/vUYGL3sq77+9Oe+/ve+/vUVR77+9UCEy77+9Y++/vTx4RldB77+95aeZEu+/ve+/vVVpGu+/vVFQVh5h77+9NCdp77+9cQ0O77+977+977+9T1ZR77+9MVTvv70YXkfvv71KWj/vv70o77+9NO+/ve+/ve+/vXLvv73vv70uAyVneG4oGe+/vUfvv70USe+/vRr0jb+j77+977+9Lu+/vQlJGUHvv71Ccu+/ve+/vcWP77+977+977+9FioK77+9SUBlI++/vTXvv73ChFLvv73vv70uHe+/ve+/vVVpGX3vv71ALCFdNO+/ve+/ve+/ve+/ve+/vUzvv71Z77+977+9FO+/ve+/vXgDKifvv70h77+9EzLvv73vv70lZS3vv73vv70677+9CRjvv70l77+977+977+9MgJ6f++/vUFI77+9CHU/77+9Uu+/vU4777+9AitNSA7vv71x77+9Hu+/vRUo77+977+9Ke+/veSYtREnXgzvv70iUe+/ve+/ve+/ve+/ve+/vQtw77+9Me+/ve+/vTrvv70j77+92rNR77+977+977+9T++/ve+/ve+/vTpk77+9R1zvv71tJ1zvv73kg4RVehLvv73vv73vv71uYcqMQO+/vQtM77+9VhLvv73vv711DVnvv73vv70B77+9e++/ve+/ve+/veyAtO+/ve+/vTZNMu+/vR8rFSp777+9Txbvv70F77+977+9BRgnWe+/vVdr77+9RMORdUAJ77+977+9Pe+/vWYa77+9U++/vTbvv73Vu++/ve+/vVDvv70g77+9063vv71WMe+/vR9H77+977+9XxZI77+977+9VO+/ve+/ve+/vXJw77+9Vu+/vUnvv73vv703NB/cse+/vXjvv73vv71DTu+/vUhNB++/ve+/vUwx77+9eWjvv73vv70Z77+9PTrvv71SQCzvv70077+977+9B++/ve+/vRPvv73vv71NAAt6aNqB77+977+9Je+/vTLvv73up4nHrE8477+9Uu+niQdoLAzvv70E77+9DFwO77+977+9Ce+/vQzDuAFcAu+/vTLvv73vv73vv71P77+9ZCVP77+977+9UO+/ve+/ve+/ve+/vStwCTgR77+9HMys77+9TO+/vTfvv711Aype77+9NO+/vSYi77+977+9akPvv70c77+9BVwS77+9Pe+/vRg1Pe+/ve+/vVQv77+9TO+/vXXvv73vv700f++/ve+/vRI577+9JVwWZtaC77+977+977+977+9Gu+/ve+/vURZ77+9cBwVMkBX77+9M++/vSQ877+9c3lYEwbvv73vv70i77+9Xe+/ve+/ve+/ve+/vc+U77+977+9du+/vUpp77+977+9a1Is77+9EGnvv70pEirvv71wTTsSVB4e77+9RERtNu+/ve+/vRoB77+977+977+9SgM877+9M++/vTrvv73TmO+/ve+/vQg1cO+/ve+/ve+/vXbvv71k77+977+9QVRPA++/ve+/ve+/vV0e77+9Me+/vSlV77+9f++/vUhl77+9z61YKhHvv71Gcu+/vVzvv73Qn3bvv73vv70L77+977+9QO+/vWoEZ++/vVbahRBVVe+/ve+/vRnEsgHvv73vv71M77+977+977+977+9OO+/ve+/vWBQMO+/vUsG77+9aA3vv71uBCZnIFNp77+9fRYuHe+/vSgN77+9b++/vRrvv70AFQfvv73vv73vv73vv71QPu+/vUZmGO+/vXXPrwAsKm7vv717b1Hvv73vv73vv71oDO+/ve+/ve+/vR8YTAXvv70Q77+9OisrQCMw77+92qZ3DO+/vV3vv73vv73Hm++/ve+/ve+/vQrQqAvvv73vv70uKu+/vW8ZAu+/vRfvv73vv70WRnXvv73vv71KFQB+77+9K++/vV8jK++/ve+/ve+/vV/vv71H77+977+9CO+/ve+/ve+/ve+/vXnvv73vv70w77+9GwPvv71Pd++/vSrvv73vv70Y77+977+9Uu+/ve+/ve+/vRBRe3ZR77+9M++/ve+/vWc377+977+9GiHvv73vv70i77+977+977+9f3c177+9Ae+/vU/vv73vv73vv71S77+977+977+9ZTFF77+977+9G++/ve+/ve+/ve+/ve+/ve+/vRFw77+9eO+/vUY877+9bmHvv71+eRPvv71e77+9Px8Majpv1ogGd++/vTcCe37vv73vv70qH++/ve+/ve+/ve+/ve+/vT0R3Kzvv71WIxU877+93IZ/fi/vv71Q77+9Cu+/vdaB77+9KkHvv71GHXhsFe+/ve+/ve+/vSbvv73vv71v77+9D++/ve+/ve+/vQFX77+977+9GiXvv70l77+9c++/ve+/vXfvv71pCe+/ve+/ve+/ve+/vUDvv70rJyZk77+9XkPvv73vv70O77+977+977+977+977+977+977+9QG5l77+977+977+977+9Px4jahXvv71fXnbvv73vv73vv70T77+977+9CCHvv70QIE5577+9Ee+/ve+/ve+/vV/vv71lBA1x77+9e07vv73vv70QFu+/ve+/vcKXGFE7L++/ve+/vTcNIWDvv705SxpJZAgHP++/vVFJCO+/ve+/ve+/ve+/vSEDajnvv73vv73vmJV477+9cO+/ve+/ve+/vRl1NfG5j6jvv73vv71s77+977+977+9H++/ve+/ve+/vWnvv73vv70v77+9DQo/ezUa77+977+977+977+9Du+/ve+/vUvPuwzvv73vv70jDSAvfe+/vWwiIe+/ve+/ve+/vTDvv71/Pe+/vRFZ77+9Xe+/vW4777+977+9Yu+/ve+/ve+/ve+/vXUbyaMSCMKmV++/vVRa77+9f33vv70jGTLvv73vv70UCe+/ve+/ve+/ve+/vWsxKO+/ve+/ve+/vTIj77+977+977+9We+/vToeBB1x77+9K29B77+977+9PFgrf++/vcOBAPKfvabvv70hM++/vcuw77+977+9b++/ve+/vSAaf37vv70UMiPvv73vv73vv73vv73dp++/vRUN77+977+977+9W++/vcioAu+/vTNe77+9SDHvv73vv70W77+977+977+977+9Z++/vXBHAlcActej77+9dDBY77+9BC3vv70zb++/vUTvv73vv70Kce+/ve+/vVcfQ1pQ77+9f3vvv71/AEJ1EGLvv73vv73vv70PX11PCe+/vX7vv709M++/vU4F77+977+977+977+9eu+/ve+/vSdaYO+/ve+/ve+/ve+/ve+/vWc4NlBBSn3bru+/ve+/vRFt77+9Fu+/vc+877+977+977+9wpTvv73vv73vv73vv73vv70X77+977+977+977+977+9fe+/vQbvv73vv70C77+9Gu+/vVZc77+977+977+9bU8bX++/ve+/vTwgKu+/ve+/vU/vv73vv73vv70xAyzvv712Oe+/vVPvv73vv7041akM77+977+9Nm7vv70l77+977+977+9GQHvv70rf++/vVtTZO+/vUzvv70Ld27vv73vv73vv73vv71g77+977+977+977+977+977+9b3Hvv73Jqu+/vRABYe+/vXzOue+/vWvvv73vv73vv71277+977+977+977+9I++/ve+/vSzvv71K77+977+9Ye+/ve+/vc+ZYQQx77+9Unvvv71NBu+/ve+/ve+/vd+BFDBHTRUr07Vk77+9OdOJAQvvv73vv71ZWO+/ve+/vV/vv71e77+9AhVv77+9Ie+/vXHvv70H77+9NO+/ve+/vXLvv73vv73vv73vv73vv71bHGvvv71gYdG177+977+9M++/ve+/ve+/vT/vv73dhO+/vSALMu+/vXLvv73vv70177+9Tu+/vTfvv73vv70s77+9XRnvv70ZeQ3vv73vv73vv73vv73vv73fpO+/vQ5qBB/vv712YO+/vTRZEEN777+977+9Ee+/ve+/vT9977+9OxtU3rLvv73vv73vv702L++/vSjvv71TAUHvv73vv73vv73aty7vv704Re+/ve+/ve+/vSFAYO+/vR9777+9Se+/vXrRiCos77+9O3dm77+9Ce+/vVzvv73vv73vv73vv73vv73vv71Fcx7vv73vv73vv71ZYO+/vQUG77+977+977+9bH98cu+/ve+/ve+/ve+/vRxAVO+/vQrvv705eO+/ve+/vQ9877+977+977+977+9KO+/vToSMu+/vTtj165d77+9aAbvv70V77+977+977+9ZSgD77+9Tu+/ve+/vXzvv73vv73vv73vv70wEu+/ve+/ve+/ve+/vW7dvD3vv70f77+9Akfvv73vv73vv71lQGIAYe+/vX/vv73vv73vv73vv70n77+977+977+9cGp8cu+/ve+/vXQL77+9TO+/vS/vv71U77+977+977+977+9ew/vv73vv73vv73vv71lBFgwIEBvMO+/vdGAQXFY77+9WGAE77+9Awzvv73vv73vv70X77+977+977+9TE41OQHvv73vv71UNk9Pzo4P77+9D0/vv702FmLvv70R77+9fe+/vR0577+977+9Oe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vWYjWO+/vRNRGUAGGWRm77+9e++/ve+/ve+/vU7vv73vv71O77+977+9eklgQEvvv73vv73vv73OlRZ5DSwIzZ3vv73vv73vv73vv73vv73vv71HVzbvv71zc1QACiDvv73vv70g77+977+977+9yJwv77+9ZO+/vXlw77+977+977+977+977+9f++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vR8ONw1N77+93awf77+9d3fvv73vv73vv70O1rbvv712D++/vRbvv70SNu+/vRjvv73vv73vv71uPu+/ve+/vW9sbCzvv70XG++/vXw+Xcyn77+9Yjbvv73vv73vv71J77+977+9Xe+/vU7vv70U77+9IiQh77+977+9PO+/vXB777+9AzYm77+9IQQ7D++/ve+/vW4vdO+/vXlo77+977+977+9Tu+/ve+/vWp177+977+9eu+/ve+/vTo4bDYa77+9Lu+/vTwAVlA4IGTvv70AAFDvv70E77+9ASomBe+/vQo+KRTvv71DIe+/vSERCSRIGALvv73vv73vv719RD7vv73vv71n77+9fwbvv73vv73vv73vv73vv73vv73vv71+77+977+977+977+977+977+9egjvv71D77+977+977+9V++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vXHvv73vv71/Su+/vRPvv70/77+977+977+9J++/vRfvv73vv73Yv++/ve+/ve+/ve+/vQB5L38n77+9B++/vUPvv73vv73vv73vv73vv73vv73vv73vv70T77+9I++/vQfvv73vv73vv71+77+977+977+977+977+977+9S++/ve+/ve+/ve+/ve+/ve+/ve+/vX/vv73vv71K77+977+9H++/ve+/ve+/ve+/vT/vv73vv73vv71677+9buevkVnvv73vv70P77+977+9R++/vV/vv73vv73vv70f77+9ee+/vXNv77+9P++/vX/vv73vv70wehzvv73vv73vv71AX++/ve+/vQ7vv73vv73vv70j77+977+977+9D++/vW/vv73vv73vv71n77+9H++/ve+/ve+/ve+/ve+/ve+/vQPvv70377+977+977+9H++/vT3vv71/77+9fu+/ve+/vQp+77+977+9d++/vW/vv73vv73vv70v77+977+9yr/vv71/au+/vQfvv70z77+9f++/ve+/vWrvv73vv73vv73vv70177+9J++/ve+/ve+/ve+/ve+/vSUffO+/ve+/ve+/ve+/vWPvv70D5b+If3Dvv70D77+9Be+/ve+/ve+/vX/vv70/aX8l77+977+977+9P++/vT/vv71/77+977+977+977+9Wu+/vX9pH++/vXk777+977+977+9X++/vR/vv70/77+9f3fvv73vv71/be+/ve+/ve+/ve+/ve+/vT/vv717B35V77+9K++/ve+/ve+/vT/vv73vv73vv70/ID/vv73vv70r77+977+977+977+977+977+9Gu+/vXfvv70/77+9P++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vRvvv73vv73vv70+77+977+977+977+977+977+9Be+/vTfvv70v77+9D++/vX/vv70/77+977+977+9X++/ve+/ve+/vQ/vv73XqBfvv70/77+9f++/ve+/vT3vv70F77+977+977+977+977+9b++/ve+/ve+/vT/vv71/77+977+9eu+/vSfvv71v77+9X++/ve+/ve+/ve+/ve+/vX/vv73vv70f77+9B++/vU/vv70/77+977+977+9f++/ve+/vUnvv73vv73vv70n77+9R++/ve+/ve+/ve+/ve+/ve+/ve+/vX/vv73vv70X77+977+977+9d++/vdeyf++/vV/vv70e77+977+977+9H3wf77+977+9SRjvv70Q77+9E8W145yEbO+/vXo5Uh1wCHTvv71Y77+977+977+977+9Su+/ve+/ve+/ve+/vULWqO+/vUJdUe+/vTQZf++/vW0D77+977+977+9Ze+/vUvvv73vv71A77+977+977+977+9WHxuXH7vv71JO3gFB++/ve+/vXF177+977+977+977+9KXHvv703ZTsUbe+/vU4MLu+/vRbvv73vv701ae+/ve+/ve+/vTt377+9YiIU77+9EXZO77+9Nu+/ve+/ve+/vVPvv73vv71B06ghHyLvv73vv700GQ9/LO+/vS0i77+9cO+/ve+/vXlt3oDvv71BF2Tvv70jQe+/ve+/vXsCGe+/vSc177+977+977+9QC3vv73vv73vv71y77+9HQU677+9YU0JGgjvv717FO+/vRbvv73vv71rbkc8e8+n77+977+977+9KO+/vUjHiO+/vUYo77+9Eifvv73vv73vv73vv71y15zvv73vv71MVxHvv70f77+977+9Xe+/ve+/vT8BOWNZ77+9GTXvv71D0JJ477+977+9Lu+/vVV277+977+977+9Lu+/ve+/ve+/vS/vv70jbljvv73vv71sMzhI77+9XVUj77+9GHdZ77+977+9SNuWZsSs77+91I3vv71mbErvv718Wu+/ve+/ve+/ve+/vW3vv73vv71qRtyzNiVkfO+/vc2377+9L0JWzJnvv73vv700IFk977+9PFZE77+9EG9IXO+/vQLvv73vv73vv71k77+9VBM+77+977+977+9KO+/vS7vv71T77+9IGFoYuSoiHrvv71U77+9bVkH77+977+9Le+/ve+/vX1O77+9KRTvv70177+9Gu+/vT5I77+9Wu+/vTxG77+9CF8D77+977+977+977+9V++/ve+/vVVzK++/ve+/ve+/vW8CA++/vTnvv73vv71j77+977+977+9Fu+/vWJp77+9bjfHrX7vv73vv73vv73vv73vv73vv70UIn9u77+9H3Tvv73vv71f77+9JVI6xrpOIHpBK++/vX4z77+9Hu+/vVHvv73vv73vv70f77+9FG3vv73vv70k77+9RwTvv71t77+9PzkZ77+977+9IO+/vS3vv70b77+9cu+/vTBO77+9GO+/vTjvv71BN++/vRjvv73vv73vv716BnXvv70EQwjvv70d77+977+9Ed+zWEvvv70a77+9SCBZ77+9e++/vT5hbu+/ve+/vQ0j77+9ybnvv73vv73vv73vv73Qn2Z+77+9EA3vv70eD++/vQPvv70JaO+/ve+/ve+/vQ8LJu+/vXPvv73vv71u77+9ICHvv71MHQLvv73vv73vv70977+977+977+9Yu+/ve+/vUx777+9e++/ve+/ve+/ve+/ve+/vde+KEDvv73vv73vv71ZFQp/fdSj77+9zIjvv73vv73vv71Q77+977+9be+/ve+/ve+/vTDvv71t77+977+9JA9MOO+/vW/vv71K77+977+9Djbvv71+Eu+/ve+/vcON77+9H++/ve+/ve+/vTDvv71t77+977+9Kj9MOO+/vXHvv70U77+977+9YWfvv70HGU9eUOKToe+/ve+/ve+/vSbvv73vv71s77+9IO+/vWI/ac+/77+977+977+9e++/vUtvQO+/ve+/vRN577+9PO+/ve+/ve+/vSERIe+/ve+/ve+/vcqBLe+/vURsBe+/vTnvv71yAi8IQ++/vXMrfHla77+9G++/ve+/ve+/vQfvv73vv73vv71FJX0D77+977+9KO+/vQDvv70Y77+9Ue+/vUzvv73vv70CFO+/vQ1X77+9xJjvv73vv71oKe+/ve+/vTMS77+9x5bvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv73iop3vv716HuO9iDTvv70dVO+/vX/vv73vv70B77+9WO+/ve+/vVjvv73vv70qVe+/vV/vv70H77+977+9UHTvv71vCO+/ve+/vTBXSRUtAWLvv73vv73Imnvvv73vv703JO+/vW5y77+9UO+/vUh5Q++/vQXslo7vv73vv71J77+9Xe+/vUHvv73vv71BOQom77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vVBqcu+/vQVrIwQq77+9Kx7vv70HXxU0fR9E77+9T++/vSTvv73vv73vv73vv73vv70477+9fgjvv73vv73vv71MDNaP77+977+9F++/vXVYSTlde++/vSZk77+977+9XFV277+9SO+/vQNk77+977+977+9RDnvv73vv73vv70877+9Q0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70cXndx77+9JAkKTSzPg++/ve+/vcStAT1qKQnDptmu77+9bu+/ve+/vSLvv73vv71r77+977+977+977+977+9Dyfvv70Q77+9DO+/vV97GDIM77+9cifvv73vv70PyJN3b++/ve+/ve+/vUPvv73vv73vv71b77+977+9dDTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUVePGFlJnkpDGQBSe+/vQfvv718X++/vQlwO++/ve+/vTtHBe+/vRnvv70xVFzvv70e77+9FO+/ve+/ve+/ve+/vV4Pam9ycO+/ve+/vQPvv73vv70mU09N77+9du+/vUjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpI77+977+9JihsLO+/vWMo77+9E++/vSjvv71Z77+977+9P++/vXgwZy3vv73vv71f77+9cyHvv73vv70077+977+977+9bu+/ve+/vTfvv73vv73vv71n77+977+9Be+/vQfvv73vv70uP9K3x5bvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+977+9fwfTrO+/ve+/vQXvv71oIs66cjdOcCREVEwnVu+/vSBs77+9ZXbvv73vv71CCADvv73vv70d77+977+9F++/ve+/vciJaxjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0jvv73vv73vv71OeO+/ve+/ve+/ve+/vRx3RO+/ve+/vQQUJu+/vXpqAsStKiHvv70t77+9R1rvv73vv73vv71oQe+/ve+/ve+/vQLvv71X77+977+9AFZBRO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71FYe+/vWk7Pu+/vSLvv73vv70lDe+/ve+/vU0yVAjvv73vv71hcz8577+9cO+/ve+/ve+/vRzvv70aOO+/ve+/ve+/vQvvv71l5aSMeO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv71G77+977+9Yu+/ve+/vVHvv73vv73vv70y77+9a1Z077+9J3w4M0Xvv70k77+9V++/vV3vv73vv70V77+9aG15PwRLWMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9Gkjvv73vv73vv71Re8+c77+9AVTvv73vv73vv71W77+977+9MThA77+9IWXvv73vv71L77+977+977+977+977+9RO+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv73vv71F77+9GSLvv70p77+977+9QQFRd9O477+977+9M++/vX4E77+9Ou+/vU7vv70c77+9HO+/vRLvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+927Dvv712zpLpsIoW77+9Vybvv71E77+9Ne+/vR/vv70377+9DGnvv71177+977+9CGxyBEtYx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aR3Pvv73vv70v77+977+9AO+/ve+/vQjvv711a++/vWvvv73vv71+SCDvv73vv71nBBFe77+9N++/ve+/vWsY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJFe+/ve+/vSZQMk9rce+/vUQaeS3vv71jDe+/vSw8DO+/ve+/ve+/vRzvv70S77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/ve+/vVZY77+977+9JzBMHlNOBO+/vQZh77+9EO+/vXnvv70477+9RkDvv71rGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jRwvvv71777+977+977+977+9I0xk77+9VEAS77+977+9F3jvv73vv71D77+9dQ1O77+977+977+9F1JIcc6h77+977+9VBwi77+9SQ4577+9NTvqg4RdSSHvv70677+977+9fVBu77+977+9Ue+/ve+/ve+/ve+/vVHvv71PXjvvv711JO+/vRzvv70a77+977+9Qe+/vS7vv73vv73vv71DU++/ve+/vThF1JIcc++/vWp377+9Bwjvv73vv71D77+9dQ1O77+977+977+9LiDvv73vv71ZIkQtfQlrGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv73vv71vZzw/NjVnF2Aq77+977+977+9JO+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+977+9TmNK77+9XO+/vdaU77+977+977+9dDTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70h77+977+977+9Xe+/vVBr77+9S1jHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4U+77+9fO+/vVrmjrTvv73vv70eW++/ve+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vREP77+9b++/ve+/vcqDX0Ja77+9PEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9Rjwp77+977+977+9Qu+/vS4T77+9ZDptGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSO+/ve+/vVvvv71C77+9NHXvv70+77+977+977+9DSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv71/PO+/vTXvv70i77+977+934Il77+9Y++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGLvv73vv70P77+977+92ZUG77+977+977+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXhT77+9N8iF77+9Xe+/ve+/vU/vv73vv71GQO+/vWsY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNI77+9YghfNe+/vSRC77+90Jbvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Cn3vv73vv70Q77+977+977+9Su+/vRDvv71j77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWki77+9GW/vv70LBO+/ve+/vWvvv73vv73vv73vv73fgiXvv71j77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kYu+/ve+/vQ/vv73vv70Z77+977+977+9Xu+/vVnvv70b77+977+9Ee+/vSJa77+9PEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9PBh877+9Eu+/vSHvv70Z77+977+9Hu+/vXTvv71v77+9Eu+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70xW1sH77+977+9Se+/vVBr77+9S1jHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4U+77+9fO+/vVc977+977+9eCMgRO+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv714MQQv77+977+9d1xlNu+/vS3vv73vv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9yaV8XT7vv73vv713Tlbvv70ZTe+/ve+/vXQ077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NHJpXxdP77+977+977+9G++/ve+/ve+/vQTvv71N77+9HiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRXvv73vv71877+9We+/vU4K77+977+977+977+977+9JO+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+977+9TmNK77+9RCfvv73vv73vv73vv73vv70ES1jHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpI77+9bWwf77+977+9Kg19CWsY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/ve+/vW/vv70LXO+/vdaU77+977+977+9dDTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70h77+977+977+9Xe+/vVBr77+9S1jHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4U+77+9fO+/vVfvv73vv71fUj01EO+/ve+/vSXvv71j77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY8Kfae+/vUQsG++/vce2Ge+/ve+/vSIW77+977+977+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXhT77+9N8iFcmLvv71d77+977+9Y++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIu+/vRlv77+9Cu+/ve+/ve+/vQRkCO+/ve+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv70GIO+/ve+/vVYu64ym77+977+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRo5NO+/ve+/ve+/ve+/vULvv73vv71v77+977+9ZO+/ve+/vTXvv70l77+9Y++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPCn2nvv73Guynvv73vv71+77+977+9ZgZPQVzvv73vv71N77+9HiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRXvv73vv716NlPvv70B0IZi17AvMMiTSHTvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv71bDO+/ve+/vVAmM3Tvv71w77+977+977+9cmIdNu+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JFbvv70t77+9F++/vVfvv73vv73vv70XOe+/ve+/vSTvv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/ve+/vU4t77+9IO+/ve+/vV7vv70kQu+/vdCW77+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vQp977+977+9EO+/vXvvv73vv73vv71GQO+/vWsY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNI77+9YghfFylC77+977+9T20v77+9yZJIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RO+/vTBo77+9x6/vv706FG7vv70VN2Dvv73VlUHvv73vv70tYx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeFO+/vU3vv70d77+977+9NTlF77+9Bu+/ve+/vX4I77+977+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/ve+/ve+/vTx777+9GO+/vWDvv71H77+977+9be+/vV4I77+9ES1jHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pHgxBC++/ve+/vV9kB++/ve+/vQQ6bRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9Gkjvv73vv71b77+9Om9877+977+977+9JO+/vWzvv70t77+977+977+9TO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEZiJzHvv70N77+977+96LaeGjvvv73vv71877+9TO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEZiJzHvv70Ncu+/ve+/ve+/ve+/vUPvv73RjxHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+977+9ZO+/ve+/ve+/ve+/ve+/vRrvv706RO+/ve+/ve+/vSnvv715bu+/ve+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv71NK++/ve+/vVbvv71WBe+/vXHvv73bvO+/vUNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jRybvv73vv70yau+/ve+/vXHvv73bvO+/vUNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jRybvv73vv70yS++/ve+/vThE77+9Q++/vdGPEe+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv73vv71l77+9Qu+/vQk1Ue+/ve+/vWDvv73vv71077+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+9Wwzvv73vv713A8yyCQ1cZREm77+977+9Y++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIu+/vRlv77+977+977+977+977+977+9fgjvv73vv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+977+977+9P3/vv71R77+977+977+9GQIl77+9Y++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9I++/ve+/vSF81YTvv70VDRVB77+977+9LWMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHhTvv71N77+9IVzvv73vv73vv71zL++/vUzvv71N77+9HiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRXvv73vv71877+9WuaOtO+/ve+/vR5b77+977+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9EQ/vv71v77+977+9yoNfQlrvv708Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPCnvv73vv73vv71C77+9NHXvv70+77+977+977+9DSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv71/PO+/vX/vv71mVBrvv70S77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv71P77+977+9IhZxdjTvv71177+9Pu+/ve+/ve+/vQ0kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9fzzvv71/77+9XkDvv73UqDXvv70l77+9Y++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPCn2nvv71ELXNHWlPvv70t77+977+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/ve+/ve+/vTfvv712ZUHvv73vv70tYx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeFO+/vU3vv70hZxdjTu+/vVpT77+9Le+/ve+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv73vv73vv70377+9Ze+/vV/vv71zWTJJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70Z77+977+9xpUG77+977+977+9Ke+/vceW77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vUPvv73vv70b77+977+9De+/vRpUGu+/vRLvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vU/vv73vv70iFu+/ve+/ve+/vSnvv73Hlu+/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71D77+977+9G++/ve+/vTLvv73vv73Qlu+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70Kfe+/ve+/vRDvv73vv73vv73vv71ZDu+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70rYe+/ve+/vTrQhGfvv70j77+9Ke+/vceW77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vUPvv73vv70b77+977+9Mu+/ve+/vdCW77+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vQp977+977+9EO+/ve+/vR1pT++/vTzvv71DSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeIh/vv70o77+977+92ZUG77+977+977+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXhT77+9F++/vXZlQe+/ve+/vS1jHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4U77+9Te+/vSFr77+9OtKffHlu77+977+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8RD/vv71R77+977+9Kg19CWsY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/ve+/vW/vv70LXO+/vdaU77+977+977+9dDTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70h77+977+977+9Xe+/vVBr77+9S1jHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4U+77+9fO+/vVrmjrTvv73vv70eW++/ve+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vREP77+9b++/ve+/vcqDX0Ja77+9PEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9Rjwp77+977+977+9Qu+/vTR177+9Pu+/ve+/ve+/vQ0kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9fzzvv71/77+9ZlQa77+9Eu+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9T++/ve+/vSIWcXYC77+977+9yZJIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RO+/vTTvv70177+9HWlP77+9PO+/vUNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4iH++/vSjvv73vv71wbijSoO+/vdCW77+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vQp977+977+9EO+/vV9Q77+9Ku+/vV9CWu+/vTxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ke+/ve+/ve+/vULvv700de+/vT7vv73vv73vv70NJGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vX8877+9f9W+EiIqCe+/vV4I77+9ES1jHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pHgxBC++/vUTvv71a77+9Eu+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9T++/ve+/vSIW77+977+977+9Ke+/vceW77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vUPvv73vv70b77+977+9Mu+/ve+/vdCW77+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vQp977+977+9EO+/ve+/ve+/ve+/vWPvv70p77+9x5bvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9Q++/ve+/vRvvv73vv70y77+977+90Jbvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Cn3vv73vv70Q77+977+9HWlP77+9PO+/vUNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4iH++/vSjvv73vv73ZlQbvv73vv73vv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eFPvv703yIXvv71o77+9Sn3vv73vv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9EO+/vXRMMe+/vUdaTe+/vXTvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv71bDO+/vciF77+9aO+/vUp977+977+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRDvv715Ru+/ve+/vcyoNe+/vSXvv71j77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY8Kfae+/vUQtc0daU++/vS3vv73vv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+977+977+9N++/vXZlQe+/ve+/vS1jHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4U77+9Te+/vSFr77+9OtKffHlu77+977+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8RD/vv71R77+977+9Kg19CWsY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/ve+/vW/vv70LXO+/vdaU77+977+977+9dDTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70h77+977+977+9Xe+/vVBr77+9S1jHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4U9C++/ve+/vV8177+9JELvv73Qlu+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70Kfe+/ve+/vRDvv73vv70daU/vv70877+9Q0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiIf77+9KO+/ve+/vXBuKNKg77+90Jbvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Cn3vv73vv70Q77+977+9HWlP77+9PO+/vUNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4iH++/vSjvv73vv73ZlQbvv73vv73vv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eFPvv703yIXvv71d77+9Ox1pT++/vTzvv71DSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeIh/vv70o77+977+92ZUG77+977+977+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXhT77+9Hu+/vS7vv73vv71k77+9EO+/ve+/vSXvv71j77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY8Kfae+/vUQs77+977+9DMuM77+977+977+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRo5NO+/ve+/ve+/ve+/vR/vv71k77+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9ZiJzGlQa5o6077+977+9Hlvvv73vv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70RD++/vW/vv73vv73Kg19CWu+/vTxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ke+/ve+/ve+/vTfvv71x77+977+9f9eCMgRLWMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9Gkfvv70QQu+/ve+/ve+/vSIW77+977+977+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXhT77+9N8iF77+9aO+/vUp977+977+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRDvv715Ru+/ve+/vcyoNe+/vSXvv71j77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY8KfaO+/vTHvv70xce+/ve+/vX/XgjIES1jHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpH77+9EELvv73vv73vv70iFu+/ve+/ve+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv714U++/vTfIhe+/vWjvv71Kfe+/ve+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70Q77+9eUbvv73vv73vv71xRu+/vQbvv73vv73vv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eFPvv70377+9PO+/vVNOCSvvv73vv715fi7vv73vv73vv71DU++/ve+/vThF1JIcc++/vWp377+9Bwjvv73vv71D77+9dQ1O77+977+977+9F1JIcc6h77+977+9VA/vv73vv73vv71v77+9C1zvv70mQHDvv71JI14HU++/vTLvv73vv73vv71O77+977+977+9F1JIcc6h77+977+9VBwi77+9SQ4577+9NTvqg4RdSSHvv70677+977+9fVBw77+977+9IEZi77+9BO+/ve+/vUTvv70yOu+/vURa77+9f++/ve+/ve+/vULvv70T77+977+9Ilrvv708Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv707Q++/vQY077+977+9N3l6EwVWS++/vSPvv71u77+977+9ejXvv73vv73vv70RLWMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWkd77+977+9MQ3vv71P77+9QwEX77+9YwXvv71x77+977+9KDlM77+977+977+977+9BTJJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jSRjvv70Q77+977+977+9Lu+/vW/vv701bu+/vWJyau+/vR5hbe+/vTDvv71gFgjvv70RLWMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kY++/vWjvv718c3Rm77+9e++/vXspV++/vT/vv71L77+9L1oxMyjvv73vv73vv702fe+/ve+/vSt8CG3vv71b77+977+977+9eO+/vSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/ve+/ve+/vV7vv73vv70XSO+/vciKbe+/vQMsfCzvv70W77+9GmoZFxLvv73vv73vv73LpmDvv71e34Il77+9Y++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JFXvv73vv73vv73vv71qRO+/vQvXtCLvv700OwRCE3t077+9Yu+/vQsNAXYdT++/vTzvv71DSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeFHPvv70LHO+/vc+PdlMb77+9dO+/ve+/ve+/vU5TP++/vX8VHFNi77+9Jxrvv73vv71KQyU677+977+977+977+9fyLvv73vv70477+9fO+/ve+/ve+/vUrvv70eW++/ve+/ve+/vXjvv70kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70xR++/vVt477+9Qu+/vRJYKVTvv71M77+977+9DS7vv708He+/ve+/ve+/ve+/ve+/ve+/vV53EO+/ve+/vTNUNe+/vRPvv714H++/ve+/ve+/vQrvv70r77+9Pu+/ve+/ve+/vQ0kY++/vWkjHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71VSu+/ve+/vSAsQjJG77+9B++/vRg477+977+9Mz8z77+977+9L3c977+9MEYraVpPNVDvv73qrLxqOe+/vT5I77+9TSRj77+9aSMeI0kY77+9GkjHiO+/vUY8Ru+/vTHvv70077+977+9Ee+/ve+/vXjvv70kVO+/ve+/vUsbU++/ve+/ve+/vU8ZdC4w77+9Tjdy77+977+9Qxbvv73igp/vv704YCPvv73vv71gdgjvv73vv70tc++/ve+/vWkMPe+/vQLvv70jIETvv73vv71477+9JGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv73vv73vv706bFrvv70C77+977+9Ou+/vTTvv70F77+9z43vv73vv73vv73vv73vv71SRu+/ve+/vQg9ce+/vWDvv70jCkrvv719Cu+/vVHvv71mD1Tvv73vv70qfe+/ve+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv71477+9JGPvv71pIx4jLz3asTYL77+977+977+9JcS/77+977+9QO+/vRDvv73vv71377+9aO+/ve+/vT4J77+9Bm/vv73UgWVy77+9d++/vW5p77+977+9b2Tvv71xOxrvv73vv73vv71NYTs9Vwvvv73vv73vv70IUu+/vX0kIW7vv73vv70NJGPvv71pIx4jSRjvv70aSMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+977+9Cwhcwpnvv73vv73vv70h77+9Je+/vTHvv71+RT7vv73euu+/ve+/ve+/vVbvv73vv71w77+977+9SSLvv71I77+977+9HO+/vSDvv70477+977+977+977+9RAHvv73vv71HCu+/ve+/vWZ377+977+9ZyUI77+977+90p1K77+9SMeI77+9RjxG77+9Me+/vTTvv73vv70R77+977+9eO+/vSRj77+9aSMeI0kY77+9Pe+/vR1s77+9ExPvv71w77+9JE9RYO+/ve+/ve+/vdi177+9NO+/ve+/vVPvv71C77+977+9XD7vv73vv71UAiXvv73vv73vv73vv71JNwzvv71mUO+/vU4777+9T++/ve+/vS8/77+9Vu+/ve+/ve+/vXwjPe+/ve+/vTYhdsuCc++/vRYI77+9ES1jHiNJGO+/vRpIx4jvv71GPEbvv70x77+9NO+/ve+/vRHvv73vv73vv73vv73vv703M++/vWvHh1dt77+9fmR5InxUKw1W77+9UTNs77+977+977+9M++/vRLvv71DAVIA77+977+9eCLvv73vv73vv73vv73Tq++/vRfvv73vv73vv71477+9be+/ve+/ve+/ve+/vSZS77+977+9He+/ve+/ve+/vUwR77+9ESrvv73vv71SNV9s77+9D++/vRTvv71aXNa/D++/vXkj77+9Ce+/ve+/vWDvv705Oy3vv73Qp++/vW3vv73vv70lR++/vRtuPwlR77+9Ye+/vduP77+9VH7vv71x77+977+977+9H++/vRxt77+977+9JUfvv70bbj8JUe+/vSHvv73JmTrvv70gJnVcde+/ve+/vSla77+977+977+977+9yrUQPsagEXvvv71j77+977+977+9W2rvv71WYyI177+9WT5i77+9PCTvv70l77+977+977+9LDDvv73vv70/77+9Bu+/ve+/vWTvv70NJGPvv71pew7vv71vAe+/ve+/ve+/ve+/vShq77+977+9SHDvv73vv701au+/ve+/ve+/vXzvv73vv71y77+977+9Mwxh77+9Fhli77+9esqpcw3vv73vv71USe+/ve+/vUtT77+977+9OEXUkhxz77+9anfvv70HCO+/ve+/vUPvv711DU7vv73vv73vv71Fb1Dvv73vv70idO+/vVAG77+9b++/ve+/vT5D77+977+977+977+9KHvvv73vv73YvO+/ve+/ve+/ve+/ve+/ve+/vS3vv73vv70QF1UZ77+925fvv707WA7vv73vv73vv70rfHjvv73vv71uJu+/ve+/ve+/vTnvv73vv70DYO+/vQsHM++/ve+/vQEyampeJnLvv73vv73vv73vv73vv706I0o8fe+/vTdk77+977+977+9EB5KS++/vUvStlli77+977+977+9UU4+Cu+/vRnvv73vv70f77+9RwZT77+9fBbvv73vv713Ee+/ve+/vUnPlO+/ve+/ve+/ve+/vW3vv71ODC7vv73blu+/vQsD77+9E++/ve+/vU/vv73vv71G77+9FO+/ve+/veyduWpH77+9Bkwx77+9f0Fac0hUHA9s77+9MEvvv73vv73vv71o77+977+9IO+/vQ/vv73vv71877+9H++/ve+/vShT77+9Iu+/ve+/vRZu77+977+9NCHvv73vv73vv73vv70z77+977+9Wu+/vQnvv73vv70a77+9U2YH77+9De+/vXAkXH/vv71v77+9K++/vVFOP0Xvv73vv71rL++/vVc3ZNi1Vjrvv73vv70tdu+/ve+/vX9H77+977+9N2Tvv70uJWTvv70w77+9QiVk77+9VO+/ve+/vTTvv73vv70lAe+/vXdm77+90bbvv70g77+977+9Te+/vVwi77+977+9cu+/vS3vv73vv70q77+9Uwt/WO+/vU8/du+/vUTvv70C77+9F++/vTMiee+/vTfvv73vv70d77+977+9I25Z77+977+9NADvv70F77+977+9ZmxI77+9Xith77+977+9Ul7vv73vv70PKe+/ve+/ve+/vVnvv73vv73vv73vv71rPnXvv73vv73vv71TTe+/vVzvv70jBu+/ve+/vQnvv71F77+9Pe+/vRttSu+/ve+/vTNU77+9WO+/ve+/vVA6ECrvv73vv70T77+9fu+/ve+/ve+/vQ1i17tf77+977+9zL7vv73vv71h77+9aEbvv70x77+9AADvv73vv73vv73vv71L77+9fiHvv71D77+9Ru+/ve+/ve+/vXLvv70HLe+/ve+/ve+/ve+/vRvvv71GU10ve++/vXXvv71UWBvvv73vv73vv73vv73vv73vv73vv70z77+9WO+/ve+/vQ3vv70iF3RrOSbvv73vv73vv70K77+9Ce+/vQfvv73RvO+/ve+/ve+/vU7Suu+/vWnvv71c77+9e++/vU7vv71CNWDvv710WXTvv73bkgY/0Koq77+9Ou+/ve+/ve+/ve+/ve+/vXnvv73vv73YvhkVSSDvv71TVy8m77+977+977+977+9JO+/ve+/ve+/vUrvv73vv70N77+9Qu+/vTjvv73vv71Y77+9D++/vSxPQ0sXS++/vRRT77+977+9y7YB77+9JE/vv73vv70nGnbvv71jd19QR++/ve+/ve+/vUJ377+977+9b++/ve+/vQvvv70f77+9EldA77+977+977+9ezPvv70D77+9VklCUGnvv70qXu+/vWPQtFrvv70XFd2m77+9yKEi77+9cO+/veizoU4JNQk8Wlbvv71R77+977+9AjgS77+9f++/vQklYx1S77+9SB8u77+9aO+/vVzvv71O77+9QlHvv71x77+977+977+977+9Oe+/ve+/ve+/ve+/vQvdsyUgGd6sAzJN77+977+9De+/vd6577+977+977+9z5tRUSjvv73vv71D77+9eu+/vS3vv70y77+977+9dR/vv70qfe+/ve+/vS/vv73vv73vv71Z77+9eAxWJe+/vSjvv70G77+9FRjvv71Z77+9XQI077+9b++/vUPvv71p77+977+9SEnvv73vv73vv71/bWvvv71BHm3vv70xBhfvv73vv70jT1Xvv73Vo++/ve+/vXnaokfvv70877+9L++/vQPvv70W77+9PdGNRRceJu+/ve+/vSvvv73vv70FaO+/ve+/vQVgc++/vT3vv73vv73vv71wZe+/vWHvv70j77+9LS3vv705I++/vSYO77+977+9Mlca77+9ezR+77+93L4UbRfvv73vv70J77+977+9Y++/vQTvv71W77+977+9fhJd77+9Ke+/ve+/vRTvv70s77+9Re+/ve+/ve+/vR/vv73Sje+/vURbf1zvv73vv70M77+977+9LA3vv73vv71wGCnvv73vv71jIQBS77+977+9Qxfvv73vv71z77+9Qj0N77+9V++/vQgS77+977+9U0F677+977+977+9biURG23vv70677+977+9fT/vv71577+977+9KGMHbe+/ve+/vdu7ZSN777+9D++/vWsuY++/ve+/vQV3PwdU77+9OS3vv71p77+9M++/vRbvv71WX++/ve+/vVYDUB/vv73vv73vv70z77+9XWvvv70o77+9YO+/vT7vv71877+9PQTvv70ZYlbvv71v77+9fO+/vUZe77+9M++/ve+/vQxE77+9MO+/ve+/vRxO77+9eu+/vd+hO2Xvv71EOBHvv73vv71HFmjvv70S77+977+977+9SO+/vd+iSO+/ve+/ve+/ve+/ve+/vTXvv71b77+977+977+9HEUrMe+/vTw677+9GhEFOu+/vUlB77+9YO+/vRUX1a/vv70C77+977+977+9Ku+/ve+/vQrvv70577+9QH9I77+9Pu+/vQLvv702BDvvv73vv73vv70J06VzYO+/ve+/vUrvv73vv73vv70ZO++/vVJmF9OlGlPvv73vv71bTO+/ve+/ve+/vRTvv70c77+9yZ/vv73vv71zLe+/ve+/vVZ8Fgxq77+977+977+9aO+/ve+/ve+/ve+/veq2je+/vRjvv715UHnvv71vJDl5Uz4lWu+/vVUfWnlT77+977+9C++/ve+/vV7vv73vv71XYe+/vS/vv70tXxbvv73vv73vv73vv70RYu+/ve+/vTM8MRbvv73vv719f++/vUvvv70l77+9I++/vSQW77+977+9H1ZTB++/vSV377+977+977+9Y++/ve+/vRtHU++/vV3vv73vv7193aDvv71t77+977+9Ngtd77+9E13vv73vv70x77+9VTvLke+/vXdGZlzvv73OkR/vv73vv73vv73vv73vv70v77+977+977+977+977+9AWjvv71jeu+/vUrvv73vv73vv73vv71NbgMRKu+/ve+/vS4I77+93KXvv71AV0Ne77+9AHd4DX3vv73vv70+77+977+9bEPvv70N6oSJ77+977+977+977+9Be+/ve+/vUNrNyPvv73vv70777+977+9Xu+/vUoX77+977+977+9c0Hvv73vv73vv71e77+9dzACfi7vv73Xmu+/vWrvv71+AO+/vT5LDO+/ve+/vWrvv71LLO+/ve+/vX0S77+977+977+977+9Pu+/vUp077+96rGf77+9Bkrvv73vv71eK++/vVLvv719fu+/ve+/vXhT77+9N3VHQj1vPDXvv73vv73vv71QEO+/ve+/vRvvv73vv73vv73vv71uFu+/vVpo77+977+9Tu+/ve+/vX3vv71XfV5dbd2ZHGbvv73gspFy77+9652BSh1Q77+977+9Qe+/vVHvv70a77+977+977+977+9XylV77+977+9QAdfJe+/ve+/vU4U77+9bO+/vRxG77+9GlcM77+977+9YCPvv71qL++/ve+/vUJsce+/vVlrRu+/vUgO77+977+9Bm9577+9y47vv71KCO+/vWfvv73niLBh77+977+9U1Pvv71f77+977+977+9Hu+/vScvI3Tvv73vv73vv71977+9fG3Jnu+/ve+/ve+/ve+/vX0t77+9PxcXJu+/vQkw77+9Ru+/vQUqCQYY77+9Je+/vXvvv71ucMKNNHZ377+977+977+9Alfvv73vv70aQO+/vUVSQBDvv70vOO+/ve+/vdub77+977+977+977+977+977+9LO+/vQBy77+9ADcCKy9wZMKK77+977+9ce+/ve+/ve+/vRvvv70277+977+9du+/ve+/vdKg77+977+977+9Ku+/vVUp77+9Hgzvv71KfWXvv716Mu+/ve+/vQY777+9Be+/vSfvv73vv70kHO+/vVjvv71hJ2YWfBBv77+977+9Ke+/vUchLu+/ve+/vTnvv73vv71E77+9ew5BMe+/vWFF77+9w5rvv73vv70W77+9fX0Va++/vQo7Xe+/ve+/ve+/vRl777+977+9b++/vTFZ77+9F2Tvv71D77+9Ce+/vUnvv71V77+977+9CALvv73vv73vv73vv73vv70Ree+/ve+/vVkZ77+977+9ZTlP77+9ViPvv73vv70DdFXvv73vv71KCTrvv73vv73vv71aRe+/vVDbk++/ve+/ve+/vQZw77+977+9HO+/ve+/vT8M77+977+977+9Qu+/vR7vv73vv70dMe+/ve+/vSLvv73vv71ZWu+/ve+/ve+/vcmTDRTvv70877+9L++/ve+/vSBQJO+/vWnvv73Mnu+/vQ7vv73vv71K77+977+9LgF7be+/ve+/ve+/vWTvv70hfO+/ve+/vT/vv73vv71HMMihxJoQMkFr77+977+9EBnvv73vv700HilE77+91prvv73vv71Ebu+/ve+/ve+/vVTvv704aO+/vULvv73vv70v77+977+9HUlRDmrvv73vv73vv71I37hzIU7RsD/vv70GUu+/vQ8yGzzvv71577+9HEoBZ0Dvv73ElAZt77+9de+/vU7vv70XZe+/vU1v77+90qwSVO+/vRDvv73vv71377+9cNq/77+9Dixk77+9Ie+/vdSz77+9bTfvv70677+9fe+/ve+/vXEhCjVHZ++/vT1z77+977+9O++/vS4R77+9P++/ve+/ve+/ve+/vV3vv73vv70i77+977+977+9Su+/vXwQ77+9ce+/ve+/vX3vv70/VtGw77+9Fu+/vTIHAu+/vThf77+9cBbvv73vv70O77+9WmFN77+977+9De+/ve+/ve+/vWB1AXLvv73vv70zSyPvv71K77+977+977+9LElT77+9RjBK77+9QDLvv71E77+9Re+/ve+/ve+/vcaHTxnvv70JTCvvv705Ee+/vUZ0LO+/ve+/vdeh77+9Oe+/vQHvv707Be+/ve+/ve+/ve+/ve+/vXogNX3Jjigr77+9OO+/vTrvv70V77+977+9De+/vSfvv70zfe+/vTzvv70gfO+/ve+/ve+/vX5377+977+9axLvv71RXwoz77+9KmF377+9fu+/vS7vv73vv73vv71NaO+/vdGM77+9L++/vVB477+9Gu+/vV7vv71577+977+9ce+/vVUpPUHvv70P77+977+9b++/vWHvv70NcO+/ve+/ve+/ve+/vX7vv70mZe+/vVIC77+977+9de+/vSfvv73vv73vv71BKO+/vVFONe+/ve+/ve+/vdWNTgMhaiklexRH77+977+9BO+/vXo3dgNN77+9c++/vXprAk/vv70ofu+/vVAu77+977+9A2Tvv73vv73vv701T3Me77+977+9GDTvv71K77+9TGpuOu+/ve+/vULvv70U77+977+977+977+977+9MTdobt+uAu+/vSvNiDDvv71vaSNMb++/vVvvv71W77+9LT4qV++/ve+/ve+/ve+/ve+/vV/vv70f77+977+9Oz/vv70nHO+/ve+/ve+/vSk8DCzvv73vv712dgk/ARbvv705FO+/vT8XP15v77+9GkDvv71nSSUb77+9V++/vSYYEe+/vXdJzoXvv70eYwZZDc6hUW9P77+9CDfvv73vv701HWtf77+977+9FHMjc++/ve+/vQXvv73vv73vv73Gi2xm77+977+9c++/vXoq77+9OO+/ve+/ve+/vRHvv71wSO+/vR4fCkcrOO+/vWoAz7/vv71377+93L5bXScA77+977+977+9VRTvv73vv73vv71LWO+/vdSMde+/ve+/vQ9iYF4m77+977+977+9P++/vVbvv71N77+9R05O77+977+977+977+977+9Uyhs77+9LO+/ve+/vQQJ77+9ENOrf++/vQLvv73vv73vv73vv70/77+9b++/ve+/ve+/vSJiIhFuLO+/vWMg77+9Sl4t77+977+9dAfvv73vv71YYu+/vRvvv71W77+9CO+/vV7vv70977+9y67vv73vv73vv71bT++/vTEIfO+/vX3vv73vv70K77+9U0jvv71TzK91C++/ve+/ve+/ve+/vTDvv73vv73vv71rMe+/ve+/vUJ977+9L++/ve+/vVoFc++/ve+/vTzvv70C77+9Ae+/vTrvv73vv71E77+977+977+9xa7vv73vv73vv73vv70k77+977+977+977+9ZCQQXkoM77+977+9aO+/vVrvv70J77+977+9dO+/vQlhfe+/vUzvv71977+977+9ZhHvv71kKsOiKC3vv73vv70f77+977+977+977+977+9Ju+/ve+/vRl/AO+/vTR/Ue+/vXZ077+977+9zK5W77+977+977+977+977+977+9XHnvv73vv73vv73vv71Z77+9Pe+/vduUSe+/vTh977+977+9c++/ve+/ve+/ve+/vTvvv70n77+977+977+9M++/ve+/ve+/ve+/vX/vv71M77+977+977+977+977+977+9zL7vv73vv71277+977+977+9Fy/vv73vv73vv73vv70977+9GgJ+77+9NQQH77+9eu+/vRrvv70IBe+/ve+/vX/vv73vv73vv71gUGED77+977+9N++/vUTvv70f3YPvv73vv73vv71YOkAaLmHvv73vv73vv71r77+9NzrqjYcyXO+/vVsX77+9Azbvv706Ve+/vQTvv73vv70LFu+/vVNW77+9fBTvv73vv71JHu+/ve+/vSzvv71Y77+9aSDvv73vv71e77+9ee+/ve+/vV3vv73vv70K77+977+9Zu+/vdamSe+/ve+/ve+/ve+/vT/vv73vv70/ahIw77+977+977+93Znvv702b++/ve+/vT5aJe+/vVUu77+9DmLvv73vv73vv73vv73vv70Cfu+/vUvvv70+E++/ve+/ve+/vXYIYFA4NhTvv70U77+9GSLvv73vv70+O++/vRc/77+977+9ORdyH++/ve+/ve+/vRvvv70WNe+/vcmg77+9UERsD++/vTHvv71D77+977+977+977+9Le+/ve+/ve+/vcWx77+9Iu+/vXp2fy4u77+977+9Pw9Y77+977+9YEbvv70oQkt9Qe+/vV/vv70IbSnGpe+/ve+/ve+/ve+/vS3vv70b77+9S3fKqO+/ve+/vSjvv73vv73vv71tLu+/vUPvv73vv73vv73vv71gWgvvv73vv73vv73agCfvv711EENrFm5TYynvv73vv71vIlvvv73vv70oI++/vUko77+977+977+977+9N++/ve+/vQfDkw7vv71e3Zjvv71o77+9G++/vU7vv73vv71DJu+/ve+/vU3vv70bJ++/ve+/vVl9K++/vXnEi++/ve+/ve+/ve+/vU7vv73vv70L77+977+9Lu+/vcqN77+9TnDvv70z77+9QMKi77+9MSE977+9VH3vv70x2IUr77+977+977+9CCMpcO+/ve+/vRDvv73vv73vv70R77+977+9HQnvv70GUxtq77+90r8+PArvv73vv70Ocu+/ve+/vQkK77+9Ju+/vQnvv71AA11BYO+/ve+/ve+/vSTvv73vv71YEE89CTjvv73Wtm8HYe+/vXDvv73vv71v77+977+9XnYO77+9B2Tvv73vv70JXll3OEEBNnjvv71377+977+9TF8X77+977+977+977+9Yu+/vWXvv70zch8u77+9YW7vv70WF3cb77+9c++/ve+/ve+/ve+/vSrvv70f77+9Xu+/vVPvv71nM1jvv71W77+9WO+/vQrvv70E77+9ambvv70+Se+/vRTvv70q77+977+9Ejrvv73vv71V77+977+9Fu+/vVzvv73vv70C77+9fTU1e++/vUXvv73vv70sx6fvv73vv73vv71DOT5g77+9cO+/ve+/ve+/vRXUgO+/vU7vv73vv71UJe+/vT/tkaNk77+9I++/vXXvv71Y77+9TAQiZO+/vQUmU++/ve+/vRXvv73vv70J77+977+9TU/vv70kEnY5G8uu77+9IO+/vQDvv73vv73vv71HI3Pvv73vv70QGe+/vSDvv71A77+977+977+977+9Fu+/ve+/ve+/ve+/ve+/vSNNKu+/ve+/vSjvv71GJlHvv70t77+9PO+/ve+/vUbUue+/ve+/ve+/vVpk77+977+977+9fWJYHQ0g77+9f++/vS3vv71iBQlm77+977+977+977+9Mg4777+9XSjJs0tD77+977+9PGrvv71deGXvv73vv70l77+977+977+977+977+9Ce+/vQ/vv703Qe+/vSnvv73vv712TO+/vRjame+/ve+/vWHvv73vv73vv70V77+977+9J++/vVjEj++/vV/vv73vv73vv73vv70v77+9NFDYqXDvv70xX86U77+9Vg7vv73vv71KHCXvv71UPO+/vTLvv73GqmDvv70UXd+WJV/vv71c77+977+977+9de+/vVQi77+977+9NO+/vd6O77+977+977+9BO+/vQAAIBfvv71C77+977+977+977+9SmESSO+/ve+/vQbvv73vv71V77+977+9Kl5I77+977+977+977+977+977+977+9Q++/vXIHLu+/vc+UUEdhWyjvv73vv71wT0VgQO+/vSAv77+9Eu+/vVslQxXvv73vv71r77+977+9De+/vWPvv70/D1xjHAt3Cu+/vQohUFrvv73vv70XN0vvv73vv73vv70CcO+/vV7vv70y77+9G++/vWrvv715UCZIb++/vQZxMTowJ++/vQNK77+9IO+/vTIk77+977+977+9FO+/vWrvv70qOe+/ve+/vQHvv70PfFIv77+977+9Qz99w7rvv71UDzwA77+9NVLvv71V77+9HO+/vX/vv70N77+9L2cwIO+/vSnvv73vv73vv73vv719Yyzvv71CPu+/ve+/ve+/ve+/ve+/vSsA77+9WO+/ve+/vWVT77+9eRJMRu+/ve+/ve+/vQoHZe+/ve+/vXzvv7021r8m77+977+9chHvv73NjO+/ve+/ve+/ve+/vWh277+977+9XmITV2nvv70yQu+/vQF2Ye+/vQlyWULvv71kCu+/vR7vv71t77+9N0jvv73vv73vv71lJCTvv73vv70ka++/ve+/vRMN77+9W++/vRnvv73vv73vv70IBO+/vWXvv73vv73vv73vv71pV++/vQTvv70h77+9F++/vVLvv71dXxvvv73vv73vv73vv70r77+977+977+977+9Bu+/ve+/ve+/vcOEcO+/ve+/ve+/vWQ7BCrvv711OExE77+9Qysm77+9MkLvv73vv71We++/ve+/vRLvv70S77+9Xe+/ve+/ve+/vR8qYu+/vcq777+977+977+9U++/ve+/vSEn77+9Se+/ve+/vUBO77+9dGvvv70j77+9ESjfkgbvv71T77+9Ae+/vSnvv73vv73vv73vv71ya++/vVPvv73vv73vv70s77+977+9aWRf77+977+9LGdR77+9IWoJ77+9Z++/ve+/vcis1JLvv73vv73vv73vv70dL++/vRc21pDvv71E77+9aiN877+977+9URzvv73vv73vv71zQu+/ve+/vT/vv73vv73vv70v77+9QTcC77+977+9T1hbNu+/vWJe77+977+977+9AmHvv713Q++/ve+/ve+/ve+/ve+/veyhku+/vVvvv71mLO+/vXQ+KO+/ve+/vVVsR++/vXUb77+9I04e77+9Mu+/vQls77+9EzEQAe+/vWDvv73vv70QIAIw77+977+9d++/vTbvv70scu+/ve+/vULvv70+VEQn77+977+977+9LlXvv71A77+977+977+977+9Qx7vv70J77+9NXXvv73vv73vv73vv71CYe+/vVpYeu+/vXJo77+977+9PRw477+9fiEBce+/ve+/ve+/vVwH77+977+9NQHvv70o77+977+977+9d0zvv73vv70F77+9X13vv70aUe+/vQnvv73vv73vv73vv70b77+977+977+9b1Dvv73vv73vv73vv70RbisxfVpsMD/vv70RB++/vRBKMe+/vU3vv70KVe+/vVgUQVTvv70NBe+/vQ7es1bvv70hRu+/vQzvv70LVe+/vR/vv70DGe+/vVZ177+9zq5I77+9RBIq77+977+9cgPvv73an++/ve+/vVnvv73vv70R77+977+977+977+9V03ZoV4vb++/ve+/vTDvv71UFCpUVBTvv73vv73vv70G77+9Le+/vU/vv73vv70Q77+9Bu+/vSzvv73vv70x77+977+9I++/vRzvv70Ifgjvv70R77+9RO+/vRQfUDQUMe+/ve+/vRw477+92YJJIGjvv71fOu+/ve+/ve+/vXHvv73vv73vv70M77+9J++/vQUpdu+/vRDvv70A77+9W0VO2I/ctO+/vQwOPFBCZDrvv717WlYX77+9SkAL77+9Wkzvv71yAT1v77+977+977+9EBcv77+9aF5y77+977+9D++/vXY5R++/ve+/ve+/vQDvv73vv73MsU9477+977+9fBbvv73vv71T77+9Kmzvv71t77+9VCwA77+9EWzvv70N77+9T0fvv70PfO+/vX3vv70S77+9dTDvv70iVO+/vWrvv719I++/vQHvv70e77+9cO+/ve+/vTXvv73vv73vv70K77+9VEvvv73vv71/aO+/ve+/vXnvv71877+9fe+/ve+/vWDvv73vv73vv73vv71K77+977+9Ue+/ve+/ve+/ve+/ve+/ve+/vTdz77+9CAVMG++/ve+/ve+/ve+/ve+/vWvvv73vv70HBO+/ve+/ve+/vWY577+977+9Ie+/vRHvv73vv71y77+9MAHvv70F77+9QO+/vcuo77+9ae+/vRXvv70G77+977+9NnsSBXbvv73vv707Xu+/ve+/ve+/ve+/vWYf77+9G++/vTEi77+977+9KSRk77+9HhLvv70FB++/vVs8Ue+/ve+/vTlU77+9c++/vS/vv71o77+9GlDvv73vv71V77+977+977+9Yu+/ve+/vQTvv71CAnkO77+977+977+9SGDvv70/bBccHO+/vU3vv73vv70xXO+/vSpbPu+/vVMseu+/ve+/ve+/vT7vv73vv73vv70X77+977+9MhlnHRIF77+977+977+9AmJxUxvvv70sdlhlbe+/ve+/ve+/ve+/vTA277+9P++/vRLvv73FmWvvv71qJu+/vWJ1Xks177+9Ue+/vRseATJ177+977+9fk7vv70cfO+/vUHvv708c++/vVI177+9e++/ve+/ve+/vSLvv70/77+9XBs2EVjvv73vv70r77+977+977+977+977+9YO+/vQJxNm3vv73vv73vv73vv73vv73vv73vv73vv71R77+977+977+9ce+/vUJ7IRzvv71bAO+/vRxfLWzvv71p77+9cUFZ77+977+977+977+9a1Dvv711A++/ve+/ve+/vVfvv70Vay7vv73vv70777+977+977+9P++/ve+/ve+/ve+/vXjvv70f77+977+977+977+9JkRn77+977+9bu+/vUs/Mu+/ve+/vQDvv71D77+977+977+9Q9KB77+9HO+/ve+/vUbvv73vv70ZU0QOTO+/vRrvv706KQbvv73vv71oRSERcFXvv708w6BN77+9aO+/ve+/vcOjfO+/ve+/vSZp77+9aRQLO05i77+977+977+977+9Pu+/vVsH77+977+977+977+9L29P77+9V1Xvv70l77+9UTzvv71aXe+/vVfvv73vv73vv71177+9ei/vv73vv71K77+977+977+91rRfaO+/vU4vPO+/ve+/ve+/vWUL77+977+9IO+/vRjbjwdLYu+/ve+/vT7vv70177+977+9YO+/ve+/vUfvv73vv73vv73vv73vv71JRE1C77+977+9de+/ve+/vUFjRu+/vWBE77+977+93bvvv73etc6M77+977+9eO+/vTbvv70q77+9ODda77+977+9c++/ve+/ve+/ve+/ve+/vQoRHO+/vUrvv70Q15vvv710Re+/ve+/ve+/ve+/vT85bu+/ve+/vWrvv71E77+9N1nvv73vv71dO++/ve+/ve+/ve+/ve+/vVDvv71h77+977+977+9R++/ve+/ve+/vUfvv73vv710RX4677+9GTfvv70CZQhF77+977+9Ke+/vRRGE++/vT3vv73vv71cKe+/vS8oKO+/vXg6GTNVXu+/ve+/vUx2OFDvv70K77+977+9fUjvv71EBe+/vVEoOO+/ve+/vVbvv73vv70177+9HkwEwpLvv71DWu+/vTpo77+977+9CDpXGHfvv718RxRl77+9XO+/vVcf77+977+977+977+9Xe+/vUBEZe+/vSIdZO+/vUoZ77+977+9SxXvv70w77+977+9Pe+/vQ/vv73vv71x77+9ImokUO+/vSZyZO+/vRMC77+9F++/ve+/ve+/ve+/vWLvv73MmG8m77+9Me+/vXx377+977+9Lnbvv70j77+977+9W++/ve+/ve+/ve+/ve+/ve+/vdeId++/vQZV77+9Au+/vUlZL++/vW7vv73vv73vv73vv73vv70I77+977+977+9EhkiJe+/vUrvv71e2aLvv70dNN6NeQU6Ne+/ve+/ve+/ve+/vVXvv71h77+9ee+/ve+/vQRy77+9M++/vQbvv73vv73vv71MDiPvv70x77+9Nu+/ve+/ve+/vUcq77+9ae+/vWbvv70N77+977+9KWTvv71oBO+/vUHvv70EB++/ve+/ve+/vVPvv73vv71jLu+/ve+/vWTvv73vv71x77+9Se+/vUvvv71y77+977+9Mu+/ve+/vWBODT7vv70yK9Kpcu+/vWHvv73vv73vv71+D++/ve+/vSPTpO+/vW9c77+9GO+/ve+/vQ/vv73vv703RxFnAO+/vVgP77+977+9F1bvv71gFe+/ve+/vVMqVERbWe+/vTvvv70bfO+/vVjvv701QXjvv70777+9MW/vv73vv73vv73vv73vv73vv71477+9yoHvv73vv71nCO+/ve+/vQ0bCGciZe+/ve+/vWk777+977+9YEhqSXMV77+977+9atis77+977+9Ux5YBO+/vSHVge+/vVw177+977+977+9W++/ve+/vT3vv71WRR1QSxwcae+/vdKR77+977+977+9P3DmlLQZKk3vv71W77+9y4lu77+977+9EVAQARbvv71rWhZRPu+/vXhsAu+/ve+/ve+/vQrvv73vv70w77+977+9ZVofWe+/vS4D77+977+9CGUIN37vv73vv73vv70A77+977+977+9QmZQDArvv70jIyMQEO+/ve+/vUHvv71rQu+/vXRgBSrvv73vv73vv73vv70XTRY+Aci777+9AAB/ZO+/vVhKBu+/ve+/vWjvv70377+977+9AAABEmLvv70N77+9Tu+/vWrvv71w77+977+977+977+9z6zvv70QW++/ve+/vUzvv70H77+977+9fWvvv70ubHHvv70NQO+/vQ1A77+977+9Ch0R77+9Le+/ve+/vXvvv71KIu+/vRfvv73vv70QRCDvv73vv71177+9NzsoKlHvv73vv700GgzQoO+/ve+/vUXvv70gY1jvv73vv73vv70X77+977+9MC4677+9eFJ0JxVdB1FlOEEgFNO577+9IMa8B++/vdCdKVnvv73vv70377+9BNywRNS0HCZQ77+9T++/vXjvv73vv71hRO+/vRRULe+/vSXvv71077+9C++/ve+/ve+/vVJN77+977+9eSrvv71k77+977+9Xu+/vWPvv711Wu+/ve+/vTPvv73vv73Iuu+/vXZz77+9Q++/vQAOWHoJM++/vdaI77+9cu+/ve+/vS7LpnAYZO+/vVl/77+977+9RmYfMe+/ve+/vTvvv73vv73vv73vv73vv71OHu+/ve+/ve+/ve+/ve+/vUUY77+9Wu+/vWge77+977+9d++/vSc277+977+9bu+/vdKWedCQ77+9ARLvv71VSyjvv71L77+9bO+/ve+/ve+/ve+/vVA5Qe+/ve+/vXsz77+9RO+/vWFrce+/ve+/vWbvv71g77+9YO+/vU7vv73vv73vv73vv73vv73vv73vv73liYNd77+977+977+9CO+/vUlE77+977+9Tu+/ve+/vS1tzb1MLu+/veqmhe+/vTVl77+9fu+/vSjvv70dP2UQHe+/ve+/ve+/vXrvv73vv73vv71s77+9bxXvv71QVA1L77+9Ne+/ve+/ve+/vTRuZu+/ve+/vTzvv73vv71RKQhR77+9WO+/vQM/77+977+977+9QiDvv700Mu+/ve+/vWnvv73vv73Gqu+/vdOW77+977+9c++/ve+/ve+/ve+/vUbvv71FLQo3dOGOiAPvv71y77+9Qe+/ve+/vTJrKe+/vU5YPu+/ve+/vXtN77+9Re+/ve+/ve+/ve+/ve+/ve+/vUgySFrvv73vv73vv70O77+904nvv73vv70H77+9ORXvv73vv71c77+977+9dTjvv71t77+9Q2RQ77+977+9bt2U77+9Be+/ve+/ve+/ve+/vVIbNDpU77+9BxVb77+977+9aGkk77+977+9f++/vRjvv70MKldUOyrvv73vv70XCTnvv70DYSjvv70877+9Onh4Sy/vv73vv73vv71O77+977+9Z1nvv70tdO+/ve+/ve+/ve+/vXfvv70+wqfvv73vv73vv716N1Xvv70P77+9RlFb77+977+9UzJ/NHZxDe+/ve+/ve+/vXVL77+977+9S23vv71W77+977+977+977+9Pe+/ve+/ve+/vSvvv71xeRrvv73vv73vv70QCDME77+9Mu+/vXfvv70O77+9bO+/ve+/vSlm0boCDmrvv71hB++/ve+/vRNG77+977+9xLTvv73vv71zWu+/ve+/vTgTFe+/ve+/ve+/vWXvv71fB++/vU7CglTvv73vv70X77+9EEo477+977+9PTBV3afvv70H77+9DVxo77+977+977+9Su+/ve+/ve+/ve+/vVfvv71l77+9CmpVOe+/ve+/vRvvv709DUTvv71+77+9de+/vXXvv71Y77+977+977+9f1I6NCYK77+9Ke+/ve+/vRnvv73vv71WQO+/vSgO77+9djfvv73vv71E77+9L++/ve+/vSzbpX5cb++/vXzvv70g77+9QGNK77+977+977+9F2Lvv70L77+9Pwlk77+9E3Pvv73vv71NVe+/vUgS77+9M8SJTUdwRO+/ve+/ve+/ve+/vWcAe++/ve+/vSokbu+/ve+/ve+/vQrvv71PdO+/vU0w77+9JyPvv73vv73vv70mW++/vXbvv73vv70yce+/vcqHWFh2AAAAEjhKcO+/vc+YXArvv73vv73vv73vv71677+977+977+9YSpEFXBd77+977+9a2Qd77+977+9Su+/vXDvv71Q77+9WDxfAe+/vX/vv70g5aKI77+9Xyvvv71/77+9X2QWN++/vR/vv70rTm4HX31977+9Le+/ve+/ve+/ve+/vS3vv73vv71HFu+/vUfvv70PG++/vUZe77+977+977+977+977+9cwHvv73vv73vv73vv71I77+9ce+/vXzvv70F77+977+9FWEBMO+/ve+/vRhH77+9Ie+/vSFbbu+/vQrvv73vv73vv73vv73vv70KU++/vUnvv70D77+9I++/vSTvv73vv71WAl/vv73vv73vv73vv71JGEHvv71rbEU2XCFF77+977+9fBfvv73vv71i77+92b7vv71dOe+/ve+/vSAsQO+/vQnvv71AaTA/EDXvv70Z5p+Dcu+/vXjvv71gORPvv71f77+977+977+9Xu+/vRPvv73vv70GXe+/vX9DMwR/cRsE77+977+9OTsFMu+/ve+/ve+/vRpQfu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSsF77+9FO+/vRlU77+9Sht477+9Em5ZEu+/ve+/ve+/vQLvv71FXu+/vTR+77+9FO+/vXLvv70j77+977+925fvv71Y77+9Hu+/ve+/ve+/vTHvv73EgA1j77+977+977+9We+/ve+/vX9ULR3vv710Iu+/vUbvv71fAe+/ve+/vVzvv73vv73vv71s77+9Ie+/ve+/vQDvv73XuXPvv715D2JX77+9W++/vRfvv71COFtE77+9DSpE77+9Oe+/ve+/ve+/vQPvv70QaCt477+977+977+9Typ1bu+/ve+/vTfvv73vv70y77+9M1Qu77+977+9dO+/ve+/ve+/vRohbu+/ve+/ve+/vX/vv71BTu+/vWbvv701Bu+/ve+/ve+/ve+/vRoxXmTvv71AL9KGbe+/vVVQ77+977+9K3nvv71v77+977+977+9ce+/ve+/veGFpO+/vVl9LO+/vW/vv73vv71S77+9KT7vv73vv70Y77+977+9Tu+/ve+/vQ/vv70LdiXvv73vv708CO+/vVjvv70FEiFiLe+/ve+/ve+/vXAA77+9XiZw77+9U2fvv70kK++/vTPvv70Q77+9yqYi77+977+9E0YX24tYSe+/vTDvv73xtLqu77+977+9c++/ve+/vVoLAWQ2aEvvv71KaANtbALvv71477+9ZUUSOO+/vXI/eO+/vd+M77+9ahY7LVfvv71l77+9wp3vv73vv73vv73ivas277+9B3rvv73vv73vv70ERirvv70J77+977+9Vu+/vT5i77+9VSpiIgTYtQ1Q77+9UjJzZu+/vW4B77+9H++/ve+/vX5xX+eJr++/vWPvv73vv71XMTLvv70c77+92Jfvv73vv73vv73vv70N77+9ee+/vSfvv70377+977+977+977+9ByQ+77+9Yu+/ve+/vXfvv71677+977+9B++/ve+/vUXvv70N77+9b2gZa92TE3UT77+9Ke+/vXYSDyLvv73vv73vv70HaQ7vv71M77+9DFhhTGhvZAYwxoQGHu+/vU8SHAjvv70+77+977+93pHvv70OEDXvv70+e++/vVjvv71e77+9VO+/ve+/vVtr77+977+9CCtp77+977+9WHHvv71777+9PRsiA++/ve+/vVcRHO+/vQvvv73vv70777+977+9b++/vX/vv70L77+9dBTvv73vv73Spu+/vWIBNu+/vT3vv70y77+977+9H++/ve+/ve+/ve+/vSXvv73vv70xESgr77+9ae+/vdGt77+977+9HO+/vQ3vv70TD++/ve+/ve+/ve+/vS0AAAfvv73vv70dypJl77+9UGfvv73vv70T77+9L++/ve+/vQHvv71jbO+/ve+/ve+/vXXvv71ZTWsK77+9Fu+/ve+/vS5vNX0lDu+/vSjRre+/ve+/vXNIO++/ve+/vRfvv71+WO+/ve+/veKCkkTvv73vv71vSO+/vWF3IFkhE29o77+9HO+/vUjvv70vXu+/ve+/ve+/vU/vv71BY1AC77+977+9PRvvv71M77+9OGV677+977+9Ru+/vVQzY++/vRrvv71kFmjvv73vv71177+977+9L++/vVIK77+977+977+9b1FATe+/vTw9FHAOL++/vdeQL20oXFxP77+977+9Me+/ve+/ve+/ve+/vRIi77+977+9R++/vSt3QT0bDh3vv73UmmLvv70RI0Xfve+/vXY477+9AO+/ve+/vX3vv73vv70IV++/vc2WBAnvv73vv710Gu+/vVrvv73vv73vv73vv71NBQ8+77+9XTp8O3rvv71d77+9RO+/vUzvv71777+9Ee+/ve+/ve+/vQrvv73vv73vv73vv70677+9YO+/vRMQ77+977+977+9Fu+/vREzczDvv70b77+977+9E++/vdetZADvv73vv73vv705Zu+/ve+/vUjvv73vv73Gn++/ve+/ve+/ve+/vUrvv73vv71LcO+/vdGvVANRAF/vv73vv70K5oyL77+9dO+/vT7vv73enu+/ve+/vWLvv71t77+9X++/ve+/vUfvv70d77+977+9RiLvv73vv712XHHvv708HRYcSu+/vVvvv73vv73Ev++/ve+/vVjvv73vv73vv73vv717zaNsShfvv70h77+977+9KAjvv73vv70vEu+/vT8o77+9Uibvv73ahe+/ve+/ve+/vSMNOjNz77+977+9UO+/vWUufO+/vQwfFBrvv73FuO+/vQbvv70C1q8KBu+/ve+/vQRkMxE+fu+/vQ5F77+9QCfvv73vv70uxKRO77+9Z3UKbwfvv73vv73vv73clcyfGWUy77+9c++/ve+/vX4o77+9c++/vT5m77+9f2rvv73vv73vv73vv70I3aXvv71w77+9JO+/vVlnA1daNe+/vWwPWUjvv71+77+977+9bGYvGBJ277+9W++/vXgC77+9Vu+/vQJ377+977+977+9au+/ve+/vQnvv707Y35w77+9DxQTOzNA2INVUg1LO++/vRLvv704E++/vWhd77+9Le+/ve+/ve+/vX3vv71A24Lvv71jVmDvv71v77+9BAAABO+/ve+/ve+/vUjvv73vv73LoRjtn7dwf++/vTNnV0Z8Xe+/vSQdC2fvv71177+977+977+977+9F++/ve+/vQ3vv71H77+9Lu+/ve+/vVE+77+977+9Te+/vUAUPO+/vX/vv70YaHPvv71D77+977+977+9QSw7flBxAxxv77+977+9TEDvv70Ta2Dvv73vv70nCWIw77+9xZbvv71aQ++/ve+/vTfUtVBS77+9OO+/vWg177+977+9Ku+/vVArXO+/vTtQBiTvv70ZG++/vXV8G++/vXjvv71u77+9eyFy77+9YkB877+9Llgb77+9cu+/vX8g77+977+9f1VzOu+/vWVL77+977+9FO+/ve+/vRrvv71O77+977+9VlnHjmpiQX9xRD8m77+9fu+/vW5oSljvv73vv73vv73vv71yWu+/vSUo77+977+9A++/ve+/vUBB77+9egR477+977+977+977+9xbfvv73vv73vv70yb++/ve+/ve+/vVzvv71Z77+9Kzbvv70mbzXvv70i77+9f++/vTdwVndl77+977+977+977+977+977+9e++/ve+/ve+/vVlPHNeO77+9KUcM77+9GEbvv71477+9fu+/ve+/vRxu77+9Lu+/vS0o77+9AUVm77+9eVdWegk+77+9Qe+/ve+/vV7vv70P77+90pE/DRzvv704CHt877+977+90qJz77+977+9YUIRdU3vv73vv73vv73vv73vv73KhO+/ve+/vR4dGO+/ve+/vWXvv70WcEnvv73vv73Rlydt77+9Bmka77+977+9OlciGlrvv70G77+9Gu+/vSLvv71177+9RhRHbO+/vUTvv73vv73vv73vv71IAzjvv73vv710bO+/vVFpRmZG77+9RO+/vT8re++/ve+/ve+/vX/vv73vv71u77+977+977+9xKY877+977+977+977+9QxPvv71l77+977+9Z++/ve+/ve+/ve+/vT06Pe+/vUTvv73vv71g77+977+9G++/vWPvv70T77+9R1QVCw82Gu+/ve+/ve+/ve+/vU7vv71BYB7vv70u77+977+977+9e++/vQPvv73vv70K77+9KHrvv70Fdu+/ve+/ve+/vV7vv73vv71VGlwA77+977+9AAAAES4iNhjvv73vv73vv70l77+977+977+9Iu+/ve+/vXLvv71JGO+/ve+/vRB277+977+9Jlvvv73vv73vv73vv71VDyLvv71K0oBlTg9E77+9I++/vRfvv71H77+9Re+/vW3vv73vv73Ihe+/vSLvv73vv71877+9AO+/ve+/vRrvv73vv73vv73vv73vv73vv702V3oC77+977+9AO+/vRzvv70VC++/ve+/ve+/vTTvv70zTgRc77+977+9NHZIBGYCJVhF77+9Re+/vXfvv73vv70SMu+/vTzvv70V77+9CQPvv70BMG7vv73vv71A77+9QzTvv73vv70ZGXEX4qK5KQ/vv705MHvvv70I77+9IXnvv70c77+9au+/ve+/vWLvv73vv70p77+977+9Fifvv73vv73vv73vv73vv71u77+977+9d3ZaNBEuzbrvv70TAyTvv71RC96V77+9Lu+/ve+/vVU/W0hJ77+9fO+/ve+/vT3vv73vv71GXWXvv70k77+977+977+9a++/ve+/vQ/vv70qc++/vUjvv73vv73vv73vv71MI9++77+9Me+/ve+/vdmA77+977+977+977+9EGAp77+977+9Gu+/ve+/vSvvv71xQSRkTe+/vemPl8yHee+/vRTvv73vv715KFPvv71m77+9B++/vQNpcu+/vVFI77+9WO+/vWTvv73vv704ZM6RMu+/vVZ/77+9UFIzK++/vcKdfB3vv71T77+9Le+/vWMy0Yh/77+977+977+9fFDvv71U77+977+9B++/vWXvv71sQ++/vWLvv71jNCTvv73vv73vv70177+90oDvv71u77+914Dvv70077+9Te+/vQAu77+977+9CFc/2aXvv73vv73vv73vv71lRe+/ve+/vRHvv71bQO+/ve+/vdm1BlLvv71jXCTvv71dRO+/vRLvv71HdS3vv73vv71oZ0dKMTTvv70c75mi77+9XwR1He+/ve+/vTbvv71dWAAB77+977+9KWHvv71+77+977+9YO+/vTzvv73vv71j77+977+9NO+/ve+/ve+/vTZhPmDvv70a77+977+9Oe+/vSvvv73vv70SHMS177+977+977+9Ce+/ve+/ve+/ve+/vSPvv73vv73vv73vv708Ke+/vRDdswHvv70+M++/ve+/vQBLOO+/vTEU77+9ZD/vv73vv70pBO+/vWjvv73vv71V77+9e++/ve+/ve+/ve+/vVAA77+977+977+9N++/ve+/ve+/vXsjDe+/vWVOIe+/ve+/ve+/ve+/vW3vv71k77+9zonvv71SVS3vv73vv70S77+977+977+977+92Jjvv71f77+9TUxDO1Eo77+9JDYr77+9Ou+/vVs8R++/ve+/ve+/vVoiESXvv73vv71sMiZv77+9zpHvv70y77+9Fw0W77+9ZW9FPBfvv73vv70e77+9zod9H07vv71JGu+/vSx6QO+/vS7vv71+K++/vUnvv70eMxbGsH9277+977+9Me+/vRjvv71I77+9Oe+/vVnvv70W77+9exlB77+977+977+9LO+/ve+/ve+/ve+/ve+/ve+/vUAm77+9D++/vWDvv73vv70D3YoX77+977+9J++/vU3vv70+cwcIYO+/ve+/ve+/vXvvv715d++/vQHvv73vv73vv70Q77+9JO+/vWsw77+9Tu+/vRDvv71dI++/vUBY77+9XTsy77+9Fjfvv73vv73vv73vv73vv71J77+977+977+977+9YwoFdO+/vXhS77+977+977+9Z++/vdSyw6RL77+977+977+9XUEJKu+/vVEP77+977+9AmxvMe+/vd6RC++/vUjvv70MPu+/ve+/vTwlUu+/vVLvv71777+977+9bu+/vXRW77+977+9Qm0E77+977+977+9C0Jp77+977+9AnV/77+9K++/ve+/vTXvv73vv71s77+9OO+/ve+/ve+/ve+/ve+/vWoAAHvvv73vv71177+9bBAPHxXvv73vv73vv73vv70XBe+/vQcQ77+9bu+/vUvvv73vv71xLWYa77+91p/vv73vv71WLEfvv71kdkEy77+977+9KgkdC++/ve+/vWPFsSR1fO+/vSrvv70yRVzvv73Pn++/vRF+77+977+9OcmTdu+/vVjvv70p77+9WFdbFwxoYu+/vTsc77+97Le8Z96ie0tyIe+/ve+/ve+/ve+/ve+/ve+/ve+/vQ1cf2YtLe+/vRzvv73vv703Lj8F8aeVnu+/vV8b77+9PhRg77+977+977+9DO+/vWjvv73vv73vv70m77+9HAFw3ZNE77+977+9JO+/ve+/ve+/ve+/vWbNle+/vUwSY++/ve+/ve+/vWrvv73vv71n77+9bu+/ve+/vV/vv70Z77+9Gu+/ve+/vWkq77+9de+/vdmP77+977+91qXvv73age+/vXld77+977+977+9dO+/ve+/vTgG77+9bTgQ77+9Te+/vRDvv70F77+9Re+/ve+/vRscdUbvv73vv70X77+9RO+/vQAY77+9WzhyOR3ag0nvv73vv73vv71d77+9KhJZ77+977+9PgJV77+977+977+9OO+/veOGlO+/ve+/ve+/vWBC77+9Je+/vRHvv70m77+977+9d++/ve+/vThMFTrvv705be+/vXojTe+/ve+/vQxG77+9LXvvv71iXV/vv73vv73vv70RKzXRjnPvv71AKu+/vQ4QKhvvv71k77+9Lu+/vQreohBVc++/vS5mGD/vv73vv73vv73vv73vv73vv70A77+977+9GO+/vSXvv73vv73vv73vv73vv73vv73vv71U77+9Q++/vT7mvbrvv73vv70Iamfvv73vv70AAAA6ZXMXNHPvv70uJQB577+9D++/vWzvv70xe++/vWBv77+977+977+977+9X++/ve+/ve+/vRjvv70sRFXvv71f77+977+9DFvvv73vv73vv70/77+9Nu+/vX1PVe+/vQ1C77+9Qwbvv73vv71aEX8EGO+/vUMUfzsG77+9X++/vUHvv71q77+91Jjvv73vv70E77+9fO+/ve+/ve+/vQHvv73vv73vv710chrvv73vv71I2rYK77+9RT1yeh/vv71YEixr77+977+9aGRQ77+977+9fO+/vQZ277+9Ee+/vXcuBe+/ve+/vQ3vv70R77+977+977+977+916zvv73vv73vv73vv71P77+9ABPvv70C77+9dO+/ve+/ve+/vRHvv73vv71/1agSYO+/ve+/vU3vv73vv70a77+9Ox9h77+984mEuO+/ve+/vUnvv73vv73vv73vv71P77+977+977+9ee+/ve+/vSzvv73vv71Z77+977+977+9R++/ve+/ve+/vRjvv73vv71oDm3vv73vv702K++/ve+/vW/vv73vv71zw696bdCqee+/ve+/vUEr77+9KHjvv70yUlE577+977+9TjlRfDQJ77+977+9be+/vSHvv711NTvvv73vv73vv70k77+977+9f++/ve+/veu/tkTvv70aS2wF77+977+977+977+9Vu+/ve+/ve+/vUoSKF7vv73vv73vv70MP++/vTwlbQgJ77+977+977+9We+/ve+/ve+/vVQCEngje++/vXbvv73Fhkc777+9Mh5O77+9LW5c77+977+977+9KhFR25Hvv73vv70i77+9K++/ve+/vQLvv70EYO+/vV3vv73vv73vv71DLu+/ve+/ve+/ve+/vd+W77+9de+/vc+LK++/vQAABO+/ve+/ve+/vSjvv73vv71SVDpdce+/vWbvv71efgDvv73vv73vv71BThXvv73vv71677+9QO+/vRIcGu+/vS1+77+9Bu+/ve+/vVXvv73vv71C77+9f++/ve+/ve+/vRzvv70M77+9dMST77+9bEXvv70HYkXvv73vv71d77+977+9ReOvkyDvv73vv73vv714ce+/ve+/vRnvv71wDu+/ve+/vVNtz6nvv73vv70uQh5s77+9Shnvv73vv73vv73vv73Qn04jRe+/ve+/ve+/vRk377+977+9AlZ1RUFT77+97rS2SzDvv71U77+977+9Tg4177+9D++/ve+/vTzkip4XTO+/vUoEBe+/ve+/vWHvv714HO+/vSk/77+977+9V39+77+977+977+977+9He+/vc2477+977+9XO+/vV/vv71t77+9ae+/vWAiGyAMee+/vRM5Xu+/ve+/vUfvv71f77+9A++/vRvvv71PQe+/ve+/vU7vv73vv73vv71SY9+b77+9Y++/ve+/vUYH344E77+9fUDvv70W77+9HtGn77+977+9NO+/vXQd77+9cu+/ve+/vRo1ANOx77+9YzHvv73vv73vv70D77+9UO+/vQnvv73vv73vv715KTVC77+977+9Vu+/vd6FTu+/vUM677+9Gu+/vW1PGu+/ve+/vTlX77+9ZVTvv73vv70177+9w7tzRTEjQWbvv716Je+/vTXvv73vv71Q77+977+977+9Ijzvv73vv70Xb1Lvv71M77+977+9A++/vXPvv73vv71CED8zXe+/vQzvv73vv70H77+9Zu+/ve+/vTzvv70v77+9TO+/vTVi77+977+9M++/vWPvv73Tg1zvv70n77+977+977+9AO+/vVPvv73vv71y77+9NVnvv73vv70CWu+/vTV814Pvv71w77+977+977+977+977+9G++/ve+/ve+/vTl977+9Z++/vR5O77+977+9GSvvv73Qggzvv71v77+977+9Blbvv716Be+/ve+/vUZo77+977+9Vu+/ve+/vShfVu+/ve+/vUXvv71z77+9yagrHO+/ve+/vcef77+977+977+977+9e2tF77+977+977+977+9Oe+/vWV+77+977+9UFfvv71777+9Qe+/vQfvv73vv70iRu+/vVdPD2vvv73vv712CQJhGe+/ve+/vTFcGe+/vWdjEX4677+9UCwI77+977+977+9Ze+/vR3vv73vv71WZwjvv73vv71U77+977+977+977+9RVTvv73vv71y77+9W++/vRID77+9D++/ve+/ve+/vQdhBO+/vXgwRngyfO+/ve+/vWDvv70iH++/ve+/ve+/vXvcpSTvv70zQu+/ve+/ve+/vW3gqI7vv73ojYjvv73fvR7vv73ikq8BDe+/ve+/ve+/ve+/vRQTXk4oCu+/ve+/vUjvv70V77+977+9GS5r77+9R8Sh77+9GRXvv71qUe+/vcOxZSHvv73vv70q77+977+9f9Wm6Lure20r77+9H2bvv71nUHIBW++/ve+/vTDvv713DCjvv73spIsx77+90asK77+977+9SO+/vX7vv73Wp++/vSLvv73vv71sIe+/vR0377+9e++/vQQD77+977+9BWxT77+977+9L3ty77+9MUPvv71MAe+/ve+/vV/vv73vv73vv70AABnvv71I77+977+9bu+/vUwLZ++/vUPvv71B77+977+977+977+9c2Pvv70K77+977+977+9Pl1577+9SnYi77+977+9c++/vRt977+977+977+9VW9MKkxG77+977+9Pe+/vUVGY24pITrvv716cO+/ve+/vUHvv70J77+977+9Ze+/vRfvv71L77+9Wu+/ve+/vVFy77+9be+/ve+/ve+/vWFXeO+/vQF/77+977+977+977+977+9Re+/vQXvv70IXC1oLe+/ve+/ve+/veWWk++/vVdT77+977+9M8mWXAULPu+/vS81SiILHO+/vQo5ee+/vWB6C++/vUIN77+9HO+/vVk+77+9IR7vv73vv71G77+977+9UEU477+977+977+9be+/ve+/vXjbue+/vc2r77+977+977+9a++/ve+/ve+/vUnvv70I77+977+9Be+/ve+/vXzvv71xHC3vv73vv703zrZ/Fe+/vWHvv73vv73vv73vv73vv73vv70z77+9VM+477+977+977+9Nu+/ve+/vcKrU++/ve+/vQnvv70g77+977+9eAHvv73vv71077+977+977+977+96aelQG3vv73vv70N77+9JuaMle+/vRLvv714AHPvv70adErvv73vv70vMO+/ve+/vWooQhXvv71TVO+/ve+/vUQxN1Uh77+9dTTvv71ZcCDvv70377+925Hvv71yVlEF77+9W1pk77+977+977+9dXUJ77+9fO+/vW7vv73vv70H77+977+9OAxEJe+/vcqB3JtFS1V/Tu+/vQTvv71QEFI577+9X++/ve+/vQAADApFAiN/Hu+/vVwM77+9dzBjTu+/ve+/ve+/ve+/ve+/ve+/vTMSLjDvv73vv73vv73vv73vv71BXxhibO+/vUXvv73vv73vv73vv70+x7zvv73vv70w77+977+9LwE977+977+9C++/ve+/vXEM3aRcIu+/vQg0Iu+/ve+/vTTvv70W77+9aBgM77+9QNCMN3Lvv73vv73vv73vv71pFtCSfu+/ve+/vX3vv73vv73cknEO77+977+977+9HBln77+9WDI/SyoDERzvv73vv73vv70NC++/vW3vv73vv73vv73vv716Ou+/ve+/ve+/vSwwR++/vQXvv73vv70477+9eQ3vv73vv70KG++/vRLvv70P77+9Ou+/vQop77+9ZO+/ve+/vWgqW++/vXFH77+977+9fU/vv71a77+9zqVz77+9bu+/vXDvv70EyY7vv73vv71qNH1N77+9B++/ve+/vVArFHUp77+977+9Bu+/vUt/77+9YiNQxb3vv71cON+977+9MAp+77+9JO+/vXNb77+9Ru+/vVwl77+9Su+/vSPvv73vv73vv70x77+977+9Su+/vQA9UngTaN6SxrA0V++/ve+/ve+/vUXvv70meTRdSu+/ve+/ve+/vX91RC5Y77+977+9TO+/ve+/vS0C77+977+9ce+/vQjvv73vv73vv70PVu+/vVfvv73vv71M77+9QABW77+977+9IQdC77+9KO+/vWvvv73vv73vv71yVu+/vXrvv73vv71q77+9XVvvv70K77+9bu+/ve+/vRZf77+977+9TQjvv73Wje+/ve+/ve+/vUE577+977+977+9GtS277+977+977+977+977+977+9BwZw77+977+977+9ex/vv73Tku+/vUgOWO+/ve+/vR/vv73vv73vv71777+9A++/vUfvv71yf0bvv70demHvv70u77+9FO+/ve+/ve+/vXLvv70J77+9Gu+/vc+KLS/vv70J77+977+9H++/vRzvv70r77+977+9Tu+/vXQXAu+/ve+/vTTvv71y77+9Au+/vUDvv70G77+9Qe+/vTrvv73vv73vv73vv70s77+9Z0vvv70aMe+/ve+/vXp0B2BEaFV+bO+/vX/vv73vv73vv73vv73vv71dKO+/ve+/vQ0p77+9Ve+/ve+/ve+/vQh8X30H77+9cNO777+9HVgA77+977+977+977+9K++/ve+/vRt677+9xKXvv73vv71W77+977+9QO+/ve+/vVcDR37vv70Sbe+/vUvvv73vv70pX1rvv70QCD4eHxPvv71A77+977+977+9J++/vVPvv70LL++/ve+/vThqau+/vX9H77+977+977+9FdyhfDgAAAXvv73vv71S4YKX77+977+977+9WO+/ve+/vXdS77+977+9DAt+77+977+977+9b++/vTZD77+977+9x5Hvv71B77+9Cu+/ve+/ve+/ve+/vSIMxLs1CVbvv70yPivvv73vv70S77+977+9K++/ve+/vUZEUe+/vWYR77+977+977+9Oe+/vTHvv70uEO+/vUQE77+9JBY8W++/ve+/vSfZhH7vv73vv70C77+9aWvvv70377+9U++/vQLvv70iVzbvv70377+9U++/vXLGgNa9ajXvv71c77+977+9LBRESC3die+/ve+/vS9377+9CFrvv71TURfvv70DPO+/vX58N++/vUJy77+977+977+9BBVsOO+/ve+/ve+/ve+/vW4R77+9TO+/ve+/ve+/vUwhOu+/ve+/ve+/vULvv70w77+9Du+/vcmp77+977+9R++/vUdLDlQ577+977+9aO+/vQgD77+9Qu+/vUTvv73vv73vv70FCO+/ve+/ve+/vVkDPjoM77+977+9FO+/ve+/vUZyZtO977+9fWIAAU1gK13vv70Rf++/vd6DdO+/vQN477+92YEZ77+977+9F++/vRtwWmPvv73vv73vv73vv73vv73vv70m77+977+977+9K++/ve+/vUjvv70AQyEy77+9Q2fvv71cZu+/ve+/vVHvv70BZ++/vRDvv73vv71GdHPvv73Qn++/ve+/ve+/vcaB77+9L++/ve+/vWXvv70DKWwkejzOtFbvv73vv71wyKTvv73vv71QZuudre+/ve+/vQE+Embvv71A77+9MSsX77+977+9Y++/ve+/ve+/ve+/vVBI77+9eO+/vQ4P77+9BO+/vXIK77+917kz77+9fn3vv71277+977+977+9eO+/vVdX77+977+9Emhg77+977+977+9SO+/ve+/ve+/vUdqbO+/vUPvv70hxrvvv73vv71qE04H77+977+9MlRb77+977+977+977+977+977+9VUEw77+977+9WSrvv71EAAQM77+9ABwR77+9Wu+/vUPPiu+/vWbvv73vv73vv71277+9PFZr77+977+967Km77+977+9Su+/ve+/vQl577+9du+/vemonWUC77+9eWJy77+9Xl/vv71wDEtAUe+/vW8eEO+/ve+/vVJLBhPvv73vv71NIStI77+9bEvvv73vv71iN++/vWIM77+96o2/77+977+97qqHe++/ve+/ve+/vW7vv73vv73vv70sB++/vRPvv71ixLjvv73vv70SeRPvv71c77+9cR3vv73vv73vv73vv70i77+977+9CO+/vTJZbTwZ77+9AALvv73vv712YQsj77+977+9WHoC77+977+977+9FRHvv713Mlrvv73vv71CXGR0TWPvv70X77+977+9Nhbvv73vv70U77+977+977+9Ijrvv73vv71/77+9UCII77+977+9Ue+/ve+/vWUwJO+/ve+/vcaWOlA6Qu+/ve+/ve+/vTddU++/vQXvv71LP35v17nvv73vv70077+9D++/ve+/vSlO77+977+9JRvvv73vv73vv71177+9ZVYP77+9C2NJ77+977+9AxMgMO+/vVXvv70I77+977+9WRM2R++/ve+/vSN977+9J++/vV3vv73Km++/vRAAJhLvv70K77+977+9U++/vRrvv73vv70Le3fvv71+cXNd77+977+977+977+9QX0v77+977+9dDrvv73vv73vv70fRyda77+9LHLvv70pyI4NEyjvv73vv70P77+9FiDvv71p77+977+9Mj7vv73IijLvv73vv73vv73bj++/vR/vv73vv71HTu+/vdahBO+/vTo0Iu+/ve+/vTnvv73vv71877+977+977+9cX9BPe+/ve+/ve+/vU9NJDdxBQUf77+977+9FO+/ve+/vUAQ77+9YAhbalrvv73vv73vv70877+9OF3vv73vv70w77+977+9L++/vcWM77+9CO+/vQ1DVFNsIB9bNSTvv73vv73vv73vv73vv70dL++/vV5Q77+9AAJj77+977+977+977+977+9R++/vTbvv73vv73vv71jBBnvv73vv70ZMxd5QWlvfgliUm7Vryfvv73vv71877+9VBvvv71+MO+/ve+/vd+b77+9Z0Pvv73vv71PYCAJBO+/ve+/vdqB77+9ax/vv73vv73vv73vv71M77+977+9c++/ve+/vWEfJu+/ve+/vXjvv70c77+9TMumPe+/vWTvv70HSEoyKe+/ve+/ve+/ve+/ve+/vUHvv70xJu+/vSJG77+9cipN77+977+9VVJS77+9aO+/vQs+XlXvv73vv73vv70hHyTvv70AATnvv71L77+977+9AXYj77+977+977+977+977+977+9Lu+/ve+/vQjvv73vv71w77+9ESZJD3dsMu+/vVkNNe+/vSHvv714ThslLO+/ve+/ve+/vTDvv71X77+977+9Ju+/vWp0H++/vWlE77+977+9Jgfvv73vv73vv73vv71D77+9aNejUilVTe+/vdy077+9aHvvv71777+977+977+977+9Jkjvv71677+9JwFW77+9GyRL77+977+9JO+/ve+/vTVQPO+/ve+/vQEWOe+/ve+/ve+/vU16Ue+/ve+/ve+/ve+/vQ4AAALvv70O77+977+977+9Re+/ve+/vSdf77+9PkB377+977+977+9fVI777+9Ku+/ve+/ve+/vUt8PO+/vTNZZQtM77+9UF9z77+9Oe+/ve+/ve+/vVPvv714We+/ve+/vVZjWmM+S++/ve+/vdWfT++/vVDvv71cN1rvv73vv73vv70sMu+/ve+/ve+/vV9f77+9E++/vXDvv73vv73vv71Cbu+/vWnWte+/vUB177+977+9c2Hvv73vv73vv707Ph0YPO+/vcilLE8+77+977+9ae+/vR46ISXvv73vv71s77+977+977+9Nk3vv73vv70AAR7vv73vv70W77+9TwRZIe+/vUxyMGzvv73vv71WFV7vv73vv73vv70G77+9VUI777+9ZRF8cNyF77+9Qu+/vd+p77+977+9WO+/ve+/ve+/vRdiI2Pvv73vv70I77+9Ne+/vQrvv71w77+9XmQ577+977+9BH81GmIi77+977+9NO+/vWBCD++/vVBC2Lbvv73vv73vv73vv71677+9Ke+/vRp677+977+9Ji5l1q9c24Tvv73vv73vv73vv70S77+977+9fO+/ve+/vciB0YYQEu+/vVnvv70ACnlu77+977+9Hu+/vUwS1bMF77+977+9Be+/vT/vv71Q77+977+9Tu+/vXQfXDJH77+977+9JtC177+977+9d++/vT99BO+/ve+/vTpi77+977+977+977+977+9LTlU77+9We+/ve+/vTl2Re+/vcqCVxtbB0bvv73vv70tWVN277+9M++/vSvvv71xIVHvv73vv71qCTremO+/vQ5X77+9MhtR77+9LBfvv707Me+/ve+/vXXvv73YqhVGNWDvv73vv73vv73vv71QTSwt77+9cknvv70y77+9Mu+/ve+/ve+/vUYG77+977+9AADvv71Q77+977+977+9dO+/vW/vv73vv706Wu+/vRPvv71kHu+/ve+/ve+/vXpvc0kI77+977+9Ye+/ve+/vQzIp++/ve+/ve+/vQzvv73vv71r77+9Wivvv71qX1kzYO+/ve+/vSQq77+977+9Hk7vv73vv73vv71Y77+9DsS977+9OHHvv70T77+92r/vv71jCuiClA8F77+977+9RxPvv73vv70H77+977+9E37vv70R77+977+977+9Xe+/vT3vv73vv70YVXdM77+9AADvv70ZbyPvv73vv70b77+977+977+9Klrvv73vv71MIu+/vRcCODHvv70w77+9GSfvv73vv70mVtq777+9D++/ve+/vRFvIlvvv71FKe+/ve+/ve+/ve+/ve+/ve+/vTZqWe+/ve+/ve+/vRPvv71vFu+/vXnvv71a77+977+9OHbvv71hUu+/ve+/ve+/vT7vv71/BO+/vV00Je+/vTrvv73vv712MEQA77+9Bu+/vTki77+9du+/ve+/vRlpSO+/ve+/vdae77+977+9Zu+/ve+/vX9xJGk1BVPvv70AWW3vv73vv70T77+977+977+9CO+/ve+/vXwA77+9cCdoMe+/ve+/vcSgOe+/ve+/ve+/vVbvv71kAe+/vSDHs++/ve+/vVbvv73vv70AL++/vWzvv73vv70S77+977+9X++/vUrvv73vv73vv73vv70n77+9CO+/ve+/vVTIjyAAGCrvv73vv73vv71D77+977+9Wu+/ve+/ve+/vQDvv73vv71RMj/vv70eAH0g77+9dQFYFFR0AVTvv7103609YO+/ve+/vWoXCu+/vS3vv71xAADvv71aYXdAYxc077+9CO+/vWQCMnxp77+977+9aGIw77+977+9Q++/vWNh77+977+9Le+/vcyQBu+/ve+/veibowBG77+9Nkc577+9Je+/ve+/ve+/ve+/vSjvv71077+9Rlvvv73vv73vv70/77+977+9W0rIuu+/vWM5Ue+/vXnvv71J77+977+9VGnvv73vv70c77+977+977+9CWo3Lg9NEu+/ve+/vSLvv70177+977+9XgAAR++/vUvvv70m77+9xpkrO++/vS7vv73vv73vv70DMe+/vVnvv73vv70M77+9K++/vVR2YwPvv71p77+977+9a++/vSlS77+9C1tO77+9T++/vTnvv73vv71P77+977+9Te+/vTgc77+9Bu+/vUbvv73lgqbvv73vv70M77+977+977+9K++/ve+/ve+/vS7vv73vv73vv73EtU7vv73vv73Ns++/vVPvv73vv71sahQZyLdd77+9dn7fvTPvv71y77+977+9Eu+/vQAc77+977+9Egox77+977+977+9Re+/vQ7vv70l77+977+977+9Witg77+9Je+/ve+/ve+/ve+/ve+/vX/vv73vv71v77+9fu+/vVnvv73vv70tN++/ve+/ve+/vRHvv73vv73vv73vv73vv71JUSvvv70ucHhH77+9H++/ve+/ve+/vQDvv73vv73vv71t77+9au+/ve+/ve+/ve+/vVXvv70bMzTvv71g77+977+977+9OFjvv73vv73vv70g77+977+977+977+9be+/vVZ/77+977+977+9WVjvv73vv71XcGPvv73vv714Hu+/ve+/vXVl77+977+9AAAN77+9EUsg77+977+977+9ZO+/vQjvv73vv73vv73vv71+77+9bG/vv73vv73vv73vv71EXu+/vQMUGDTvv73vv70677+9au+/ve+/ve+/vRxl77+9a3Fs77+977+9Ne+/vVnvv70m77+9Ym4A77+9Dljvv73vv73vv70bHu+/vWrvv70W77+9D2AkTntvIGRWUQNh77+9GO+/ve+/vTDvv705XA8G77+9Uh3vv70K77+977+9We+/vSDvv70bcg06LisI77+977+977+9AANk77+9M++/vRPvv71SXNOw77+977+9L++/vXjvv73vv73vv70NF3NN77+9Ze+/ve+/vX4uDO+/vUtX77+977+9Hjfvv71377+977+9SlLvv73vv73vv71l77+9SWsoSGfvv71T77+9fw4J77+977+977+9KCvvv73vv70QDSTGnu+/vS44ahjvv71477+977+9Mu+/ve+/vQzvv71H77+977+9U2nvv70gdFQLUdmp77+977+977+9f++/ve+/vU4ZTe+/ve+/vVZyFO+/vTRB77+9E++/ve+/ve+/ve+/vQXvv70377+977+9LO+/ve+/vXQAACp+G++/ve+/vdWgJCp677+9c2IwXe+/vRdpP++/vS/vv706IVRrC++/vWpz77+9W0IA77+977+9ZV7vv73vv71O77+9IitZ77+977+977+93q5+HmVn77+9c0wc77+9K2sd77+977+9Me+/vVIuRO+/ve+/vX4pHUHvv70XdEhl77+9D++/vTDvv70k77+977+9C9KcUxXMsxLvv71z77+9URPvv70IZUDvv73vv73vv73vv73vv70D77+9IO+/vcOE77+9UWzvv73vv73vv70eFe+/vVFjUz/vv70mQu+/ve+/ve+/ve+/vQ0MQe+/vWwA77+977+977+977+9SAABde+/vWzvv70PZu+/vRc2fQ1V2Ksz77+9Ge+/vTrvv73vv73vv71PUO+/ve+/vWzvv70B77+906w2Q++/vStxXe+/vXDvv70dbE/vv73vv73vv71HIhLvv73vv70bWO+/ve+/vQnvv73vv73vv70k77+977+977+9dD1N77+9aO+/vRLvv71xJ++/ve+/ve+/ve+/vXYa77+977+977+977+9Azo477+9ZFlR77+977+977+9C++/vRIz77+9Tu+/ve+/ve+/vT4FwpXvv73vv73vv71SeX5177+9We+/ve+/vRrvv70g77+9HkLvv71477+9URQK77+9AAAhJmpIcQBYRHXvv73vv73vv70LHQ0Y77+9QO+/ve+/vX/vv73vv73vv71+77+977+9UO+/vQ3vv70/77+9Zu+/vSkeY2bvv70E77+977+9AWU977+977+9WMWO77+977+9dSUF77+9Tu+/ve+/vVrvv73vv70V77+9a38f77+9eSY0c++/vR7vv70BL++/ve+/ve+/vdqbGO+/vVFdeNa677+9YO+/vU7vv71uYO+/vXDvv71f77+9YFXvv70ZTwxS77+9T++/ve+/vSTvv70SLu+/ve+/vV9RKXEb77+977+9MXnvv71RSO+/ve+/vd2HKURVLR7vv73vv73vv70x77+9be+/vRbvv70777+977+9ZgAAYHLvv70E77+977+9aWkYCe+/ve+/vTdKWu+/ve+/ve+/vWvvv73vv71c77+977+9KO+/ve+/vUhObu+/ve+/ve+/vSQGOO+/vUpRGO+/ve+/ve+/vTDvv70j77+9Du+/vS3vv73PnCY7I++/vWZJ77+977+977+9SR/vv73vv73vv70bRn0177+977+9MO+/vXrvv71177+9GlFWYTHvv70k77+977+9yKsMO++/ve+/ve+/ve+/vRnvv73Eoe+/ve+/vQXvv70q77+9J0LXje+/vRJaaWHvv73vv70o77+9y40yHe+/ve+/vQHvv73vv73vv712TO+/vS0nRiVvBWjvv71Q77+9dO+/ve+/ve+/vcS3ZQfvv71f1KtH77+9QwLvv73vv73vv71m77+93oAACyHYqe+/vTTvv73vv71LXe+/ve+/vQQV77+977+977+977+977+9SyPvv71Y77+977+977+9FyDvv71h77+977+9DO+/vSlp77+9Ze+/vR1+NBLvv713R++/ve+/ve+/ve+/vSvvv70xZu+/ve+/vTzvv73vv70C77+9QWQabu+/ve+/vT0q77+9YGtebwbvv71yalnvv73vv73vv70UaS9H77+9Fyzvv701bj91A3Lvv71MSu+/vX3vv71H77+977+92pom77+9aO+/vXjvv71A77+9LSvvv71NCV1877+9JgEgAWXvv73vv71s77+977+9Mxbvv71pO++/vcurZO+/vTPvv70SYBprG1YM77+9FBQD26kKZ++/vTDvv70FRe+/vW1m77+977+9WG/vv73vv708AADvv73vv71X77+977+9VO+/vUBL77+9C++/vRrvv73vv73PiAIZAnI177+9ZO+/ve+/vSAE77+9cTDvv71zIgpkIVLvv71hMO+/vUjvv73vv70STO+/vRl6fe+/vQtb77+9AkR4ERoB1bHvv71J77+9EDzehzDbryko77+9O13vv73vv70b77+9O++/vQoT77+977+9AQBV77+977+9zaZO77+9ZO+/vVHvv73vv70jfRtt77+977+977+977+977+9LwLvv73vv73vv73vv73vv73vv70bEO+/vSvvv71dC0py77+9bHXvv70R77+977+9O++/vWLvv73vv71N77+977+977+9WD1AX++/vS00y5LMpu+/vcqg77+9Iu+/ve+/vQAL77+9RO+/vTTvv70NNt2a77+9A++/ve+/vW8BTO+/vQ5CTFHvv73vv70k77+977+9STfvv70e77+9Ucu2Lu+/vXrvv73vv70J77+977+977+9w7jvv71477+9Xu+/vW4w77+9be+/vUfvv70p77+9U++/vW0C77+934bvv73vv73vv71XTOuclO+/vV4E77+9Ku+/vXfvv73vv71V77+9DWUB77+9HlxkHXHvv70777+9XjTvv71S77+9Oe+/ve+/ve+/ve+/ve+/vWnvv71277+9anHvv73vv70N77+9Fwvvv73fmgw377+977+9Hu+/vX7vv71rcjBX77+9YO+/vSpUTe+/ve+/vdal77+977+977+9ZVrvv73vv71d77+9ZQ/vv70g77+977+9SO+/ve+/vSY977+92YAAMu+/vREyA++/vTTvv73vv70yW++/vXlC77+9VWY577+9QANKSQsr77+977+9EMSc77+9Qu+/vXDvv73vv73vv71377+9aO+/ve+/vSZR77+977+977+977+977+9OUIV77+9Re+/ve+/ve+/ve+/vXXvv73vv71jGyXvv73vv71W77+977+9DSvvv70n77+9NBHvv73vv73vv73vv73vv70vSu+/ve+/vSHvv73vv71z77+977+977+977+977+9FEAs77+9W++/vR7vv73vv73vv73vv71kTu+/ve+/vTtQSXM9YTPvv70EVDkFOO+/ve+/vXnvv70/c0nvv71ZRO+/ve+/vUnvv70i77+977+9I++/ve+/vRbvv73vv70H77+9YO+/vVHvv73vv703QH4ObAEsdu+/vXgjV2/vv73vv71QXlDvv73vv73vv71277+9Y0tm77+9AALvv71mOO+/vRXvv73vv73vv71V77+977+9RQ7vv70j77+9GV0O77+977+9a++/vQzvv73vv73vv73OuWnvv71o77+9Am/vv73vv73vv71eWtKv77+9XE8r77+9Mu+/vW8j77+977+9cCDvv73vv71b77+9EmDvv73vv70077+9RO+/ve+/vUkpdXtD77+977+9BWlK77+977+977+9f++/ve+/ve+/ve+/ve+/ve+/vRkKNXQ/77+9NUPvv71z77+9T0nvv70qNjbvv73vv73vv73vv71pyqHvv70q77+9ViTvv73vv70hJu+/ve+/vVhqxbvvv73vv71/au+/ve+/ve+/ve+/vX/vv73vv73vv73vv71zGO+/vSbvv70f77+9bxPvv71qa++/ve+/vSzvv73vv73vv73vv73vv70pfu+/ve+/ve+/ve+/vUVBRO+/ve+/ve+/vTPvv73vv73vv71xPwXvv71jIgEqQzLvv73vv70ANSbvv73vv73vv73vv71CcO+/vcWpTXRiSkVJfu+/ve+/ve+/vSwaCFzvv70OIe+/vS9n77+9F++/vSrOvQcET1zvv73vv73vv70H77+977+977+9Kgrvv73vv70wLu+/ve+/vTLvv70fOQ9B77+96aC577+977+9L++/vVHvv71c77+977+9cATPvdaHCe+/ve+/vXzvv73vv73vv70O77+9Ze+/ve+/vQ7vv71q77+9YgPvv73vv73vv708JiDvv73vv73vv73vv71b77+9Ku+/vS3vv71rQHTvv71h77+9Hhnvv73GizVvAABIWig477+9X++/vULvv70wOe+/vXHvv71G77+9C++/ve+/vXFy77+977+9dRDvv70K77+977+9IO+/ve+/vWLvv73vv70pfxXvv70HE++/ve+/ve+/ve+/ve+/vR3vv73vv703Wu+/ve+/vRXvv73vv73vv71+MxM577+977+91pAo77+977+977+977+91rAiPO+/ve+/vStOfu+/ve+/ve+/ve+/vU7vv71KWu+/vR3vv73vv71577+977+9DO+/vSga77+9W++/ve+/vX8k77+9eSFeM2Xvv71DUu+/vSIEAALvv73vv73vv73IoXhC77+977+9KDJ7QlAh77+977+977+9I3Pvv73vv73vv70U77+9B++/ve+/ve+/vTDvv73vv73ehe+/vV8e77+977+9Xhnvv70MdO+/vRxd77+977+977+977+9cz3vv73vv73vv70877+977+9MO+/vVzvv70tSgLvv73vv717Su+/vSbvv713V11gEe+/vQzvv70LNe+/ve+/ve+/vRVOKXXvv73vv70v77+9z69YRX0Pf1lq77+9XBnvv73vv73vv71qMu+/vSEc77+977+977+9Qu+/vWNsCtq977+977+9AAAHEu+/ve+/vWDvv701Ve+/vUIpNe+/vXnqnqTvv73vv71H77+977+977+9dnZy77+977+977+977+977+977+977+977+977+9Xu+/vTzvv73vv73vv70O77+9N1nvv70O77+9Le+/vT/vv73vv73vv71IUu+/vRsp77+977+9Ye+/vSgU77+9D++/vWxu77+9bu+/vUhi77+977+9I++/vTDvv73Yke+/ve+/vW8JZO+/ve+/ve+/ve+/vW3vv73vv73vv73vv71M0rvvv70K77+9eE/vv73vv71B77+977+977+9HCkV77+977+977+9QkTvv71sLUU277+9KxZM77+9De+/vX8f77+977+9EAAG77+9Fe+/vQnvv71bz7Abbe+/vWYOQn9tGirvv73vv71LQiLvv71oMu+/ve+/vXTvv71v77+977+977+977+9E++/ve+/vVHvv70R77+9In8KKx4577+977+977+977+977+977+9OwINX3Rt77+9TCTvv71E2o0177+9MO+/vRMZ77+9Wx/vv73vv71qau+/vQ5i77+977+9QO+/ve+/ve+/ve+/vSwK77+9I++/vQjvv73vv73vv73vv71077+977+977+9DUgD77+977+977+9y5TgoZfvv70AADTvv73SqRjKshHvv71kzqBC77+977+9F24xBu+/vTpCcHkFEO+/vSooCS/vv73vv73vv73vv73vv73vv71mbu+/ve+/vTXvv73vv73vv71a77+9PM+1WhDvv73vv70nXNWk77+9Wu+/ve+/ve+/vS3vv70hCe+/ve+/ve+/vUhZ77+977+977+9ZSnvv71oFu+/ve+/ve+/vRDvv71aAl0LBu+/ve+/vXYiSjHvv73vv70cSlwbPHrvv70Eee+/ve+/ve+/vSrvv73vv73vv71b77+9Ombvv71UW++/vQtVZ++/vWzvv71xIe+/vWJEJzIF77+977+977+977+977+9Ku+/ve+/vX3vv70AJ3ta77+977+9Te+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vQVGPFTvv73vv73vv73PgXUz77+9ee+/vUTvv71x77+9fO+/vWlqRmzvv70kdFZzZ++/vTbvv73vv70p77+9XDlL77+9GcKo77+977+977+977+977+9SRTvv73vv70HPSLvv73vv73vv71mcO+/vUTvv73vv70YAO+/vSLvv71l77+9YDnvv71d77+9NSjNqO+/vSHvv719Be+/vQ5g77+9R++/vRrcgXF477+977+9K++/vdaf77+977+977+9B++/vXvvv71J77+9U++/vRUhQl1OYl1h77+977+977+9eO+/vUcnYFXvv70V77+9QlVS77+9O0Dvv71K77+9AB8iNO+/ve+/vUoK77+9NFYVInzvv73vv73vv70a77+9KRnvv71paO+/ve+/vQE3UVJAeUrvv73vv71A77+977+9dRjvv70r77+977+9Ce+/ve+/vSV8H2FqIWrvv70fIu+/vWbvv73vv70m77+9fO+/ve+/vUR977+977+9Bl7vv73vv73vv71f77+9Fj3Up2Bd77+977+9d++/vX00GO+/ve+/ve+/ve+/vXtv77+977+9Ez4DHO+/vR9R77+9D++/ve+/vVHvv71Kae+/ve+/vcqPce+/vVLvv73vv73bpe+/vdiL77+9JFRV77+9FO+/vTQyCHfvv70iUO+/vS/uuZc/Pe+/vSJd77+9HjXvv73vv73vv717Pe+/vcyw77+9fDhx77+9JUHvv708Nu+/vQIj77+9V++/ve+/ve+/vTvvv70ALUfvv73vv73vv73vv73vv73vv73vv73vv70gNu+/ve+/vVnvv73vv71G77+977+9EO+/vWDvv70tPl/vv71h77+977+9ZEnvv71BZjjvv73vv70D77+9cnlD77+9Iu+/vRtj77+9FO+/vV3vv71y77+9dO+/ve+/vT1Ketml77+9Hivvv73vv70BUWJUClzvv73vv73vv73vv73vv71qDt6c15NC77+977+9dFos77+9JVcTTe+/ve+/vVDXoe+/ve+/veW2mO+/vXY4dzYY77+977+977+977+9AO+/vRvvv73vv71x77+977+977+9SO+/vQNrKmYl77+9SO+/ve+/vWfvv73vv73vv71177+977+9b1Xvv71T77+9Olrvv73vv73vv71p77+977+9De+/vVTvv71MPwxHQhrauQHvv70FIO+/vTjvv73vv71VQVMYSAAEYG9fRO+/ve+/vRUPGTEx77+977+9HWxMJiLvv70+77+9W++/ve+/vQbvv73vv70o77+977+977+9Qe+/vQ/vv70M77+9CHvvv73vv73vv71gaG9077+9Zlfvv73vv701ZEzvv71A77+977+977+977+977+977+9AhA2bnTvv71077+9c3EHHu+/ve+/vRJrD0Pvv719Ee+/vTnmgazvv71tBXLvv73vv73vv73vv70f77+977+977+9V1XflO+/vTpmXktNdO+/vXZ377+977+9F1Pvv73vv70kPVTvv73vv73vv73vv70977+977+91qnvv71ZLe+/ve+/ve+/vTJO77+9BUJGOe+/ve+/vXAL77+977+9ae+/ve+/vVh/cO+/vWfvv71Fee+/vRfkubgBPV7vv71C77+977+9Ru+/vTh277+977+9B1UPFO+/vQAa77+977+9L++/vVFw77+9ZFZTaVZJVk8u77+9Be+/vXFhYirvv73figgfUlHvv70H0Y0WEQ7vv73YvWcC77+9IO+/vScmVyJa77+977+977+977+977+977+977+977+9Lu+/vWZWCUJr77+9VgXvv71W77+977+977+9DO+/ve+/vSInBC9m77+977+977+9XUnvv70lT1Pvv73vv73vv73vv71277+977+90bXvv71YD++/ve+/vVEQ77+977+977+977+977+977+9ZGXvv73vv73vv71o77+9TBw8z5J4SB/vv71/77+92b3vv701D++/ve+/ve+/vXfvv73vv73vv71SWMmQLG8PLUbvv70Y77+977+977+977+9Yu+/ve+/ve+/vXjvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv70c77+977+977+977+977+9X++/vQ3vv73vv70Y77+977+977+977+9OlN677+977+9Mu+/vdyL77+9SDfvv73ag++/vU/vv70AAtuDEl1K77+9Te+/ve+/vXLvv73vv71DR++/vVhfM++/ve+/ve+/vWYL77+977+9Hj3vv71+77+9ce+/ve+/vUzvv73vv70WNu+/vUPvv73vv70iAB8z77+977+9Du+/ve+/vQPvv70Q77+977+9JO+/ve+/vWENSArvv71T77+977+9ZO+/ve+/vVNHem3vv73vv70nYe+/vQbvv73vv73vv71PbXXvv70P77+9cAhV77+9Mu+/vTDvv70577+9cu+/vVsI77+977+9Au+/vRozBe+/ve+/vWRm77+9Uu+/ve+/ve+/ve+/vTAW77+977+9AO+/ve+/vTpmC++/vQDvv70TFO+/vXpP77+977+977+9FXUYWwLvv73vv70377+977+9elPvv73vv70+77+9Be+/vWTvv73vv71q77+9GO+/vWI277+977+9N0AbzKQgXu+/ve+/ve+/vWfvv71t77+977+977+9K1vvv71tJRsAAO+/vWwqRnLvv71o77+9JWkm77+977+9V++/vQfvv73vv70PDe+/vTZd77+977+9XmTvv73Kr++/ve+/vWvcr++/ve+/vRIv77+9QGkyHO+/vSYk2J9kGRrvv73vv704c++/vWg077+9PO+/ve+/ve+/vR/vv71H77+9XlAOSTrvv73vv73vv73vv71G77+9du+/ve+/vX7vv70R7IGmZFANyrBaISdF77+9QBXvv71K77+9fjd7D0843rV/77+977+977+977+977+977+9dgp677+977+9K++/vUfvv70q77+9QO+/ve+/vWTvv73Pv++/vTdt77+9cQnvv73vv70V77+977+9US8B77+9TO+/vU8hO++/vRTvv73ZkFgpDtyRc1nvv71/N++/vTLNju+/ve+/ve+/ve+/ve+/vQQJa3ozLD7vv73vv73vv73cpG7vv73vv73vv71gNiQXW8Of77+9CDMZf3Uz77+977+977+977+977+977+977+977+9Bu+/vU8S77+977+9DO+/vWkKAAAf77+977+9D++/vS7vv73vv70/77+9MMmU77+977+977+9Ke+/ve+/ve+/vUjvv70r77+9L++/ve+/vVnvv71p77+9Tu+/vT5KOyXvv70YHe+/vSMcae+/vUosBl1Q77+9ejTvv70A77+977+9Y++/vUTvv71/77+977+977+9TjFOFu+/ve+/ve+/ve+/veyNsiDvv73vv701S++/vRPvv73vv73vv71nO++/vRYw77+977+9K++/vSNLaRobIu+/vSkV77+9S3VrPC/vv73vv73vv70WWzrvv73vv73vv71K77+9IR0meO+/vXHvv71p77+9X++/vUUUK2Lvv70G77+9Au+/vSUw77+977+977+9zIXvv71Ad2wuTnXvv70fJBXvv73vv73vv70J77+9eSlR77+977+977+977+9Ikvvv73vv73vv70V77+9ASfvv70r1bZy77+977+9QzXvv70X77+9dO+/ve+/ve+/ve+/ve+/vQ7vv71y77+9clYt77+9O++/vVxyBBPvv71P77+9R++/vdeUbu+/vQHvv70AAO+/ve+/ve+/ve+/vR/vv73vv73vv71U77+9Nz01Olkz77+977+977+9Qu+/vTEbMe+/vRsd77+9FWHvv71XCXvvv71777+977+9Fm3vv73vv71yO2cE77+977+977+9Be+/vQvvv73vv73Shnvvv73vv73vv70LOe+/ve+/vWQGd++/ve+/ve+/ve+/vW7vv71W77+977+977+977+9NGVe77+977+977+977+977+9Au+/ve+/vW7vv71cPO+/vV3vv70j77+977+9Dhrvv73vv71Z77+9NAQCAe+/ve+/vWk1IO+/vXsiSDwAGO+/ve+/vd2za2fElO+/ve+/vWJf77+977+977+9QHF2Xu+/ve+/vQTvv73vv70LTR7vv73vv73vv71qVu+/ve+/vXk+cXbvv73vv70S77+9Ku+/vUcC77+977+9PnIR77+9Vu+/vUnvv71r77+9dUPvv70LZ++/ve+/vT3vv715L++/vSVKPyELU2w377+9PO+/vXsO77+977+977+9z6gp77+9cxvvv73cgmQzcFLvv71IOu+/ve+/vVE+EAAGAwPvv71D77+977+9Ye+/vQ5QEO+/vVQU77+977+977+977+977+9Wl5J77+977+977+977+977+977+9z4IqGGHvv70177+9LCEO77+977+93q0HFyc177+977+9Ok7vv70177+9f1bvv71d77+977+977+9Du+/ve+/vW7vv70g77+977+977+9AO+/vWzvv71x77+977+9cu+/ve+/ve+/vVM977+9A++/vRIXKTHvv71177+977+977+9cmdo77+977+977+9QVEMVU3vv70t77+9R++/vUbvv73vv71OJ++/ve+/vQTvv73vv70H77+9TxJYBe+/vRYi25Pvv71x77+977+9CHPvv73vv71cbHHvv71677+977+9V1Hvv73vv704BO+/vQLvv73vv70LRkNk77+977+977+9aO+/ve+/vTEdEEE0by/vv73vv73Qk1kc77+9CO+/vW/vv73vv71lLu+/vUxl77+9ce+/vXEM77+96KqPKu+/vSk4P++/vTUK77+977+977+977+9ae+/vdSjL0QH77+9H++/ve+/vVzRuyYu77+9ADV877+9De+/vXvvv70S77+9dhbvv71d77+9QO+/ve+/vUjvv73vv701dhwn1Lc3WwhQ77+977+977+9HVvvv71fL++/vXXvv73vv73vv71Y77+977+9Ne+/vWsDTDHvv73vv71Z77+9dXTvv73vv73vv73vv73vv73vv73vv73vv73vv73vv70/Wz8Q77+9FVlAUk1fLO+/ve+/ve+/ve+/ve+/ve+/vc2+77+9Yi7vv71n77+9Pu+/ve+/vTzvv73vv73vv708eBoq77+9JiPvv70+77+9BO+/vTciEO+/ve+/vdGZ77+9f3An77+9EA/vv70Ibe+/ve+/vVXvv71/YQhH77+9fw7vv73vv70+77+9HVHXku+/vVfvv73vv70I77+9QO+/vWbvv71RKR8sIWrvv73vv70AR++/ve+/ve+/ve+/vSHvv73vv73vv700W1fvv71CQu+/vRtUde+/vQNQ77+977+9YAFpQjB4TSzvv71rHO+/ve+/vQcG77+977+977+9XNO4OUzvv73Jhu+/vdOuTnrvv73vv73Pj++/ve+/vSnvv70L77+977+9F2Ae77+977+9TB5EEAABKy7vv71E77+977+977+9FTXvv700PS7vv73vv71wDn1b77+9Ue+/ve+/vV/vv73vv73vv73Fq++/ve+/ve+/vWrvv73vv70hce+/vVVG77+977+9Uinvv73vv73vv73Enu+/ve+/vSPvv73vv73Gj++/vWfvv70f77+9U++/vSvvv73boO+/vUjvv70PP2QR77+9CMyKRgDvv71q77+977+977+9be+/vXHvv70q77+9b++/vS/vv73vv73vv73vv71jdu+/vQN7bDdldkXvv73vv71Q77+9ARoyTXDvv71K77+977+9XTRV77+9HXvvv73vv73vv70f77+977+977+9bwnvv73vv70jSu+/ve+/vRFL77+9WV0VVMaOelfvv71jAu+/vXbvv716Pj/vv73vv71EM++/ve+/ve+/vUDvv73vv73vv73vv73vv71tNhQh77+9f++/ve+/vQHvv73vv71fJu+/vWBlbm9yH++/vRfvv71GZE7vv73vv73vv73vv73vv73bgljvv70sd1QrMlHvv73vv71U77+977+9wpV/77+977+977+9PFtT77+9em3vv71c77+9OytE77+9Ku+/vdexAADvv70D65qr77+9fW4SSe+/vUcJ77+977+9f++/vQ7vv70ia++/vXnvv73vv70yP2Dvv73vv71JOCIn77+9Lsmdbe+/ve+/ve+/ve+/vTkrdjzvv73vv73vv708IW85ZO+/vWAade+/vdiAF++/vU3vv73vv73vv71IYO+/ve+/vWoeeVpNZu+/ve+/vS4g77+9MO+/vQnvv70bVHcXHklTUe+/ve+/ve+/vW/vv73vv71w77+977+9Gu+/ve+/vV9OCznvv73vv73vv73vv70xSO+/ve+/vSsG77+9Wu+/ve+/vTvvv73vv70b77+9Yu+/vTzvv71P77+977+9VEFVWkrvv70y77+977+9Qe+/vWAg77+9C++/vcWEeu+/vRp/JzJADjLvv70xCO+/vUVfO++/vWcg77+9HD/vv73vv73vv73vv71E77+9EhHvv73vv73vv71rQEjvv73vv73vv73vv73vv70TEe+/vW3vv71W77+977+9Je+/vQt077+9QyRz77+977+9AAzvv73vv718WVwBC++/vWNdXmbvv73vv73vv73vv73PrCs177+9K1QA77+977+9Ye+/vR4uAe+/vVXvv73vv70YURcTPO+/ve+/ve+/vVDvv73vv73vv73vv73vv73vv71D77+977+977+9O2PdmRbPvO+/vWgz77+977+977+9y7nvv71jfO+/ve+/vVTvv70477+977+977+9H++/vTZfQhrvv73vv71T77+977+9YyBPQR4V77+9AyFFV++/ve+/vU4a77+9QO+/ve+/ve+/vULvv73vv70g77+9IWNK77+977+977+9A++/ve+/vXdG77+977+9OXkp77+9Ne+/vWvvv70N77+977+9Fe+/ve+/vSPvv73vv73vv73vv71HN2jvv73vv70AGe+/vXtF77+9FQZL77+9a++/vQRU77+977+9X++/ve+/vXPvv73vv73vv70lcO+/ve+/ve+/ve+/ve+/vVfvv73vv71vdu+/vQAA77+977+9Pe+/vT3vv719GjTvv713MO+/vXLvv70y77+977+977+9IQfvv71777+977+9Ne+/ve+/ve+/vRXvv73Ehu+/vVTvv71HEO+/vXfvv71+77+9C++/vXgG77+977+9DylyZzUEQjkW77+977+9ATYdEA8tH++/vSh877+9L++/vVXaje+/vUjvv70q77+977+9H++/vVoKDu+/vcap77+9aSPvv73vv71F77+9Bu+/ve+/vUrvv70k77+9DO+/ve+/vW19AgDvv73cl3UINxDvv73vv70FdSJ177+9SSBSHwpeftOHYTDvv718TFbvv73vv71X77+9Un7vv70IG++/vU4377+90rJ377+9VRXvv71ITld177+9Te+/vR5d77+9ByXvv73vv73vv70v77+977+977+9el/vv70COC7vv73vv71QAAIfHTFG77+9Oe+/vRPvv73vv71i77+9Bl7vv701VBhOREPvv70377+9Ku+/vQkJ77+9S++/ve+/vSPvv70HBe+/vUbvv70LU++/vWfvv73vv70o77+9FTcq77+977+977+9ZyJB77+9yJBYIe+/vT7vv70+77+977+977+9OBPvv73vv73vv73vv73vv70A77+9ASxLJO+/ve+/ve+/vdChcUEIBu+/ve+/ve+/ve+/ve+/vVnvv71NYO+/vXREAu+/ve+/vTXvv73vv73vv70i77+9SO+/ve+/vX7vv70u77+9GO+/vSN3Ye+/vVDvv71E77+9DO+/ve+/vR7vv70Gf0VVdm7vv70uWVXvv71DKzIh77+9Lu+/vXFCQzJw77+9IV/vv71ERBLvv73vv73vv70Zd1bvv70c77+9fwLvv73vv73vv73vv73vv70S77+90JRGLzvUhzTvv73vv71yflfvv71j77+9Rirvv71077+9HO+/ve+/vcaO77+977+9AAAAYO+/ve+/vUXvv70Z77+977+9Zu+/vRPvv716IDXvv71aQ825b++/vdOz77+9Tu+/vWAoAXzvv71P77+977+9Us6PSu+/vRXvv70l77+9HhRJ77+9cseXZ1kt77+977+977+9d++/ve+/vWnvv71+ae+/ve+/vVFfUiEl77+977+9Uknvv701fFguDB/vv71177+9S++/ve+/vU3vv71rEO+/ve+/ve+/vcO7A++/vTAg77+9Re+/ve+/vT0M0Jzvv73vv71fUWTvv73vv71877+9NAPvv70U77+977+977+9QO+/ve+/vS3vv73vv71q77+977+9Ae+/vXkjxKVEA++/vRlANWjvv73vv70977+9VVF177+977+9T++/vX4n77+977+977+977+977+9B++/ve+/vRVm77+977+977+977+9Iit777+9LjTvv71e77+9SO+/vTVoN++/vXjvv71977+977+917cuJAAGcO+/vU7vv70G77+977+977+9Dwbvv71S77+977+9UV1O77+977+977+977+977+9DFABe++/vV0877+974+w77+977+9cwNB77+9f++/vQ3vv73vv70z77+9Me+/vSrvv71dHO+/vc6rC0FDMDxPfVHvv73vv70nBVXvv73vv73vv73vv70877+9be+/ve+/vTMSKe+/ve+/vVxV77+977+9zYXvv70l77+977+90JAu77+9OkBH77+977+9zZ/vv71WDe+/vWXvv71DU0bvv73vv73vv73vv73vv73vv71qVe+/vREI77+977+977+977+9x4/vv71u77+977+9H0rVoxTvv73vv73vv71JZe+/ve+/vRXvv70B77+977+9MBhv77+9YO+/ve+/ve+/ve+/vS/vv73vv70677+9KFZt77+9UzJyX++/ve+/vca177+977+9We+/vUzvv73vv71Z77+977+977+977+9TlYIdDRu77+9Nu+/ve+/vVHvv709c++/vS0aHO+/ve+/ve+/vUA+77+9KxYd77+977+9Qu+/vTcpXhPvv73vv73vv71BN0Tvv71q77+9QO+/ve+/ve+/ve+/ve+/vTZld9K+77+9Ne+/vQhofSTvv70AAe+/vUfvv73vv73vv73vv73vv73vv71177+9Y++/ve+/ve+/ve+/ve+/vXVj77+9bO+/vdq5E3zvv71UUe+/vRli77+977+9Hlx977+9XXPvv73vv73vv73vv73vv73vv71A77+9PO+/vQHvv73vv70q77+977+977+977+9eChu77+977+977+9EhXvv73vv73vv73vv70h77+977+9SUvvv71VbUsVSxpRHu+/ve+/vVbvv73vv73vv70yee+/vQDvv73vv70BzoDvv70E77+977+977+9CEpeWVXvv70F77+9be+/vWDvv73vv73vv73vv70s77+977+9A0o+Xzvvv73RsjHvv71BNTLCngvvv73vv70SYjcR77+9du+/vQzNre+/vTZRc++/vRPZtifvv70Zbe+/ve+/ve+/ve+/ve+/vXt577+9Vx10A++/vTYu77+9OTLvv73vv711Dxfvv70b77+9WBES77+9dmjvv73vv71H77+977+9BO+/vVrvv70DPwcz77+9DO+/ve+/ve+/ve+/vX5y77+9WO+/vdqU77+9JxHvv707ABFc77+977+9PxAABEpFZ++/ve+/vR14L0x877+9Du+/vXIgfe+/vX0zTu+/ve+/vSsBSWVhae+/ve+/ve+/vTlJ77+9cHV677+9Pn/vv70B17Lvv71dV++/vSDvv71377+9HRLvv73vv70MVO+/ve+/vWDvv71fH++/ve+/vVM277+9RmFTCO+/ve+/ve+/ve+/vQTvv73vv70rIu+/vWgKT1/vv73vv73vv70N77+977+9E0hQ77+9Hwrvv73vv71eOUdjQgHvv71V77+9Ge+/ve+/ve+/vXHvv73vv70l77+9Ju+/vQXvv70u77+9MO+/vXrvv71u77+9Fe+/vceUOe+/vQwK77+9Yu+/vRlV77+9Ie+/vSdS77+977+9GO+/vXXvv73suaMW77+977+9PXPvv700Pu+/vUIB77+977+9Pu+/vRfvv71wRu+/vRkubzfvv73vv73vv702cdSR77+9AO+/ve+/vVYHSO+/vXPcr++/vVZ7W++/vTPvv73vv73vv73vv73vv71sNe+/vT1MYS3vv70yOe+/ve+/vW7vv73vv70iD0ALFe+/ve+/vXI3SnAABX5BIu+/vUBETCvvv70m77+9Qu+/ve+/ve+/vX7vv73erO+/vTYp77+9Cwrvv70977+9A++/ve+/vSc177+977+977+9RX1X77+907ll1I3vv71P77+9Ox9Ie++/ve+/vSLvv71b77+9fnlQWe+/vVzvv717fu+/ve+/ve+/ve+/ve+/vdG377+9yYbvv73vv70e77+9OO+/vSTvv709QStsQ1NMaw4zb++/vRkz77+9Bu+/ve+/ve+/vR7vrLJcCR3vv73vv71V77+9XD9R77+977+9fyfvv73vv73vv73vv73vv73vv73vv70W77+9bO+/vVctVGEP77+9Fu+/vRvvv70+77+9Eu+/vQwWT++/vWJc77+9Qe+/ve+/vVLvv71977+9ayvvv73vv70CYk9577+9Je+/ve+/vRth77+977+977+9Ne+/ve+/ve+/vRfvv71K77+9LO+/vX8zakFjdO+/vVLvv70aalnUpe+/vWXvv71j77+977+977+977+9XzY1zrAS77+9FUzvv73vv70P77+977+977+9Ke+/vQTvv70CAAABQVrvv73vv73vv73vv71YKFIy77+977+977+9EO+/ve+/vUvvv701KApQ77+9Ju+/vSpx77+977+977+977+977+977+9FO+/ve+/vWFeDk4DaO+/ve+/vSTpkIjvv73vv73vv73vv71Z77+9PO+/ve+/vRPvv70977+977+9zpRn77+977+977+9Du+/vWbvv73Nre+/ve+/vce977+977+9Q01A77+977+977+9HAfvv70+Bygc77+9zI8B77+977+977+977+9OB0G77+9K82nMMO+77+9L++/vWnvv73vv70n77+9V3rvv70YyJ1v77+9PzHvv70VPUwKATHvv73vv70nJwvvv71d77+9Nu+/ve+/vTjvv73vv71CTWBqV++/vT7vv70hLO+/vRUg77+9ZO+/vXA/77+9Pe+/ve+/ve+/ve+/vURra++/vca377+977+977+977+9wqLvv73vv73vv73vv71E77+977+977+977+9bFRgfXx2VeSNuu+/vW7vv73vv70G77+977+9Se+/ve+/vVXvv73vv73vv71J77+977+9Egd4RxDTvxTvv71a77+9bAHvv70ADgfvv71+Y++/vUdjUu+/ve+/vUXvv71277+977+977+9E2Xvv73vv73vv71377+977+9KEXvv7183IHvv70pbjzvv71xN0Be77+977+9QO+/vQPvv73vv70777+9CO+/ve+/vV/vv71q77+9Ae+/ve+/vUXvv73vv73vv71P77+9DWsRDCR077+9A8iVZCUa77+977+9LcioY++/vV1JFu+/vRHvv70Xau+/ve+/vQUofHJDMu+/ve+/vVlHXu+/vUJ9LTczQnRk77+9bUpk77+9Pu+/vVhs77+9dO+/vSVoPe+/vSpdHgPvv73vv71n77+9Ve+/vUU8de+/ve+/vUfvv70aQu+/vQVZ77+9TzQqLe+/vUvvv73vv73vv73Fge+/ve+/vRvvv71vMe+/ve+/vTlrBEHvv71V77+9WMyT5ou8I++/ve+/ve+/vQXvv71PIg3vv71K77+977+977+9Wylm77+9Eu+/vTcT77+977+9Zu+/vWLvv71v77+9fu+/vQ1vCu+/ve+/ve+/vTzvv70w77+9GnTciD8j77+977+9LFAyAADvv73vv71I77+977+977+9VFTvv73ake+/ve+/vRDvv73vv73vv73Fre+/vcSf77+9VG3GnVbvv70OF++/vWIHUO+/ve+/vWIe77+9KypR77+9Au+/vRLvv73vv71AMzEoNu+/ve+/ve+/ve+/ve+/vRLXu8WtL++/ve+/vSZG77+9B++/ve+/ve+/ve+/vVJbYVLvv70FJER5LO+/vXjvv71U77+977+9GTt477+977+9He+/vVt5aO+/vVHvv73vv73Wgl7vv71/77+977+977+977+977+977+9AWTvv73vv73vv73vv71vwpfvv73vv73xla6aXUZ/F++/vTzvv73vv70jJDvvv73vv710H++/vSHvv70sVW9KFTsh77+977+9PAd577+977+9BtWo77+977+9B++/vXU177+977+9QDVC77+977+9aQHvv706V++/vXBVXnfvv701OwDvv73vv71x77+977+9XX1R77+977+9Ee+/vWbvv70EOu+/ve+/vUXvv73vv73vv73vv73coljvv70UMHVC77+9VO+/ve+/ve+/vXLvv70AAO+/vVo5cu+/vV7vv71FMkjWou+/ve+/ve+/vXjvv73vv71nOe+/ve+/vVM1ExJl77+977+9btmbAxPvv71CcxLvv706bSfvv71KKlsXYWgxAe+/vSxLTnnvv73vv71b77+9QhdcOiB2H++/vVUBFx8A2YsX77+977+977+9I1rvv73vv70DG++/ve+/vQ08GHhnb+WPmGVaXBvvv73vv73vv71FPu+/vW0PcO+/vTsc77+977+977+9Oe+/vc62Mt+O77+9EhbFke+/ve+/ve+/ve+/ve+/ve+/vXUOc++/vQfvv73vv73Yqe+/ve+/vQBMJO+/vWlp77+977+9ce+/veGNnO+/vTNy77+9z7/vv71DMe+/ve+/vQ9EVnbvv70K77+9Ou+/vVfvv73vv71s77+9eAzvv73vv71R77+977+9MlkH77+977+9ZBVzPO+/vVnvv73vv70l77+9MTnvv70wKe+/ve+/vWvvv70VQO+/vW7vv73vv73vv71jDnHvv70PG07IkO+/vX1p77+9OO+/ve+/vSxj77+9enUTTO+/vRgAAQ4F2ajvv70G77+9EO+/ve+/vd6nNCPvv717S2IbbnDvv73vv71nR++/vTvvv73vv71r77+977+9LO+/ve+/vXsn77+977+977+977+977+977+977+9ZSgE77+9X++/ve+/vTlx77+977+977+977+977+9YVzvv70Ea8K7MO+/vU/vv73vv70f77+977+977+9AQg/agMZ77+977+9CAzvv71q77+9QVzvv704FEgl77+977+977+9cO+/vURV77+9yLTvv70GEgHvv71oZO+/vX0477+977+9a3Tvv71+77+9RBtLGO+/ve+/vS9T77+9XN6gfmTvv70J36jvv73vv70CDu+/ve+/vWHvv709bO+/ve+/vTXvv70P77+9AVbvv700B++/vS9s6rGETTlb77+9be+/vSPvv73vv70YK++/vWtAAB0QJhvvv73vv70VW++/vWI177+9JwXvv73vv73vv73vv73vv71iR++/vSzvv71xWUbvv73vv73vv73vv70ZPlFEbwrvv73vv70+77+9WW4277+977+97pSR77+977+9bO+/ve+/vUFvE05bLu+/ve+/ve+/vW5rE++/ve+/vX5/2ofvv73vv71H77+9MnpNNe+/ve+/vTfvv70rD2fvv71577+9YAEVW++/vTAQfilkZ2F177+9PxcI77+977+977+9GQrvv73vv73vv71v77+9N++/ve+/ve+/vSZJN++/vVDvv71wbe+/vUbNjO+/ve+/vTzvv73vv70Q77+9ZUti77+977+904rvv70H77+9UO+/ve+/ve6rslFT77+977+977+9du+/vVZvQ++/ve+/vQl277+977+977+9QSDvv73vv73vv73LrWwY77+977+9AADvv70UaEPvv73vv70/fe+/vUbYt0Dvv73vv73vv73LgO+/ve+/ve+/ve+/vT3vv70t77+9Au+/vXXvv73vv711H++/vTMV77+9Pu+/vXUU77+9Iu+/ve+/ve+/vVrvv73vv73vv73vv70CWu+/vdm177+9OVcy77+9c1Mj77+9X0fvv70q77+9YSjvv73vv73vv70Zxowp77+9GO+/ve+/vXMrDe+/ve+/vXQg77+977+9ae+/vRMEIu+/vRnvv73vv70J77+9cxnvv73vv71+Hid577+977+977+9B2R777+9be+/vUw277+977+9Oe+/vShxcO+/vX4yEu+/vQbvv71D77+977+977+9Njo/77+977+977+977+95LWl77+9Mhrvv70HSe+/vQNPRnQbSu+/vUgrNkkA77+977+9QRRxOO+/vQACdO+/vVLvv73vv73vv70qewt277+9eu+/ve+/vRLDnj7Wvu+/ve+/ve+/ve+/vVgzEQ7vv73vv70+fGsp77+924IACR0KHe+/ve+/ve+/vTjvv71XFV3vv71+77+9NNKC77+9JyXvv73vv73vv70wExso77+977+9Xu+/vT/vv71zWe+/vT9a77+9EDUV77+9K++/vWzvv73vv70R77+977+9O9a977+977+977+9XwoE77+977+9ehdO77+977+9Jyp4KTtMVu+/vXEjCSAs77+977+977+977+9FSpaNl1VFe+/vRLvv71QMyx4VQN9au+/vX/vv73vv70z77+9WO+/vcWPRWpnHHnvv70icO+/vcq2Bu+/vUoWAADvv73vv71A77+9Zu+/ve+/vVbvv70K2pvvv73vv73vv71Db++/vW/vv73vv73vv71N77+9eVpW77+9aO+/ve+/vSFk77+9U0Dvv73vv71s77+977+9V++/vR3vv70QDw3vv70477+9SXLCkiJJ77+9HjHvv73vv71277+977+9UO+/vV/vv73vv71t77+9Em4qIHDomKx9K++/vVEc77+9DG/vv73vv71NM0AdGUB277+9F2Fh77+9Cu+/vTw877+9J++/vRDvv73vv70wbAAAB++/ve+/ve+/vTF8Je+/vV8VJO+/vTnvv70cI++/vRFiyoNlfTDvv73vv70fblgMG++/vVXvv73vv70/MWnvv71Pcu+/vXIz77+9JBLvv73vv70G77+93I1V77+977+977+977+9TRDvv73vv70o77+9I07vv73vv70ydu+/ve+/vVTvv73mi4jvv73vv73vv70cX8qo77+977+9AFY8dVU+E++/vRrvv70V77+9eULvv71efO+/ve+/vSTvv70b77+9MiTvv701Z++/ve+/vRTvv71MKO+/vT/vv73vv70YG++/vQAA77+977+9bW1+77+9Ru+/vU7DrNei77+977+9Ju+/vQdM77+9Su+/vQkt77+9Cu+/ve+/vQg277+977+9HWHvv73vv71GfAvvv71aZu+/vT5HAybNqjozZAd377+977+9Ku+/vceiCe+/ve+/vQ3vv70A77+9G2dXb04eAgUkdXnvv70r77+977+977+9Hgvvv73vv73vv71777+9cEd277+977+9dgobIe+/vXYQP0bvv73vv73vv73vv70UDu+/ve+/ve+/vQQT77+9USkcEu+/ve+/vSAACO+/vSJG77+977+9a++/ve+/ve+/vU7vv73vv70xG++/vRDvv73vv73vv71N77+9OO+/ve+/ve+/vUghV0oSGU3vv73vv73vv70YJg0q77+9K++/vVAcYTfvv73vv73vv70b77+9SDVjG++/vSF467a677+9PQx1Hu+/vRwb77+977+9YU/vv73vv73vv70K77+9PO+/vUdgX2UNA8S477+9FQAfYAJdNO+/ve+/vWvvv70f77+9zLLvv71iD++/ve+/ve+/vXjvv73vv70W77+977+9Xyvvv73vv70qLO+/vVIAAGNK77+977+977+9Rwfvv73vv71B77+9Me+/vVRJ77+977+9QTtnCe+/vWhJFyB7CO+/vQXvv71B77+9Pu+/vTLvv73vv73vv73vv71+77+9cO+/ve+/ve+/vc6FPkk7Ne+/vSxtbu+/ve+/ve+/vXzvv70XLu+/vU7vv71cWhcOfu+/vS7vv73vv73vv71v77+9O++/vRnZrBZO77+977+977+977+9KXM877+97pyQGx4A77+9Se+/ve+/vUhtXe+/vTrvv73vv73vv73vv70vD++/ve+/vQ7vv70AAREySDpfRXdv77+977+977+9UTTvv707Qu+/vVN8firvv73vv70JSwJL77+9Ze+/vRgpR++/vRRK77+9Q++/vRMV77+9JQR/77+9PEY4Vu+/ve+/vSHvv71wdu+/vdSyaXEnTzQ877+9cu+/ve+/vRooyLIBezzvv73vv73vv70g77+9GEjvv71x77+9e++/ve+/vTRl77+9dE/vv73vv73vv70wHQ3vv73vv70BSe+/ve+/ve+/ve+/ve+/ve+/ve+/vRbLrUXvv70c77+977+977+9b++/vQPvv73vv73vv71n77+9AAjvv73vv71x173vv73vv73vv71lZu+/vRtA77+9Th/Jigfvv71T77+977+9VkJZayPvv73vv73vv70bW++/vSfvv71t77+977+9WO+/vV3vv71IfXZKeO+/ve+/vRswczxxKDrvv73vv73Spu+/vS/YjiJMdAhseAvvv71M77+977+9L++/vVl4P++/ve+/vQDvv73GlA1+b3Q/77+9SGXvv73aoWvvv73vv73dqu+/vVENee+/ve+/vUgcdu+/vQY877+9AAMB77+9FA7vv73vv70U77+9Lu+/ve+/ve+/ve+/vS7vv70o77+9Zlrvv73vv73vv71V77+977+977+9CVLQl++/vQrvv70APCJpP9+k77+9Vu+/vUDhr53vv71877+977+977+977+9L++/vT1v77+9Uu+/vRIpakEFCO+/ve+/vVLvv73vv73vv73vv70ZMBZu4qK177+977+9BxsEeu+/ve+/vW9Lae+/ve+/vUo377+977+9Zu2QjAbvv709Xe+/ve+/ve+/vWIu77+9fTvvv70ADiNS77+977+9Yj9K5KyTYu+/vUoO77+977+9HyPvv71j77+9LO+/ve+/ve+/vX3vv73ZvcyhEO+/vcyJUg0F77+977+977+977+977+977+9G++/ve+/vXHvv70u1Yjvv73vv71P77+9AEQ+77+9e3zvv70e77+9GkPvv73vv73vv70aRNe577+9I3XDuGbvv73ssaTvv73vv70r0IXvv70w77+9zofvv71X77+977+9Su+/vRbvv71+77+9VSc977+9Cu+/ve+/ve+/ve+/vT8177+9MXRm77+9We+/vQAAUu+/vRHvv73vv712AQvvv70z77+977+9bRjvv70yPFJH77+977+9Ju+/vW7vv73vv73vv70icWrvv73vv70faQUjPU7vv70KzbVv77+9DxVs77+9VR8n77+977+977+977+9WzZZ77+9TO+/ve+/vQUR77+9Oe+/vTYyxowZ77+9ThIKfO+/vQR777+9Ze+/ve+/ve+/vTVcSBTvv702de+/vVMl77+977+977+9e19hNzV/Ye+/vVUr77+9063vv71/77+977+9CGAUTUpLbwAAWlVcQT7vv73vv71m77+977+9RGw7Hyfvv70n77+977+977+9AO+/ve+/vX8NRe+/vSnvv73vv73vv71j77+977+977+9DQ8j77+9F++/ve+/ve+/vR0XV++/vRfvv73ZiDrvv70Q77+9egXvv73vv70677+977+977+977+9fu+/ve+/vQzvv73vv73vv71FHFTvv73vv71K1JY377+977+977+977+977+9CX/vv71n77+977+977+977+977+9RRV/AhlkAe+/vXnvv73vv71vPQRl77+9PO+/ve+/vVzvv71mAAA+77+9QO+/ve+/vWM4aTcqSH5ebUvvv71bSsqWNO+/vVhw77+9O++/vRZIYVslFe+/ve+/ve+/ve+/ve+/vdSY77+9Je+/vShbY++/vV3vv73vv73vv73vv71cOHbvv73vv71077+9Nu+/vUPvv73Ejlbvv70HRO+/vdC+77+93JLvv71jyKrvv70Jcg/vv70k77+9dyXvv71X77+977+977+9HCDvv71edDZg77+977+977+977+9fe+/ve+/vUcAAD7vv73vv702Qe+/ve+/vUxxEA5177+977+9PVrvv73vv73vv73vv73vv714F0db77+9Q++/vUnvv73vv73vv73vv73vv73Uiwvvv71c5rOgJXZqC++/ve+/vS0R77+9VxonQ++/ve+/vSHvv70v77+977+977+9XEnvv70477+9IyIR77+9WHDvv73vv70J77+977+9EApG77+977+9DTYZYNGgf1p5TVM0QAtq77+9F++/vUkkUe+/vSbvv73vv73vv73vv71vaAAB77+977+977+977+9Ru+/ve+/vTLKqTrYvBjvv71w77+9d3nvv700Swk5ZBZB77+9UO+/vSbvv71G77+977+977+977+9JO+/vTzvv73vv70ccG3vv70CYn/vv73vv73vv70H77+9fnDvv70d77+9TFALf2Lvv70kfwrvv73vv73vv71e76OgDBLvv70g77+9Hhd577+9Le+/ve+/ve+/vUjvv71z77+9KH5977+977+9Mu+/veOrhgkP77+9be+/ve+/vWnvv70tdUoB77+977+977+977+977+9Xu+/vU5a77+977+9NEbvv70AAAQs77+9cO+/ve+/vXbvv70tPu+/vWJqFmXvv70P77+977+977+977+9C++/ve+/vSvvv71fFTEH77+977+9Su+/vQxBMSvvv71R77+977+977+9zotb77+977+9SO+/ve+/ve+/vUUGBVsoE++/vVDvv70Y77+9UO+/ve+/vRzvv73vv73vv71w77+9Yu+/vc6IK3E5TyLvv71eHO+/vTjfoSF9P++/vU5377+9Fu+/ve+/vTs2ce+/vRnJj++/vXkWRwbvv71877+9JAHvv73Ks++/vUwAAO+/ve+/vQfvv71777+9Ce+/vUHvv71M77+977+977+9Hu+/vTPvv71nAU7vv71oZn4r77+9UO+/ve+/vcy1zLQSUzbvv73vv73vv719fxpC77+977+9S20577+9cGzvv70M77+977+9YxXvv71eFe+/ve+/ve+/vRlmFu+/vUV8BBLvv71c6aWMH++/ve+/vQRMAmHvv71n77+9a++/ve+/ve+/vWFKDu+/vXsbWV7vv70d77+9XC4fJHTvv73vv70o77+9AALvv73vv73vv73vv70XKk0l77+977+977+9RnXvv71KVTE+W++/vSvvv712FWhi77+9LgMWde+/ve+/vU/vv70m77+977+9aO+/vRHvv71/77+9OkAT77+9KBoc77+977+977+9D++/vW/vv71Ud3/vv73vv701W++/vR3vv70MxoAh77+977+977+9Nkh577+914nvv71Z77+977+9Qu+/ve+/vQUKGS3vv73vv73vv70Z77+977+9LCnvv70E77+977+977+9Uu+/vcqw77+977+9AADvv73vv71NZu+/ve+/vQnvv73vv70p6rev77+9A++/vUIG77+9ZG8677+9VTDvv70gQFjvv73vv71lOl/vv73vv712zpbvv73vv73Tv1E777+977+9N++/ve+/vW7vv73vv73vv73vv73vv71bJ++/vWk4H++/ve+/ve+/vVM0fO+/vSLvv70S77+9be+/ve+/vUNu77+9Hu+/ve+/ve+/vQbvv70AOTTvv73vv70G77+9RO+/ve+/vXrvv70y77+9SRV/77+9De+/ve+/vTZV54SiBTEDJe+/ve+/ve+/vc6Ees2VAABl77+977+977+9YO+/ve+/vXova++/ve+/vUhvPBw7Kmzvv70i77+9MF3VslBy77+9Zu+/ve+/vTtsae+/vSQ5HmYf77+977+9Wu+/ve+/vQvvv73vv70he++/vUpseO+/vUF/bUB677+9Mu+/vQtAAkYzKjTvv73vv73vv73vv70q0p9Y77+977+977+9dgpQ0pXvv71l77+9WO+/vT/vv73vv70L77+977+9QO+/ve+/ve+/ve+/ve+/vRnvv70T77+9IELvv71LIe+/vSLvv73vv70M77+9We+/vXbvv73vv73vv73PsTI877+977+9AABEQFsb77+977+9L++/vUTvv73VpO+/vQDvv70p5puP77+9y4Pvv70p77+9JlLvv71Nbe+/vVvvv70877+977+977+977+977+9Ij4wHVUk77+9bS3vv70n77+9bTLvv73vv73vv709FULvv71DPu+/vUhz77+977+9R3zvv70w77+977+9Nwjvv70D77+9HCTvv73vv73vv73QmO+/ve+/ve+/ve+/ve+/vXhSSe+/ve+/vQbvv73vv71e77+977+977+977+977+9dGVY77+9De+/ve+/ve+/vQAB77+9Dey+rWvvv70/H1Tvv71777+977+9Qe+/ve+/vTfvv718b2I/77+977+9A++/vQQu77+977+9RENx77+9Ze+/vSdy77+977+977+977+9L++/vWsK77+977+9de+/vVEM07Tvv71Fy5vvv71AYO+/ve+/ve+/ve+/vS/vv73vv70xSzQw77+9RVQX77+977+9TWhg77+9XcOuX++/vScuFe+/vc2O77+9H++/vQxbL3bvv73vv70677+9ECJY77+9Yu+/vVB+Lu+/ve+/ve+/vTfvv70fUe+/vXZR77+9IAAs77+977+9QSw2M++/ve+/vUnvv73vv73vv73vv71/Vu+/vWDvv70pMO+/ve+/ve+/ve+/ve+/vTrvv73vv73vv71CJWkI77+9KXzvv70m77+9WHjvv73vv73vv71+77+9G3bvv70W77+977+977+9SO+/vTLvv70r77+977+977+977+977+977+977+9Zu+/ve+/vVbvv73vv70m77+977+9T++/vU0GZ3gCQNi777+977+9VO+/vSnvv71m77+9bwU1BO+/vXxH77+9Te+/vQPvv73vv71NOWLvv73vv73vv73vv73vv71f77+9LO+/ve+/vQ9C77+9Ie+/vXlKXO+/vV4k77+977+9AALvv73vv71c77+9VU7vv705azE577+9N++/vSbvv70G77+977+9OW5leu+/vXjvv71X77+977+9CShxQu+/ve+/vUTvv73vv70p77+9EFDvv71dZO+/vSrvv73vv71777+977+977+9Oe+/vWHvv71vGNWE77+977+977+9Qu+/vV3vv73vv70tWMmn77+9E++/ve+/vSBq77+92aJ5be+/ve+/ve+/vSDvv70+Z++/vSXvv73vv71AbCPvv70db30b77+9UxPvv73vv70bbu+/vRXvv704ORXvv71S77+9Lynvv73vv73vv71DLEzvv70x77+9MwAAZzl+RETvv73vv71P77+90ZxxByNA77+9IsKP77+977+9cO+/ve+/vQ5maO+/vVoW77+977+977+9Je+/vWUO77+9fO+/ve+/vU3vv70XKk/vv71177+977+9VQPvv73vv70M77+9KhXvv70MBO+/vdy777+9LSzvv70uRnk477+9bhzvv70nGV/vv71x77+977+9a++/vVxg77+9WO+/vR5A77+9Zx0X77+9FBvvv73vv70wPO+/vTREAe+/ve+/ve+/ve+/ve+/vQAVSMebNe+/ve+/ve+/vci+77+977+977+9Z2Vi77+977+9V0Pvv73vv73vv70/77+977+9Ymbvv73vv71c77+9bTBnKVkYa0Yb77+9CDRJA3/vv71OJGhwL1/vv70U77+977+9S3wOCgBP77+9Rm/vv70Icu+/ve+/vWVV77+977+977+977+9Te+/ve+/ve+/vXfvv73vv70LDAbvv71577+977+977+9e++/vSfvv73vv73KoHJC77+977+9FmsCXwdo77+9TVUE77+9xo4AAHXvv71L77+977+9Ke+/vRnZse+/ve+/vRNuQe+/ve+/vRvvv70Q77+977+9Z1EQEe+/vUw6LSbvv73vv70677+9MmEtcQMt77+977+9LiJi1Lwo77+9ITzvv73vv70T77+95aKQae+/vRgCbO+/vVtY77+977+9TiHMnu+/ve+/vU7vv70C77+977+9C1rvv70977+977+977+9exrvv70SAxZ277+9L++/vSFg77+9Mu+/ve+/vVHvv70jbO+/vWw177+977+977+977+9MGnvv70P77+9TAAAHO+/ve+/vU7vv702Yu+/vWzvv71LE++/ve+/vVc2TVDvv71i77+977+9Adyh77+95IGWDXbvv73vv70aYAwnXiErfA9Lbu+/ve+/vTMS77+9Ye+/vQQe77+9Xe+/vR0Fen9aCu+/vd+b77+977+9YyVa77+9cE7vnqHdtO+/ve+/vUw6NG3vv7070rQtHmjvv70OCe+/ve+/vWLvv71877+9KQcD77+9Ku+/vWfvv71y77+9MiITFe+/vSrUlO+/vSDvv73vv73vv73vv71GL++/vQANSO+/ve+/vVZyJlp+ZzXvv71+77+9Cu+/vTDvv73vv73vv73frz5+VO+/ve+/vea2j++/ve+/vW7vv73vv70T77+9G++/vQDvv73vv73vv73vv71OTBkT77+9QB3vv70Z77+9U++/vU59Bhzvv718A++/ve+/ve+/vT4r77+9Pc+677+9yrXvv73vv71HPe+/vXg3O2nvv71RCVtW77+9Ke+/vUTvv70DG++/ve+/vXDvv70Y77+977+9Gu+/ve+/ve+/vRJ577+9Me+/vVYZ77+9Cg3vv73vv70AAALvv73vv71+77+9G0Xvv73vv70377+9YyLvv73Yu++/ve+/vQPvv73vv71rOxPvv73vv71p77+9OTTvv71kRe+/vShE77+9A07vv71MK++/ve+/vWkU77+9cu+/vXRlOe+/vR5Ucu+/vW9p77+9KRJ5Qu+/vT7vv71lVu+/ve+/vceSf++/vRgvPu+/ve+/ve+/vSdESe+/vRTvv73vv70a77+9J++/vSLvv73vv73vv70IZnzdsl59T0/vv70pS++/vR7vv700MW3vv73vv71w77+9AABMdDQTOxpO77+977+9DgsU77+9Q++/vRvvv71XBu+/ve+/ve+/ve+/ve+/vdq777+977+9Fnbvv70S77+977+977+9eFDvv70KyIFfxYjvv73vv70bTe+/vRLvv71CbGHvv70u77+977+9Z++/ve+/ve+/ve+/vXtLdWVsOQhpb++/vU9EdO+/vSRB77+9cO+/vSbvv73vv71ND++/vVfCiO+/vTl777+9Je+/ve+/ve+/vTt5U0Xvv73vv71R77+9Iu+/vcmVVmXvv73vv73vv70rFV3vv73vv71F77+9ddu3AADvv73vv70BZDnvv70Y77+977+977+9Au+/vT7vv71877+9Ru+/ve+/ve+/vRHvv73vv701YlEuQO+/ve+/ve+/vUgN77+9ATjvv70p77+9eO+/vW/vv70tdzIiMu+/vSA677+9e1bvv73vv71i77+9KO+/ve+/vWbvv71+141qBe+/ve+/vVbvv73vv70277+9QDjvv71R77+9Hc2777+9Y++/vS/vv71D77+9ceSjimovZS7Dju+/vWLvv70X77+9UXHvv70m77+9Ne+/ve+/ve+/vS8UGDA9Xu+/ve+/ve+/vQFgAAAxQ3hh77+9Me+/vT3vv73Poy7vv70bc2Fy77+9fEbvv73vv73DvO+/vVJ377+9CRvvv70tTlLvv71EeO+/ve+/ve+/ve+/vTF677+9YO+/vQIpVV930YPvv709RFoN77+9LB0S77+977+977+9Smnvv73vv73vv70o77+92akj77+977+977+9GkwfV++/vUhc77+9Mu+/vVk177+977+9DTBQ77+9Ge+/ve+/vcejVe+/ve+/vWwL77+9Fu+/ve+/vVQZ77+9Ke+/ve+/vVnvv73vv71lZe+/ve+/vUpL77+9J++/vW0AAATvv71fLTPvv71kfu+/vQYRdO+/vVTvv71F3ZMGXe+/ve+/ve+/ve+/vVfvv71FAWwEy7vvv73vv70LS2wYGjzvv73vv71177+977+9ee+/ve+/vTlr77+9UHgCPk3vv70yfu+/vUNLPyXvv70l77+9PO+/ve+/vSNIWxjvv73vv73vv70s3q1ZU++/ve+/ve+/vRVz77+977+9Nhfvv73vv70F77+9HnPvv70F77+9eu+/vVcF77+9Nu+/vd2ALO+/ve+/vWXvv71r77+9FTQV77+9Qn4n77+9SE5HKULvv71f77+9cClM77+9xqAABn3vv71S77+977+9edCM77+9c++/vXZiRQjvv73vv70rVR/vv71577+977+9R13vv73vv70K77+9C0AWL1jvv73vv70i77+977+977+9EjpzH3A677+9wrR3I1Tvv73vv73vv718w7Z977+977+9Q++/ve+/ve+/ve+/ve+/vUDvv73vv70T77+977+977+977+9Gu+/vXvvv70I77+9c38r77+977+977+9RQfvv73vv73vv73vv73vv71nMe+/vS3vv73vv73vv73vv70U77+977+9Ie+/vXbMgn3Hou+/ve+/vXo6Pu+/vTjvv70QAO+/ve+/vcOKYO+/vT9bbGLvv73fsu+/vUZeSe+/vUXvv73vv70X77+9I0Hvv73Uke+/vQJOdQfvv71j77+9SO+/vSQi77+977+977+9Me+/ve+/ve+/vXbvv70VSe+/vS5V77+9Ee+/ve+/vXcgMzDvv709VO+/ve+/ve+/ve+/vXLvv71Ef++/vSTvv73vv71f77+9Vg/vv73vv73buDUjzYHvv71K77+9V3zvv71DPW7vv70e77+9QGzvv70dPu+/vcWR77+9DG1B77+9cu+/vWDvv70M77+9ARMmCO+/vTAAAu+/vTkE77+9TjXvv73vv70WZe+/vQHvv71FBO+/vUPvv71p77+977+9y7ETZknvv70+ZSsGIz1tD++/vRHvv71u77+977+9ZO+/ve+/vVDvv71JDFjvv73vv71yFO+/ve+/vWgI77+9Vu+/vVY/JO+/ve+/ve+/vX7vv73vv73Hse+/vVrvv73vv71L77+9XW1VIsaTA0/vv71j77+9diDvv71HOe+/vXEFbO+/ve+/vV9V77+9xb7vv70IDe+/vUkPJ++/ve+/ve+/ve+/ve+/ve+/vU/vv71077+9NG4N77+9WwzxqKuAAB4fW++/ve+/ve+/vTI9UkEBV++/vU8V77+9Je+/vVbvv73vv73vv73vv71gQlzvv70yHV9sa++/ve+/ve+/ve+/vWNg77+977+977+9Oe+/vT4177+977+977+9Le+/ve+/vTVuyrwS77+9yIbvv73vv73vv73vv73vv73vv71O77+977+9NO+/ve+/vSBSAu+/vUHvv70PNO+/vRfvv71177+977+9LjNG77+9ET7vv73vv70o77+977+977+9KW/vv71X77+977+9Xu+/ve+/vUYA77+9Ie+/vSLvv73vv73vv71l77+977+977+9au+/ve+/ve+/ve+/ve+/vV9V77+9AADvv71hF++/ve+/ve+/vVTvv71Y77+9Ek7vv70NQ++/ve+/ve+/ve+/ve+/vRo2WN+KBe+/ve+/ve+/vVFJf++/ve+/vVd7Wg8p77+9cVXvv70cS++/ve+/ve+/vR9a77+9Te+/vWvvv73vv73vv71A77+977+977+9dlRjHT3vv73Mg++/vQ7vv71Y77+9Pt2iL2Tvv70oe8awfylE77+9C++/vWbvv73vv73vv71877+9Di0i77+9IV7vv70p77+977+977+977+977+9eu+/ve+/vU1H77+9R++/vWQaNO+/vWAABAgqTM+eag1H77+9Tl1B77+9fRPvv711LGtV77+9EO+/vS/vv73vv73vv71uNe+/vSfvv73ZmO+/ve+/ve+/vTXvv70U77+9KAIY77+9e++/ve+/ve+/vRbvv70OQu+/vQXvv70777+977+9a3Xvv70pWe+/vVwRSe+/ve+/vVwUIVbvv70m3rfJhX/vv73vv70MA++/vWDvv73vv71Aee+/veaSlu+/vStW77+9DiAMahHvv73vv73VvSZa77+9Xigd77+92qrvv71Sypzvv73vv71HeVkyPO+/ve+/vVJo77+977+9Dhjvv70/EAAAf2d1zJXvv715Bu+/ve+/vRQN77+977+9HzFV77+9W++/vQfvv73vv73vv73vv71mau+/vTJcV1ZoT++/ve+/vSdbHe+/ve+/vX4B2IdT77+9B8Wh77+9UO+/vWZE77+977+9DTDvv70/77+9dADvv70Ze++/vRrvv71O77+9EUU5Wg3vv73vv717ZAxSHu+/vT4XON6T77+977+9Lu+/ve+/vXFT77+977+9Xu+/ve+/ve+/ve+/ve+/vXRv77+9DDAg77+977+9Q++/vQhIAAA+77+977+977+977+98r2Bru+/vXvvv70A77+977+9ahrvv70777+9UjkFP30277+9eO+/vUHvv71vKTTvv73vv73vv73vv73vv73vv73vv70v77+9T++/ve+/vTjQoOauh++/vUhD77+9Jkbvv71x35s9Fe+/vTZVYEJRSCR277+9dyrvv73vv71eHl5H77+9CO+/vT/vv70yAHnvv704MDXvv70+77+9ZsWEMe+/vUTvv71KHwYN77+977+977+977+9Ve+/ve+/vQzvv71FCO+/ve+/vUV377+9F++/vQAjbBbvv73vv70L77+9Tu+/ve+/ve+/ve+/ve+/vSkz77+977+9Ln4l77+9zJpH77+9Le+/vRHvv711Z++/ve+/vStL77+9yrJ3IltU77+977+9a++/ve+/vQXvv73eve+/vQ9sdDoMQlfXjXTvv71rG++/ve+/vWIJ77+977+9Le+/ve+/ve+/vVPvv71l77+9d9Gy77+9Ie+/vScJH++/vUTvv70w77+977+977+977+9TAM/77+9e3fvv70+77+977+977+977+9eF8y77+9VO+/vVYwUu+/ve+/vT/vv71T77+977+9JO+/vd6NXO+/ve+/vUzvv73vv71677+9AAEY77+9BO+/vSjvv71W84yuqxA4N3cKPe+/ve+/ve+/vVbvv71yIxXcnu+/ve+/vWzvv73vv70GAg4R77+977+9Q2x377+977+9O++/ve+/vXg/77+9S++/vSrvv71YJivvv70p77+977+9Be+/ve+/ve+/vUnvv70P77+9BmxLOe+/ve+/vVBPLC7vv71QYXV2Ie+/vQ3vv71+Nj3vv70677+9RO+/vT3vv713SO+/ve+/vRDvv73vv73vv73vv70AX++/vcuh77+9Pe+/vQrvv707V++/vWNQ77+9KO+/ve+/vQHvv73vv73vv70u77+9VnPvv70AT++/veehu++/vQsgKA3vv73vv73vv70BRe+/ve+/vQls77+9zqbvv73vv71p77+977+9fe+/ve+/ve+/vQInRu+/vVZ+FXXvv71z77+9ES7vv73vv73vv70pISvKoHc277+9c1BAR++/vRHvv73vv73vv73vv73vv73vv73vv70FCO+/ve+/vTMmNe+/ve+/ve+/ve+/vVNM77+9DQ1T77+977+977+977+9PO+/ve+/vXzvv70YK2fvv73vv70177+9Ph5k77+977+977+9Ku+/vTHvv73vv71bbxlISO+/vSzvv73vv70877+9De+/vQAYYe+/ve+/ve+/vciOSlxyPe+/vTRj77+977+9DOyhp0fvv73vv71T77+977+9fu+/vXphMBnvv71fRe+/ve+/ve+/vQVvOjod77+9Xe+/vS8y77+977+977+977+9zotlaRXvv73vv70q77+9aD7vv73vv73vv70g77+977+9YDsv77+9zLQjOUDvv73vv70K77+9LAgc2p1t77+977+9X0Hvv71rD++/vdG0Hu+/ve+/ve+/vUl0CzYIBUDvv70oV2x5YwPvv71vVgAA77+9Du+/vUwb77+9KzY2cwzvv73vv73vv73vv71Ife+/vV7vv71r77+9aioZ77+977+977+9Su+/ve+/vSrvv73vv73vv70S77+977+977+977+9Cgrvv73vv718GQoC77+977+9dO+/vThoZu+/vULvv73vv70oee+/ve+/vRLvv70ZZVHvv71KG++/vTdV77+9dO+/ve+/vVNFOC9wQO+/ve+/ve+/vRQGLx8NS++/ve+/vUQBZnoXRO+/vR/vv70afAt40aLvv73vv70U77+9RO+/vTzvv71TQTDvv70+Iu+/ve+/vV/vv73vv73vv70S77+9AAIW77+9Nu+/vSXfle+/ve+/vWfvv73VoA9C77+9dTZZ77+9Vl0zBGwaLBrvv73vv73vv73vv73vv73vv71ZXe+/vV9R77+977+977+9Exxl77+977+977+9Ae+/vUcF77+977+9Ae+/vS4qNu+/ve+/ve+/vVbSg++/vQ5Dbu+/vQx477+9emUGIXkFP++/vTIsDO+/vUdnNO+/vTrvv73vv70MSO+/vXfvv73vv73vv73vv73vv73vv714Bu+/vTfvv73YpUnvv73vv73vv70q77+9S++/ve+/vTzvv73vv73vv705Tw/vv71q77+9Ju+/ve+/ve+/vVrvv70AAW7vv71h77+977+9SO+/vUDvv73vv70wUE0c77+977+977+9GlHvv70Y77+9Cu+/ve+/vVbvv715bu+/ve+/ve+/vRnvv71TTO+/ve+/vQbvv71HaEbvv70AZtyDFj0hUFbvv70p77+9XQfvv708GV0JBu+/vXkT77+9W++/vVAM77+9Zgzvv71B77+9dO+/ve+/vTwN77+977+977+977+977+977+9be+/vUp477+977+9Ju+/ve+/ve+/vUcLU3A977+977+9PkEmGO+/vQzvv70/BUw5W8aAAADvv71JCldSBT8S77+9Wu+/vTh6Ju+/ve+/vUnvv73vv73vv71kEO+/vRZs77+977+9c++/vTt6I++/vQbvv73vv70+77+9J2Xvv706Ee+/vQbvv70EOUhT77+9bwDvv71fMwAu77+977+9E++/ve+/ve+/ve+/ve+/vSQa77+977+977+9Qu+/vUzvv71o77+9XkhI77+9aEjvv73vv70RFdqb77+9Bhc077+9Ae+/ve+/vXlM77+9AQfvv73vv71NMO+/vWN2bnUWSe+/ve+/vQAFLkFp77+9CFQz77+977+977+9OGFlMe+/vX3vv73vv73vv71WZAQZUu+/vU8HK++/vS5/77+9WjXvv71Fe++/ve+/vSvvv708be+/vTXvv73vv71R77+9XV7vv73vv70E1o5Z77+9Mhjvv71RMO+/vUzvv712Au+/vRpy77+977+9L++/vWp/cwHvv73vv71P77+9alR6CxI777+9VHdQNHbvv73vv73vv70577+9eu+/ve+/ve+/ve+/vXfvv70o77+9OO+/vQPvv71k77+9QduDNA/vv70gG9ugdlPvv73vv73vv73vv70AC++/vSFR77+977+9VSHvv71xFu+/vSlo77+977+9VTrvv73vv70877+91K3vv705PXgB77+977+9dR88Imkx77+977+9Fh9m77+977+977+9L++/vTgT77+9Fy3vv71WF++/vVnvv70JNe+/vVLvv70FyZvvv70NIQppWe+/ve+/vU3vv73XlB5tBDFd77+977+9cXzvv71s77+977+977+9Fyzvv73vv73vv71577+977+9bhwnBlfvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv70pQ0IxLU/vv70ABe+/vTfvv73Rs++/vUAO77+9A0Pvv73vv71D77+977+9C++/vTzvv70OVu+/vVzvv73vv73vv70j77+977+977+9ZSZlWBlE77+9EO+/vVvJhO+/vQ/vv70C77+977+9Ru+/vT57Je+/vSjvv73vv70VPXU/FhdsRnjvv73vv71NCe+/vTEq77+977+977+9Fu+/vWEXOm/vv71KL3Fj77+9UlES77+977+977+9Y9S3HXbvv70lPTVYASnvv70T77+9ZO+/vUd+KO+/vR9oL0Xvv73vv71877+977+9Y++/ve+/vUrvv73vv70ATjXvv73vv71D77+977+9f8KY77+9Kgzvv73vv73vv71jHu+/ve+/vUTvv70F77+9ae+/vU5U77+977+9Fxbvv73vv73vv71+TO+/vcuQ77+9WwJLFV/vv70TGzrvv70jJwzvv716UO+/vUE277+977+977+9KX7vv73vv70QxZrvv71F77+977+977+9LO+/vWnvv70m77+977+977+9MO+/vSshJxHvv70fMO+/vQ8K77+9AO+/ve+/ve+/vQrvv71zZSIx77+977+977+9Ce+/vSxQZN+b77+977+9RxtDUu+/ve+/vQAA77+977+977+9QFsn77+9Chzvv71NDtKqWnLvv70S77+9PO+/vS8c77+977+977+977+977+9BO+/vXNcdWl9UUseLO+/ve+/ve+/vXvvv73vv73vv71877+977+977+9Uu+/vUtMRQZ+Te+/vRsk77+977+977+9O++/vSkz77+977+977+977+9VGVWYBLvv73vv710Lu+/vQYkAu+/ve+/ve+/vVTvv71JB++/vSnvv73vv73vv70877+977+9Y++/vXHvv70W77+9bVxR77+977+977+9cXsT77+977+9Ie+/vQAAe++/ve+/ve+/ve+/ve+/ve+/vTfvv70ie++/vQgu77+9CEtRXkEzGu+/vVXvv71V77+977+977+977+9Ke+/vWfvv70pMCNj77+977eFJe+/vd6Dfu+/ve+/vUEC77+977+977+977+9Al1X77+9YwFk77+977+9DAACeFUbbu+/ve+/ve+/vX/vv73vv73vv70gfe+/ve+/ve+/ve+/vRwfdgXvv73vv70f77+977+977+9NEYz77+9Y++/vT/vv73vv70Y77+9Dk8RVO+/vXRi77+9LBHVlgs/77+9Vu+/vRlTfRTvv70BJj7vv70y77+9cO+/ve+/vQ4lbe+/vUbvv70N3aNiFSnvv70mFm/vv73vv73vv70uGd6xb1t677+9Lxzvv73vv70tO++/vR5g77+977+977+9Fe+/ve+/vRrvv71BABQl77+977+9AO+/ve+/ve+/vTJhfW7Eo++/vSrvv73vv704ZGnvv70fVu+/ve+/vV9ZBiYJ77+9DW5577+9IkE+77+977+9R++/vT3Fux1yJe+/vWVE77+977+9GO+/ve+/ve+/vUzvv73vv700Oe+/vQARFHDvv73vv73vv70L77+977+977+977+9ZmPvv73vv73vv73vv73vv71S77+9SwPvv73vv71177+9DX/vv71B77+9JO+/ve+/vQUq77+92KZ177+977+9Mu+/vWx677+9Smzvv73vv706b++/ve+/vUFC77+977+9L8mjH39Pbu+/ve+/vSXvv71R77+9Se+/ve+/vUbvv73vv70q77+9Z++/vTbvv71ZF1vvv70ST++/vWzvv70J77+977+9PdesOF/vv71NKHfvv70q77+977+977+9BUwoUw3GsSHvv70077+977+977+9dkAADWox77+93IILCGzvv73vv71t77+9FWVpQ++/vVDvv73vv73vv73NjnUu14bvv73vv70BaO+/vWZa77+977+977+977+9y6REYO+/vTxaE++/vT9DC9a/77+977+977+977+977+9NO+/vV7Dte+/vTPvv73vv71Z15pS77+9LnHvv73vv73vv73vv71E77+9a++/vQU577+9cO+/ve+/ve+/vSPvv70L77+9Ae+/ve+/ve+/vRfNrUBWVAFg77+9Uh3vv71DBAgE77+9KhMlNO+/ve+/ve+/vUvvv73vv73vv73vv71k77+9L++/vRXvv70AOe+/vdSSYu+/ve+/vRDvv73vv70eJe+/vRXvv71077+9Te+/vcyu77+9RT/Mve+/vdKz77+9eDnvv70b77+9RO+/vW/DoO+/veuvlRh6dO+/ve+/ve+/ve+/vVIuTO+/vTYR77+9aBXvv73vv71tGmPvv73vv70w77+9Jz4u77+977+9He+/vQXvv71e77+9PgXvv73vv70IMCo477+9QWHvv70U77+977+977+9M++/ve+/vTc/ZO+/ve+/ve+/vQPvv73vv73vv71oSWBUPHrvv73vv73vv71hHu+/vQjvv71k77+977+9QHzvv70pKu+/ve+/vWE077+9X3zvv73vv70ACwnvv71l77+9MO+/vU8m77+977+9Ku+/vc6N77+977+9P++/ve+/vTsMUu+/ve+/ve+/ve+/ve+/vXdJ77+9YUbvv73vv73vv70Kf++/vSJD77+977+91Yfvv70DezBzNW1yI++/vTjvv73vv73vv70K77+9Nhzvv73vv70BD3U2JO+/vVEj77+977+9C++/vW0B77+9eXJe2Invv73vv71i77+9Vu+/ve+/ve+/vSvvv73Rte+/vdmPVD9E77+9Mkog77+9Ve+/vU1EFxbvv706MyYl77+9cTk1CjVi77+9dgQ7N++/vT/vv705B++/ve+/vQAAHUE377+977+977+977+925gE77+9KNWheu+/vScq77+977+9cO+/vR3vv71277+9SXHvv73vv71sMQEBLRDvv71RWe+/vWfvv70eeELvv70U77+9Dik90KlLKe+/vTgm77+9Xe+/ve+/ve+/ve+/ve+/vUFqCCnFjlbvv70FD3N877+9XCxDUWTvv73vv73vv73vv71QN0fvv73vv73vv73vv70tZQU277+977+977+9Y++/ve+/vc+VbO+/ve+/vX9O77+977+977+977+977+9blvvv70gCe+/vSZO77+977+977+9Tjrvv70ABlYR77+9SnQV77+977+977+9Ch3vv70o77+9Xu+/ve+/ve+/vWDbk++/ve+/ve+/ve+/vRnvv71K77+977+9Klvvv70q77+9B++/ve+/vSrvv70d77+9P++/ve+/vXkzDe+/vR7vv70FcXsh77+977+9R1Nh77+977+977+977+9ce+/vU7vv70GGe+/ve+/vWjvv71zTO+/ve+/vVwvCy5YFBA6SjHvv70J77+977+977+9Zu+/vRrvv73vv73vv70c77+9Ae+/vWXvv70F77+9WO+/vV8R77+9Bu+/ve+/vUAnEAAJce+/ve+/ve+/vWbvv71LY++/vS3OmlJ977+977+9BF0QdXsyBzvMiO+/vXVZFe+/ve+/vTjvv71tF++/vV9bc++/vRVyRGPvv70C77+9d07vv73vv71s77+977+9dHQgMu+/ve+/vRHvv70OL++/vQzvv71pFu+/ve+/vWPvv712RO+/ve+/vUYBUhPvv70MOVUuau+/vV/vv71dBe+/vWEh77+977+977+905vvv70ZS++/ve+/vUdq77+977+977+977+9Be+/ve+/ve+/vXZ0LgoZ77+9bO+/vV/vv73vv70Z77+9AABVK0Tvv70HczBQ77+9MTDvv71d77+977+9SQrvv73vv73PjCsRE++/vSMLJgNc77+977+9fU7vv73vv73vv70Y77+977+9ce+/ve+/vdiz77+9Lw4S77+9bO+/vVvvv73vv71q77+977+977+977+9Qyjvv73vv73JrFvvv73vv71T77+977+92YgcD3Mh77+977+9c0oCK++/vTTvv706LCbvv73Crxnvv73vv73vv73Qo++/ve+/ve+/vUIs77+977+9RO+/vVIzYe+/vRdhMlt/77+9aO+/ve+/ve+/ve+/vWrvv71Uz7zvv70DMe+/vXNAAEPvv73vv71377+977+9SSVI77+977+977+9yIvvv71177+9VO+/vW4877+9WzokO++/vWNbSk8n77+977+977+977+977+9ae+/vXTvv73vv73vv71Z77+9R8+M77+9Mu+/vSLKoe+/vTzvv70eZe+/vUXvv70kOO+/vSzvv73vv70d77+9aktT77+9UDx3N++/ve+/ve+/vXxOZO+/ve+/vSp9GWgM77+977+9Ne+/ve+/vV3vv73vv71yPe+/ve+/vUAgHnFV77+977+9LRpS77+9JhtG77+9We+/ve+/ve+/vdmNMiAAMwA2AQnVlh5c77+977+9M++/ve+/ve+/ve+/vVfvv70mKmkS77+9bw0BRRvvv714Ae+/vX3vv73vv73vv710Je+/ve+/vUNm77+9Wu+/vRhu77+9NVbvv73Pn0Xvv71Abu+/ve+/ve+/vShg77+977+9I03vv70O77+9VQ1AWTjvv73vv71Obk5m77+9XO+/ve+/vXJe77+9dTAU77+9xbxoBO+/vVta77+977+9H0Ar77+9Z++/vVZq77+9OO+/vTkzHDtp77+977+977+9NkAA77+977+977+977+9M2d177+9d37vv73vv71D77+977+9V3dj1Ifvv71aPQHvv73vv73vv73vv73vv71z77+9Ee+/vRA+77+977+9ey9WcgYRd1rvv71XcO+/ve+/ve+/ve+/vUXvv73vv718JlPvv70yIO+/vX8G77+9NDDvv73epO+/ve+/vXrvv71677+977+9LO+/ve+/ve+/vcaHRO+/ve+/vQnvv73vv73vv73vv71l77+977+977+977+9bTLvv73vv73vv73vv73vv73vv70ieu+/vXnvv71N77+9JMSILe+/vceKDu+/vQjvv70AAO+/vWrvv70Z37Dvv73Imu+/ve+/ve+/ve+/vRQxX0Hvv71cVAwhLu+/vTZ9Du+/vTfvv71CJzcoNFU077+9LQ1LHj11wrYd77+9EzDvv73vv73vv73vv70IWFjvv73vv73Rh++/ve+/vciYDO+/vSJHVO+/ve+/vWVzHh5SQmDvv70U77+9Pe+/ve+/vXI277+977+9ae+/ve+/vXUx77+977+977+977+9OT5JfDTvv70J77+977+977+977+977+9SBhONu+/vQkP77+9YAAL77+977+977+9RH3vv70Z77+977+977+977+977+977+9b++/vWbvv70SAeWcj++/vTnvv70P77+977+977+9UR3vv73vv70e77+9EFXvv71g77+9Yu+/vU8277+9fu+/vWDvv71A77+9EgtjDu+/vUDvv73vv71S77+9Re+/vUgFejLvv71o3q0HLu+/ve+/vVHvv70m77+9Hnvvv71ONx8qGTXvv73vv70/77+977+977+9ee+/vUQ2Ohfvv71077+977+977+977+977+9E0bvv71M77+977+977+9Ne+/ve+/vXEAAGTvv73vv70E77+977+977+977+977+977+9Ku+/vRQV3Zjvv71177+977+977+977+9GO+/vQAl77+977+9Bu+/vVHvv70o77+9XB8VVkXSssa1YO+/vS3vv70V77+9RnNcWBnvkK/vv70x77+977+9TW9idSE277+9Ou+/ve+/ve+/ve+/ve+/vRFs77+9XTbvv73vv73vv73vv73vv70sTe+/vVl777+9ae+/ve+/ve+/ve+/ve+/vRxFCwnvv73Xr2UdHe+/vXvvv71nGGDvv71w77+977+977+977+9Ru+/vXFp77+9Um7vv71G77+977+977+9MO+/vQAAJO+/ve+/vSXvv70rdEDvv70977+9ZQQ5JO+/ve+/ve+/vTwwbXnvv707IwTvv73vv73vv73vv73vv70C77+9Fe+/vUl/QO+/vTFw77+977+9D3VJc++/vdSm77+977+977+9RUw677+9fe+/ve+/vQ1PIu+/ve+/ve+/vQUK77+9Py/vv73vv719fe+/ve+/vTcXYTMlUGXvv70Mdu+/ve+/vQcPeTkyZu+/ve+/vXbvv73vv73vv70r77+977+977+9eh5Obe+/ve+/ve+/vVvvv71u77+9WO+/ve+/vTJCOu+/vRPvv70AD++/vV7vv71Uacap77+977+9bwU977+9Ag5k77+9TO+/ve+/ve+/vV/vv73vv73vv70ib++/ve+/ve+/vVfvv70V77+9OO+/ve+/vVxeZu+/ve+/vXcmXs6977+977+977+977+977+977+977+9fu+/vRXvv71sfHvvv73vv73ZuWfDtxbvv73vv73vv71CJV9Ud++/ve+/vXJIXzN0Oe+/vTIC77+977+9DO+/ve+/ve+/vQ3vv70g77+9MVnvv73vv71ucTcUf++/ve+/vQTvv706ez3vv73vv71G77+9P03vv71UOe+/ve+/vWFXzYjvv73vv73St++/vUg/VwUb77+977+9Me+/vRrvv73vv70Y77+9Wlh0NHUsxJnNgABQ77+91aXvv71Q77+977+977+9GMeWE1cl77+977+9Le+/ve+/ve+/ve+/ve+/vXPvv71kaO+/vR8C77+9UFLJpjcr77+977+9KmLvv71sCe+/ve+/vSHvv73vv71D77+9TRHvv73vv70P77+9W++/ve+/vX3vv73vv71O77+9A++/vUPvv71fNu+/ve+/vR1q77+9BtKIVyVi77+977+9dO+/ve+/vR/vv71977+9BO+/vdOyTzPvv73vv70EXUpPU++/vSzZpO+/vUFAShhmz6R677+977+9J++/vT9P77+977+9NTgCPlhr77+977+977+977+977+9Y++/vTQY77+9AAHvv71i77+977+977+9Ou+/ve+/vWJXLe+/ve+/vTdPdO+/vStRBiUp77+9JO+/vQNrPtGe77+9Fe+/vSlGWj4C77+9OTPvv70OTe+/vQnvv70N77+9E3Lvv73vv70GKu+/vVzvv73vv71y77+977+977+9S++/vU7evxjvv70HJWTvv70277+977+977+977+977+9Re+/vSLvv73vv70w77+977+977+91oPvv73vv70T2Jfvv73vv73vv73vv73vv70V77+9MCHvv73vv700KTV9AwDvv71xWiNCfe+/vS4yH3bvv70AABjvv71277+9xIoIH++/ve+/vSvvv73vv73vv70GPFgG77+9cVLvv73vv73vv73vv70nOwXvv70ZQe+/ve+/vUPvv70w77+977+9UFsj77+977+977+9JXPvv71K77+9Si7vv73vv70aJRrvv73vv71677+9Ne+/ve+/vcm/77+9TS1m77+977+977+9Lu+/vTfvv73MonXvv73vv70OHkskGk/YgTgm77+9LCEcdSTvv70cGO+/vUzvv73vv71PXTpcY++/vQMz77+977+977+9aO+/vXsSOu+/ve+/vTfvv71W2apD3LsY77+977+9TRV377+9AiMz77+9ES1I77+905xC77+977+9DdKH77+977+9XCnvv70UAAHvv73vv73vv71j77+9Lu+/vXLvv73vv71vaALWtybvv71M77+977+9ACfvv70h77+977+9RQ1a77+977+977+9NW/vv73vv70BYO+/ve+/ve+/vWnvv73vv71xL++/ve+/vUkXwo0/JO+/vR5B77+977+9YO+/ve+/ve+/vWPvv71W77+9KO+/vTfvv70s77+9de+/vRjvv70l77+9ZFnvv73vv73vv73vv73vv73vv73vv70s77+977+9IO+/vS3vv712C++/vS09MAzvv73vv73QvkAPTO+/ve+/vRNV77+977+9ZBdEJe+/ve+/ve+/vQTvv73vv73vv73vv73vv71p77+9IR0G77+9YAML77+9S07vv700Ne+/vRjvv73vv70vDu+/ve+/ve+/ve+/ve+/vRXvv71QZu+/vX3VtTZODO+/vWvPou+/ve+/vRLZh++/ve+/ve+/ve+/vW4CcgLvv71mL++/ve+/vV7vv70HFO+/vS4H77+977+9bu+/vXxz77+9M2hX77+9PEpJ77+9Gu+/vSwAAClzB3Xvv71l77+9f++/ve+/vQsS77+9BO+/ve+/ve+/vTfvv70+77+9Pu+/ve+/vXfvv73vv704Ne+/vUQsXO+/ve+/ve+/vQbvv71G77+977+9FVTvv70c77+977+977+9MCcZ77+977+9We+/ve+/ve+/ve+/ve+/vWnvv71oDn9777+9ybbvv71t77+9Te+/ve+/ve+/vcir77+977+977+9b++/ve+/vRvIr++/ve+/vSUj77+977+977+9YyBj77+977+9d++/vWc/77+9f+KrplchQjMn77+9Yg9l77+977+977+9L++/vTI477+977+977+9DWHvv70uGQ00Ie+/ve+/vUAG77+9F++/vSnvv70877+9NE4b77+977+977+9Pu+/vX7vv73vv73vv71UbmQmYRzvv70X77+977+977+9ZGjvv73vv71L77+9BVRMAVdHbG8/dxZAc++/ve+/vSzvv71477+977+9F++/ve+/ve+/vRbvv717RXBab++/vQTvv73vv70r77+9Yu+/ve+/vQ0sL++/ve+/ve+/ve+/ve+/vd+l77+9DO+/ve+/vXcU77+9Vw7vv703Ie+/vULvv70U77+977+977+977+977+977+977+93Y0FZNKUG3zvv73vv71hHW3EkjQsAlAAAO+/ve+/ve+/ve+/vU8NW++/vW/vv73vv73vv73vv71z77+9Pu+/vVfvv70e77+977+977+9JFHvv73vv71mOu+/vVLvv73Jv++/vXcz77+977+9OkPIu0ZeZO+/ve+/ve+/ve+/vS3vv73vv73vv706K9KY77+977+9fO+/ve+/ve+/ve+/vR3vv71lIu+/ve+/ve+/vVDvv71id3kV77+9EWrvv70YXyUt77+9X0rvv73vv70kM++/ve+/vREB77+9LO+/vW7vv71+WHDvv73vv73vv73vv70bSO+/ve+/vQpPe++/ve+/vR4z77+9T++/ve+/vWYmUBHvv70CYu+/vdKLKDnvv70rEO+/ve+/ve+/ve+/vTvvv73epu+/ve+/vT12Mu+/vVzvv73vv73vv73UigTvv710VQtN77+977+977+977+977+9J++/ve+/vXzvv73Tge+/vTbvv70SV++/vUEOANi777+9Fg/vv73vv70q77+93qLvv71FGE3vv71NwrYvEUXvv71yNl02Ue+/ve+/ve+/vTcSUu+/vUZ5XF7vv73vv73vv70S77+977+977+977+977+9Fu+/vVI577+977+9ZFbvv70sQO+/vWsY77+9M++/ve+/vRjvv71fyJXXm1vvv71W77+9QxYiau+/ve+/vQVzfe+/vQJi77+9bhPvv71KRe+/vVrvv70w77+9MGJQ77+977+9dO+/ve+/vX0I0Invv73vv71777+977+9X3AACe+/ve+/ve+/vVQy77+977+9fAtEBQts77+977+9TO+/vWbvv73vv73vv70Y77+9de+/vWIncyZQPADvv73vv73vv70i77+977+9WFPvv73vv73vv70O77+977+977+9VjXvv73vv73vv70k77+977+9He+/vdy177+977+977+977+977+977+9H++/vVXvv71ydn3vv73vv71677+9NjYs77+9e0bvv73vv73vv71977+9Gu+/vXBO77+977+9Oe+/vRXvv73vv73vv73vv70YLwluzIga77+9Ve+/vSrvv71fRiLvv73vv70OGzFIfO+/vVZgNO+/vTTvv70R77+9Ru+/vSJK77+977+977+9YwYuzZ/vv71/RO+/vVgMJO+/ve+/ve+/vcSEcXR2cSkh77+977+977+977+9Fzx8OTh+AD9EIu+/ve+/ve+/ve+/ve+/ve+/vRPvv73vv73vv71u77+977+9dO+/ve+/ve+/ve+/vSjvv73vv73qnZgE77+9Fe+/vW0q77+977+9ee+/ve+/ve+/vVULUOy6uzAUe3kwfu+/ve+/vUzvv71YbO+/vXlOPhpE77+977+9cWTvv73ThSkvckMpBgDvv71D77+977+977+9Yh99N++/ve+/veKuq0daP2BOy6fvv73vv73vv73vv70v77+977+9Ylfvv73vv70VMe+/vQAA77+977+977+977+977+9Zu+/ve+/ve+/vRVS77+977+977+9RW/vv71r77+977+977+9zphqxrR8au+/vVDvv73vv73vv714xp3vv70cdTHvv71a77+977+9WUfvv70t77+9Vu+/vVXChe+/ve+/ve+/ve+/vTrvv71pHO+/vQhtKSjvv70eQiwfV++/vWvvv707FNWsPe+/vVHvv73vv71W77+977+9Nu+/ve+/vdq4D++/vS7vv73vv73vv73vv70T77+9Zu+/ve+/vTvvv71s77+977+9Qkvvv70v77+977+977+9Z++/vQ7vv73vv70G77+90Yzvv73vv73vv73vv71Qf++/vUnvv73vv717e++/vWbvv73vv73vv73vv73DgAUn77+977+9Ge+/ve+/ve+/ve+/vTtL77+977+977+9He+/vS5177+9e2/vv71+Yl/vv73vv706XRhRbO+/ve+/vQLvv73vv73vv73vv73vv73vv73vv71B77+977+977+9Gw0Uee+/vXtNb++/ve+/vQ8r77+977+977+9AxRm77+9HXPJju+/vTQ777+977+9b++/vWvvv704Ae+/vUXvv73vv73vv73vv70h77+977+977+9M++/vW/vv73vv71E77+9AFzvv71gAGdrRO+/vWnvv70F77+9OQRUQVsz77+977+9ei4c77+977+9Pi3vv70DL1puK++/ve+/ve+/ve+/ve+/ve+/ve+/vWQOQO+/ve+/ve+/vSHvv70P77+9TnNf77+977+9SVDvv73vv70CC1IHc++/ve+/vWfvv71lOO+/ve+/vdCXdu+/vU7vv73vv73vv73vv71p77+9AARs77+9WyBtBmDvv73vv73vv70Q25J777+977+9DVYWfu+/vXgBG++/ve+/ve+/vS/vv71oAO+/ve+/ve+/vSBKNhfvv71P77+977+9K++/ve+/ve+/ve+/vX8I77+9O++/ve+/vTLvv70877+9Ee+/vVgm77+9Du+/ve+/ve+/vRfvv73vv73vv73vv70J77+9Ue+/ve+/ve+/ve+/ve+/vR4YTe+/vRLvv71vCTdU77+9Bibvv73vv70HNGXvv73vv73vv73vv71+Re+/vX5Z77+9T++/vR9ubyvvv71y77+977+977+9XmDvv73vv71mc++/ve+/vVlK77+9Su+/vRQZJlXvv73Luu+/ve+/vQbvv71fB0fvv71d77+977+9K++/vQwLW++/ve+/ve+/vVNEQmTvv73vv70P77+90pTeme+/ve+/vUdwfO+/vU8S77+977+977+977+9Re+/ve+/vUnvv73vv73vv71MfjDvv73vv71977+9bjZ377+9ChR0GV4e77+9eDUqVAtaSybvv73vv73vv73vv73vv73vv715O9avf0BTeWRr77+9elRK77+977+977+9B1bvv70cQjfvv73vv73vv73vv70777+977+9Tu+/ve+/ve+/vWDvv73vv73vv71X77+9R++/vR4a77+977+977+9GAxW77+9JO+/ve+/vTrvv70xWQ7vv70W77+977+9MXDvv71o77+9BO+/vWLEv++/ve+/vVTvv70MODHvv73vv70977+9XgPvv71pH++/veyQmO+/vVXvv71EK++/vVsnxpdZSAATQnjvv70H77+977+977+9Wu+/vUXFphrvv70k77+9f++/ve+/vSTvv71cNFbvv73jv5Pvv73vv73vv71B77+9XTA8JhxA77+9yrkyJVlaGCrvv70677+977+9dmjvv70LKe+/vQ9sF20rdAfSqwtF77+9Kwnvv711cAI1aVLvv71MNu+/vSIn77+9Mu+/ve+/vWXvv73vv71fOXN777+977+977+977+9dEJOftG0xpZMbjvvv73vv70VNu+/vXHvv73vv73vv73vv73vv73vv73vv73vv73vv71877+9Wtm077+9FnDvv73vv73vv73vv70177+9CTfvv73vv73vv71nS1s1Ae+/vQrvv71O77+9cBHvv71FMO+/vXfvv70W77+977+977+977+9IQTvv73vv71977+977+9eO+/ve+/vTzvv71p77+977+977+977+977+97o+g77+977+977+977+9b++/ve+/ve+/ve+/ve+/ve+/vTHvv70R77+977+97qi9Xu+/vSvvv73vv73vv73vv71YTMKx77+9AHrvv71xEO+/vV9z77+977+9emYv77+977+9ae+/ve+/ve+/vVZRSi9d77+9YgDvv70ZNlpt77+9Ce+/vSFhFk3vv70r77+9De+/vXPvv71bTUc877+977+9Pe+/ve+/vWLvv70R77+977+977+977+9WGbvv73vv73vv70S77+9AnI777+9Qe+/ve+/ve+/vQILGe+/vUTvv704NO+/vVbvv70DQXAB77+9Bu+/ve+/vRQe77+977+977+977+9T++/vW8zMO+/ve+/vQp677+977+977+977+9XO+/ve+/ve+/vQvvv70b37wd77+9wqrvv73vv73vv70G77+9NTnvv71gMibvv71U666cLinvv73vv70Ad++/ve+/vX7vv71x77+977+977+977+977+9NhLvv73vv73vv73vv71m77+977+9wqE/77+977+977+977+9ZO+/vQZQOe+/vXPPrEXvv73vv70mX++/vWbvv71H77+9f07vv73vv73vv73vv73Rs++/vVQ9ajhX0a7vv70QDu+/vUUP77+9PjXIo27vv70F77+9e++/vXUUW3Hvv71877+977+977+9PgBD1a4i77+9FHvvv73vv71bH++/ve+/vWzvv71OfGHvv71JAnrvv73vv70q77+977+9aO+/vRd4V2zvv73vv73vv71mZu+/vQ1VE++/vc6aXO+/vULvv73Phhrvv71TR2Xvv73vv71c77+9Gu+/vQAM77+9Enrvv73vv71V77+9HDrvv71kBu+/ve+/vTNi77+9UkgXNO+/ve+/ve+/ve+/ve+/vUPvv705WO+/ve+/vRcMHCLvv71+GDDvv70fQu+/vTXvv73vv70q77+9bu+/ve+/vWssd++/vXPvv70hKh1IVe+/ve+/ve+/vWQQcu+/vQc7Z++/vUw7E++/ve+/vVcL77+977+9WRAhaO+/ve+/ve+/ve+/vX7vv73vv73vv73vv71k77+977+977+9ce+/vQXvv71oJO+/vSJH77+9Y++/ve+/vVAOIu+/ve+/ve+/vRJ077+9VUwkfTwnN1Xvv73Wlu+/vRJOX++/vXZv77+90Yzvv71oNu+/vXbvv73vv70m77+977+977+9NGjvv70xXzB4QO+/vdCi77+977+9Ve+/vRFgYSjvv73vv73vv70d77+977+9N++/vTDvv70WelU/PwDvv70oSRUX77+977+977+9WO+/ve+/vVFp77+9d17Mlu+/vXZkKy4k77+977+9JkMmfu+/ve+/vQrvv71W77+9XzdAD++/ve+/vQLvv73vv71H77+9XO+/vTtgTx0LSu+/vQsyaEsyBHDvv73vv70777+977+9UO+/ve+/vdyQSO+/vX0Y77+9Vu+/vWE42LVC77+977+9Wu+/vem8jCZXCh52ce+/ve+/vWVkSe+/vX1nRu+/ve+/vTbvv73vv70/UO+/ve+/vQQn77+9O++/ve+/vSVd77+9D++/vV3Eh0Ae77+9O++/ve+/vR0oDO+/vTHvv71K77+9xYjvv70XVxbvv73vv73vv71y77+9Qu+/ve+/vUl6T++/vTVQFu+/ve+/ve+/vWQAdll1WC43ZnXvv70I77+977+9bBDvv71Cdu+/ve+/vQvvv73vv71C77+977+977+977+977+9M0A3xoB777+9Aifvv70i77+9RRFkN++/vWPvv70MAE4877+9MlPvv719IEAR77+977+9Le+/ve+/vTxn77+9XO+/vX4USkZyVe+/vSlz77+977+9xIsm77+9dO+/ve+/ve+/ve+/vQnvv70+B++/vdCGbCQgP2gFBu+/vXvvv73vv70377+9be+/ve+/ve+/vQbvv73vv70j77+9C++/vVLvv71i77+977+9TnR977+977+9XgLvv71uFe+/vR4CL++/vW4dau+/vQvvv71I77+977+977+90I4w77+977+977+977+9yobvv73vv73vv70j77+9WH9DUHJHEVNGw6RxNe+/vUPvv73vv73vv70M77+977+9YEB3DDp7biBt77+9NnBR77+977+9ZO+/ve+/vTfvv73vv73vv71WL3Hvv73vv71677+9We+/vXgb36A5Ue+/ve+/ve+/ve+/ve+/vWQHaO+/ve+/vWkWKe+/vSAY77+977+977+9Tu+/vU9S77+977+9x5rNjO+/vVVq77+977+977+91L5Hf++/ve+/ve+/ve+/ve+/vQAS77+977+977+9E++/vS/vv71vNu+/vXbvv71rRO+/ve+/vS3vv71+De+/ve+/vUXvv712WO+/ve+/vXNv77+9DGYl77+9W++/vWfvv73vv73vv73vv70e77+9E++/ve+/vRfvv71L77+9cu+/ve+/ve+/ve+/vVTvv73vv73vv70J77+9fe+/ve+/ve+/ve+/ve+/ve+/vUonMFpm77+9ce+/ve+/vQTvv73vv73vv73vv73vv73vv73vv71OWz3vv70F77+977+9FHDvv71TCB/vv73vv71v77+9JO+/vR/CkQR3CO+/vTrvv73vv73vv70K77+977+9agvvv73vv71zewxF77+977+977+977+9HO+/vRXvv71PWzo8OVvvv73vv70677+9XO+/ve+/ve+/vTTvv73vv73vv73vv71AAu+/ve+/vXR/77+9QWfVpu+/vXfvv73vv714ddaEzpVe77+9H++/vWXvv73vv71iMe+/vTbvv70377+977+9JVjvv71J77+9MX3vv70wLe+/vRZr77+977+977+9e++/vSLLoUHvv71977+977+9Yu+/vRDvv71cKgZna++/vRtf0ZTvv73Jpu+/vR1B77+977+9eu+/vTIy77+9MTbvv71o77+977+977+977+9X3RYc27vv73vv70I77+9Ae+/ve+/vWZSEO+/vVlb77+977+977+9PHBSXyDvv73vv70QJvKAjo3vv71B77+9GO+/ve+/vWbvv70NCibvv70MIwbvv73vv70l77+9EXrvv73vv70MLkrvv73vv70qYizvv71j77+9cee1tu+/ve+/ve+/vVDvv73vv70SJTFt77+977+9O0hb77+977+9cms2Ke+/vT1oUC7vv71A77+9Fu+/vUzvv70037BY77+977+9Bu+/ve+/vS7vv73vv70KL++/ve+/vRPvv73Xhg7vv73vv73vv73vv71jbUBI77+9MkXvv70rBCvvv73vv71O77+977+977+9Z++/ve+/ve+/vRzvv73plqV277+9PkBhNu+/vU3vv70477+9Mww377+9P8Ka3bAAUX7vv73vv70v77+9GU5BWO+/vUVYSe+/ve+/vWBH77+9EO+/vUI5LO+/ve+/ve+/ve+/ve+/vTIcFG7vv73vv71P77+9aT7vv71iLe+/ve+/vSPvv71ZCu+/ve+/ve+/ve+/vXA8K++/ve+/ve+/vSPvv70DS++/vVfvv71LET1VRO+/ve+/ve+/vTxX77+9KO+/ve+/vQsoFgpPcO+/ve+/vVoF77+9Nixse++/vXcXP++/vSvvv73OsO+/vX7vv716Hynvv71AGe+/vQDvv73Gke+/ve+/vXfvv73vv70977+9UxE7S++/vR3vv70j77+9f++/vRBn77+9T8myyqVNy6Xvv70H77+977+977+9WO+/vXF777+9ybUn77+9PxPvv71Z77+977+9AO+/ve+/vWZ477+9YO+/vScSfu+/vWTvv70J77+9RxLvv73vv73vv73vv70XGO+/vVzvv71477+9zpV1G8SrLu+/vX7vv73vv70dLBnvv71i77+9OGPvv73vv700KCrvv703Qknvv73vv73vv73vv71gHu+/vXjvv71sPe+/vVsJ77+9CnEjb++/ve+/vRXvv73ci++/vTHvv73PrG3vv73vv73vv73vv70bPlcV77+977+9Ge+/ve+/vci277+9dg9H77+9XzXvv71kKe+/ve+/vWrvv73vv73vv73vv71u77+977+9IUTfke+/vRJFEO+/ve+/vSx477+9X++/ve+/vQ7vv73vv73vv70HNO+/ve+/ve+/vdaaWjzvv73vv71bZO+/ve+/vXhNNz5a77+977+977+9GgLRmxbvv73vv70m77+977+977+9S3gs77+977+9CO+/vU7vv73Slu+/ve+/vThPEu+/vQ4PGU3vv711CzA/aRhMZQjvv73vv73vv73vv71+dWpe77+9F++/vTsVUj9177+977+9Ny8j77+9w4Dvv70EGO+/vRld77+9X++/ve+/vcKVKnfvv70P77+977+9EXnvv71D77+977+9Cu+/vXBe77+977+977+9aO+/vQLvv73vv70cAX7vv73vv73Jrs6PDdasQ++/ve+/ve+/ve+/ve+/ve+/vW4F77+9We+/ve+/vWo077+9z5UAxIElVyXvv71J77+9aFLvv71r77+977+977+977+9Lu+/ve+/vWfvv71bOQXvv705Fjzvv70c77+9ce+/ve+/vU3vv71gFgPvv73vv71GBGTvv70oKRDvv700He+/vc2ER++/vU3vv73vv73vv70777+9fO+/vV/vv70gcO+/ve+/vSA3LzFWBO+/vTHvv71H77+9De+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vUnvv70c77+977+9T++/vTfvv71rNjpz77+9TO+/ve+/vVjvv73vv73vv71NJu+/ve+/ve+/vRrvv73vv70OQH08FxJS77+977+9aT8V77+977+9FzHvv71qfu+/vSdDblklbO+/ve+/vUIuQ++/ve+/vSQFDO+/vRnvv70+fScI77+9a++/vQTvv70JFu+/vWbvv73vv71B77+9Ku+/ve+/vW0WUm7vv73Ug++/vQRs77+9NDPHtu+/ve+/vWXvv70dc++/vTB/ay0PIVQ3Gu+/ve+/vQ1HSe+/vQPvv73vv70n77+9Qu+/ve+/ve+/ve+/vQcKRk7vv73vv70rAiULe3RyHjjvv73vv73vv71S77+9AO+/vVUq77+977+9E0Xvv73vv70677+977+977+977+977+977+9A1Lvv71lF++/vVljc++/vVU577+9F3NrL1jvv70F77+977+9IC/vv73vv708eu+/ve+/vQtrZ++/vWUmJGTvv73vv71U77+9b350RO+/vQo777+9Am1v77+9A2VEETBL77+977+9D++/ve+/ve+/vW0R1Jfvv70lcO+/vWsUUAM277+9Jtys77+9Lu+/ve+/vX5B77+977+9Vu+/vSfvv73vv73vv71uM09v77+9QW7MricgBz3vv70L1YF177+977+977+9f2Xvv71ifXY/Z0sv77+977+977+9UwDvv71g77+9XO+/ve+/vSpa16RH77+9aO+/ve+/ve+/vU8kQl3vv70b77+9DO+/ve+/vRXvv70+77+977+9S++/ve+/ve+/vXDvv73vv70p77+9PWAlLgALO1Q/RX9777+9NAXdu++/vSE+SEMA77+9ACA/77+977+9Ae+/ve+/vRnvv73vv71O77+977+977+9f2Lvv73vv70377+9L++/vV7vv73Che+/vX0477+977+9cu+/ve+/ve+/ve+/vX/vv70e77+9FO+/vXLvv71x77+9F2sWEz3vv73vv70477+9xa8FXO+/veyggO+/vT7vv71UCu+/ve+/vUHvv73vv70N77+9FcKmDu+/ve+/vc+nOtGi3Jjvv70m77+9Iu+/ve+/ve+/vUjvv71uaCJZ77+977+9a1DQtu+/ve+/vQgdDgp/77+9De+/ve+/vS5rSe+/vQfvv73vv71FdlHvv71e77+9a++/vRfvv70x77+9Q2Pvv70077+977+977+9Uu+/vQ3vv73vv71277+9Ou+/vQbvv73vv71B77+977+9Wu+/vQnvv71J77+977+9ARDvv70377+9bw7vv73vv70N77+9bQhJQ++/vRbvv73vv73vv71DeO+/vRvvv71k77+977+9Rkvvv73vv73vv73vv701cu+/vUXvv73vv700Se+/vX3opK3vv70DcXRm77+9R9W8Gnnvv700be+/veern27vv70O77+977+977+9QU4f77+9GFxk77+9bdq3Q0Lvv73vv71QBu+/ve+/ve+/ve+/vQU2ZzUu77+9U++/vTQ477+977+9AO+/ve+/vTwm77+977+9M++/vTBo77+9Bu+/vVDvv70477+9UO+/ve+/vVUc77+977+92LIX77+9cUtB77+977+9Ue+/ve+/vUPVie+/ve+/vRdoDhzvv70j77+9X2AWBkrvv70JWO+/ve+/vTQQ17RMfO+/vU3vv73vv70w77+9UFfvv71n77+9M05X77+9eO+/vd6S77+9Fty/dinvv73vv71X77+9eO+/vR9R77+9P++/vTnvv70TfHDJglkj77+9E++/vUrvv70C77+977+9bH5iI2wbGBxGWO+/ve+/ve+/ve+/vShNZhTvv71AA++/vSo877+9Bu+/vTo877+9Nu+/ve+/vSx277+9ajrvv73vv70+IO+/ve+/vQXvv70h77+9Z++/vR9wJBxW77+9ce+/vX7vv73vv7156p2q77+977+977+9Me+/vXbvv71XJu+/ve+/vUDvv73vv70R77+977+9x4Tvv73vv704Se+/ve+/vRPvv73vv70p77+9AW7vv73vv73vv70m77+977+9UB9p27bvv70S77+9MykGaS5H77+977+9LO+/vV/vv715Qe+/vUF377+9fu+/ve+/ve+/vR1n77+9ZO+/vcaA77+9eO+/vQbvv71Q77+9XT5qFS4BK++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSHvv71AWu+/ve+/vSHvv73vv73vv71B77+9aO+/ve+/vQ/vv71v77+9Qh/vv70T77+977+9cxIzZ++/vQnvv73vv73ssaDvv70h77+977+977+9eO+/vUzvv70LEO+/ve+/vS9j77+977+9c++/vRTvv71a77+9divvv71x77+9G++/vXYP77+9AUjvv73vv712Eu+/vRjvv70gFmIyZC83fS3vv70777+9ZUnvv73vv71I77+9P++/ve+/vXNE77+9Amfvv73vv713x7rvv71U77+9Lu+/vQoEfGnvv73vv73vv73vv73vv71l77+977+9WGpKMe+/ve+/ve+/ve+/ve+/vScLbu+/vX3vv70gLO+/vWPvv70b77+977+9QkXvv70n77+9PO+/vd22AUpx77+977+9L3xkJgBxO++/ve+/vUFpLxLvv73vv73vv71Z77+977+9HR3vv70MCO+/ve+/vQrvv70477+9Be+/vX3vv73vv70B77+9cnXvv71de2Hvv73vv73Ku++/vVnvv73vv73vv73vv71C77+9LtG977+977+977+9We+/vRjvv71s77+9BRnvv73vv73Snu+/vQ7vv73vv73vv70eSmDgqK1Z77+9Ae+/vXBzE++/ve+/vS5gPu+/ve+/ve+/ve+/vVtd77+9Gg7vv70ESO+/ve+/vU03I96Y77+9Pu+/vS1y77+977+9WFTvv73vv73vv70Q77+9UXRU77+977+9Ii7vv70Sae+/vUEBA1gx77+977+9bU0mJx8K77+9fE1F77+9FO+/vTDvv73vv73vv73GtO+/ve+/vVdhW++/vXQU77+9awrvv70F77+9ZG95Y++/ve+/vXzvv71xJgJwYHd/B++/vT/vv73vv70M77+9Wu+/vTPvv73vv71BGe+/vTXvv71u77+977+977+9QGEA77+9JwplEVPvv71k77+977+977+9YnkF77+9fu+/ve+/vSDvv70b77+9S++/ve+/vQHvv71cDe+/vRDvv70U77+9O++/ve+/vRzvv73vv73vv73vv71x77+977+977+977+977+9b2bvv71XLDg+77+977+9fiDvv73vv73vv73vv70P77+977+9c3nvv70777+977+9XFcLXiDvv705Ze+/ve+/ve+/vWDvv71DZQEgUGjvv73vv73vv70Q77+9NwB9au+/vVJ/77+9PxQH77+9TVHvv73ave+/ve+/vVvvv70P77+9BO+/ve+/ve+/vVwS77+977+977+9aW3vv73vv70NeO+/ve+/vTo9Te+/vTg877+977+977+9Pyh377+9F3Lvv70Q77+977+977+9E3rTn++/ve+/ve+/vVtgLw3vv71HJe+/vdiv07Tvv71877+977+9VgwO77+9A++/vWTvv73vv70JUe+/ve+/ve+/vT7vv71W77+977+977+977+977+9IzRd77+9dhgUWjPvv73umbZ9X++/ve+/vU3vv73vv71677+977+9YWHvv73vv70UZ++/ve+/vQxKA++/vcS8e++/vVsl77+9wocBP31h77+977+9ZO+/vT3vv70H77+9H++/ve+/ve+/vRMN77+9G++/ve+/vXTvv70dIN6v77+977+977+977+977+9JO+/ve+/ve+/vcSx77+9cO+/ve+/ve+/vU/vv71hS++/ve+/ve+/vQ/vv73vv71+U++/ve+/ve+/ve+/vRoV77+9Ve+/vUxNF++/ve+/ve+/ve+/ve+/vQfvv71yAHbvv70B77+977+9OxTvv71qPyJfHe+/ve+/ve+/vVnvv71DXu+/vV0577+977+9Eu+/vT/vv71577+977+9Sgkx77+9VO+/vR7vv73vv71cdycceO+/vQnvv70T77+9N++/ve+/vTnvv73vv71jFu+/ve+/ve+/ve+/vQnvv73bq++/vVbWsAVOOl5fPi3fsO+/vQzvv73vv73vv71pK++/ve+/ve+/vSzvv70fZi/vv71gKhnvv71577+9Ku+/vR7vv73vv71wPO+/vQDvv71E77+9Ie+/ve+/ve+/ve+/vWHvv70P77+977+9OQ3vv70p77+9Ue+/vSUebRER77+9UTnvv70K77+977+977+9Q1bvv71n77+977+977+9fU0t77+977+9A13vv70sNMmSLDQe77+9Du+/vSjvv73vv71V77+9CE/vv73vv71uP0xsde+/vQh177+9V++/vcmQ77+9a++/vTvvv71z77+9LDrvv70577+977+977+977+977+9G++/vR7vv73fp++/vSsCBe+/ve+/vSTvv70pbinvv73vv70Wcj3vv71pPO+/ve+/vQ3vv73vv73vv73Io++/vRbvv73vv73vv715fO+/ve+/vS3vv70777+9Ue+/ve+/vRXvv71aKzNJ77+9Yu+/vQLvv73vv73vv70tXu+/vU5y77+9D++/vWXvv73vv73vv70FQ++/vRhGAe+/ve+/vXPrh5Tvv71y77+977+9Q15077+9SlTvv71hw4nvv70y77+977+9a++/ve+/vT3vv73vv70cOFM977+9XnXvv70oRu+/vQZJ77+977+977+977+9X++/vS3vv73vv73vv73vv73vv71QSO+/vSNiEe+/ve+/ve+/vW/vv71cHO+/ve+/vUVjbAzvv73vv73vv70s77+977+9XCsfJ34UIe+/vWREb2Tvv73vv70ESe+/ve+/vRAPK0tNMe+/ve+/ve+/ve+/vTUJ77+9C3Ns77+9Rx0j77+9Shnvv73vv73vv70G77+977+977+977+9LO+/ve+/ve+/ve+/ve+/ve+/vRls77+977+9K03vv70YJQEm77+977+977+9B++/vWvvv70d77+977+90rUSV++/ve+/vRlYYuy3gUzvv71cC++/vXbvv71Hce+/vcO+77+9Nn01KAIFThnvv71qX++/ve+/vToHEgLvv70n77+977+977+9JRzvv70S77+977+9aRxX77+9DD9iQRMpRu+/vX9nYO+/vWg4Jwk577+9RW3vv73vv73vv73vv70obO+/vQXvv73vv73vv70gFu+/vV8UDCzvv73vv706f0vvv71U77+9BVYQ77+9Uu+/vStFKu+/ve+/vXRp77+9PUFcWu+/vWPvv73vv73vv73vv73vv71QVO+/vSjvv73akO+/ve+/ve+/ve+/vRktcu+/vXpA77+977+9Mu+/ve+/vcSgQO+/ve+/vdmMIe+/vS0e77+9cBLvv70hEu+/vcedK3Q0TRLvv71cXO+/vVHvv73vv70GNu+/vdGGRu+/vTjvv73MslZ1TSbvv73vv70nD1/vv70iACjvv73vv70r77+977+977+977+977+977+9b++/ve+/ve+/ve+/vVwh77+977+9egERbe+/vT9cPQzvv73vv73vv702X3rvv73vv70nMu+/vQtFde+/vXzvv70ICVgg77+9Wu+/vV9x77+977+91J3vv73vv73vv73vv70xeO+/vT7vv73vv71vcATvv73vv70+FO+/vWoT77+9RVYpYDI477+9ee+/vRXvv70Y77+9VgNV77+977+9ZO+/vUfvv73GtUjvv73vv715Lu+/vduN77+977+977+977+9WxLvv73vv71GGu+/vX3vv73vv71M77+977+9KO+/ve+/ve+/vVrvv71B77+9TX3vv73vv71NR++/vSDvv73vv70/77+977+977+977+9SE5577+9Gu+/vcOU77+9CO+/ve+/vXbvv709OiJc77+977+9QkBBOms6T++/vU1xAO+/vUljG++/ve+/ve+/vQAi77+9HTRh77+9MH0XPllu77+9KO+/ve+/ve+/vQ/vv73vv70Ed++/vWI6Pj0iRy3vv73vv71l77+977+9Agbvv70ZdTTvv70J3Zjvv73Ejz3vv71hXAzvv71xGlt9Lu+/ve+/vVnvv73vv73vv702Kg9sfioxRe+/vXcM77+977+9Nu+/ve+/vS/vv70iDe+/ve+/vXPvv70SCVRUGu+/vQAAAFHvv70K77+9Y++/vWbvv73vv71g77+9f++/ve+/vWnvv73vv73vv71e77+9A++/ve+/vXd177+9HCgWEgRXSiYX77+977+9V++/vSwD77+977+9Fh/vv70h77+977+977+977+977+977+9Uxbvv73vv70b77+977+977+977+9AO+/vVXvv71/Wu+/vS3vv73vv70UTTvYj0EiBk08V38gPElqZGEEE1LZuh7vv70Fau+/ve+/ve+/vUBTOHcs77+9We+/vQ8iFWjvv704JO+/vRAwVRdqOO+/vUXvv71yFe+/vTjvv73vv71hXzgi77+9Ce+/vUjIlE1/Gnzvv73vv70h77+977+9IO+/ve+/ve+/ve+/vWwvX++/ve+/ve+/vR4fDBTvv73vv73vv70HMnfvv73vv716cO+/vXU8al7vv73vv71v77+977+9H++/ve+/vTfvv70Ofhrvv71fQ1Tvv71ER++/ve+/ve+/vXtjLe+/vTU277+977+977+977+977+977+977+977+977+9CgIO77+9Dmx6Ze+/vWvvv70f77+977+9ejLvv73Do++/vWXvv73Ksu+/vVPvv710H++/ve+/vRVd77+9X1jvv70LLGg577+9Te+/vVvvv73vv71h77+9Ju+/vVzvv70oKO+/vVHvv73vv70lZ1gHW1rvv704Ge+/vXvvv71G77+977+977+977+9xYRkaS3vv71Z77+977+977+9VSk077+9bO+/ve+/vRkZ77+9aNGy77+9dzlfUe+/ve+/vXnvv71NZO+/vUnvv70DLx1w77+9Nu+/vSTvv73vv73vv70lA0Yd77+9cu+/ve+/vQ9QHO+/vXXvv71H77+9c++/vV7vv71oV++/ve+/vSE+77+977+977+9e++/vQBs77+9C++/vXbvv70dUHLvv73vv73vv708Le+/ve+/ve+/vRvvv70cHT/vv71/3ZAQ77+977+9xo/Xk++/vSjvv73vv70oHmNh77+977+9fSDvv70HJ++/vQLvv700Q++/ve+/vWHvv71V77+9MV3vv71z77+9RO+/ve+/ve+/vQIS77+977+9E2Tvv70v77+977+977+977+977+977+9IO+/vRDvv73vv71cPUIl77+977+9WS/vv71IFjdV77+977+9aBhd77+9TO+/ve+/vTvvv73vv70/OgHvv71n77+9A++/ve+/vWtQFQzvv73vv70LKe+/vRXvv73vv70+77+977+9Ie+/ve+/vRkYBF7vv70Hcj5277+9bAMcGR9OJCxy77+9V04e77+9Ne+/vdWAT++/ve+/ve+/ve+/ve+/vRw677+977+9eu+/vXbvv73vv73vv70477+9U++/vSPvv70maO+/ve+/ve+/vSfvv70tXBrvv73vv73vv70o77+9eVVlFO+/ve+/vT3vv71M77+977+9QO+/ve+/ve+/vVANTnrvv70i77+9RFc+KO+/ve+/vQfvv73vv717He+/vdqSWTEHR++/ve+/vSh0ZGhC77+977+9e++/vU9DVT1QAO+/ve+/ve+/vWTvv73Ctm9V77+9RUXvv73vv73vv71/77+9D2JU77+977+9YBbqt4xFHO+/ve+/vTnvv73vv71p77+977+9WgLvv71nQCXvv70AGu+/vUo1U++/ve+/vUE3YkpJfnHvv71uehcFWWUNeO+/vTbvv73vv73vv70377+9FTzvv70I77+9Ge+/vW/vv73vv73vv71H77+9LkTvv71m77+9b++/ve+/vV96fu+/vS0977+977+977+9aMes77+977+94YaZUO+/ve+/ve+/ve+/vRc5b27vv71f77+9SO+/ve+/ve+/vVLvv73Voe+/ve+/ve+/vT9I77+9V++/vR4D77+9VGHvv708y77vv71jD++/ve+/ve+/vU3vv73ao++/ve+/vXAF77+977+9JlDvv73vv71zDlvvv70ice+/ve+/vR48YWTvv73vv71yGivvv71Udu+/vWXvv73vv73vv70gee+/vRPvv73vv73vv71oZu+/vRDvv73vv70V77+9d2MxyLbvv71VQu+/vcST77+9Y3pRV00A77+9eADvv709ShZTcte6N0xlZO+/ve+/vW7vv70577+9X++/vVXvv70OBe+/vQM+Ix5e77+9LDPvv73vv70r77+977+977+9N++/ve+/vQt+77+9f2fvv70qBu+/vUVoCmPWgTJtYCrvv71ZG++/vWBdIDUdex5a77+977+977+9L2Lvv73vv70jyJAT77+9XyPvv7060Zbvv71m77+9E1Vc77+9Lu+/vWkXagPmkobvv70X77+9OBHvv71CfO+/vQbkuqzvv71H77+977+9ZXo8Re+/ve+/vQvvv71v77+9MDgBQe+/ve+/vTNG77+9TVxh77+9O3zvv73vv71ucFXvv73vv71E77+977+9QmJ777+977+9ECk5Iyrvv73vv71m3JcBS1MAJwTvv73vv71U77+9SCN+Z3A+Ee+/vRZNM++/vWHvv71P77+9OmPvv70b77+977+9KElf77+977+9Tnfvv73vv71Z77+977+9W++/ve+/vRZ/P2bvv71zAFnWuiXvv70L77+977+977+9Ru+/vU8p77+977+977+977+9173vv70J77+977+9Lu+/vTo677+9Ng1Q77+9f0ceZe+/ve+/vSrvv71JLe+/vR9n77+977+9V2Tjp5vvv73vv73lq4wWdUfvv73vv70m77+9Dwnvv73Znu+/ve+/vWfvv70wVe+/vQLvv73vv73vv73vv73vv70b77+9eu+/ve+/ve+/ve+/vWvvv71N77+9Yu+/ve+/vc2gXQXvv73vv71k77+9dQLvv71u77+977+977+9fG7vv73vv73ir7Pvv73vv70v77+977+9XSJAI++/ve+/vXY/77+9N++/vUFVHu+/vWRDEO+/ve+/ve+/ve+/vSFt77+977+9EkHvv71W77+9BO+/vV1WU9eJ77+9L++/vX4Q77+9cu+/ve+/vRgcJQTvv73vv71k77+9HmDvv73vv73vv73vv71TZe+/vRHvv73vv70QJmzVpe+/vRxU77+9W++/vWPvv73tgrnvv73InO+/vR/vv73vv73vv70677+9zrzvv73vv70F77+9DzYK77+977+9W++/vTXvv73vv70D77+977+9E2fvv73vv71G77+9dEsp77+9Te+/vQx+77+977+9THE+Q++/vX/vv73vv73vv71tEwltAO+/ve+/ve+/ve+/vRvvv70V77+977+9E++/vXbvv73vv73vv70sXO+/vRl677+9Tu+/vRHvv73vv70Ya++/ve+/ve+/vWBW77+9Fu+/ve+/vVjvv73vv70jdx/vv73vv70M77+9Uu+/ve+/ve+/ve+/vTvvv71K77+9UHvvv73vv70o77+9bRVM77+977+9Au+/vWV777+9QFfvv73vv71h77+977+977+977+977+9Ee+/vXgfU++/vUUNSO+/ve+/vRNK77+9Ue+/vRHvv71xZ++/vU4p77+9Z++/vX/vv71177+9DO+/vTNW77+977+9ISIJ77+9aB/vv71ES++/vXI077+977+977+9O++/ve+/ve+/vQDvv71XDFgv77+9Ee+/ve+/vTclSO+/ve+/vSjFkB1R77+9Ye+/vWt8Eu+/vUHvv705IsyZ77+9Re+/vRrvv73vv73vv73vv71677+9fns7Qe+/ve+/ve+/vQjvv73vv70RVlgDeGXvv71nZu+/vRXvv71/77+977+9NE3vv704AO+/vUvvv715XBZnIO+/ve+/vUVuX++/vUk72rYgT++/ve+/vSzvv71n77+977+9dwbvv73vv70N77+977+977+977+9cO+/vRBUCu+/ve+/vWYY77+9a1kpcFvvv71SSe+/vUJFQmXvv70xUnDvv71J77+9Gu+/ve+/ve+/vUM577+9MgHvv71677+9W8e277+9MRgnSlcY77+9QBLvv73vv73vv70tXO+/ve+/vX8wMD1cUUYH3o/vv73vv73vv71r77+9G++/ve+/vdaQTO+/vQtoUe+/vcaBb1su77+9DO+/vQAfA++/vSHvv71aGHbvv73vv73vv71tIxEA77+9Uu+/ve+/vX53EWbvv70RwrhsXU7vv73vv71YaxY277+9UD0l77+9f++/ve+/ve+/vU0c77+9QDzvv71PUSINOGxqCu+/vXs/Z++/ve+/vQDvv71977+977+9wpvvv73vv70LAe+/ve+/vQUzRe+/ve+/vT5v77+9JO+/vTsw77+977+9adi077+977+977+9Cwbvv71UEu+/ve+/ve+/ve+/vV7vv703We+/vVnvv70Y77+9SQ7vv71jMO+/vUXvv70BOnTPp1NqEHMq77+9cO+/vVTvv70577+9X++/vUvvv73vv73vv704W++/vWkXe1rvv70u77+977+9Iu+/ve+/ve+/ve+/vSfvv73vv70/77+9Xu+/vTvvv71u77+977+977+977+9Kl0gH++/ve+/vSYsQu+/vVwP77+9Ne+/vW7vv70KNu+/vSjRlGluIn5sFUHvv73vv73vv70bRu+/vcyMcXHvv73vv70RZO+/vUfvv70m0ajvv73vv71AXu+/ve+/ve+/ve+/ve+/vTsARy7vv73vv73vv73vv71cHDFuR++/vT3vv70g77+9YSjvv73vv73ErO+/ve+/ve+/ve+/ve+/vXN7Re+/vQrvv71Td++/ve+/vXLziIOxKO+/vRIsU++/ve+/vdmPJULvv71eCT4Q77+9cO+/ve+/vQfvv73vv73vv71kLUXvv70YVg4eyYTvv73vv70U77+977+977+9Nu+/vU9NRe+/vQw/77+977+977+977+9Ye+/vSLvv70T77+977+977+977+9VBjvv73vv70OP09yW++/vU8ODB3vv71QW++/ve+/vW3vv70j77+977+9fko51Zjvv73vv73vv710K++/vRFV77+977+977+92blI77+977+9BQbvv71uVxvvv71MICkT77+9bu+/ve+/vWnvv73vv73vv70B77+977+9eX5sbu+/ve+/vUnvv73vv70adyXDo++/vXDfsVdb77+9NQ/Doe+/vTc3A++/ve+/ve+/vT4SSQxQ77+9U++/ve+/vcmt77+977+9fTdKIgzvv71DBe+/ve+/vXXvv70vCe+/ve+/vVpF77+9Llp/awkk77+977+9NFzvv73vv73vv70hcUfvv71H0YkMeO+/ve+/vWrvv73vv71I77+977+9TO+/veqnm++/ve+/vU7vv71kbe+/ve+/vV5177+9Pe+/vSbvv73vv700Fe+/vS0aeBvvv73vv73vv73vv73vv73vv73vv703UB7vv73vv71Of++/ve+/vXPvv73vv71C77+9JC0q77+9OO+/vTfvv71jO++/ve+/vUZf77+9Qy7vv73vv73vv73vv70I77+9KiXvv70iPSLvv70w77+977+977+9RjNz77+977+977+9au+/ve+/vXNV77+977+9f++/ve+/vUtGZu+/vQ/vv70vW++/ve+/vWMBeSzvv70LdOqLpRdkb0Tvv710d0ZONEzvv71SBXNG77+9AO+/vRHvv71T77+977+9bO+/ve+/ve+/ve+/vWDvv73vv73nk6vvv73vv71j77+9fj3vv71h77+977+9XX4+77+977+977+977+977+9Mi3vv73DnO+/vQ3vv71Gbt6677+977+977+9VDlURO+/ve+/vXpj77+9U++/vUJiMjQN77+9xIdkT++/vW4oZUTvv73vv70Y77+977+977+9ae+/vRDvv70tNwcHL++/vUrvv71T77+9NE5qE++/vXjvv73vv70h77+9LkDvv70+K++/vRTvv70MMW9l77+9GO+/ve+/ve+/ve+/vWfvv70v77+9JO+/ve+/ve+/ve+/vUlX77+9K1oF77+977+977+9UBlX77+9c++/ve+/vW4W77+977+977+9KT7vv70x77+977+9Hx8OF2wULO+/vXYP77+9CB/vv73vv70nI++/vR/vv73asu+/ve+/ve+/ve+/vX5Vz7tnVO+/ve+/ve+/vRc877+9Ve+/vcm977+9BT/vv73vv70U77+977+977+9Ie+/ve+/vXgjUO+/ve+/ve+/vXPvv73vv73vv73vv73vv73vv70YxbhaZz8xZe+/ve+/vRHvv71pSO+/ve+/vSXvv73vv708Xe+/vXnSuzpBYu+/vUfvv70R77+9Ge+/vSTvv70sRe+/ve+/ve+/vTJ+LwLvv71m77+905QDde+/vT1E77+977+9Q++/vTvvv70H77+9ee+/vce/77+9K++/ve+/vXEtcnrvv71/77+9Zt+FDgXvv73vv71mfWLvv73vv73vv73vv70RYe+/vTEEUmzvv70/77+9Ce+/vSfvv71sCCPvv71PHu+/vStl77+9V++/vURs77+9IidfRu+/ve+/vQTRpyvvv707YO+/ve+/vUdt0pTvv70477+977+9TO+/vRpe77+977+977+9N1Dvv71s77+9Ou+/ve+/vUN/77+977+977+977+9Hu+/vWzvv70wCu+/vSfvv71cfe+/vWXvv73vv70/77+977+9Ye+/vWZ677+9yqFZXu+/vdWC77+90pcx77+977+9LxTvv70qUgXvv71wBVDvv71x77+977+9V++/vSNx77+977+9X++/ve+/ve+/vRHvv73vv71cajHvv71377+9XyhF77+9E++/vQk+Mm3vv70A77+977+9yJPvv71W77+977+9XRE6WFTvv73erdax77+977+977+9DRnvv73Wju+/ve+/vTl777+9Ju+/vXF0Wu+/vT5A77+977+977+9aFRO77+9Ne+/vWrvv70UVDRkeO+/ve+/vQQn77+9UBEHx6tJLALvv70Wbijvv70UP++/ve+/vSpQ77+9Eu+/ve+/ve+/vRzvv70/77+9XO+/vcebA++/ve+/vc2LU1Hvv716ZAIjVO+/vQfvv73vv71877+9Gx0j77+9MWTvv718ZWXvv73vv73vv70J77+9Ye+/vVJAU++/vQjvv71rYu+/vT1k77+977+9EhxEXWdX77+977+977+977+977+977+9yIjvv73vv71uSdeY77+9bCYPekhT77+977+977+977+977+91rvvv73vv73vv73KoUpZ77+977+9WjEz77+977+9Pu+/vXZ777+977+9N++/vU9977+9Ue+/ve+/ve+/vTvTqO+/ve+/vSFvPG/vv73vv73vv71N77+977+977+977+977+977+9fFnvv73vv73vv70naSPvv73vv73vv71hBhMd77+94K6p77+977+9fO+/vX7vv73ruLDvv73vv73vv71K77+9Ae+/vTYLDe+/vWsa77+977+977+977+9S++/ve+/ve+/ve+/ve+/ve+/vT/vv73vv73vv70G77+9IO+/ve+/vTnvv73vv71uN++/vQYNbO+/vUbvv71b77+977+977+9Re+/vVQ0QR1L77+977+9VDBs77+977+9Au+/vXzvv73vv73vv70BRu+/vXrvv73vv73vv715Le+/vUzvv70f77+977+9Pe+/vT7vv71577+9ae+/ve+/ve+/vWUCJO+/vQ9P77+9CR4IB++/ve+/ve+/vWdUT++/vUPvv71aSw3vv73vv70o77+977+9BVXvv73vv73vv70977+9Le+/ve+/ve+/vXEL77+977+9P++/ve+/vT/vv70qL3ph77+9YFUy77+9fBR877+9M++/ve+/vRzvv73vv71r77+9cO+/ve+/vc+q77+977+977+9AO+/vdWCMe+/vXLvv73vv73vv73vv70pBznvv73vv73vv73vv73vv73vv71MzrZ377+977+9GArvv70+77+9fe+/vUIi77+9cw4GXwLvv70p77+9BtazFu+/vSAv77+9QGHvv70XMAPvv73vv711czbvv70277+9Se+/vQtT77+9D++/vWNd77+9DF9177+9Dy0hCjh0Bu+/ve+/ve+/ve+/ve+/vVdN77+9DTkWSDLvv73vv70O77+977+977+95JSgJe+/vVzvv71+PhHvv71kOl7vv73vv70g77+9zobvv70THe+/vWjvv73vv73vv701DTQpCCIKKO+/vXjvv73vv70E77+977+9ae+/vUPvv71EXkXvv71wMw7vv70kJSnvv70Sa++/vQo577+9wpTvv73vv73vv73vv716OQfNi++/ve+/vTIyHFM0emBn77+9XR8R77+9H++/ve+/vR4fYe+/ve+/ve+/ve+/ve+/ve+/vRjvv703OO+/vXtFCiIbbHLvv73vv73vv73vv73vv71CdO+/ve+/ve+/vQ5abcSk77+9ckQqdxNX77+977+9BWZC77+9djJqM++/ve+/ve+/vUZ4K++/vRDvv71bY++/vRTvv73vv70z77+9IO+/vQzvv73vv717We+/vXtTCU/vv73vv71We3zvv711Rizvv73vv73vv71177+977+9AQzvv70v77+977+9eu+/vSYYAe+/vWld77+9GDHvv70jxLVb77+977+9X0Xvv73vv70R77+977+977+9DW3vv73vv73vv71/ZVjvv73vv73vv73vv71oYu+/vdGH77+9au+/vQLvv73vv70Lf++/vW4u77+977+9RtaBbu+/vUQORRU277+9TGMw77+977+977+9U2/vv73vv71377+977+9H8iDWNaf77+977+9UO+/ve+/ve+/vU7vv73vv71QQjPvv70+77+9bO+/vTBh77+977+9fik/77+9f++/ve+/vVjvv70u77+977+977+9Gjtb77+977+9T++/vRHvv73vv70077+9Ae+/ve+/vUww77+9cFgCc0vvv70E77+977+9VhB7P1Hvv70K77+977+977+9V++/ve+/vS9zOybvv71iC++/vT/vv73vv71HW2Pvv71VacukFybvv73vv70IIB1e77+9dQs077+9TkZk77+977+9Bu+/vTkcckdB77+9LANt77+977+9Du+/ve+/vci/77+9QVAV77+977+9Hu+/vU4JP1vvv73vv71nW++/ve+/ve+/ve+/ve+/ve+/vQkoW++/vTwl77+9aHdw77+9ah/vv73StyFi77+977+9JWJydu+/vR/vv70G77+9A0clQgY477+9fTjvv73vv71h77+977+977+9XDQn77+9Ke+/ve+/ve+/vT7vv70MHu+/ve+/ve+/ve+/vQFcVu+/vW8O77+977+9Bu+/vVXvv71+77+9IAdu77+9RO+/ve+/ve+/ve+/vVvvv70BVO+/vTIrI3o877+9Ee+/ve+/ve+/ve+/ve+/vTPvv70rEFEM77+916Dvv70577+9RSQQGj9577+977+9AFLvv71IcdOC77+9CwDvv73vv73vv73vv73vv73vv73vv73vv73vv717c++/ve6Oqu+/vX7vv705Wu+/ve+/vQ4XQe+/vWnvv73vv73vv71UKO+/vWVP77+9eGnvv73vv71j77+977+9bO+/ve+/vcKP77+9du+/vQzvv73vv73vv73vv73vv70SY++/vSDvv73vv71n77+9Vh1NKu+/vTXvv73vv73vv71VM++/vUfvv70B77+977+9C0JCOTvvv73vv73vv73vv73vv70PZytz77+9d8mNZBdfMO+/ve+/vXvvv71o17YUMWFTzLfvv71j77+9Pe+/vWrvv71VIWsOX++/vS3vv71W77+977+977+9e++/vRpwKO+/vQLvv70WWF5u77+977+9Re+/ve+/ve+/vRbvv713DO+/vRbvv73vv73vv71R77+977+9ae+/ve+/vTPvv73vv704RhlIakkS77+9b++/vR0977+977+977+977+9UhIeAu+/vSLvv73vv70g77+9Qgzvv71a77+977+9FwNg77+9IO+/ve+/vSvvv70VN++/vXHvv73vv71b77+977+9Wu+/ve+/ve+/vRlv77+9X20OOAAcZkbvv73vv70Q77+9ElBm77+9ZAh3Au+/ve+/vUYULF1/77+977+9Oe+/vWsI77+977+9LjTvv70P77+977+9MS/vv70gfO+/vQXvv703Zu+/vQtWJjLvv70477+977+9VgFbdkIq77+977+977+9dAwmbQRu77+977+9OAJUA++/vTTvv71MLwUk77+9YRxtO++/vWBT77+977+977+977+9Ne+/ve+/ve+/ve+/ve+/ve+/vSYx77+977+9Nu+/ve+/ve+/ve+/ve+/vSDvv70J77+977+977+977+9Cn5hCkxi77+96JyI77+9DATvv70x3Icbfnfvv710Sw7vv73vv73vv73vv71p77+9cO+/ve+/ve+/ve+/vSIvDmF6dEPvv71VNQYw77+977+9JO+/ve+/vUzvv73vv73vv73vv71jN++/vV/vv73vv73vv70Y77+9fDPvv73vv70m77+9TV/vv71YSmJh77+9ZBfYpARK77+9bWphImAzdgtLIykEHu+/vQQ53Z/vv71sKe+/vQDvv73vv70C77+9S++/vRF477+977+9z6gZ77+9Ve+/vT/vv73vv71qJj/vv73vv73vv70QFe+/ve+/vVzvv73vv73vv71jEu+/vSLvv70dYe+/vSp6fk3vv73vv73vv73vv70T77+9U2Jb77+9XH1U77+977+977+9fe+/vUfvv73vv71H77+977+9Xibvv71eEyjvv70377+977+977+9WgwxE++/ve+/vTXvv73vv71d77+9V++/vTPvv73UngLvv71JZ++/vVVxz75NOnou77+977+977+977+977+977+977+9Eg9W77+977+977+9y4Lvv70xEn7vv70legkz77+9b++/vTLvv70NGu+/ve+/ve+/ve+/vWAa77+9Ce+/ve+/vUkO77+9WHzvv73vv719Bi8E77+9Su+/ve+/vTYcD++/vWvvv73vv73vv70x77+9HBVx77+977+9XC7vv71peB3vv73vv70pae+/ve+/ve+/ve+/vWk3aFvvv73vv73vv73vv70877+9XWrvv73vv71Z77+9QlHIsNm0GgNT77+977+9ag8777+9Gu+/vTPvv73PuNK9Oe60je+/vQvvv702GizOgu+/vX7vv73vv73vv71yaV3vv71r77+9Ch/vv71g77+9D++/ve+/vTcA77+9Eu+/vUzvv73vv70G77+9BO+/ve+/vSvHhVPvv73vv70zJO+/ve+/vQHvv70977+9UxPvv70Y77+9Ue+/ve+/vQcTHyPvv73vv701BDfvv71eNO+/vSdD77+9RyFBPQzvv70q77+977+9bu+/vS1Y77+977+977+9Mu+/vWw877+977+9VO+/vUTvv70x77+9D3nvv73vv73vv73fre+/ve+/ve+/vTDvv73vv70N77+9LwFmBFYz77+9OO+/ve+/vcKe354577+9JT1Gfu+/vQ1nVAjvv73vv70Y77+9yrLvv70R77+977+9du+/ve+/vR5DeO+/vV/vv73vv70P77+9Su+/vSbvv71YNe+/ve+/ve+/vTPvv73vv73vv71K77+977+9Yu+/vcODb++/ve+/vTBbWu+/ve+/vUfvv73vv70W77+9Ge+/vQbvv73vv70s77+977+9KO+/vQoD77+9EO+/vRvvv70MUu+/vdSa77+977+977+977+977+977+9LO+/ve+/vXAU77+977+9Dl/vv73vv71M77+9QO+/ve+/ve+/ve+/vQDvv70S77+9QSbfje+/vUdf77+9Z++/vS/vv73vv73vv71077+977+9Iu+/vR7vv71I77+977+977+9SiVtZ2wy77+9M++/vU7vv70O77+9FSBsD++/ve+/ve+/ve+/vTdNNGVc77+977+9FcqFZe+/vQs2Fe+/vWHvv73vv71BJgUa77+977+9FV1XLe+/vRRlYVJHe0dV77+9fu+/ve+/vWQkKe+/vToyzpPvv73vv70b77+9EO+/ve+/vdu+77+977+9YQoc77+9Rknvv71ZeDbvv71h77+977+9GO+/ve+/vRTvv73vv705Ee+/vTRJHO+/vSHvv73vv70mHe+/ve+/vXrvv70e77+9Rnrvv73vv73vv73vv71377+977+977+9be+/vX8/77+977+9Z++/ve+/vQzvv70+77+977+9GR0TAHnvv73vv73vv73vv70e77+9yqPvv70277+977+9Ze+/vQ4AcUV4R++/vVEu77+9ae+/ve+/vR3Cru+/vQzvv70VOWDvv71pHzvvv71NybRm77+9MV3en++/ve+/vWg577+977+977+977+9AdOvHe+/ve+/ve+/vT8tUe+/ve+/vXJLUO+/ve+/vRhWC++/ve+/vRbvv73vv73vv71077+9EBfvv73vv71R77+9O++/ve+/ve+/ve+/vc2NGe+/ve+/vU9yL3EdRBrvv71YXu+/vXAu77+9P0/vv71YM1oF77+977+9ZSnvv73vv73vv73vv71YCjHvv73vv73vv70v77+977+9ZGxt77+977+9FBLvv73vv73vv70077+9dHPvv71HbDbvv73vv73vv70d2r/vv716Lu+/ve+/vTRnXhsg77+9EO+/ve+/ve+/ve+/vT/vv73vv73vv70T77+977+9CO+/ve+/vVEI77+9TU80VQYW77+977+9E++/ve+/vWDPnitOeO+/vTfvv73vv70iQ++/ve+/vXVHRO+/vS0g77+9UE3vv70f77+9GO+/vUrvv73vv71u77+95YOyeUTvv71n77+9Ye+/ve+/vVjvv71OL9+V77+977+977+9BO+/vSDvv71I77+9LN+w77+9Qu+/ve+/vXcBUu+/vX/vv73vv73vv73vv70877+9Ml4dOj3vv73vv70dXO+/ve+/vT0nQe+/ve+/vXnvv71l77+977+9U++/vRHvv73vv73vv73vv73vv73vv73vv70eJhQ/B++/vQcO77+9c++/vTrvv71577+9xqNrUAHvv73vv71gNO+/vT3vv70CSe+/vWvvv71M77+977+977+9ESXvv71cO++/vQrvv70U77+9aV5qT++/vWvvv73vv71K77+927zvv71oDu+/vWvvv73vv70X77+9Gu+/ve+/vQYeMu+/vQAAAAA=";
    const POCKET_BEZEL = {"pixelRatio":3,"ppi":460,"screenWidth":402,"screenHeight":874,"radius":90,"portrait":{"outerW":439.3333,"outerH":905.6667,"screenX":18.6667,"screenY":16,"screenW":402,"screenH":874},"landscape":{"outerW":905.6667,"outerH":439.3333,"screenX":16,"screenY":18.6667,"screenW":874,"screenH":402}};
    // 机身剪影：矩形页面按这个 alpha 裁切，圆角处不会露出页面边角
    const POCKET_BEZEL_MASK = "data:image/webp;base64,UklGRu+/vQQAAFdFQlBWUDhM77+9BAAALyUF77+9Eg8w77+977+9P++/ve+/vR/vv70kBW3vv70wCX/vv73vv70O77+977+977+9ADBa77+9Uj7vv73JrW03bBjvv73vv73vv704CkZg77+9Agfvv71z77+9dyDvv73Jj++/ve+/vQRIckDvv71uIxJccO+/vSPvv70oPBrvv73vv73OjCM977+9AyI/77+9Ee+/ve+/ve+/ve+/ve+/ve+/ve+/vTvvv70P77+9Z++/vXtF77+9aTfvv73vv73vv71vUz3vv73vv70ke1rvv71F77+977+9du+/ve+/vRNz77+9Ginvv71577+9LO+/vWrvv71o77+9Pe+/ve+/veqxo++/vc+177+9Uw7mjawnb3RH77+9Pj1677+977+977+9Fnfvv73vv71LDRdNTk/vv70k77+977+9HjVe77+977+977+977+977+9A++/vQ4B77+9OhTvv71ocO+/vSDvv71dBFLvv70I77+977+9EETvv70177+9Mu+/vSBVAe+/ve+/vQrvv71XNe+/vSw6FBbvv71cDFITGO+/ve+/vTBETWPMku+/vWHvv704CO+/vQgQVu+/vSDvv73vv71BRu+/ve+/vVgFBwXvv70uCu+/vQUK77+9FQrvv701yoAZ77+977+9HRbvv71RF++/ve+/vQLvv73vv70S77+977+9Ckbvv70aZu+/ve+/ve+/vQI5Du+/ve+/vWAC77+9YhLvv71hCkdgGu+/ve+/vUjvv73vv70gDu+/vREX77+9IALvv70h77+9UQFxRAMN77+9EUnvv70h77+9AO+/ve+/vWckZxfvv73vv70FEjtLJH5WSO+/ve+/vSbvv73vv73vv706OlDvv73Eoe+/ve+/vWUUUHRGdu+/ve+/vQrvv73vv70oThpqHhjvv711cHbvv73vv70c77+977+977+977+90b3vv71ie8mo77+977+977+9Yu+/vXcn77+977+977+94bKG77+9O++/vT3vv71z77+977+9Tmzvv73vv73vv73vv73vv71ObU/vv70077+93LDvv71ZG2d/77+977+977+9DO+/ve+/vWEFGhtW77+977+9YRXvv70YVu+/ve+/vVnvv70C77+9We+/vQ3vv70r77+9IO+/ve+/vRvvv73vv73vv70N77+9Ue+/vQbvv73vv71q77+9YlTvv71BeWEr77+977+9TgcPP++/vXzvv73vv73vv710d0jvv71N77+9Qzbvv71877+9fFDvv73vv73Fs++/vXco77+9TO+/ve+/ve+/ve+/vUzvv71V77+9F++/ve+/vWrvv710XzXvv73vv73vv70j77+9fO+/vR9y77+9de+/vX7vv73Fr++/vX7vv73vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv71ILe+/ve+/vX/vv73vv70nUhXvv71g77+977+9f++/ve+/ve+/vR9VyagY77+977+9J++/ve+/vQ7vv70Z77+977+977+977+9P++/vU/vv73vv73vv73vv73OilEweu+/vT/vv73vv70iGRXvv73vv73vv73vv70/77+9T++/ve+/ve+/vX4WOe+/vSDvv73vv73vv71/77+9YVbvv73vv73vv70j77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv73vv71dUO+/ve+/vTco77+9Eu+/ve+/vSTvv70vIe+/vRtJ77+9S++/veeHjMm/77+9eEzvv71L77+977+9ZB9H77+9ZHo+77+9YlDvv71p77+977+95KeRDSpeNO+/ve+/vWgyKO+/vTTvv71/zotG77+977+9e++/vRfvv717Flfvv73vv73vv71V77+9ZnYV77+977+9Xu+/vUVyOO+/vUTiq7NBdG1vWT54Fige77+9IiUaH1bvv73vv71hXTQ6I3nvv70vGT8677+9Q++/ve+/ve+/vUMmZxQ777+9Pe+/ve+/ve+/vWM777+9Pe+/vXMZORjvv70R77+9HEYG77+9Ru+/vVvvv73vv73vv71eMUosPiPvv70LRhfvv73vv705Fu+/vRHvv73doX1j77+9UMmT77+9EjPvv71iJ++/ve+/vULvv70ZyYlD77+977+9yKDvv70x77+9PCskMSM/SyR2Fu+/vS4SPXMkcnbvv73vv70h77+9ESXvv70hEu+/vQTvv70zMkQAUe+/vQUiCAfvv70IA0JQHjnvv73vv70UDu+/vSQO77+9BA7vv704Du+/vRwc77+9MRwE77+977+977+977+9Ee+/ve+/vWHvv70LQ1EOQ1AHBu+/ve+/vUUS77+9Re+/vRLvv73vv70C77+977+9Lgrvv70dFO+/vTMUVFgg77+9IkF4Re+/ve+/vQoHIRUHBO+/vXLvv73vv73vv73vv70177+977+9ahzvv73vv70cDFzvv71QSCpOCF4VEO+/ve+/vSFI77+9Qe+/ve+/vUIQde+/ve+/ve+/vRzvv73vv70ZAmpYAO+/vUMA77+9Dg7vv70777+9fEktczzvv71x77+977+9Hmc8alrvv71F77+9O++/vXY577+9Ue+/vRot77+977+90bTvv73vv71G77+9YzDvv710Bu+/vU5P77+977+977+977+9x5Je77+9VEHvv719KO+/ve+/ve+/vUhG77+9be+/ve+/vRvege+/vQ5P77+9Y3Tvv70a77+977+9dxTvv73vv73vv70gdO+/vTME77+9Aw==";
    const POCKET_BEZEL_MASK_LANDSCAPE = "data:image/webp;base64,UklGRu+/vQQAAFdFQlBWUDhM77+9BAAAL++/vUpJEQ8w77+977+9P++/ve+/vR/vv70kBW3vv70wDX/vv73vv70HQERM77+9BCDvv73vv70nLVjJse+/vdaN77+977+9ERpCQQhYYu+/vQLvv73vv73vv71FWX4R77+977+9AEnvv73vv73vv71tBBwMMO+/vRLvv70ULA3vv73vv71Y77+9Qn4gHe+/ve+/ve+/vRPvv73vv70JOH9P258aNO+/ve+/vWPvv70/NmLvv73vv73vv71V77+977+9Pu+/vVw077+977+9wqnvv70iF095Bu+/ve+/vT7vv70h77+977+977+9Iu+/ve+/vXwhbdaUWCtfTFs1J++/ve+/vRfvv71GTe+/ve+/ve+/vSU177+9BCrvv73vv700K++/vcSW77+9bO+/ve+/vSzvv70x77+9eAtbWu+/vUXgsrhD77+9Yg1see+/vQYB77+977+9Ikbvv70YL++/vSU277+9Au+/ve+/vVXFjFYNM15k77+9bBQ5NO+/vSjvv73vv73vv73vv73vv71q77+977+9KDFs77+9JO+/vVlc77+977+9SEVzYxXvv71tFBg4WRDvv70s77+9JTnvv71rchQ377+9OMyW3IQ5OgsW77+9MCrvv70RVO+/vWPvv71h77+9Qe+/ve+/vQbvv73vv71Z77+977+977+9MUnvv71g77+9Hu+/vQw977+9WXoDYu+/vSTvv73vv71Z77+977+977+9EcmPIO+/vR9FND/vv70Yfhxg77+9b++/vVQCHO+/vQUI77+977+9LAnvv73vv70iSM+GIBspP1vvv73vv73vv70Q77+9I0doHQVDfO+/vQzvv71JMe+/vSfNkE3vv70w77+9J++/vXAcGER577+9EO+/vQEL77+9eC8p77+977+977+9SO+/ve+/vSLbm++/ve+/ve+/ve+/ve+/ve+/vTLvv71y77+9HO+/ve+/vRUc77+9Tu+/vU3vv71THO+/vXQ1R++/vTNILe+/vT5S77+9YSDvv71wOUhrI0jvv73vv71K77+9ZO+/ve+/vSR977+9byd7akjvv73vv71a77+9Y++/vQzvv70cLUdp77+9Vu+/ve+/vVd5P++/vWQVSzpZzZJN77+977+9T37vv73vv71TXO+/vQXvv73vv73vv70w77+977+9Ve+/ve+/vXPvv70077+9XO+/vQ3vv71z77+9N++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vTluVe+/vVPequ+/ve+/vVpjFXcU36nvv707Ve+/vX7Nkz3vv70NT++/ve+/vc+977+9UdmDL29U77+977+9W++/vUgJ77+977+977+9L++/ve+/ve+/vVLvv73Jp++/vX3vv73vv71i77+977+977+9Nyku77+977+9f0rvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9J++/ve+/vX/vv73vv70n77+977+9f++/ve+/vSfvv73vv71/77+977+9Ru+/ve+/ve+/ve+/vT9I77+977+9VCtT77+977+9b++/ve+/vcqv77+977+9KH7vv71z77+977+9L++/vV5Q77+977+9C++/vdOZ77+9U82TPe+/ve+/vR3vv71377+977+9ST7vv71iOu+/ve+/vSM677+977+9S++/vWPvv73vv73vv71T3Kvvv70mf+izv++/ve+/ve+/vX/vv70NJX/vv701FTTvv73vv71p77+977+9VF7vv70FFRfvv70a77+9fO+/ve+/vSXvv73vv71iSScrWe+/ve+/vRRf77+977+9RO+/vX4977+9E++/ve+/vUEpZmtI77+977+9au+/vWzvv73vv70kHSl5Ku+/vQrvv71477+977+9JO+/ve+/ve+/vTDvv70OSDFdw5Hvv700RzZdxZHvv70kRzJd77+9Ee+/vThHNFHvv71lSB3vv71ibyjvv73vv71q77+9bO+/vSjSke+/ve+/vUQqKO+/vT3vv73vv73vv70N77+9HO+/vTg4EO+/ve+/vTBkJ++/vVQx77+9J8mQ77+9BEM8UnRqCO+/vR3vv73vv71sCO+/vSbvv73OiiA5S++/ve+/vSzvv71y77+977+977+9AErvv70BKBDDjyEa77+977+9RxHvv70PI++/vR9CGj4JOe+/vQRm77+9cUzvv71j77+977+9RzBBD2Pvv70e77+9GjwJOu+/vQRq77+9MVTvv73vv73vv71kR1Dvv70O77+9De+/ve+/vR10Au+/ve+/vRjvv73vv70RXO+/ve+/vTgn77+977+9Bk4U77+977+977+9K++/vRvvv71Ibu+/vcK577+9Umzvv71m77+977+9Rmvvv70a77+9MWjvv73vv73vv73vv71mxqrvv70Z77+9MmTvv73Khxjvv70rYu+/vS7vv73vv706Aybvv73vv73vv73vv70d77+9F++/ve+/vVBLXO+/vUfRoj3vv70Wajrvv71477+9ZEXvv704Kklt77+9FO+/vRPvv71w77+9M++/vTg1Dk7vv73vv73vv70k77+9dVLCve+/vTDvv73vv708GO+/ve+/vUnvv73vv707zYfvv71zHDrvv73vv73vv73vv73vv71c77+9DO+/vWccVDA9f2fvv73vv73vv73vv71077+9W2B077+9E++/ve+/ve+/ve+/ve+/ve+/vXrvv73vv73vv70s77+977+977+977+9Hu+/vTzRre+/vTjvv73vv73vv73vv703HAA=";

    /* ---- 上游 app.js（Electron 桥替换为面板宿主适配） ---- */
    function mountPocketH5(root, DEMO_URL) {
      const realDocument = globalThis.document;
      const realWindow = globalThis.window;
      // 面板里 document 指向 ShadowRoot：getElementById / querySelectorAll / addEventListener 都在面板内生效。
      const document = root;
      let pocketAnimationFrame = 0;
      // 记录 window 上的监听器，卸载面板时全部移除（上游代码本身不返回清理函数）。
      const listeners = [];
      const window = new Proxy(realWindow, {
        get(target, property) {
          if (property === "addEventListener") {
            return function trackedAddEventListener(type, listener, options) {
              listeners.push([type, listener, options]);
              target.addEventListener(type, listener, options);
            };
          }
          const value = target[property];
          return typeof value === "function" ? value.bind(target) : value;
        },
      });

      const $ = id => document.getElementById(id);
      const defaults = { status: true, home: true, theme: 'dark', barColor: '#ffffff', battery: 100, layout: 'inset', guides: false, landscape: false, zoom: '1' };
      const device = { ppi: 460, pixelRatio: 3, bodyWidthMm: 72.776516, bodyHeightMm: 150.025658 }; // 外框尺寸来自 src/client/assets/bezel.json
      const storageKey = 'pocket-h5-v1';
      let saved = {};
      try { saved = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { /* Private mode and unavailable storage are supported. */ }
      const state = { ...defaults };
      for (const key of ['status', 'home', 'guides', 'landscape']) if (typeof saved.settings?.[key] === 'boolean') state[key] = saved.settings[key];
      if (['dark', 'light'].includes(saved.settings?.theme)) state.theme = saved.settings.theme;
      if (['#ffffff', '#ededed', '#111111'].includes(saved.settings?.barColor)) state.barColor = saved.settings.barColor;
      if (Number.isFinite(saved.settings?.battery)) state.battery = Math.max(0, Math.min(100, Math.round(saved.settings.battery)));
      if (['inset', 'overlay'].includes(saved.settings?.layout)) state.layout = saved.settings.layout;
      if (saved.scaleVersion === 2 && ['fit', '0.5', '0.75', '1', '1.25', '1.5'].includes(saved.settings?.zoom)) state.zoom = saved.settings.zoom;
      const calibrations = {};
      if (saved.calibrations && typeof saved.calibrations === 'object') {
        for (const [key, value] of Object.entries(saved.calibrations)) {
          if (key.length < 250 && Number.isFinite(value) && value >= 16 && value <= 1100) calibrations[key] = value;
        }
      }
      let history = Array.isArray(saved.history) ? saved.history.filter(item => typeof item === 'string').slice(0, 8) : [];
      let currentUrl = DEMO_URL;
      let toastTimer;
      let loadingTimer;
      let proxyRequest = 0;
      let pendingProxy = null;
      let navigationMessage = '';
      function persist() {
        try { localStorage.setItem(storageKey, JSON.stringify({ settings: state, url: currentUrl, history, calibrations, scaleVersion: 2, proxyEndpoint: {host: $('proxyHost').value, port: $('proxyPort').value} })); }
        catch { /* The tool works without persistent storage. */ }
      }

      function toast(message) {
        clearTimeout(toastTimer);
        $('toast').textContent = message;
        $('toast').hidden = false;
        toastTimer = setTimeout(() => { $('toast').hidden = true; }, 3600);
      }

      function normalizeAddress(value) {
        let input = value.trim();
        if (!input) throw new Error('先输入 H5 地址或端口，例如 5173。');
        if (/^\d{1,5}$/.test(input)) {
          const port = Number(input);
          if (port < 1 || port > 65535) throw new Error('端口范围是 1–65535。');
          input = `http://127.0.0.1:${port}`;
        } else if (input.startsWith(':')) {
          input = `http://127.0.0.1${input}`;
        } else if (!/^https?:\/\//i.test(input)) {
          // Reject explicit non-web schemes while allowing host:port shorthand.
          if (/^[a-z][a-z\d+.-]*:/i.test(input) && !/^[^/:]+:\d+(?:[/?#]|$)/.test(input)) throw new Error('仅支持 HTTP 或 HTTPS 页面地址。');
          input = `http://${input}`;
        }
        let url;
        try { url = new URL(input); } catch { throw new Error('地址格式有误，请检查主机、端口和路径。'); }
        if (!['http:', 'https:'].includes(url.protocol) || !url.hostname) throw new Error('仅支持 HTTP 或 HTTPS 页面地址。');
        if (url.username || url.password) throw new Error('请使用不包含账号密码的地址，在 H5 页面中登录。');
        const loopback = hostname => ['localhost', '127.0.0.1', '[::1]'].includes(hostname);
        const isThisServer = url.origin === location.origin || (loopback(url.hostname) && loopback(location.hostname) && url.port === location.port);
        if (isThisServer && ['/', '/index.html'].includes(url.pathname)) throw new Error('这是预览工具自己的地址，请输入你的 H5 服务端口。');
        return url.href;
      }

      function isDemo(url) { return url === DEMO_URL; }

      function updateHistory() {
        $('recentAddresses').replaceChildren(...history.map(value => {
          const option = realDocument.createElement('option'); option.value = value; return option;
        }));
      }

      function navigate(url, remember = true) {
        navigationMessage = '';
        currentUrl = url;
        const demo = isDemo(url);
        $('addressInput').value = demo ? '' : url;
        $('addressInput').removeAttribute('aria-invalid');
        $('previewName').textContent = demo ? '内置示例' : new URL(url).host;
        $('previewName').title = url;
        $('loadStatus').textContent = demo ? '示例预览中' : '已发送预览请求';
        clearTimeout(loadingTimer);
        loadingTimer = setTimeout(() => { $('loadStatus').textContent = '加载较慢 · 可在新窗口检查 H5 服务'; }, 12000);
        const bridged = window.pocketBridge && window.pocketBridge.target === url ? window.pocketBridge.entryUrl : null;
        $('previewFrame').src = bridged || url;
        if (remember && !demo) {
          history = [url, ...history.filter(item => item !== url)].slice(0, 8);
          updateHistory();
        }
        persist();
      }

      function displayScale() {
        const metrics = window.pocketDisplayMetrics;
        const key = metrics?.displayKey || `browser:${window.screen.width}x${window.screen.height}@${window.devicePixelRatio || 1}`;
        const manual = calibrations[key];
        const system = Number.isFinite(metrics?.cssPixelsPerInch) && metrics.cssPixelsPerInch >= 16 && metrics.cssPixelsPerInch <= 1100 ? metrics.cssPixelsPerInch : null;
        return { key, ppi: manual || system || 96, manual: Boolean(manual), system: Boolean(system) };
      }

      function resizeDevice() {
        const canvas = $('canvas');
        const width = state.landscape ? 874 : 402;
        const height = state.landscape ? 402 : 874;
        const logicalPixelsPerMm = device.ppi / device.pixelRatio / 25.4;
        const outerWidth = (state.landscape ? device.bodyHeightMm : device.bodyWidthMm) * logicalPixelsPerMm;
        const outerHeight = (state.landscape ? device.bodyWidthMm : device.bodyHeightMm) * logicalPixelsPerMm;
        const style = getComputedStyle(canvas);
        const availableWidth = canvas.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) - 8;
        const availableHeight = canvas.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom) - 8;
        const display = displayScale();
        // A logical phone pixel occupies 3 / 460 inches on the real iPhone.
        const actualSizeScale = device.pixelRatio * display.ppi / device.ppi;
        const scale = state.zoom === 'fit' ? Math.max(.05, Math.min(availableWidth / outerWidth, availableHeight / outerHeight)) : Number(state.zoom) * actualSizeScale;
        $('phone').style.width = `${outerWidth}px`;
        $('phone').style.height = `${outerHeight}px`;
        const bezel = state.landscape ? POCKET_BEZEL.landscape : POCKET_BEZEL.portrait;
        // 屏幕开口在边框图片里上下留边不对称，按素材几何定位 .screen
        $('phone').style.padding = `${bezel.screenY}px ${bezel.outerW - bezel.screenX - bezel.screenW}px ${bezel.outerH - bezel.screenY - bezel.screenH}px ${bezel.screenX}px`;
        $('phone').style.transform = `scale(${scale})`;
        $('deviceSlot').style.width = `${outerWidth * scale}px`;
        $('deviceSlot').style.height = `${outerHeight * scale}px`;
        $('deviceSlot').style.marginLeft = state.zoom === 'fit' ? '' : '0';
        // Keep oversized fixed-zoom devices reachable from their left edge.
        canvas.style.alignItems = outerWidth * scale > availableWidth ? 'flex-start' : 'center';
        $('scaleLabel').textContent = state.zoom === 'fit' ? `适应窗口 · 真机的 ${Math.round(scale / actualSizeScale * 100)}%` : `${Math.round(Number(state.zoom) * 100)}% · ${state.zoom === '1' ? '真机大小' : '相对真机'}`;
        const physicalRatio = scale / actualSizeScale;
        const shownWidth = (state.landscape ? device.bodyHeightMm : device.bodyWidthMm) * physicalRatio;
        const shownHeight = (state.landscape ? device.bodyWidthMm : device.bodyHeightMm) * physicalRatio;
        $('physicalSize').textContent = `显示约 ${shownWidth.toFixed(1)} × ${shownHeight.toFixed(1)} mm`;
        $('calibrationStatus').textContent = display.manual ? '当前显示器已手动校准' : display.system ? '已按系统显示器尺寸估算，可用尺子微调' : '暂按标准屏幕估算，需用尺子校准实际大小';
      }

      function render() {
        const width = state.landscape ? 874 : 402;
        const height = state.landscape ? 402 : 874;
        const top = state.status && !state.landscape ? 62 : 0;
        const bottom = state.home ? (state.landscape ? 21 : 34) : 0;
        const side = state.status && state.landscape ? 62 : 0;
        const inset = state.layout === 'inset';
        const screen = $('screen');
        screen.style.width = `${width}px`;
        screen.style.height = `${height}px`;
        screen.style.setProperty('--bar-color', state.barColor);
        screen.style.setProperty('--ink', state.theme === 'dark' ? '#161616' : '#ffffff');
        screen.style.setProperty('--safe-top', `${top}px`);
        screen.style.setProperty('--safe-bottom', `${bottom}px`);
        screen.style.setProperty('--safe-side', `${side}px`);
        screen.style.background = state.barColor;
        screen.classList.toggle('overlay', !inset);
        $('phone').classList.toggle('landscape', state.landscape);
        $('statusBar').hidden = !state.status;
        $('island').hidden = !state.status;
        $('homeArea').hidden = !state.home;
        $('guides').hidden = !state.guides;
        $('screenSpec').textContent = `${width} × ${height}`;
        $('viewportLabel').textContent = `${width - (inset ? side * 2 : 0)} × ${height - (inset ? top + bottom : 0)} 内容区`;
        const frame = $('previewFrame');
        frame.style.left = `${inset ? side : 0}px`;
        frame.style.top = `${inset ? top : 0}px`;
        frame.style.width = `${width - (inset ? side * 2 : 0)}px`;
        frame.style.height = `${height - (inset ? top + bottom : 0)}px`;
        $('batteryFill').style.width = `${21 * state.battery / 100}px`;
        const fill = state.battery <= 20 ? '#777777' : (state.theme === 'dark' ? '#161616' : '#ffffff');
        $('batteryFill').style.background = fill;
        $('batteryText').textContent = String(state.battery);
        $('batteryText').style.color = state.battery < 55 ? (state.theme === 'dark' ? '#161616' : '#ffffff') : (state.theme === 'dark' ? '#ffffff' : '#161616');
        $('batteryOutput').value = String(state.battery);
        $('rotateButton').querySelector('span').textContent = state.landscape ? '切换为竖屏' : '切换为横屏';
        for (const [id, key] of [['statusToggle', 'status'], ['homeToggle', 'home'], ['guideToggle', 'guides']]) $(id).checked = state[key];
        $('layoutMode').value = state.layout;
        $('zoomSelect').value = state.zoom;
        $('barColor').value = state.barColor;
        $('colorValue').textContent = state.barColor.toUpperCase();
        $('batteryLevel').value = state.battery;
        document.querySelectorAll('[data-theme]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.theme === state.theme)));
        $('layoutHint').textContent = inset ? '系统栏独立显示，页面内容不会被遮挡。' : '系统栏覆盖页面；参考线不改变 H5 的安全区变量。';
        pocketAnimationFrame = requestAnimationFrame(resizeDevice);
      }

      $('addressForm').addEventListener('submit', event => {
        event.preventDefault();
        try { navigate(normalizeAddress($('addressInput').value)); }
        catch (error) { toast(error.message); $('addressInput').setAttribute('aria-invalid', 'true'); $('addressInput').focus(); }
      });
      $('addressInput').addEventListener('input', () => $('addressInput').removeAttribute('aria-invalid'));
      $('previewFrame').addEventListener('load', () => {
        clearTimeout(loadingTimer);
        $('loadStatus').textContent = navigationMessage || (isDemo(currentUrl) ? '示例预览中' : '预览中 · 若空白请查看帮助');
      });
      $('refreshButton').addEventListener('click', () => { navigate(currentUrl, false); toast('已重新请求 H5 页面'); });
      $('externalButton').addEventListener('click', () => window.open(currentUrl, '_blank', 'noopener,noreferrer'));
      $('demoButton').addEventListener('click', () => { navigate(DEMO_URL, false); toast('已打开内置示例'); });
      $('rotateButton').addEventListener('click', () => { state.landscape = !state.landscape; render(); persist(); });
      for (const [id, key] of [['statusToggle', 'status'], ['homeToggle', 'home'], ['guideToggle', 'guides']]) {
        $(id).addEventListener('change', event => { state[key] = event.target.checked; render(); persist(); });
      }
      for (const [id, key] of [['layoutMode', 'layout'], ['zoomSelect', 'zoom'], ['barColor', 'barColor']]) {
        $(id).addEventListener('input', event => { state[key] = event.target.value; render(); persist(); });
      }
      $('batteryLevel').addEventListener('input', event => { state.battery = Number(event.target.value); render(); persist(); });
      $('themeOptions').addEventListener('click', event => {
        const button = event.target.closest('[data-theme]');
        if (!button) return;
        state.theme = button.dataset.theme; render(); persist();
      });
      $('resetButton').addEventListener('click', () => { Object.assign(state, defaults); render(); persist(); toast('已恢复默认外观'); });
      $('calibrationForm').addEventListener('submit', event => {
        event.preventDefault();
        const millimeters = Number($('measuredLength').value);
        if (!Number.isFinite(millimeters) || millimeters < 5 || millimeters > 300) { toast('请输入 5–300 mm 的实际测量长度'); return; }
        const cssWidth = $('calibrationRuler').getBoundingClientRect().width;
        calibrations[displayScale().key] = cssWidth * 25.4 / millimeters;
        state.zoom = '1';
        render(); persist();
        toast('已校准，100% 现在对应真机物理大小');
      });
      $('clearCalibration').addEventListener('click', () => { delete calibrations[displayScale().key]; $('measuredLength').value = ''; render(); persist(); });
      window.addEventListener('pocketdisplaychange', () => { $('measuredLength').value = ''; resizeDevice(); });
      window.addEventListener('resize', resizeDevice);

      function proxySupported() { return window.pocketProxyAvailable === true && Boolean(window.pocketDesktop || window.webkit?.messageHandlers?.pocketProxy); }
      function updateProxyAvailability() {
        const available = proxySupported();
        $('proxyForm').querySelectorAll('input,button').forEach(element => { element.disabled = !available; });
        if (!available) $('proxyStatus').textContent = "面板版不支持应用内代理：iframe 请求沿用宿主浏览器的网络设置。";
      }
      function sendProxyRequest(action, config = {}) {
        if (!proxySupported()) return;
        const requestId = ++proxyRequest;
        clearTimeout(pendingProxy?.timer);
        pendingProxy = {requestId, action, timer: setTimeout(() => { $('applyProxy').disabled = false; $('proxyStatus').textContent = '未收到应用响应，请重新应用配置'; pendingProxy = null; }, 8000)};
        $('applyProxy').disabled = true;
        const message = {action, requestId, ...config};
        if (window.pocketDesktop) window.pocketDesktop.proxy(message)
          .then(detail => window.dispatchEvent(new CustomEvent('pocketproxyresult', {detail})))
          .catch(() => window.dispatchEvent(new CustomEvent('pocketproxyresult', {detail: {requestId, ok: false, message: '应用未能应用代理，请重试'}})));
        else window.webkit.messageHandlers.pocketProxy.postMessage(message);
      }
      window.addEventListener('pocketproxyresult', event => {
        const result = event.detail;
        if (!pendingProxy || result?.requestId !== pendingProxy.requestId) return;
        const action = pendingProxy.action;
        clearTimeout(pendingProxy.timer); pendingProxy = null;
        $('applyProxy').disabled = !proxySupported();
        if (!result.ok) { $('proxyStatus').textContent = result.message || '代理配置失败'; return; }
        $('proxyEnabled').checked = result.enabled;
        $('proxyBadge').textContent = result.enabled ? '已应用' : '未启用';
        $('proxyStatus').textContent = result.enabled ? '配置已应用；连接状态以页面实际加载结果为准' : '未启用应用内代理，使用系统网络设置';
        if (action === 'apply') { persist(); navigate(currentUrl, false); toast(result.enabled ? '已应用 SOCKS5，正在重新加载预览' : '已关闭应用内代理'); }
      });
      $('proxyForm').addEventListener('submit', event => {
        event.preventDefault();
        const enabled = $('proxyEnabled').checked;
        const host = $('proxyHost').value.trim().replace(/^\[|\]$/g, '');
        const port = Number($('proxyPort').value);
        if (enabled && (!host || !/^[a-z\d._:-]+$/i.test(host) || !Number.isInteger(port) || port < 1 || port > 65535)) { $('proxyStatus').textContent = '请填写有效的服务器主机名或 IP，以及 1–65535 的端口'; return; }
        const username = $('proxyUsername').value;
        const password = $('proxyPassword').value;
        if (enabled && ((password && !username) || new TextEncoder().encode(username).length > 255 || new TextEncoder().encode(password).length > 255)) { $('proxyStatus').textContent = '使用密码时请同时填写账号；账号和密码各不能超过 255 字节'; return; }
        $('proxyStatus').textContent = '正在应用代理配置…';
        sendProxyRequest('apply', {enabled, host, port, username, password});
      });
      if (typeof saved.proxyEndpoint?.host === 'string' && /^[a-z\d._:-]{1,253}$/i.test(saved.proxyEndpoint.host)) $('proxyHost').value = saved.proxyEndpoint.host;
      if (/^\d{1,5}$/.test(String(saved.proxyEndpoint?.port))) $('proxyPort').value = saved.proxyEndpoint.port;
      window.addEventListener('pocketdisplaychange', updateProxyAvailability);
      updateProxyAvailability();
      sendProxyRequest('status');
      function openHelp() {
        const dialog = $('helpDialog');
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else {
          dialog.classList.add('fallback-dialog');
          dialog.setAttribute('open', '');
          $('helpBackdrop').hidden = false;
          $('closeHelpButton').focus();
        }
      }
      function closeHelp() {
        const dialog = $('helpDialog');
        if (typeof dialog.close === 'function') dialog.close();
        else dialog.removeAttribute('open');
        $('helpBackdrop').hidden = true;
      }
      for (const id of ['helpButton', 'troubleshootButton']) $(id).addEventListener('click', openHelp);
      $('closeHelpButton').addEventListener('click', closeHelp);
      $('helpBackdrop').addEventListener('click', closeHelp);
      $('helpDialog').addEventListener('click', event => { if (event.target === $('helpDialog')) { const rect = $('helpDialog').getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeHelp(); } });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && $('helpDialog').hasAttribute('open')) closeHelp();
        if ((event.metaKey || event.ctrlKey) && event.key === 'Enter' && !$('helpDialog').hasAttribute('open')) {
          event.preventDefault();
          const form = $('addressForm');
          if (typeof form.requestSubmit === 'function') form.requestSubmit();
          else form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
      });
      const canvasObserver = new ResizeObserver(resizeDevice);
        canvasObserver.observe($('canvas'));
      updateHistory();
      render();
      const requested = saved.url;
      let firstUrl = DEMO_URL;
      if (requested) { try { firstUrl = normalizeAddress(requested); } catch { /* Fall back to the included demo. */ } }
      navigate(firstUrl, false);

      return function disposePocketH5() {
        for (let index = 0; index < listeners.length; index += 1) {
          try { realWindow.removeEventListener(listeners[index][0], listeners[index][1], listeners[index][2]); }
          catch (error) { /* 面板已失效时忽略 */ }
        }
        listeners.length = 0;
        clearTimeout(toastTimer);
        clearTimeout(loadingTimer);
        if (pendingProxy && pendingProxy.timer) clearTimeout(pendingProxy.timer);
        if (pocketAnimationFrame) cancelAnimationFrame(pocketAnimationFrame);
        try { canvasObserver.disconnect(); } catch (error) { /* 忽略 */ }
      };
    }

    /* ------------------------------------------------------------------ *
     * Pocket H5 —— 「手机扫码」增值功能（client.js 的片段源，不是独立 ES 模块）
     *
     * 上游工作台只做桌面预览。真机验收时经常需要把同一个 H5 在手机上打开，
     * 所以这里在地址栏加一个二维码按钮：把当前预览地址渲染成二维码，手机扫一下即可打开。
     *
     * 设计约束：
     *   - 完全离线：二维码用 vendor/qrcode（node-qrcode 1.5.4 的矩阵内核，MIT）在本地生成，
     *     不把 H5 地址发给任何在线服务；由 build-client.mjs 打包进 client.js。
     *   - 不引入新依赖、不弹新窗口：按钮与对话框都加在面板自己的 Shadow DOM 里，
     *     沿用上游的黑白灰视觉与 .icon-button / dialog 样式。
     *   - 手机能不能打开取决于地址：127.0.0.1 / localhost 在手机上指向手机自己，
     *     所以对话框会明确提示改用电脑的局域网 IP。
     * ------------------------------------------------------------------ */

    const QR_CSS = `
    /* ---- 手机扫码（构建期追加，沿用工作台黑白灰） ---- */
    .qr-dialog { width: min(372px, calc(100vw - 40px)); padding: 24px 26px 22px; }
    .qr-dialog .dialog-heading h2 { margin: 8px 0 18px; font-size: 19px; letter-spacing: -.3px; }
    .qr-dialog .qr-close { width: 32px; height: 32px; flex-shrink: 0; }
    .qr-body { display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .qr-frame {
      display: grid;
      place-items: center;
      width: 232px;
      height: 232px;
      padding: 12px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: #ffffff;
    }
    .qr-frame svg { width: 100%; height: 100%; display: block; stroke: none; }
    .qr-frame svg * { stroke: none; }
    .qr-empty { font-size: 11.5px; line-height: 1.8; color: #757575; text-align: center; padding: 0 8px; }
    .qr-url {
      max-width: 100%;
      font: 11px ui-monospace, SFMono-Regular, Menlo, monospace;
      color: #4a4a4a;
      text-align: center;
      overflow-wrap: anywhere;
    }
    .qr-hint { font-size: 11px; line-height: 1.85; color: #757575; }
    .qr-hint b { font-weight: 600; color: #4a4a4a; }
    `

    /** 静区（二维码四周留白）模块数；扫码器需要 4 个模块的静区才稳定。 */
    const QR_QUIET_MODULES = 4

    /** 由打包进 client.js 的 vendor/qrcode 生成的 { size, data } 矩阵。 */
    function qrMatrix(text) {
      return createQrMatrix(text)
    }

    /** 把矩阵画成内联 SVG（1 个模块 = 1 个用户单位，crispEdges 保证不糊）。 */
    function qrSvgMarkup(text) {
      const qr = qrMatrix(text)
      const size = qr.size
      const total = size + QR_QUIET_MODULES * 2
      const parts = []
      for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
          if (qr.data[y * size + x]) parts.push('M' + (x + QR_QUIET_MODULES) + ' ' + (y + QR_QUIET_MODULES) + 'h1v1h-1z')
        }
      }
      return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + total + ' ' + total +
        '" shape-rendering="crispEdges" role="img" aria-label="预览地址二维码">' +
        '<rect width="' + total + '" height="' + total + '" fill="#ffffff"/>' +
        '<path d="' + parts.join('') + '" fill="#161616"/>' +
        '</svg>'
      )
    }

    /** 手机能否访问：loopback 地址在手机上指向手机自己，必须换成局域网 IP。 */
    function qrIsLoopbackHost(hostname) {
      return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]' || hostname === '::1'
    }

    /**
     * 在面板里挂载二维码按钮与对话框。
     * @param {ShadowRoot} shadow 面板 Shadow DOM（工作台标记已注入）
     * @returns {() => void} 清理函数（面板卸载/严格模式重建时移除本功能添加的节点）
     */
    function mountQrFeature(shadow) {
      const addressButtons = shadow.querySelector('.address-buttons')
      const root = shadow.querySelector('.pocket-h5-root')
      if (!addressButtons || !root) return function () {}

      const button = document.createElement('button')
      button.id = 'qrButton'
      button.type = 'button'
      button.className = 'icon-button'
      button.title = '生成二维码 · 手机扫码打开'
      button.setAttribute('aria-label', '生成二维码')
      button.innerHTML =
        '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/>' +
        '<rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>' +
        '<rect x="14" y="14" width="7" height="7" rx="1"/></svg>'
      addressButtons.append(button)

      const dialog = document.createElement('dialog')
      dialog.id = 'qrDialog'
      dialog.className = 'qr-dialog'
      dialog.innerHTML =
        '<div class="dialog-heading"><div><span class="eyebrow">手机预览</span><h2>扫码在手机上打开</h2></div>' +
        '<button type="button" class="icon-button qr-close" aria-label="关闭二维码">' +
        '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div>' +
        '<div class="qr-body"><div class="qr-frame" id="qrFrame"></div>' +
        '<p class="qr-url" id="qrUrl"></p><p class="qr-hint" id="qrHint"></p></div>'
      root.append(dialog)

      const frame = shadow.getElementById('qrFrame')
      const urlLine = shadow.getElementById('qrUrl')
      const hint = shadow.getElementById('qrHint')

      const open = function () {
        const source = pocketPreviewTarget(shadow)
        const demoUrl = pocketDemoUrl()
        let url = ''
        let problem = ''
        if (!source || source === 'about:blank' || source === demoUrl || source.indexOf('dsh-app:') === 0) {
          problem = '当前是内置示例。先在上方输入你的 H5 地址并「打开预览」，再生成二维码。'
        } else {
          try {
            url = new URL(source).href
          } catch (error) {
            problem = '当前预览地址无法生成二维码，请重新输入。'
          }
        }

        if (problem) {
          frame.innerHTML = '<span class="qr-empty">' + problem + '</span>'
          urlLine.textContent = ''
          hint.innerHTML = ''
          if (typeof dialog.showModal === 'function') dialog.showModal()
          else dialog.setAttribute('open', '')
          return
        }

        frame.innerHTML = qrSvgMarkup(url)
        urlLine.textContent = url
        const parsed = new URL(url)
        hint.innerHTML = qrIsLoopbackHost(parsed.hostname)
          ? '手机与电脑需在同一局域网。<b>' + parsed.hostname + '</b> 在手机上指向手机自己，' +
            '请把地址改成电脑的局域网 IP（例如 <b>192.168.1.23:' + (parsed.port || '80') + '</b>）后重新预览，' +
            '并确认 H5 开发服务监听在 0.0.0.0 或局域网地址上。'
          : '手机与电脑需能互相访问该地址；H5 开发服务需监听局域网地址，而不是只监听本机。'
        if (typeof dialog.showModal === 'function') dialog.showModal()
        else dialog.setAttribute('open', '')
      }

      const close = function () {
        if (typeof dialog.close === 'function') dialog.close()
        else dialog.removeAttribute('open')
      }

      button.addEventListener('click', open)
      dialog.querySelector('.qr-close').addEventListener('click', close)
      dialog.addEventListener('click', function (event) {
        if (event.target !== dialog) return
        const rect = dialog.getBoundingClientRect()
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close()
      })

      return function disposeQrFeature() {
        button.remove()
        dialog.remove()
      }
    }

    /* ------------------------------------------------------------------ *
     * Pocket H5 —— 「预览诊断」增值功能（client.js 的片段源，不是独立 ES 模块）
     *
     * 用户经常遇到「页面打不开」，但原因完全不同：站点禁止被 iframe 嵌入、
     * 被重定向到登录页、服务没启动、或登录需要弹窗。上游工具只能提示「页面可能
     * 通过 X-Frame-Options 禁止嵌入」，没有诊断入口。这里加一个「诊断」按钮：
     * 由 Host 半请求目标地址（只读响应头），把结论翻译成人话并给出下一步操作。
     * ------------------------------------------------------------------ */

    const DIAGNOSIS_CSS = `
    /* ---- 预览诊断（构建期追加，沿用工作台黑白灰） ---- */
    .diagnose-dialog { width: min(430px, calc(100vw - 40px)); padding: 24px 26px 22px; }
    .diagnose-dialog .dialog-heading h2 { margin: 8px 0 18px; font-size: 19px; letter-spacing: -.3px; }
    .diagnose-dialog .diagnose-close { width: 32px; height: 32px; flex-shrink: 0; }
    .diagnose-body { display: flex; flex-direction: column; gap: 10px; font-size: 11.5px; line-height: 1.8; color: #565656; }
    .diagnose-loading { color: #757575; }
    .diagnose-title { margin: 0; font-size: 13px; font-weight: 600; color: #2e2e2e; }
    .diagnose-title[data-tone="error"] { color: #1f1f1f; }
    .diagnose-title[data-tone="warn"] { color: #3a3a3a; }
    .diagnose-lines, .diagnose-tips { margin: 0; padding-left: 16px; }
    .diagnose-lines li, .diagnose-tips li { margin: 3px 0; overflow-wrap: anywhere; }
    .diagnose-tips { border-top: 1px dashed var(--line-strong); padding-top: 10px; }
    .diagnose-tips li b { font-weight: 600; color: #4a4a4a; }
    .diagnose-badge {
      align-self: flex-start;
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--surface-3);
      font-size: 10px;
      color: #4a4a4a;
    }
    `

    /** 纯函数：把 Host 的探测结果翻译成标题 + 事实 + 建议（无 DOM，便于冒烟测试）。 */
    function summarizeProbe(payload) {
      if (!payload || payload.ok !== true) {
        return {
          tone: 'error',
          title: '诊断没有完成',
          badge: '无法访问',
          lines: [payload && typeof payload.message === 'string' ? payload.message : '没有拿到诊断结果'],
          tips: ['先确认 H5 开发服务已在本机启动，地址与端口正确。', '如果刚更新过插件，Host 半需要重启 DSH 才会提供诊断接口。'],
        }
      }

      const lines = []
      const redirects = Array.isArray(payload.redirects) ? payload.redirects : []
      lines.push('HTTP ' + payload.status + (redirects.length > 0 ? '（经过 ' + redirects.length + ' 次跳转）' : ''))
      if (payload.finalUrl && payload.finalUrl !== payload.requestedUrl) lines.push('最终地址：' + payload.finalUrl)
      if (redirects.length > 0 && redirects[0].to) lines.push('第一次跳转：' + redirects[0].to)
      const framing = payload.framing || {}
      const login = payload.login || {}

      if (framing.allowed === false) {
        lines.push('嵌入限制：' + (framing.reason || '站点不允许被 iframe 嵌入'))
        return {
          tone: 'error',
          title: '站点禁止被嵌入',
          badge: '禁止 iframe',
          lines,
          tips: [
            '在 H5 开发服务里去掉 <b>X-Frame-Options</b>，或把 CSP 的 <b>frame-ancestors</b> 设为允许 <b>dsh-app://app</b>（浏览器版 GUI 再加 http://127.0.0.1:&lt;端口&gt;）。',
            '临时查看可以点「在系统浏览器打开」或用手机扫码；工具不会绕过站点限制。',
          ],
        }
      }

      if (login.detected === true) {
        lines.push('登录信号：' + (login.reason || '页面需要登录'))
        return {
          tone: 'warn',
          title: '页面需要登录',
          badge: '登录',
          lines,
          tips: [
            '在预览里直接登录一次：登录态保存在 DSH 应用自己的浏览器会话里，重启 DSH 后一般仍在。',
            '若登录依赖弹窗 / 第三方 SSO：弹窗会被系统浏览器接管，登录结果回传不到预览——请用「在系统浏览器打开」或手机扫码。',
          ],
        }
      }

      lines.push('嵌入限制：' + (framing.reason || '未发现限制'))
      lines.push('登录信号：' + (login.reason || '未检测到登录跳转'))
      return {
        tone: 'ok',
        title: '页面可以嵌入，未检测到登录跳转',
        badge: '看起来正常',
        lines,
        tips: [
          '如果预览仍然空白：可能是页面 JS 反嵌入、HTTPS 页面嵌入 HTTP 内容，或目标服务只接受特定来源。',
          '先用「在系统浏览器打开」确认站点本身可访问，再回到预览里登录。',
        ],
      }
    }

    /**
     * 在面板里挂载「诊断」按钮与结果对话框。
     * @param {ShadowRoot} shadow 面板 Shadow DOM（工作台标记已注入）
     * @returns {() => void} 清理函数
     */
    function mountDiagnoseFeature(shadow) {
      const demoButton = shadow.getElementById('demoButton')
      const root = shadow.querySelector('.pocket-h5-root')
      if (!demoButton || !root) return function () {}

      const button = document.createElement('button')
      button.id = 'diagnoseButton'
      button.type = 'button'
      button.className = 'text-button small'
      button.title = '诊断当前预览地址：为什么打不开 / 是否需要登录'
      button.setAttribute('aria-label', '诊断当前预览地址')
      button.textContent = '诊断'
      demoButton.insertAdjacentElement('afterend', button)

      const dialog = document.createElement('dialog')
      dialog.id = 'diagnoseDialog'
      dialog.className = 'diagnose-dialog'
      dialog.innerHTML =
        '<div class="dialog-heading"><div><span class="eyebrow">预览诊断</span><h2>为什么打不开？</h2></div>' +
        '<button type="button" class="icon-button diagnose-close" aria-label="关闭诊断">' +
        '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div>' +
        '<div class="diagnose-body" id="diagnoseBody"></div>'
      root.append(dialog)

      const bodyEl = shadow.getElementById('diagnoseBody')

      const clearBody = function () {
        bodyEl.replaceChildren()
      }

      const renderLoading = function (message) {
        clearBody()
        const loading = document.createElement('p')
        loading.className = 'diagnose-loading'
        loading.textContent = message
        bodyEl.append(loading)
      }

      const renderSummary = function (summary) {
        clearBody()
        const badge = document.createElement('span')
        badge.className = 'diagnose-badge'
        badge.textContent = summary.badge || (summary.tone === 'ok' ? '正常' : '注意')
        const title = document.createElement('p')
        title.className = 'diagnose-title'
        title.setAttribute('data-tone', summary.tone || 'ok')
        title.textContent = summary.title
        const lines = document.createElement('ul')
        lines.className = 'diagnose-lines'
        for (const line of summary.lines || []) {
          const item = document.createElement('li')
          item.textContent = line
          lines.append(item)
        }
        bodyEl.append(badge, title, lines)
        const tips = summary.tips || []
        if (tips.length > 0) {
          const tipList = document.createElement('ul')
          tipList.className = 'diagnose-tips'
          for (const tip of tips) {
            const item = document.createElement('li')
            // tips 是插件内固定文案（含少量 <b> 强调），不是用户输入。
            item.innerHTML = tip
            tipList.append(item)
          }
          bodyEl.append(tipList)
        }
      }

      const run = async function () {
        const source = pocketPreviewTarget(shadow)
        const demoUrl = pocketDemoUrl()
        if (!source || source === 'about:blank' || source === demoUrl || source.indexOf('dsh-app:') === 0) {
          renderSummary({
            tone: 'warn',
            title: '当前是内置示例',
            badge: '无地址',
            lines: ['先在上方输入并打开你的 H5 地址，再运行诊断。'],
            tips: [],
          })
          return
        }

        renderLoading('正在从 DSH 宿主机诊断该地址…')
        let payload = null
        try {
          const endpoint = new URL('/pocket-h5/probe.json', window.location.origin)
          endpoint.searchParams.set('url', source)
          const response = await fetch(endpoint.href, { cache: 'no-store' })
          payload = await response.json()
        } catch (error) {
          payload = { ok: false, message: '无法调用诊断接口：Host 半可能需要重启 DSH 才会生效' }
        }
        renderSummary(summarizeProbe(payload))
      }

      const open = function () {
        if (typeof dialog.showModal === 'function') dialog.showModal()
        else dialog.setAttribute('open', '')
        run().catch(function ignore() {})
      }

      const close = function () {
        if (typeof dialog.close === 'function') dialog.close()
        else dialog.removeAttribute('open')
      }

      button.addEventListener('click', open)
      dialog.querySelector('.diagnose-close').addEventListener('click', close)
      dialog.addEventListener('click', function (event) {
        if (event.target !== dialog) return
        const rect = dialog.getBoundingClientRect()
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close()
      })

      return function disposeDiagnoseFeature() {
        button.remove()
        dialog.remove()
      }
    }

    /* ------------------------------------------------------------------ *
     * Pocket H5 —— 「登录桥」增值功能（client.js 的片段源，不是独立 ES 模块）
     *
     * 解决的问题：内嵌 iframe 用 DSH 应用自己的 Chromium 会话，拿不到 Safari 里
     * 已经登录的 Cookie。做法：Host 起一个只监听 127.0.0.1 的反向代理，把 Safari
     * 导入的 Cookie 注入上游请求；面板让 iframe 走这个代理（代理 origin 是
     * http://127.0.0.1:<随机端口>，root 挂载，页面里的绝对路径仍可用）。
     *
     * 边界（对话框里也写明）：
     *   - Cookie 只存在 Host 内存，停止/面板卸载/闲置 30 分钟即释放；
     *   - 只能带 Cookie 认证；页面里写死绝对地址、或调用其它域名 API 时不会经过代理；
     *   - 代理会剥离 X-Frame-Options 与 CSP frame-ancestors，让原本禁止嵌入的页面也能看；
     *   - 读 Safari Cookie 需要给 DSH 授「完全磁盘访问权限」；也支持手动粘贴 Cookie。
     * ------------------------------------------------------------------ */

    const BRIDGE_CSS = `
    /* ---- 登录桥（构建期追加，沿用工作台黑白灰） ---- */
    .bridge-dialog { width: min(460px, calc(100vw - 40px)); padding: 24px 26px 22px; }
    .bridge-dialog .dialog-heading h2 { margin: 8px 0 16px; font-size: 19px; letter-spacing: -.3px; }
    .bridge-dialog .bridge-close { width: 32px; height: 32px; flex-shrink: 0; }
    .bridge-body { display: flex; flex-direction: column; gap: 10px; font-size: 11.5px; line-height: 1.8; color: #565656; }
    .bridge-target { font: 11px ui-monospace, SFMono-Regular, Menlo, monospace; color: #4a4a4a; overflow-wrap: anywhere; }
    .bridge-status { padding: 9px 11px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface-2); font-size: 11px; line-height: 1.7; color: #5b5b5b; }
    .bridge-status[data-tone="error"] { border-color: #bdbdbd; color: #2b2b2b; }
    .bridge-status[data-tone="warn"] { border-color: #d0d0d0; color: #3d3d3d; }
    .bridge-actions { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
    .bridge-actions .outline-button { width: auto; flex: 1 1 200px; margin-top: 0; }
    .bridge-actions .text-button { padding: 6px 4px; }
    .bridge-manual { margin-top: 2px; }
    .bridge-manual summary { cursor: pointer; font-size: 11px; color: #5f5f5f; }
    .bridge-manual textarea {
      box-sizing: border-box;
      width: 100%;
      min-height: 64px;
      margin-top: 6px;
      padding: 8px 9px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: var(--surface-2);
      font: 11px ui-monospace, SFMono-Regular, Menlo, monospace;
      color: #333333;
      resize: vertical;
    }
    .bridge-banner {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 7px 12px;
      border-bottom: 1px solid var(--line);
      background: var(--surface-2);
      font-size: 11px;
      color: #3d3d3d;
    }
    .bridge-banner .bridge-dot { width: 6px; height: 6px; border-radius: 50%; background: #4a4a4a; flex-shrink: 0; }
    .bridge-banner .bridge-banner-text { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .bridge-banner .text-button { margin-left: auto; flex-shrink: 0; }
    `

    /** 桥接状态的展示文案（纯函数，便于冒烟测试）。 */
    function bridgeBannerText(state) {
      if (!state || state.active !== true) return '登录桥未启用'
      const source = state.source === 'manual' ? '手动 Cookie' : 'Safari'
      return (
        '登录桥已启用 · ' +
        source +
        ' · ' +
        String(state.cookieCount ?? 0) +
        ' 个 Cookie · 预览经本机代理'
      )
    }

    /** 只允许 http/https 的预览地址走登录桥（dsh-app 示例页没有登录态可带）。 */
    function bridgeCanTarget(url) {
      if (typeof url !== 'string' || url === '') return false
      try {
        const parsed = new URL(url)
        return parsed.protocol === 'http:' || parsed.protocol === 'https:'
      } catch {
        return false
      }
    }

    /**
     * 在面板里挂载「登录桥」按钮、对话框和状态条。
     * @param {ShadowRoot} shadow 面板 Shadow DOM
     * @returns {() => void} 清理函数（停止桥接并移除新增节点）
     */
    function mountBridgeFeature(shadow) {
      const demoButton = shadow.getElementById('demoButton')
      const root = shadow.querySelector('.pocket-h5-root')
      const mainPanel = shadow.querySelector('.main-panel')
      if (!demoButton || !root || !mainPanel) return function () {}

      const endpoint = function () {
        return new URL('/pocket-h5/bridge.json', window.location.origin).href
      }

      const callBridge = async function (payload) {
        const response = await fetch(endpoint(), {
          method: payload === undefined ? 'GET' : 'POST',
          cache: 'no-store',
          headers: payload === undefined ? undefined : { 'Content-Type': 'application/json' },
          body: payload === undefined ? undefined : JSON.stringify(payload),
        })
        return await response.json()
      }

      const button = document.createElement('button')
      button.id = 'bridgeButton'
      button.type = 'button'
      button.className = 'text-button small'
      button.title = '登录桥：用 Safari 已登录的 Cookie 经本机代理预览'
      button.setAttribute('aria-label', '登录桥')
      button.textContent = '登录桥'
      demoButton.insertAdjacentElement('afterend', button)

      // 顶部状态条（仅在桥接启用时出现）
      const banner = document.createElement('div')
      banner.id = 'bridgeBanner'
      banner.className = 'bridge-banner'
      banner.hidden = true
      banner.innerHTML =
        '<span class="bridge-dot" aria-hidden="true"></span>' +
        '<span class="bridge-banner-text" id="bridgeBannerText"></span>' +
        '<button type="button" class="text-button small" id="bridgeBannerStop">恢复直连</button>'
      const canvas = shadow.getElementById('canvas')
      if (canvas) mainPanel.insertBefore(banner, canvas)
      else mainPanel.append(banner)

      const dialog = document.createElement('dialog')
      dialog.id = 'bridgeDialog'
      dialog.className = 'bridge-dialog'
      dialog.innerHTML =
        '<div class="dialog-heading"><div><span class="eyebrow">登录态</span><h2>登录桥</h2></div>' +
        '<button type="button" class="icon-button bridge-close" aria-label="关闭登录桥">' +
        '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div>' +
        '<div class="bridge-body">' +
        '<p class="bridge-target" id="bridgeTargetText"></p>' +
        '<div class="bridge-status" id="bridgeStatus" data-tone="info">正在读取状态…</div>' +
        '<div class="bridge-actions">' +
        '<button type="button" class="outline-button" id="bridgeStart">从 Safari 导入并开启桥接</button>' +
        '<button type="button" class="text-button small" id="bridgeRefresh">重新导入</button>' +
        '<button type="button" class="text-button small" id="bridgeStop">停止桥接</button>' +
        '</div>' +
        '<details class="bridge-manual"><summary>读取不到 Safari（或不想授权）？手动粘贴 Cookie</summary>' +
        '<textarea id="bridgeManualCookies" spellcheck="false" placeholder="从 DevTools 复制的完整 Cookie 请求头，例如：sid=...; token=..."></textarea>' +
        '<div class="bridge-actions"><button type="button" class="outline-button" id="bridgeManualStart">用手动 Cookie 开启桥接</button></div>' +
        '</details>' +
        '<p>只用 Cookie 认证；密码/扫码类登录仍需在预览里完成。停止、面板卸载或闲置 30 分钟会释放 Cookie。</p>' +
        '</div>'
      root.append(dialog)

      const statusEl = shadow.getElementById('bridgeStatus')
      const targetEl = shadow.getElementById('bridgeTargetText')
      const bannerText = shadow.getElementById('bridgeBannerText')
      const manualInput = shadow.getElementById('bridgeManualCookies')

      const setStatus = function (text, tone) {
        statusEl.textContent = text
        statusEl.setAttribute('data-tone', tone || 'info')
      }

      const showBanner = function (state) {
        if (!state || state.active !== true) {
          banner.hidden = true
          bannerText.textContent = ''
          return
        }
        banner.hidden = false
        bannerText.textContent = bridgeBannerText(state)
      }

      const previewFrame = function () {
        return shadow.getElementById('previewFrame')
      }

      /** 应用桥接状态：iframe 改为加载代理地址；关闭时恢复直连。 */
      const applyState = function (state, reload) {
        const frame = previewFrame()
        if (!state || state.active !== true) {
          window.pocketBridge = null
          showBanner(null)
          return
        }
        window.pocketBridge = { target: state.target, entryUrl: state.entryUrl }
        showBanner(state)
        if (frame && (reload || frame.getAttribute('src') !== state.entryUrl)) frame.src = state.entryUrl
        if (state.warning) setStatus(state.warning, 'warn')
      }

      const currentTarget = function () {
        return pocketPreviewTarget(shadow)
      }

      const openDialog = async function () {
        if (typeof dialog.showModal === 'function') dialog.showModal()
        else dialog.setAttribute('open', '')
        const target = currentTarget()
        const demo = pocketDemoUrl()
        if (!bridgeCanTarget(target) || target === demo) {
          targetEl.textContent = '当前预览不是可登录的 http(s) 地址'
          setStatus('先输入并打开你的 H5 地址（内置示例没有登录态可带），再开启登录桥。', 'warn')
          return
        }
        targetEl.textContent = target
        try {
          const state = await callBridge()
          if (state.active === true && state.target === target) {
            setStatus(bridgeBannerText(state), 'ok')
          } else if (state.active === true) {
            setStatus('当前有一个针对其它地址的桥接在运行；开启会替换它。', 'warn')
          } else {
            setStatus('尚未开启。开启后会从 Safari 读取该站点的 Cookie（需要给 DSH 完全磁盘访问权限）。')
          }
        } catch (error) {
          setStatus('读取桥接状态失败：Host 半可能需要重启 DSH 才会生效。', 'error')
        }
      }

      const closeDialog = function () {
        if (typeof dialog.close === 'function') dialog.close()
        else dialog.removeAttribute('open')
      }

      const startWith = async function (payload) {
        setStatus('正在启动登录桥…')
        let state
        try {
          state = await callBridge(payload)
        } catch (error) {
          setStatus('无法调用登录桥接口：Host 半可能需要重启 DSH 才会生效。', 'error')
          return
        }
        if (state.ok !== true) {
          if (state.code === 'safari-permission') {
            setStatus(
              state.message ||
                '读取 Safari Cookie 被系统拒绝：请到「系统设置 → 隐私与安全性 → 完全磁盘访问权限」添加 DSH NEXT 并打开开关，然后重启 DSH；或改用下方「手动粘贴 Cookie」。',
              'error',
            )
          } else {
            setStatus(state.message || '登录桥启动失败', 'error')
          }
          return
        }
        applyState(state, true)
        setStatus(bridgeBannerText(state), 'ok')
        closeDialog()
      }

      const startButton = shadow.getElementById('bridgeStart')
      const refreshButton = shadow.getElementById('bridgeRefresh')
      const stopButton = shadow.getElementById('bridgeStop')
      const manualButton = shadow.getElementById('bridgeManualStart')
      const bannerStop = shadow.getElementById('bridgeBannerStop')
      const closeButton = shadow.querySelector('#bridgeDialog .bridge-close')

      const onStart = function () {
        const target = currentTarget()
        if (!bridgeCanTarget(target) || target === pocketDemoUrl()) {
          setStatus('先打开一个真实的 H5 地址再开启登录桥。', 'warn')
          return
        }
        startWith({ action: 'start', target }).catch(function (error) {
          setStatus(String(error && error.message ? error.message : error), 'error')
        })
      }

      const onManualStart = function () {
        const target = currentTarget()
        if (!bridgeCanTarget(target) || target === pocketDemoUrl()) {
          setStatus('先打开一个真实的 H5 地址再开启登录桥。', 'warn')
          return
        }
        const cookies = String(manualInput.value || '').trim()
        if (cookies === '') {
          setStatus('先把浏览器里的 Cookie 请求头粘贴到文本框。', 'warn')
          return
        }
        startWith({ action: 'start', target, cookies }).catch(function (error) {
          setStatus(String(error && error.message ? error.message : error), 'error')
        })
      }

      const onRefresh = async function () {
        setStatus('正在从 Safari 重新导入…')
        try {
          const state = await callBridge({ action: 'refresh' })
          if (state.ok !== true) {
            setStatus(state.message || '重新导入失败', 'error')
            return
          }
          applyState(state, true)
          setStatus(bridgeBannerText(state), 'ok')
        } catch (error) {
          setStatus('重新导入失败：Host 半可能未加载。', 'error')
        }
      }

      const onStop = async function () {
        try {
          await callBridge({ action: 'stop' })
        } catch (error) {
          // Host 不可用时也要把面板恢复成直连。
        }
        const target = window.pocketBridge && window.pocketBridge.target
        window.pocketBridge = null
        showBanner(null)
        const frame = previewFrame()
        if (frame && bridgeCanTarget(target)) frame.src = target
        setStatus('已停止桥接，恢复直连（直连时没有 Safari 登录态）。')
      }

      button.addEventListener('click', function () {
        openDialog().catch(function ignore() {})
      })
      startButton.addEventListener('click', onStart)
      manualButton.addEventListener('click', onManualStart)
      refreshButton.addEventListener('click', function () {
        onRefresh().catch(function ignore() {})
      })
      stopButton.addEventListener('click', function () {
        onStop().catch(function ignore() {})
      })
      bannerStop.addEventListener('click', function () {
        onStop().catch(function ignore() {})
      })
      closeButton.addEventListener('click', closeDialog)
      dialog.addEventListener('click', function (event) {
        if (event.target !== dialog) return
        const rect = dialog.getBoundingClientRect()
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog()
      })

      // 面板重新进入时恢复仍然存活的桥接（例如切换面板后又切回来）。
      callBridge()
        .then(function (state) {
          if (state.active !== true) return
          const target = currentTarget()
          window.pocketBridge = { target: state.target, entryUrl: state.entryUrl }
          showBanner(state)
          const frame = previewFrame()
          if (frame && state.entryUrl) frame.src = state.entryUrl
        })
        .catch(function ignore() {})

      return function disposeBridgeFeature() {
        const wasActive = window.pocketBridge !== null && window.pocketBridge !== undefined
        window.pocketBridge = null
        if (wasActive) {
          callBridge({ action: 'stop' }).catch(function ignore() {})
        }
        button.remove()
        banner.remove()
        dialog.remove()
      }
    }

    /* ------------------------------------------------------------------ *
     * Pocket H5 —— 面板外观层（client.js 的片段源，不是独立 ES 模块）
     *
     * 把上游「整页表单」重排成 FlowPilot 风格的工作台：
     *   48px 顶栏（品牌 + 当前页面 + 状态 + 动作）/ 左侧设置卡片 / 右侧手机画布卡片，
     *   三层表面（base / surface / surface-2）+ 12px 圆角 + 4 栅格间距，颜色一律用
     *   light-dark() 成对声明 —— 跟随 DSH 的 color-scheme，自动明暗切换。
     * 只做外观与 DOM 重排：所有上游 id、事件、预览逻辑保持不变。
     * ------------------------------------------------------------------ */

    const PANEL_THEME_CSS = String.raw`
    /* ==================================================================
     * 1. 设计令牌：light-dark() 成对声明，跟随宿主 color-scheme
     * ================================================================== */
    .ph-workspace,
    .ph-topbar,
    .pocket-h5-root {
      --p-base: light-dark(#f6f7f8, #17181a);
      --p-surface: light-dark(#ffffff, #1d1f23);
      --p-surface-2: light-dark(#f1f2f3, #0d0e10);
      --p-surface-3: light-dark(#e8eaec, #2a2c32);
      --p-hover: light-dark(#f1f2f3, #24262b);
      --p-pressed: light-dark(#e8eaec, #2a2c32);
      --p-border: light-dark(#eceef0, rgba(241, 242, 243, 0.08));
      --p-border-strong: light-dark(#dfe1e4, rgba(227, 229, 231, 0.16));
      --p-text: light-dark(#0d0e10, #f0f1f2);
      --p-text-dim: light-dark(#61666d, rgba(240, 241, 242, 0.62));
      --p-text-tertiary: light-dark(#9499a0, rgba(240, 241, 242, 0.45));
      --p-brand: light-dark(#0d0e10, #f0f1f2);
      --p-on-brand: light-dark(#ffffff, #0d0e10);
      --p-mask: light-dark(rgba(13, 14, 16, 0.44), rgba(0, 0, 0, 0.62));
      --p-dot: light-dark(#dcdcdc, rgba(255, 255, 255, 0.09));
      --p-shadow-1: 0 1px 2px light-dark(rgba(13, 14, 16, 0.06), rgba(0, 0, 0, 0.36));
      --p-shadow-2: 0 4px 16px light-dark(rgba(13, 14, 16, 0.1), rgba(0, 0, 0, 0.46));
      --p-shadow-3: 0 16px 48px light-dark(rgba(13, 14, 16, 0.16), rgba(0, 0, 0, 0.56));
      --p-radius: 12px;
      --p-radius-sm: 8px;
      --p-radius-xs: 6px;
      --p-mono: ui-monospace, SFMono-Regular, Menlo, monospace;
    }

    /* 兼容上游 :root 变量名：全部指向新面层，旧规则自动跟随明暗 */
    .pocket-h5-root {
      --ink: var(--p-text);
      --ink-2: var(--p-text-dim);
      --muted: var(--p-text-dim);
      --faint: var(--p-text-tertiary);
      --line: var(--p-border);
      --line-strong: var(--p-border-strong);
      --surface: var(--p-surface);
      --surface-2: var(--p-surface-2);
      --surface-3: var(--p-surface-3);
      --accent: var(--p-brand);
      --radius: 8px;
      --sidebar-w: 300px;
      font-size: 13px;
      line-height: 1.5;
      color: var(--p-text);
      background: var(--p-base);
      -webkit-font-smoothing: antialiased;
    }

    /* ==================================================================
     * 2. 骨架：48px 顶栏 + 左侧设置卡 + 右侧画布卡（FlowPilot 三栏节奏）
     * ================================================================== */
    .workspace.ph-workspace {
      grid-template-columns: 300px minmax(0, 1fr);
      grid-template-rows: 48px minmax(0, 1fr);
      gap: 0 12px;
      padding: 0 16px 16px;
      background: var(--p-base);
      transition: none;
    }
    .ph-topbar {
      grid-column: 1 / -1;
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
      height: 48px;
      padding: 0;
      background: transparent;
    }
    .ph-brand {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 9px;
      flex: none;
      min-width: 0;
    }
    .ph-brand .brand {
      display: flex;
      align-items: center;
      flex-direction: row !important;
      flex-wrap: nowrap;
      white-space: nowrap;
    }
    .ph-brand .brand {
      gap: 8px;
      font-size: 14.5px;
      font-weight: 650;
      letter-spacing: -0.2px;
      color: var(--p-text);
      text-decoration: none;
    }
    .ph-brand .brand-mark {
      width: 26px;
      height: 28px;
      border-radius: 8px;
      background: var(--p-brand);
      color: var(--p-on-brand);
      box-shadow: none;
    }
    .ph-brand .brand-mark svg { width: 16px; height: 16px; }
    .ph-brand .brand-dot { color: var(--p-text-tertiary); }
    .ph-brand .brand-sub {
      display: none;
    }
    .ph-spacer { flex: 1 1 auto; min-width: 8px; }
    .ph-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      flex: 0 1 auto;
      min-width: 0;
      margin-left: auto;
    }
    .ph-right .preview-meta {
      min-width: 0;
      flex: 0 1 auto;
      overflow: hidden;
    }
    .ph-right .ph-actions {
      flex: 0 0 auto;
      min-width: 0;
    }
    .ph-actions {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: none;
      min-width: 0;
    }

    /* 顶栏里的当前页面 + 小按钮（原 .preview-meta） */
    .ph-topbar .preview-meta {
      margin: 0;
      padding: 0;
      gap: 6px;
      font-size: 11.5px;
      color: var(--p-text-tertiary);
      flex: 0 1 auto;
      overflow: hidden;
    }
    .ph-topbar .preview-meta > #previewName {
      max-width: 220px;
      font: 11px var(--p-mono);
      color: var(--p-text-dim);
    }
    .ph-topbar .preview-meta .preview-dot { background: var(--p-text-tertiary); }
    .ph-topbar .preview-meta .text-button { margin-left: 0; }
    .ph-topbar .text-button {
      padding: 4px 8px;
      border-radius: var(--p-radius-xs);
      font-size: 11.5px;
      color: var(--p-text-dim);
    }
    .ph-topbar .text-button:hover { color: var(--p-text); background: var(--p-surface-2); }

    /* 顶栏状态：压缩成胶囊，长文案省略 */
    .ph-topbar #loadStatus {
      flex: none;
      max-width: 280px;
      min-height: 26px;
      margin: 0;
      padding: 0 10px;
      overflow: hidden;
      border: 0;
      border-radius: 999px;
      background: var(--p-surface-2);
      font-size: 11px;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: var(--p-text-dim);
    }
    .ph-topbar #loadStatus::before { background: var(--p-text-tertiary); }
    .ph-topbar .icon-button {
      width: 30px;
      height: 30px;
      border: 0;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
      color: var(--p-text-dim);
    }
    .ph-topbar .icon-button:hover { background: var(--p-hover); color: var(--p-text); }
    .ph-topbar .icon-button svg { width: 16px; height: 16px; }

    /* 左栏：不再是一张长卡片，而是「一区一卡」的卡片栈（无横向分隔线） */
    .sidebar {
      grid-column: 1;
      grid-row: 2;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 2px 0 10px;
      border: 0;
      border-radius: 0;
      background: transparent;
      overflow: auto;
      overscroll-behavior: contain;
      scrollbar-width: thin;
    }
    .sidebar::-webkit-scrollbar { width: 8px; }
    .sidebar::-webkit-scrollbar-thumb { border-radius: 999px; background: var(--p-border-strong); }
    .sidebar::-webkit-scrollbar-track { background: transparent; }

    /* 右栏：画布卡片 */
    .main-panel {
      grid-column: 2;
      grid-row: 2;
      border: 1px solid var(--p-border);
      border-radius: var(--p-radius);
      background: var(--p-base);
      overflow: hidden;
    }
    .main-panel .canvas {
      padding: 20px;
      background-color: var(--p-base);
      background-image: radial-gradient(var(--p-dot) 0.7px, transparent 0.7px);
      background-size: 20px 20px;
    }

    /* ==================================================================
     * 2.5 设备外框：用边框图片当「手机壳」盖在长方形页面之上
     *     .screen 是普通矩形（无圆角），边框图片叠在其上方，用不透明的
     *     内框/圆角遮住页面四角 —— 圆角来自素材本身，不靠 CSS 拟合。
     * ================================================================== */
    .phone {
      background: none !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      overflow: visible !important;
      /* 用机身剪影裁切：页面仍是矩形，但只显示在手机外轮廓之内 */
      -webkit-mask-image: var(--p-bezel-mask);
      mask-image: var(--p-bezel-mask);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
    .phone.landscape {
      -webkit-mask-image: var(--p-bezel-mask-l);
      mask-image: var(--p-bezel-mask-l);
    }
    .device-slot {
      filter: drop-shadow(0 16px 30px light-dark(rgba(13, 14, 16, 0.18), rgba(0, 0, 0, 0.55)));
    }
    .phone::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 5;
      pointer-events: none;
      background-image: var(--p-bezel-image);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    /* 横屏：同一张竖屏边框旋转 -90°（顶部 → 左侧），几何由 app.js 的边距保证 */
    .phone.landscape::before {
      inset: auto;
      left: 50%;
      top: 50%;
      width: var(--p-bezel-w);
      height: var(--p-bezel-h);
      transform: translate(-50%, -50%) rotate(-90deg);
    }
    .phone .side-key { display: none !important; }
    .phone .screen {
      border-radius: 0 !important;
      box-shadow: none !important;
    }

    /* ==================================================================
     * 3. 功能分区 = 独立卡片（一区一卡，全部依靠面层与间距分隔，不用横线）
     * ================================================================== */
    .settings-section,
    details.settings-section {
      flex: none;
      margin: 0;
      padding: 12px;
      border: 0;
      border-radius: var(--p-radius);
      background: var(--p-surface);
      box-shadow: var(--p-shadow-1);
    }
    .address-section { padding-top: 12px; }
    .section-label {
      margin: 0 0 10px;
      padding: 0;
      justify-content: flex-start;
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--p-text-tertiary);
      line-height: 1.4;
    }
    .section-label > .ph-help { margin-left: 5px; }
    .appearance-section > summary::after { margin-left: auto; }
    .fold > summary .summary-title { flex: 0 1 auto; }
    .fold > summary .summary-badge { margin-left: auto; }
    .fold > summary > .ph-help { margin-left: 5px; }
    .fold > summary::after { margin-left: 0; }
    /* 折叠形分区（系统外观）的标题行也当分区标题用 */
    details.appearance-section > summary.section-label { margin: 0; }
    details.appearance-section[open] > summary.section-label { margin: 0 0 10px; }
    .field-label {
      margin: 0 0 6px;
      padding: 0 2px;
      font-size: 11.5px;
      color: var(--p-text-dim);
    }
    .setting-hint {
      margin-top: 8px;
      padding: 0 2px;
      font-size: 11px;
      line-height: 1.7;
      color: var(--p-text-tertiary);
    }

    /* ==================================================================
     * 4. 控件：无描边面层 + 8px 圆角 + 36px 高度
     * ================================================================== */
    .address-toolbar { gap: 8px; }
    .address-box {
      height: 36px;
      padding: 0 10px;
      border: 1px solid transparent;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
      transition: background 0.15s, box-shadow 0.15s;
    }
    .address-box:focus-within {
      background: var(--p-surface);
      border-color: var(--p-border-strong);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--p-brand) 10%, transparent);
    }
    .address-box:has(input[aria-invalid="true"]) {
      border-color: var(--p-border-strong);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--p-brand) 14%, transparent);
    }
    .address-box svg { width: 15px; height: 15px; color: var(--p-text-tertiary); }
    .address-box input {
      font: 12.5px var(--p-mono);
      color: var(--p-text);
    }
    .address-box input::placeholder { font-size: 12px; color: var(--p-text-tertiary); }

    .address-buttons { gap: 8px; }
    .load-button {
      height: 36px;
      padding: 0 12px;
      border-radius: var(--p-radius-sm);
      background: var(--p-brand);
      color: var(--p-on-brand);
      font-size: 12.5px;
      font-weight: 500;
      box-shadow: none;
    }
    .load-button:hover { background: color-mix(in srgb, var(--p-brand) 88%, var(--p-base)); }
    .load-button:active { transform: none; }
    .load-button:disabled { opacity: 0.45; }

    .icon-button {
      width: 34px;
      height: 34px;
      border: 0;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
      color: var(--p-text-dim);
    }
    .icon-button:hover { background: var(--p-hover); color: var(--p-text); border-color: transparent; }
    .icon-button:active { transform: none; }

    .outline-button {
      height: 34px;
      margin-top: 8px;
      border: 0;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
      font-size: 12px;
      color: var(--p-text-dim);
    }
    .outline-button:hover { background: var(--p-hover); color: var(--p-text); border-color: transparent; }
    .outline-button:active { transform: none; }

    button:focus-visible,
    a:focus-visible,
    input:focus-visible,
    select:focus-visible,
    summary:focus-visible,
    textarea:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--p-brand) 55%, transparent);
      outline-offset: 1px;
    }

    /* 折叠区（代理 / 校准 / 屏幕规格）：卡片内的下沉小面板，不再用虚线分隔 */
    .fold {
      margin-top: 10px;
      padding: 8px 10px;
      border-top: 0;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
    }
    .fold > summary {
      padding: 1px 0;
      border-radius: var(--p-radius-xs);
      font-size: 11.5px;
      color: var(--p-text-dim);
    }
    .fold > summary:hover { color: var(--p-text); }
    .fold > summary::after { border-color: var(--p-text-tertiary); }
    .fold[open] > summary { margin-bottom: 8px; }
    .fold > .field,
    .fold > .field-grid { margin-top: 8px; }
    .summary-badge {
      padding: 2px 7px;
      border-radius: 999px;
      background: var(--p-surface-2);
      color: var(--p-text-tertiary);
    }

    /* 表单控件 */
    .field { margin-top: 10px; }
    .field > span { margin-bottom: 5px; font-size: 11.5px; color: var(--p-text-dim); }
    .field input,
    .calibration-input input,
    .bridge-manual textarea {
      height: 34px;
      padding: 0 10px;
      border: 1px solid transparent;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
      font-size: 12px;
      color: var(--p-text);
    }
    .field input::placeholder,
    .calibration-input input::placeholder { color: var(--p-text-tertiary); font-size: 11.5px; }
    .field input:focus,
    .calibration-input input:focus {
      background: var(--p-surface);
      border-color: var(--p-border-strong);
    }
    select {
      height: 34px;
      padding: 0 30px 0 10px;
      border: 1px solid transparent;
      border-radius: var(--p-radius-sm);
      background-color: var(--p-surface-2);
      color: var(--p-text);
      font-size: 12px;
    }
    select:hover { border-color: transparent; background-color: var(--p-hover); }
    .color-control select { background-color: var(--p-surface-2); }

    /* 开关 / 分段 / 滑杆 */
    .setting-row {
      min-height: 36px;
      margin: 2px 0;
      font-size: 12.5px;
      color: var(--p-text);
    }
    .setting-row small { font-size: 10.5px; color: var(--p-text-tertiary); }
    .setting-row input:checked + .switch { background: var(--p-brand); }
    .switch {
      width: 32px;
      height: 18px;
      background: var(--p-surface-3);
    }
    .switch::before {
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      background: var(--p-surface);
      box-shadow: var(--p-shadow-1);
    }
    .setting-row input:checked + .switch::before { transform: translateX(14px); background: var(--p-on-brand); }
    .setting-row input:disabled + .switch { opacity: 0.45; }
    .segments {
      padding: 3px;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
    }
    .segments button,
    .segments button[aria-pressed="false"] {
      padding: 6px 0;
      border-radius: var(--p-radius-xs);
      font-size: 11.5px;
      color: var(--p-text-dim);
    }
    .segments button[aria-pressed="true"] {
      background: var(--p-surface);
      color: var(--p-text);
      box-shadow: var(--p-shadow-1);
    }
    .inline-controls { margin-top: 12px; font-size: 12.5px; color: var(--p-text); }
    .inline-value { font-size: 11.5px; color: var(--p-text-dim); }
    .color-control span { font: 10.5px var(--p-mono); color: var(--p-text-tertiary); }
    .range-input { margin: 10px 0 2px; accent-color: var(--p-brand); }

    /* 模拟设备 */
    .device-card {
      padding: 10px 12px;
      border: 0;
      border-radius: var(--p-radius-sm);
      background: var(--p-surface-2);
    }
    .device-info strong { font-size: 12.5px; color: var(--p-text); }
    .device-info small { font-size: 10.5px; color: var(--p-text-tertiary); }
    .mini-phone { border-color: var(--p-border-strong); background: var(--p-surface-3); box-shadow: inset 0 0 0 2px var(--p-surface-2); }
    .mini-phone span { background: var(--p-text-tertiary); }
    .device-check { color: var(--p-text-dim); }
    .device-content { font: 11.5px var(--p-mono); color: var(--p-text-tertiary); }
    .spec-line { font-size: 11px; color: var(--p-text-tertiary); }
    .spec-line strong,
    .spec-line > span:last-child { font: 11px var(--p-mono); color: var(--p-text-dim); }

    /* 显示比例读数 */
    .scale-readout strong { font-size: 12.5px; font-weight: 600; color: var(--p-text); }
    .scale-readout > span { font: 11px var(--p-mono); color: var(--p-text-dim); }
    .calibration-ruler { border-color: var(--p-text-tertiary); }
    .calibration-ruler:before { background: var(--p-text-tertiary); }

    /* 侧栏底部：单独一张小卡片 */
    .ph-sidebar-foot {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: none;
      margin-top: auto;
      padding: 10px 12px;
      border-radius: var(--p-radius);
      background: var(--p-surface);
      box-shadow: var(--p-shadow-1);
    }
    .ph-sidebar-foot .sidebar-help {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin: 0;
      padding: 0;
      border-top: 0;
    }
    .ph-sidebar-foot .sidebar-help button { padding: 4px 2px; font-size: 11.5px; color: var(--p-text-dim); }
    .ph-sidebar-foot .sidebar-help button:hover { color: var(--p-text); background: transparent; }
    .ph-sidebar-foot .sidebar-bottom {
      gap: 6px;
      margin: 0;
      padding: 0;
      font-size: 10.5px;
      color: var(--p-text-tertiary);
    }
    .ph-sidebar-foot .saved-dot { background: var(--p-text-tertiary); }
    .ph-sidebar-foot .sidebar-bottom button { color: var(--p-text-dim); border-radius: var(--p-radius-xs); }
    .ph-sidebar-foot .sidebar-bottom button:hover { background: var(--p-surface-2); color: var(--p-text); }
    .ph-sidebar-foot .sidebar-note {
      margin: 0;
      padding: 0;
      font-size: 10.5px;
      line-height: 1.6;
      color: var(--p-text-tertiary);
    }
    .ph-sidebar-foot #engineInfo,
    .ph-sidebar-foot #devToolsButton { margin: 0; }

    /* ==================================================================
     * 5. 对话框 / 帮助 / toast（含二维码、诊断、登录桥对话框）
     * ================================================================== */
    dialog {
      border: 1px solid var(--p-border-strong);
      border-radius: var(--p-radius);
      background: var(--p-surface);
      color: var(--p-text);
      box-shadow: var(--p-shadow-3);
    }
    dialog::backdrop { background: var(--p-mask); }
    .eyebrow { font-size: 10px; letter-spacing: 1.4px; color: var(--p-text-tertiary); }
    .dialog-heading h2 { font-size: 19px; font-weight: 600; letter-spacing: -0.4px; color: var(--p-text); }
    .help-content { color: var(--p-text-dim); }
    .help-content h3 { font-size: 12.5px; color: var(--p-text); }
    .help-content p { font-size: 11.5px; line-height: 1.85; color: var(--p-text-dim); }
    .help-content code {
      background: var(--p-surface-2);
      color: var(--p-text-dim);
    }
    .help-content .help-footnote { color: var(--p-text-tertiary); }
    .help-note { background: var(--p-surface-2); }
    .help-step > b { color: var(--p-text-tertiary); }
    .help-footnote a { color: var(--p-text-dim); }
    .toast {
      width: calc(300px - 24px);
      background: light-dark(#1d1f23, #f0f1f2);
      color: light-dark(#f0f1f2, #0d0e10);
      box-shadow: var(--p-shadow-2);
    }
    .help-backdrop { background: var(--p-mask); }

    /* ==================================================================
     * 5.5 iOS 状态栏与底部手势条：按 Apple 标准几何重画
     *     - 状态栏 62pt 高，内容垂直居中：时间左内边距 54、右侧图标组右内边距 26；
     *     - 时间 17pt / 600 / 无衬线，数字等宽；
     *     - 信号 18x12（4 根圆角柱）、Wi-Fi 17x12（3 段弧 + 点）、电池 27x13（25 身 + 2 尖端）；
     *     - 底部手势条 134x5、圆角 2.5、距底 8pt。
     * ================================================================== */
    .status-bar {
      height: 62px;
      padding: 0 26px 0 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--ink);
      background: var(--bar-color);
      pointer-events: none;
    }
    .status-time,
    #batteryText {
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", sans-serif;
    }
    .status-time {
      width: auto;
      min-width: 0;
      font-size: 17px;
      letter-spacing: -0.41px;
      line-height: 1;
      font-weight: 600;
      letter-spacing: -0.2px;
      font-variant-numeric: tabular-nums;
      text-align: left;
    }
    .status-right {
      display: flex;
      align-items: center;
      gap: 6px;
      height: 20px;
      flex: none;
    }
    .status-right svg { stroke: none; fill: currentColor; }
    .signal { width: 18px; height: 12px; }
    .wifi { width: 17px; height: 12px; margin-top: 0; }
    .wifi path { stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; fill: none; }
    .wifi circle { fill: currentColor; }
    .battery {
      box-sizing: border-box;
      width: 27px;
      height: 13px;
      margin-right: 2px;
      padding: 2px;
      border: 1px solid currentColor;
      border-radius: 4.2px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .battery:after {
      content: "";
      position: absolute;
      right: -3px;
      top: 3.6px;
      width: 2px;
      height: 5px;
      border-radius: 0 2px 2px 0;
      background: currentColor;
      opacity: 0.4;
    }
    .battery-fill {
      position: absolute;
      left: 2px;
      top: 2px;
      bottom: 2px;
      width: 21px;
      border-radius: 2.4px;
      background: currentColor;
      z-index: 0;
    }
    #batteryText {
      position: relative;
      z-index: 1;
      font-size: 11px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.3px;
      font-variant-numeric: tabular-nums;
    }
    .dynamic-island {
      top: 12px;
      width: 126px;
      height: 36px;
      border-radius: 18px;
    }
    .dynamic-island span {
      right: 10px;
      top: 10px;
      width: 12px;
      height: 12px;
    }
    .home-area {
      height: 34px;
      background: var(--bar-color);
    }
    .home-area > span {
      width: 134px;
      height: 5px;
      border-radius: 2.5px;
      bottom: 8px;
      background: var(--ink);
      opacity: 1;
    }
    .landscape .home-area { height: 21px; }
    .landscape .home-area span { width: 180px; bottom: 7px; }

    /* ==================================================================
     * 5.6 侧栏说明：能省的副标题/说明全部收进圆形「?」的 hover 提示
     *     —— 布局本身说明用法，必要的解释按需出现。
     * ================================================================== */
    .ph-help {
      flex: none;
      width: 13px;
      height: 13px;
      margin-left: 5px;
      padding: 0;
      border: 1px solid var(--p-border-strong);
      border-radius: 50%;
      background: transparent;
      color: var(--p-text-tertiary);
      font-size: 9px;
      font-weight: 600;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: help;
    }
    .ph-help:hover,
    .ph-help:focus-visible {
      color: var(--p-text);
      border-color: var(--p-text-tertiary);
      background: var(--p-hover);
      outline: none;
    }
    .ph-tip,
    .ph-tip[popover] {
      position: fixed;
      inset: auto;
      margin: 0;
      z-index: 60;
      max-width: 268px;
      padding: 8px 10px;
      border: 1px solid var(--p-border-strong);
      border-radius: var(--p-radius-sm);
      background: var(--p-surface);
      color: var(--p-text-dim);
      font-size: 11.5px;
      line-height: 1.7;
      box-shadow: var(--p-shadow-2);
      pointer-events: none;
    }
    .ph-tip-text { margin: 0; }
    .ph-tip-status {
      margin: 5px 0 0;
      padding-top: 5px;
      border-top: 1px solid var(--p-border);
      color: var(--p-text-tertiary);
      font-size: 11px;
    }
    /* 静态说明与脚注不再占版面：内容已在对应 ? 提示里 */
    .settings-section .setting-hint,
    .sidebar-note { display: none !important; }

    /* 二维码 / 诊断 / 登录桥 的细节配色（结构由各自片段提供） */
    .qr-dialog .qr-frame { border-color: var(--p-border); background: #ffffff; }
    .qr-dialog .qr-empty { color: var(--p-text-tertiary); }
    .qr-dialog .qr-url { color: var(--p-text-dim); }
    .qr-dialog .qr-hint { color: var(--p-text-tertiary); }
    .qr-dialog .qr-hint b { color: var(--p-text-dim); }
    .diagnose-dialog .diagnose-loading { color: var(--p-text-tertiary); }
    .diagnose-dialog .diagnose-title { color: var(--p-text); }
    .diagnose-dialog .diagnose-badge { background: var(--p-surface-2); color: var(--p-text-dim); }
    .diagnose-dialog .diagnose-lines li,
    .diagnose-dialog .diagnose-tips li { color: var(--p-text-dim); }
    .diagnose-dialog .diagnose-tips { border-top-color: var(--p-border-strong); }
    .diagnose-dialog .diagnose-tips li b { color: var(--p-text); }
    .bridge-dialog .bridge-target { color: var(--p-text-dim); }
    .bridge-dialog .bridge-status { border-color: var(--p-border); background: var(--p-surface-2); color: var(--p-text-dim); }
    .bridge-dialog .bridge-manual summary { color: var(--p-text-dim); }
    .bridge-banner { border-bottom: 1px solid var(--p-border); background: var(--p-surface-2); color: var(--p-text-dim); }
    .bridge-banner .bridge-dot { background: var(--p-text-tertiary); }

    /* ==================================================================
     * 6. 窄窗口
     * ================================================================== */
    @media (max-width: 1180px) {
      .ph-topbar .preview-meta > #previewName { max-width: 170px; }
      .ph-topbar #loadStatus { max-width: 210px; }
    }
    @media (max-width: 1080px) {
      .workspace.ph-workspace { grid-template-columns: 272px minmax(0, 1fr); }
      .ph-topbar .preview-meta > #previewName { max-width: 130px; }
      .ph-topbar #loadStatus { max-width: 170px; }
    }
    @media (max-width: 920px) {
      .workspace.ph-workspace { grid-template-columns: 244px minmax(0, 1fr); padding: 0 10px 10px; gap: 0 10px; }
      .ph-brand .brand { font-size: 13.5px; }
      .ph-topbar .preview-meta { display: none; }
      .ph-topbar #loadStatus { max-width: 130px; }
    }
    `

    /**
     * 重排上游 DOM：把品牌 / 当前页面 / 状态 / 刷新 / 新窗口移到 48px 顶栏，
     * 其余保持原节点与 id（app.js 的事件绑定完全不变）。
     * @param {ShadowRoot} shadow
     * @returns {() => void} 清理函数
     */
    function mountPanelTheme(shadow) {
      const workspace = shadow.querySelector('.workspace')
      const sidebar = shadow.querySelector('.sidebar')
      if (!workspace || !sidebar) return function () {}

      // 设备边框素材与几何（构建期由 assets/bezel.json 注入）
      const root = shadow.querySelector('.pocket-h5-root')
      if (root && typeof POCKET_BEZEL_IMAGE === 'string') {
        root.style.setProperty('--p-bezel-image', 'url("' + POCKET_BEZEL_IMAGE + '")')
        root.style.setProperty('--p-bezel-w', POCKET_BEZEL.portrait.outerW + 'px')
        root.style.setProperty('--p-bezel-h', POCKET_BEZEL.portrait.outerH + 'px')
        root.style.setProperty('--p-bezel-mask', 'url("' + POCKET_BEZEL_MASK + '")')
        root.style.setProperty('--p-bezel-mask-l', 'url("' + POCKET_BEZEL_MASK_LANDSCAPE + '")')
      }

      const brandRow = shadow.querySelector('.sidebar-brand')
      const meta = shadow.querySelector('.preview-meta')
      const status = shadow.getElementById('loadStatus')
      const refresh = shadow.getElementById('refreshButton')
      const external = shadow.getElementById('externalButton')

      const header = document.createElement('header')
      header.className = 'ph-topbar'

      const brand = document.createElement('div')
      brand.className = 'ph-brand'
      const mark = brandRow && brandRow.querySelector('.brand')
      const sub = brandRow && brandRow.querySelector('.brand-sub')
      if (mark) brand.append(mark)
      if (sub) brand.append(sub)
      header.append(brand)
      const spacer = document.createElement('div')
      spacer.className = 'ph-spacer'
      header.append(spacer)
      const actions = document.createElement('div')
      actions.className = 'ph-actions'
      if (status) actions.append(status)
      if (refresh) actions.append(refresh)
      if (external) actions.append(external)
      // 右边界对齐：网址（含 示例/登录桥/诊断）→ 状态 → 窗口动作
      const right = document.createElement('div')
      right.className = 'ph-right'
      if (meta) right.append(meta)
      right.append(actions)
      header.append(right)

      workspace.insertBefore(header, workspace.firstChild)
      workspace.classList.add('ph-workspace')
      if (brandRow) brandRow.remove()

      // 侧栏页脚（帮助/自动保存/重置/说明）收进一张独立卡片，避免用分割线。
      const foot = document.createElement('div')
      foot.className = 'ph-sidebar-foot'
      for (const node of [
        shadow.querySelector('.sidebar-help'),
        shadow.getElementById('devToolsButton'),
        shadow.getElementById('engineInfo'),
        shadow.querySelector('.sidebar-bottom'),
        shadow.querySelector('.sidebar-note'),
      ]) {
        if (node) foot.append(node)
      }
      sidebar.append(foot)

      // 必要的说明收进圆形「?」提示：hover / focus 出现，点击可固定，Esc 关闭。
      const HELP_ITEMS = [
        {
          target: '#addressTitle',
          tip: '输入端口、localhost:3000/path 或完整 URL；⌘/Ctrl + Enter 打开。最近地址保存在本机。',
        },
        {
          target: '#displayTitle',
          tip: '100% 按显示器换算成真机物理大小（macOS 由 Host 读取显示器尺寸）。有偏差时用「校准实际尺寸」量一次即可。',
          dynamic: '#calibrationStatus',
        },
        {
          target: '#deviceTitle',
          tip: '模拟 iPhone 17：402×874 逻辑像素、1206×2622 物理像素、460 PPI、@3x；切换横竖屏会同步调整内容区。',
        },
        {
          target: '.appearance-section > summary',
          tip: '状态栏、手势条、文字与背景只改变模拟外观；安全区参考线不会注入或修改 H5 的 env(safe-area-inset-*)。',
        },
        {
          target: '#layoutTitle',
          tip: '「预留」让系统栏独立占位；「全屏页面」让 H5 铺满并被系统栏覆盖。参考线只是提示，不改变页面。',
          dynamic: '#layoutHint',
        },
        {
          target: '#proxyDetails > summary',
          tip: '面板版无法设置 iframe 请求的代理（沿用宿主浏览器的网络设置）；这里保留配置项，但不会修改系统代理。',
        },
        {
          target: '#calibrationDetails > summary',
          tip: '用真实尺子量出 200px 线段的长度并填入毫米数；校准按显示器保存在本机，之后 100% 就是真机物理大小。',
        },
        {
          target: '.sidebar-bottom',
          tip: '外观与布局预览，不是 iOS 模拟器；外观、地址与校准只保存在本机浏览器。',
        },
      ]

      if (!root) return function disposePanelThemeWithoutHelp() {
        workspace.classList.remove('ph-workspace')
        header.remove()
      }

      const tip = document.createElement('div')
      tip.className = 'ph-tip'
      // Popover API：提示层进入浏览器 top layer，不会被侧栏文字/滚动容器盖住或裁切。
      tip.setAttribute('popover', 'manual')
      tip.setAttribute('role', 'tooltip')
      root.append(tip)
      const supportsPopover = typeof tip.showPopover === 'function'
      if (!supportsPopover) tip.hidden = true

      const buttons = []
      let pinned = false
      const hideTip = function () {
        if (supportsPopover) {
          try {
            if (tip.matches(':popover-open')) tip.hidePopover()
          } catch (error) {
            /* 面板已卸载时忽略 */
          }
        } else {
          tip.hidden = true
        }
        pinned = false
      }
      const showTip = function (button) {
        const staticText = button.getAttribute('data-tip') || ''
        const dynamicSelector = button.getAttribute('data-tip-from')
        const dynamicEl = dynamicSelector ? shadow.querySelector(dynamicSelector) : null
        const dynamicText = dynamicEl && dynamicEl.textContent ? dynamicEl.textContent.trim() : ''
        tip.replaceChildren()
        const first = document.createElement('p')
        first.className = 'ph-tip-text'
        first.textContent = staticText
        tip.append(first)
        if (dynamicText !== '') {
          const status = document.createElement('p')
          status.className = 'ph-tip-status'
          status.textContent = dynamicText
          tip.append(status)
        }
        const rect = button.getBoundingClientRect()
        if (supportsPopover) {
          tip.style.visibility = 'hidden'
          if (!tip.matches(':popover-open')) tip.showPopover()
        } else {
          tip.hidden = false
          tip.style.visibility = 'hidden'
        }
        const width = tip.offsetWidth
        const height = tip.offsetHeight
        const margin = 10
        // 左对齐到问号，但不超出窗口；默认在下方，空间不足时翻到上方并右对齐
        let left = Math.min(rect.left, window.innerWidth - width - margin)
        left = Math.max(left, margin)
        let top = rect.bottom + 8
        if (top + height > window.innerHeight - margin) top = Math.max(margin, rect.top - height - 8)
        tip.style.left = left + 'px'
        tip.style.top = top + 'px'
        tip.style.visibility = 'visible'
      }

      for (const item of HELP_ITEMS) {
        const target = shadow.querySelector(item.target)
        if (!target) continue
        const button = document.createElement('button')
        button.type = 'button'
        button.className = 'ph-help'
        button.textContent = '?'
        button.setAttribute('aria-label', '说明')
        button.setAttribute('data-tip', item.tip)
        if (item.dynamic) button.setAttribute('data-tip-from', item.dynamic)
        button.addEventListener('mouseenter', function () { showTip(button) })
        button.addEventListener('mouseleave', function () { if (!pinned) hideTip() })
        button.addEventListener('focus', function () { showTip(button) })
        button.addEventListener('blur', function () { if (!pinned) hideTip() })
        button.addEventListener('click', function (event) {
          // 放在 <summary> 里时不要触发展开/收起
          event.preventDefault()
          event.stopPropagation()
          if (pinned) { hideTip(); return }
          pinned = true
          showTip(button)
        })
        const summaryTitle = target.matches('summary') ? target.querySelector('.summary-title') : null
        if (summaryTitle) summaryTitle.insertAdjacentElement('afterend', button)
        else target.append(button)
        buttons.push(button)
      }
      const onKeyDown = function (event) { if (event.key === 'Escape') hideTip() }
      const onScroll = function () { hideTip() }
      window.addEventListener('keydown', onKeyDown)
      window.addEventListener('resize', hideTip)
      shadow.addEventListener('scroll', onScroll, true)

      return function disposePanelTheme() {
        window.removeEventListener('keydown', onKeyDown)
        window.removeEventListener('resize', hideTip)
        shadow.removeEventListener('scroll', onScroll, true)
        for (const button of buttons) button.remove()
        tip.remove()
        workspace.classList.remove('ph-workspace')
        header.remove()
      }
    }

    /* ------------------------------------------------------------------ *
     * Pocket H5 —— DSH 面板外壳（client.js 的片段源，不是独立 ES 模块）
     *
     * 由 build-client.mjs 原样插入 `window.__ModuleLoader__.load(...).factory` 内部，
     * 因此这里可以直接使用已声明的 React / h / CSS / MARKUP / mountPocketH5。
     *
     * 职责只有三件事：
     *   1) 把上游工作台装进面板内的 Shadow DOM（样式与宿主完全隔离）；
     *   2) 注册主面板 main(key=pocket-h5) 与左侧栏入口 sidebar.panellist(id=pocket-h5)；
     *   3) 卸载时释放工作台的监听器 / 定时器 / 观察器。
     * 预览本身仍由工作台里的 <iframe id="previewFrame"> 加载用户 H5，与上游一致。
     * ------------------------------------------------------------------ */

    const POCKET_PANEL_ID = 'pocket-h5'
    const POCKET_PANEL_LABEL = 'Pocket H5'

    /**
     * 从 Host 的显示器探测结果里挑出当前窗口所在的那块屏幕。
     *
     * Host 返回 CoreGraphics 的 `{ pixelWidth/pixelHeight, widthMm/heightMm }`：
     * CoreGraphics 的 pixelWidth 是「模式宽度」，与浏览器的 CSS 像素宽度一致
     * （Retina 的 looks-like 模式也如此），所以用 screen.width/height 精确匹配即可。
     * 匹配不到时：只有一块屏就用它，否则返回 null（退回浏览器估算 + 尺子校准）。
     */
    function pickHostDisplay(displays, screenWidth, screenHeight) {
      if (!Array.isArray(displays) || displays.length === 0) return null
      const usable = displays.filter(
        (display) =>
          display &&
          Number(display.pixelWidth) > 0 &&
          Number(display.pixelHeight) > 0 &&
          Number(display.widthMm) > 0,
      )
      if (usable.length === 0) return null
      const exact = usable.find(
        (display) => display.pixelWidth === screenWidth && display.pixelHeight === screenHeight,
      )
      if (exact) return exact
      if (usable.length === 1) return usable[0]
      return null
    }

    /** 一个 CSS 像素对应的物理密度（CSS px / inch），range 与上游 displayScale 校验一致。 */
    function hostCssPixelsPerInch(display) {
      const widthMm = Number(display && display.widthMm)
      const pixelWidth = Number(display && display.pixelWidth)
      if (!Number.isFinite(widthMm) || !Number.isFinite(pixelWidth) || widthMm <= 0 || pixelWidth <= 0) return null
      const ppi = pixelWidth / (widthMm / 25.4)
      return ppi >= 16 && ppi <= 1100 ? ppi : null
    }

    /**
     * 取 Host 的显示器物理尺寸并交给上游 app.js：
     * app.js 的 displayScale() 本来就支持 `window.pocketDisplayMetrics`（Electron 时代的
     * preload 桥），这里用同形状的数据填上，再派发它监听的 `pocketdisplaychange`。
     * 这样面板里的 `100%` 也是真机物理大小，无需尺子校准；拿不到时保持原估算。
     */
    async function applyHostDisplayMetrics() {
      let payload = null
      try {
        const endpoint = new URL('/pocket-h5/display.json', window.location.origin).href
        const response = await fetch(endpoint, { cache: 'no-store' })
        if (response.ok) payload = await response.json()
      } catch (error) {
        return false
      }
      const display = pickHostDisplay(payload && payload.displays, window.screen.width, window.screen.height)
      const ppi = hostCssPixelsPerInch(display)
      if (ppi === null) return false
      window.pocketDisplayMetrics = {
        displayKey: 'host:' + display.id + ':' + display.pixelWidth + 'x' + display.pixelHeight,
        cssPixelsPerInch: ppi,
      }
      try {
        window.dispatchEvent(new Event('pocketdisplaychange'))
      } catch (error) {
        /* 事件不可用时下一次 resize/render 也会读到新值 */
      }
      return true
    }

    /**
     * 首次进面板时取一次显示器尺寸；窗口在显示器之间移动 / 缩放变化（resize）
     * 时再取一次，保证 100% 始终对应当前这块屏。
     * @returns {() => void} 清理函数
     */
    function watchHostDisplayMetrics() {
      let timer = 0
      const refresh = function () {
        clearTimeout(timer)
        timer = setTimeout(function () {
          applyHostDisplayMetrics().catch(function ignore() {})
        }, 250)
      }
      applyHostDisplayMetrics().catch(function ignore() {})
      window.addEventListener('resize', refresh)
      return function stopHostDisplayMetrics() {
        clearTimeout(timer)
        window.removeEventListener('resize', refresh)
      }
    }

    /**
     * 当前预览的「真实目标地址」。
     * 登录桥启用时 iframe 实际加载的是代理地址（`window.pocketBridge.entryUrl`），
     * 二维码、诊断、登录桥本身都应该针对原始目标，而不是代理地址。
     * @param {ShadowRoot} shadow
     */
    function pocketPreviewTarget(shadow) {
      const frame = shadow.getElementById('previewFrame')
      const src = frame && frame.getAttribute('src') ? frame.getAttribute('src') : ''
      const bridge = window.pocketBridge
      if (bridge && src === bridge.entryUrl) return bridge.target
      return src
    }

    /** demo 页面由 Host 半注册在 /pocket-h5/demo.html（同源，避免 data: 与跨域策略）。 */
    function pocketDemoUrl() {
      try {
        return new URL('/pocket-h5/demo.html', window.location.origin).href
      } catch (error) {
        return '/pocket-h5/demo.html'
      }
    }

    /** 主面板：Shadow DOM 承载上游工作台，卸载时执行 mountPocketH5 返回的 dispose。 */
    function PocketH5Panel() {
      const hostRef = React.useRef(null)
      React.useEffect(function mountPanel() {
        const host = hostRef.current
        if (!host) return undefined
        let shadow = host.shadowRoot
        if (!shadow) shadow = host.attachShadow({ mode: 'open' })
        // 面板重新进入（含 React 严格模式重复执行）时重建干净的工作台。
        shadow.replaceChildren()

        const style = document.createElement('style')
        style.setAttribute('data-pocket-h5-style', '')
        style.textContent = CSS + QR_CSS + DIAGNOSIS_CSS + BRIDGE_CSS + PANEL_THEME_CSS
        const root = document.createElement('div')
        root.className = 'pocket-h5-root'
        root.innerHTML = MARKUP
        shadow.append(style, root)

        let dispose = null
        let disposeTheme = null
        let disposeQr = null
        let disposeDiagnose = null
        let disposeBridge = null
        let disposeDisplay = null
        try {
          dispose = mountPocketH5(shadow, pocketDemoUrl())
          // 外观层：把品牌/当前页面/状态/动作移到 48px 顶栏，并套上 FlowPilot 风格面层。
          disposeTheme = mountPanelTheme(shadow)
          // Host 能读到真实显示器毫米尺寸时，100% 就是真机大小；失败保持浏览器估算。
          disposeDisplay = watchHostDisplayMetrics()
          // 上游工作台之外新增的「手机扫码」入口；失败不影响预览本身。
          disposeQr = mountQrFeature(shadow)
          // 「诊断」入口：解释页面为什么打不开（禁止嵌入 / 需要登录）。
          disposeDiagnose = mountDiagnoseFeature(shadow)
          // 「登录桥」入口：用 Safari 已登录 Cookie 经本机代理预览。
          disposeBridge = mountBridgeFeature(shadow)
        } catch (error) {
          console.error('[pocket-h5] 工作台初始化失败', error)
        }
        return function unmountPanel() {
          try {
            if (typeof dispose === 'function') dispose()
          } catch (error) {
            console.error('[pocket-h5] 工作台清理失败', error)
          }
          try {
            if (typeof disposeQr === 'function') disposeQr()
          } catch (error) {
            console.error('[pocket-h5] 二维码入口清理失败', error)
          }
          try {
            if (typeof disposeDiagnose === 'function') disposeDiagnose()
          } catch (error) {
            console.error('[pocket-h5] 诊断入口清理失败', error)
          }
          try {
            if (typeof disposeBridge === 'function') disposeBridge()
          } catch (error) {
            console.error('[pocket-h5] 登录桥清理失败', error)
          }
          try {
            if (typeof disposeTheme === 'function') disposeTheme()
          } catch (error) {
            console.error('[pocket-h5] 外观层清理失败', error)
          }
          try {
            if (typeof disposeDisplay === 'function') disposeDisplay()
          } catch (error) {
            console.error('[pocket-h5] 显示器监听清理失败', error)
          }
        }
      }, [])
      return h('div', {
        ref: hostRef,
        className: 'pocket-h5-panel',
        style: { flex: '1 1 auto', minHeight: 0, minWidth: 0, height: '100%', display: 'block' },
      })
    }

    /** 侧栏图标：复用上游 i-phone 图形（圆角手机 + 听筒/Home 短线），跟随侧栏文字颜色。 */
    function PocketH5Glyph(props) {
      const size = props && Number(props.size) > 0 ? Number(props.size) : 18
      return h(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.6,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          focusable: 'false',
        },
        h('rect', { x: 6, y: 2, width: 12, height: 20, rx: 3 }),
        h('path', { d: 'M10 5h4M11 19h2' }),
      )
    }

    /**
     * 槽位注册。main 用 keyed 槽位（key 必须与 sidebar.panellist 的 id 相同，
     * 宿主点击侧栏图标时调用 layout.selectPanel('pocket-h5') 才能命中）。
     */
    function pocketApply(ctx) {
      const guard = (label, register) => {
        try {
          register()
        } catch (error) {
          console.warn('[pocket-h5] 槽位注册失败（' + label + '）：', error)
        }
      }
      guard('main', function () {
        ctx.slots.inject('main', function () {
          return ctx.slots.register({ name: 'main', key: POCKET_PANEL_ID }, PocketH5Panel)
        })
      })
      guard('sidebar.panellist', function () {
        ctx.slots.inject('sidebar.panellist', function () {
          return ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: POCKET_PANEL_ID,
              order: 95,
              label: POCKET_PANEL_LABEL,
            },
            PocketH5Glyph,
          )
        })
      })
    }

    return {
      inject: ["slots"],
      apply: pocketApply,
      version: POCKET_H5_VERSION,
      // 离线冒烟测试入口（tests/client-smoke.mjs 使用；渲染不读取）。
      __test: { createQrMatrix: createQrMatrix, qrSvgMarkup: qrSvgMarkup, pickHostDisplay: pickHostDisplay, hostCssPixelsPerInch: hostCssPixelsPerInch, summarizeProbe: summarizeProbe, bridgeBannerText: bridgeBannerText, bridgeCanTarget: bridgeCanTarget, bezelMetrics: POCKET_BEZEL },
    };
  },
});
