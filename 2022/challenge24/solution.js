function canExit(maze) {
    const node = {
        "x": 0,
        "y": 0,
        "type": "",
        "neighbors": [],
        "gscore": 0,
        "fscore": 0
    }

    let grid = new Array(maze.length)

    maze.forEach((row, i) => {
        grid[i] = new Array(maze[i].length)
        row.forEach((_, j) => {
            grid[i][j] = Object.create(node)
            grid[i][j].x = i
            grid[i][j].y = j
            grid[i][j].type = maze[i][j]
            grid[i][j].neighbors = []
        })
    })

    grid.forEach((row, i) => {
        row.forEach((_, j) => {
            if (i > 0) {
                grid[i][j].neighbors.push(grid[i - 1][j])
            }
            if (i < grid.length - 1) {
                grid[i][j].neighbors.push(grid[i + 1][j])
            }
            if (j > 0) {
                grid[i][j].neighbors.push(grid[i][j - 1])
            }
            if (j < grid.length - 1) {
                grid[i][j].neighbors.push(grid[i][j + 1])
            }
        })
    })

    const findNode = (grid, type) => {
        let foundNode
        grid.forEach(row => {
            let value = row.find(node => node.type === type)
            if (value)
                foundNode = value
        })
        return foundNode
    }

    const getDistance = (node1, node2) => {
        let d1 = Math.abs(node1.x - node2.x);
        let d2 = Math.abs(node1.y - node2.y);
        return d1 + d2;
    }

    const getMinFScore = (nodes) => {
        return nodes.reduce((prev, curr) =>
            prev.fscore < curr.fscore ? prev : curr);
    }

    const startNode = findNode(grid, "S")
    const exitNode = findNode(grid, "E")

    let open = [startNode]
    let closed = []

    while (open.length > 0) {
        let next = getMinFScore(open)
        closed.push(next)
        open = open.filter(item => item != next)
        if (next.type === "E") {
            return true
        }
        next.neighbors.forEach(neighbor => {
            let gscore = next.gscore + 1

            if (!closed.includes(neighbor) && neighbor.type !== "W")
                if (!open.includes(neighbor)) {
                    neighbor.gscore = gscore;
                    neighbor.fscore =
                        neighbor.gscore +
                        getDistance(neighbor, exitNode);
                    open.push(neighbor);
                }
        })
    }
    return false
}

module.exports = canExit
