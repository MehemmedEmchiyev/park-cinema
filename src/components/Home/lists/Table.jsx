import { useEffect } from "react"
import { getDetail } from "../../../services/servics"
import  DateSlider  from "./tableElements/DateSlider"
import Selects from "../Selects"
import TableElement from "./tableElements/TableElement"
const Table = () => {
  useEffect(() => {
    getDetail()
  },[])
  return (
    <div>
      <div className="flex items-center flex-col  md:flex-row">
        <div className="w-full md:w-max">
          <DateSlider />
        </div>
        <div className="w-full flex items-center flex-col md:flex-row p-5">
          <Selects list="table" />
        </div>
      </div>
      <TableElement />
    </div>
  )
}

export default Table