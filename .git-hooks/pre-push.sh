#!/bin/bash

# 当前分支名称
current_branch_name=$(git rev-parse --abbrev-ref HEAD)
# 远端分支id
origin_branch_id=$(git rev-parse --short origin/"$current_branch_name" 2>/dev/null)
# 待检测的提交id
diff_id=""

if [ $origin_branch_id ]; then
  echo "检测到远端分支:origin/"$current_branch_name""
  diff_id=$(git merge-base -a HEAD $origin_branch_id)
else
  echo "拉取最新远端信息..."
  git fetch
  base_commit_id=$(git merge-base -a HEAD origin/master)
  echo '未获取到远端分支，使用创建commit时的起始分支id'
  diff_id=$base_commit_id
fi

echo "diff_id: "$diff_id""

# 获取包含wip提交的代码
commit=$(git rev-list -n 1 --grep '--wip--' $diff_id..HEAD)

if [ $commit ]; then
  echo -e '\033[0;31m检测到该分支包含临时提交代码（使用gwip产生的commit）'
  git rev-list --format=%B --max-count=1 $commit
  echo -e '\033[1;33m 如果该检测误判了，请反馈我，并使用git push --no-verify 来推送代码即可'
  exit 1
fi
