var app = angular.module('myApp', []);
app.filter("inject", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);
app.controller('myCtrl', function($scope) {
	$scope.application = "<? echo $_GET['a']; ?>";
    $scope.data= { 
	    tools: [
                ["Python, C, C++, Fortran, PHP",""],
		        ["Version control (Git)",""],
			// ["VMD (Visual Molecular Dynamics)", "http://www.ks.uiuc.edu/Research/vmd/"],
			// ["POVRay (ray tracing)","http://www.povray.org/"],
				["Databases (SQL, MySQL, SqLite, InfluxDB)",""],
                //["Caffe (Deep Neural Networks)","http://caffe.berkeleyvision.org/"],
                ["TensorFlow (Deep Neural Networks)","https://www.tensorflow.org"],
               ],
    	projects: [ 
		    	{ 	name: "ISAAC",
		    		desc: "(Interval Scheduling Algorithm with Applied Constraints) Developed a scheduling web app what utilizes Monte Carlo methods and graph theory to optimize students' schedules.", 
		    		year:2015,
					tooltip:"During <i>Hack Week</i> 2015, I proposed the idea that our group design a web app that aids students in choosing classes.  First-year students are presented with literally <i>billions</i> of possible options, and it is a tedious and discouraging task to pick a schedule that matches their preferences.  Our web app allows students to choose courses that they need, that fit their preferred schedule (e.g. <i>Maximize days off</i>, <i>fewer evening classes</i>, etc.).  View a news article on the venture on the <a href='https://news.uoit.ca/archives/2015/08/uoit-science-researcher-encourages-students-to-embrace-summer-hack-week.php' target=_blank >UOIT website here.</a> See the app in action <a href='http://scheduler.uoitphysics.ca/' target=_blank >here</a>. <p align='center'><a href='http://scheduler.uoitphysics.ca' target=_blank><img src='image/ISAAC_logo.svg' width='60%' ></a></p> ",
		    		url:"http://scheduler.uoitphysics.ca" 
		    	},
		        { 	name: "Science Rendezvous Weather Balloon Launch",
		        	desc: "I had the opportunity to coordinate and lead the launch team for a HABEX Weather balloon for UOIT's Science Rendezvous Community Day.  This involved assembling a payload with sensors and electronics and preparing the payload for launch.  I coordinated with local authorities to ensure a safe launch and recovery.  I was a team representative for UOIT Physics to community members and families.  I designed a website showcasing footage and data from the activity.  After the event, I performed interviews with local media contacts who covered the event. ",
					tooltip:"Some links related to the launch: <ul>     <li><a href='http://uoitphysics.ca/balloon' target=_blank>Video footage, images, etc.</a></li>     <li><a href='https://news.uoit.ca/archives/2015/05/uoit-physics-sends-weather-balloon-to-the-edge-of-space.php' target=_blank>UOIT News Article</a></li>                <li><a href='http://blog.uoit.ca/science-qa-uoit-sends-a-weather-balloon-into-space' target=_blank>UOIT Student Speak Blog</a></li>            <li><a href='http://oshawaexpress.ca/viewposting.php?view=7970' target=_blank>Newspaper interview (Oshawa Express)</a></li>                </ul>     <p align='center'> <br><iframe width='90%' src='https://www.youtube.com/embed/DMSW5SPnigg' frameborder='0' allowfullscreen></iframe></p>   "             ,
		        	year:2015, 
		        	url:"http://uoitphysics.ca/balloon" 
		        },
                
                {
                    name: "Vice President, Graduate Student Council",
                    desc: "I served as the Vice President, Internal for the Graduate Student Council. This involved meeting with administration, social media management, and advertising for Graduate Student Events.",
                    tooltip:"",
                    year:2016,
                    url:"http://uoitgsc.ca"
                },


{
                    name: "President, Academic Skills Club",
                    desc: "Founding president of the Academic Skills Club.  Designed and taught workshops for undergraduate and graduate students to develop useful scientific research and programming skills.  We identified a need for other students to have the opportunity to learn skills such as working with Linux, typesetting documents in LaTeX, programming in MatLab/Python and designing vector graphics and figures in Inkscape.",
                    tooltip:"",
                    year:2015,
                    url:""
                },
                {
                    name: "Vice President, UOIT Physics Society",
                    desc: "I was in charge of communications for the UOIT Physics Society.  I built and maintained the uoitphysics.ca website, as well as the social media accounts.  I designed advertisements and developed a PHP/SQL-based email distribution system for the mailing list.  Additionally, my role was to act as a main point of contact between physics undergraduates and physics faculty.",
                    year:'2014-2015',
                    url:"http://uoitphysics.ca"
                    
                }
        ],
        publications: [
            {   title: "Deep learning and the Schrodinger equation",
                journal: "In review.",
                desc: " ",
                year: 2017,
                url:'https://arxiv.org/abs/1702.01361',
                tooltip:"https://arxiv.org/abs/1702.01361"
            },
            {   title: "Long-lived ligand-to metal charge-transfer state of an oxidovanadate complex",
                journal: "Journal of Physical Chemistry C",
                desc: "Designed cover image chosen to appear on the cover of the July 30, 2015 issue of the Journal of Physical Chemistry C.",
                year: 2015,
                url:'',
                tooltip:"<a href='http://pubs.acs.org/toc/jpccck/119/30' target=_blank ><img src='image/jpccck_v119i030_small.jpg' width='100%' /></a>"
            },
            {   title: "Designing Lightweight Aluminum Composites: A Density Functional Theory Approach",
                journal: "Bachelor of Science (Honours) Thesis",
                desc:"Original research Honours thesis report outlining research carried out from September 2014 to April 2015.",
                year: 2015,
                url:'http://kylemills.net/files/kmills_thesis_web.pdf',
                tooltip:"<a href='http://kylemills.net/files/kmills_thesis_web.pdf' target=_blank ><img src='image/kmills_ug_thesis_cover.jpg' width='100%' /></a>"
            }
        
        ],
        presentations: [
            {   title: "Learning the Schrodinger Equation with Deep Neural Networks",
                event: "Canadian Chemistry Conference, Toronto, Ontario",
                desc: "20 minute talk on the application of deep neural networks to the quantum mechanical Schrodinger Equation at the 100th Annual Canadian Chemistry Conference. ",
                year: 2017,
                url:'',
                tooltip:""
            },   
            {   title: "Deep learning and the Schrodinger equation.",
                event: "SOSCIP Impact Conference, Toronto, Ontario",
                desc: "Presented a three minute overview of my recent research to a group of hundreds of SOSCIP industry partners. Explained how we leveraged high performance computing capabilities and deep neural networks to tackle a difficult physics problem.",
                year: 2017,
                url:'',
                tooltip:""
            },      
            {   title: "Deep learning and the electronic structure problem.",
                event: "APS March Meeting, New Orleans, Louisiana",
                desc: "Presented my application of a deep neural network to the Schrodinger equation to physicists at the 2017 March Meeting.",
                year: 2017,
                url:'',
                tooltip:""
            },      
            {   title: "Deep learning and the Schrodinger equation.",
                event: "3 Minute Thesis, UOIT",
                desc: "Participated in 3MT (3 Minute Thesis) competition, where I presented my work on the application of deep learning to quantum mechanics.",
                year: 2017,
                url:'',
                tooltip:""
            },          
            {   title: "Designing lightweight aluminum composites: A first principles density functional theory approach.",
                event: "Conference of Metallurgists, Toronto, Ontario",
                desc: "Presented research at Canadian metallurgy conference in the computational materials science symposium",
                year: 2015,
                url:'',
                tooltip:""
            },            
            {   title: "Comparison of theoretical methods with boron nitride nanostructures.",
                event: "Undergraduate Summer Research Showcase, Oshawa, Ontario",
                desc: "Competitive poster presentation at the University of Ontario Institute of Technology",
                year: 2015,
                url:"",
                tooltip:""
            },            
            {   title: "Aluminum wetting of hexagonal boron nitride.",
                event: "National Research Council Security and Disruptive Technologies 2014 Tech Day, Ottawa, Ontario",
                desc: "First place winning poster in competitive poster presentation.",
                year: 2014,
                url:"",
                tooltip:""
            },            
            {   title: "Designing lightweight aluminum composites: A density functional theory approach.",
                event: "Canadian Undergraduate Physics Conference, Queen’s University, Kingston, Ontario",
                desc: "Presented original research in a competitive talk aimed at other Canadian undergraduate physics students.",
                year: 2014,
                url:"",
                tooltip:""
            },            
            {   title: "Aluminum wetting of hexagonal boron nitride.",
                event: "Undergraduate Summer Research Showcase, Oshawa, Ontario",
                desc: "Competitive poster presentation at the University of Ontario Institute of Technology.",
                year: 2014,
                url:"",
                tooltip:""
            }
        
        ],
        awards: [
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential.",
                year: "2017"
            },
            {
                title: "NSERC Canada Graduate Scholarship",
                desc: "NSERC Alexander Graham Bell CGS.  National scholarship awarded to students based on academic performance and research potential.",
                year: "2016"
            },
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential. (declined).",
                year: "2016"
            },
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential.",
                year: "2015"
            },
            {
                title:"Rotoract UOIT Scholarship ",
                desc: "Scholarship awarded to the 16 top-performing students at the University of Ontario Institute of Technology.",
                year:"2014"
            },
            {
                title: "NSERC-CSRNG Undergraduate Student Research Award",
                desc: "National award given to students who show research potential and excellent academic performance",
                year: "2014"
            },            
            {
                title: "UOIT Entrance Scholarship",
                desc: "Awarded to students with a 90%+ high school average upon entrance",
                year: "2011"
            },
        ],
        
        aboutMe: "I am a PhD Candidate at the University of Ontario Institute of Technology.  In 2015 I completed my Bachelor's of Science in physics, with a minor in mathematics, and began my Master's in Modelling and Computational Sciences.  In 2017, I transitioned directly to my PhD.  I am interested in general applications of computational models and techniques to scientific research, specifically in the application of deep neural networks and machine learning to problems in materials science.  I enjoy learning new things and applying my knowledge of physics, math, and programming to solve problems and produce useful and creative projects.  I have a broad range of technical skills ranging from graphic/web design to scientific high-performance computing. Below are just some of the tools and languages I use regularly:"
	};
    
});
