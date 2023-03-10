import './MapCard.scss'
import HighwayIcon from "../../assets/icons/highway.svg"
import TrainIcon from "../../assets/icons/train.svg"
import ShipIcon from "../../assets/icons/ship.svg"
import PlaneIcon from "../../assets/icons/plane.svg"
import MapStatBar from "../MapStatBar/MapStatBar.jsx";
const MapCard = (props) => {

    return (
        <article className="map-card">
            <span
                className="map-card-dlc"
                data-dlc={`${props.dlc}`}
                title={props.dlc === "Vanilla" ? `This map is included in the base game` : `The ${props.dlc} DLC is required to play on this map`}
            >
                {props.dlc}
            </span>
            <span className="map-card-title">{props.name}</span>
            <img
                src={props.image}
                alt={`${props.name} preview image. Images, logos, and other official Cities: Skylines content copyright © 2014 Paradox Interactive AB`}
                className="map-card-preview"
                loading={'lazy'}
            />
            <span className="map-card-buildable-area">Buildable Land Area: {props.buildableLandArea}%</span>
            <div className="map-card-connections">
                {props.highwayConnections &&
                    <img
                        src={HighwayIcon}
                        alt="Highways"
                        className="map-card-connection-icon"
                        title={`Highways: ${props.highwayConnections.incoming} incoming / ${props.highwayConnections.outgoing} outgoing`}
                    />
                }
                {props.railConnections &&
                    <img
                        src={TrainIcon}
                        alt="Railways"
                        className="map-card-connection-icon"
                        title={`Railways: ${props.railConnections.incoming} incoming / ${props.railConnections.outgoing} outgoing`}
                    />
                }
                {props.shipConnections &&
                    <img
                        src={ShipIcon}
                        alt="Ships"
                        className="map-card-connection-icon"
                        title={`Ships: ${props.shipConnections.incoming} incoming / ${props.shipConnections.outgoing} outgoing`}
                    />
                }
                {props.planeConnections &&

                    <img
                        src={PlaneIcon}
                        alt="Planes"
                        className="map-card-connection-icon"
                        title={`Planes: ${props.planeConnections.incoming} incoming / ${props.planeConnections.outgoing} outgoing`}
                    />
                }
            </div>
            <div className="map-stats-wrapper">
                <MapStatBar statType={'oil'} percentage={props.resources.oil} hidePercentages/>
                <MapStatBar statType={'ore'} percentage={props.resources.ore} hidePercentages/>
                <MapStatBar statType={'fertileLand'} percentage={props.resources.fertile_land} hidePercentages/>
                <MapStatBar statType={'forestry'} percentage={props.resources.forestry} hidePercentages/>
                <MapStatBar statType={'water'} percentage={props.resources.water} hidePercentages/>
            </div>
            <span className="map-card-note">Click anywhere for more details</span>
        </article>
    )
}

export default MapCard