import { CardImg, CardTitle, Card, Cardlink} from "./coursecard";


interface CourseCardProps {
  name: string;
  description: string;
  youtubeLink: string;
  companyName: string;
}

export default function CourseCard({ name, description, youtubeLink, companyName }: CourseCardProps) {
  return (
    <Cardlink to="/coursePage">
      <Card>
        <CardImg
          src={youtubeLink}
          alt={name}
        />
        <CardTitle>{name}</CardTitle>
        <p>{description}</p>
        <p>Empresa: {companyName}</p>
      </Card>
    </Cardlink>
  );
}