const tailwindcss = require("tailwindcss");
const { __esModule } = require("tailwindcss/lib/processTailwindFeatures");

module.exports = {
    plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")]
};