function maxGifts(houses) {
    let dp = Array(houses.length + 1).fill(-1)
    const sumGifts = (i) => {
        if (houses.length <= i) return 0
        if (dp[i] !== -1) return dp[i]  
        dp[i] = Math.max(sumGifts(i + 1), sumGifts(i + 2) + houses[i])
        return dp[i]
    }
    const gifts = sumGifts(0)
    return gifts
}


module.exports = maxGifts