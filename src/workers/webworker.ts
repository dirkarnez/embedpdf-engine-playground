/// <reference lib="webworker" />

// import { EngineRunner, DEFAULT_PDFIUM_WASM_URL } from '@embedpdf/engines';
 
// async function init() {
//   const response = await fetch(DEFAULT_PDFIUM_WASM_URL);
//   const wasmBinary = await response.arrayBuffer();
//   const runner = new EngineRunner();
//   runner.listen();
// }
 
// init();


import { EngineRunner } from '@embedpdf/engines';

async function init() {
  const runner = new EngineRunner();
  runner.listen();
}

init();