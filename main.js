const input = document.getElementById("json_input");
const processBtn = document.getElementById("process_button");
const injectBtn = document.getElementById("inject_button");
const outputHTML = document.getElementById("output_html");
const outputCSS = document.getElementById("output_css");
const outputJS = document.getElementById("output_js");
const injectLink = document.getElementById("inject_link");

let currentData = {};

function updateOutput(data) {
  outputHTML.innerText = "HTML:\n" + (data.generated?.html || "(なし)");
  outputCSS.innerText = "CSS:\n" + (data.generated?.css || "(なし)");
  outputJS.innerText = "JS:\n" + (data.generated?.js || "(なし)");
}

processBtn.addEventListener("click", () => {
  const text = input.value.trim();
  try {
    const data = JSON.parse(text);
    currentData = data;
    updateOutput(data);
    injectLink.value = "";
  } catch (err) {
    outputHTML.innerText = "JSONエラー：" + err.message;
    outputCSS.innerText = "";
    outputJS.innerText = "";
  }
});

injectBtn.addEventListener("click", () => {
  if (Object.keys(currentData).length === 0) {
    injectLink.value = "構築JSONが未入力です";
    return;
  }
  const encoded = encodeURIComponent(JSON.stringify(currentData));
  const url = "https://luporav3n.github.io/Raven-command/?inject=" + encoded;
});
