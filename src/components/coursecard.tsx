import { CardImg, CardTitle, Card, Cardlink} from "./coursecard";


export default function CourseCard(){
    return (
            <Cardlink to="/coursePage">
              <Card>
                
                    <CardImg src="https://s2.glbimg.com/zUts5MVhT_bzQdhyTj9YYZNSZGo=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/n/a/GuYYalSPmFyKGY9BZ1Ww/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg"></CardImg>

                    <CardTitle>Java Orientada a Objetos - 40 horas</CardTitle>

                </Card>

            </Cardlink>
           

      
        
    )
}