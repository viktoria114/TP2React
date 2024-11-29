import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Toolbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { mockData } from "../../utils/mockData";
import { NewProductModal } from "../NewProductModal/NewProductModal";

import "./styles.css";

export const DataTable = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [newproducts, setNewproducts] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProduct(mockData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div className="contenedor-principal">
        <h1>Lista de Productos</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#9067c6" }}>
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Nombre</TableCell>
                  <TableCell sx={{ color: "white" }}>Precio</TableCell>
                  <TableCell sx={{ color: "white" }}>Categoría</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.nombre}</TableCell>
                    <TableCell>${product.precio}</TableCell>
                    <TableCell>{product.categoria}</TableCell>
                  </TableRow>
                ))}

                {newproducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.nombre}</TableCell>
                    <TableCell>${product.precio}</TableCell>
                    <TableCell>{product.categoria}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="contenedor-boton">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#9067c6" }}
          onClick={handleOpen}
        >
          <AddIcon />
          Agregar Producto
        </Button>
        <NewProductModal
          setOpen={setOpen}
          open={open}
          setNewproducts={setNewproducts}
          newproducts={newproducts}
        />
      </div>
    </Box>
  );
};
