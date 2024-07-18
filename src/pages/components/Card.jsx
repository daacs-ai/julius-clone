export const Card = ({ Icon, title, desc, showLink }) => {
  return (
    <div className="flex flex-col p-3 items-stretch w-full rounded-md text-xs space-y-2">
      <Icon size={24} />
      <span>{title}</span>
      <p className="text-[10px] text-gray-400">{desc}</p>
      {showLink && (
        <p className="text-[10px] text-blue-600 font-semibold">Try now →</p>
      )}
    </div>
  );
};
