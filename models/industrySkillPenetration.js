const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndustrySkillPenetrationSchema = new Schema({
  year: String,
  isic_section_index: String,
  isic_section_name: String,
  industry_name: String,
  skill_group_category: String,
  skill_group_name: String,
  skill_group_penetration_rate: String,
});

module.exports = mongoose.model(
  "IndustrySkillPenetration",
  IndustrySkillPenetrationSchema
);
