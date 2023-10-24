function updateTime() {
  //Paris
  let parisElement = document.querySelector("#Paris");

  let parisTimeElement = parisElement.querySelector(".time");

  let parisDatelement = parisElement.querySelector(".date");
  let paris = moment().tz("Europe/Paris");

  parisDatelement.innerHTML = paris.format(" MMMM Do, YYYY");

  parisTimeElement.innerHTML = paris.format("hh:mm:ss [<small>]A[</small>]");

  //London
  let londonElement = document.querySelector("#London");

  let londonTimeElement = londonElement.querySelector(".time");

  let londonDatelement = londonElement.querySelector(".date");
  let london = moment().tz("Europe/London");

  londonDatelement.innerHTML = london.format(" MMMM Do, YYYY");

  londonTimeElement.innerHTML = london.format("hh:mm:ss [<small>]A[</small>]");

  //Tokyo
  let tokyoElement = document.querySelector("#Tokyo");

  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoDatelement = tokyoElement.querySelector(".date");
  let tokyo = moment().tz("Asia/Tokyo");

  tokyoDatelement.innerHTML = tokyo.format(" MMMM Do, YYYY");

  tokyoTimeElement.innerHTML = tokyo.format("hh:mm:ss [<small>]A[</small>]");

  //Sydney
  let sydneyElement = document.querySelector("#Sydney");

  let sydneyTimeElement = sydneyElement.querySelector(".time");

  let sydneyDatelement = sydneyElement.querySelector(".date");
  let sydney = moment().tz("Australia/Sydney");

  sydneyDatelement.innerHTML = sydney.format(" MMMM Do, YYYY");

  sydneyTimeElement.innerHTML = sydney.format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
