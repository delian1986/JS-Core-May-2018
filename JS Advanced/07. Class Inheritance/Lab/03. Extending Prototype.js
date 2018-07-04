function extendingPrototype(ClassToExtend) {
    ClassToExtend.prototype.species = "Human";
    ClassToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}