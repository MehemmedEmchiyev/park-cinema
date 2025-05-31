import { useEffect, useState } from "react";
import { getDetail } from "../../../../services/servics";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import CustomSkeleton from "./CustomSkeleton";
import { useNavigate } from "react-router";
const ITEMS_PER_PAGE = 5;
const TableElement = () => {
  const { selectedLang ,selectedTheatres } = useSelector(store => store.selector)
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await getDetail();
      const filtered = data.filter(item => {
        return (!selectedLang || item.language == selectedLang) &&
               (!selectedTheatres || item.theatreTitle == selectedTheatres)
      })
      setMovies(selectedLang || selectedTheatres ? [...filtered] : [...data]);
    };
    getData();
  }, [selectedLang , selectedTheatres]);

  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      const nextPage = prev + direction;
      if (nextPage < 0) return 0;
      if (nextPage >= totalPages) return totalPages - 1;
      return nextPage;
    });
  };

  const displayedMovies = movies.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );
  const navigator = useNavigate()
  const navigate = (id) => {  
    console.log(id);
    
    navigator(`/seat-selection/${id}`)
  }
  return (
    <>
    {movies.length ? 
    <div className="bg-transparent text-white p-6">
      <div className="space-y-2">
        { displayedMovies.map((session, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 items-center border-b border-white text-center py-3"
          >
            <div className="text-sm">{session.time}</div>
            <div className="text-sm">{session.movie.name}</div>
            <div className="text-sm">{session.theatreTitle}</div>
            <div className="gap-3 flex items-center justify-center">
              <div className="text-sm">{session.type.replace("_", "")}</div>
              <img
                src={`https://flagcdn.com/w40/${
                  session.language === "EN" ? "us" : session.language.toLowerCase()
                }.png`}
                className="w-5 h-5 rounded-full"
              />
            </div>
            <div className="text-sm flex items-center justify-center">
              {session.subtitle !== "NONE" ? (
                <div className="w-[50px] text-[14px] px-3 md:px-8 py-0.5 items-center flex flex-col border-1 border-white bg-transparent rounded-xl">
                  <span>{session.subtitle}</span>
                  <span>sub</span>
                </div>
              ) : (
                <div className="w-[50px] items-center flex justify-center px-3 md:px-8 py-0.5 border-1 text-[14px] border-white bg-transparent rounded-xl">
                  <span className="">Altyazı Yoxdur</span>
                </div>
              )}
            </div>

            <button onClick={() => navigate(session.id)} className="cursor-pointer flex items-center justify-center bg-[#D52B1E] opacity-65 hover:opacity-100 duration-200 rounded-[20px] w-[100px] h-[36px] px-4 py-2  text-white text-sm hover:bg-[#A81A1A] transition md:!w-[160px]  max-sm:!w-[60px] max-sm:!p-0 max-sm:!text-[12px] max-sm:leading-3">
              Bilet Al
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-3 pt-3">
        <button onClick={() => handlePageChange(-1)} disabled={currentPage === 0}>
          <MdOutlineKeyboardArrowLeft />
        </button>

        <div className="flex items-center gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`p-3 rounded-full flex items-center justify-center w-[20px] h-[20px] cursor-pointer ${
                currentPage === index ? "bg-[#F34334]" : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage >= totalPages - 1}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
    : <CustomSkeleton />}
    </> 
  ) ;
};

export default TableElement;
