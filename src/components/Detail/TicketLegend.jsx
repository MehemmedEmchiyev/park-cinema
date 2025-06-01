
const TicketLegend = () => {
  return (
    <div className="w-full text-white flex flex-col md:flex-row justify-between items-center px-4 py-2 text-sm font-medium">
      <div className="flex space-x-6">
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-gray-400 inline-block" />
          <span>Mövcuddur</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-black inline-block" />
          <span>Tutulmuş</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
          <span>Seçilmiş</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <span>Ailə <strong>4 AZN</strong></span>
        <span>Böyük <strong>5 AZN</strong></span>
      </div>
    </div>
  );
};

export default TicketLegend;
