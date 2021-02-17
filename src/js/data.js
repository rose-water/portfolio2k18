module.exports = [
  {
    "workType" : "",
    
    "projects" : [
      {
        "name" : "Nimbus",
        "id" : "nimbus",
        "assetsDir": "projects/nimbus",
        "description": "An interactive, web-based tool for visualizing and analyzing climate simulation data.",
        "content": "TBD",
        "videoEmbedUrl" : ``,
        "imgs": [],
        "tools": ["Cinema 4D", "Three.js", "Web Audio", "Leap Motion"],
        "url": "",
        "isPublic": true
      },
      // {
      //   "name" : "Paracosm I",
      //   "id" : "paracosm",
      //   "assetsDir": "projects/paracosm",
      //   "description" : "A VR experience created from childhood dreams and memories.",
      //   "content": "This is the first of three VR experiences in a series called \"Paracosms.\" <br/><br/>\"The creator of a paracosm has a complex and deeply felt relationship with this subjective universe. It is an experience that is often developed during childhood and continues over a long period of time, months or even years, as a sophisticated reality that can last into childhood.\" (from \"Paracosmic Immersion,\" Cyborg Anthropology & Wikipedia).<br/><br/>This VR experience is an attempt at materializing a world that came from childhood dreams and memories. Experienced sitting down, with no hand controllers, \"Paracosm I\" attempts to evoke feelings of detachment and calm in the viewer as they spend a few moments in a place of solitude.<br/><br/>This VR experience was exhibited at the Gray Area Foundation for the Arts Showcase 2018.2.<br/><br/><sub><sup>*</sup><i>This video plays audio.</i></sub>",
      //   "videoEmbedUrl" : `<iframe src="https://player.vimeo.com/video/309774249?byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>`,
      //   "imgs" : [ "paracosms-1.png" ],
      //   "tools": ["Cinema 4D", "Oculus Rift", "Unity"],
      //   "url" : "",
      //   "isPublic": true
      // },
      
      {
        "name" : "Perennial",
        "id" : "perennial",
        "assetsDir": "projects/perennial",
        "description": "A 3D meditation born from daydreams, pieced together from fragments of self-reflection & self-care. A little world, a gentle vessel, a patient portal.",
        "content": "Perennial grew during a long phase of much dedicated, much needed, self-reflection & self-care. It is a little world, a gentle vessel, a patient portal.<br/><br/>This project was exhibited as an interactive installation (using Leap Motion) at the 2018.1 Showcase at Gray Area Foundation for the Arts.",
        "videoEmbedUrl" : `<iframe src="https://player.vimeo.com/video/303649092?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" allow="autoplay;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>`,
        "imgs": [ "proto-1.png", "proto-2.png", "install-mock.png", "install.png" ],
        "tools": ["Cinema 4D", "Three.js", "Web Audio", "Leap Motion"],
        "url": "https://perennial.herokuapp.com/",
        "isPublic": true
      },

      {
        "name" : "tenderbloom",
        "id" : "tenderbloom",
        "assetsDir": "projects/tenderbloom",
        "description": "An ongoing series of little renders created in the process of learning 3D modeling, animation, and working with 3D on the web.",
        "content": "An ongoing series of little renders created in the process of learning 3D modeling, animation, and working with 3D on the web.",
        "imgs": ["shortened.gif", "monstera_still.png", "aloe.png", "polar.jpg", "interim.png"],
        "imgLayout": "grid",
        "url": "https://www.instagram.com/tenderbloom/",
        "tools": ["Cinema 4D", "Unity", "Processing", "openFrameworks", "Three.js"],
        "isPublic": true,
        "videoEmbedUrl" : "",
      },

      {
        "name" : "Propagator",
        "id" : "propagator",
        "assetsDir": "projects/propagator",
        "description" : "A digital zine created by a network of peers working across various creative disciplines looking to expand their art, design, and research practices.",
        "content": "Several conversations with peers who also work within art and design disciplines revealed a shared sentiment along these lines: \“I really want to make something different from what I usually make, but I’m not sure what I want to create or where to start.\” In our work, we realized that we tend to employ processes that we learned in school or professional environments. Although these processes have undoubtedly led to work that we’re proud of, we also realized that they can feel quite formulaic and potentially limiting for our creative outputs. \“What are some ways that we can gain new insights and perspectives in our own work?\” <br/><br/>To answer this question, I decided to start a digital zine as a platform for supporting a community of peers working across creative disciplines in expanding our artistic, design, and research practices.<br/><br/>Each issue of PROPAGATOR is put together based on a loosely structured prompt that invites contributors to engage in an activity meant to be outside the norms of their creative practices and professional work.<br/><br/>In ISSUE 01, \"DREAM MACHINE,\" contributors were asked to attempt dream journaling for several weeks, to talk about their experiences with dream journaling, and to create a piece based on their entries. The format of their dream journals was not predetermined, rather, they were asked to experiment with different methods to get a feeling for what was right for them. This zine issue features contributors' works (where submissions included 3D art for the web, data visualizations, short essays, video essays, and illustrations) alongside images of their dream journals.",
        "videoEmbedUrl" : `<iframe style="background:white; "src="https://www.propagator.xyz"></iframe>`,
        "imgs": [],
        "tools": ["Node.js", "React", "CSS3", "Sketch 3"],
        "url": "https://propagator.xyz",
        "isPublic": true
      },
      
      {
        "name" : "The Memory Observatory",
        "id" : "memoryobservatory",
        "description" : "A SXSW interactive installation to support the launch of the new Kodak Alaris Moments app.",
        "content" : "I worked as a design technologist for a design agency, Junior, on a collaboration with Kodak Alaris and Special Guest to create the Memory Observatory at SXSW 2016.<br/><br/>This physical installation provided an experience where people were invited to share upload a photo and describe a past memory and then re-experience their memory in a kaleidoscopic room with carefully chosen smells, colors, and custom sounds.<br/><br/>In this work, I was tasked with building two React applications that could support this experience. One of the apps was a custom timer that could communicate to the installation ushers when it was time to let another visitor into the experience. This was an important component given the sequential nature of the experience; only one memory was shown in the installation at a time. An usher would talk to a visitor for a maximum of five minutes about the visitors' chosen memory and uploaded photo. They needed to be able to communicate when they were done with each visitor to the specialists working behind the scenes, so that they could begin mixing audio and crafting custom smells. The second app was a website where visitors could upload their photos to a server, which was built to support the high foot traffic of visitors at SXSW.",
        "videoEmbedUrl":`<iframe src="https://player.vimeo.com/video/157771821?byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>`,
        "tools": ["React", "Node.js", "Twilio API"],
        "imgs" : ["memoryobservatory_1.png", "memoryobservatory_2.png", "memoryobservatory_4.png"],
        "url" : "",
        "isPublic": true
      },
      
    ]
  },
  
];
