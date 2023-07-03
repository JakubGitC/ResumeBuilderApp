// regex for validation
const strRegex = /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;
const validType = {
  TEXT: "text",
  TEXT_EMP: "text_emp",
  EMAIL: "email",
  DIGIT: "digit",
  PHONENO: "phoneno",
  ANY: "any",
};

// User inputs elements
let examplebtn = document.getElementById("examplebtn");
const mainForm = document.getElementById("cv-form");
let firstnameElem = mainForm.firstname,
  middlenameElem = mainForm.middlename,
  lastnameElem = mainForm.lastname,
  imageElem = mainForm.image,
  designationElem = mainForm.designation,
  addressElem = mainForm.address,
  emailElem = mainForm.email,
  phonenoElem = mainForm.phoneno,
  summaryElem = mainForm.summary;
// Achivements
let achievementsTitleElem = document.querySelectorAll(".achieve_title"),
  achievementsDescriptionElem = document.querySelectorAll(
    ".achieve_description"
  );
// Experiences
let expTitleElem = document.querySelectorAll(".exp_title"),
  expOrganizationElem = document.querySelectorAll(".exp_organization"),
  expLocationElem = document.querySelectorAll(".exp_location"),
  expStartDateElem = document.querySelectorAll(".exp_start_date"),
  expEndDateElem = document.querySelectorAll(".exp_end_date"),
  expDescriptionElem = document.querySelectorAll(".exp_description");
// Education
let eduSchoolElem = document.querySelectorAll(".edu_school"),
  eduDegreeElem = document.querySelectorAll(".edu_degree"),
  eduCityElem = document.querySelectorAll(".edu_city"),
  eduStartDateElem = document.querySelectorAll(".edu_start_date"),
  eduGraduationDateElem = document.querySelectorAll(".edu_graduation_date"),
  eduDescriptionElem = document.querySelectorAll(".edu_description");
// Projects
let projTitleElem = document.querySelectorAll(".proj_title"),
  projLinkElem = document.querySelectorAll(".proj_link"),
  projDescriptionElem = document.querySelectorAll(".proj_description");

let skillElem = document.querySelectorAll(".skill");

// Display elements
let nameDsp = document.getElementById("fullname_dsp"),
  imageDsp = document.getElementById("image_dsp"),
  phonenoDsp = document.getElementById("phoneno_dsp"),
  emailDsp = document.getElementById("email_dsp"),
  addressDsp = document.getElementById("address_dsp"),
  designationDsp = document.getElementById("designation_dsp"),
  summaryDsp = document.getElementById("summary_dsp"),
  projectsDsp = document.getElementById("projects_dsp"),
  achievementsDsp = document.getElementById("achievements_dsp"),
  skillsDsp = document.getElementById("skills_dsp"),
  educationsDsp = document.getElementById("educations_dsp"),
  experiencesDsp = document.getElementById("experiences_dsp");

// generate CV
const generateCV = () => {
  let userData = getUserInputs();
  displayCV(userData);
  console.log(userData);
};

const getUserInputs = () => {
  // event listeners for form validation
  firstnameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT, "First Name")
  );
  middlenameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT_EMP, "Middle Name")
  );
  lastnameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT, "Last Name")
  );
  phonenoElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.PHONENO, "Phone Number")
  );
  emailElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.EMAIL, "Email")
  );
  addressElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.ANY, "Address")
  );
  designationElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT, "Designation")
  );

  achievementsTitleElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Title")
    )
  );
  achievementsDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Description")
    )
  );
  expTitleElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Title")
    )
  );
  expOrganizationElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Organization")
    )
  );
  expLocationElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Location")
    )
  );
  expStartDateElem.forEach((item) =>
    item.addEventListener("blur", (e) =>
      validateFormData(e.target, validType.ANY, "End Date")
    )
  );
  expEndDateElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "End Date")
    )
  );
  expDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Description")
    )
  );
  eduSchoolElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "School")
    )
  );
  eduDegreeElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Degree")
    )
  );
  eduCityElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "City")
    )
  );
  eduStartDateElem.forEach((item) =>
    item.addEventListener("blur", (e) =>
      validateFormData(e.target, validType.ANY, "Start Date")
    )
  );
  eduGraduationDateElem.forEach((item) =>
    item.addEventListener("blur", (e) =>
      validateFormData(e.target, validType.ANY, "Graduation Date")
    )
  );
  eduDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Description")
    )
  );
  projTitleElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Title")
    )
  );
  projLinkElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Link")
    )
  );
  projDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Description")
    )
  );
  skillElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "skill")
    )
  );

  return {
    firstname: firstnameElem.value,
    middlename: middlenameElem.value,
    lastname: lastnameElem.value,
    designation: designationElem.value,
    address: addressElem.value,
    email: emailElem.value,
    phoneno: phonenoElem.value,
    summary: summaryElem.value,
    achievements: fetchValues(
      ["achieve_title", "achieve_description"],
      achievementsTitleElem,
      achievementsDescriptionElem
    ),
    experiences: fetchValues(
      [
        "exp_title",
        "exp_organization",
        "exp_location",
        "exp_start_date",
        "exp_end_date",
        "exp_description",
      ],
      expTitleElem,
      expOrganizationElem,
      expLocationElem,
      expStartDateElem,
      expEndDateElem,
      expDescriptionElem
    ),
    educations: fetchValues(
      [
        "edu_school",
        "edu_degree",
        "edu_city",
        "edu_start_date",
        "edu_graduation_date",
        "edu_description",
      ],
      eduSchoolElem,
      eduDegreeElem,
      eduCityElem,
      eduStartDateElem,
      eduGraduationDateElem,
      eduDescriptionElem
    ),
    projects: fetchValues(
      ["proj_title", "proj_link", "proj_description"],
      projTitleElem,
      projLinkElem,
      projDescriptionElem
    ),
    skills: fetchValues(["skill"], skillElem),
  };
};

// first value is for the attributes and second one passes the nodelists
const fetchValues = (attrs, ...nodeLists) => {
  let elemsAttrsCount = nodeLists.length;
  let elemsDataCount = nodeLists[0].length;
  let tempDataArr = [];

  // first loop deals with the no of repeaters value
  for (let i = 0; i < elemsDataCount; i++) {
    let dataObj = {}; // creating an empty object to fill the data
    // second loop fetches the data for each repeaters value or attributes
    for (let j = 0; j < elemsAttrsCount; j++) {
      // setting the key name for the object and fill it with data
      dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
    }
    tempDataArr.push(dataObj);
  }

  return tempDataArr;
};

const displayCV = (userData) => {
  nameDsp.innerHTML =
    userData.firstname + " " + userData.middlename + " " + userData.lastname;
  phonenoDsp.innerHTML = userData.phoneno;
  emailDsp.innerHTML = userData.email;
  addressDsp.innerHTML = userData.address;
  designationDsp.innerHTML = userData.designation;
  summaryDsp.innerHTML = userData.summary;
  showListData(userData.projects, projectsDsp);
  showListData(userData.achievements, achievementsDsp);
  showListData(userData.skills, skillsDsp);
  showListData(userData.educations, educationsDsp);
  showListData(userData.experiences, experiencesDsp);
};

//  show the list data
const showListData = (listData, listContainer) => {
  listContainer.innerHTML = "";
  listData.forEach((listItem) => {
    let itemElem = document.createElement("div");
    itemElem.classList.add("preview-item");

    for (const key in listItem) {
      let subItemElem = document.createElement("span");
      subItemElem.classList.add("preview-item-val");
      subItemElem.innerHTML = `${listItem[key]}`;
      itemElem.appendChild(subItemElem);
    }

    listContainer.appendChild(itemElem);
  });
};

// Validation
function validateFormData(elem, elemType, elemName) {
  // checking for text string and non empty string
  if (elemType == validType.TEXT) {
    if (!strRegex.test(elem.value) || elem.value.trim().length == 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for only text string
  if (elemType == validType.TEXT_EMP) {
    if (!strRegex.test(elem.value)) addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for email
  if (elemType == validType.EMAIL) {
    if (!emailRegex.test(elem.value) || elem.value.trim().length == 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for phone number
  if (elemType == validType.PHONENO) {
    if (!phoneRegex.test(elem.value) || elem.value.trim().length == 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for only empty
  if (elemType == validType.ANY) {
    if (elem.value.trim().length == 0) addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
}

// Validation adding the invalid text
function addErrMsg(formElem, formElemName) {
  formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

// Validation removing the invalid text
function removeErrMsg(formElem) {
  formElem.nextElementSibling.innerHTML = "";
}

function previewImage() {
  let oFReader = new FileReader();
  oFReader.readAsDataURL(imageElem.files[0]);
  oFReader.onload = function (ofEvent) {
    imageDsp.src = ofEvent.target.result;
  };
}

// print CV
function printCV() {
  window.print();
}

const exampleDate = () => {
  const inputElement = document.querySelector('input[name="image"]');
  firstnameElem.value = "Jakub";
  middlenameElem.value = "Oskar ";
  lastnameElem.value = "Kowalski";
  inputElement.click();
  designationElem.value = "Profesor";
  addressElem.value = "Hopefield Street 23";
  emailElem.value = "jakubkowalski@gmail.com";
  phonenoElem.value = "+48 532500231";

  achievementsTitleElem[0].value = "IT Contest";
  achievementsDescriptionElem[0].value = "Winning the IT competition";

  expTitleElem[0].value = "Junior Front-End Developer";
  expOrganizationElem[0].value = "Facebook";
  expLocationElem[0].value = "London";
  expStartDateElem[0].value = "2021-10-01";
  expEndDateElem[0].value = "2022-01-12";
  expDescriptionElem[0].value =
    "I was responsible for developing new user-facing features,  building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.";

  eduSchoolElem[0].value = "London Imperial Collage";
  eduDegreeElem[0].value = "Bachelor of Science";
  eduCityElem[0].value = "London";
  eduStartDateElem[0].value = "Winning the IT competition";
  eduGraduationDateElem[0].value = "Winning the IT competition";
  eduDescriptionElem[0].value = "I have completed course in Computer Science";

  projTitleElem[0].value = "Instagram App";
  projDescriptionElem[0].value =
    "I have created an Instagram clone that mimics the core features and functionalities of the original platform, including user profiles, photo uploads, likes, comments, and the ability to follow other users. ";

  skillElem[0].value = "Winning the IT competition";
  // Wywołanie zdarzenia onkeyup
  var event = new Event("keyup");
  firstnameElem.dispatchEvent(event);

  achievementsTitleElem.dispatchEvent(event);
};
examplebtn.addEventListener("click", exampleDate);
