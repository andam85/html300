$(function () {

// named this object profiles so that I can use the array.map() method
  const profiles = [{
  "name": "Steve Smith",
  "jobTitle": "Project Manage",
  "Company": "Front End Dev Co",
  "Experience": "3 years",
  "School": "UW",
  "Major": "Marketing",
  "Email": "steve@fedc.com",
  "LinkedInUrl": "steve.linkedinprofile.com"
}, {
  "name": "Aaron Katz",
  "jobTitle": "Full Stack Developer",
  "Company": "Web Sites and More",
  "Experience": "5 years",
  "School": "SU",
  "Major": "Computer Science",
  "Email": "aaronNotMyEmail@uw.com",
  "LinkedInUrl": "aaron.linkedinprofile.com"
}, {
  "name": "Kyle Hendricks",
  "jobTitle": "Starting Pitcher",
  "Company": "Chicago Cubs",
  "Experience": "12 years",
  "School": "USC",
  "Major": "Pitching",
  "Email": "kyleH@cubs.com",
  "LinkedInUrl": "kyle.linkedinprofile.com"
},
{
  "name": "Michael Jordan",
  "jobTitle": "Point Guard",
  "Company": "Chicago Buls",
  "Experience": "20 years",
  "School": "UNC",
  "Major": "Trash Talking",
  "Email": "mJordan@bulls.com",
  "LinkedInUrl": "mJordan.linkedinprofile.com"
}
]
// school was the shortest thing I could find that drives the images
// had to add return profile to the end of the function else the results came back null
let profilesHTML = profiles.map(function(el) {
  let profile =
  `<div class="main">
      <div class="main__title-tile">
        <img class="main__title-tile__img" src="./img/${el.School}.jpg" alt="headshot image">
        <h2>${el.name}</h2>
        <h3>${el.jobTitle}</h3>
      </div>
      <div class="main__info-tile">
        <p><strong>Company: </strong>${el.Company}</p>
        <p><strong>Experience: </strong>${el.Experience}</p>
        <p><strong>School: </strong>${el.School}</p>
        <p><strong>Major: </strong>${el.Major}</p>
        <p><strong>Email: </strong>${el.Email}</p>
        <p><i class="fab fa-linkedin"></i>${el.LinkedInUrl}</p>
      </div>
  </div>`
  return profile;
  ;
});

//this appends the profileHTML object to the div in HTMl with the class "template"
$(".template").append(profilesHTML);
console.log('script working');
}
)
