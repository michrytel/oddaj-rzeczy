import Title from "../atoms/Title";
import Steps from "../organisms/Steps";
import Btn from "../atoms/Btn";

const HomeSteps = () => {
    return (
        <div className="steps__container" name="firstSteps">
            <Title mainText="4 Simple steps are enough"/>
            <div className="steps__box">
                <Steps/>
            </div>
            <Btn to="/login" text='Give things'/>
        </div>

    )
}

export default HomeSteps