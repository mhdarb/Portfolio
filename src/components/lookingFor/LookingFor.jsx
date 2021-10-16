import girl from '../../assets/girl.png';
import './lookingFor.scss';

export default function LookingFor() {
    return (
        <div className="lookingFor">
            <h1>Looking For</h1>
            <div className="container">
                <div className="left">
                    <img src={girl} alt="" />
                </div>
                <div className="right">
                    <ul>
                        <li>A simple girl with Islamic mindset</li>
                        <li>Younger than me</li>
                        <li>Good looking</li>
                        <li>Decent Education background</li>
                        <li>Currently graduating or have been graduated this year</li>
                    </ul>                  
                </div>
            </div>
        </div>
    )
}
