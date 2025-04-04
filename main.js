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
  const url = `https://luporav3n.github.io/Raven-command/?inject=${encodeURIComponent(JSON.stringify({html, css, js}))}`;
  document.getElementById("command_link_output").innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
}

function sendToCommand() {
  const html = encodeURIComponent(document.getElementById("html_output").textContent);
  const css = encodeURIComponent(document.getElementById("css_output").textContent);
  const js = encodeURIComponent(document.getElementById("js_output").textContent);
  const url = `https://luporav3n.github.io/Raven-command/?inject=${encodeURIComponent(JSON.stringify({html, css, js}))}`;
  window.open(url, '_blank');
}

function preview() {
  const html = document.getElementById("html_output").textContent;
  const css = document.getElementById("css_output").textContent;
  const js = document.getElementById("js_output").textContent;
  const frame = document.getElementById("preview_frame");
  const content = `
    <html>
    <head><style>${css}</style></head>
    <body>${html}<script>${js}</script></body>
    </html>
  `;
  frame.srcdoc = content;
}
