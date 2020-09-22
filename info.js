var app = angular.module('myApp', ['ngSanitize']);
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
                ["Matplotlib, Inkscape, Blender"]
               ],
    	projects: [ 
		    	{ 	name: "ISAAC",
		    		desc: "(Interval Scheduling Algorithm with Applied Constraints) Developed a scheduling web app what utilizes Monte Carlo methods and graph theory to optimize students' schedules.", 
		    		year:2015,
					tooltip:"During <i>Hack Week</i> 2015, I proposed the idea that our group design a web app that aids students in choosing classes.  First-year students are presented with literally <i>billions</i> of possible options, and it is a tedious and discouraging task to pick a schedule that matches their preferences.  Our web app allows students to choose courses that they need, that fit their preferred schedule (e.g. <i>Maximize days off</i>, <i>fewer evening classes</i>, etc.).  View a news article on the venture on the <a href='https://news.uoit.ca/archives/2015/08/uoit-science-researcher-encourages-students-to-embrace-summer-hack-week.php' target=_blank >UOIT website here.</a> See the app in action <a href='http://scheduler.uoitphysics.ca/' target=_blank >here</a>. <p align='center'><a href='http://scheduler.uoitphysics.ca' target=_blank><img src='./image/ISAAC_logo.svg' width='60%' ></a></p> ",
		    		url:"http://scheduler.uoitphysics.ca", 
                    image:'./image/isaac.jpg',
                    color:'#15467E',
		    	},
		        { 	name: "Science Rendezvous Weather Balloon Launch",
		        	desc: "I had the opportunity to coordinate and lead the launch team for a HABEX Weather balloon for UOIT's Science Rendezvous Community Day.  This involved assembling a payload with sensors and electronics and preparing the payload for launch.  I coordinated with local authorities to ensure a safe launch and recovery.  I was a team representative for UOIT Physics to community members and families.  I designed a website showcasing footage and data from the activity.  After the event, I performed interviews with local media contacts who covered the event. ",
					tooltip:"Some links related to the launch: <ul>     <li><a href='http://uoitphysics.ca/balloon' target=_blank>Video footage, images, etc.</a></li>     <li><a href='https://news.uoit.ca/archives/2015/05/uoit-physics-sends-weather-balloon-to-the-edge-of-space.php' target=_blank>UOIT News Article</a></li>                <li><a href='http://blog.uoit.ca/science-qa-uoit-sends-a-weather-balloon-into-space' target=_blank>UOIT Student Speak Blog</a></li>            <li><a href='http://oshawaexpress.ca/viewposting.php?view=7970' target=_blank>Newspaper interview (Oshawa Express)</a></li>                </ul>     <p align='center'> <br><iframe width='90%' src='https://www.youtube.com/embed/DMSW5SPnigg' frameborder='0' allowfullscreen></iframe></p>   "             ,
		        	year:2015, 
		        	url:"http://uoitphysics.ca/balloon",
                    image:"./image/balloon.jpg",
                    color: '#214CBD',
		        },
                
                {
                    name: "Vice President, Graduate Student Council",
                    desc: "I served as the Vice President, Internal for the Graduate Student Council. This involved meeting with administration, social media management, and advertising for Graduate Student Events.",
                    tooltip:"",
                    year:2016,
                    url:"http://uoitgsc.ca",
                    color:'#50B3E9',
                    image:'./image/gsc.jpg'
                },


{
                    name: "President, Academic Skills Club",
                    desc: "Founding president of the Academic Skills Club.  Designed and taught workshops for undergraduate and graduate students to develop useful scientific research and programming skills.  We identified a need for other students to have the opportunity to learn skills such as working with Linux, typesetting documents in LaTeX, programming in MatLab/Python and designing vector graphics and figures in Inkscape.",
                    tooltip:"",
                    year:2015,
                    url:"",
                    image:'./image/asc.jpg',
                    color:'#333333',
                },
                {
                    name: "Vice President, UOIT Physics Society",
                    desc: "I was in charge of communications for the UOIT Physics Society.  I built and maintained the uoitphysics.ca website, as well as the social media accounts.  I designed advertisements and developed a PHP/SQL-based email distribution system for the mailing list.  Additionally, my role was to act as a main point of contact between physics undergraduates and physics faculty.",
                    year:'2014-2015',
                    url:"http://uoitphysics.ca",
                    image:'./image/slider_QM.jpg',
                    color:'#333333',
                    
                }
        ],
        publications: [
            
            {   title: "Finding the ground state of spin Hamiltonians with reinforcement learning",
                authors: "Kyle Mills, Pooya Ronagh, Isaac Tamblyn",
                journal: "Nature Machine Intelligence",
                desc: "Reinforcement learning (RL) has become a proven method for optimizing a procedure for which success has been defined, but the specific actions needed to achieve it have not. We apply the so-called 'black box' method of RL to what has been referred as the 'black art' of simulated annealing (SA), demonstrating that an RL agent based on proximal policy optimization can, through experience alone, arrive at a temperature schedule that surpasses the performance of standard heuristic temperature schedules for two classes of Hamiltonians. When the system is initialized at a cool temperature, the RL agent learns to heat the system to 'melt' it, and then slowly cool it in an effort to anneal to the ground state; if the system is initialized at a high temperature, the algorithm immediately cools the system. We investigate the performance of our RL-driven SA agent in generalizing to all Hamiltonians of a specific class; when trained on random Hamiltonians of nearest-neighbour spin glasses, the RL agent is able to control the SA process for other Hamiltonians, reaching the ground state with a higher probability than a simple linear annealing schedule. Furthermore, the scaling performance (with respect to system size) of the RL approach is far more favourable, achieving a performance improvement of one order of magnitude on L=14x14 systems. We demonstrate the robustness of the RL approach when the system operates in a 'destructive observation' mode, an allusion to a quantum system where measurements destroy the state of the system. The success of the RL agent could have far-reaching impact, from classical optimization, to quantum annealing, to the simulation of physical systems.",
                year: 2020,
                url: "https://rdcu.be/b6SMM",
                pdf: "https://arxiv.org/pdf/2003.00011",
                doi: "10.1038/s42256-020-0226-x",
                image: "./image/nmi_cool.jpg",
                imageoffset: "50",
                color: "#314463",
            },
            
            {   title: "Adversarial generation of mesoscale surfaces fromsmall scale chemical motifs",
                authors: "Kyle Mills, Corneel Casert, Isaac Tamblyn",
                journal: "Submitted",
                desc: "We demonstrate the use of a Regressive Upscaling Generative Adversarial Network (RUGAN) as an effective way to sample state space for hexagonal porous graphene sheets.  The RUGAN can, after being trained on a set of small scale examples, generate new, energetically-relevant microstates (atomic configurations).  The RUGAN can generate configurations across a continuum of total energy values, and produce configurations at requested energy values.  The microstates produced respect periodic boundary conditions, and importantly, the fully-convolutional nature of the generator allows the generation of arbitrarily large microstates, after being trained on only a small scale data set. ",
                year: 2020,
                url: "",
                pdf: "",
                doi: "",
                image: "./image/RUGAN2.jpg",
                imageoffset: "50",
                color: "#7e7394",
            },
            
            {   title: "Crystal Site Feature Embedding Enables Exploration of Large Chemical Spaces",
                authors: "Hitarth Choubisa, Mikhail Askerka, Kevin Ryczko, Oleksandr Voznyy, Kyle Mills, Isaac Tamblyn, Edward H. Sargent",
                journal: "Matter",
                desc: "Mapping materials science problems onto computational frameworks suitable for machine learning can accelerate materials discovery. Combining proposed crystal site feature embedding (CSFE) representation with convolutional and extensive deep neural networks, we achieve a low mean absolute test error of 3.7 meV/atom and 0.069 eV on density functional theory energies and band gaps of mixed halide perovskites. We explore how a small amount of cadmium doping can potentially be applied in solar cell design and sample the large chemical space by using a variational autoencoder to discover interesting perovskites with band gaps in the ultraviolet and infrared. Additionally, we use CSFE to explore chemical spaces and small doping concentrations beyond those used for training. We further show that CSFE has a mean absolute test error of 7 meV/atom and 0.13 eV for total energies and band gaps for 2D perovskites and discuss its adaptability for exploration of an even wider variety of chemical systems.",
                year: 2020,
                url: "https://doi.org/10.1016/j.matt.2020.04.016",
                pdf: "",
                doi: "10.1016/j.matt.2020.04.016",
                image: "./image/blank.jpg",
                imageoffset: "50",
                color: "#007bdc",
            },



           {    title: "Extensive deep neural networks for transferring small scale learning to large scale systems",
                authors: "Kyle Mills, Kevin Ryczko, Iryna Luchak, Adam Domurad, Chris Beeler, Isaac Tamblyn",
                journal: "Chemical Science",
                desc: "We present a physically-motivated topology of a deep neural network that can efficiently infer extensive parameters (such as energy, entropy, or number of particles) of arbitrarily large systems, doing so with O(N) scaling. We use a form of domain decomposition for training and inference, where each sub-domain (tile) is comprised of a non-overlapping focus region surrounded by an overlapping context region. The size of these regions is motivated by the physical interaction length scales of the problem. We demonstrate the application of EDNNs to three physical systems: the Ising model and two hexagonal/graphene-like datasets. In the latter, an EDNN was able to make total energy predictions of a 60 atoms system, with comparable accuracy to density functional theory (DFT), in 57 milliseconds. Additionally EDNNs are well suited for massively parallel evaluation, as no communication is necessary during neural network evaluation. We demonstrate that EDNNs can be used to make an energy prediction of a two-dimensional 35.2 million atom system, over 1.0 μm2 of material, at an accuracy comparable to DFT, in under 25 minutes. Such a system exists on a length scale visible with optical microscopy and larger than some living organisms.",
                year: 2019,
                url: "https://pubs.rsc.org/en/Content/ArticleLanding/2019/SC/C8SC04578J",
                pdf: "https://pubs.rsc.org/en/content/articlepdf/2019/sc/c8sc04578j",
                doi: "10.1039/C8SC04578J",
                image: "./image/EDNN_resize.jpg",
                imageoffset: "15",
                color: "#7F195D",
            },
            
            {   title: "Convolutional neural networks for atomistic systems",
                authors: "Kevin Ryczko, Kyle Mills, Iryna Luchak, Christa Homenick, Isaac Tamblyn",
                journal: "Computational Materials Science",
                desc: "We study dimer molecules in two and three dimensions using both a model Lennard-Jones potential as well as Density Functional Theory (DFT) calculations. We first show that deep convolutional neural networks (DCNNs) can be used to predict the distances and energies of a dimer molecule in both two and three dimensional space using the Lennard-Jones potential. We then use a similar approach to learn hexagonal surfaces including graphene, hexagonal boron nitride (hBN), and graphene-hBN heterostructures.",
                year: 2017,
                url: "https://doi.org/10.1016/j.commatsci.2018.03.005",
                doi: "10.1016/j.commatsci.2018.03.005",
                pdf: "https://arxiv.org/pdf/1706.09496.pdf",
                image: "./image/cnnas.jpg",
                imageoffset: "0",
                color: "#3E66AE",
            },
            
            {   title: "Deep neural networks for direct, featureless learning through observation: the case of 2d spin models",
                authors: "Kyle Mills, Isaac Tamblyn",
                journal: "Physical Review E",
                desc: "We demonstrate the capability of a convolutional deep neural network in predicting the nearest-neighbor energy of the 4×4 Ising model. Using its success at this task, we motivate the study of the larger 8×8 Ising model, showing that the deep neural network can learn the nearest-neighbor Ising Hamiltonian after only seeing a vanishingly small fraction of configuration space. Additionally, we show that the neural network has learned both the energy and magnetization operators with sufficient accuracy to replicate the low-temperature Ising phase transition. We then demonstrate the ability of the neural network to learn other spin models, teaching the convolutional deep neural network to accurately predict the long-range interaction of a screened Coulomb Hamiltonian, a sinusoidally attenuated screened Coulomb Hamiltonian, and a modified Potts model Hamiltonian. In the case of the long-range interaction, we demonstrate the ability of the neural network to recover the phase transition with equivalent accuracy to the numerically exact method. Furthermore, in the case of the long-range interaction, the benefits of the neural network become apparent; it is able to make predictions with a high degree of accuracy, and do so 1600 times faster than a CUDA-optimized exact calculation. Additionally, we demonstrate how the neural network succeeds at these tasks by looking at the weights learned in a simplified demonstration.",
                year: 2017,
                url: "https://doi.org/10.1103/PhysRevE.97.032119",
                pdf: "https://arxiv.org/pdf/1706.09779.pdf",
                doi: "10.1103/PhysRevE.97.032119",
                image: "./image/ising.jpg",
                imageoffset: "15",
                color: "#800000",
            },
            
            {   title: "Deep learning and the Schrodinger equation",
                authors: "Kyle Mills, Michael Spanner, Isaac Tamblyn",
                journal: "Physical Review A",
                desc: "We have trained a deep (convolutional) neural network to predict the ground-state energy of an electron in four classes of confining two-dimensional electrostatic potentials. On randomly generated potentials, for which there is no analytic form for either the potential or the ground-state energy, the neural network model was able to predict the ground-state energy to within chemical accuracy, with a median absolute error of 1.49 mHa. We also investigate the performance of the model in predicting other quantities such as the kinetic energy and the first excited-state energy of random potentials.",
                year: 2017,
                url:'https://journals.aps.org/pra/abstract/10.1103/PhysRevA.96.042113',
                doi: "10.1103/PhysRevA.96.042113",
                pdf:'https://arxiv.org/pdf/1702.01361.pdf',
                image:'./image/schrodinger.jpg',
                imageoffset:1000,
                color:"#67197F",
            },
            
            {   title: "Phase space sampling and operator confidence with generative adversarial networks",
                authors: "Kyle Mills and Isaac Tamblyn",
                journal: "",
                desc: "We demonstrate that a generative adversarial network can be trained to produce Ising model configurations in distinct regions of phase space. In training a generative adversarial network, the discriminator neural network becomes very good a discerning examples from the training set and examples from the testing set. We demonstrate that this ability can be used as an anomaly detector, producing estimations of operator values along with a confidence in the prediction.",
                year: 2017,
                url: "https://arxiv.org/abs/1710.08053",
                pdf: "https://arxiv.org/pdf/1710.08053.pdf",
                image: "",
                imageoffset: "0",
                color: "#F26157",
            },
            
            {   title: "Optical lattice experiments at unobserved conditions and scales through generative adversarial deep learning",
                authors: "Corneel Casert, Kyle Mills, Tom Vieijra, Jan Ryckebusch, Isaac Tamblyn",
                journal: "Submitted",
                desc: "Machine learning provides a novel avenue for the study of experimental realizations of many-body systems, and has recently been proven successful in analyzing properties of experimental data of ultracold quantum gases. We here show that deep learning succeeds in the more challenging task of modelling such an experimental data distribution. Our generative model (RUGAN) is able to produce snapshots of a doped two-dimensional Fermi-Hubbard model that are indistinguishable from previously reported experimental realizations. Importantly, it is capable of accurately generating snapshots at conditions for which it did not observe any experimental data, such as at higher doping values. On top of that, our generative model extracts relevant patterns from small-scale examples and can use these to construct new configurations at a larger size that serve as a precursor to observations at scales that are currently experimentally inaccessible. The snapshots created by our model---which come at effectively no cost---are extremely useful as they can be employed to quantitatively test new theoretical developments under conditions that have not been explored experimentally, parameterize phenomenological models, or train other, more data-intensive, machine learning methods. We provide predictions for experimental observables at unobserved conditions and benchmark these against modern theoretical frameworks. The deep learning method we develop here is broadly applicable and can be used for the efficient large-scale simulation of equilibrium and nonequilibrium physical systems.",
                year: 2020,
                url: "https://arxiv.org/abs/2002.07055",
                pdf: "https://arxiv.org/pdf/2002.07055",
                //doi: "10.1039/C8SC04578J",
                image: "",
                //imageoffset: "15",
                color: "#FFA05C",
            },
            
            {   title: "Optimizing thermodynamic trajectories using evolutionary reinforcement learning",
                authors: "Chris Beeler, Uladzimir Yahorau, Rory Coles, Kyle Mills, Stephen Whitelam, Isaac Tamblyn",
                journal: "Submitted",
                desc: "Using a model heat engine we show that neural network-based reinforcement learning can identify thermodynamic trajectories of maximal efficiency. We use an evolutionary learning algorithm to evolve a population of neural networks, subject to a directive to maximize the efficiency of a trajectory composed of a set of elementary thermodynamic processes; the resulting networks learn to carry out the maximally-efficient Carnot, Stirling, or Otto cycles. Given additional irreversible processes this evolutionary scheme learns a hitherto unknown thermodynamic cycle. Our results show how the reinforcement learning strategies developed for game playing can be applied to solve physical problems conditioned upon path-extensive order parameters.",
                year: 2019,
                url: "https://arxiv.org/abs/1903.08543",
                pdf: "https://arxiv.org/pdf/1903.08543.pdf",
                image: "",
                imageoffset: "15",
                color: "#A54657",
            },
            
            /*{   title: "Long-lived ligand-to metal charge-transfer state of an oxidovanadate complex",
                journal: "Journal of Physical Chemistry C",
                desc: "Designed cover image chosen to appear on the cover of the July 30, 2015 issue of the Journal of Physical Chemistry C.",
                year: 2015,
                url:'http://pubs.acs.org/doi/10.1021/acs.jpcc.5b00513',
                pdf:'http://pubs.acs.org/doi/pdf/10.1021/acs.jpcc.5b00513',
                image:'./image/jpcc.jpg',
                url:'',
                imageoffset:10,
                color:'#7D8FC3'
            },
            {   title: "Designing Lightweight Aluminum Composites: A Density Functional Theory Approach",
                journal: "Honours thesis",
                desc:"Original research Honours thesis report outlining research carried out from September 2014 to April 2015.",
                year: 2015,
                image:'./image/ugthesis.jpg',
                url:'http://kylemills.net/files/kmills_thesis_web.pdf',
                tooltip:"<a href='http://kylemills.net/files/kmills_thesis_web.pdf' target=_blank ><img src='./image/kmills_ug_thesis_cover.jpg' width='100%' /></a>",
                color:"#29D7E5",
            }*/
        
        ],
        presentations: [
            {   title: "Extensive deep neural networks (for materials)",
                event: "Computational Materials North",
                city: "Montreal, Québec",
                desc: "Presented extensive deep neural networks at inaugural Computational Materials North",
                year: 2018,
                url:'',
                tooltip:""
            }, 
            {   title: "Learning the Schrodinger Equation with Deep Neural Networks",
                event: "Canadian Chemistry Conference",
                city: "Toronto, Ontario",
                desc: "20 minute talk on the application of deep neural networks to the quantum mechanical Schrodinger Equation at the 100th Annual Canadian Chemistry Conference. ",
                year: 2017,
                url:'',
                tooltip:""
            },   
            {   title: "Deep learning and the Schrodinger equation.",
                event: "SOSCIP Impact Conference",
                city: "Toronto, Ontario",
                desc: "Presented a three minute overview of my recent research to a group of hundreds of SOSCIP industry partners. Explained how we leveraged high performance computing capabilities and deep neural networks to tackle a difficult physics problem.",
                year: 2017,
                url:'',
                tooltip:""
            },      
            {   title: "Deep learning and the electronic structure problem.",
                event: "APS March Meeting",
                city: "New Orleans, Louisiana",
                desc: "Presented my application of a deep neural network to the Schrodinger equation to physicists at the 2017 March Meeting.",
                year: 2017,
                url:'',
                tooltip:""
            },      
            {   title: "Deep learning and the Schrodinger equation.",
                event: "3 Minute Thesis",
                city: "Oshawa, Ontario",
                desc: "Participated in 3MT (3 Minute Thesis) competition, where I presented my work on the application of deep learning to quantum mechanics.",
                year: 2017,
                url:'',
                tooltip:""
            },          
            {   title: "Designing lightweight aluminum composites: A first principles density functional theory approach.",
                event: "Conference of Metallurgists",
                city: "Toronto, Ontario",
                desc: "Presented research at Canadian metallurgy conference in the computational materials science symposium",
                year: 2015,
                url:'',
                tooltip:""
            },            
            {   title: "Comparison of theoretical methods with boron nitride nanostructures.",
                event: "Undergraduate Summer Research Showcase",
                city: "Oshawa, Ontario",
                desc: "Competitive poster presentation at the University of Ontario Institute of Technology",
                year: 2015,
                url:"",
                tooltip:""
            },            
            {   title: "Aluminum wetting of hexagonal boron nitride.",
                event: "National Research Council Tech Day",
                city: "Ottawa, Ontario",
                desc: "First place winning poster in competitive poster presentation.",
                year: 2014,
                url:"",
                tooltip:""
            },            
            {   title: "Designing lightweight aluminum composites: A density functional theory approach.",
                event: "Canadian Undergraduate Physics Conference",
                city: "Kingston, Ontario",
                desc: "Presented original research in a competitive talk aimed at other Canadian undergraduate physics students.",
                year: 2014,
                url:"",
                tooltip:""
            },            
            {   title: "Aluminum wetting of hexagonal boron nitride.",
                event: "Undergraduate Summer Research Showcase",
                city: "Oshawa, Ontario",
                desc: "Competitive poster presentation at the University of Ontario Institute of Technology.",
                year: 2014,
                url:"",
                tooltip:""
            }
        
        ],
        awards: [
            {
                title: "NSERC Alexander Graham Bell Canada Graduate Scholarship (NSERC CGS-D)",
                desc: "National award to promote continued excellence in Canadian research by rewarding and retaining high-calibre doctoral students at Canadian institutions.",
                organization: "",
                year: "2019--"
            },
            {
                title: "Vector Institute Postgraduate Affiliate",
                desc: "",
                organization: "Vector Institute for Artificial Intelligence",
                year: "2019-2020"
            },
            {
                title: "NSERC Post Graduate Scholarship (PGS-D)",
                desc: "National scholarship awarded to students based on academic performance and research potential.",
                organization: "",
                year: "2019-2020"
            },
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential.",
                organization: "",
                year: "2019"
            },
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential.",
                organization: "",
                year: "2018"
            },
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential.",
                organization: "",
                year: "2017"
            },
            {
                title: "Canada Graduate Scholarship",
                desc: "Alexander Graham Bell CGS.  National scholarship awarded to students based on academic performance and research potential.",
                year: "2016",
                organization: "NSERC",
            },
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential.",
                year: "2016",
                organization: "",
            },
            {
                title: "Ontario Graduate Scholarship",
                desc: "Provincial scholarship awarded to students based on academic performance and research potential.",
                year: "2015",
                organization: "",
            },
            {
                title:"Rotoract UOIT Scholarship ",
                desc: "Scholarship awarded to the 16 top-performing students at the University of Ontario Institute of Technology.",
                year:"2014",
                organization: "Rotoract Oshawa",
            },
            {
                title: "Undergraduate Student Research Award",
                desc: "National award given to students who show research potential and excellent academic performance",
                organization: "NSERC",
                year: "2014"
            },            
            {
                title: "UOIT Entrance Scholarship",
                organization: "UOIT",
                desc: "Awarded to students with a 90%+ high school average upon entrance",
                year: "2011"
            },
        ],
        
        aboutMe: "I am a PhD Student at <a href='http://uoit.ca' target='_blank'>Ontario Tech University</a>. I am a <a href='https://vectorinstitute.ai/2019/03/25/vector-institute-welcomes-new-postgraduate-affiliates-to-its-growing-research-community/' target='_blank'>2019 Vector Institute Postgraduate Affiliate</a>, and an Alexander Graham Bell Canada Graduate Scholar. I am currently a Mitacs intern at <a href='https://1qbit.com/'  target='_blank'>1QBit</a> where I am investigating the application of reinforcement learning to quantum computing.  In 2015 I completed my Bachelor's of Science in physics, with a minor in mathematics, and began my Master's in Modelling and Computational Sciences.  In 2017, I transitioned to my PhD, and began as a visiting scholar at the <a href='https://www.nrc-cnrc.gc.ca/eng/index.html' target='_blank'> National Research Council Canada </a> in Ottawa.  My research interests include the application of deep learning and reinforcement learning to physics in general, but specifically to problems in materials science and computational chemistry.  I enjoy learning new things and applying my knowledge of physics, math, and programming to solve problems and produce useful and creative projects.  I have a broad range of technical skills ranging from graphic/web design to scientific high-performance computing.  Outside of school I enjoy photography and pretty much any outdoor activity such as hiking, biking, skiing, etc.  Below are just some of the tools and languages I use regularly:"
	};
    
});
