
// PUNTO UNO //
let usuarios = ''

for (let i = 0; i < 20; i++) {
  const firstName= faker.name.firstName()
  const city = faker.address.city()
  const jobTitle = faker.name.jobTitle()
  const streetAddress = faker.address.streetAddress()
  const phoneNumber = faker.phone.phoneNumber()
  const email = faker.internet.email()
  const amount = faker.finance.amount()
  const number = faker.random.number()

  usuarios += `{ firstName: "${firstName}", city: "${city}", jobTitle: "${jobTitle}", streetAddress: "${streetAddress}", phoneNumber: "${phoneNumber}", email: "${email}", amount: "${amount}", number: "${number}"},`
}

console.log(usuarios)

// PUNTO DOS //
//{ firstName: "Peter", city: "Satterfieldberg", jobTitle: "Human Communications Liaison", streetAddress: "181 Hessel Plains", phoneNumber: "1-921-821-6522", email: "Carmen_Kulas@hotmail.com", amount: "929.38", number: "26360"},{ firstName: "Isac", city: "New Cathy", jobTitle: "Investor Response Supervisor", streetAddress: "62902 Greenholt Street", phoneNumber: "995.774.1005 x6668", email: "Kendra86@gmail.com", amount: "299.09", number: "11"},{ firstName: "Halle", city: "Schmidtton", jobTitle: "Human Paradigm Representative", streetAddress: "8302 Noemie Crossroad", phoneNumber: "(236) 792-5912 x387", email: "Joana32@yahoo.com", amount: "593.68", number: "27695"},{ firstName: "Isai", city: "West Lenny", jobTitle: "National Division Agent", streetAddress: "97932 Wuckert Coves", phoneNumber: "932-507-0951", email: "Angela.Nitzsche1@yahoo.com", amount: "734.54", number: "92983"},{ firstName: "Robert", city: "Lake Jadynton", jobTitle: "Global Configuration Consultant", streetAddress: "784 Virgil Brooks", phoneNumber: "657.769.0521", email: "Charlotte.Ritchie@yahoo.com", amount: "992.37", number: "70864"},{ firstName: "Deontae", city: "South Joaquin", jobTitle: "Chief Quality Planner", streetAddress: "4940 Jacobson Court", phoneNumber: "986-898-2127 x334", email: "Brennan.Bogisich@gmail.com", amount: "259.73", number: "17665"},{ firstName: "Lafayette", city: "Port Earnestine", jobTitle: "Forward Integration Architect", streetAddress: "87975 Autumn Junctions", phoneNumber: "1-466-669-5717 x586", email: "Andres.Lehner@gmail.com", amount: "129.96", number: "55788"},{ firstName: "Jakob", city: "Lake Eloisefurt", jobTitle: "Future Accountability Developer", streetAddress: "7129 Brooklyn Green", phoneNumber: "343.608.4571 x09474", email: "Loma_Parker@hotmail.com", amount: "749.57", number: "93806"},{ firstName: "Belle", city: "Prohaskaberg", jobTitle: "Internal Implementation Specialist", streetAddress: "954 Langosh Fords", phoneNumber: "1-813-554-9975 x6216", email: "Gussie20@gmail.com", amount: "767.69", number: "42049"},{ firstName: "Akeem", city: "Lakinfort", jobTitle: "Corporate Paradigm Officer", streetAddress: "300 Rodriguez Flat", phoneNumber: "656.961.9984 x9164", email: "Kara_Boyer@gmail.com", amount: "174.46", number: "61811"},{ firstName: "Teresa", city: "Nadertown", jobTitle: "Customer Infrastructure Consultant", streetAddress: "42358 Caleigh Meadow", phoneNumber: "1-661-555-1691 x8110", email: "Camylle12@hotmail.com", amount: "329.39", number: "88850"},{ firstName: "Hayden", city: "West Marianeville", jobTitle: "Direct Response Facilitator", streetAddress: "52028 Kayli Plains", phoneNumber: "758.484.6957 x98859", email: "Jessica53@hotmail.com", amount: "650.05", number: "96223"},{ firstName: "Oren", city: "North Enastad", jobTitle: "Chief Tactics Designer", streetAddress: "832 Alize Spurs", phoneNumber: "1-676-974-9724 x8710", email: "Abdullah.Kreiger33@hotmail.com", amount: "537.37", number: "32789"},{ firstName: "Vern", city: "South Carmellahaven", jobTitle: "Regional Tactics Developer", streetAddress: "90240 Keebler Squares", phoneNumber: "561-558-5413", email: "Deshaun.Leuschke82@hotmail.com", amount: "83.47", number: "35994"},{ firstName: "Harrison", city: "South Erica", jobTitle: "Internal Usability Designer", streetAddress: "07912 Wiza Turnpike", phoneNumber: "651-810-5451 x8883", email: "Marshall_Casper@yahoo.com", amount: "914", number: "12008"},{ firstName: "Toni", city: "Jaynemouth", jobTitle: "Senior Functionality Analyst", streetAddress: "93271 Linnea Mills", phoneNumber: "1-356-531-6436", email: "Merl.Pacocha18@hotmail.com", amount: "614.38", number: "88419"},{ firstName: "Lavon", city: "North Orville", jobTitle: "Senior Directives Developer", streetAddress: "3300 Anastacio Junctions", phoneNumber: "(376) 983-3750 x04535", email: "Therese.Oberbrunner20@gmail.com", amount: "428.69", number: "19896"},{ firstName: "Virgie", city: "West Lenorachester", jobTitle: "Senior Integration Assistant", streetAddress: "393 McKenzie Village", phoneNumber: "358-328-4373", email: "Gunner_Bergnaum57@hotmail.com", amount: "66.2", number: "94564"},{ firstName: "Craig", city: "South Leanna", jobTitle: "Investor Communications Planner", streetAddress: "44294 Sydni Mission", phoneNumber: "(907) 236-4896", email: "Joyce_Hegmann@hotmail.com", amount: "434.69", number: "16083"},{ firstName: "Leanne", city: "New Henderson", jobTitle: "International Assurance Executive", streetAddress: "9744 Rath Park", phoneNumber: "327-927-5122", email: "Blanca_Heaney65@hotmail.com", amount: "890.65", number: "78114"},]) //

//PUNTO 3//

db.products.update({ciudad:"bogota"},{$inc:{amount *10%}})

//PUNTO 4//

db.contactos.find({"number": "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18" }).remove() 

db.contactos.remove("number": "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18" )