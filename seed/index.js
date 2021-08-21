const industrySkillNeedsData = require("./industrySkillNeeds.js");
const industrySkillPenetrationData = require("./industrySkillPenetration.js");
const industryGrowthRateData = require("./industryGrowthRate.js");
const mongoose = require("mongoose");
const IndustrySkillNeeds = require("../models/industrySkillNeeds.js");
const IndustrySkillPenetration = require("../models/industrySkillPenetration.js");
const IndustryGrowthRate = require("../models/industryGrowthRate.js");

mongoose.connect(
  "mongodb+srv://user1:gottago@cluster0.vlkxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Local MongoDB Connected");
});

//***SEED FOR THE INDUSTRY SKILL NEEDS***

// const seedDBIndustrySkillNeeds = async () => {
//   //   await db.industryskillneeds.deleteMany({});

//   for (let i = 0; i < industrySkillNeedsData.length; i++) {
//     const entry = new IndustrySkillNeeds({
//       year: industrySkillNeedsData[i].year,
//       isic_section_index: industrySkillNeedsData[i].isic_section_index,
//       isic_section_name: industrySkillNeedsData[i].isic_section_name,
//       industry_name: industrySkillNeedsData[i].industry_name,
//       skill_group_category: industrySkillNeedsData[i].skill_group_category,
//       skill_group_name: industrySkillNeedsData[i].skill_group_name,
//       skill_group_rank: industrySkillNeedsData[i].skill_group_rank,
//     });
//     await entry.save();
//   }
// };

// seedDBIndustrySkillNeeds().then(() => {
//   mongoose.connection.close();
// });

//***SEED FOR THE INDUSTRY SKILL PENETRATION***

// const seedDBIndustrySkillPenetration = async () => {
//   for (let i = 0; i < industrySkillPenetrationData.length; i++) {
//     const entry = new IndustrySkillPenetration({
//       year: industrySkillPenetrationData[i].year,
//       isic_section_index: industrySkillPenetrationData[i].isic_section_index,
//       isic_section_name: industrySkillPenetrationData[i].isic_section_name,
//       industry_name: industrySkillPenetrationData[i].industry_name,
//       skill_group_category:
//         industrySkillPenetrationData[i].skill_group_category,
//       skill_group_name: industrySkillPenetrationData[i].skill_group_name,
//       skill_group_penetration_rate:
//         industrySkillPenetrationData[i].skill_group_penetration_rate,
//     });
//     await entry.save();
//   }
// };

// seedDBIndustrySkillPenetration().then(() => {
//   mongoose.connection.close();
// });

//***SEED FOR THE INDUSTRY GROWTH RATE***

// const seedDBIndustryGrowthRate = async () => {
//   for (let i = 0; i < industryGrowthRateData.length; i++) {
//     const entry = new IndustryGrowthRate({
//       country_code: industryGrowthRateData[i].country_code,
//       country_name: industryGrowthRateData[i].country_name,
//       wb_region: industryGrowthRateData[i].wb_region,
//       wb_income: industryGrowthRateData[i].wb_income,
//       isic_section_index: industryGrowthRateData[i].isic_section_index,
//       isic_section_name: industryGrowthRateData[i].isic_section_name,
//       industry_id: industryGrowthRateData[i].industry_id,
//       industry_name: industryGrowthRateData[i].industry_name,
//       growth_rate_2015: industryGrowthRateData[i].growth_rate_2015,
//       growth_rate_2016: industryGrowthRateData[i].growth_rate_2016,
//       growth_rate_2017: industryGrowthRateData[i].growth_rate_2017,
//       growth_rate_2018: industryGrowthRateData[i].growth_rate_2018,
//       growth_rate_2019: industryGrowthRateData[i].growth_rate_2019,
//     });
//     await entry.save();
//   }
// };

// seedDBIndustryGrowthRate().then(() => {
//   mongoose.connection.close();
// });
