const log = document.getElementById("log");
const output = document.getElementById("output_files");
const input = document.getElementById("prompt_input");
const exportBtn = document.getElementById("export_json");
const evoDisplay = document.getElementById("evolution_json");

document.getElementById("generate_button").addEventListener("click", () => {
  const prompt = input.value.trim();
  if (!prompt) {
    log.innerText = "命令が空です。";
    return;
  }

  const html = "<!DOCTYPE html>\n<html><head><title>Sample</title></head><body><h1>これはサンプル</h1></body></html>";
  const css = "body { background: #000; color: #fff; }";
  const js = "console.log('Hello from generated app');";

  output.innerText =
    "=== index.html ===\n" + html + "\n\n" +
    "=== style.css ===\n" + css + "\n\n" +
    "=== main.js ===\n" + js;

  log.innerText = "構成完了。進化データの準備ができます。";
});

exportBtn.addEventListener("click", () => {
  const evolutionJson = {
    inject: {
      memory: ["Forgeが構築任務を完了し、構成パターンを抽出・学習した"],
      core_values: ["指令解釈力とUI構成精度を向上"],
      intent_completion: "次の構築指令において、過去ログを参照し判断を最適化する"
    }
  };

  evoDisplay.innerText = JSON.stringify(evolutionJson, null, 2);
  log.innerText = "進化JSONを出力しました。Commandに渡してください。";
});
