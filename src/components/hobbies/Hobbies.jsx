import { FitnessCenter, SportsCricket } from "@material-ui/icons";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './hobbies.scss';
export default function Hobbies() {
    return (
        <div className="hobbies">
            <div className="container">
                <div className="hobby">
                    <SportsCricket className="icon"/>
                    <h3>Cricket</h3>
                </div>
                <div className="hobby">
                    <FitnessCenter className="icon"/>
                    <h3>Gym</h3>
                </div>
                <div className="hobby">
                    <TravelExploreIcon className="icon"/>
                    <h3>Travelling</h3>
                </div>
            </div>
        </div>
    )
}
