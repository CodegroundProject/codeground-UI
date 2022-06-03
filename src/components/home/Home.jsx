import React, { useState } from "react"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';


// Import CSS files
import "../styles/home.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const Home = () => {
    let [openJoinRoomFormState, setOpenJoinRoomFormState] = useState(false);
    let [openCreateRoomFormState, setOpenCreateRoomFormState] = useState(false);
    let [category, setCategory] = useState('');
    let [strategy, setStrategy] = useState('');
    let [time, setTime] = useState(0);


    const handleOnJoinRoomClicked = () => {
        setOpenJoinRoomFormState(true)

        // Join room request
    }

    const handleOnCreateRoomClicked = () => {
        setOpenCreateRoomFormState(true)

        // Create room request
    }

    const handleClose = () => {
        setOpenJoinRoomFormState(false)
        setOpenCreateRoomFormState(false)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleStrategyChange = (event) => {
        setStrategy(event.target.value)
    }
    return <div className="home">
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => handleOnJoinRoomClicked()}>Join room</Button>
            <Button variant="contained" onClick={() => handleOnCreateRoomClicked()}>Create room</Button>

        </Stack>

        {/* Join room modal */}
        <Modal
            open={openJoinRoomFormState}
            onClose={handleClose}
            aria-labelledby="modal-modal-join-room"
            aria-describedby="modal-modal-join-room"
        >
            <Box sx={style}>
                <Stack spacing={2} direction="column">
                    <TextField id="join-room-input" label="Join room" variant="outlined" />
                    <Button variant="contained">Join</Button>
                </Stack>

            </Box>
        </Modal>

        {/* Create room modal */}
        <Modal
            open={openCreateRoomFormState}
            onClose={handleClose}
            aria-labelledby="modal-modal-create-room"
            aria-describedby="modal-modal-create-room"
        >
            <Box sx={style}>
                <Stack spacing={2} direction="column">

                    <InputLabel id="select-label-category">Challenge category</InputLabel>
                    <Select
                        labelId="select-label-category"
                        id="select-category"
                        value={category}
                        label="Challenge category"
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value={'graphs'}>Graphs</MenuItem>
                        <MenuItem value={'stacks'}>Stacks</MenuItem>
                        <MenuItem value={'recursion'}>Recursion</MenuItem>
                    </Select>
                    <InputLabel id="select-label-strategy">Room grading strategy</InputLabel>
                    <Select
                        labelId="select-label-strategy"
                        id="select-strategy"
                        value={strategy}
                        label="Room grading strategy"
                        onChange={handleStrategyChange}
                    >
                        <MenuItem value={'fastest'}>Fastest</MenuItem>
                        <MenuItem value={'optimized'}>Most optimized code</MenuItem>
                    </Select>

                    <TextField
                        id="timer-text-field"
                        label="Timer (minutes)"
                        type="number"
                        value={time}
                        onChange={(e) => setTime(parseInt(e.target.value))}
                    />

                    <Button variant="contained">Create</Button>

                </Stack>

            </Box>

        </Modal>
    </div>
}