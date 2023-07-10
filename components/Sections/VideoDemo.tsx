export default function VideoDemo(){
    return(
        <div className='flex flex-col items-center'>
            <div className='h-[450px] w-[350px] md:h-[685px] md:w-[1000px] grid items-center justify-center text-center bg-[#440707] p-4 rounded-lg'>
                <div className="h-[390px] w-[320px] md:w-[965px] md:h-[650px] overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <div className='text-center font-inner pb-4'>
                        <h2 className='text-2xl pt-6'>Project Healthhome, Hochschule Kempten</h2>
                    </div>
                    <video src="./MarketingVideo.mov" controls className="rounded-lg"/>
                </div>
            </div>
        </div>
    )
}