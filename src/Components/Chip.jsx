import { chipImg } from "../utils"

const Chip = () => {
  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <div className="flex flex-col items-center justify-center overflow-hidden">
                <div className="mt-32 mb-24">
                    <img src={chipImg} alt="chipImg" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Chip