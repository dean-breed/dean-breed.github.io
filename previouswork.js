const projs = [
    {
      id: "breathe",
      filename: "breathe.jpg",
      filedesc: "An infographic showing the economic impact of meeting the updated WHO Road Map for human-made air pollution",
      projtitle: "Breathing Life into Cities: The Health and Economic Opportunities of Action for Clean Air",
      projshorttitle: "Report",
      projghshorttitle: "Not publicly available",
      projdates: "January 2025 - March 2025",
      projdesc: "An analysis of the clean air benefits delivered by a selection of 63 diverse cities, spanning 21 countries and five continents, with a population of more than 450 million people under the updated World Health Organization Road Map",
      link: "https://breathecities.org/health-economic-benefits-cities-clean-air/",
      linkgh: ""
    },
    {
      id: "mind",
      filename: "mind.jpg",
      filedesc: "A bar chart showing the total number of admissions to mental hopsitals by country income group",
      projtitle: "Out of sight, out of mind: The human rights case for ending institutionalisation in mental healthcare",
      projshorttitle: "Report",
      projghshorttitle: "Not publicly available",
      projdates: "September 2024 - December 2024",
      projdesc: "A report covering what institutions are, the people facing institutionalisation as well as what impact it has on them and their caregivers, including mental health professionals.",
      link: "https://unitedgmh.org/app/uploads/2025/07/Out-of-sight-out-of-mind-1.pdf",
      linkgh: ""
    },
    {
      id: "paf2",
      filename: "paf2.jpg",
      filedesc: "A combined bar and line chart showing the international development financing for PAF as a proportion of total crisis financing between 2017 and 2022",
      projtitle: "State of Pre-arranged Financing for Disasters 2024",
      projshorttitle: "Report",
      projghshorttitle: "Not publicly available",
      projdates: "February 2024 - August 2024",
      projdesc: "A report on the level of effort of international development donors to support a shift towards arranging financing for disasters, before shocks happen.",
      link: "https://www.disasterprotection.org/publications-centre/the-state-of-pre-arranged-financing-for-disasters-2024",
      linkgh: ""
    },
    {
      id: "gatc",
      filename: "gatc.jpg",
      filedesc: "A sunburst chart showing development assistance for NCDs by donor 2018 and 2021",
      projtitle: "Tracking NCD funding flows: Urgent calls and global solutions",
      projshorttitle: "Report",
      projghshorttitle: "Not publicly available",
      projdates: "September 2023 - June 2024",
      projdesc: "A report focusing on flows towards NCD policies and services, as well as the risk factors of tobacco and alcohol, reported to the OECD DAC CRS between 2018 and 2021.",
      link: "https://ncdalliance.org/resources/tracking-ncd-funding-flows-urgent-calls-and-global-solutions",
      linkgh: ""
    },
    {
      id: "landscape",
      filename: "landscape.jpg",
      filedesc: "A bar chart showing development assistance for mental health (DAMH) as a proportion of development assistance for health (DAH) from the top development actors between 2012 and 2021",
      projtitle: "Financing of mental health: the current situation and ways forward",
      projshorttitle: "Report",
      projghshorttitle: "Not publicly available",
      projdates: "June 2023 - October 2023",
      projdesc: "A comprehensive landscape analysis of global mental health finance that underscores the critical need for immediate and sustained investment in mental health worldwide in order to realise mental health as a universal human right.",
      link: "https://unitedgmh.org/knowledge-hub/financing-mental-health-current-status-and-future-prospects/?utm_campaign=Finance-Brief-2023&utm_medium=social&utm_source=United-LI-page",
      linkgh: ""
    },
    {
      id: "paf",
      filename: "paf.jpg",
      filedesc: "A bar chart showing the comparison between pre-arranged financing (PAF) volumes reported to the OECD DAC CRS and IATI in 2021 by major donors",
      projtitle: "State of Pre-arranged Financing for Disasters 2023. Improving data reporting: Near real-time tracking",
      projshorttitle: "Report",
      projghshorttitle: "Not publicly available",
      projdates: "March 2023 - November 2023",
      projdesc: "A report collating the best available data to start to assess and monitor annually the state of pre-arranged financing supported with international development financing in low-and middle-income countries.",
      link: "https://www.disasterprotection.org/publications-centre/the-state-of-pre-arranged-financing-for-disasters-2023",
      linkgh: ""
    },
    {
        id: "countdown",
        filename: "countdown.jpg",
        filedesc: "A scatter chart showing wellbeing scores and their relationship with GDP per capita.",
        projtitle: "Analysis and visualisation of indicator framework data for Countdown Global Mental Health 2030: Making Mental Health Count",
        projshorttitle: "Report",
        projghshorttitle: "Not publicly available",
        projdates: "December 2022 - February 2023",
        projdesc: "Analytical report on the relationship between different drivers of mental health problems",
        link: "https://unitedgmh.org/app/uploads/2023/02/Countdown-Mental-Health-Report-2030-FINAL.pdf",
        linkgh: ""
    },
    {
        id: "tracker",
        filename: "tracker.jpg",
        filedesc: "A stacked bar chart showing aid financing by organisation type and year with various selectors at the top to change the graph.",
        projtitle: "Tracking aid and other international development finance in near real time",
        projshorttitle: "Tracker",
        projghshorttitle: "Repository",
        projdates: "November 2020 - December 2022",
        projdesc: "Dashboard to visualise changes to aid financing over time from an overall, sector and poverty view",
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
    },
    {
      id: "covid",
      filename: "covid.jpg",
      projtitle: "How are aid budgets changing due to the Covid-19 crisis?",
      projshorttitle: "Factsheet",
      projghshorttitle: "Not publicly available",
      projdates: "July 2020",
      projdesc: "Analytical factsheet of budget changes early during the COVID pandemic",
      link: "https://devinit.org/resources/how-are-aid-budgets-changing-due-covid-19-crisis/",
      linkgh: ""
    },
    {
      id: "ukaid",
      filename: "ukaid.jpg",
      projtitle: "Cuts to the UK 2020 aid budget: What IATI data tells us",
      projshorttitle: "Briefing",
      projghshorttitle: "Not publicly available",
      projdates: "February 2021",
      projdesc: "Briefing on cuts to the UK 2020 aid budget using IATI data",
      link: "https://devinit.org/resources/cuts-uk-2020-aid-budget-iati-data/",
      linkgh: ""
    },
    {
      id: "disabilityaid",
      filename: "disabilityaid.jpg",
      projtitle: "Key trends in aid targeting persons with intellectual disabilities",
      projshorttitle: "Blog",
      projghshorttitle: "Not publicly available",
      projdates: "October 2020",
      projdesc: "Blog outlining three key trends in how ODA is targeting persons with intellectual disabilities",
      link: "https://devinit.org/blog/key-trends-aid-targeting-persons-intellectual-disabilities/",
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