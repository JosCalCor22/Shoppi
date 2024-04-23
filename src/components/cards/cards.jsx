function Cards ({data}){
  return(
    <div className="h-72 min-w-72 max-w-80 flex flex-col justify-between gap-1">
      <figure className="w-full h-[85%] relative">
        <span className="absolute top-[10px] right-[10px] text-white px-2 pb-1 rounded-full cursor-pointer bg-zinc-400/20">x</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images} alt={data.title} />
        <span className="absolute bottom-[10px] left-[10px] text-white p-2 rounded-lg cursor-pointer bg-zinc-400/20">{data.category.name}</span>
      </figure>
      <div className="flex justify-between">
        <p className="text-base">{data.title}</p>
        <span className="text-lg font-bold">${data.price}</span>
      </div>
    </div>
  )
}

export { Cards }