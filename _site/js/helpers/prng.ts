class Prng {
  seed:number

  constructor(seed:number) {
    this.initSeed(seed);
  }

  next():number {
    return this.seed = this.seed * 16807 % 2147483647;
  }

  nextFloat():number {
    return (this.next() - 1) / 2147483646;
  }

  initSeed(seed:number) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) { this.seed += 2147483646 };
  }
}

export default Prng;
