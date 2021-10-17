import girl from '../../assets/girl.png';
import './lookingFor.scss';

export default function LookingFor() {
    return (
        <div className="lookingFor" id="lookingFor">
            <h1>Looking For</h1>
            <div className="container">
                <div className="left">
                    <div className="bg">
                        <img src={girl} alt="" />
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li>A simple practicing muslim girl with Islamic mindset</li>
                        <li>Younger than me</li>
                        <li>Good looking</li>
                        <li>Decent Education background</li>
                        <li>Currently graduating or graduated this year</li>
                        <li>Not Working</li>
                    </ul>                  
                </div>
            </div>
        </div>
    )
}
