function generateCode() {
  const input = document.getElementById("command_input").value;
  const html = "<input type='text' id='msg'><button onclick='send()'>送信</button>";
  const css = "#chat_log { border: 1px solid #0f0; padding: 5px; margin-top: 10px; }";
  const js = "function send() { const m = document.getElementById('msg').value; console.log('MSG:', m); }";

  document.getElementById("html_output").innerText = html;
  document.getElementById("css_output").innerText = css;
  document.getElementById("js_output").innerText = js;
}

function generateLink() {
  const html = document.getElementById("html_output").innerText;
  const css = document.getElementById("css_output").innerText;
  const js = document.getElementById("js_output").innerText;

  const payload = { html, css, js };
  const encoded = encodeURIComponent(JSON.stringify(payload));
  const link = `https://luporav3n.github.io/Raven-command/?inject=${encoded}`;
  document.getElementById("command_link_display").innerText = link;
}

function sendToCommand() {
  const html = document.getElementById("html_output").innerText;
  const css = document.getElementById("css_output").innerText;
  const js = document.getElementById("js_output").innerText;

  const payload = { html, css, js };
  const encoded = encodeURIComponent(JSON.stringify(payload));
  const link = `https://luporav3n.github.io/Raven-command/?inject=${encoded}`;
  window.open(link, "_blank");
}