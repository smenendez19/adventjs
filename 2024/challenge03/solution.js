function organizeInventory(inventory) {
    const output = {}
    for (const obj of inventory) {
        if (obj["category"] in output) {
          obj["name"] in output[obj["category"]] ? 
            output[obj["category"]][obj["name"]] += obj["quantity"] :
            output[obj["category"]][obj["name"]] = obj["quantity"]
          }
        else {
          output[obj["category"]] = {}
          output[obj["category"]][obj["name"]] = obj["quantity"]
        }
    }
    return output
}

module.exports = organizeInventory;