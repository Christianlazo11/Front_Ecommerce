import { BannerCard } from "./BannerCard";
import { Advertising } from "../../helpers/Advertising";

export const BannerAdvertising = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap justify-between my-10">
        {
            Advertising.map((e, index) => (
                <BannerCard key={index} title = {e.title} text = {e.text} />
            ))
        }
    </div>
  )
}
