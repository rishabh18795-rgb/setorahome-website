export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Short label for nav, chips and the marquee. */
  shortName: string;
  /** Approved "starting from" price in INR. */
  startingPrice: number;
  image: string;
  imageAlt: string;
  /** One-line card description. */
  summary: string;
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  /** Page intro paragraph(s). */
  intro: string[];
  included: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  /** What changes the final quotation. */
  priceFactors: string[];
  /** Optional safety / scope note shown prominently. */
  note?: string;
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "home-shifting-relocation",
    name: "Home Shifting & Relocation",
    shortName: "Home Shifting",
    startingPrice: 1199,
    image: "/images/services/home-shifting-relocation.webp",
    imageAlt:
      "SetoraHome team members carrying a plastic-wrapped sofa and packed cartons into a moving truck outside a home",
    summary:
      "Packing, loading, local transport, unloading and help setting up your new home in Varanasi.",
    metaTitle: "Home Shifting & Packers Movers in Varanasi",
    metaDescription:
      "Local home shifting in Varanasi by SetoraHome: packing, loading, unloading, unpacking and new home setup. Starting from ₹1,199. Get a quotation on WhatsApp.",
    intro: [
      "Moving house within Varanasi involves more than a truck. Fragile items need proper packing, furniture has to be carried through narrow staircases and lanes, and once everything arrives the new home still has to be put back together.",
      "SetoraHome plans the move with you on WhatsApp, packs and transports your belongings, and can stay on to unpack and set up the essentials so your first night in the new home feels settled.",
    ],
    included: [
      { title: "Packing & moving", text: "Cartons, wrapping and labelling for kitchenware, clothes, electronics and fragile items." },
      { title: "Loading & unloading", text: "Careful handling of furniture, appliances and boxes at both addresses." },
      { title: "Local shifting", text: "Moves within Varanasi and nearby areas, planned around your preferred date." },
      { title: "Unpacking", text: "Boxes opened and items placed room by room, as you direct." },
      { title: "New home setup", text: "Help arranging furniture and essentials so the house is usable on day one." },
    ],
    benefits: [
      { title: "One plan for the whole move", text: "Packing, transport and setup are coordinated together instead of through separate vendors." },
      { title: "Quotation before the move", text: "Share your item list or a quick video call walk-through and receive a quotation before work begins." },
      { title: "Flexible add-ons", text: "Combine shifting with cleaning of the old or new home, or decluttering before you pack." },
    ],
    process: [
      { title: "Tell us about the move", text: "Send both localities, floor and lift details, your preferred date and a rough list of items on WhatsApp." },
      { title: "Get your quotation", text: "We confirm the scope, vehicle size, packing material and manpower, then share the final price." },
      { title: "Pack and move", text: "The team packs, loads, transports and unloads on the agreed day." },
      { title: "Settle in", text: "If you chose unpacking or setup, the team helps arrange the new home before leaving." },
    ],
    priceFactors: [
      "Home size and number of items",
      "Distance between the two addresses",
      "Floor level and lift availability at both ends",
      "Packing material required and fragile or high-value items",
      "Whether unpacking and setup are included",
    ],
    faqs: [
      { q: "Do you handle local house shifting within Varanasi?", a: "Yes. Local shifting within Varanasi is the core of this service. For moves outside the city, message us with the destination and we will confirm whether we can help." },
      { q: "How is the final shifting price decided?", a: "The ₹1,199 figure is a starting price for a small, simple job. The final quotation depends on the number of items, distance, floors, packing material and any unpacking or setup you add. You receive it before the move." },
      { q: "Can you pack only, without transport?", a: "Yes. You can book packing, loading, unpacking or setup as separate tasks. Tell us exactly what you need on WhatsApp." },
      { q: "How early should I book?", a: "Share your preferred date as early as possible, especially around festivals and month-end when many families move. We will confirm availability on WhatsApp." },
    ],
    related: ["cleaning-home-maintenance", "home-organisation", "scrap-old-items"],
  },
  {
    slug: "home-organisation",
    name: "Home Organisation",
    shortName: "Home Organisation",
    startingPrice: 599,
    image: "/images/services/home-organisation.webp",
    imageAlt:
      "SetoraHome organisers arranging folded clothes in a wardrobe and labelled storage jars on kitchen shelves",
    summary:
      "Wardrobe and kitchen organisation, decluttering and room sorting that make everyday life easier.",
    metaTitle: "Wardrobe & Kitchen Organisation in Varanasi",
    metaDescription:
      "Home organisation in Varanasi: wardrobe organisation, kitchen organisation, decluttering, room sorting and new home setup. Starting from ₹599. Book on WhatsApp.",
    intro: [
      "Overflowing wardrobes, crowded kitchen shelves and rooms that never stay tidy make daily routines slower. Organisation is less about buying containers and more about deciding what stays, where it lives and how it stays that way.",
      "SetoraHome helps you sort, declutter and arrange one space or the whole home, working with the storage you already have and your family's routine.",
    ],
    included: [
      { title: "Wardrobe organisation", text: "Clothes sorted by type, season and use; folding and hanging systems that are easy to maintain." },
      { title: "Kitchen organisation", text: "Shelves, drawers and pantry items grouped so everyday cooking needs are within reach." },
      { title: "Room sorting", text: "Bedrooms, study areas and storage rooms sorted and arranged." },
      { title: "Decluttering", text: "Help deciding what to keep, donate or discard, with scrap removal available separately." },
      { title: "New home setup", text: "Unpacked items placed thoughtfully after a move." },
    ],
    benefits: [
      { title: "Works with your space", text: "We organise around your existing cupboards and shelves and only suggest storage items if they genuinely help." },
      { title: "You stay in control", text: "Nothing is discarded without your approval." },
      { title: "Pairs with other services", text: "Combine with deep cleaning, scrap pickup or home shifting." },
    ],
    process: [
      { title: "Share photos", text: "Send photos of the wardrobe, kitchen or room you want organised on WhatsApp." },
      { title: "Agree on the scope", text: "We suggest the time and team needed and share a quotation." },
      { title: "Sort and arrange", text: "Items are emptied, sorted, cleaned where needed and arranged into zones." },
      { title: "Walk-through", text: "We show you where everything now lives so the system is easy to keep up." },
    ],
    priceFactors: [
      "Number and size of spaces to organise",
      "Volume of items",
      "Whether storage products are needed",
      "Whether decluttered items need to be removed",
    ],
    faqs: [
      { q: "Do I need to buy organisers or containers?", a: "Not necessarily. We first work with what you have. If boxes, dividers or jars would clearly help, we will suggest them and you decide." },
      { q: "Can you organise just one wardrobe or the kitchen?", a: "Yes. You can book a single space. The ₹599 starting price applies to a small, single-area job; larger spaces are quoted after seeing photos." },
      { q: "Do I need to be at home?", a: "We recommend being available, at least at the start, so you can decide what to keep and how you like things arranged." },
    ],
    related: ["cleaning-home-maintenance", "scrap-old-items", "home-shifting-relocation"],
  },
  {
    slug: "cleaning-home-maintenance",
    name: "Cleaning & Home Maintenance",
    shortName: "Cleaning",
    startingPrice: 499,
    image: "/images/services/cleaning-home-maintenance.webp",
    imageAlt:
      "SetoraHome cleaning team wiping a table, mopping the floor and cleaning windows in a bright living room",
    summary:
      "Home deep cleaning, regular cleaning, bathroom and kitchen cleaning, balconies and upkeep.",
    metaTitle: "Home Deep Cleaning Services in Varanasi",
    metaDescription:
      "Home cleaning in Varanasi: deep cleaning, bathroom & kitchen cleaning, furniture, balcony and regular upkeep. Starting from ₹499. Book a cleaning on WhatsApp.",
    intro: [
      "Dust, hard-water stains and kitchen grease build up quickly in Varanasi homes, especially around festivals, after monsoon and before or after a move.",
      "SetoraHome offers one-time deep cleaning and smaller targeted jobs such as a bathroom, kitchen or balcony, along with general home upkeep.",
    ],
    included: [
      { title: "Home deep cleaning", text: "Room-by-room cleaning of floors, surfaces, fixtures, fans and reachable fittings." },
      { title: "Regular cleaning", text: "Lighter cleaning visits for ongoing upkeep." },
      { title: "Bathroom & kitchen cleaning", text: "Tiles, sinks, taps, counters and stain-prone areas." },
      { title: "Furniture & surface cleaning", text: "Dusting and wiping of furniture, shelves and surfaces." },
      { title: "Balcony cleaning", text: "Floors, railings and corners cleared of dust and debris." },
      { title: "General home maintenance", text: "Small upkeep tasks discovered during cleaning can be added, or booked through Repair & Maintenance." },
    ],
    benefits: [
      { title: "Book only what you need", text: "A single bathroom or the full home, each quoted separately." },
      { title: "Good before festivals and moves", text: "Combine with home shifting or organisation for a fresh start." },
      { title: "Clear scope in writing", text: "The areas to be cleaned are confirmed on WhatsApp before the visit." },
    ],
    process: [
      { title: "Choose the areas", text: "Tell us the home size and which rooms or areas need cleaning." },
      { title: "Receive a quotation", text: "Photos help us estimate time and team size for an accurate price." },
      { title: "Cleaning visit", text: "The team arrives at the agreed time and works through the confirmed list." },
      { title: "Check together", text: "Walk through the cleaned areas and point out anything that needs another look." },
    ],
    priceFactors: [
      "Home size and number of rooms",
      "Deep cleaning versus light cleaning",
      "Condition of the areas, such as heavy stains or post-renovation dust",
      "Specific add-ons such as balcony or furniture cleaning",
    ],
    faqs: [
      { q: "What does the ₹499 starting price cover?", a: "It is the entry price for a small, single-area job. Full-home deep cleaning is quoted based on home size and condition. You will see the final price before booking." },
      { q: "Do you bring cleaning materials?", a: "Please confirm this on WhatsApp when booking, as it depends on the type of cleaning and any specific products you prefer us to use." },
      { q: "Can I book cleaning after shifting into a new home?", a: "Yes. Move-in and move-out cleaning is a common request and can be combined with Home Shifting & Relocation." },
    ],
    related: ["home-organisation", "repair-maintenance", "home-shifting-relocation"],
  },
  {
    slug: "repair-maintenance",
    name: "Repair & Maintenance",
    shortName: "Repairs",
    startingPrice: 129,
    image: "/images/services/repair-maintenance.webp",
    imageAlt:
      "SetoraHome technician with a tool belt fixing the plumbing under a kitchen sink",
    summary:
      "Electrical repairs, plumbing, fan installation, fittings and fixtures, furniture assembly and general fixes.",
    metaTitle: "Electrician & Plumber Services in Varanasi",
    metaDescription:
      "Home repairs in Varanasi: electrical repair, plumbing, fan installation, fittings, furniture assembly and general maintenance. Starting from ₹129. Book on WhatsApp.",
    intro: [
      "A leaking tap, a switch that sparks, a fan that needs installing or a bed that needs assembling: small repairs are easy to postpone but they affect everyday comfort and safety.",
      "Send a photo or short video of the problem on WhatsApp and SetoraHome will arrange a visit for electrical, plumbing and general home repairs.",
    ],
    included: [
      { title: "Electrical repair", text: "Switches, sockets, wiring faults and lighting points." },
      { title: "Plumbing", text: "Leaking taps, blocked drains, flush and pipe-fitting issues." },
      { title: "Fan installation", text: "Ceiling and wall fan installation or replacement." },
      { title: "Fittings & fixtures", text: "Curtain rods, mirrors, shelves, taps and bathroom accessories." },
      { title: "Furniture assembly", text: "Beds, wardrobes, tables and flat-pack furniture." },
      { title: "General maintenance", text: "Small fixes around the home that do not need a specialist contractor." },
    ],
    benefits: [
      { title: "Photo-first diagnosis", text: "A photo or video helps us understand the job and send the right person." },
      { title: "Price confirmed before work", text: "Visit charges and any parts are explained before the repair starts." },
      { title: "One contact for many fixes", text: "Group several small jobs into a single visit." },
    ],
    process: [
      { title: "Describe the problem", text: "Send a photo, video or short description on WhatsApp." },
      { title: "Schedule a visit", text: "Pick a convenient slot; we confirm the expected charges." },
      { title: "Inspect and quote", text: "If the job turns out larger or needs parts, you approve the revised quotation first." },
      { title: "Repair and test", text: "The fix is completed and tested in front of you." },
    ],
    priceFactors: [
      "Type and complexity of the repair",
      "Spare parts or materials required",
      "Number of tasks in the same visit",
      "Access, such as height or concealed wiring and pipes",
    ],
    note:
      "Major electrical rewiring, gas-line work or structural repairs may need licensed specialists. We will tell you honestly if a job is outside what our team should handle.",
    faqs: [
      { q: "Is ₹129 the total price for a repair?", a: "₹129 is the starting price for the simplest jobs. The final amount depends on the repair and any parts needed, and is confirmed before work begins." },
      { q: "Can I book several small repairs together?", a: "Yes, and it is usually more convenient. List all the tasks on WhatsApp so we can plan the visit." },
      { q: "Do you supply spare parts?", a: "Parts can be arranged when needed and are quoted separately, or you can provide your own." },
    ],
    related: ["cleaning-home-maintenance", "home-shifting-relocation", "home-organisation"],
  },
  {
    slug: "doorstep-car-washing",
    name: "Doorstep Car Washing",
    shortName: "Car Washing",
    startingPrice: 399,
    image: "/images/services/doorstep-car-washing.webp",
    imageAlt:
      "SetoraHome team foam-washing a black SUV with a pressure washer outside a home, with a branded service van behind",
    summary:
      "Car and bike washing, interior cleaning, wax, polish and detailing at your home or society parking.",
    metaTitle: "Doorstep Car Washing & Cleaning in Varanasi",
    metaDescription:
      "Doorstep car washing in Varanasi: exterior wash, interior cleaning, bike washing, wax, polish and detailing at your parking spot. Starting from ₹399. Book on WhatsApp.",
    intro: [
      "Taking the car to a washing centre means traffic, queues and waiting. Dust from roads and construction means many Varanasi car owners need regular washes.",
      "SetoraHome brings car and bike washing to your doorstep, whether that is a driveway, a society parking area or the space outside your home.",
    ],
    included: [
      { title: "Car washing", text: "Exterior wash and wipe-down." },
      { title: "Bike washing", text: "Two-wheeler cleaning at the same visit." },
      { title: "Interior cleaning", text: "Vacuuming, dashboard and seat cleaning." },
      { title: "Wax & polish", text: "A finishing coat for a cleaner shine." },
      { title: "Detailing", text: "Closer attention to wheels, trims and interiors on request." },
    ],
    benefits: [
      { title: "No trip to a car wash", text: "The service comes to where your vehicle is parked." },
      { title: "Choose your package", text: "Exterior only, interior only or a combination." },
      { title: "Cars and bikes together", text: "Book several vehicles in one visit." },
    ],
    process: [
      { title: "Share vehicle details", text: "Tell us the vehicle type, the wash you want and where it is parked." },
      { title: "Confirm slot and price", text: "We check space and water access and confirm the quotation." },
      { title: "Wash at your doorstep", text: "The team arrives with its equipment and completes the agreed package." },
      { title: "Final check", text: "Inspect the vehicle with the team before they leave." },
    ],
    priceFactors: [
      "Vehicle type: hatchback, sedan, SUV or two-wheeler",
      "Exterior, interior or full package",
      "Add-ons such as wax, polish or detailing",
      "Number of vehicles in the same visit",
    ],
    note:
      "Please check that your society or building allows vehicle washing in the parking area, and let us know about water and power access when booking.",
    faqs: [
      { q: "Do you wash cars inside housing society parking?", a: "Yes, where the society permits it. Let us know the parking location and water access when you book." },
      { q: "Do you wash bikes and scooters too?", a: "Yes. Two-wheeler washing can be booked on its own or with a car wash." },
      { q: "What is included in the ₹399 starting price?", a: "It is the starting price for a basic wash. Interior cleaning, larger vehicles and add-ons such as wax or detailing change the final quotation." },
    ],
    related: ["cleaning-home-maintenance", "repair-maintenance", "gardening-plant-care"],
  },
  {
    slug: "gardening-plant-care",
    name: "Gardening & Plant Care",
    shortName: "Gardening",
    startingPrice: 299,
    image: "/images/services/gardening-plant-care.webp",
    imageAlt:
      "SetoraHome gardener in gloves tending potted plants and flowers on a sunny terrace garden",
    summary:
      "Balcony plants, terrace gardens, plant arrangement and regular garden maintenance.",
    metaTitle: "Gardening & Plant Care Services in Varanasi",
    metaDescription:
      "Gardening in Varanasi: balcony plants, terrace garden care, plant arrangement and garden maintenance by SetoraHome. Starting from ₹299. Book on WhatsApp.",
    intro: [
      "Balcony and terrace plants in Varanasi go through intense summer heat, heavy monsoon rain and cool winters. Without regular care, pots dry out, waterlog or become overgrown.",
      "SetoraHome helps you set up, maintain and refresh balcony, terrace and small home gardens.",
    ],
    included: [
      { title: "Balcony plants", text: "Potting, repotting and arranging plants for small spaces." },
      { title: "Garden maintenance", text: "Weeding, pruning, trimming and clearing leaves." },
      { title: "Plant arrangement", text: "Grouping and placing plants for light, airflow and appearance." },
      { title: "Terrace garden care", text: "Care for larger collections of pots and planters on rooftops." },
    ],
    benefits: [
      { title: "One-time or repeat visits", text: "Book a single refresh or regular maintenance visits." },
      { title: "Season-aware care", text: "Advice on watering and protection through summer and monsoon." },
      { title: "Tidy finish", text: "Leaves and garden waste cleared after the work." },
    ],
    process: [
      { title: "Send photos", text: "Share photos of your balcony, terrace or garden and what you want done." },
      { title: "Get a quotation", text: "We estimate time and any soil, pots or plants needed." },
      { title: "Garden visit", text: "The gardener completes the agreed work." },
      { title: "Care tips", text: "Simple watering and sunlight guidance for your plants." },
    ],
    priceFactors: [
      "Number of pots or garden area",
      "One-time visit or repeat maintenance",
      "Soil, manure, pots or new plants required",
      "Removal of garden waste",
    ],
    faqs: [
      { q: "Can you look after plants while I travel?", a: "Message us your travel dates and plant count. We will confirm whether visits can be scheduled while you are away." },
      { q: "Do you supply plants and pots?", a: "They can be arranged on request and are quoted separately from the service charge." },
      { q: "What does ₹299 cover?", a: "It is the starting price for a small balcony visit. Larger terraces and gardens are quoted after we see photos." },
    ],
    related: ["cleaning-home-maintenance", "home-organisation", "scrap-old-items"],
  },
  {
    slug: "senior-citizen-care",
    name: "Senior Citizen Care",
    shortName: "Senior Care",
    startingPrice: 299,
    image: "/images/services/senior-citizen-care.webp",
    imageAlt:
      "SetoraHome care assistant gently supporting a smiling elderly man walking with a cane at home",
    summary:
      "Daily assistance, errands and medicine pickup, appointment support and companionship for elders.",
    metaTitle: "Senior Citizen Care & Assistance in Varanasi",
    metaDescription:
      "Senior citizen assistance in Varanasi: daily help, errands, medicine pickup, appointment support and companionship. Ideal for families living in other cities. From ₹299.",
    intro: [
      "Many parents and grandparents in Varanasi live on their own while their children work in other cities or abroad. Everyday tasks such as collecting medicines, paying bills or reaching an appointment can become difficult.",
      "SetoraHome provides non-medical support for senior citizens, and family members can book and coordinate it on WhatsApp from wherever they live.",
    ],
    included: [
      { title: "Daily assistance", text: "Help with everyday household tasks and routines." },
      { title: "Errands & medicine pickup", text: "Collecting medicines, groceries and documents." },
      { title: "Appointment support", text: "Accompanying elders to clinics, banks and other appointments." },
      { title: "Companionship", text: "Time for conversation, walks and a familiar face." },
    ],
    benefits: [
      { title: "Book from anywhere", text: "Family members outside Varanasi can arrange and follow up on WhatsApp." },
      { title: "Respectful, patient help", text: "Support at the pace your parents are comfortable with." },
      { title: "Flexible duration", text: "A single errand, a few hours or recurring visits." },
    ],
    process: [
      { title: "Tell us about your family member", text: "Share their locality, what help they need and any important preferences." },
      { title: "Agree the plan", text: "We confirm timings, tasks and the quotation with you." },
      { title: "Visit or errand", text: "The assistant helps as agreed." },
      { title: "Update to family", text: "You receive an update on WhatsApp after the visit." },
    ],
    priceFactors: [
      "Hours of support or number of errands",
      "One-time or recurring visits",
      "Travel involved for errands and appointments",
    ],
    note:
      "This is non-medical assistance. It does not replace a doctor, nurse or trained medical attendant. In an emergency call 112 (national emergency) or 108 (ambulance).",
    faqs: [
      { q: "Can I book help for my parents while I live in another city?", a: "Yes. This is one of the main reasons families use the service. You can book, share instructions and receive updates on WhatsApp." },
      { q: "Do your assistants provide medical or nursing care?", a: "No. Senior Citizen Care covers non-medical help such as errands, appointment support and companionship. For nursing care please consult a licensed provider." },
      { q: "What does ₹299 cover?", a: "It is the starting price for a short visit or single errand. Longer or recurring support is quoted based on hours and tasks." },
    ],
    related: ["patient-hospital-assistance", "cleaning-home-maintenance", "repair-maintenance"],
  },
  {
    slug: "patient-hospital-assistance",
    name: "Patient Assistance & Hospital Support",
    shortName: "Patient Assistance",
    startingPrice: 999,
    image: "/images/services/patient-hospital-assistance.webp",
    imageAlt:
      "SetoraHome assistant pushing an elderly patient in a wheelchair at a hospital entrance",
    summary:
      "Help with hospital visits, doctor appointments, queues, paperwork and care assistance for patients.",
    metaTitle: "Patient & Hospital Assistance in Varanasi",
    metaDescription:
      "Non-medical patient assistance in Varanasi: help with hospital visits, doctor appointments, queues, paperwork and pharmacy runs. Starting from ₹999. Book on WhatsApp.",
    intro: [
      "Varanasi is a major healthcare destination for eastern Uttar Pradesh, Bihar and neighbouring regions. Patients and families often arrive from outside the city and must manage registrations, queues, tests and pharmacy runs in an unfamiliar place.",
      "SetoraHome provides non-medical assistance so that patients and their families have an extra pair of hands during hospital visits and appointments.",
    ],
    included: [
      { title: "Hospital visits", text: "Accompanying the patient during visits, tests and follow-ups." },
      { title: "Doctor appointments", text: "Help with registration, queues and reaching the right department." },
      { title: "Medical visit support", text: "Pharmacy runs, report collection and carrying documents. This is not clinical care." },
      { title: "Care assistance", text: "Mobility and wheelchair support and company for the patient." },
    ],
    benefits: [
      { title: "Support for out-of-town families", text: "Useful when relatives are travelling to Varanasi or cannot be present." },
      { title: "Less time lost in queues", text: "An assistant handles running around while the family stays with the patient." },
      { title: "Clear updates", text: "Families receive updates on WhatsApp during the day." },
    ],
    process: [
      { title: "Share the details", text: "Tell us the hospital or clinic, date, timings and what help is needed." },
      { title: "Confirm the plan", text: "We confirm availability, hours and the quotation." },
      { title: "On the day", text: "The assistant meets the patient or family and supports them as agreed." },
      { title: "Wrap-up", text: "Documents and medicines are handed over and the family gets a final update." },
    ],
    priceFactors: [
      "Number of hours or days of support",
      "Hospital location and travel involved",
      "Tasks such as pharmacy runs, report collection or overnight help",
    ],
    note:
      "SetoraHome assistants are not doctors or nurses and do not provide medical treatment, give injections or make clinical decisions. In an emergency call 112 or 108 immediately.",
    faqs: [
      { q: "Is this a nursing or medical service?", a: "No. Patient Assistance is non-medical support such as accompanying patients, managing queues and paperwork and running errands. Medical care must be provided by the hospital or a licensed professional." },
      { q: "Can you help families coming to Varanasi from other cities?", a: "Yes. Share the hospital, dates and patient's needs on WhatsApp and we will confirm what support we can arrange." },
      { q: "Why does this service start at ₹999?", a: "It usually involves several hours of an assistant's time and travel. The final quotation depends on duration and tasks." },
    ],
    related: ["senior-citizen-care", "cleaning-home-maintenance", "home-shifting-relocation"],
  },
  {
    slug: "scrap-old-items",
    name: "Scrap & Old Items",
    shortName: "Scrap Pickup",
    startingPrice: 99,
    image: "/images/services/scrap-old-items.webp",
    imageAlt:
      "SetoraHome team loading an old wooden cabinet and household items into a pickup truck",
    summary:
      "Scrap pickup, old furniture and bulky-item removal, appliance disposal and decluttering support.",
    metaTitle: "Scrap Pickup & Old Item Removal in Varanasi",
    metaDescription:
      "Scrap pickup and old item removal in Varanasi: old furniture, bulky items, appliances and decluttering. Starting from ₹99. Book a doorstep pickup on WhatsApp.",
    intro: [
      "Old newspapers, broken furniture, unused appliances and renovation leftovers take up valuable space. Finding someone to collect bulky items, especially from upper floors, can be a hassle.",
      "SetoraHome arranges doorstep pickup of scrap and old household items so you can free up space without the running around.",
    ],
    included: [
      { title: "Scrap pickup", text: "Paper, cardboard, metal, plastic and other household scrap." },
      { title: "Old furniture", text: "Removal of beds, sofas, tables and cupboards you no longer need." },
      { title: "Bulky-item removal", text: "Large items carried down and loaded for you." },
      { title: "Appliance disposal", text: "Old electronics and appliances collected for disposal or recycling." },
      { title: "Decluttering", text: "Help sorting what goes, often combined with Home Organisation." },
    ],
    benefits: [
      { title: "Doorstep collection", text: "No need to carry heavy items down or find transport." },
      { title: "Responsible handling", text: "Items are sent onward for reuse or recycling wherever possible." },
      { title: "Before or after a move", text: "Clear out unwanted items before packing or after settling in." },
    ],
    process: [
      { title: "Share photos", text: "Send photos of the items and your locality on WhatsApp." },
      { title: "Get a quotation", text: "We confirm pickup charges or the value of recyclable scrap, as applicable." },
      { title: "Pickup", text: "The team collects and loads items at the agreed time." },
      { title: "Done", text: "Your space is cleared." },
    ],
    priceFactors: [
      "Type and volume of items",
      "Floor level and carrying distance",
      "Whether disassembly is needed",
      "Value of any recyclable scrap",
    ],
    faqs: [
      { q: "What kinds of items do you pick up?", a: "Household scrap such as paper, cardboard, metal and plastic, along with old furniture, bulky items and appliances. Send photos if you are unsure." },
      { q: "What does the ₹99 starting price mean?", a: "It is the starting price for a small pickup. The final amount depends on the items, volume and effort involved, and is confirmed before pickup." },
      { q: "Can you remove items from upper floors?", a: "Yes. Tell us the floor and whether there is a lift so we can plan manpower." },
    ],
    related: ["home-organisation", "home-shifting-relocation", "cleaning-home-maintenance"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const generalFaqs: Faq[] = [
  { q: "Which areas do you serve?", a: "SetoraHome is launching in Varanasi, Uttar Pradesh. Share your locality or pincode on WhatsApp and we will confirm whether we can reach you." },
  { q: "How do I book a service?", a: "Tap any WhatsApp button, choose your service and share your locality, preferred date and a few details or photos. We reply with availability and the final quotation." },
  { q: "Are the listed prices final?", a: "No. Prices shown are \"starting from\" amounts for simple jobs. The final price depends on the work involved and is always shared with you before the service begins." },
  { q: "Do you take online payments on this website?", a: "No. There is no online checkout on the website. Payment terms are confirmed with you directly when your booking is confirmed." },
  { q: "Can I book for my parents or family in Varanasi while I live elsewhere?", a: "Yes. Many services, including Senior Citizen Care and Patient Assistance, can be booked and coordinated entirely on WhatsApp." },
];
