// Replace sample descriptions, documents, and embed URLs with your own work.
window.portfolio = {
 name: 'David Polnick', role: 'CRE Analyst',
 bioTitle: "Bridging Real Estate Experience with Financial Analysis",
 bio: ["I'm a licensed Texas real estate professional with a growing focus on commercial real estate investment analysis, financial modeling, and asset valuation. After building a career that spans education, leadership, and residential real estate, I'm pursuing an opportunity to transition into a commercial real estate analyst role where I can combine my industry experience, analytical abilities, and passion for solving complex financial problems.", "My experience in real estate has given me a practical understanding of property transactions, market dynamics, contract negotiations, and the factors that influence real estate value. To build on that foundation, I've dedicated significant time to developing my technical skills in commercial real estate underwriting, discounted cash flow analysis, investment valuation, and advanced Excel financial modeling.", "Through independent study and hands-on modeling exercises, I've been developing proficiency in evaluating multifamily, industrial, retail, and other commercial investment opportunities. My work focuses on understanding the financial drivers behind investment decisions, including cash flow projections, capitalization rates, debt structures, internal rates of return, and investment risk.", "My goal is to join a commercial real estate investment, acquisitions, asset management, or valuation team where I can contribute meaningful analysis while continuing to develop into a highly skilled industry professional.", "This portfolio showcases my financial modeling projects, underwriting exercises, and investment analyses. It represents both the technical skills I've developed and my commitment to building a long-term career in commercial real estate.", "I bring a combination of real-world real estate experience, a strong work ethic, intellectual curiosity, and a genuine enthusiasm for the analytical side of the industry. I'm eager to put those qualities to work for a team that values precision, collaboration, and continuous professional growth."],
 studies: [
 {id:'multifamily', title:'The multifamily investment thesis', type:'Multifamily', subtitle:'Acquisition underwriting · Value-add strategy', image:'photo-1460317442991-0ec209397118', description:'An illustrative framework for evaluating a multifamily acquisition. The analysis connects in-place operations, renovation assumptions, and financing terms to the potential investment outcome.', question:'Does the operating upside justify the acquisition basis and execution risk?', approach:['Review the rent roll and normalize operating income.','Evaluate renovation costs, lease-up timing, and market rent assumptions.','Test exit cap rates, financing terms, and downside scenarios.'], documents:[], excelEmbedUrl:''},
 {id:'industrial', title:'Behind the industrial opportunity', type:'Industrial', subtitle:'Market research · Lease analysis', image:'photo-1486406146926-c627a92ad1ab', description:'An illustrative industrial investment study examining how lease structure, tenant concentration, and location influence cash flow durability and valuation.', question:'How resilient is the cash flow through the next lease rollover?', approach:['Map lease expiration dates and tenant exposure.','Evaluate location, access, and competitive supply.','Model renewal, downtime, and re-leasing scenarios.'], documents:[], excelEmbedUrl:''},
 {id:'development', title:'From site to investment decision', type:'Development', subtitle:'Feasibility study · Scenario analysis', image:'photo-1448630360428-65456885c650', description:'An illustrative development feasibility study connecting project costs, delivery timing, and stabilized operations to a clear view of risk and potential return.', question:'Which assumptions have the greatest influence on project feasibility?', approach:['Build a transparent development budget and timeline.','Evaluate stabilized income against total project cost.','Stress-test cost overruns, delays, and exit assumptions.'], documents:[], excelEmbedUrl:''}
 ]
};

// Uploaded case study 1 replaces the illustrative multifamily sample.
window.portfolio.studies[0] = {
  "id": "the-foles-i",
  "title": "The Foles I",
  "subtitle": "Direct Cap Analysis",
  "type": "Multifamily",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/the-foles-i/cover.jpg",
  "imageAlt": "Glass residential towers with balconies beneath a blue sky",
  "description": "The Foles I is a direct capitalization underwriting exercise focused on The Foles Tower, a 325-unit Class A multifamily high-rise. The assignment evaluates property value by developing pro forma net operating income, supporting a capitalization rate with comparable sales, and calculating estimated value, price per unit, and price per square foot. The supporting materials and Excel workbook are available below.",
  "question": "What is the indicated value of The Foles Tower using direct capitalization?",
  "approach": [
    "Develop pro forma NOI using offering memorandum financials and management guidance.",
    "Evaluate comparable sales to support the capitalization rate.",
    "Estimate value as NOI divided by the supported capitalization rate.",
    "Calculate price per unit and price per square foot using the relevant area measure."
  ],
  "documents": [
    {
      "name": "Assumptions from Meeting Notes",
      "url": "assets/the-foles-i/document-01.pdf"
    },
    {
      "name": "Broker Pro Forma",
      "url": "assets/the-foles-i/document-02.pdf"
    },
    {
      "name": "Historical Operating Statement",
      "url": "assets/the-foles-i/document-03.pdf"
    },
    {
      "name": "Offering Memorandum — Direct Cap",
      "url": "assets/the-foles-i/document-04.pdf"
    },
    {
      "name": "Rent Roll Summary",
      "url": "assets/the-foles-i/document-05.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQQg3rp2i8u4RKJZTzrNNCsyATrlKMVABSmzf1HGnN4K-tQ?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=GES1&edaebp=&edaebf=res50",
  "workbookUrl": "assets/the-foles-i/direct-cap-analysis.xlsx",
  "disclosure": "Course underwriting exercise — Part 1. The property location is provided in the assignment as Center City, Anycity, USA. This study focuses on direct capitalization; a 10-year DCF is outside its scope. Model outputs are estimates, not realized investment performance."
};

// Uploaded case study 2 replaces the illustrative industrial sample.
window.portfolio.studies[1] = {
  "id": "the-foles-ii",
  "title": "The Foles II",
  "subtitle": "Discounted Cash Flow (DCF)",
  "type": "Multifamily",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/the-foles-ii/cover.jpg",
  "imageAlt": "Glass residential towers with balconies beneath a blue sky",
  "description": "The Foles II extends the initial direct capitalization exercise into a 10-year unlevered discounted cash flow analysis. The assignment evaluates acquisition costs, forecasts income and expenses over the holding period, and estimates sale proceeds using year 11 forward-looking NOI. The model is structured to assess unlevered IRR, equity multiple, and net profit, drawing on the broker materials and team meeting guidance provided in the War Room.",
  "question": "How do projected operating cash flows and exit value inform the unlevered investment returns for The Foles acquisition?",
  "approach": [
    "Calculate total acquisition costs using meeting-note assumptions and prior direct capitalization underwriting, incorporating the instructed capital-reserve adjustment.",
    "Forecast operating income and expenses for years 1–10 and year 11 forward-looking NOI.",
    "Calculate exit value from year 11 NOI and the exit capitalization rate, then deduct selling costs.",
    "Combine acquisition outflow, annual unlevered operating cash flows, and final-year net sale proceeds, excluding debt financing.",
    "Calculate unlevered IRR, equity multiple, and net profit."
  ],
  "documents": [
    {
      "name": "Broker Pro Forma",
      "url": "assets/the-foles-ii/document-01.pdf"
    },
    {
      "name": "Historical Operating Statement",
      "url": "assets/the-foles-ii/document-02.pdf"
    },
    {
      "name": "Offering Memorandum",
      "url": "assets/the-foles-ii/document-03.pdf"
    },
    {
      "name": "Team Meeting Notes",
      "url": "assets/the-foles-ii/document-04.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQRF8Wq0uyX0RJhg5q1F7R-5AfvahaH-citAJKuaWukHj0I?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=GUK1&edaebp=&edaebf=res50",
  "disclosure": "Course underwriting exercise — Part 2. The analysis is intended to exclude financing effects and use year 11 NOI for exit valuation, net of selling costs. Projected returns are estimates, not realized investment performance."
};

// Uploaded case study 3 replaces the remaining illustrative sample.
window.portfolio.studies[2] = {
  "id": "lakefront-industrial-i",
  "title": "Lakefront Industrial I",
  "subtitle": "Hold/Sell Analysis",
  "type": "Industrial",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/lakefront-industrial-i/cover.jpg",
  "imageAlt": "Waterfront brick buildings and a chimney reflected in calm harbor water",
  "description": "Lakefront Industrial I is a hold/sell underwriting exercise for a 366,698-square-foot cross-dock industrial warehouse delivered in 2015. In the course scenario, the property is fully leased to International Exports with six years remaining on the lease and two three-year renewal options. The assignment uses a 10-year unlevered cash flow analysis to compare holding the property with reinvesting sale proceeds in an alternative industrial acquisition. Current value less selling costs establishes the opportunity cost of holding, rather than the historical purchase price.",
  "question": "Should Lakefront Industrial I be held or sold to pursue an alternative industrial investment?",
  "approach": [
    "Establish current market value from the quarterly valuation.",
    "Use current market value less current selling costs as the time-zero opportunity cost of holding.",
    "Forecast income and expenses over 10 years using the supplied DCF assumptions.",
    "Estimate terminal value at the end of year 10 and calculate unlevered hold IRR.",
    "Compare the hold IRR with the alternative investment’s projected 8.12% unlevered IRR to inform a hold/sell recommendation."
  ],
  "documents": [
    {
      "name": "Hold/Sell Analysis Notes",
      "url": "assets/lakefront-industrial-i/document-01.pdf"
    },
    {
      "name": "Investor Brochure",
      "url": "assets/lakefront-industrial-i/document-02.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQQcuYbaSMUPTK1k21tg6BNJAYSMaEy4pNXY0Nk-Ykm_AsU?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS6&edaebp=&edaebf=res50",
  "workbookUrl": "assets/lakefront-industrial-i/hold-sell-analysis.xlsx",
  "disclosure": "Course underwriting exercise. The alternative investment, Smithtown Industrial IV, has a supplied projected unlevered IRR of 8.12%; this is a comparison benchmark, not Lakefront’s calculated return. Property details and assumptions are course-scenario inputs. Projected returns are estimates, not realized investment performance."
};

// Uploaded case study 4.
window.portfolio.studies.push({
  "id": "lakefront-industrial-ii",
  "title": "Lakefront Industrial II",
  "subtitle": "Key Risk/Return Metrics",
  "type": "Industrial",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/lakefront-industrial-ii/cover.jpg",
  "imageAlt": "Waterfront brick buildings and a chimney reflected in calm harbor water",
  "description": "Lakefront Industrial II expands the existing Lakefront Industrial I hold/sell analysis beyond unlevered IRR. The assignment considers additional investment return and operating metrics to inform a decision between retaining the property and selling it to pursue Smithtown Industrial IV. The expanded model includes unlevered equity multiple, annual free and clear return, average rate of return, net profit, annual expense recovery and operating expense ratios, and an income-versus-appreciation breakdown of IRR.",
  "question": "What do additional risk and return metrics reveal about the decision to hold Lakefront Industrial I or pursue an alternative investment?",
  "approach": [
    "Extend the existing hold/sell model rather than build a separate acquisition model.",
    "Calculate unlevered equity multiple, annual free and clear return, average rate of return, and net profit.",
    "Calculate annual expense recovery and operating expense ratios.",
    "Partition IRR between appreciation and income and synthesize the metrics for portfolio-manager review."
  ],
  "documents": [
    {
      "name": "Hold/Sell Analysis Notes",
      "url": "assets/lakefront-industrial-ii/document-01.pdf"
    },
    {
      "name": "Investor Brochure",
      "url": "assets/lakefront-industrial-ii/document-02.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQTF4EBYFjnRTbfAdqgsT1-FAUPJ4MdSugobY5RcLPMx2cw?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS6&edaebp=&edaebf=res50",
  "workbookUrl": "assets/lakefront-industrial-ii/key-metrics.xlsx",
  "disclosure": "Course underwriting exercise, titled “Lakefront Industrial I — Part II” in the assignment. This study extends the prior hold/sell model with additional metrics. The assignment describes initial IRR results as supporting consideration of a sale, with further analysis required before concluding. Projected returns are estimates, not realized investment performance."
});

// Uploaded case study 5.
window.portfolio.studies.push({
  "id": "jellystone-retail",
  "title": "Jellystone Retail",
  "subtitle": "Retail Income Statement Analysis",
  "type": "Retail",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/jellystone-retail/cover.jpg",
  "imageAlt": "Retail storefronts and pedestrians along a city shopping street",
  "hasWarRoom": false,
  "documents": [],
  "description": "Jellystone Retail is a retail income statement analysis exercise that converts a detailed property operating statement into a summary income statement. Using eight months of actual year-to-date data through August, the assignment maps and aggregates operating categories and calculates annualized trailing one-, three-, and six-month income and expenses. These run-rate estimates provide a basis for discussing differences in summarized cash flows in a simulated underwriting interview.",
  "question": "How do the latest one, three, and six months of operations compare on an annualized basis?",
  "approach": [
    "Map and aggregate detailed operating line items into summary retail income statement categories.",
    "Use the latest one, three, and six months of actual data to calculate annualized T1, T3, and T6 income and expenses.",
    "Compare the annualized cash flows and explain differences for the simulated underwriting interview."
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQRXNLQbW9J2SY8pChR2zOGMAW4q94TMbxEcz8RzZ-mjHPU?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=GCL1&edaebp=&edaebf=res50",
  "workbookUrl": "assets/jellystone-retail/income-statement.xlsx",
  "disclosure": "Course financial analysis exercise. T1 is the latest month multiplied by 12; T3 is the latest three months multiplied by 4; T6 is the latest six months multiplied by 2. These figures are annualized run-rate estimates, not full-year actual results. The interview context is part of the assignment scenario."
});

// Uploaded case study 6.
window.portfolio.studies.push({
  "id": "jellystone-apartments",
  "title": "Jellystone Apartments",
  "subtitle": "Multifamily Rent Roll Analysis",
  "type": "Multifamily",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/jellystone-apartments/cover.jpg",
  "imageAlt": "Modern apartment buildings with balconies overlooking a landscaped courtyard",
  "hasWarRoom": false,
  "documents": [],
  "description": "Jellystone Apartments is a multifamily rent roll analysis exercise focused on translating detailed unit-level data into a concise unit mix and rental summary. The assignment groups units by type, calculates average rents using in-place rent for occupied units and market rent for vacant units, measures occupied-unit loss-to-lease, and calculates physical occupancy. The analysis is designed to support discussion of rental assumptions and calculations in a simulated underwriting interview.",
  "question": "What does the rent roll reveal about unit mix, rental income, loss-to-lease, and physical occupancy?",
  "approach": [
    "Group the detailed rent roll by unit type to build a unit mix table.",
    "Calculate average assigned rent by unit type, using in-place rents for occupied units and market rents for vacant units.",
    "Calculate loss-to-lease for occupied units as total market rent less total in-place rent.",
    "Calculate physical occupancy as occupied units divided by total units."
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQRhNisUOo4MQ7QfhhN6_sjnAWzDeIr7PgYN0MLEKrRvg6E?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=GFR1&edaebp=&edaebf=res50",
  "workbookUrl": "assets/jellystone-apartments/rent-roll-analysis.xlsx",
  "disclosure": "Course financial analysis exercise. Average assigned rent includes in-place rent for occupied units and market rent for vacant units; loss-to-lease is calculated for occupied units only. The interview context is part of the course scenario; no completed transaction or realized investment performance is represented."
});

// Uploaded case study 7.
window.portfolio.studies.push({
  "id": "office-park",
  "title": "Office Park",
  "subtitle": "Office Income Statement Analysis",
  "type": "Office",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/office-park/cover.jpg",
  "imageAlt": "Office buildings overlooking a lake with landscaped grounds",
  "hasWarRoom": false,
  "documents": [],
  "description": "Office Park is an office income statement analysis exercise focused on converting a detailed full-year 2019 property operating statement into a concise summary income statement. The assignment applies operating-category mapping and aggregation to organize revenue and expense line items for cash flow review. The completed workbook supports discussion of the summarized operations in a simulated underwriting interview.",
  "question": "How can a detailed office operating statement be organized into a clear summary of annual property cash flows?",
  "approach": [
    "Review the detailed 2019 office property income statement.",
    "Map and aggregate detailed line items into the summary office income statement categories.",
    "Present the summarized cash flows for review and discussion."
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQTYSX8qLTnmSq_xYT-1curhASSMNfiXEVGbyyfOO--q30w?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS11&edaebp=&edaebf=res50",
  "workbookUrl": "assets/office-park/income-statement.xlsx",
  "disclosure": "Course financial analysis exercise. The source operating statement covers the full calendar year ending December 31, 2019; T1, T3, and T6 annualization is outside the assignment scope. The interview context is part of the course scenario."
});

// Uploaded case study 8.
window.portfolio.studies.push({
  "id": "hotel",
  "title": "Hotel",
  "subtitle": "Hotel Income Statement Analysis",
  "type": "Hotel",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/hotel/cover.jpg",
  "imageAlt": "Hotel-style bedroom with a large bed, bedside lighting, and floor-length curtains",
  "documents": [
    {
      "name": "Department Revenue Detail",
      "url": "assets/hotel/document-01.pdf"
    },
    {
      "name": "Expense Detail",
      "url": "assets/hotel/document-02.pdf"
    },
    {
      "name": "Historical Income Statement",
      "url": "assets/hotel/document-03.pdf"
    }
  ],
  "description": "This hotel income statement exercise focuses on completing the header and column fields of a supplied Excel worksheet and interpreting the statement’s inputs and line items. Framed as a simulated underwriting interview assessment, the assignment applies course concepts to hotel financial reporting and prepares the analyst to explain the purpose and meaning of typical hotel income statement components. Department revenue detail, expense detail, and a historical income statement are provided in the War Room.",
  "question": "How do the inputs and line items of a hotel income statement fit together to explain property operations?",
  "approach": [
    "Complete the blank header and column fields in the supplied hotel income statement worksheet.",
    "Apply the hotel income statement concepts covered in the course.",
    "Explain the completed inputs and the purpose and meaning of typical hotel income statement line items."
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQQ-g1jhio6ER6qRY9nQUhC_ATS8EAVp-vZHvs98SdG4x4s?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS15&edaebp=&edaebf=res50",
  "workbookUrl": "assets/hotel/income-statement.xlsx",
  "disclosure": "Course financial analysis exercise. The BBLP underwriting interview is part of the assignment scenario. The summary supplies no numerical financial results; the workbook and supporting materials contain the exercise data."
});

// Uploaded case study 9.
window.portfolio.studies.push({
  "id": "industrial",
  "title": "Industrial",
  "subtitle": "Industrial Income Statement Analysis",
  "type": "Industrial",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/industrial/cover.jpg",
  "imageAlt": "Yellow exterior pipes on an industrial building beneath a blue sky",
  "hasWarRoom": false,
  "documents": [],
  "description": "This industrial income statement exercise summarizes detailed property operations for 2017, 2018, and 2019 and estimates an annual leasing cost reserve. The assignment maps historical income and expenses into summary operating categories, then applies supplied assumptions for renewal probability, market rent, lease term, tenant improvements, and leasing commissions. The workbook supports review of historical cash flows and discussion of the reserve calculation in a simulated underwriting interview.",
  "question": "How do historical industrial property operations and expected leasing costs translate into a clear income statement and annual reserve estimate?",
  "approach": [
    "Map and aggregate detailed 2017–2019 operating line items into summary income statement categories.",
    "Calculate annual leasing cost reserves using the supplied market leasing assumptions and course methodology.",
    "Review historical cash flows and explain the reserve assumptions and supporting calculations."
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQRVHpEQDUScQp97V11nmUobAeG2VeiVWpX9sFyoRE1FVys?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=GUK4&edaebp=&edaebf=res50",
  "workbookUrl": "assets/industrial/income-statement.xlsx",
  "disclosure": "Course financial analysis exercise. Market leasing inputs are supplied assignment assumptions: 70% renewal probability, $4.50/SF market rent, a seven-year typical lease term, new/renewal tenant improvements of $1.50/$0.50 per SF, and new/renewal leasing commissions of 5.0%/2.5%. The interview context is part of the course scenario; no realized investment performance is represented."
});

// Uploaded case study 10.
window.portfolio.studies.push({
  "id": "lakefront-retail-long-term-lease",
  "title": "Lakefront Retail Long Term Lease",
  "subtitle": "Long-Term Lease Analysis",
  "type": "Retail",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/lakefront-retail-long-term-lease/cover.jpg",
  "imageAlt": "Waterfront retail building with illuminated storefronts",
  "documents": [
    {
      "name": "Lakefront Industrial — Hold/Sell Analysis Notes",
      "url": "assets/lakefront-retail-long-term-lease/document-01.pdf"
    },
    {
      "name": "Lakefront Industrial — Investor Brochure",
      "url": "assets/lakefront-retail-long-term-lease/document-02.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQSKrML32Fn-SoLAxvDj51IrAUAL8tnQmizVMou8YRVUyf8?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS11&edaebp=&edaebf=res50",
  "workbookUrl": "assets/lakefront-retail-long-term-lease/long-term-lease.xlsx",
  "description": "Lakefront Retail Center is a 136,775-square-foot grocery-anchored shopping center in Duluth, Minnesota. This course exercise models long-term lease cash flows, including base rent, concessions, reimbursements, and leasing costs. The analysis solves for an indicated acquisition price by discounting operating and reversion cash flows at an 8% unlevered target return, then verifies the result using XIRR. Additional metrics evaluate total investment profit, annual cash flow yields, expense recovery, and the relative contributions of income and reversion.",
  "question": "What acquisition price supports an 8% unlevered target return, and how do lease cash flows shape the investment outcome?",
  "approach": [
    "Forecast base rent, concessions, reimbursements, and leasing costs using rent roll and offering memorandum inputs.",
    "Apply additional assumptions from the prior underwriting exercise.",
    "Discount operating and reversion cash flows at 8% using XNPV and corresponding dates.",
    "Include the indicated purchase price as the initial cash outflow and verify the return using XIRR.",
    "Calculate unlevered equity multiple, average rate of return, and net profit.",
    "Prepare annual free and clear return, expense recovery ratio, and operating expense ratio schedules.",
    "Partition the modeled IRR between income and appreciation."
  ],
  "disclosure": "Course underwriting exercise. Property details and leasing assumptions are supplied scenario inputs. The model uses a 10-year holding period and forward-year NOI for terminal valuation. Investment returns are projected."
});

// Uploaded case study 11.
window.portfolio.studies.push({
  "id": "parcel-32",
  "title": "Parcel 32",
  "subtitle": "Development Cash Flow Analysis",
  "type": "Development",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/parcel-32/cover.jpg",
  "imageAlt": "Graded development site with red earth beneath a blue sky",
  "documents": [
    {
      "name": "Parcel 32 — Project Information",
      "url": "assets/parcel-32/document-01.pdf"
    },
    {
      "name": "Broker Email",
      "url": "assets/parcel-32/document-02.docx"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQQnw3isHq9MRLS68ELrKPKOATI8UJvtXyCyceW-xyUFdAc?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS6&edaebp=&edaebf=res50",
  "workbookUrl": "assets/parcel-32/development-cash-flow.xlsx",
  "description": "Parcel 32 examines a potential office development on a vacant, unentitled parcel in the Miraflores neighborhood of Anytown. The exercise connects acquisition, entitlement, design, construction, lease-up, and exit assumptions in a monthly development cash flow model. The budget draws on supplied project information and construction cost references, while operating projections and terminal proceeds inform the assessment of unlevered project returns and development yield.",
  "question": "How do development costs, timing, leasing assumptions, and terminal value shape the projected returns for Parcel 32?",
  "approach": [
    "Model acquisition, entitlement, design, construction, lease-up, and exit timing.",
    "Build the development budget using the supplied project inputs and construction cost references.",
    "Forecast operating cash flows and terminal proceeds.",
    "Evaluate unlevered project returns and development yield."
  ],
  "disclosure": "Course development underwriting exercise. Project information and cost assumptions are supplied scenario inputs. The model evaluates a prospective office development; returns and exit proceeds are projections."
});

// Uploaded case study 12.
window.portfolio.studies.push({
  "id": "financing-the-foles",
  "title": "Financing the Foles",
  "subtitle": "Debt Financing Analysis",
  "type": "Multifamily",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/financing-the-foles/cover.jpg",
  "imageAlt": "Glass residential towers with balconies beneath a blue sky",
  "documents": [
    {
      "name": "Broker Pro Forma",
      "url": "assets/financing-the-foles/document-01.pdf"
    },
    {
      "name": "Offering Memorandum",
      "url": "assets/financing-the-foles/document-02.pdf"
    },
    {
      "name": "Rent Roll Summary",
      "url": "assets/financing-the-foles/document-03.pdf"
    },
    {
      "name": "Historical Operating Statements — 2019",
      "url": "assets/financing-the-foles/document-04.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQSZCKu1EaaGR6AsR0ivh0V0AWHyz5ncIg_-mzUt4UiwtjE?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS11&edaebp=&edaebf=res50",
  "workbookUrl": "assets/financing-the-foles/financing-the-foles.xlsx",
  "description": "Financing the Foles extends the multifamily acquisition analysis by incorporating bank debt into the investment cash flows. The exercise sizes the maximum loan under loan-to-value, debt service coverage, and debt yield constraints, then models interest-only payments, amortization, and the maturity payoff. Borrowing proceeds, debt service, and loan repayment flow through the DCF to evaluate levered investment returns and year-10 credit metrics.",
  "question": "How much debt can the acquisition support, and how does financing affect equity returns and credit coverage?",
  "approach": [
    "Calculate loan limits under LTV, DSCR, and debt yield constraints and select the lowest permitted amount.",
    "Model interest-only and amortizing debt service and the maturity payoff.",
    "Integrate borrowing, debt service, and loan repayment into levered cash flows.",
    "Calculate levered IRR, equity multiple, net profit, and year-10 DSCR and debt yield."
  ],
  "disclosure": "Course debt underwriting exercise. Lender assumptions and property data are supplied scenario inputs. Returns are projected; debt sizing and coverage metrics reflect the modeled financing terms."
});

// Uploaded case study 13.
window.portfolio.studies.push({
  "id": "frost-and-main",
  "title": "Frost and Main",
  "subtitle": "Partnership Cash Flow Analysis",
  "type": "Mixed-use",
  "label": "COURSE CASE STUDY",
  "imageUrl": "assets/frost-and-main/cover.jpg",
  "imageAlt": "Two people shaking hands across a table",
  "hasWarRoom": false,
  "documents": [],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQTGmx8OQcGaQZEFGjJUJjDpAej4Yi_2GwhNmcv9sKDX-Mk?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS6&edaebp=&edaebf=res50",
  "workbookUrl": "assets/frost-and-main/partnership-returns.xlsx",
  "description": "Frost and Main examines partnership cash flow allocations for a mixed-use development comprising 210 apartments and 40,000 square feet of ground-floor retail. The exercise links property-level levered cash flows through a GP–LP joint venture and a second Co-GP waterfall. Preferred returns, capital contributions, return of capital, and promote tiers shape the distributions to each partner, with a focus on the projected returns to Frost and Main Investors, LLC.",
  "question": "How does a double-promote partnership structure translate property cash flows into investor-level returns?",
  "approach": [
    "Link property-level net levered cash flows to the GP–LP waterfall.",
    "Apply contribution, preferred return, return of capital, and promote provisions to allocate GP and LP cash flows.",
    "Feed the GP cash flows into the Co-GP waterfall.",
    "Calculate Frost and Main Investors’ projected IRR and equity multiple and reconcile distributions across both tiers."
  ],
  "disclosure": "Course partnership waterfall modeling exercise. Property details, financing, and partnership terms are supplied scenario inputs. Partner-level returns reflect the modeled distribution structure and are projections."
});

// Case studies 14–16 are featured capstone projects.
window.portfolio.capstoneStudyNumbers = [14, 15, 16];

// Featured capstone 14.
window.portfolio.studies.push({
  "id": "bronze-gym",
  "title": "Bronze Gym",
  "subtitle": "Single-Tenant Acquisition Analysis",
  "sequence": 14,
  "capstone": true,
  "type": "Retail",
  "label": "CAPSTONE PROJECT",
  "imageUrl": "assets/bronze-gym/cover.jpg",
  "imageAlt": "Black-and-white gym interior with treadmills, weight equipment, and large windows",
  "documents": [
    {
      "name": "Financial Projections",
      "url": "assets/bronze-gym/document-01.pdf"
    },
    {
      "name": "Offering Memorandum",
      "url": "assets/bronze-gym/document-02.pdf"
    },
    {
      "name": "Rent Roll",
      "url": "assets/bronze-gym/document-03.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQRUXbmWioDDSqVLkC99YrZ6AdYFP0VlTOr1mhbIHCscxU0?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS11&edaebp=&edaebf=res50",
  "workbookUrl": "assets/bronze-gym/single-tenant-acquisition.xlsx",
  "description": "Bronze Gym is a single-tenant retail acquisition capstone for 10000 Fitness Way, a property leased to a fitness operator under an absolute NNN lease. The model connects acquisition assumptions, annual lease cash flows, financing, terminal valuation, and a two-tier GP/LP waterfall. The analysis evaluates property-level returns, debt coverage, and partner-level distributions over a 10-year holding period.",
  "question": "How do lease income, financing, terminal value, and partnership terms combine to determine investment returns?",
  "approach": [
    "Model acquisition costs, annual lease income, concessions, reimbursements, and expenses over a 10-year hold.",
    "Estimate terminal value using forward-year NOI, a leasing adjustment, and selling costs.",
    "Integrate interest-only and amortizing debt, financing fees, and loan payoff.",
    "Allocate equity cash flows through an 8% LP hurdle and a two-tier promote waterfall.",
    "Summarize property-level returns, lender coverage, and GP/LP outcomes."
  ],
  "disclosure": "Acquisition capstone exercise. Property, tenant, and financing assumptions are supplied scenario inputs. Investment and partnership returns are projected."
});

// Featured capstone 15.
window.portfolio.studies.push({
  "id": "sixteen-17th-street",
  "title": "Sixteen 17th Street",
  "subtitle": "Development Model",
  "sequence": 15,
  "capstone": true,
  "type": "Development",
  "label": "CAPSTONE PROJECT",
  "imageUrl": "assets/sixteen-17th-street/cover.jpg",
  "imageAlt": "Bright office interior with desks, monitors, and meeting rooms",
  "documents": [
    {
      "name": "Architectural Fees",
      "url": "assets/sixteen-17th-street/document-01.pdf"
    },
    {
      "name": "Offering Memorandum",
      "url": "assets/sixteen-17th-street/document-02.pdf"
    },
    {
      "name": "Square Footage Details",
      "url": "assets/sixteen-17th-street/document-03.pdf"
    },
    {
      "name": "Project Notes",
      "url": "assets/sixteen-17th-street/document-04.pdf"
    },
    {
      "name": "Chatham US Forward Curves",
      "url": "assets/sixteen-17th-street/document-05.xlsx"
    },
    {
      "name": "Office Land Sales Comparables",
      "url": "assets/sixteen-17th-street/document-06.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQSUTrXu4kygTLgneXuaOtPrAQIXFEoXvSRwsq8tI_Tdh54?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS6&edaebp=&edaebf=res50",
  "workbookUrl": "assets/sixteen-17th-street/development-model.xlsx",
  "description": "Sixteen 17th Street is an office development capstone centered on a fully entitled site in the Miraflores neighborhood of Anytown, near the central business district. The underwriting model links development timing, project area, budget, leasing, operating projections, and financing to evaluate unlevered and levered project outcomes. Broker materials, project notes, comparable land sales, and interest-rate forward curves support the modeled assumptions.",
  "question": "How do development costs, lease-up timing, and financing shape the feasibility and projected returns of Sixteen 17th Street?",
  "approach": [
    "Review broker materials and colleague assumptions to define the office development scenario.",
    "Model acquisition, design, construction, occupancy, and exit timing.",
    "Link project area, development budget, operating projections, and financing cash flows.",
    "Evaluate unlevered and levered returns and reconcile project sources and uses."
  ],
  "disclosure": "Development capstone exercise. Project details, budget, leasing, and financing assumptions are supplied scenario inputs. Returns, profit, and exit values are projections."
});

// Featured capstone 16.
window.portfolio.studies.push({
  "id": "multifamily-value-add",
  "title": "Multifamily Value Add",
  "subtitle": "Value-Add Acquisition Analysis",
  "sequence": 16,
  "capstone": true,
  "type": "Multifamily",
  "label": "CAPSTONE PROJECT",
  "imageUrl": "assets/multifamily-value-add/cover.jpg",
  "imageAlt": "Older apartment building with balconies and exterior corridors",
  "documents": [
    {
      "name": "REPE Technical Interview Test",
      "url": "assets/multifamily-value-add/technical-interview-test.pdf"
    }
  ],
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQSwcQ-ZdSYYQZaqOipTSQJJAXNS3wG8z8ted-XDxJceYNs?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS11&edaebp=&edaebf=res50",
  "workbookUrl": "assets/multifamily-value-add/value-add-model.xlsx",
  "description": "This multifamily value-add capstone models the acquisition and renovation of a 240-unit apartment property. The analysis connects phased renovations and rent premiums with operating cash flows, senior and mezzanine financing, and eventual disposition. Property-level returns flow into a GP/LP partnership waterfall to evaluate the allocation of cash flows and the effect of the promote structure on investor outcomes.",
  "question": "How do renovation execution, operating improvements, leverage, and partnership terms shape a multifamily value-add investment?",
  "approach": [
    "Model acquisition and phased apartment renovation costs and rent premiums.",
    "Forecast rental income, downtime, operating expenses, and stabilized NOI.",
    "Integrate senior and mezzanine financing and disposition cash flows.",
    "Evaluate property-level and GP/LP partnership returns under the modeled promote structure."
  ],
  "disclosure": "Value-add modeling capstone. The technical interview and investment firm context are part of the course scenario. Property, renovation, and financing assumptions are supplied exercise inputs; investment and partner returns are projections."
});

window.portfolio.calculators = {
  "title": "Calculators",
  "sheets": [
    "Amortization",
    "Draw Schedule Circular Ref.",
    "Custom Formulas",
    "Dynamic Steady Growth",
    "Bell-Curve Calculator",
    "Loan Payoff Calculator",
    "Partitioning IRR and EMx",
    "Promote Calculator",
    "Straight Line Formulas"
  ],
  "imageUrl": "assets/calculators/cover.jpg",
  "imageAlt": "Scientific calculator and pen resting on handwritten calculations",
  "workbookUrl": "assets/calculators/calculators.xlsx",
  "excelEmbedUrl": "https://1drv.ms/x/c/bf262fc105179c19/IQSL62AQWciYTZznXgbFJkuqAQ4EnhjAFn_K4-_v4aEN6DI?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&waccluster=PUS6&edaebp=&edaebf=res50"
};

window.portfolio.waterfalls = [
  {
    "title": "Waterfall Model 1",
    "imageUrl": "https://images.unsplash.com/photo-1681855862736-219f60468f23?auto=format&fit=crop&w=1000&q=85",
    "imageAlt": "Tall waterfall dropping into a river through green grasslands",
    "imageSource": "https://unsplash.com/photos/a-beautiful-waterfall-flows-into-a-river-KI3bEzNoAUs",
    "photographer": "Colin Watts"
  },
  {
    "title": "Waterfall Model 2",
    "imageUrl": "https://images.unsplash.com/photo-1543365244-798a705447a0?auto=format&fit=crop&w=1000&q=85",
    "imageAlt": "Powerful waterfall cascading over rugged moss-covered cliffs",
    "imageSource": "https://unsplash.com/photos/waterfalls-during-daytime-KJx148e1NR8",
    "photographer": "Adri Ramdeane"
  },
  {
    "title": "Waterfall Model 3",
    "imageUrl": "https://images.unsplash.com/photo-1637090404371-e04d03de9be5?auto=format&fit=crop&w=1000&q=85",
    "imageAlt": "Icelandic waterfall flowing between green cliffs into a rocky river",
    "imageSource": "https://unsplash.com/photos/0gfZGjkuBbs",
    "photographer": "Daniel Seßler"
  }
];
