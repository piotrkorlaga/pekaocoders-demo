import scss  from 'rollup-plugin-scss';

export default {
    input: 'src/main.js',
    output: {
        file: 'docs/main.min.js',
        format: 'umd'
    },
    plugins: [
        scss({
            output: 'docs/main.css'
        }),
    ]
};
