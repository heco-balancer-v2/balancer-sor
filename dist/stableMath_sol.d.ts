import { BigNumber } from './utils/bignumber';
/**********************************************************************************************
    // invariant                                                                                 //
    // D = invariant to compute                                                                  //
    // A = amplifier                n * D^2 + A * n^n * S * (n^n * P / D^(n−1))                  //
    // S = sum of balances         ____________________________________________                  //
    // P = product of balances    (n+1) * D + ( A * n^n − 1)* (n^n * P / D^(n−1))                //
    // n = number of tokens                                                                      //
    **********************************************************************************************/
export declare function _invariant(
    amp: BigNumber, // amp
    balances: BigNumber[]
): BigNumber;
export declare function _invariantValueFunction(
    amp: BigNumber, // amp
    balances: BigNumber[], // balances
    D: BigNumber
): BigNumber;
/**********************************************************************************************
    // inGivenOut token x for y - polynomial equation to solve                                   //
    // ax = amount in to calculate                                                               //
    // bx = balance token in                                                                     //
    // x = bx + ax                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               x^2 + ( S - ----------  - 1) * x -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but x                                                           //
    // P = product of final balances but x                                                       //
    **********************************************************************************************/
export declare function _inGivenOut(
    amp: BigNumber,
    balances: BigNumber[],
    tokenIndexIn: number,
    tokenIndexOut: number,
    tokenAmountOut: BigNumber
): BigNumber;
/**********************************************************************************************
    // outGivenIn token x for y - polynomial equation to solve                                   //
    // ay = amount out to calculate                                                              //
    // by = balance token out                                                                    //
    // y = by - ay                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               y^2 + ( S - ----------  - 1) * y -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but y                                                           //
    // P = product of final balances but y                                                       //
    **********************************************************************************************/
export declare function _outGivenIn(
    amp: BigNumber,
    balances: BigNumber[],
    tokenIndexIn: number,
    tokenIndexOut: number,
    tokenAmountIn: BigNumber
): BigNumber;
export declare function _solveAnalyticalBalance(
    sum: BigNumber,
    inv: BigNumber,
    amp: BigNumber,
    n_pow_n: BigNumber,
    p: BigNumber
): BigNumber;
export declare function _spotPriceAfterSwapInGivenOut(
    amp: BigNumber,
    balances: BigNumber[],
    tokenIndexIn: number,
    tokenIndexOut: number,
    tokenAmountOut: BigNumber
): BigNumber;
export declare function _spotPriceAfterSwapOutGivenIn(
    amp: BigNumber,
    balances: BigNumber[],
    tokenIndexIn: number,
    tokenIndexOut: number,
    tokenAmountIn: BigNumber
): BigNumber;
export declare function _derivativeSpotPriceAfterSwapInGivenOut(
    amp: BigNumber,
    balances: BigNumber[],
    tokenIndexIn: number,
    tokenIndexOut: number,
    tokenAmountOut: BigNumber
): BigNumber;
export declare function _derivativeSpotPriceAfterSwapOutGivenIn(
    amp: BigNumber,
    balances: BigNumber[],
    tokenIndexIn: number,
    tokenIndexOut: number,
    tokenAmountIn: BigNumber
): BigNumber;