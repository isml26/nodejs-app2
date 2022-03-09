if (process.env.NODE_ENV === 'production') {
  console.log("production");
  module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'ci') {
  console.log("ci");
  module.exports = require('./ci');
} else {
  console.log("dev")
  module.exports = require('./dev');
}
