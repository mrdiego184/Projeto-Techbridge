import {
  MyCourse,
  MyCourseimg,
  MyCoursetext,
  MyCoursetitle,
  MyCousepercentage,
  MyCourseContinue,
  MyCourseAcess,
  MyCourseButtons,
  LinksButton
} from "./mycourse";

interface StudentMyCourseProps {
  name: string;
  description: string;
  percentage?: number;
}

export default function StudentMyCourse({ name, description, percentage = 0 }: StudentMyCourseProps) {
  return (
    <MyCourse>
      <MyCourseimg src="https://s2.glbimg.com/zUts5MVhT_bzQdhyTj9YYZNSZGo=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/n/a/GuYYalSPmFyKGY9BZ1Ww/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg" />

      <MyCoursetext>
        <MyCoursetitle>{name}</MyCoursetitle>
        <MyCousepercentage>{percentage}% Concluído</MyCousepercentage>
        <p>{description}</p>
        <MyCourseButtons>
          <LinksButton to="/studyPage">
            <MyCourseContinue>Continuar</MyCourseContinue>
          </LinksButton>

          <MyCourseAcess>Acessar conteúdo</MyCourseAcess>
        </MyCourseButtons>
      </MyCoursetext>
    </MyCourse>
  );
}
