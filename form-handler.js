document.getElementById("zdarzenie").addEventListener("change", function () {
  const val = this.value;
  document.getElementById("poleIlosc").style.display = "none";
  document.getElementById("poleUszkodzenie").style.display = "none";
  document.getElementById("poleOpis").style.display = "none";

  if (val === "BRAK PACZKI" || val === "DODATKOWA PACZKA") {
    document.getElementById("poleIlosc").style.display = "block";
  } else if (val === "USZKODZENIE PACZKI") {
    document.getElementById("poleUszkodzenie").style.display = "block";
  } else if (val === "NIEDORECZENIE / BŁĘDNY ADRES") {
    document.getElementById("poleOpis").style.display = "block";
  }
});

document.getElementById("incidentForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const response = await fetch("https://script.google.com/macros/s/AKfycbz2Hsbs6HvOLJotns77f1VICkgSJbYKvIwio0erl266HYBKAcXN9qC36dIN1D9XFYw2kw/exec", {
    method: "POST",
    body: formData
  });

  const result = await response.json();
  if (result.success) {
    alert("Zgłoszenie zostało wysłane!");
    form.reset();
  } else {
    alert("Błąd: " + result.message);
  }
});
