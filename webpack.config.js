const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:  {
    index: './src/index.js',
    user: './src/classes/user.js',
    Project: './src/classes/project.js',
    Task: './src/classes/task.js',
    askForContinue:'./src/components/askForContinue.js',
    clearContainers: './src/components/clearContainers.js',
    closeAndRefresh:'./src/components/closeAndRefresh.js',
    createContainer: './src/components/createContainer.js',
    deleteObjects: './src/components/deleteObjects.js',
    newProject:'./src/components/newProject.js',
    newTask:'./src/components/newTask.js',
    prepareForTask:'./src/components/preAddTask.js',
    printUser:'./src/components/printing.js',
    printProList:'./src/components/printProject.js',
    printSearch:'./src/components/printSearch.js',
    sendDataToLocal: './src/components/sendDataToLocal.js',
    settingAsComplete: './src/components/settingComplete.js',
    sortObjects: './src/components/sortObjects.js',
    todayTasks: './src/components/todayTasks.js',
    weekTasks: './src/components/weekTasks.js',
   },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
   
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
    ],
  },
};