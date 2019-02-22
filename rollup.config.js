import scss  from 'rollup-plugin-scss';

export default {
    input: 'src/main.js',
    output: {
        file: 'public/main.min.js',
        format: 'umd'
    },
    plugins: [
        scss({
            output: 'public/main.css'
        }),
    ]
};
