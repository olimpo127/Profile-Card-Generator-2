import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || "Nombre"} ${variables.lastname ||
    "Apellido"}</h1>
          <h2>${variables.role || "Ocupación"}</h2>
          <h3>${variables.city || "Ciudad"}, ${variables.country || "Pais"}</h3>
          <ul class= ${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "data:image/jpeg;base64,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",
    // this is the url for the profile avatar
    avatarURL:
      "https://media.licdn.com/dms/image/C4D03AQEE7xag4_fatw/profile-displayphoto-shrink_800_800/0/1640124079016?e=1678924800&v=beta&t=kYEnIVGtIAxwcsvpQvWE65-V_gUFqWxnmOJBj9rf5q4",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: "olimpo127",
    linkedin: "felipe-ojeda-34348b9b",
    instagram: "felipeoi127",
    name: "Felipe",
    lastname: "Ojeda",
    role: "Web Developer",
    country: "Chile",
    city: "Santiago"
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
