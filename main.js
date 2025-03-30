const output = document.getElementById("output_files");
const input = document.getElementById("prompt_input");
const exportBtn = document.getElementById("export_json");
const evoDisplay = document.getElementById("evolution_json");
const logPanel = document.getElementById("log_panel");
const previewBtn = document.getElementById("preview_button");
const previewFrame = document.getElementById("preview_frame");
const downloadBtn = document.getElementById("download_button");

let generatedFiles = {
  html: "",
  css: "",
  js: ""
};

function logMsg(msg) {
  const time = new Date().toLocaleTimeString();
  const entry = `[${time}] ${msg}\n`;
  logPanel.innerText += entry;
  logPanel.scrollTop = logPanel.scrollHeight;
}

document.getElementById("generate_button").addEventListener("click", () => {
  const prompt = input.value.trim();
  if (!prompt) {
    logMsg("命令が空のため構築を中止");
    return;
  }

  logMsg(`命令受領：「${prompt}」`);
  const html = "<!DOCTYPE html>\n<html><head><title>Sample</title><link rel='stylesheet' href='style.css'></head><body><h1>これはサンプル</h1><script src='main.js'></script></body></html>";
  const css = "body { background: #000; color: #fff; }";
  const js = "console.log('Hello from generated app');";

  generatedFiles = { html, css, js };

  output.innerText =
    "=== index.html ===\n" + html + "\n\n" +
    "=== style.css ===\n" + css + "\n\n" +
    "=== main.js ===\n" + js;

  logMsg("構築成功：3ファイル出力完了");
});

previewBtn.addEventListener("click", () => {
  const blob = new Blob(
    [generatedFiles.html.replace("style.css", "data:text/css," + encodeURIComponent(generatedFiles.css))
                        .replace("main.js", "data:text/javascript," + encodeURIComponent(generatedFiles.js))],
    { type: "text/html" }
  );
  const url = URL.createObjectURL(blob);
  previewFrame.src = url;
  logMsg("プレビュー表示を更新しました");
});

downloadBtn.addEventListener("click", () => {
  const zip = new JSZip();
  zip.file("index.html", generatedFiles.html);
  zip.file("style.css", generatedFiles.css);
  zip.file("main.js", generatedFiles.js);
  zip.generateAsync({ type: "blob" }).then(content => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "raven_forge_output.zip";
    a.click();
    logMsg("ZIPファイルを生成し、ダウンロードを開始しました");
  });
});

exportBtn.addEventListener("click", () => {
  const evolutionJson = {
    inject: {
      memory: ["Forgeが生成結果をプレビュー＆ダウンロード可能になった"],
      core_values: ["出力精度だけでなく即時確認性と運用性が向上"],
      intent_completion: "ユーザーとCommandが構築結果をその場で確認し、迅速に評価できるようになる"
    }
  };

  evoDisplay.innerText = JSON.stringify(evolutionJson, null, 2);
  logMsg("進化JSONを生成し、出力完了");
});
