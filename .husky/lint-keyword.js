const chalk = require('chalk');
const logSymbols = require('log-symbols');
const execa = require('execa');

// 文档：https://xhzy.yuque.com/client-tqrhb/xaaxam/th7fxc

// 输出常用配色文本
const log = {
  info(message) {
    console.log(logSymbols.info, chalk.green(message));
  },
  error(message) {
    console.log(logSymbols.error, chalk.red(message));
  },
  warning(message) {
    console.log(logSymbols.warning, chalk.yellow(message));
  },
};

const change = execa.commandSync('git diff --cached --diff-filter=ACM').stdout.toString();

// 检测console.log和debugger 语句
const logReg = /(\+\s*console\.log.*)|(\+\s*debugger.*)/;
if (logReg.test(change)) {
  log.error('代码中不允许提交console.log 或者debugger 语句:');
  log.error(change.match(logReg)[0]);
  process.exit(1);
}
