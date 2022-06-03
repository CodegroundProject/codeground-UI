import { Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { RoomContext } from "../../contexts/RoomContext";
import "../styles/WaitingRoom.css";
import { Link } from "react-router-dom";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Button from "@mui/material/Button";
import { socketConnect } from "socket.io-react";
import { useHistory } from "react-router-dom";

export const WaitingRoom = ({ socket }) => {
	const { room } = useContext(RoomContext);

	const handleStartRoom = () => {};

	const [usersList, setUsersList] = useState([]);
	let history = useHistory();

	useEffect(() => {
		socket.emit("join", { user_id: "userid1", room_id: room });
		return () => {};
	}, []);

	useEffect(() => {
		socket?.on("user joined", (data) => {
			// This event is triggered when someone else joins the room that you're in, we'll need this for the real-time waiting room
			console.log("one new user joined");
			console.log(data);
			setUsersList((prevUsersList) => setUsersList([...prevUsersList, data]));
		});

		socket?.on("user left", (data) => {
			// Same thing as the previous one but for user departure
			console.log("one user left");
			console.log(data);
			setUsersList((prevUsersList) => {
				const users = usersList.filter((user) => user !== data);
				setUsersList(users);
			});
		});
		return () => {
			socket?.removeListener("user joined");
			socket?.removeListener("user left");
		};
	}, [socket]);

	const quitRoom = () => {
		socket.emit("leave", { user_id: "userid1", room_id: room });
		history.push("/");
	};

	return (
		<>
			<nav className="nav-bar">
				<div className="logo">
					<img src="/logo192.png" alt="codeground logo" />
					<h2>Code Ground</h2>
				</div>
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">Profile</Link>
					</li>
					<li>
						<Button variant="contained" onClick={quitRoom}>
							Quit Room
						</Button>
					</li>
				</ul>
			</nav>
			<Container className="waiting">
				<div className="coding">
					<img src="/images/coding.webp" alt="" />
				</div>
				<div className="loading">
					<h2>Wait for the other coders to begin the challenge...</h2>
					<HourglassTopIcon className="icon" />
				</div>
				<div className="waiting-box">
					<section className="room-details">
						<h3>ROOM DESCRIPTION</h3>
						<h3>ID: #{room?.room_id}</h3>
						<h4>Created Id: {room?.creator_id}</h4>
						<h4>
							Category: {room?.category_id} / {room?.strategy}
						</h4>
						<div className="desc"></div>
					</section>
					<section className="participants">
						<List sx={{ width: "100%", bgcolor: "background.paper" }}>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<ImageIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="You" secondary={""} />
							</ListItem>
							{usersList &&
								usersList.map((user) => (
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<ImageIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary="Coder_X" secondary={user} />
									</ListItem>
								))}
						</List>
					</section>
				</div>
				<div className="start-room">
					<Button variant="contained" onClick={() => handleStartRoom()}>
						Begin the challenge
					</Button>
				</div>
			</Container>
		</>
	);
};

export default socketConnect(WaitingRoom);
