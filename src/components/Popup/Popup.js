import Tick from "~/assets/tick.png";
import "./Popup.scss";
import { useNavigate } from "react-router-dom";

function Popup(props) {
    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        props.setTrigger(false);
        navigate("/");
    };
    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <img src={Tick} />
                {props.children}
                <button className="close-btn" onClick={handleNavigateLogin}>
                    OK
                </button>
            </div>
        </div>
    ) : (
        ""
    );
}

export default Popup;
