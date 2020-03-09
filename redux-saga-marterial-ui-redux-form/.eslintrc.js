module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
    extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
	rules: {
		semi: 0, //chấm phẩy cuối dòng
		quotes: [2, "double"], //ngoặc kép
        "react/prop-types": 0, //check prop-types
        "react/jsx-max-props-per-line": 0, //check prop tối đa ở 1 dòng
        "linebreak-style": 0, //xuống dòng - abnb
        "import/no-extraneous-dependencies": 0,
        "no-tabs": 0,
        "indent": 0,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "comma-dangle": 0,
        "react/object-curly-spacing": 0,
        "object-curly-spacing": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-filename-extension": 0,
        "arrow-parens": 0,
        "arrow-body-style": 0,
        "import/no-useless-path-segments": 0,
        "react/state-in-constructor": 0,
        "react/sort-comp": 0,
        "class-methods-use-this": 0,
        "react/jsx-one-expression-per-line": 0
	}
}
