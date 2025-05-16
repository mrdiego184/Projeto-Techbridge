import {MyCourse, MyCourseimg, MyCoursetext, MyCoursetitle, MyCousepercentage, MyCourseContinue, MyCourseAcess, MyCourseButtons,LinksButton} from "./mycourse"
export default function StudentMyCourse (){

    return (
        
        <MyCourse>
        
                        <MyCourseimg src="https://s2.glbimg.com/zUts5MVhT_bzQdhyTj9YYZNSZGo=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/n/a/GuYYalSPmFyKGY9BZ1Ww/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg"/>
        
                        <MyCoursetext>
                            <MyCoursetitle>Java Orientada a Objetos - 40 horas</MyCoursetitle>
                            <MyCousepercentage>20% Concluído</MyCousepercentage>

                            <MyCourseButtons>
   
                            <LinksButton to="/studyPage"> <MyCourseContinue>Continuar</MyCourseContinue> </LinksButton>
                            
                            <MyCourseAcess>Acessar conteúdo</MyCourseAcess>
                            </MyCourseButtons>

                        </MyCoursetext>
        
                    </MyCourse>         
    )
}