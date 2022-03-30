module.exports = {
    presets:['babel-preset-env', 'babel-preset-react', 'babel-preset-typescript'],

    plugins: [
        "transform-class-properties",
        "transform-object-rest-spread",
        "babel-plugin-transform-class-properties",
        "babel-plugin-transform-object-rest-spread"
    ],
}