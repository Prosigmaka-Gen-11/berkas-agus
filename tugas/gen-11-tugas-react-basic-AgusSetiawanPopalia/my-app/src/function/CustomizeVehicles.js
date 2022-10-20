import React from "react";

function CustomizeVehicles() {
    const [color, setColor] = React.useState(" ? ");
    const [wheel, setWheel] = React.useState(" ? ");
    const [base, setBase] = React.useState(" ? ");

    return(
        <>
        <div>
        <h2>Your Car Costumization Is :</h2>
        <p>It Is Based on {base} style, has {wheel} wheel and with {color} as it main color.</p>


        <div id="color">
        <p>Select Color</p>
            <button onClick={() => setColor("Red")}>
                Red
            </button>
            <button onClick={() => setColor("Blue")}>
                Blue
            </button>
            <button onClick={() => setColor("Green")}>
                Green
            </button>
            <button onClick={() => setColor("Violet")}>
                Violet
            </button>
            <button onClick={() => setColor("Black")}>
                Black
            </button>
            <button onClick={() => setColor("White")}>
                White
            </button>
        </div>
        <div id="wheel">
            <button onClick={() => setWheel("3")}>
                3
            </button>
            <button onClick={() => setWheel("4")}>
                4
            </button>
            <button onClick={() => setWheel("6")}>
                6
            </button>   
        </div>
        <div id="base">
            <button onClick={() => setBase("Batmobile")}>
                Batmobile
            </button>
            <button onClick={() => setBase("Jokermobile")}>
                Jokermobile
            </button>
            <button onClick={() => setBase("Robinmobile")}>
                Robinmobile
            </button>
            <button onClick={() => setBase("Esmeralda")}>
                Esmeralda
            </button>
            <button onClick={() => setBase("Supermobile")}>
                Supermobile
            </button>
            <button onClick={() => setBase("Batmobile")}>
                Batmobile
            </button>
        </div>
        </div> 
        </>

    );
    

}

export default CustomizeVehicles