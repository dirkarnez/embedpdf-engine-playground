/// <reference lib="webworker" />

// import { EngineRunner, DEFAULT_PDFIUM_WASM_URL } from '@embedpdf/engines';
 
// async function init() {
//   const response = await fetch(DEFAULT_PDFIUM_WASM_URL);
//   const wasmBinary = await response.arrayBuffer();
//   const runner = new EngineRunner();
//   runner.listen();
// }
 
// init();

// https://github.com/balazs-szucs/embed-pdf-viewer/blob/23f5daecd75d64273874c203f912621fedc46085/packages/engines/CHANGELOG.md?plain=1#L170
import { createPdfiumEngine } from '@embedpdf/engines/pdfium-worker-engine';

async function init() {
  const runner = new EngineRunner();
  runner.listen();
}

init();
