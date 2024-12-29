import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const cardData = [
  {
    title: "Total Project",
    value: "6,784",
    percentage: "10%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$150 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
    badgeUrl: "/assets/card1-badge.svg",
  },
  {
    title: "In Progress",
    value: "1,234",
    percentage: "5%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$50 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
    badgeUrl: "/assets/card2-badge.svg",
  },
  {
    title: "Finished",
    value: "4,567",
    percentage: "15%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$200 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
    badgeUrl: "/assets/card3-badge.svg",
  },
  {
    title: "Unfinished",
    value: "983",
    percentage: "+2%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$30 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
    badgeUrl: "/assets/card4-badge.svg",
  },
];

const StateCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <Card key={index} className="cursor-pointer shadow hover:shadow-lg">
          <CardBody>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{card.title}</span>
                <Image src={card.badgeUrl} alt={""} width={28} height={28} />
              </div>
              <h3 className="text-2xl font-bold">{card.value}</h3>
              <div className="flex items-center gap-1">
                <div className={`flex items-center ${card.percentageColor}`}>
                  <span>{card.percentage}</span>
                  {card.icon}
                </div>
                <span className="text-sm text-gray-500">
                  {card.dailyChange}
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default StateCards;
