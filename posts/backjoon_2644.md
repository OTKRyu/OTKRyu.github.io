---
title: "backjoon_2644.py"
date: "2022-09-23"
tags:
  - algorithm
  - python
  - backjoon
  - dfs
---

# backjoon_2644.py

## problem

촌수계산[https://www.acmicpc.net/problem/2644]

## answer

```
n = int(input())
tx, ty = map(int, input().split(' '))
m = int(input())
parents = {}
childs = {}
result = -1
check = [1 for i in range(n+1)]
for i in range(m):
    x, y = map(int, input().split(' '))
    parents[y] = x
    if childs.get(x):
        childs[x].append(y)
    else:
        childs[x] = [y]

def dfs(tx, cnt):
    global childs, parents, result, ty, check
    check[tx] = 0
    if tx == ty:
        result = cnt
        return 0
    flag = 1
    if childs.get(tx):
        for child in childs[tx]:
            if flag == 1 and check[child] == 1:
                flag = dfs(child, cnt+1)
    if parents.get(tx) and check[parents[tx]] == 1 and flag == 1:
        return dfs(parents[tx], cnt+1)
    return 1

dfs(tx, 0)
print(result)
```

## explanation

촌수계산하는 문제이다.

여러 방법이 있겠지만, dfs 문제로 분류되어 있어서 dfs로 풀었다.

주어진 조건을 보면 일종의 트리를 만들 수 있는데, 시작점과 끝점을 받아 시작점에서 출발해 끝점에 도달하는데 걸리는 횟수를 찾아내면 됐다.

어느쪽을 먼저 돌 것인지는 취향의 차이겠지만, 결국 어디에 끝점이 있을지 알 수 없기 때문에, 자식이 있는 노드의 경우 자식부터 시작해서 전부 찾은 후에, 없으면 부모쪽으로 올라가는 방식을 취했다. 이 때 부모 또한 있을지 없을 지 모르기때문에 부모가 있는 지도 확인해보고 올라가야된다.

촌수 계산이 형제와 부모 관계를 따로 따져야될 것처럼 보이지만, 실제로는 형제라면 부모쪽으로 올라갔다가 자식으로 내려오기 때문에 굳이 따로 따질 필요없이 부모 자식관계만으로 횟수를 제면 충분하다.

추가적으로 dfs가 끝났을 경우에도 추가로 더 돌지 않게 하려고 flag를 줘서 ty를 찾았을 경우 더 돌지 않고 돌아가도록 되어있다.
