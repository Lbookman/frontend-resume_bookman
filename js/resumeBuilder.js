var work = {
	"jobs": [{
		"employer": "Arizona Geological Survey",
		"title": "Software Engineer",
		"location": "Tucson, AZ ",
		"dates": "May 2013 - Present",
		"description": "• Provide day to day expert guidance and training for AZGS staff regarding construction of maps, integration of GIS data, and organization of metadata<br> •	Manage and organize data submitted to National Geothermal Data System (NGDS), coordinating from diverse sources throughout the United States <br>•	Ongoing data preparation for WFS/WMS web services using Access, ArcMap 10.5 and ArcServer<br>•	Create and manage databases and metadata for web services using CouchDB, SQL, and ArcSDE/SQL Server<br>•	Manage and assemble work for GIS interns<br> •	Design, build and update web map applications, using JavaScript, Python, and Mapbox<br>•	Develop and maintain documentation, including workflows and GIS metadata<br>•	Designed and constructed the Arizona Statewide Landslide Inventory Database (AzSLID), a collection of georeferenced landslide data using SDE Database, ArcCatalog, ArcMap, and Google Earth<br>"
	}, {
		"employer": "United States Geological Survey",
		"title": "GIS Intern",
		"location": "Tucson, AZ",
		"dates": "June 2012-September 2013",
		"description": "Designed and implemented an application for an international reference pricing for pharmacy industry to analyze revenue for different scenarios in cloud platform salesforce.com using Apex and Java script, Jquery, HTML5. Using Agile method to develop and Git repository tools" + "\n" + "Research about column oriented data base and SQL server 2013" + "\n" + "Research about could platforms and their usages"

	}, {
		"employer": "BioSensics LLC",
		"title": "Software Engineer Intern",
		"location": "Cambridge,MA",
		"dates": "June 2011-September 2011",
		"description": "Designed and implemented an application to analysis the result given from<br> the sensor attached to the human body and plot the movement in real time in Java"

	}],
	//Display work json object in resume object
	display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formettedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formettedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);

		}

	},

	//Find all location that I have worked
	locationizer: function(_work) {
		var allLocation = [];
		for (var work in _work.jobs) {
			var _workLoc = _work.jobs[work].location;
			allLocation.push(_workLoc);
		}
		return allLocation;

	}
}
//////////////////////////////////////////////////BIO/////////////////////////////////////////////////////////////////
var bio = {
	"name": "Laura Bookman",
	"role": "",
	"contacts": {
		"mobile": "",
		"email": "Lmbookman@gmail.com",
		"github": "www.github.com/Lmbookman",
		"location": "Tucson, AZ"
	},
	"welcomeMessage": "Welcome to my resume website",
	"skills": [
		"programming", "web development", "JS", "GeoServer", "GIS", "SDE Databases", "SQL"
	],
	"bioPic": "images/sahelsmall.png",

	//Dispay bio json object in resume page
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedWeclome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWeclome);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

	}
}
//////////////////////////////////////////////////PROJET/////////////////////////////////////////////////////////////////
var projects = {
	"projects": [{
		"title": "News Website",
		"dates": "November 2013",
		"description": "Implemented a website which gathers the latest news feeds from xml format of different news agencies and has the ability to share news in Facebook. Using Node.js in server side running in Amazon EC2 cloud platform. For client side used Backbone.js, HTML5, Twitter bootstrap framework.",
		"images": ['http://i.imgur.com/PhC5STL.png']

	}],
	//Display projects in resume page
	display: function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				}
			}

		}

	}
}
//////////////////////////////////////////////////EDUCATION/////////////////////////////////////////////////////////////////
var education = {
	"schools": [ {
		"name": "University of Arizona",
		"location": "Tucson, AZ",
		"degree": "Master of Science",
		"majors": ["Geographic Information Systems and Technology"],
		"dates": "Aug 2012 - Dec 2013"
	},{
		"name": "Temple University",
		"location": "Philadelphia, PA",
		"degree": "Bachelor of Arts",
		"majors": ["Geography and Urban Studies"],
		"dates": "Aug 2007 - May 2011"

	}],
	"onlineCourses": [{
		"title": "Tackling the Challenges of Big Data",
		"school": "MIT",
		"dates": "February 2014",
		"url": "https://mitprofessionalx.edx.org/courses/MITProfessionalX/6.BD_2X/3T2015/about"
	}, {
		"title": "Data Wrangling with MongoDB",
		"school": "Udacity",
		"dates": "May 2014",
		"url": "https://www.udacity.com/course/ud032"

	}, {
		"title": "MongoDB for Node.js Developers",
		"school": "MongoDB",
		"dates": "July 2014",
		"url": "https://university.mongodb.com/courses/M101JS/about"
	}],
	//Display education in my resume page
	display: function() {
		for (edu in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedNameAndDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameAndDegree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$(".education-entry:last").append(formattedLocation);
			if (education.schools[edu].majors.length > 0) {
				for (major in education.schools[edu].majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}

		}
		//online classes
		$('#education').append(HTMLonlineClasses)
		for (online in education.onlineCourses) {
			$('#education').append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			var formattedTitleAndSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleAndSchool);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedURL);

		}

	}
}

work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);