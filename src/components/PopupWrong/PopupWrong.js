import Wrong from "~/assets/wrong.png";
import "./PopupWrong.scss";

function PopupWrong(props) {
    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <img src={Wrong} />
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
