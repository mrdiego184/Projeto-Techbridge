import {StudySection, ModuleSelector, CourseTitle, TitleHr, ModuleTitle, ModuleDescription, ModuleInfo, EbookDownload, ReturnIcon, ModuleList, ModuleLinks, ModuleVideoClass} from './styles'
import { Download, ArrowLeftCircle, PlayCircle} from 'lucide-react';
import { useState } from 'react';

export default function StudyPage () {

    const [selectedModule, setSelectedModule] = useState(1);

    const modules = [
        {id: 1, title: "Módulo 1 - Fundamentos em POO", description: "Nesse módulo, os fundamentos iniciais juntamente com toda a base de estudo para o curso, vai ser apresentada e haverá um relacionamento entre os conceitos do assunto diretamente com a linguagem Java."},
        {id: 2, title: "Módulo 2 - Java Moderno", description: "Java Moderno representa a evolução da linguagem além dos conceitos tradicionais, incorporando recursos que aumentam produtividade e expressividade. Com a introdução de features como records (para modelagem imutável concisa), sealed classes (controle de hierarquia), pattern matching (simplificação de lógica condicional) e expressões lambda (programação funcional), o Java hoje rivaliza com linguagens mais jovens em agilidade. A JVM continua sendo seu grande trunfo, oferecendo desempenho otimizado com a capacidade de rodar em qualquer plataforma. Versões recentes adotaram ciclos de lançamento semestrais, trazendo melhorias incrementais como virtual threads (Project Loom) para concorrência escalável e APIs modernizadas para HTTP/2 (HttpClient). A interoperabilidade com a nuvem e containers, suporte nativo a JSON (JSON-B) e a simplicidade de frameworks como Quarkus ou Micronaut demonstram como o Java se reinventou para a era cloud-native, mantendo sua robustez empresarial enquanto abraça paradigmas modernos como reativo e serverless.."},
        {id: 3, title: "Módulo 3 - Encapsulamento de variáveis", description: "O encapsulamento de variáveis em Java moderno mantém seu princípio fundamental de proteção de dados, mas ganhou novas abordagens práticas. Através dos modificadores de acesso (private, protected, public), continua garantindo que o estado interno de um objeto só seja modificado por seus próprios métodos, promovendo segurança e integridade. Com os records (introduzidos no Java 16), temos uma forma concisa de criar classes imutáveis onde o encapsulamento é implícito - todos os campos são final e private, com acesso apenas através de métodos acessores gerados automaticamente. Lombok e outras ferramentas modernas simplificam a sintaxe (@Getter, @Setter) sem violar o conceito. Pattern matching (Java 21) facilita a interação com dados encapsulados, enquanto sealed classes (Java 17) permitem controle preciso sobre quais classes podem acessar determinadas hierarquias. O encapsulamento moderno vai além da simples ocultação de dados, integrando-se com streams, optional e imutabilidade para criar designs mais seguros e previsíveis, especialmente em ambientes concorrentes e distribuídos, mantendo a filosofia original de (ocultar detalhes de implementação) mas com menos boilerplate e mais intenção expressiva no código."},
        {id: 4, title: "Módulo 4- Design e Arquitetura", description: "O design e arquitetura em Java moderno evoluíram para equilibrar robustez empresarial com agilidade no desenvolvimento, incorporando padrões adaptados aos novos paradigmas de software. A arquitetura modular (Java Platform Module System - JPMS) introduzida no Java 9 permite um encapsulamento mais forte em nível de sistema, controlando dependências e visibilidade entre componentes. Microsserviços são facilitados por frameworks como Quarkus, Micronaut e Spring Boot, que integram padrões como injeção de dependência e programação reativa de forma nativa na JVM. Arquiteturas hexagonais e clean architecture ganham impulso com a combinação de records, sealed interfaces e pattern matching, permitindo designs de software mais testáveis e desacoplados. A JVM moderna suporta arquiteturas baseadas em eventos com alta performance através de projetos como Loom (virtual threads) e Panama (integração nativa). Cloud-native design é habilitado por ferramentas como GraalVM Native Image para compilação nativa, enquanto a programação funcional (com streams e lambdas) coexiste harmoniosamente com padrões OO tradicionais. O resultado é um ecossistema que preserva a solidez do Java empresarial enquanto abraça a flexibilidade necessária para sistemas distribuídos modernos, com containers, serverless e arquiteturas event-driven, mantendo a JVM como plataforma unificadora."},
        {id: 5, title: "Módulo 5 - Aplicações práticas e projetos interativos", description: "O foco neste módulo é estimular a prática e apresentar alguns exemplos de projetos práticos, auxiliando e beneficiando na prática e compreensão do curso de forma geral."}
    ]

    const PdfDownload = () => {
  try {
    const link = document.createElement('a');
    link.href = '/src/assets/ebookteste.pdf';
    link.download = 'ebookteste.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Erro ao baixar:', error);
    alert('O download falhou. Tente novamente mais tarde.');
  }
};


    return (
        <>
        <StudySection>

            <ModuleInfo>

            <CourseTitle>Java Orientado a Objetos - 40 horas</CourseTitle>

            <TitleHr/>

            <ModuleTitle>{modules[selectedModule-1].title}</ModuleTitle>

            <ModuleDescription>{modules[selectedModule-1].description}
            </ModuleDescription>

            <EbookDownload onClick={PdfDownload}><Download> </Download>EBOOK MÓDULO {modules[selectedModule-1].id}</EbookDownload> 

            <ModuleVideoClass> 
                
                <PlayCircle width={110} height={110}></PlayCircle>

            </ModuleVideoClass> 

            </ModuleInfo>

             <ModuleSelector>
            <ReturnIcon aria-label="Botão para retornar para meus cursos" to="/myCourses"> <ArrowLeftCircle width={200} height={100}></ArrowLeftCircle> </ReturnIcon>

            <ModuleList>
                {modules.map(module => (
              <ModuleLinks
                key={module.id}
                active={module.id === selectedModule}
                onClick={() => setSelectedModule(module.id)}
                >
                {module.title}
                
              </ModuleLinks>
               ))}
            </ModuleList>


            </ModuleSelector>
        
        </StudySection>

        
        </>
    )
}