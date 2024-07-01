
const Spinner = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[100vh] relative">
                <div className="animate-ping w-[150px] h-[150px] rounded-full bg-sky-600 flex justify-center items-center font-semibold text-2xl text-white">Loading ...</div>
            </div>
        </>
    )
}

export default Spinner