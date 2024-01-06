import CardBottom from "./CardBottom"
import cardData from "./cards"
function BottomCards() {
    return (
        <div class="bottomcardscontainer d-flex flex-column align-items-center">
        <h2 className="sottoservizi m-5">Sottoservizi</h2>
        <div className="bardcontainer d-flex flex-row flex-wrap align-items-center align-center justify-content-center">
          {cardData.map((data, index) => (
            <CardBottom
              key={index}
              image={data.image}
              title={data.title}
              text={data.text}
              to={data.to}
            />
          ))}
        </div>
      </div>
    )
}

export default BottomCards