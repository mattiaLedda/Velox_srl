import React from 'react';

function ThreePar() {
    // Array di oggetti contenente le informazioni per ogni scheda
    const cardsData = [
        { 
            icon: 'fa-solid fa-house-chimney', 
            title: 'Rivestimento dei tetti', 
            text: `Le poliuree sono una scelta eccellente per il rivestimento dei tetti. Queste offrono una barriera impermeabile che previene infiltrazioni d'acqua e protegge la struttura dai danni. Data la loro resistenza agli agenti atmosferici e la capacità di aderire perfettamente alle superfici, le poliuree estendono la vita utile del tetto, riducendo la necessità di manutenzione frequente. Inoltre, l'applicazione è rapida e non richiede giunti, garantendo una protezione continua.` 
        },
        { 
            icon: 'fa-solid fa-ruler-horizontal', 
            title: 'Pavimentazioni', 
            text: `Le poliuree sono ideali per le pavimentazioni, specialmente in aree ad alto traffico o in ambienti industriali. Grazie alla loro resistenza all'abrasione e alla capacità di resistere a sostanze chimiche, le poliuree offrono una superficie durevole. La flessibilità intrinseca del materiale permette di assorbire gli impatti, riducendo il rischio di danni. La rapida cura delle poliuree permette anche tempi di inattività minimi durante l'applicazione, rendendo il processo efficiente.` 
        },
        { 
            icon: 'fa fa-volume-off', 
            title: 'Insonorizzazione', 
            text: `Nell'ambito dell'insonorizzazione, le poliuree offrono soluzioni efficaci riducendo la trasmissione del suono attraverso le pareti e i pavimenti. La loro capacità di formare barriere dense e continue può aiutare a bloccare i rumori esterni. Utilizzando le poliuree in combinazione con altri materiali isolanti, è possibile ottenere ambienti silenziosi, ideali sia per abitazioni che per uffici. L'insonorizzazione efficace contribuisce anche al benessere e alla produttività.` 
        },
        { 
            icon: 'fa fa-layer-group', 
            title: 'Rivestimento di balconi e terrazze', 
            text: `I balconi e le terrazze sono esposti a condizioni atmosferiche variabili. Le poliuree, con la loro resistenza all'umidità e ai raggi UV, sono una soluzione perfetta per proteggere questi spazi. L'applicazione di poliurea crea una membrana impermeabile che previene danni da infiltrazioni, resistendo allo stesso tempo alla flessione dovuta ai carichi o alle variazioni termiche. Questa soluzione prolunga la durata di balconi e terrazze, mantenendoli sicuri e funzionali.` 
        },
        { 
            icon: 'fa fa-tools', 
            title: 'Riparazione di crepe e giunture', 
            text: `Le crepe e le giunture possono diventare punti critici nelle costruzioni. Le poliuree, grazie alla loro elevata adesione e flessibilità, sono spesso utilizzate per sigillare e riparare questi difetti. A differenza di altri materiali, le poliuree non si restringono e mantengono la loro integrità nel tempo, fornendo una soluzione duratura. Sono particolarmente efficaci anche in presenza di movimenti strutturali, poiché possono estendersi e contrarsi senza rompersi.` 
        },
        { 
            icon: 'fa fa-thermometer-half', 
            title: 'Isolamento termico', 
            text: `L'uso delle poliuree nell'isolamento termico offre benefici significativi. Essendo un materiale continuo e senza giunti, previene ponti termici e perdite di energia. La capacità isolante delle poliuree, unita alla loro resistenza e durabilità, garantisce un comfort ottimale in ambienti interni, riducendo notevolmente i costi energetici. Inoltre, proteggono le strutture dall'umidità, prevenendo problemi come la muffa e migliorando la qualità dell'aria interna.` 
        }
    ];
    
    

    return (
        <div className="w-100 three-wrap">
            <h3 className="w-100 text-center three-title">Gli utilizzi delle poliuree</h3>
            <div className="d-flex flex-wrap three-cont">
                {cardsData.slice(0,3).map((card, index) => (
                    <div 
                        key={index} 
                        className={`d-flex flex-column align-items-center threecard ${index === 1 ? 'three-center' : ''}`}
                        style={{
                            width: '33.33%', 
                            borderRight: (index === 1) ? '1px solid #000' : 'none',
                            boxSizing: 'border-box'
                        }}
                    >
                        <i className={card.icon}></i>
                        <h4>{card.title}</h4>
                        <p className="three-p">{card.text}</p>
                    </div>
                ))}
            </div>
            <div style={{height: '20px'}}></div> {/* Spazio tra le due righe */}
            <div className="d-flex flex-wrap three-cont">
                {cardsData.slice(3,6).map((card, index) => (
                    <div 
                        key={index} 
                        className={`d-flex flex-column align-items-center threecard ${index === 1 ? 'three-center' : ''}`}
                        style={{
                            width: '33.33%', 
                            borderRight: (index === 1) ? '1px solid #000' : 'none',
                            boxSizing: 'border-box'
                        }}
                    >
                        <i className={card.icon}></i>
                        <h4>{card.title}</h4>
                        <p className="three-p">{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThreePar;
