function formatPhoneNumber(phoneNumber) {
  // Ne skaičių šalinimas iš numerio
  var clean = ("" + phoneNumber).replace(/\D/g, "");

  // Patikrinimas ar numerį sudaro 10 skaičių 
  if (clean.length !== 10) {
      throw new Error("Input must contain exactly 10 numeric characters");
  }

  // Naudojant "regular expressions", kad sulyginus gautume reikiamas tel. nr. dalis
  var match = clean.match(/^(\d{3})(\d{3})(\d{4})$/);

  // Jeigu "clean/švari" įvestis sutampa su šablonu, formatuoti numerį
  if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  // Jeigu nesutampa:
  return null;
}

function formatAndDisplayPhoneNumber() {
  const inputField = document.getElementById("phoneInput");
  const outputDiv = document.getElementById("output");

  try {
      const formattedNumber = formatPhoneNumber(inputField.value);
      outputDiv.textContent = `Ho Ho Ho: ${formattedNumber}`;
      outputDiv.style.color = "green";
  } catch (error) {
      outputDiv.textContent = error.message + ", you naughty elf!";
      outputDiv.style.color = "red";
  }
}