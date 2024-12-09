const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const passwordField = document.getElementById("password");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  let characterPool = "";
  if (includeLowercase) characterPool += lowercase;
  if (includeUppercase) characterPool += uppercase;
  if (includeNumbers) characterPool += numbers;
  if (includeSymbols) characterPool += symbols;

  if (characterPool === "") {
    alert("Selecione pelo menos uma opção de caracteres!");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
}

generateButton.addEventListener("click", () => {
  const password = generatePassword();
  passwordField.value = password;
});

copyButton.addEventListener("click", () => {
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value);
    alert("Senha copiada para a área de transferência!");
  } else {
    alert("Nenhuma senha para copiar!");
  }
});
