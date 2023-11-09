import { RotatingLines } from "react-loader-spinner"

const LoadingOverlay = ({ visibility }: any) => {
    return (
        <div className={`top-0 flex scale-x-0 items-center justify-center h-screen w-screen fixed bg-black/80
                ${visibility && "scale-x-100"}
        `}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}

export default LoadingOverlay