import React, { useEffect, useState } from 'react' // hook

export default function SideEffect () {
	const [color, setColor] = useState("");
    const [wheel, setWheel] = useState("");
    const [base, setBase] = useState("");
	const [rangkuman, setRangkuman] = useState("");

	useEffect(() => {
		console.log('efek samping setiap update')
		return () => {
			console.log('sebelum efek samping selanjutnya jalan')
		}
	})

	useEffect(() => {
		//Start
		const dataFromDb = {
			color: '?',
			wheel: '?',
			base: '?'
		}

		setColor(dataFromDb.color)
		setWheel(dataFromDb.wheel)
		setBase(dataFromDb.base)

		return () => {
			setColor('')
			setWheel('')
			setBase('')
			setRangkuman('')
		}
	}, [])

	useEffect(() => {
		//Update
		setRangkuman(`It Is Based on ${base} style, has ${wheel} wheel and with ${color} as it main color.`)
	}, [base, wheel, color])

	return <>
		<div>
        <h2>Your Car Costumization Is :</h2>
        <p>{rangkuman}</p>


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
}