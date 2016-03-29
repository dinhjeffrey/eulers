/* Lattice Paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/


/*
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28
9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33
14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34
15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36
17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38
19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39
20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40
21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41
*/

/* Solution http://stackoverflow.com/questions/2200236/project-euler-15
we know that in total we will have 40 steps to reach the finish -- 20 increases in x, 20 increases in y.

The only question is which of the 40 are the 20 increases in x. The problem amounts to: how many different ways can you choose 20 elements out of a set of 40 elements. (The elements are: step 1, step 2, etc. and we're choosing, say, the ones that are increases in x).

There's a formula for this: it's the binomial coefficient with 40 on top and 20 on the bottom. The formula is 40!/((20!)(40-20)!), in other words 40!/(20!)^2. Here ! represents factorial. (e.g., 5! = 5*4*3*2*1)

Canceling out one of the 20! and part of the 40!, this becomes: (40*39*38*37*36*35*34*33*32*31*30*29*28*27*26*25*24*23*22*21)/(20*19*18*17*16*15*14*13*12*11*10*9*8*7*6*5*4*3*2*1). The problem is thus reduced to simple arithmatic. The answer is 137,846,528,820.

For comparison, note that (4*3)/(2*1) gives the answer from their example, 6
*/

function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

var ans = factorial(40) / (factorial(20) * factorial(20))
console.log(ans)