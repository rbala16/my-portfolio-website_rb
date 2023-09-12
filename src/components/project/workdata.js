import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/tech-blog.jpg'
import project3 from '../../assets/text-editor.jpg'
import project4 from '../../assets/logo.jpg'
import project5 from '../../assets/weather-forecast.jpg'
import project6 from '../../assets/CRM.jpg'

const ProjectData =[
  {
imgsrc:project1,
title: "Note Maker",
text:'Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
view:'https://deploying-note-maker-3b48ad0df49a.herokuapp.com/',
source:'https://github.com/rbala16/note-maker_rb'
  },

  {
    imgsrc:project2,
    title: "The Tech Blog",
    text:'Build a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. I can publish articles, blog posts, and my thoughts and opinions',
    view:'https://tech-blog-rb-776385415434.herokuapp.com/',
    source:'https://github.com/rbala16/The-Tech-blog_rb'
      },
      {
        imgsrc:project3,
        title: "Text-Editor",
        text:'Build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.',
        view:'https://text-editor-rb-86dc49448406.herokuapp.com/',
        source:'https://github.com/rbala16/text-editor_rb'
          },
          {
            imgsrc:project4,
            title: "Generate Logo",
            text:'Create a Node.js command-line application that takes in user input to generate a logo . The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.',
            view:'https://drive.google.com/file/d/1oeLgSmnspT2CmFGc2yxT0Du2zw09t2WV/view',
            source:'https://github.com/rbala16/generate-logo_rb'
              } ,
              {
                imgsrc:project5,
                title: "Weather Forecast",
                text:'Third-party API,used to check the five days weather of any city ,its will also display current weather too with icons.I had great experience working on this project',
                view:'https://rbala16.github.io/five-days-weather-forecast/',
                source:'https://github.com/rbala16/five-days-weather-forecast'
                  } ,
                  {
                    imgsrc:project6,
                    title: "CRM-lite",
                    text:'A CRM-lite is a Green Grass Lawn Care Services for employees to book appointment in order to have fastest lawn services and provide excellent customer lawn care services experience. This app uses 3rd party API s such Weather API and Canadian holiday api.',
                    view:'https://dinozio-design.github.io/CRM-lite/',
                    source:'https://github.com/dinozio-design/CRM-lite'
                      }  
]

export default ProjectData;