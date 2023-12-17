import { Html } from "@react-three/drei"

const Loader = () => {
  return (
    <Html>
        <div className='flex-justify-center items-center'>
            <div className='w-20 h-20 border-2 border-opacity-20
            order-blue-500 border-t-blue-500 rounded-ful animate-spinl'/>
        </div>
    </Html>
  )
}

export default Loader