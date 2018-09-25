const data = [
  {
  name: "N10. VMware Inc.",
  revenue :"US$ 6.035 billion",
  assets : "US$ 15.216 billion",
  equity : "US$ 7.586 billion",
  about: "VMWare US based software company which provide cloud and virtualization software and it was founded by Diane Greene, Scott Devine, Mendel Rosenblum, Edouard Bugnionin and Edward Wang in 1998. It is based in Palo Alto, California. It is the first who Virtualize the x86 architecture. VMWare software run on Microsoft Windows, Linux, and Mac OS X platforms.Market Capitalization of VMware is US$ 35.7 billion.", 
  image: "images/VMware.png"
  },

  {
  name: "N9. Symantec",
  revenue :"US$ 6.676 billion",
  assets : "US$ 13.54 billion",
  equity : "US$ 5.797 billion",
  about: "The company was founded in 1982 by Gary Hendrix. Symantec US based Company Which develop software for security , Storage and Backup purpose and also provide a professional maintenance service to its software Resources and Information.2015 Symantec is divided into two parts one part focus on Security products and another part focus on information managing service software's.", 
  image: "images/Symantec.png"
  },
  {
  name: "N8. Capgemini",
  revenue :"€11.915  billion",
  assets : "US$ €11.45 billion",
  equity : "€11.45 billion",
  about: "Capgemini is a French multinational management consulting corporation headquartered in Paris, France. It is one of the world’s largest consulting, technology and outsourcing companies with 180,000 employees in over 40 countries. It started off as an enterprise management and data processing company. It won the SAP North America Partner Excellence Award 2015 for SAP Platform Solutions. Cap Gemini S.A. is a French multinational management consulting corporation. Market Capitalization of Capgemini is $ 13.8 B", 
  image: "images/Capgemini.png"
  },
  {
  name: "N7. Infosys",
  revenue :"US$ 9.51 billion",
  assets : "US$ 11.378 billion",
  equity : "US$ 9.324 billion",
  about: "Infosys Limited is an Indian multinational corporation that provides business consulting, information technology and outsourcing services. It is headquartered in Bangalore. Infosys is founded by Narayana Murthy, K. Dinesh, Nandan M. Nilekani, S. Gopalakrishnan, Pandit Shrikant and S. D. Shibulal on July 2, 1981. Market Capitalization of Infosys is $40.2 B.",
  image: "images/Infosys.png"
  },
  {
  name: "N6. Cognizant Technology Solutions",
  revenue :"US$ 12.416 billion",
  assets : "US$ 13.065 billion",
  equity : "US$ 9.278 billion",
  about: "Cognizant Technology Solutions Corp is an American multinational corporation that provides custom information technology, consulting, and business process outsourcing services. It is headquartered in College Station, Texas, United States..In September 2014, Cognizant Technology Solutions Corp acquired TriZetto Corp, a healthcare IT services provider, for $2.7 billion. Cognizant Shares, rose nearly 3 percent in pre market trading. Market Capitalization of Cognizent is $38.1 B. ", 
  image: "images/Cognizant.png"
  },
  {
  name: "N5. Tata Consultancy Services(TCS) Limited",
  revenue :"US$ 16.54 billion",
  assets : "US$ 13.76 billion",
  equity : "US$ 11.10 billion",
  about: "TCS is Indian Multinational it Service and consulting company. It is part of tata Group. It is largest it based company in india also In top it service company in the world . TCS is Founded in 1968 . TCS also Have large number of employees around 3.5 is also the largest IT services company based in India by 2014 FY revenues. . It is headquartered in Mumbai, India.", 
  image: "images/Tata.png"
  },
  {
  name: "N4. SAP SE",
  revenue :"€17.56 billion",
  assets : "€38.374 billion",
  equity : "€19.594 billion",
  about: "SAP is German multinational company which make software products to manage business and customer relations. The company has more than 3 lakhs customers around the world . It was founded in 1972 by five IBM engineers and now employs over 74.000 employees. Software represents 83 percent of its business. Market Capitalization of SAP is $90.2 B.", 
  image: "images/SAP.png",
  },
  {
  name: "N3. IBM",
  revenue : "US$ 92.793 billion",
  assets : "US$ 117.53 billion",
  equity : "US$ 118.68 billion",
  about: "International Business Machines Corporation is an American multinational technology and consulting corporation, with corporate headquarters in Armonk, New York IBM is among the top 3 on our list of the biggest software houses. The company was founded by Charles Ranlett Flint way back in 1911 in the New York. It has a strong presence in over 170 countries and over 370,000 people are employed by the organization worldwide. Market Capitalization of IBM is $160.2 B.", 
  image: "images/IBM.png",
  },
  {
  name: "N2.Oracle",
  revenue : "US$ 38.23 billion",
  assets : "US$ 110.90 billion",
  aquity : "US$ 49.10 billion",
  about: "Oracle Corporation is an American multinational computer technology corporation, headquartered in Redwood City, California. In software product the main Product is their Database management system named Oracle DBMS . Oracle is second largest software making company after microsoft. Larry Ellison was the person who founded Oracle Corporation. Market Capitalization of Oracle is $187.6 B.", 
  image: "images/Oracle.png",
  },
  {
  name: "N1. Microsoft Corporation",
  revenue : "US$ 93.27 billion",
  assets : "US$ 176.22 billion",
  equity : "US$ 80.08 billion",
  about: "Yes, you are right, Microsoft Corporation is number one company of world. Microsoft is USA based software company that develops the computer software. most famous software of Microsoft is microsoft windows(operating system) , microsoft office and internet explorer (a web browser). It ranked number 1 it software company by its revenue and most valuable also. you will find most of computer have Microsoft window operating system . It is founded by Bill gates and Paul Allen in 1975. More that 120000 employee worked at Microsoft. Market Capitalization of Microsoft is $340.8 B.", 
  image: "images/Microsoft.png",
  },

];

const profiles = profileIterator(data);

// Call first image
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next image Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Revenue: ${currentProfile.revenue}</li>
        <li class="list-group-item">Assets: ${currentProfile.assets}</li>
        <li class="list-group-item">Equity: ${currentProfile.equity} </li>
        <li class="list-group-item">About: ${currentProfile.about}</li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more image
    window.image.reload();
  }
}

// image Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}