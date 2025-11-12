

export default function Experience() {
    return (
        <>
            <h1 className="text-4xl font-bold my-10 ml-34 text-white">Experience</h1>
            <div className="flex items-start my-20 ml-40 md:ml-80 space-x-4">
                <div className="flex flex-col space-y-4">
                    {[...Array(1)].map((_, i) => {
                        return (
                        <div key={i}>
                            <div className="bg-[#4f545c] h-6 w-12 badge" >2025</div>
                            <div className="h-2.5 w-2.5 mb-2 bg-[#F3C069] rounded-full dot"></div>
                            <div className="border-white border-l-2 h-[200px] ml-0.5"></div>
                        </div>)
                    })}
                </div>
                <div className="mt-7 text-white">
                    <h3 className="font-bold text-xl">Fresher</h3>
                    <p>New Delhi, India</p>
                    <p>Looking to start a career in Software Development.</p>
                </div>
            </div>

        </>
    )
}