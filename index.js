function showAnswer(response) {
  console.log(response);
}

let apiKey = "331fct734c14fe46300adod3e6c6aacb";
let context = `be polite and provide a very short answer`;
let prompt = `When was AI first created?`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
