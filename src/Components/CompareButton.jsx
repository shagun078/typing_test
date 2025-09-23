import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../Context/AlertContext";
import { auth, db } from "../firebaseConfig";

const CompareButton = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const { theme } = useTheme();
  const { setAlert } = useAlert();
  const navigate = useNavigate();

  const checkUsernameAvailability = async () => {
    const ref = db.collection("usernames");
    const response = await ref.doc(username).get();
    return response.exists;
  };

const handleSubmit = async () => {
  const currentUser = auth.currentUser;
  if (!currentUser) return;

  // 🔹 get current user's username
  const querySnapshot = await db
    .collection("usernames")
    .where("uid", "==", currentUser.uid)
    .limit(1)
    .get();

  let currentUsername = null;
  if (!querySnapshot.empty) {
    currentUsername = querySnapshot.docs[0].id; // username = doc id
  }

  // 🔹 check against entered username
  if (username === currentUsername) {
    setAlert({
      open: true,
      type: "warning",
      message: "You cannot compare with your own username",
    });
    return;
  }

  // 🔹 now check if entered username exists
  const ref = db.collection("usernames");
  const response = await ref.doc(username).get();

  if (response.exists) {
    navigate(`/compare/${username}`);
  } else {
    setAlert({
      open: true,
      type: "warning",
      message: "invalid username",
    });
  }
};

  const handleClick = () => {
    if (auth.currentUser) {
      setOpen(true);
    } else {
      setAlert({
        open: true,
        type: "warning",
        message: "login to use compare",
      });
    }
  };

  return (
    <div>
      <div className="compare-btn" onClick={handleClick}>
        COMPARE
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(2px)",
        }}
      >
        <Box
          sx={{
            bgcolor: theme.background,
            p: 3,
            borderRadius: 2,
            boxShadow: 24,
            textAlign: "center",
          }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="Enter Username"
            InputLabelProps={{
              style: { color: theme.title },
            }}
            InputProps={{
              style: { color: theme.title },
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            sx={{
              backgroundColor: theme.title,
              color: theme.background,
              mt: 2,
              ml: 1,
              "&:hover": {
                backgroundColor: theme.title,
                opacity: 0.9,
              },
            }}
            onClick={handleSubmit}
          >
            Compare
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CompareButton;
