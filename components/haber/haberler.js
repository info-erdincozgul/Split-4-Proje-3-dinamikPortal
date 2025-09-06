// Haberleri üretmek için aşağıdaki data objesini kullanacağız. Önce inceleyin sonra 43. satıra geçin.
document.addEventListener("DOMContentLoaded", function() {
const data = [
  {
    baslik: "Workintech is training young people to produce technology",
    tarih: "11 November 2022",
    ilkParagraf:
      "Workintech, which trains university students with no prior software knowledge to be ready for the world's best companies in 6 months, will bring 5,000 software developers to the sector in 3 years. Students will pay the course fee after they are employed.",
    ikinciParagraf:
      "Workintech provides training to young people for 6 months, from 9 a.m. to 6 p.m., bringing them to a level where they can be employed. Students do not pay tuition during the training and start paying after they get a job. If a student cannot find a job within 12 months, no course fee is charged. Software developers can work from anywhere with a computer and internet, and they can work for foreign companies while living in Turkey and earn foreign currency.",
    ucuncuParagraf:
      "In Turkey, a new graduate software developer earns between 15,000 and 30,000 TL. As experience is gained in this field, salaries increase. According to Tuğrul Türkkan, the sector that currently needs the most software developers is banking. The finance sector employs software developers for an average salary of 22,000 to 25,000 TL. This is followed by the telecom, e-commerce, and gaming sectors. Tuğrul Türkkan, who stated that they also help young people who finish the course find jobs, said: “As soon as these kids finish the course, we recommend them to our business partners. We train young people on everything from how to prepare for interviews, how to look for a job, and even how to negotiate their salary.”",
  },
  {
    baslik: "Bosch starts production of much more efficient 800V motors!",
    tarih: "10 October 2023",
    ilkParagraf:
      "The German technology giant Bosch has announced that it has started producing a new generation of electric motors and inverters. Thanks to the use of silicon carbide chips, the company has significantly increased efficiency compared to older generation 400V solutions and may supply this motor to the next generation of Togg vehicles.",
    ikinciParagraf:
      "Bosch, which stated that it uses a new copper winding design inside the motor and thus increases power density by 35%, achieving the same horsepower and torque with a lighter motor, has reduced heating-related losses by 50% on the inverter side, increasing efficiency to nearly 99%.",
    ucuncuParagraf:
      "It is clear that the transition to 800V architecture in electric vehicles is inevitable. The 800V architecture, which reduces vehicle weight with a lighter motor, inverter, and high-voltage cabling, greatly contributes to range by increasing efficiency in power electronics. Moreover, it makes it possible for DC charging speed to exceed 400 kW.",
  },
  {
    baslik: "Apple Vision Pro will treat people's mental health",
    tarih: "9 November 2022",
    ilkParagraf:
      "Apple aims to cure people's mental illnesses with its mixed-reality headset, Vision Pro. It was noted that it would measure users' facial expressions, feelings, and emotions with the help of sensors and cameras and could treat users' depression and anxiety.",
    ikinciParagraf:
      "The technology is also reported to be able to measure changes in weight and pupil dilation and to evaluate users' movements as a tool to potentially detect signs of Parkinson's disease. It is stated that Vision Pro can display images and sounds on a built-in screen to alleviate users' stress, depression, or anxiety to treat these conditions. Although the headset is designed as an entertainment device, its potential use to address mental illness is not Apple's first foray into the field of mental health. The tech giant introduced mental health features in its Health app in June, allowing iPhone, iPad, and Apple Watch users to track their moods and monitor their mental well-being as well as their physical activities.",
    ucuncuParagraf:
      "According to the Centers for Disease Control and Prevention, one in five people in the US struggles with mental illness. Approximately one in 25 US adults lives with a serious mental illness, such as bipolar disorder, major depression, or schizophrenia.",
  },
  {
    baslik: "Adobe backs out of $20 billion Figma acquisition",
    tarih: "18 November 2023",
    ilkParagraf:
      "Adobe has announced it has abandoned its plan to acquire Figma for $20 billion after the companies determined there was no clear path to obtaining approval from UK and European Union regulators. Adobe will pay the previously agreed-upon $1 billion termination fee to collaborative design platform Figma.",
    ikinciParagraf:
      "In November, the UK's Competition and Markets Authority (CMA) and the European Commission raised concerns about the impact of the proposed acquisition on competition. In its interim findings, the CMA stated that the merger would “eliminate competition” between the two main rivals. The commission said it was considering blocking the deal or requiring Adobe to sell Figma's core product, Figma Design, along with Adobe XD.",
    ucuncuParagraf:
      "Today, Adobe stated that it could not offer any potential solutions to the CMA. An Adobe spokesperson told Bloomberg, “It's clear that no realistic solution would meet the CMA's ongoing concerns.” The European Commission also said the merger could reduce competition and announced it would make a final decision on the merger by February 5th. Adobe had stated its willingness to offer possible solutions to appease European regulators, but it appears that is no longer the case. Adobe Chairman and CEO Shantanu Narayen said in a statement, “Adobe and Figma strongly disagree with the regulatory findings, but we believe it is in our best interest to proceed independently.”",
  },
];

function HaberYapici(haber) {
  const div = document.createElement("div");
  div.classList.add("article");

  const h2 = document.createElement("h2");
  h2.textContent = haber.baslik;
  div.appendChild(h2);

  const p = document.createElement("p");
  p.classList.add("tarih");
  p.textContent = haber.tarih;
  div.appendChild(p);

  const p1 = document.createElement("p");
  p1.textContent = haber.ilkParagraf;
  div.appendChild(p1);
  const p2 = document.createElement("p");
  p2.textContent = haber.ikinciParagraf;
  div.appendChild(p2);
  const p3 = document.createElement("p");
  p3.textContent = haber.ucuncuParagraf;
  div.appendChild(p3);

  const button = document.createElement("button");
  button.classList.add("expandButton");
  button.textContent = "+";
  div.appendChild(button);
  button.addEventListener("click", (event) => {
    event.currentTarget.parentElement.classList.toggle("article-open");
  });

  return div;
}

data.forEach((element) => {
  document.querySelector("div.articles").appendChild(HaberYapici(element));
});
});


