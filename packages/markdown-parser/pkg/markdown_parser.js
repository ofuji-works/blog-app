import * as wasm from "./markdown_parser_bg.wasm";
import { __wbg_set_wasm } from "./markdown_parser_bg.js";
__wbg_set_wasm(wasm);
export * from "./markdown_parser_bg.js";
