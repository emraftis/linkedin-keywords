const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndustryGrowthRateSchema = new Schema({
  country_code: String,
  country_name: String,
  wb_region: String,
  wb_income: String,
  isic_section_index: String,
  isic_section_name: String,
  industry_id: String,
  industry_name: String,
  growth_rate_2015: String,
  growth_rate_2016: String,
  growth_rate_2017: String,
  growth_rate_2018: String,
  growth_rate_2019: String,
});

module.exports = mongoose.model("IndustryGrowthRate", IndustryGrowthRateSchema);
