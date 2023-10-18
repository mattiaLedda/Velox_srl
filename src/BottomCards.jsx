import CardBottom from "./CardBottom"
import cardData from "./cards"
function BottomCards() {
    return (
        <div class="bottomcardscontainer">
        <h2 className="ml-4 sottoservizi">Sottoservizi</h2>
        <div className="bardcontainer d-flex flex-row flex-wrap">
          {cardData.map((data, index) => (
            <CardBottom
              key={index}
              image={data.image}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>
      </div>
    )
}

export default BottomCards