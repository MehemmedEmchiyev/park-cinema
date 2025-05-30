const MovieCard = ({item}) => {
  return (
    <div 
      className="cursor-pointer rounded-xl overflow-hidden bg-zinc-800 shadow-lg relative group"
    >
      <div className="w-full h-full overflow-hidden">
        <div className="z-10 w-full h-full absolute top-0 left-0 right-0 bg-[rgba(0,0,0,.3)] md:bg-[rgba(0,0,0,.6)]  duration-300 group-hover:bg-[rgba(0,0,0,.1)]"></div>
        <img
          src={`https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75`}
          alt="Təhlükəli döngə"
          className="object-cover w-full h-full duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4 absolute bottom-0 w-full z-10 text-white space-y-1 ">
        <h3 className="text-lg font-semibold">{item.name }</h3>
        <p className="text-sm text-zinc-200">{item.year}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-md py-1  rounded-md">{item.ageLimit == 'EIGHTEEN' ? '18+' : item.ageLimit == 'SIX' ? "6+" : '16+'}</span>
          <div className="flex items-center gap-3">
            {
                item.languages.map((item,index) => <img
                key={index}
                src={`https://flagcdn.com/w40/${item == "EN" ? 'us': item.toLowerCase()}.png`}
                alt= {item} 
                className="w-5 h-5 rounded-full"
            />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
