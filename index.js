const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
return kittens()
}

function destructivelyAppendKitten(name) {
kittens.push('Ralph');
return destructivelyAppendKitten
}


function destructivelyPrependKitten(name) {
kittens.unshift("Bob")
return destructivelyPrependKitten
}

function destructivelyRemoveLastKitten() {
kittens.pop(0, kittens.length - 1)
return destructivelyRemoveLastKitten
}

