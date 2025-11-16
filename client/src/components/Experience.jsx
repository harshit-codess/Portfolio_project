import useOnScreen from "../useOnScreen.js";

export default function Experience() {
    const [ ref, isVisible] = useOnScreen();

    return (
        <>
            <h1 className="text-4xl font-bold my-10 ml-34 text-white">Experience</h1>
            <div ref={ref} className={`flex items-start my-20 ml-20 sm:ml-40 md:ml-80 space-x-4 fade-up ${isVisible ? "show" : ""}`}>
                <div className="flex flex-col ">
                    {[...Array(1)].map((_, i) => {
                        return (
                            <div key={i}>
                                <div className="bg-[#4f545c] h-6 w-12 badge" >2025</div>
                                <div className="h-2.5 w-2.5 mb-2 bg-[#F3C069] rounded-full dot"></div>
                                <div className="border-white border-l-2 h-[250px] sm:h-[70px]  ml-0.5"></div>
                            </div>)
                    })}
                </div>
                <div className="mt-7 text-white mr-25">
                    <h3 className="font-bold text-xl">Full Stack Development Trainee — Apna College</h3>
                    <p className="flex flex-wrap ">Engaged in comprehensive full-stack training covering both frontend and backend development.</p>


                </div>
            </div>

        </>
    )
}