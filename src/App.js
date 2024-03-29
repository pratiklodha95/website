import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Map from './Components/Map';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
  "main": {
    "name":"Pratik Lodha",
    "occupation":"Entrepreneur | Traveller | Consultant",
    "description":"  ",
    "image":"profilepic.jpeg",
    "bio":"I am an aspriting Entrepreneur with an undergraduate degree from IIT Bombay. I was awarded academic excellence award by the institute. Worked as a Technical Head of Mood Indigo. I have 2 years of consulting experience in PwC US Advisory, and have worked for top US banks, Insurance firms and Real estate asset management firms with onsite strategy delivery and implementation experience. I have a strong academic, quantitative and consulting background.",
    "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
    "email": "pratik.m.lodha@gmail.com",
    "phone": "+91-9619369767",
    "address":{
      "street":"",
      "city":"Mumbai",
      "state":"Maharashtra",
      "zip": "400063"
    },
    "website": "http://www.timbakerdev.com",
    "resumedownload":"Resume_PratikLodha.pdf",
    "social":[
      {
        "name":"facebook",
        "url":"https://www.facebook.com/pratik.lodha.94",
        "className":"fa fa-facebook"
      },
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/pratiklodha/",
        "className":"fa fa-linkedin"
      },
      {
        "name":"instagram",
        "url":"https://www.instagram.com/pratik.lodha/",
        "className":"fa fa-instagram"
      },
      {
        "name":"github",
        "url":"https://github.com/pratiklodha95",
        "className":"fa fa-github"
      }
    ]
  },
  "resume":{
    "skillmessage":"Here you can create a short write-up of your skills to show off to employers",
    "education":[
      {
        "school":"Indian institute of Technology, Bombay",
        "degree":"BTech. Civil Engineering with Computer Science minor",
        "graduated":"April 2007",
        "description":"IIT Bombay is one of the most prestigious college in India in the field of Engineering. I was awarded academic excellence for excpetional performance in academics. In addtion I was actively involved in dancing(InSync), swimming, finearts and swimming. I was awarded department color for holding department rank 3 in the batch of 120 students."
      }
    ],
    "work":[
      {
        "company":"PwC US Advisory",
        "title":"Consultant",
        "years":"July 2017 - Present",
        "description":"Focused on leveraging advanced analytics in the financial services industry to solve business problem. I have extensively worked in the credit cards sector and fraud detection roles in addition to Blockchain, Survey Analysis and Optimization problems."
      },
      {
        "company":"TransUnion",
        "title":"Business Partnership",
        "years":"May 2016 - July 2016",
        "description":"1. Reduced the SOLR name match time by 95% by parallelizing the script on 8 nodes on hadoop environment 2. Implemented logistic regression and Neural Network Analysis on a 4000 feature dataset using Spark  3. Automated the Generating of customised Market Sizing & Insights using Pig on 220 million Dataset in 2hrs  4. Developed Key Performance Indicators to monitor behaviour of DTC customer against bureau."
      }
    ],
    "pors":[
      {
        "company":"Mood Indigo",
        "title":"Technical Head (Core Group Member)",
        "years":"April 2015 - March 2016",
        "description":"I was the part of the core team of 24 students organising the Asia's largest college cultural festival."
      },
      {
        "company":"Civil Department, IIT Bombay",
        "title":"Secretary Civil Engineering Association",
        "years":"May 2014 - July 2015",
        "description":"• Head of the Sophomores of Civil Engineering Department • Ideated and conducted seminars, workshops and work  visits  for the department • Planned and executed informal trips & events  as  icebreakers for students  and develop a sense of  belongingness. •Coordinated  with  the Student Alumni  Relations Cell  to  conduct the batch of  ‘64 Alumni  Reunion"
      }
    ],
    "skills":[
      {
        "name":"Git",
        "level":"60%"
      },
      {
        "name":"Illustrator",
        "level":"55%"
      },
      {
        "name":"ReactJs",
        "level":"50%"
      },
      {
        "name":"CSS",
        "level":"90%"
      },
      {
        "name":"HTML5",
        "level":"80%"
      },
      {
        "name":"VueJs",
        "level":"50%"
      },
      {
        "name":"MongoDB",
        "level":"80%"
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Callbot.ai",
        "category":"Future of call center is here",
        "image":"callbot.jpeg",
        "url":"/callbot"
      },
      {
        "title":"GST Score",
        "category":"B2B reputation score",
        "image":"b2b.jpeg",
        "url":"/gstscore"
      }
    ]
  },
  "mapdata":{
    "CN": 100000,
    "IN": 9900,
    "SA": 86,
    "EG": 70,
    "SE": 0,
    "FI": 0,
    "FR": 0,
    "US": 20
  }
}

    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log(data)
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }
  // <Testimonials data={this.state.resumeData.testimonials}/>
  // <Contact data={this.state.resumeData.main}/>
        
  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Map data = {this.state.resumeData.mapdata} />
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
