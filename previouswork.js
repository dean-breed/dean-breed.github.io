const projs = [
    {
        id: "tracker",
        filename: "tracker.jpg",
        filedesc: "A stacked bar chart showing aid financing by organisation type and year with various selectors at the top to change the graph.",
        projtitle: "Tracking aid and other international development finance in near real time",
        projshorttitle: "Tracker",
        projghshorttitle: "Repository",
        projdates: "November 2020 - December 2022",
        projdesc: "Dashboard to visualise changes to aid financing over time from a overall, sector and poverty view",
        link: "https://devinit.org/data/tracking-aid-international-development-real-time/?nav=header",
        linkgh: "https://github.com/devinit/aid-tracker-interactive"
    },
    {
        id: "gnr-cnp",
        filename: "cnp.jpg",
        projtitle: "Global Nutrition Report - Country Nutrition Profiles",
        projshorttitle: "Country Nutrition Profiles",
        projghshorttitle: "Not publicly available",
        projdates: "November 2019 - December 2021",
        projdesc: "Interactive profiles showing data disaggregated by country on various nutrition metrics",
        link: "https://globalnutritionreport.org/resources/nutrition-profiles/",
        linkgh: ""
    }
]

document.querySelector('.projs').innerHTML = projs.map(proj => {
  if (proj.linkgh===""){
    return `
      <div class="row">
            <div class="col-md-12" style="background-color:#a1d8f1;">
              <p class="titling">${proj.projtitle}</p>
            </div>
            <div class="col-md-8" style="background-color:#a1d8f1;padding-bottom: 1em;">
              <div class = "intro-text">
                
                <img class = "projectimage" src=${proj.filename} alt=${proj.filedesc}>
              </div>
            </div>
            <div class="col-md-4" style="background-color:#a1d8f1; margin-right: 0px;">
              <div class = "intro-text">
                <p>${proj.projdates}</p>
                <p>${proj.projdesc}</p>
                <div class="fa fa-external-link icon"></div>
                <a class = "linkage" href=${proj.link} target="_blank">${proj.projshorttitle}</a><br>
                <div class="fa fa-github-square icon"></div>
                <a class = "linkage" target="_blank">${proj.projghshorttitle}</a><p></p>
            </div>
          </div>
      </div>
    `
  } else {return `      
  <div class="row">
  <div class="col-md-12" style="background-color:#a1d8f1;">
    <p class="titling">${proj.projtitle}</p>
  </div>
  <div class="col-md-8" style="background-color:#a1d8f1;padding-bottom: 1em;">
    <div class = "intro-text">
      
      <img class = "projectimage" src=${proj.filename} alt=${proj.filedesc}>
    </div>
  </div>
  <div class="col-md-4" style="background-color:#a1d8f1; margin-right: 0px;">
    <div class = "intro-text">
      <p>${proj.projdates}</p>
      <p>${proj.projdesc}</p>
      <div class="fa fa-external-link icon"></div>
      <a class = "linkage" href=${proj.link} target="_blank">${proj.projshorttitle}</a><br>
      <div class="fa fa-github-square icon"></div>
      <a class = "linkage" href=${proj.linkgh} target="_blank">${proj.projghshorttitle}</a><p></p>
  </div>
</div>
</div>
  `}
  }).join("")