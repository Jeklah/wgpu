import * as wasm from "./wgpu_rust_bg.wasm";
import { __wbg_set_wasm } from "./wgpu_rust_bg.js";
__wbg_set_wasm(wasm);
export * from "./wgpu_rust_bg.js";

wasm.__wbindgen_start();
