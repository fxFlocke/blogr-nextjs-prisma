import Link from "next/link";

export default function Academics(){
    return(
        <div className="flex flex-col items-center">
        <div className="pb-6 text-center text-2xl">
            <h2 className="text4xl font-bold pl-[20px]">Academic education & skills</h2>
        </div>
        <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <div className="w-[350px] h-[600px] bg-[#440707] p-4 rounded-lg text-3xl font-bold">
                <div className="max-w-sm h-[570px] pt-[30px] grid grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <img
                        src="dev.png"
                        alt="React-Ecommerce"
                        width={320}
                        height={165} className="rounded-lg"/>
                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            Hochschule Kempten
                        </div>
                        <p className="text-base">
                            I am currently attending the Hochschule Kempten, to graduate with ab bachelor's degree
                            in Computer Science next Year. During the last years I was able to learn a lot about 
                            computers, software-architecture, maths and teamwork. Great lecturers & great people.
                        </p>
                    </div>
                    <div className="mt-auto px-6 pt-2 pb-4 text-sm">
                        <Link legacyBehavior href="https://www.hs-kempten.de/">
                            <a target="_blank">
                            <button className="cursor-pointer duration-300 ease-in shadow-gray-500/50 hover:scale-[1.05]">Reach Out</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-[350px] h-[600px] bg-[#440707] p-4 rounded-lg text-3xl font-bold">
                <div className="max-w-sm h-[570px] pt-[30px] grid grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <img
                        src="sema.png"
                        alt="React-Ecommerce"
                        width={320}
                        height={165} className="rounded-lg"/>
                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            Sema Software
                        </div>
                        <p className="text-base">
                            Sema is the current Leader in CAD-Software in the wood consturction industry in germany.
                            During my bachlor's degree I work here, developing an application for 3D-Scans and 
                            digital measurements. The professional team there helped me a lot to develop myself further in every aspect.
                        </p>
                    </div>
                    <div className="mt-auto px-6 pt-2 pb-4 text-sm">
                        <Link legacyBehavior href="https://www.sema-soft.de/home/">
                            <a target="_blank">
                            <button className="cursor-pointer duration-300 ease-in shadow-gray-500/50 hover:scale-[1.05]">Reach Out</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-[350px] h-[600px] bg-[#440707] p-4 rounded-lg text-3xl font-bold">
                <div className="max-w-sm h-[570px] pt-[30px] grid grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <img
                        src="PMS_Logo1_Outline.ico"
                        alt="React-Ecommerce"
                        width={320}
                        height={165} className="rounded-lg"/>
                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            Swupel PMS
                        </div>
                        <p className="text-base">
                            Swupel PMS is a Non-Profit Organisation that develops a blockchain for land registry. 
                            I was part of the team for a few months, met nice poeple and we discussed great ideas.
                            Of curse there were also some coding sessions with all these smart brains.
                        </p>
                    </div>
                    <div className="mt-auto px-6 pt-2 pb-4 text-sm">
                        <Link legacyBehavior href="https://swupel-pms.vercel.app/">
                            <a target="_blank">
                            <button className="cursor-pointer duration-300 ease-in shadow-gray-500/50 hover:scale-[1.05]">Reach Out</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-[350px] h-[600px] bg-[#440707] p-4 rounded-lg text-3xl font-bold">
                <div className="max-w-sm h-[570px] pt-[30px] grid grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <img
                        src="meeting.PNG"
                        alt="React-Ecommerce"
                        width={320}
                        height={165} className="rounded-lg"/>
                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            Private Projects
                        </div>
                        <p className="text-base">
                            When I have some freetime, I love to work on different projects on my own.
                            When you take a look into my Github, you can find Projects about:
                            <br/>Web3, Cryptography, Webdesign, Backend Development and much more.
                        </p>
                    </div>
                    <div className="mt-auto px-6 pt-2 pb-4 text-sm">
                        <Link legacyBehavior href="https://github.com/flockchain?tab=repositories">
                            <a target="_blank">
                            <button className="cursor-pointer duration-300 ease-in shadow-gray-500/50 hover:scale-[1.05]">Visit</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-[350px] h-[600px] bg-[#440707] p-4 rounded-lg text-3xl font-bold">
                <div className="max-w-sm h-[570px] pt-[30px] grid grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <img
                        src="vid.PNG"
                        alt="React-Ecommerce"
                        width={320}
                        height={165} className="rounded-lg"/>
                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            Acting and Script Writing
                        </div>
                        <p className="text-base">
                            During a project from my university, I discorvered my love for acting and writing scripts.
                            With a lot of imagination and a great sense for dramatic it seems like a perfect fit.
                            You can watch the Video below and reach out to me via email if you are interested in ideas or an actor. 
                        </p>
                    </div>
                    <div className="mt-auto px-6 pt-2 pb-4 text-sm">
                        <a>felix.jost.7@gmx.de</a>
                    </div>
                </div>
            </div>

            <div className="w-[350px] h-[600px] bg-[#440707] p-4 rounded-lg text-3xl font-bold">
                <div className="max-w-sm h-[570px] pt-[30px] grid grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <img
                        src="back.PNG"
                        alt="React-Ecommerce"
                        width={320}
                        height={165} className="rounded-lg"/>
                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            Blockchain Research
                        </div>
                        <p className="text-base">
                            Blockchain Technology is from my perspective the most promising and interesting field in Computer Science.
                            Next to the System Architecture itself, there are scaling Solutions, Decentralized Applications, DAOs and 
                            of course Token Engineering.
                        </p>
                    </div>
                    <div className="mt-auto px-6 pt-2 pb-4 text-sm">
                        <Link legacyBehavior href="https://www.linkedin.com/in/felix-stefan-jost-5b4307234/">
                            <a target="_blank">
                            <button className="cursor-pointer duration-300 ease-in shadow-gray-500/50 hover:scale-[1.05]">Contact Me</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}