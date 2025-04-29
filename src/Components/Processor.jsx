import { useGSAP } from "@gsap/react"
import { chipImg } from "../utils"
import gsap from "gsap"
const Processor = () => {

    useGSAP(() => {
        gsap.from("#chip", { 
            scrollTrigger: { 
                trigger: "#chip", 
                start: "top 85%" 
            },
            scale: 1.3, 
            opacity: 0, 
            duration: 1 
        }, )
    }, [])

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <div className="flex flex-col items-center justify-center overflow-hidden">
                <div className="flex-center">
                    <img id="chip" src={chipImg} alt="chipImg" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Processor