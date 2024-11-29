/* eslint-disable react/prop-types */
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./styles.css";

export const NewProductModal = ({
  setOpen,
  open,
  setNewproducts,
  newproducts,
}) => {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [categoria, setCategoria] = useState();

  const handleClose = () => setOpen(false);
  const handleGuardar = () => {
    setId(id + 1);
    setNewproducts([
      ...newproducts,
      {
        id,
        nombre,
        precio,
        categoria,
      },
    ]);

    setOpen(false);
    setNombre("");
    setPrecio("");
    setCategoria("");
  };
  return (
    <Modal open={open}>
      <Box className="Modal1">
        <Typography variant="h6" component="h2">
          Agregar un nuevo producto
        </Typography>
        <TextField
          fullWidth
          label="Nombre"
          variant="standard"
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          fullWidth
          label="Precio"
          variant="standard"
          onChange={(e) => setPrecio(e.target.value)}
        />
        <TextField
          fullWidth
          label="Categoria"
          variant="standard"
          onChange={(e) => setCategoria(e.target.value)}
        />
        <div className="button-container">
          <Button
            variant="contained"
            color="success"
            onClick={handleGuardar}
            disabled={!nombre || !precio || !categoria}
          >
            Guardar
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
