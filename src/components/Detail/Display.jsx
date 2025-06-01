import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changePlace, changePrice } from "../../store/ticketTotalPriceSlice";
import { v4 as uuidv4 } from "uuid";

const Display = () => {
  const [placeArr, setPlaceArr] = useState([]);
  const dispatch = useDispatch();
  const [rowI, setRowi] = useState("");
  const [colI, setColi] = useState("");
  const [uzvSayi, setUzvSayi] = useState(0);
  const [aileStatue, setAileStatue] = useState(false);

  const [prices, setPrices] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [seatLayout, setSeatLayout] = useState([
    [null, 1, null, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [null, null, 1, 4, 1, 1, 1, 1, 1, 1],
  ]);

  useEffect(() => {
    const total = prices.reduce(
      (acc, arr) => acc + arr.reduce((sum, price) => sum + price, 0),
      0
    );
    dispatch(changePrice(total));
  }, [prices]);

  useEffect(() => {
    dispatch(changePlace(placeArr));
  }, [placeArr]); // Sadece placeArr değişince

  const handler = (row, index) => {
    if (seatLayout[row][index] === 2) {
      // kaldırma işlemi
      if (uzvSayi <= 4 && uzvSayi > 0) setUzvSayi((prev) => prev - 1);

      setPrices((item) => {
        const updated = item.map((elem) => [...elem]);
        updated[row][index] = 0;
        return updated;
      });

      setPlaceArr((prev) =>
        prev.filter(
          (seat) => !(seat.sira === 10 - row && seat.yer === index + 1)
        )
      );

      setSeatLayout((prev) => {
        const updated = prev.map((item) => [...item]);
        updated[row][index] = 1;
        return updated;
      });

      if (aileStatue) {
        setAileStatue(false);
      }

      return;
    }

    if (aileStatue) {
      setRowi("");
      setColi("");
      select(row, index, "aile");
    } else {
      setRowi(row);
      setColi(index);
    }
  };

  const select = (row, col, arg) => {
    const newSeat = { sira: 10 - row, yer: col + 1 };

    setPlaceArr((prev) => [...prev, newSeat]);

    setSeatLayout((prev) => {
      const updated = prev.map((row) => [...row]);

      if (arg === "aile") {
        if (uzvSayi >= 4) return updated;

        updated[row][col] = 2;
        setPrices((prev) => {
          const updatedPrices = prev.map((r) => [...r]);
          updatedPrices[row][col] = 4;
          return updatedPrices;
        });

        setUzvSayi((prev) => prev + 1);
        if (uzvSayi + 1 >= 4) {
          setAileStatue(false);
        } else {
          setAileStatue(true);
        }

        return updated;
      }

      updated[row][col] = 2;

      setPrices((prev) => {
        const updatedPrices = prev.map((r) => [...r]);
        updatedPrices[row][col] = 5;
        return updatedPrices;
      });

      return updated;
    });

    setRowi("");
    setColi("");
  };

  return (
    <div className="bg-[#4D4D4D] overflow-auto w-full text-white py-25 px-10 rounded-2xl min-h-screen flex flex-col items-start">
      <div className="flex justify-between w-full">
        <div className="grid grid-rows-10 gap-5 ml-10">
          {seatLayout?.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center flex-wrap space-x-1 gap-3"
            >
              <span className="w-6 text-right mr-2">{10 - rowIndex}</span>
              {row.map((seat, seatIndex) =>
                seat === null ? (
                  <div key={seatIndex} className="w-8 h-8" />
                ) : (
                  <div key={uuidv4()} className="relative">
                    <button
                      onClick={() => handler(rowIndex, seatIndex)}
                      className={clsx(
                        "w-8 h-8 rounded-md text-sm font-medium",
                        seat === 1 && "bg-gray-300 text-black",
                        seat === 0 && "bg-black",
                        seat === 2 && "bg-red-600",
                        seat === 3 && "bg-blue-500 text-white"
                      )}
                    >
                      {seatIndex + 1}
                    </button>
                    <div
                      className={`absolute bottom-[35px] right-[-50px] rounded-xl overflow-hidden z-20 bg-[rgba(255,255,255,.9)] ${
                        rowI == rowIndex && colI == seatIndex
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <ul className="text-black text-center flex flex-col gap-3">
                        {uzvSayi < 4 && (
                          <li
                            onClick={() => select(rowIndex, seatIndex, "aile")}
                            className="py-1 w-[100px] hover:text-white cursor-pointer hover:bg-red-500"
                          >
                            Aile
                          </li>
                        )}
                        <li
                          onClick={() => select(rowIndex, seatIndex, "boyuk")}
                          className="py-1 w-[100px] hover:text-white cursor-pointer hover:bg-red-500"
                        >
                          Böyük
                        </li>
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center bg-[#D9DADB]">
            <FaPlus className="text-black" />
          </div>
          <div className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center bg-[#D9DADB]">
            <FaMinus className="text-black" />
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
