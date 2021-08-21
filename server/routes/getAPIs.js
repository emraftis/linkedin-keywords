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
  const uri =
    "mongodb+srv://user1:gottago@cluster0.vlkxw.mongodb.net/myFirstDatabase";
  const client = await mongodb.MongoClient.connect(uri, {
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
      skillList.push(
        objectList[i].skill_group_name
        // skillCategory: objectList[i].skill_group_category,
      );
    }
  }
  return skillList;
}

// //Get the penetration % based on skill
// router.get("/api/skill-penetration", async (req, res) => {
//   let industry = req.query.ind; // Example: " ?ind=Banking "
//   const data = await loadSkillsPenetration(industry.toString());
//   res.send(data);
// });

//Get the industry growth based on the Country and Industry

router.get("/api/ind-growth", async (req, res) => {
  let country = req.query.country; // Example: " ?ind=Banking "
  let industry = req.query.industry;
  console.log(country, industry);
  const data = await loadGrowthRates(country.toString(), industry.toString());
  res.send(data);
});

async function loadGrowthRates(country, industry) {
  const uri =
    "mongodb+srv://user1:gottago@cluster0.vlkxw.mongodb.net/myFirstDatabase";
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  });

  const object = await client
    .db("myFirstDatabase")
    .collection("industrygrowthrates")
    .find({ country_name: country, industry_name: industry })
    .toArray();

  return object[0];
}

router.get("/api/industry-name-list", async (req, res) => {
  const data = await loadIndustryNameList();
  res.send(data);
});

async function loadIndustryNameList() {
  const uri =
    "mongodb+srv://user1:gottago@cluster0.vlkxw.mongodb.net/myFirstDatabase";
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  });

  const list = await client
    .db("myFirstDatabase")
    .collection("industryskillneeds")
    .find({})
    .toArray();

  const uniqueList = [];
  for (let i = 0; i < list.length; i++) {
    if (!uniqueList.includes(list[i].industry_name)) {
      uniqueList.push(list[i].industry_name);
    }
  }
  return uniqueList;
}

module.exports = router;
