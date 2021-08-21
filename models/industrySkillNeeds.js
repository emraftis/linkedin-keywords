const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndustrySkillNeedsSchema = new Schema({
  year: String,
  isic_section_index: String,
  isic_section_name: String,
  industry_name: String,
  skill_group_category: String,
  skill_group_name: String,
  skill_group_rank: String,
});

module.exports = mongoose.model("IndustrySkillNeeds", IndustrySkillNeedsSchema);
