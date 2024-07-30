import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout title="Journal">
      <NothingSelectedView />
      <IconButton
        color="primary"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          position: "fixed",
          bottom: 50,
          right: 50,
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.8,
          },
        }}
      >
        <AddOutlined sx={{ color: "white", fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
