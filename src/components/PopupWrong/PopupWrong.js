import Error from "~/assets/fail1.jpeg";
import "./PopupWrong.scss";

function PopupWrong(props) {
    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <img src={Error} />
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

export default PopupWrong;
