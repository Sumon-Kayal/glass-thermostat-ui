(() => {
  const track = document.getElementById("track");
  const mercury = document.getElementById("mercury");
  const knob = document.getElementById("knob");
  const tempValue = document.getElementById("tempValue");
  const statusText = document.getElementById("statusText");
  const scaleContainerLeft = document.getElementById("scaleContainerLeft");
  const scaleContainerRight = document.getElementById("scaleContainerRight");

  const MIN_TEMP = 0;
  const MAX_TEMP = 100;

  let isDragging = false;

  // Convert Celsius to Fahrenheit
  function celsiusToFahrenheit(c) {
    return Math.round((c * 9/5) + 32);
  }

  // Create scale marks
  function createScale() {
    // Celsius scale (left side) - 0 to 100°C
    const celsiusMarks = [100, 80, 60, 40, 20, 0];
    celsiusMarks.forEach(temp => {
      const mark = document.createElement("div");
      mark.className = "scale-mark";
      mark.innerHTML = `<div class="scale-tick"></div><span class="scale-label">${temp}</span>`;
      scaleContainerLeft.appendChild(mark);
    });

    // Fahrenheit scale (right side) - corresponding F values
    const fahrenheitMarks = celsiusMarks.map(c => celsiusToFahrenheit(c));
    fahrenheitMarks.forEach(temp => {
      const mark = document.createElement("div");
      mark.className = "scale-mark right";
      mark.innerHTML = `<div class="scale-tick"></div><span class="scale-label">${temp}</span>`;
      scaleContainerRight.appendChild(mark);
    });
  }

  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }

  function tempFromPosition(y) {
    const rect = track.getBoundingClientRect();
    const relative = clamp(rect.bottom - y, 0, rect.height);
    return Math.round((relative / rect.height) * (MAX_TEMP - MIN_TEMP) + MIN_TEMP);
  }

  function updateUI(temp) {
    const percent = (temp - MIN_TEMP) / (MAX_TEMP - MIN_TEMP) * 100;

    mercury.style.height = percent + "%";
    knob.style.bottom = percent + "%";

    const fahrenheit = celsiusToFahrenheit(temp);
    tempValue.textContent = `${temp}°C / ${fahrenheit}°F`;

    if (temp < 15) {
      statusText.textContent = "Cold";
    } else if (temp < 25) {
      statusText.textContent = "Cool";
    } else if (temp < 30) {
      statusText.textContent = "Comfortable";
    } else if (temp < 35) {
      statusText.textContent = "Warm";
    } else {
      statusText.textContent = "Hot";
    }
  }

  function handleMove(e) {
    if (!isDragging) return;

    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const temp = tempFromPosition(y);
    updateUI(temp);
  }

  function startDrag(e) {
    isDragging = true;
    handleMove(e);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  }

  function stopDrag() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("touchmove", handleMove);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
  }

  knob.addEventListener("mousedown", startDrag);
  knob.addEventListener("touchstart", startDrag);

  // Initialize
  createScale();
  updateUI(25);
})();