#!/bin/bash

# https://gist.github.com/dahjelle/8ddedf0aebd488208a9a7c829f19b9e8
echo "ESLint 开始检查待提交文件...";

for file in $(git diff --cached --name-only | grep -E '\.(js|jsx|ts|tsx)$')
do
  if [ -f $file ]; then
    echo "lint:" $file;
    git show ":$file" | node_modules/.bin/eslint --stdin --stdin-filename "$file" # we only want to lint the staged changes, not any un-staged changes
    if [ $? -ne 0 ]; then
      echo "ESLint 检查到文件 '$file' 有错误并退出. 你可以手动运行 npm run lint 进行全面检查"
      echo "如果出现手动删除的文件被 eslint 检查出错误，你可以添加 --no-verify 参数绕过钩子";
      exit 1 # exit with failure status
    fi
  fi
done
