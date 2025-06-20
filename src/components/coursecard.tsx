import { CardImg, CardTitle, Card, Cardlink} from "./coursecard";


interface CourseCardProps {
  id: number;
  name: string;
  description: string;
  youtubeLink: string;
  companyName: string;
}

export default function CourseCard({ id,  name, description, youtubeLink, companyName }: CourseCardProps) {
  return (
    <Cardlink  to={`/coursePage/${id}`}>
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