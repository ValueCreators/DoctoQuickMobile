var docProfileData = {
	
	fName : 'Shyam',
	mName : 'K G',
	lName : 'Kumar',
	rating : 3.5,
	no_of_reviews : 27,
	practiceSinceYear : 1947,
	degrees : 'MBBS, MD, Bachelor of Surgery',
	dob : new Date(),
	addr1 : '#25, 2nd Floor',
	addr2 : 'Ayodhya Nagar, J.P 5th Phase',
	city : 'Bangalore',
	state : 'Karnataka',
	emailId : 'shyam@gmail.com',
	mobileNum : '9980518849',
	knownLanguages : 'Marathi, Kannada, Telugu, English',
	bankName : 'SBI',
	acctNum : '201237878754',
	ifscCode : 'SBIN004987',
	feesDesired : 400,
	specialist : 'Dermatologist',
	membership : 'Not Available',
	membershipNum : 456,
	profilePicData : "",
  online : true
};

var patientProfileData = {

	fName : 'Jhon',
	mName : 'Abhraham',
	lName : 'H',
	age : 36,
	sex : 'M',
	email : 'JhonAbhraham@gmail.com',
	mobile : '124359565546',
	knowLaunguages : 'Marathi, English',
	profilePicData : ""
}

var notesData = {
	fName : 'Jhon',
	mName : 'H',
	lName : 'Abhraham',
	profilePicData : "",
	time : '14:48',
	date : '20/07/2015'
};

var SPECIALITIES = [
                        {
                            "id": "1",
                            "name": "Anaesthesia",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "2",
                            "name": "Dermatology",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "3",
                            "name": "Emergency Medicine",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "4",
                            "name": "Cardiac Surgery",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "5",
                            "name": "Family Medicine",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "6",
                            "name": "Internal Medicine",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "7",
                            "name": "Neurology",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "8",
                            "name": "Obstetrics and Gynecology",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "9",
                            "name": "Opthalmology",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "10",
                            "name": "Orthopedic Surgery",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "11",
                            "name": "Otolaryngology",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "12",
                            "name": "Pathology",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "13",
                            "name": "Pediatrics",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            "id": "14",
                            "name": "Psychiatry",
                            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        }
                    ];

var LANGUAGES = [
                   {
                       "id": "1",
                       "name": "English"
                   },
                   {
                       "id": "2",
                       "name": "Hindi"
                   },
                   {
                       "id": "3",
                       "name": "Kannada"
                   },
                   {
                       "id": "4",
                       "name": "Telugu"
                   },
                   {
                       "id": "5",
                       "name": "Tamil"
                   },
                   {
                       "id": "6",
                       "name": "Malayalam"
                   }
               ];

var GENDERS = [
                   {
                       "id": "1",
                       "name": "Male"
                   },
                   {
                       "id": "2",
                       "name": "Female"
                   },
                   {
                       "id": "3",
                       "name": "Both"
                   }
               ];

var DOCTOR_LIST = [
                   {
                	   "id" : "1",
                       "fName": "Ram",
                       "lName": "Kumar",
                       "rating": 3.5,
                       "no_of_reviews": 27,
                       "practiceSinceYear": 2000,
                       "speciality": "Family Medicine",
                       "degrees": "MBBS, MD",
                       "online" : true,
                       "profile_pic" : "http://sociovigil.in/wp-content/uploads/2013/01/Dr.-Devi-Shetty.png"
                   },
                   {
                	   "id" : "2",
                       "fName": "Aparna",
                       "lName": "Ramesh",
                       "rating": 4,
                       "no_of_reviews": 40,
                       "practiceSinceYear": 2005,
                       "speciality": "Dermatology",
                       "degrees": "MBBS, MD (ABCD)",
                       "online" : false,
                       "profile_pic" : "http://sociovigil.in/wp-content/uploads/2013/01/Dr.-Devi-Shetty.png"
                   },
                   {
                	   "id" : "3",
                       "fName": "Shyam",
                       "lName": "Kumar",
                       "rating": 4,
                       "no_of_reviews": 25,
                       "practiceSinceYear": 1995,
                       "speciality": "Dermatology",
                       "degrees": "MBBS, MD",
                       "online" : true,
                       "profile_pic" : "http://sociovigil.in/wp-content/uploads/2013/01/Dr.-Devi-Shetty.png"
                   },
                   {
                	   "id" : "4",
                       "fName": "Neha",
                       "lName": "Prasad",
                       "rating": 5,
                       "no_of_reviews": 31,
                       "practiceSinceYear": 2009,
                       "speciality": "Opthalmology",
                       "degrees": "MBBS",
                       "online" : true,
                       "profile_pic" : "http://sociovigil.in/wp-content/uploads/2013/01/Dr.-Devi-Shetty.png"
                   },
                   {
                	   "id" : "5",
                       "fName": "Girish",
                       "lName": "Hegde",
                       "rating": 2.5,
                       "no_of_reviews": 16,
                       "practiceSinceYear": 2011,
                       "speciality": "Orthopedic Surgery",
                       "degrees": "MBBS, MD (Ortho)",
                       "online" : true,
                       "profile_pic" : "http://sociovigil.in/wp-content/uploads/2013/01/Dr.-Devi-Shetty.png"
                   },
                   {
                	   "id" : "6",
                       "fName": "Santosh",
                       "lName": "Kishan",
                       "rating": 4.5,
                       "no_of_reviews": 30,
                       "practiceSinceYear": 2008,
                       "speciality": "General Mdicine",
                       "degrees": "MBBS",
                       "online" : false,
                       "profile_pic" : "http://sociovigil.in/wp-content/uploads/2013/01/Dr.-Devi-Shetty.png"
                   }
               ];
