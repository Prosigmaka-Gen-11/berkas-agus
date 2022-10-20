import React from "react";

function SelectCaracter () {
    const [hero, setHero] = React.useState("?");
    return(
      <>
        <div>
          <h2>Selected Hero :</h2>
          <p>{hero}</p>
        <button onClick={() => setHero("Superman")}>
          Superman
        </button>
        <button onClick={() => setHero("Batman")}>
          Batman
        </button>
        <button onClick={() => setHero("Green Lantern")}>
          Green Lantern
        </button>
        <button onClick={() => setHero("The Flash")}>
          The Flash
        </button>
        <button onClick={() => setHero("Wonder Woman")}>
          Wonder Woman
        </button>
        </div>
      </>
    );

}

export default SelectCaracter;