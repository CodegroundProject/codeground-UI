import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";
import MaterialTable, { MTableToolbar } from "material-table";

import {
    tableLang,
    tableIcons
} from "./Widget";
import {Button, TextField} from "@mui/material";
import {PlayArrow} from "@material-ui/icons";
import {Autocomplete} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchgetCurrentChallenge, fetchSubmitCode} from "./redux/actions/actions";
import {ROOM_ID} from "./WebSocket/webSocket";
import swal from "sweetalert";

// {challenge_id , user_id , code , language , strategy="OPTIMIZED" , secondsLeft}

function Challenge() {
    let { chellengeId } = useParams();

    const currentChallenge = useSelector(state => state.currentChallenge);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("CHALLENGE ID =", chellengeId);
        dispatch(fetchgetCurrentChallenge(chellengeId));
    }, []);
    // const [description , setDescription]= useState("Nunc eget sem metus. Curabitur consequat ultrices enim, venenatis egestas purus vulputate nec. Sed eget ipsum mauris. Fusce eu pulvinar nulla. Nunc lacinia, elit et imperdiet hendrerit, ipsum orci pellentesque urna, vel pharetra purus neque eget nunc. Quisque suscipit libero in bibendum dignissim. Nulla ornare eros eu metus fermentum interdum. Etiam tincidunt, ante quis porta volutpat, magna orci finibus nisi, eu vestibulum eros sapien eu purus. Integer at luctus dolor. Vestibulum lacus metus, interdum a pellentesque quis, consequat eu odio. Vivamus ac augue et velit elementum tincidunt nec quis enim. Proin quam velit, mollis sed scelerisque feugiat, luctus vel enim. Maecenas in pretium sapien. Maecenas aliquet accumsan est, eu blandit erat aliquam eu.\n") ;



    const [code , setCode]=useState("")

    function handleEditorChange(value, event) {
        setCode(value);
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

    const submitSubmission=()=>{
        dispatch(fetchSubmitCode({challenge_id : chellengeId , room_id : ROOM_ID , code : code , language : currentChallenge?.data?.challenge?.language}))
            .then(()=>{
                swal("SUCCESS !", "You clicked the button!", "success");

            })
            .catch(errMess=>{
                swal("ERROR!", errMess, "error");

            })
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
                    {rowData.user_id}
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



    if(currentChallenge.loading){
        return <h1>LOADING ....</h1>
    }else if (currentChallenge.error){
        return <h1 style={{color : 'red'}}>{currentChallenge.error}</h1>
    }
    return (
        <div className="d-flex">
            <div className="col-6">
                <div className="d-flex flex-column">
                    <div>TIMER : {currentChallenge?.timer?.hours}:{currentChallenge?.timer?.minutes}:{currentChallenge?.timer?.seconds}</div>
                    <div>LEVEL : {currentChallenge?.data?.challenge?.level} </div>
                    <div className="d-flex flex-column mt-3 mb-3">
                        <h1>Description</h1>
                        <div>
                            {currentChallenge?.data?.challenge?.description}
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-6 display-flex flex-column">
                <div className="d-flex mt-2 mb-2 justify-content-between">
                    <Autocomplete
                        disabled={true}
                        disablePortal
                        options={[{
                            label : currentChallenge?.data?.challenge?.language
                        }
                        ]}
                        value={currentChallenge?.data?.challenge?.language}
                        id="combo-box-demo"
                        // options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Programming Language" />}
                    />
                    <Button onClick={()=>submitSubmission()} style={{backgroundColor : "green" , color : "white"}} startIcon={<PlayArrow style={{color : "white"}}/>} variant="contained">RUN</Button>

                </div>

                <div>
                    <Editor
                        theme="vs-dark"
                        height="50vh"
                        defaultLanguage={"python"}
                        defaultValue="// some comment"
                        onChange={handleEditorChange}
                        onMount={handleEditorDidMount}
                        beforeMount={handleEditorWillMount}
                        onValidate={handleEditorValidation}
                    />
                </div>
                <div style={{height : "50vh" , marginTop : "2rem"}}>
                    <MaterialTable
                        style={{ borderRadius: "25px" }}
                        icons={tableIcons}
                        localization={tableLang}
                        title="LeaderBoard"
                        columns={columns}
                        data={currentChallenge.leaderboard}
                        options={{
                            search: false,
                            actionsColumnIndex: -1,
                            headerStyle: {
                                color: "#9E9E9E",
                                fontFamily: "var(--roboto-font)",
                                fontWeight: 300,
                                fontSize: "1.2rem",
                            },
                            actionsCellStyle: {
                                paddingRight: "3rem",
                            },
                        }}
                    />
                </div>
            </div>

        </div>
    );
}

export default Challenge;
