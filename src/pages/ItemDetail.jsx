import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton.jsx";

export default function ItemDetail() {

  const { id } = useParams();
  return (
    <div>
      <h1>Item Detail - { id }</h1>
      <HomeButton />
    </div>
  )
}