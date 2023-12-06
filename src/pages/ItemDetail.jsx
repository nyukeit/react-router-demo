import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton.jsx";

export default function ItemDetail({items}) {
  console.log(items);
  const { id } = useParams();

  const item = items.find(item => item.id === Number(id));
  
  return (
    <>
        <div>
          <p>{ item.id }</p>
          <h3>{ item.name }</h3>
          <p>{ item.description }</p>
          <p>{ item.price }</p>
        </div>
        <HomeButton />
      </>
  )
}