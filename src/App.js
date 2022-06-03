import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Challenge from "./Challenge";
import Home from "./components/home/Home";
import WaitingRoom from "./components/WaitingRoom/WaitingRoom";

import { SocketProvider } from "socket.io-react";
import io from "socket.io-client";
import { RoomContext } from "./contexts/RoomContext"

function App() {


    let socket = io.connect("http://localhost:4001");


    const CHALLENGE_ID = "6296111caddbcacad40a61b1";

    const [description, setDescription] = useState("Nunc eget sem metus. Curabitur consequat ultrices enim, venenatis egestas purus vulputate nec. Sed eget ipsum mauris. Fusce eu pulvinar nulla. Nunc lacinia, elit et imperdiet hendrerit, ipsum orci pellentesque urna, vel pharetra purus neque eget nunc. Quisque suscipit libero in bibendum dignissim. Nulla ornare eros eu metus fermentum interdum. Etiam tincidunt, ante quis porta volutpat, magna orci finibus nisi, eu vestibulum eros sapien eu purus. Integer at luctus dolor. Vestibulum lacus metus, interdum a pellentesque quis, consequat eu odio. Vivamus ac augue et velit elementum tincidunt nec quis enim. Proin quam velit, mollis sed scelerisque feugiat, luctus vel enim. Maecenas in pretium sapien. Maecenas aliquet accumsan est, eu blandit erat aliquam eu.\n");


    const [language, setLanguage] = useState("javascript")

    function handleEditorChange(value, event) {
        // here is the current value
    }

    function handleEditorDidMount(editor, monaco) {
        console.log("onMount: the editor instance:", editor);
        console.log("onMount: the monaco instance:", monaco)
    }

    function handleEditorWillMount(monaco) {
        console.log("beforeMount: the monaco instance:", monaco);
    }

    function handleEditorValidation(markers) {
        // model markers
        // markers.forEach(marker => console.log('onValidate:', marker.message));
    }

    const columns = [
        {
            title: "Rank",
            field: "rank",
            render: (rowData) => (
                <div className="d-flex align-items-center">
                    {rowData.rank}
                </div>
            ),
        },
        {
            title: "User",
            field: "user",
            render: (rowData) => (
                <div className="d-flex align-items-center">
                    {rowData.user}
                </div>
            ),
        },
        {
            title: "Actual Score",
            field: "score",
            render: (rowData) => (
                <div className="d-flex align-items-center">
                    {rowData.score}
                </div>
            ),
        },

    ];

    const data = [
        {
            rank: 1,
            user: "Metidji Sid Ahmed",
            score: 13234
        },
        {
            rank: 2,
            user: "Dhiaa",
            score: 12451
        }
    ];

    const [room, setRoom] = useState(null);
    return (
        <SocketProvider socket={socket}>
            <RoomContext.Provider value={{ room, setRoom }}>
                <React.Fragment>
                    <Switch>
                        <Route exact path={"/challenge/:chellengeId"} component={() => <Challenge />} />
                        <Route exact path={"/"} component={() => <Home />} />
                        <Route exact path="/waiting/:room_id"
                            component={() => <WaitingRoom />} />
                    </Switch>
                </React.Fragment></RoomContext.Provider>
        </SocketProvider>
    );
}

export default App;
