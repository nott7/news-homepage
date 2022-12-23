import Photo from "./Main/Image.jsx";
import Info from "./Main/Info.jsx";
import MainTopic from "./Main/MainTopic.jsx";
import Card from "./Main/Card.jsx";
import FirstImage from "../assets/images/image-retro-pcs.jpg";
import SecondImage from "../assets/images/image-top-laptops.jpg";
import ThirdImage from "../assets/images/image-gaming-growth.jpg";

export default function Main() {
  return (
    <main>
      <div className="main__content">
        <Photo />
        <MainTopic />
        <Info />
        <Card
          image={FirstImage}
          number="01"
          title="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        />
        <Card
          image={SecondImage}
          number="02"
          title="Top 10 Laptops of 2022"
          text="Our best picks for various needs and budgets."
        />
        <Card
          image={ThirdImage}
          number="03"
          title="The Growth of Gaming"
          text="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </main>
  );
}
