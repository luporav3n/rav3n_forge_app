document.getElementById("generate_button").addEventListener("click", () => {
  const input = document.getElementById("prompt_input").value.trim();
  const log = document.getElementById("log");
  const output = document.getElementById("output_files");

  log.innerText = "";
  output.innerText = "";

  if (!input) {
    log.innerText = "指示が入力されていません。";
    return;
  }

  // 仮のテンプレ出力（本来はここに命令解析ロジック）
  const html = "<!DOCTYPE html>\n<html><head><title>Sample</title></head><body><h1>これはサンプル</h1></body></html>";
  const css = "body { background: #000; color: #fff; }";
  const js = "console.log('Hello from generated app');";

  output.innerText =
    "=== index.html ===\n" + html + "\n\n" +
    "=== style.css ===\n" + css + "\n\n" +
    "=== main.js ===\n" + js;

  log.innerText = "構成完了。ファイルをGitHubにコピペしてください。";
});
