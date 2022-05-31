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

function App() {

  const [description , setDescription]= useState("Nunc eget sem metus. Curabitur consequat ultrices enim, venenatis egestas purus vulputate nec. Sed eget ipsum mauris. Fusce eu pulvinar nulla. Nunc lacinia, elit et imperdiet hendrerit, ipsum orci pellentesque urna, vel pharetra purus neque eget nunc. Quisque suscipit libero in bibendum dignissim. Nulla ornare eros eu metus fermentum interdum. Etiam tincidunt, ante quis porta volutpat, magna orci finibus nisi, eu vestibulum eros sapien eu purus. Integer at luctus dolor. Vestibulum lacus metus, interdum a pellentesque quis, consequat eu odio. Vivamus ac augue et velit elementum tincidunt nec quis enim. Proin quam velit, mollis sed scelerisque feugiat, luctus vel enim. Maecenas in pretium sapien. Maecenas aliquet accumsan est, eu blandit erat aliquam eu.\n") ;


  const [language , setLanguage]=useState("javascript")

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
            rank : 1,
            user : "Metidji Sid Ahmed",
            score : 13234
        },
        {
            rank : 1,
            user : "Dhiaa",
            score : 12451
        }
    ];


  return (
      <div className="d-flex">
        <div className="col-6">
            <div className="d-flex flex-column">
                <div>LEVEL : Medium </div>
                <div className="d-flex flex-column mt-3 mb-3">
                    <h1>Description</h1>
                    <div>
                        {description}
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
                        label : language
                    }
                    ]}
                    value={language}
                    id="combo-box-demo"
                    // options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Programming Language" />}
                />
                <Button style={{backgroundColor : "green" , color : "white"}} startIcon={<PlayArrow style={{color : "white"}}/>} variant="contained">RUN</Button>

            </div>

            <div>
                <Editor
                    theme="vs-dark"
                    height="50vh"
                    defaultLanguage={language}
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
                    data={data}
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

export default App;
