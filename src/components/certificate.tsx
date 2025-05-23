import { CardImg, CardTitle, Card, CertificateDownload, CertificateContainer, CertificateDownloaDiv} from "./certificate";


export default function CertificateCard(){
  const PdfDownload = () => {
  try {
    const link = document.createElement('a');
    link.href = '/src/assets/testecertificado.pdf';
    link.download = 'testecertificado.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Erro ao baixar:', error);
    alert('O download falhou. Tente novamente mais tarde.');
  }
};
    return (
            <CertificateContainer>
              <Card>

                    <CardImg src="https://s2.glbimg.com/zUts5MVhT_bzQdhyTj9YYZNSZGo=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/n/a/GuYYalSPmFyKGY9BZ1Ww/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg"></CardImg>

                    <CardTitle>Programação em Java Orientada a Objetos</CardTitle>

            
                </Card>
                <CertificateDownloaDiv>
                 <CertificateDownload onClick={PdfDownload}>Baixar Certificado</CertificateDownload>
                 </CertificateDownloaDiv>

               </CertificateContainer>
           

      
        
    )
}