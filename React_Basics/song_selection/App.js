import React from "react";

function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Felis_silvestris_catus_meows.ogg"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/f/fe/Keith_Burton_-_217_-_walking.ogg"
  );

  const bird3 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/5/57/LL-Q8798_%28ukr%29-Tohaomg-%D1%8F%D0%BA_%D0%BA%D1%96%D1%82_%D0%BD%D0%B0%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D0%B2.wav"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }

  function toggle3() {
    if (bird3.paused) {
      bird3.play();
    } else {
      bird3.pause();
    }
  }

  return (
    <div>
      <button onClick={toggle1}>Кіт плаче</button>
      <button onClick={toggle2}>Музичка</button>
      <button onClick={toggle3}>Як кіт наплакав</button>
    </div>
  );
}

export default App;
