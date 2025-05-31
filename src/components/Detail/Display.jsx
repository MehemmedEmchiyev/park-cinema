import clsx from "clsx";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";



const Display = () => {
    const [ rowI , setRowi ] = useState("")
    const [ colI , setColi ] = useState("")

    const [seatLayout,setSeatLayout] = useState([
      [null, 1, null, 1, 1, 1],        
      [1, 1, 1, 1, 1],                 
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
      [1, 1, 1, 1, 1, 1, 1, 1],        
      [1, 1, 1, 1, 1, 1, 1, 1],        
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
      [null, null, 3, 4, 1, 1, 1, 1, 1, 1]
    ])
    const [uzvSayi , setUzvSayi ] = useState(0)
    const [aileStatue , setAileStatue] = useState(false)
    console.log(uzvSayi);
    
    const handler = (row,index) => {
        if(uzvSayi == 3){
            setAileStatue(false)
        }
        if(aileStatue){
            setRowi("")
            setColi("")
            setUzvSayi(uzvSayi + 1)
            select(row,index,"")
        }   
        else{
            setRowi(row)
            setColi(index)
        }
    }
    const select = (row,col,arg) => {
        if(arg == "aile" ) {
            setUzvSayi(uzvSayi + 1)
            setAileStatue(true)
            setRowi("")
            setColi("")
        }
        setSeatLayout(prev => {
            const update = [...prev.map(item => [...item])]
            if(update[row][col] == 1){
                update[row][col] = 2
            }
            else{
                update[row][col] = 1
            }
            return update
        })
        setRowi('')
        setColi('')
    }

    return (
    <div className={`bg-[#4D4D4D] overflow-auto w-full  text-white py-25 px-10 rounded-2xl min-h-screen flex flex-col items-start`}>
      <div className="flex justify-between w-full">
        <div className="grid grid-rows-10 gap-5 ml-10 ">
        {seatLayout?.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center  flex-wrap space-x-1 gap-3">
            <span className="w-6 text-right mr-2">{10 - rowIndex}</span>
            {row.map((seat, seatIndex) =>
              seat === null ? (
                <div key={seatIndex} className="w-8 h-8" />
              ) : (
                <div className="relative">
                    <button
                    onClick={() => handler(rowIndex,seatIndex)}
                    key={seatIndex}
                    className={clsx(
                        "w-8 h-8 rounded-md text-sm font-medium",
                        seat === 1 ? "bg-gray-300 text-black" : "",
                        seat === 0 ? "bg-black" : "",
                        seat === 2 ? "bg-red-600" : "",
                        seat === 3 ? "bg-blue-500 text-white" : ""
                    )}
                    >
                    {seatIndex + 1}
                    </button>
                    <div className={`absolute bottom-[35px] right-[-50px] rounded-xl overflow-hidden z-20 bg-[rgba(255,255,255,.9)]  ${rowI == rowIndex && colI == seatIndex ? "block" : "hidden"}`}>
                        <ul className="text-black text-center flex flex-col gap-3">
                            {
                               uzvSayi < 3 && <li onClick={() => select(rowIndex,seatIndex,"aile")} className={`py-1  w-[100px] hover:text-white cursor-pointer hover:bg-red-500 `}>Aile</li>
                            }
                            <li onClick={() => select(rowIndex,seatIndex,"boyuk")} className="py-1  w-[100px] hover:text-white cursor-pointer hover:bg-red-500">Böyük</li>
                        </ul>
                    </div>
                </div>
              )
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">

        <div onClick={() => zoom(1)} className="w-[30px] h-[30px] rounded-[5px] flex items-center  justify-center bg-[#D9DADB]">
            <FaPlus className="text-black "/>
        </div>
        <div onClick={() => zoom(-1)} className="w-[30px] h-[30px] rounded-[5px] flex items-center  justify-center bg-[#D9DADB]">
            <FaMinus className="text-black "/>
        </div>

      </div>
      </div>
      <div className="mt-2 text-center text-lg font-medium w-full">Ekran</div>
      <div className="mt-10 w-full flex justify-center">
        <img src="https://new.parkcinema.az/images/screen.svg" alt="" />
      </div>
    </div>
  );
};

export default Display;
