/* TOUR DATA — one record per stop. Every record uses the same fields.
   Stops: three Philadelphia landmarks. Coordinates and facts came from the sources listed
   in each record and MUST be re-checked by you before you submit (see README). */
const PLACES = [
  {
    name: "Independence Hall",
    history: "Work on the building started in 1732 from plans by Edmund Woolley, and the clock tower you see today replaced an older bell tower in the 1820s. During the Revolution the British occupied Philadelphia in September 1777 and the Continental Congress had to leave. In 1787 the Constitutional Convention kept the windows shut through a hot summer so its debates stayed secret. In the 1790s the building served as part of the capital's government buildings, with Congress meeting next door in Congress Hall.",
    lon: -75.150023, lat: 39.948874,
    description: "The Pennsylvania State House, built in the 1730s and 1740s. The Declaration of Independence was adopted here in 1776, and the U.S. Constitution was drafted in the same building in 1787.",
    photo: "", photoAlt: "",
    source: "Coordinates: Philadelphia Architects and Buildings (philadelphiabuildings.org, Google Maps point). History: Wikipedia, 'Independence Hall'",
    checked: "2026-10-05"
  },
  {
    name: "Liberty Bell Center",
    history: "The bell was ordered from the London firm Lester and Pack, now the Whitechapel Bell Foundry, and it cracked when first rung in Philadelphia. Pass and Stow recast it twice. It once hung in the Independence Hall tower and was used to call lawmakers to meetings and announce public proclamations. Abolitionists in the 1830s began calling it the Liberty Bell, and its exhibits now cover its use by abolitionists and civil rights advocates.",
    lon: -75.1503, lat: 39.9496,
    description: "Home of the Liberty Bell since 2003. The bell was cast in London in 1752, cracked, and was recast twice in Philadelphia by John Pass and John Stow. Abolitionists later made it a symbol of liberty. Admission is free.",
    photo: "", photoAlt: "",
    source: "Coordinates: latlong.net and whereig.com (approximate, 4 decimals). Address, hours, free admission: nps.gov/inde/planyourvisit/libertybellcenter.htm",
    checked: "2026-10-05"
  },
  {
    name: "Eastern State Penitentiary",
    history: "The prison was built to carry out the Pennsylvania System: separate confinement, reflection, and training in a trade. Officials from Europe and the United States came to study it, and about 300 prisons around the world drew on Haviland's design. The state abandoned the system in 1913 and ran the site as a shared-cell prison for 57 more years. Philadelphia bought it in 1970, and after a preservation campaign it began offering tours in 1994.",
    lon: -75.1725, lat: 39.9683,
    description: "Designed by John Haviland and opened in 1829, this prison held each inmate in solitary confinement to encourage reflection. Its design influenced prisons worldwide. It closed in 1971 and is now a museum.",
    photo: "", photoAlt: "",
    source: "Coordinates and dates: Wikipedia, 'Eastern State Penitentiary' (39°58′06″N 75°10′21″W). Site history: easternstate.org",
    checked: "2026-10-05"
  },
  {
    name: "Elfreth's Alley",
    history: "The lane began as a cart path, and it was opened between 1702 and 1704 by two neighbors, Arthur Wells and John Gilbert. It was not commonly called Elfreth's Alley until about 1750, after the blacksmith Jeremiah Elfreth. Carpenters, printers, and other craftspeople lived here. Factories eventually surrounded the street, and the Elfreth's Alley Association formed in 1934 to preserve it. A museum in two of the houses shows the home of a pair of 18th-century dressmakers.",
    lon: -75.1425, lat: 39.9528,
    description: "A narrow cobblestone lane of 32 row houses in Old City, often called the nation's oldest continuously inhabited residential street. Remember that people live in these homes.",
    photo: "", photoAlt: "",
    source: "Coordinates and history: Wikipedia, 'Elfreth's Alley' (39.9528, -75.1425). Cross-check: ushistory.org and the Elfreth's Alley Association",
    checked: "2026-10-05"
  },
  {
    name: "Reading Terminal Market",
    history: "The Reading Railroad built a train depot and headquarters at 12th and Market Streets in the early 1890s. The market opened beneath the train shed. Sources give different dates: the market itself is often dated to 1893, while one planning source says it opened in February 1892 and the station in January 1893. The market came under threat in the 1970s but survived, and a nonprofit corporation formed in 1994 to manage it. Amish merchants from Lancaster County are among its best-known vendors.",
    lon: -75.15944, lat: 39.9526,
    description: "One of the nation's oldest and largest public markets, with more than 80 merchants. The point on the map marks the Reading Terminal headhouse at 12th and Market, and the market sits just behind it to the north at 51 N. 12th Street.",
    photo: "", photoAlt: "",
    source: "Coordinates: Wikipedia, 'Reading Terminal' (39.9526139, -75.15944). Address and merchants: visitphilly.com. Dates: planning.org Great Places",
    checked: "2026-10-05"
  },
  {
    name: "Philadelphia City Hall",
    history: "Penn Square, now home to City Hall, was set aside for public buildings in William Penn's original plan. Construction ran from 1872 to 1901 on a design by John McArthur Jr. in the Second Empire style. The Scottish-born sculptor Alexander Milne Calder spent roughly two decades on the building's sculpture, including the 37-foot, 27-ton bronze statue of Penn. For decades builders honored a gentlemen's agreement not to rise above Penn's hat, until One Liberty Place passed it in the 1980s.",
    lon: -75.1635972, lat: 39.9523944,
    description: "The seat of Philadelphia's city government and the largest municipal building in the United States. With the William Penn statue on top, the tower reaches 548 feet.",
    photo: "", photoAlt: "",
    source: "Coordinates and height: Wikipedia, 'Philadelphia City Hall'. Construction dates and statue: ASCE landmark page (asce.org) and HSP (hsp.org)",
    checked: "2026-10-05"
  },
  {
    name: "Philadelphia Museum of Art",
    history: "The museum was chartered in 1876 during the Centennial Exposition, which marked 100 years since the Declaration of Independence, and it opened to the public in 1877 in Memorial Hall. Its current Greek Revival building on the Parkway opened in 1928, and the whole collection moved there in 1956. The front steps became world famous through the 1976 film Rocky, and a bronze statue of the character now stands near the foot of the steps.",
    lon: -75.181, lat: 39.966,
    description: "A major art museum at the northwest end of the Benjamin Franklin Parkway, with a collection of more than 240,000 objects. Visitors still run up the steps made famous by Rocky.",
    photo: "", photoAlt: "",
    source: "Coordinates and collection size: Wikipedia, 'Philadelphia Museum of Art' (39.966, -75.181). History: Britannica, 'Philadelphia Museum of Art'",
    checked: "2026-10-05"
  }

  /* MISSING-DATA EXERCISE: on a copy, delete this line and the END line below, then reload.
  ,{
    name: "Unverified Stop",
    lon: null, lat: 39.9500,
    description: "Coordinates not verified yet.",
    photo: "", photoAlt: "",
    source: "", checked: ""
  }
  END OF EXERCISE */
];
if (typeof module !== 'undefined') module.exports = PLACES;
