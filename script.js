let cel = document.getElementById("cel");
let far = document.getElementById("far");

cel.addEventListener("input", () => {
  let c = cel.value;
  let f = (c * 9) / 5 + 32;
  far.value = f.toFixed(3);
  if (cel.value === "") {
    far.value = "";
  }
});

far.addEventListener("input", () => {
  let f = far.value;
  let c = ((f - 32) * 5) / 9;
  cel.value = c.toFixed(4);
  if (far.value === "") {
    cel.value = "";
  }
});
