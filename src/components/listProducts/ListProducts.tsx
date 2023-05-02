import { List, Typography } from "@mui/material";
import ItemProducts from "../itemProducts";
import { Colors } from "../../styles";

interface Product {
  id: number;
  image: string;
  text: string;
  price: string;
  description: string;
  category: string
}

interface Props {
  products: Product[];
}

export default function ListProducts({ products }: Props) {

  return (
    <List
      sx={{
        display: "flex",
        flexWrap: "wrap",
        borderLeft: "1px dotted grey",
        borderTop: "1px dotted grey",
        padding: "20px",
      }}
    >
      {products.map(({ image, text, price, id }) => (
        <ItemProducts key={id} image={image} price={price} text={text}  />
      ))}
    </List>
  );
};