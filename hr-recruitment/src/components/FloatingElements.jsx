export default function FloatingElements() {
    return (
        <>
            <div className="absolute top-28 left-16 w-28 h-28 rounded-full border-[6px] border-blue-300/40 animate-float-slow" />
            <div
                className="absolute top-40 right-12 w-16 h-16
  bg-gradient-to-br from-teal-400 to-blue-500
  rounded-2xl opacity-25 animate-float-rotate"
            />
            <div className="absolute bottom-24 right-1/4 w-48 h-48 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
        </>
    );
}
