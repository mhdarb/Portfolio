import man from "../../assets/man.png";
import './aboutMe.scss';
export default function aboutMe() {
    return (
        <div className="aboutMe">
            <div className="aboutMeContainer">
                <img src={man} alt="" />
                <p>I am a simple, humble and practicing muslim belonging from a middle class family that holds Islamic mindset and values.
                    Alhamdulillah I have the abilty to distinguish between right and wrong as per Islamic laws.<br/>
                        As a person I am sincere and hardworking in achieving my life goals (All Praise due to Allah SWT).
                    I am social and actively participates in having a cheerful conversation with people.<br/>
                        I refrain from materialism and try my best in keeping myself away from following non Islamic norms and trends followed in
                    the society in the times of increasing fitnah. I try to stick with the principle of following the ' Sunnah
                    Not the Society '.<br/>
                        No one is perfect and so I am. I too have many weaknesses but I am keen on improving myself each day and live a 
                    purposeful life.
                </p>
            </div>
        </div>
    )
}
