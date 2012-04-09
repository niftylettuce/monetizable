
// # Retailers

module.exports = function(db) {
  var Url = db.SchemaTypes.Url,
  Retailers = new db.Schema({
      name: {
        type: String,
        required: true,
        unique: true
      },
      raw_url: {
        type: Url,
        unique: true,
        required: true,
        lowercase: true
      },
      affiliate_url: {
        type: Url,
        unique: true,
        required: true,
        lowercase: true
      },
      subid: String,
      created: { type: Date, default: Date.now },
      updated: { type: Date, default: Date.now }
  });
  return db.model('Retailers', Retailers);
};