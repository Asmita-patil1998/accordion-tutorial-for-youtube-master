import React from "react";
import { Accordion,Card ,Button} from 'react-bootstrap';
class CourseModules extends React.Component {
  render() {
    return (
        <div>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-sm-12">
                        <h3><b>PG DAC</b></h3>
                        <h2>DAC modules</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <b>OPERATING SYSTEMS CONCEPTS</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> inux Commands, Vi editor, Shell Scripting, Overview of OS, Processes, Scheduling & Synchronization, Memory
2          management, File Systems, Case Study with Linux System Programming: Process, Signals, Semaphores & Mutex,
          Inter – Process Communication, POSIX Threads</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
     <b> OOPS WITH C++ PROGRAMMING </b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Revision of C Programming, Pointers, Functions (Call by value and reference), Recursion, Arrays using
          Pointers, Structures, Union, Enumeration and Typedef, File handling, Discussion on Object oriented
          concepts:Classes and Objects, Access Specifiers, Overloading, Inheritance, Polymorphism, Beginning with
          C++,C++ Tokens, Initialization, C++ Operators, Static Members, Constant Members, Expressions, Control
          Structure, Functions in C++,Constructors, Encapsulating into an object, Destructors, Associations, Inner
          Classes, Memory Management and pointers, Inheritance, Virtual Functions, Polymorphism, Interfaces,Exception
          Handling, Managing Console I/O operations, Working with files,Advance Topics in C++ :Object Design and
          Templates,STL (Standard Type Libraries), RTTI (Run Time Type Identification), Advanced Typecasting, new data
          types,new operators, class implementation, namespace scope,operator keywords, new headers, C++ Containers.</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      <b>ALGORITHM & DATA STRUCTURES</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body> Define the problem, Identify the problem, Introduction to Problem Solving, Problem solving basics, Defining
          creativity v/s innovation, Find Creative Solutions using creativity tools Effective problem solving
          approaches, Critical thinking and information analysis, Brainstorming, Reverse Brainstorming, Imagineering,
          Mind Mapping, Six Thinking Hats: A Tool to Strengthen Critical Thinking, Collaboration
         <br></br>
          <b>Evaluate and Select solution :</b>Pro’s and Con’s, Force field analysis, Feasibility/Capability Analysis,
          Decision analysis, evaluating problems, Choosing among alternatives, Qualitative analysis, discussing
          qualitative analysis techniques, Establishing objectives <br></br>
          <b>Algorithm & Data Structures:</b> Introductory Concepts, Algorithm Constructs, OO design: Abstract Data
          Types (ADTs) <br></br>
          <b>Basic Data Structures:</b> Arrays, Stacks, Queues, Linked lists
          Introduction to trees, Abstract trees, Tree traversals, Binary trees, Search trees, AVL trees
          Searching & sorting algorithms: Objectives of Searching, The Sequential Search, The Binary Search,
          Introduction to sorting, Insertion sort, Bubble sort, Heap sort, Merge sort, Quick sort <br></br>
          <b>Graph algorithms:</b>Introduction to graph theory, Graph data structures, Graph traversals <br></br>
          <b>Algorithm design:</b> Greedy algorithms, Divide-and-conquer algorithms, Dynamic programming, Backtracking
          algorithms, Branch-and-bound algorithms, Application of Data structures</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      <b>SOFTWARE APPLICATION DEVELOPMENT
            TOOLS & TECHNIQUES</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body> Object Oriented Analysis and Design, UML, Software Engineering, Brief concept of Software Life Cycle Models,
          Agile Techniques for software development :Agile Principle and Mindset, Value-Driven Delivery,Stakeholder
          Engagement, Team Performance, Adaptive Planning, Problem Detection And Resolution, Continuous Improvement,
          Brief of Tools and technologies, Software Development Tools & Techniques, Software Quality Assurance,
          Introduction to Coding Standards, Software Testing, Different Testing Tools, Test Driven Development (TDD),
          Project Management, Risk Analysis and Management, Case Study</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
      <b>ADVANCED WEB PROGRAMMING</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>  <b> HTML 5: </b>Elements, Objects, Events , Canvas, Audio & Video Support, Geo- location Support <br></br> <b>
              CSS: </b>Styling HTML with CSS, Inline Styling (Inline CSS), External Styling (External CSS), CSS Fonts,
            The CSS Box Model, The id Attribute, The class Attribute, HTML Style Tags <br></br> <b>PHP: </b>Introduction to
            PHP, Working with arrays, Functions,Forms, Handling date and Times,Working with Files, Session and state
            management, Database operations from PHP. <br></br> <b>XML & Web Security :</b> <br></br>
            <b> XML: </b>Introduction to XML, XML Validation, Reason for XML, XML Tree Structure, XML DOM, XML DTD, XML
            Schema, XML style language, XML and XSLT, XML Parsing, XML parsers (DOM & SAX), XML WSDL, RSS Feed.
            <br></br> <b>Web Security: </b>
            SQL Injection, Cross-Site Scripting (XSS), Security standards (OWASP) <br></br>
            <b> AJAX:</b> Introduction to Ajax, Web services and Ajax, Ajax using HTML, CSS, JavaScript, Ajax Framework
            and DOM, XMLHttpRequest, Ajax Architecture, <br></br> <b>JSON: </b> Introduction, Need of JSON, JSON Syntax
            Rules, JSON Data - a Name and a Value, JSON Objects, JSON Arrays, JSON Uses JavaScript Syntax, JSON Files,
            JSON & Security Concerns. <br></br>
            <b>Responsive Web Design:</b> Introduction, The Best Experience for All Users:Desktop, Tablet Mobile <br></br>
            <b>Bootstrap : </b> Overview of Bootstrap, Need to use Bootstrap, Bootstrap Grid System, Grid Classes, Basic
            Structure of a Bootstrap Grid, Typography,Tables, Images, Jumbotron, Wells, Alerts, Buttons.</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
      <b>JAVASCRIPT FRAMEWORK</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body> Introduction to JavaScript Variable, statements, Operators, Comments, constructs, Functions,
            expressionsJavascript consoleScope, Events, Strings, String Methods, Numbers, Number Methods, Dates, Date
            Formats, Date MethodsArrays, Array Methods Object Oriented Programming: Method, Constructor, Inheritance,
            Encapsulation, Abstraction, Polymorphism, Javascript Validations,Document Object Model, Document and Events
            (DOM Manipulation), Security in Java Script Jquery: Basics of jQuery, jquery selection and events, jQuery
            Effects, jquery traversal and manipulation,Data attributes and templates, jQuery Plugins, Jquery / Google
            Web Toolkit. Node.js: Introduction to Node.js,Node modules, Developing node.js web application, Event-driven
            I/O server-side JavaScript, Express: Introduction to Express,First Express Application, Application, Request
            and Response Objects, Implementing MVC Pattern, Express application configuration, Rendering Views.
            AngularJS: Introduction to AngularJS, Structuring AngularJS application, MVC in AngularJS, AngularJS
            routing, AngularJS services, Testing Web Applications: Introduction to JavaScript Testing, Testing Express
            Applications, Testing AngularJS Applications</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="6">
      <b>DATABASE TECHNOLOGIES</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="6">
      <Card.Body> Database Concepts: Client/Server Computing, RDBMS Technologies, Codd’s Rules, Data Models, Normalization
            Techniques, ER Diagrams, SQL : Overview of OORD,Introduction SQL*Plus,DDL, DML and DCL,Tables, Indexes and
            Views, Clusters, Sequences and Snapshots, Cursors, Stored Procedures, Triggers, Packages, Introduction to No
            SQL, MongoDB (Virtual DB)</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="7">
      <b>JAVA TECHNOLOGIES-I( CORE JAVA)</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="7">
      <Card.Body>  Data Types, Operators and Language, Constructs, Inner Classes and Inheritance, Interface and Package,
            Exceptions, Collections, Threads, Java.lang, Java.util, Java.awt, Java.io , Java Persistent, Servlets, Java
            Virtual Machine</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="8">
      <b>JAVA TECHNOLOGIES-II( WEB BASED JAVA)</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="8">
      <Card.Body> Java Server Pages, JDBC, JavaBeans, Java Security,Naming Services,Java Annotations, Java Mail, Java
            Messaging Services, Transactions, Apache maven, Introduction to Struts Framework, Introduction to hibernate,
            HQL, Hibernate, Spring Framework, Hands on Web services – JSON/XML/oData (data format conversation)</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="9">
      <b>MICROSOFT.NET TECHNOLOGIES</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="9">
      <Card.Body> Introduction to NET 4.5 Frameworks: Application Domain, Language Interoperability,.NET Framework Class
            Library, Assemblies, Introduction of Windows Presentation Foundation, Introduction of Windows Communication
            Foundation. C# .NET 4.5: Need of C#,Operators,Namespaces & Assemblies,Arrays,Preprocessors,Delegates and
            Events,Boxing and Unboxing,Regular Expression,Collections ,Exceptions Handling,Introduction to win forms.
            ASP .NET 4.5: Building .NET components, ADO.NET 4.5, Querying with LINQ,Custom Control,Master Pages, Themes
            and skins, Introduction to Web Services, MS.NET MVC Framework,Enterprise Services, Personalization and
            Localization, Deployment </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="10">
      <b>APPLICATION SECURITY & TESTING</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="10">
      <Card.Body> Web Application Security challenges, Advanced Web application attacks and remedy, Secure Software
            Development Life Cycle (SDLC), Web server security, Security standards (OWASP), Ways to strengthen web
            application security, Database testing: SQL Injection, Security testing, Performance testing</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="11">
      <b>UPCOMING TECHNOLOGY (PARALLEL COMPUTING)</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="11">
      <Card.Body> Architecture for software,What is a thread, Strategies of Multi-Threading,Task/Data Parallelism, OpenMP,
            OpenMP Programming Model, OpenMP constructs</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="12">
      <b>EFFECTIVE COMMUNICATION</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="12">
      <Card.Body> </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="13">
      <b>APTITUDE & GENERAL ENGLISH</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="13">
      <Card.Body> </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="14">
      <b>PROJECT</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="14">
      <Card.Body> </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


</div>
</div>
</div>
</div>
        )
    };
}

export default CourseModules;