(() => {
  const track = document.getElementById("track");
  const mercury = document.getElementById("mercury");
  const knob = document.getElementById("knob");
  const tempValue = document.getElementById("tempValue");
  const statusText = document.getElementById("statusText");
  const scaleContainer = document.getElementById("scaleContainer");

  const MIN_TEMP = 0;
  const MAX_TEMP = 100;

  let isDragging = false;

  // Create scale marks
  function createScale() {
    const marks = [100, 80, 60, 40, 20, 0];
    marks.forEach(temp => {
      const mark = document.createElement("div");
      mark.className = "scale-mark";
      mark.innerHTML = `<div class="scale-tick"></div><span>${temp}</span>`;
      scaleContainer.appendChild(mark);
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

    tempValue.textContent = temp + "°";

    if (temp < 30) {
      statusText.textContent = "Cold";
    } else if (temp < 60) {
      statusText.textContent = "Comfortable";
    } else if (temp < 80) {
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
  updateUI(70);
})();