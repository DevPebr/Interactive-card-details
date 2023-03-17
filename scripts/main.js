const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const numberRegex = /^[0-9 ]+$/;

document.getElementById("card-name").addEventListener("keyup", (e) => {
  document.getElementById(
    "card-name-key"
  ).innerText = `${e.currentTarget.value}`;
  sessionStorage.setItem('cardName', e.currentTarget.value);
  
});

document.getElementById("card-number").addEventListener("keyup", (e) => {
  document.getElementById("card-number-key").innerText = e.currentTarget.value;
  sessionStorage.setItem('cardNumber', e.currentTarget.value);
});

document.getElementById("expires-month").addEventListener("keyup", (e) => {
  document.getElementById("card-exp-month").innerText = e.currentTarget.value;
  e.target.addEventListener("blur", (e) => {
    e.currentTarget.value.length === 2
      ? (document.getElementById("card-exp-month").innerText =
          e.currentTarget.value + "/")
      : e.currentTarget.value;
  });
  sessionStorage.setItem('expiresMonth', e.currentTarget.value + '/');
});

document.getElementById("expires-year").addEventListener("keyup", (e) => {
  document.getElementById("card-exp-year").innerText = e.currentTarget.value;
  sessionStorage.setItem("expiresYear", e.currentTarget.value);
});

document.getElementById("cvc").addEventListener("keyup", (e) => {
  document.getElementById("card-cvc-key").innerText = e.currentTarget.value;
  sessionStorage.setItem('cardCvc', e.currentTarget.value);
});

document.getElementById("btn-confirm").addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  const cardNameInput = document.getElementById("card-name");
  const nameError = document.querySelector(".name-error");
  const cardNumberInput = document.getElementById("card-number");
  const numberError = document.querySelector(".number-error");
  const expiresMonth = document.getElementById("expires-month");
  const expiresYear = document.getElementById("expires-year");
  const validateError = document.querySelector(".validate-error");
  const cvcInput = document.getElementById("cvc");
  const cvcError = document.querySelector(".cvc-error");
  

  if (cardNameInput.value.match(nameRegex)) {
    cardNameInput.style.border = "2px solid hsl(249, 99%, 64%)";
    nameError.style.color = "transparent";
    
  
  } else if (!cardNameInput.value.match(nameRegex)) {
    cardNameInput.style.border = "2px solid red";
    nameError.style.color = "red";
    return;
  }

  if (cardNumberInput.value.match(numberRegex)) {
    cardNumberInput.style.border = "2px solid hsl(249, 99%, 64%)";
    numberError.style.color = "transparent";
  } else if (
    !cardNumberInput.value.match(numberRegex) ||
    cardNumberInput.value.length === 0
  ) {
    cardNumberInput.style.border = "2px solid red";
    numberError.style.color = "red";
    return;
  }

  if (expiresMonth.value.length === 0) {
    expiresMonth.style.border = "2px solid red";
    validateError.style.color = "red";
    return;
  } else if (expiresMonth.value.length > 0) {
    expiresMonth.style.border = "2px solid hsl(249, 99%, 64%)";
    validateError.style.color = "transparent";
  }

  if (expiresYear.value.length === 0) {
    expiresYear.style.border = "2px solid red";
    validateError.style.color = "red";
    return;
  } else if (expiresYear.value.length > 0) {
    expiresYear.style.border = "2px solid hsl(249, 99%, 64%)";
    validateError.style.color = "transparent";
  }

  if(cvcInput.value.lenth === 0) {
    cvcInput.style.border='2px solid red';
    cvcError.style.color='red';
    return;
  }

  else if(cvcInput.value.length > 0) {
    cvcInput.style.border = '2px solid hsl(249, 99%, 64%)';
    cvcError.style.color='transparent';
  }

    window.location.href = './pages/completed.html';
});

