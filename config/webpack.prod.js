

console.log(44)
module.exports = {
    mode: 'production',
    plugins: [
        new webpack.HashedModuleIdsPlugin()
    ]
}