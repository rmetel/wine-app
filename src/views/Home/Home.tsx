import { WineCard } from "~/components";
import { items } from "~/data/wine";

export const Home: React.FC = () => {
  return (
    <div className="row mt-5">
      {items.map((item) => (
        <div key={item.id} className="col-sm-3 col-lg-3">
          <WineCard item={item} />
        </div>
      ))}
    </div>
  );
};
