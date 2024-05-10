function quotesGenerator() {
  let engQuotes = [
    "Success in life comes from facing every challenge with courage and determination.",
    "Those who face difficulties head-on and overcome them are the real heroes of life.",
    "Never underestimate yourself, because you have the real power within you that can take you to great heights of success.",
    "Facing challenges is a crucial part of life because we learn from them and use them to confront our adversities with strength.",
    "True success in life is the one that brings you peace and happiness, not just worldly wealth.",
    "Every morning brings new hope, and every evening offers a new lesson and encouragement.",
    "Always strive to better yourself, because the pursuit of improvement in life never ends.",
    "True happiness comes from the heart, not just from material possessions.",
    "Turn your weaknesses into strengths, because true courage is revealed when faced with challenges.",
    "Every challenge is an opportunity for new growth, and every obstacle is a knock on the door of a new success.",
    "Believe in yourself, for that's where the strength to conquer obstacles resides.",
    "Every setback is a setup for a comeback. Keep pushing forward.",
    "The path to success is often paved with perseverance and resilience.",
    "In the face of adversity, choose courage over fear and determination over doubt.",
    "Challenges are not roadblocks; they are detours leading to personal growth.",
    "Success is not just about reaching the destination but also about enjoying the journey.",
    "Find joy in the journey, for that's where life truly unfolds.",
    "Happiness is a choice we make every day, regardless of circumstances.",
    "Embrace change, for it is the only constant in life.",
    "The greatest adventures often begin with a single step of faith.",
  ];

  let arrLength = Math.random() * engQuotes.length;
  let roundedLength = Math.floor(arrLength);
  let random = engQuotes[roundedLength];
  let para = document.querySelector("#quotes");
  para.innerText = `"${random}"`;
}
