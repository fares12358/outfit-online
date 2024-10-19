
export default function Home() {
  return (
    <main className=" w-full h-[calc(100%-80px)] p-5">
      <p className="tx_sh text-8xl font-light text-white mt-36">online</p>
      <h1 className="tx_sh text-9xl font-bold text-white mt-10 uppercase">
        dressing
      </h1>
      <div className=" mt-10 gap-5 flex items-center">
        <span className="tx_sh text-5xl font-medium text-white">try your outfit online</span>
        <button className="BX_SH bg-black py-2 px-4 text-white text-xl rounded-lg">try now</button>
      </div>
    </main>
  );
}
