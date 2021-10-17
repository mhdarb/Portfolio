import { SportsCricket } from "@material-ui/icons";
import './hobbies.scss';
export default function Hobbies() {
    return (
        <div className="hobbies">
            <div className="container">
                <div className="hobby">
                    <SportsCricket className="icon"/>
                    <h3>Cricket</h3>
                </div>
            </div>
        </div>
    )
}
