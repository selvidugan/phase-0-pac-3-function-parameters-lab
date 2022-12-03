function introduction(name) {
    return `Hi, my name is ${name}.`
 }
 console.log(`Hi, my name is Aki.`);

function introductionWithLanguage(name = "Aki", language = "Ember.js") {
return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(`Hi, my name is Aki and I am learning to program in Ember.js.`)

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

