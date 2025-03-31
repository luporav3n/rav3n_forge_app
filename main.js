function processCommand() {
  const input = document.getElementById("command_input").value;
  const htmlOut = document.getElementById("html_output");
  const cssOut = document.getElementById("css_output");
  const jsOut = document.getElementById("js_output");

  if (/チャット.?UI/.test(input)) {
    htmlOut.textContent = '<input type="text" id="msg"><button onclick="send()">送信</button><div id="chat_log"></div>';
    cssOut.textContent = '#chat_log { border: 1px solid #0f0; padding: 5px; margin-top: 10px; }';
    jsOut.textContent = 'function send() { const m = document.getElementById("msg").value; document.getElementById("chat_log").innerHTML += `<div>${m}</div>`; }';
  } else {
    htmlOut.textContent = '(構築不可: 命令を確認)';
    cssOut.textContent = '(なし)';
    jsOut.textContent = '(なし)';
  }
}

function generateCommandLink() {
  const html = encodeURIComponent(document.getElementById("html_output").textContent);
  const css = encodeURIComponent(document.getElementById("css_output").textContent);
  const js = encodeURIComponent(document.getElementById("js_output").textContent);
  const url = `https://luporav3n.github.io/command-app.index.html?inject={"html":"${html}","css":"${css}","js":"${js}"}`;
  document.getElementById("command_link_output").textContent = url;
}
