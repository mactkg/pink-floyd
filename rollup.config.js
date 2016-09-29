// JS
import npm      from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel    from 'rollup-plugin-babel';
import vue      from 'rollup-plugin-vue';
import env      from 'rollup-plugin-env';

// CSS
import postcss      from 'rollup-plugin-postcss';
import precss       from 'precss';
import cssnext      from 'postcss-cssnext';
import size         from 'postcss-size';
import lost         from 'lost';
import autoprefixer from 'autoprefixer';

export default {
  entry: 'src/js/main.js',
  dest: 'dist/js/bundle.js',
  plugins: [
    postcss({
      extensions: ['.css', '.sss'],
      extract: './dist/css/main.css',
      sourceMap: true,
      plugins: [
        precss(),
        cssnext({}),
        lost(),
        autoprefixer(),
        size()
      ]
    }),
    npm({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
    env({ NODE_ENV: process.env.NODE_ENV }),
    vue(),
    commonjs(), // CommonJSモジュールをES6に変換
    babel() // ES5に変換
  ]
};
