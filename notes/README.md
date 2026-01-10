# Computer Science Student | Software Developer Portfolio

Welcome to my portfolio! This repository showcases my skills, projects, and experiences in the field of Computer Science.

## Goals
To secure an internship or entry-level position to gain practical experience in software engineering, computer sciences and or related fields. 

To build a professional network within the Software Engineering, IT and Computer Sciences industry by connecting with colleagues, mentors, and other professionals in the field. 

## Resume/CV <a name="resume"></a>

- [Curriculum Vitae Of Peter Malope](<CV/CURRICULUM VITAE OF PETER MALOPE.pdf>)

## Projects <a name="projects"></a>

- Project 1: Pulse Web App
  - Description: 
    > emotional regulator app, this web app is able to read a user's pulse rate and determine their emotion/ mood then display to the user that information
    
    An external device(Pulse detector Device) programmed using Arduino.

    > Technologies used: xampp, HTML, php, Bootstrap 5.3.3, MySQL
  - Repository Link: [Pulse App GitHub Repo](igris-marvin_pulse_app_repo.html)

- Project 2: Sani-Enterprise Web App
  - Description: 
    > E-commerce Catalog website for selling Furniture
    > Technologies used: Java, MariaDB, Spring Boot 3 Framework, Thymeleaf, HTML, Bootstrap 5.3.3, Tomcat Web Server
  - Repository Link: [Sani-Enterprise GitHub Repo](https://github.com/igris-marvin/INTERNET-PROJECT-2024)

## Code Samples <a name="code-samples"></a>

- Spring Boot 3 -> Sani-Enterprise Web App Code Sample

```java

@Controller
@RequestMapping("/")
public class HomeController {

  @GetMapping
  public String getHome(
    Model model
  ) {
    String hello = "Hello World!";

    model.setAttribute("hello", hello);

    return "index";
  }

}

```

 - PHP -> Pulse App Code Sample

```php

$file_path = 'C:\Users\Public\Documents\bpm.txt';

if (file_exists($file_path)) {

    $file_content = file_get_contents($file_path);

    $array = explode("\n", $file_content);

    foreach($array as &$pulse_rate) {
    ...
    }
}

```

## Skills, Tools and Technologies <a name="skills-and-technologies"></a>

- Programming Languages: 
  - Java, Kotin
- Web Technologies 
  - HTML, CSS, php, JavaScript, Thymeleaf, JSP
- Frameworks/Libraries: 
  - Spring Boot 3, Java Enterprise Edition (JEE)
- Databases: 
  - MySQL, MariaDB, OracleDB, Derby
- Other: 
  - Git, GitHub

- Tools
  - VScode, Android Studio, NetBeans, IntelliJ, DBeaver, GitBash

## Contact Information <a name="contact-information"></a>

- Primary Email: malopepeter@yahoo.com
- Secondary Email: marvenmalope2003@gmail.com
- Phone Number: +27 68 293 8418
- LinkedIn: [Peter Malope LinkedIn](linkedin.com/in/peter-malope-a578242bb/)
- GitHub: [Peter Malope GitHub Profile](https://github.com/igris-marvin)

Feel free to explore the repository and reach out to me if you have any questions or opportunities for collaboration!