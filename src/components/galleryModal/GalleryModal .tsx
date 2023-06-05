import { Box, Modal } from "@mui/material";
interface ModalProps {
  open: boolean;
  handleClose: () => void;
  selectedImage: string;
}
export default function GalleryModal({
  open,
  handleClose,
  selectedImage,
}: ModalProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
        }}
      >
        <img
          src={selectedImage}
          alt="modal "
          loading="lazy"
          style={{
            objectFit: "contain",
            width: "80%",
            borderRadius: "2%",
          }}
        />
      </Box>
    </Modal>
  );
}
