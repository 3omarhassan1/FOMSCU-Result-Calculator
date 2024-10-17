// hold elements
let basicPer = document.getElementById("basicPer");
let obgynGrade = document.getElementById("obgynGrade");
let pedGrade = document.getElementById("pedGrade");
let occuGrade = document.getElementById("occuGrade");
let commuGrade = document.getElementById("commuGrade");
let famPedGrade = document.getElementById("famPedGrade");
let famObgynGrade = document.getElementById("famObgynGrade");
let sur1Grade = document.getElementById("sur1Grade");
let im1Grade = document.getElementById("im1Grade");
let sur2Grade = document.getElementById("sur2Grade");
let im2Grade = document.getElementById("im2Grade");
let erGrade = document.getElementById("erGrade");
let core1Grade = document.getElementById("core1Grade");
let core2Grade = document.getElementById("core2Grade");
//
let sur1Dyn = document.getElementById("sur1Dyn");
let sur1Stat = document.getElementById("sur1Stat");
let sur1Mcq = document.getElementById("sur1Mcq");
let sur1Meq = document.getElementById("sur1Meq");
//
let im1Dyn = document.getElementById("im1Dyn");
let im1Stat = document.getElementById("im1Stat");
let im1Mcq = document.getElementById("im1Mcq");
let im1Meq = document.getElementById("im1Meq");
//
let pedDyn = document.getElementById("pedDyn");
let pedStat = document.getElementById("pedStat");
let pedMcq = document.getElementById("pedMcq");
let pedMeq = document.getElementById("pedMeq");
//
let obgynDyn = document.getElementById("obgynDyn");
let obgynStat = document.getElementById("obgynStat");
let obgynMcq = document.getElementById("obgynMcq");
let obgynMeq = document.getElementById("obgynMeq");
//
let commuStat = document.getElementById("commuStat");
let commuMcq = document.getElementById("commuMcq");
let commuMeq = document.getElementById("commuMeq");
//
let occuStat = document.getElementById("occuStat");
let occuMcq = document.getElementById("occuMcq");
let occuMeq = document.getElementById("occuMeq");
//
let famObgynDyn = document.getElementById("famObgynDyn");
let famObgynStat = document.getElementById("famObgynStat");
let famObgynMcq = document.getElementById("famObgynMcq");
let famObgynMeq = document.getElementById("famObgynMeq");
//
let famPedDyn = document.getElementById("famPedDyn");
let famPedStat = document.getElementById("famPedStat");
let famPedMcq = document.getElementById("famPedMcq");
let famPedMeq = document.getElementById("famPedMeq");
//
let sur2Dyn = document.getElementById("sur2Dyn");
let sur2Stat = document.getElementById("sur2Stat");
let sur2Mcq = document.getElementById("sur2Mcq");
let sur2Meq = document.getElementById("sur2Meq");
//
let im2Dyn = document.getElementById("im2Dyn");
let im2Stat = document.getElementById("im2Stat");
let im2Mcq = document.getElementById("im2Mcq");
let im2Meq = document.getElementById("im2Meq");
//
let erDyn = document.getElementById("erDyn");
let erStat = document.getElementById("erStat");
let erMcq = document.getElementById("erMcq");
let erMeq = document.getElementById("erMeq");
//
let core1Dyn = document.getElementById("core1Dyn");
let core1Stat = document.getElementById("core1Stat");
let core1Mcq = document.getElementById("core1Mcq");
let core1Meq = document.getElementById("core1Meq");
//
let core2Dyn = document.getElementById("core2Dyn");
let core2Stat = document.getElementById("core2Stat");
let core2Mcq = document.getElementById("core2Mcq");
let core2Meq = document.getElementById("core2Meq");
//
let upEnd = document.getElementById("upEnd");
let lowEnd = document.getElementById("lowEnd");
//
let upGrade = document.getElementById("upGrade");
let lowGrade = document.getElementById("lowGrade");
//
let cUpEnd = document.getElementById("cUpEnd");
let cLowEnd = document.getElementById("cLowEnd");
//
let sur1UpEnd = document.getElementById("sur1UpEnd");
let Sur1LowEnd = document.getElementById("sur1LowEnd");
//
let im1UpEnd = document.getElementById("im1UpEnd");
let im1LowEnd = document.getElementById("im1LowEnd");
//
let obgynUpEnd = document.getElementById("obgynUpEnd");
let obgynLowEnd = document.getElementById("obgynLowEnd");
//
let pedUpEnd = document.getElementById("pedUpEnd");
let pedLowEnd = document.getElementById("pedLowEnd");
//
let famObgynUpEnd = document.getElementById("famObgynUpEnd");
let famObgynLowEnd = document.getElementById("famObgynLowEnd");
//
let famPedUpEnd = document.getElementById("famPedUpEnd");
let famPedLowEnd = document.getElementById("famPedLowEnd");
//
let commuUpEnd = document.getElementById("commuUpEnd");
let commuLowEnd = document.getElementById("commuLowEnd");
//
let occuUpEnd = document.getElementById("occuUpEnd");
let occuLowEnd = document.getElementById("occuLowEnd");
//
let sur2UpEnd = document.getElementById("sur2UpEnd");
let Sur2LowEnd = document.getElementById("sur2LowEnd");
//
let im2UpEnd = document.getElementById("im2UpEnd");
let im2LowEnd = document.getElementById("im2LowEnd");
//
let erUpEnd = document.getElementById("erUpEnd");
let erLowEnd = document.getElementById("erLowEnd");
//
let core1UpEnd = document.getElementById("core1UpEnd");
let core1LowEnd = document.getElementById("core1LowEnd");
//
let core2UpEnd = document.getElementById("core2UpEnd");
let core2LowEnd = document.getElementById("core2LowEnd");
// //
// let testUpEnd = document.getElementById("testUpEnd");
// let testLowEnd = document.getElementById("testLowEnd");
//
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

//creating objects//
let calc = function calculate() {
  const sur1 = {
    name: "sur1",
    htmlUp: sur1UpEnd,
    htmlLow: sur1LowEnd,
    htmlUp: sur1UpEnd,
    htmlLow: Sur1LowEnd,
    grade: sur1Grade.value,
    upPeriod: gradeToUpBorder(sur1Grade.value),
    lowPeriod: gradeToLowBorder(sur1Grade.value),
    dynamic: (sur1Dyn.value / 20) * 100,
    static: (sur1Stat.value / 30) * 100,
    mcq: (sur1Mcq.value / 80) * 100,
    meq: (sur1Meq.value / 10) * 100,
  };

  const im1 = {
    name: "im1",
    htmlUp: im1UpEnd,
    htmlLow: im1LowEnd,
    grade: im1Grade.value,
    upPeriod: gradeToUpBorder(im1Grade.value),
    lowPeriod: gradeToLowBorder(im1Grade.value),
    dynamic: (im1Dyn.value / 20) * 100,
    static: (im1Stat.value / 30) * 100,
    mcq: (im1Mcq.value / 80) * 100,
    meq: (im1Meq.value / 10) * 100,
  };

  const obgyn = {
    name: "obgyn",
    htmlUp: obgynUpEnd,
    htmlLow: obgynLowEnd,
    grade: obgynGrade.value,
    upPeriod: gradeToUpBorder(obgynGrade.value),
    lowPeriod: gradeToLowBorder(obgynGrade.value),
    dynamic: (obgynDyn.value / 10) * 100,
    static: (obgynStat.value / 20) * 100,
    mcq: (obgynMcq.value / 80) * 100,
    meq: (obgynMeq.value / 3) * 100,
  };

  const ped = {
    name: "ped",
    htmlUp: pedUpEnd,
    htmlLow: pedLowEnd,
    grade: pedGrade.value,
    upPeriod: gradeToUpBorder(pedGrade.value),
    lowPeriod: gradeToLowBorder(pedGrade.value),
    dynamic: (pedDyn.value / 10) * 100,
    static: (pedStat.value / 20) * 100,
    mcq: (pedMcq.value / 80) * 100,
    meq: (pedMeq.value / 3) * 100,
  };

  const commu = {
    name: "commu",
    htmlUp: commuUpEnd,
    htmlLow: commuLowEnd,
    grade: commuGrade.value,
    upPeriod: gradeToUpBorder(commuGrade.value),
    lowPeriod: gradeToLowBorder(commuGrade.value),
    // dynamic: commuDyn.value / 10*100,
    static: (commuStat.value / 15) * 100,
    mcq: (commuMcq.value / 40) * 100,
    meq: (commuMeq.value / 3) * 100,
  };

  const occu = {
    name: "occu",
    htmlUp: occuUpEnd,
    htmlLow: occuLowEnd,
    grade: occuGrade.value,
    upPeriod: gradeToUpBorder(occuGrade.value),
    lowPeriod: gradeToLowBorder(occuGrade.value),
    // dynamic: occuDyn.value / 10*100,
    static: (occuStat.value / 15) * 100,
    mcq: (occuMcq.value / 40) * 100,
    meq: (occuMeq.value / 3) * 100,
  };

  const famObgyn = {
    name: "famObgyn",
    htmlUp: famObgynUpEnd,
    htmlLow: famObgynLowEnd,
    grade: famObgynGrade.value,
    upPeriod: gradeToUpBorder(famObgynGrade.value),
    lowPeriod: gradeToLowBorder(famObgynGrade.value),
    dynamic: (famObgynDyn.value / 5) * 100,
    static: (famObgynStat.value / 1) * 1000,
    mcq: (famObgynMcq.value / 40) * 100,
    meq: (famObgynMeq.value / 3) * 100,
  };

  const famPed = {
    name: "famPed",
    htmlUp: famPedUpEnd,
    htmlLow: famPedLowEnd,
    grade: famPedGrade.value,
    upPeriod: gradeToUpBorder(famPedGrade.value),
    lowPeriod: gradeToLowBorder(famPedGrade.value),
    dynamic: (famPedDyn.value / 5) * 100,
    static: (famPedStat.value / 1) * 1000,
    mcq: (famPedMcq.value / 40) * 100,
    meq: (famPedMeq.value / 3) * 100,
  };

  const sur2 = {
    name: "sur2",
    htmlUp: sur2UpEnd,
    htmlLow: sur2LowEnd,
    grade: sur2Grade.value,
    upPeriod: gradeToUpBorder(sur2Grade.value),
    lowPeriod: gradeToLowBorder(sur2Grade.value),
    dynamic: (sur2Dyn.value / 20) * 100,
    static: (sur2Stat.value / 30) * 100,
    mcq: (sur2Mcq.value / 120) * 100,
    meq: (sur2Meq.value / 9) * 100,
  };

  const im2 = {
    name: "im2",
    htmlUp: im2UpEnd,
    htmlLow: im2LowEnd,
    grade: im2Grade.value,
    upPeriod: gradeToUpBorder(im2Grade.value),
    lowPeriod: gradeToLowBorder(im2Grade.value),
    dynamic: (im2Dyn.value / 20) * 100,
    static: (im2Stat.value / 30) * 100,
    mcq: (im2Mcq.value / 120) * 100,
    meq: (im2Meq.value / 12) * 100,
  };

  const er = {
    name: "er",
    htmlUp: erUpEnd,
    htmlLow: erLowEnd,
    grade: erGrade.value,
    upPeriod: gradeToUpBorder(erGrade.value),
    lowPeriod: gradeToLowBorder(erGrade.value),
    dynamic: (erDyn.value / 20) * 100,
    static: (erStat.value / 30) * 100,
    mcq: (erMcq.value / 120) * 100,
    meq: (erMeq.value / 9) * 100,
  };

  const core1 = {
    name: "core1",
    htmlUp: core1UpEnd,
    htmlLow: core1LowEnd,
    grade: core1Grade.value,
    upPeriod: gradeToUpBorder(core1Grade.value),
    lowPeriod: gradeToLowBorder(core1Grade.value),
    dynamic: (core1Dyn.value / 10) * 100,
    static: (core1Stat.value / 20) * 100,
    mcq: (core1Mcq.value / 120) * 100,
    meq: (core1Meq.value / 11) * 100,
  };

  const core2 = {
    name: "core2",
    htmlUp: core2UpEnd,
    htmlLow: core2LowEnd,
    grade: core2Grade.value,
    upPeriod: gradeToUpBorder(core2Grade.value),
    lowPeriod: gradeToLowBorder(core2Grade.value),
    dynamic: (core2Dyn.value / 10) * 100,
    static: (core2Stat.value / 20) * 100,
    mcq: (core2Mcq.value / 120) * 100,
    meq: (core2Meq.value / 11) * 100,
  };

  const test = {
    name: "test",
    htmlUp: testUpEnd,
    htmlLow: testLowEnd,
    grade: "B",
    upPeriod: gradeToUpBorder("B"),
    lowPeriod: gradeToLowBorder("B"),
    dynamic: (5 / 10) * 100,
    static: (10 / 20) * 100,
    mcq: (70 / 120) * 100,
    meq: (7 / 11) * 100,
  };

  let modules = [
    sur1,
    im1,
    obgyn,
    ped,
    famObgyn,
    famPed,
    commu,
    occu,
    sur2,
    im2,
    er,
    core1,
    core2,
    // test,
  ];

  modules.forEach((mod) => {
    if (mod.dynamic) {
      mod.finalResult =
        mod.dynamic * 0.36 + mod.static * 0.24 + mod.mcq * 0.3 + mod.meq * 0.1;
    } else {
      mod.finalResult = mod.static * 0.6 + mod.mcq * 0.3 + mod.meq * 0.1;
    }
    if (mod.finalResult) {
      mod.upEnd = mod.finalResult * 0.25 + mod.upPeriod * 0.75;
      mod.lowEnd = mod.finalResult * 0.25 + mod.lowPeriod * 0.75;
    } else {
      mod.upEnd = mod.upPeriod;
      mod.lowEnd = mod.lowPeriod;
    }
    mod.htmlUp.innerText = Math.round(mod.upEnd);
    mod.htmlLow.innerText = Math.round(mod.lowEnd);
  });

  let clinicalUp =
    sur1.upEnd * 16.46 +
    im1.upEnd * 16.46 +
    obgyn.upEnd * 9.87 +
    ped.upEnd * 9.87 +
    (famObgyn.upEnd * 6.85) / 2 +
    (famPed.upEnd * 6.85) / 2 +
    occu.upEnd * 3.29 +
    commu.upEnd * 3.29 +
    sur2.upEnd * 5.7 +
    im2.upEnd * 5.7 +
    er.upEnd * 5.7 +
    core1.upEnd * 8.54 +
    core2.upEnd * 8.54;

  cUpEnd.innerText = Math.round(clinicalUp / 100);

  let clinicalLow =
    sur1.lowEnd * 16.46 +
    im1.lowEnd * 16.46 +
    obgyn.lowEnd * 9.87 +
    ped.lowEnd * 9.87 +
    (famObgyn.lowEnd * 6.85) / 2 +
    (famPed.lowEnd * 6.85) / 2 +
    occu.lowEnd * 3.29 +
    commu.lowEnd * 3.29 +
    sur2.lowEnd * 5.7 +
    im2.lowEnd * 5.7 +
    er.lowEnd * 5.7 +
    core1.lowEnd * 8.54 +
    core2.lowEnd * 8.54;

  cLowEnd.innerText = Math.round(clinicalLow / 100);

  upEnd.innerText = Math.round((basicPer.value * 40 + clinicalUp * 0.6) / 100);
  lowEnd.innerText = Math.round(
    (basicPer.value * 40 + clinicalLow * 0.6) / 100
  );

  if (upEnd.innerText >= 85) {
    upGrade.innerText = "A";
  } else if (upEnd.innerText >= 75) {
    upGrade.innerText = "B";
  } else if (upEnd.innerText >= 65) {
    upGrade.innerText = "C";
  } else if (upEnd.innerText >= 55) {
    upGrade.innerText = "D";
  } else if (upEnd.innerText >= 50) {
    upGrade.innerText = "E";
  } else if (upEnd.innerText < 50) {
    upGrade.innerText = "F";
  }

  if (lowEnd.innerText >= 85) {
    lowGrade.innerText = "A";
  } else if (lowEnd.innerText >= 75) {
    lowGrade.innerText = "B";
  } else if (lowEnd.innerText >= 65) {
    lowGrade.innerText = "C";
  } else if (lowEnd.innerText >= 55) {
    lowGrade.innerText = "D";
  } else if (lowEnd.innerText >= 50) {
    lowGrade.innerText = "E";
  } else if (lowEnd.innerText < 50) {
    lowGrade.innerText = "F";
  }

  function gradeToUpBorder(grade) {
    switch (grade) {
      case "A":
        return 100;
      case "B":
        return 85;
      case "C":
        return 75;
      case "D":
        return 65;
      case "E":
        return 55;
      case "F":
        return 50;
    }
  }

  function gradeToLowBorder(grade) {
    switch (grade) {
      case "A":
        return 85;
      case "B":
        return 75;
      case "C":
        return 65;
      case "D":
        return 55;
      case "E":
        return 50;
      case "F":
        return 50;
    }
  }
};
let resetForm = function () {
  document.getElementById("form").reset;
};
submit.addEventListener("click", (e) => {
  calc();
});
reset.addEventListener("click", resetForm);
