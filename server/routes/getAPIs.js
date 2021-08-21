const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get the top ranked skills based on Industry
router.get("/api/top-skills", async (req, res) => {
  let industry = req.query.ind; // Example: " ?ind=Banking "
  const data = await loadIndustrySkills(industry.toString());
  res.send(data);
});

//function to load top industry skills.
async function loadIndustrySkills(industry) {
  const url = process.env.DB_URL;
  const client = await mongodb.MongoClient.connect(url, {
    useNewUrlParser: true,
  });

  const objectList = await client
    .db("myFirstDatabase")
    .collection("industryskillneeds")
    .find({
      industry_name: industry,
    })
    .toArray();

  const skillList = [];
  for (let i = 0; i < objectList.length; i++) {
    if (!skillList.includes(objectList[i].skill_group_name)) {
      skillList.push(objectList[i].skill_group_name);
    }
  }
  return skillList;
}

//API route for industry growth data
router.get("/api/ind-growth", async (req, res) => {
  let country = req.query.country; // Example: " ?ind=Banking "
  let industry = req.query.industry;
  const data = await loadGrowthRates(country.toString(), industry.toString());
  res.send(data);
});

//return growth rate data from MongoDB (single object)
async function loadGrowthRates(country, industry) {
  const url = process.env.DB_URL;
  const client = await mongodb.MongoClient.connect(url, {
    useNewUrlParser: true,
  });

  const object = await client
    .db("myFirstDatabase")
    .collection("industrygrowthrates")
    .find({ country_name: country, industry_name: industry })
    .toArray();

  return object[0];
}

module.exports = router;
