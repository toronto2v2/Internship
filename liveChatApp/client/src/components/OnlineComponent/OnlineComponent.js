import "./OnlineComponent.css";

const OnlineComponent = ({ online }) => {
    const content = online.map((user) => {
        return (
            <li key={user.id}>
                {user.name} - Room: {user.room}
            </li>
        );
    });

    return (
        <div className="listWrapper">
            <h4 className="online">Online:</h4>
            <ul className="usersOnlineWrapper">{content}</ul>
        </div>
    );
};

export default OnlineComponent;
