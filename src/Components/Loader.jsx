import { Html } from "@react-three/drei"
const Loader = () => {
    return (
    <Html>
        <div className="absolute w-full top-0 left-0 h-full flex justify-center items-center">
            <div id="loading" className="w-[10vw] h-[10vw] rounded-full">
                Loading....
            </div>
        </div>
    </Html>
  )
}

export default Loader