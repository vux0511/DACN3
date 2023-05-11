import Tick from "~/assets/tick.png";
import "./Popup.scss";

function Popup(props) {
    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <img src={Tick} />
                {props.children}
                <button
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                >
                    OK
                </button>
            </div>
        </div>
    ) : (
        ""
    );
}

export default Popup;
