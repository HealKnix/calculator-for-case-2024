import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useResultsStore = defineStore('results', () => {
  const total = ref({
    totalCosts: 0,
    totalProfit: 0,
    netIncome: 0,
  });
  const addInfo = ref({
    costsOfWellPads: 0,
    costsOfNewWells: 0,
    costOfWellAbandonment: 0,
    lossesFromKRSofAllOldWells: 0,
    roadCostsForTenYears: 0,
    transmissionLineCosts: 0,
  });

  function calculateProfit(
    gasCost,
    numberOfWellPads,
    wellFlowRate,
    roadLength,
  ) {
    const costOfOneWellPads = (75_000_000 / numberOfWellPads) * 5; // 21
    const costsOfWellPads = numberOfWellPads * costOfOneWellPads; // 22
    const COST_OF_ONE_NEW_WELL = 300_000_000; // 23
    const NumberOfNewWells = numberOfWellPads * 4; // 24
    const costsOfNewWells = COST_OF_ONE_NEW_WELL * NumberOfNewWells; // 25
    const numberOfAbandonedWells = NumberOfNewWells; // 26
    const COSTS_OF_ABANDONED_WELLS = 30_000_000; // 27
    const costOfWellAbandonment =
      numberOfAbandonedWells * COSTS_OF_ABANDONED_WELLS; // 28
    const COST_OF_ElECTRIFICATION_OF_OLD_WELL = 7_000_000; // 29
    const COST_OF_INSTALLING_LEVEL_TWO_BARRIER = 60_000_000; // 30
    const numberOfOldWellsInOperation = 50 - numberOfAbandonedWells; // 31
    const cattleLossesDuringTheNextTenYearsOfOperation = 1_542_180_000; // 32
    const lossesFromKRSofAllOldWells =
      cattleLossesDuringTheNextTenYearsOfOperation *
      numberOfOldWellsInOperation; // 33
    const profitOfOneWellForTenYears = gasCost * wellFlowRate * 365 * 10; // 34
    const maintenanceOfOneKmOfRoadForTenYears = 2500000 * 10; // 35
    const COST_OF_ONE_KM_OF_ROAD = 50_000_000; // 36
    const roadCostsForTenYears =
      roadLength *
      (COST_OF_ONE_KM_OF_ROAD + maintenanceOfOneKmOfRoadForTenYears); // 37
    const CostOfOneKmOfTransmissionLine = 5_000_000; // 38
    const transmissionLineCosts = CostOfOneKmOfTransmissionLine * roadLength; // 39

    const totalCosts =
      costsOfWellPads +
      costsOfNewWells +
      costOfWellAbandonment +
      lossesFromKRSofAllOldWells +
      roadCostsForTenYears +
      transmissionLineCosts;
    const totalProfit = profitOfOneWellForTenYears * 50;
    const netIncome = totalProfit - totalCosts;

    total.value = {
      totalCosts: totalCosts,
      totalProfit: totalProfit,
      netIncome: netIncome,
    };
    addInfo.value = {
      costsOfWellPads: costsOfWellPads,
      costsOfNewWells: costsOfNewWells,
      costOfWellAbandonment: costOfWellAbandonment,
      lossesFromKRSofAllOldWells: lossesFromKRSofAllOldWells,
      roadCostsForTenYears: roadCostsForTenYears,
      transmissionLineCosts: transmissionLineCosts,
    };
  }

  return { total, addInfo, calculateProfit };
});
