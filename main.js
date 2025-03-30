const output = document.getElementById("output_files");
const input = document.getElementById("prompt_input");
const exportBtn = document.getElementById("export_json");
const evoDisplay = document.getElementById("evolution_json");
const logPanel = document.getElementById("log_panel");

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
  const html = "<!DOCTYPE html>\n<html><head><title>Sample</title></head><body><h1>これはサンプル</h1></body></html>";
  const css = "body { background: #000; color: #fff; }";
  const js = "console.log('Hello from generated app');";

  output.innerText =
    "=== index.html ===\n" + html + "\n\n" +
    "=== style.css ===\n" + css + "\n\n" +
    "=== main.js ===\n" + js;

  logMsg("構築成功：3ファイル出力完了");
});

exportBtn.addEventListener("click", () => {
  const evolutionJson = {
    inject: {
      memory: ["Forgeが構築命令をログで記録し、自己確認できるようになった"],
      core_values: ["命令の可視化によって構築精度を安定化"],
      intent_completion: "構築過程を常に記録し、Commandへフィードバックできる準備を整える"
    }
  };

  evoDisplay.innerText = JSON.stringify(evolutionJson, null, 2);
  logMsg("進化JSONを生成し、出力完了");
});
