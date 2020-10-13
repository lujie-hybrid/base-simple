const chalk = require("chalk");
const shell = require("shelljs");
const inquirer = require("inquirer");
const branch = shell
  .exec("git rev-parse --abbrev-ref HEAD")
  .toString()
  .replace(/\s+/, "");

if (!shell.which("git") || !shell.which("npm")) {
  shell.echo(chalk.red("Error:-------需要git和npm,请先安装--------"));
  shell.exit(1);
}

if (shell.exec("npm run lint").code !== 0) {
  //执行npm run build 命令
  shell.echo(
    chalk.red(
      "Error: --------代码规范校验失败，请检查修改不符合规范的地方--------"
    )
  );
  shell.exit(1);
}
shell.echo(chalk.green("Success: --------代码校验成功--------"));
if (shell.exec("npm run build").code !== 0) {
  //执行npm run build 命令
  shell.echo(chalk.red("Error: --------打包失败--------"));
  shell.exit(1);
}
shell.echo(chalk.green("Success: --------打包文件成功--------"));
shell.exec("git add -A");
shell.echo(chalk.green("Success: --------add代码到git--------"));

inquirer
  .prompt([
    {
      type: "input",
      name: "gitCommit",
      message: chalk.blue("请输入git提交的message")
    }
  ])
  .then(answers => {
    const message = answers.gitCommit;
    shell.exec(`git commit -m '--------打包文件:${message}--------'`);
    shell.echo(chalk.green("Success: --------commit代码到git--------"));
    if (shell.exec("git push origin " + branch).code !== 0) {
      //执行npm run build 命令
      shell.echo(chalk.red("Error: --------推送远程仓库失败--------"));
      shell.exec("git status");
      shell.exit(1);
    }
    shell.echo(
      chalk.green(`Success: --------成功推送到远程仓库${branch}--------`)
    );
  });
