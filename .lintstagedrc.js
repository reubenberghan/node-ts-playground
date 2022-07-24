module.exports = {
  '*!(.js|.ts)': 'prettier --write --ignore-unknown',
  '*.{js,ts}': ['prettier --write', 'eslint --fix'],
  '*.ts': () => 'tsc -p tsconfig.json --noEmit',
}
